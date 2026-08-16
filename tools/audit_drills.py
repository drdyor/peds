"""Audit the derived source-drill cards against the textbook they were generated from.

Born 2026-08-16 after two drill cards told the reader NOT to give the correct treatment:

    "Do not give 10% calcium gluconate solution in a dose of 1 ml/kg over 10 minutes."
    "Do not give 10% glucose in doses of 2 ml/kg (200 mg/kg)."

Both are correct treatments with a negation attached. The negation came from the SOURCE (the
English translation of LEK Last Minute - Pediatria contradicts itself), so comparing a card to
the source would have called both cards faithful. The defect is only visible when you look for
the source disagreeing with ITSELF, or for a clinical instruction phrased as a prohibition.

What this checks, per card:

  1. NEGATED INSTRUCTION - the answer tells you not to do something that carries a dose,
     route or interval. Those are the gluconate-class errors.
  2. SOURCE SELF-CONTRADICTION - the same drug+dose appears elsewhere in the source with the
     opposite polarity ("Administer X" and "Do not give X").
  3. NOT IN SOURCE - a numeric/dose claim whose numbers cannot be found in the source at all,
     i.e. possibly invented rather than extracted.
  4. DANGLING REFERENCE - text pointing at a table/figure/list that is not on the card.

It ANNOTATES ONLY. Nothing is rewritten; the output is a report for a human to action.

Usage:
    py -3.13 tools/audit_drills.py <source_text.txt> [--out report.md]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
CARDS = ROOT / "client" / "src" / "lib" / "cards.ts"

NEGATION = re.compile(r"\b(do not|don't|never|avoid|should not|must not|is not given|are not given)\b", re.I)
POSITIVE = re.compile(r"\b(administer|give|apply|start|initiate|use)\b", re.I)
# a dose-like fragment: 10% ... 1 ml/kg, 5 mg/kg/24h, 0.2 ml/kg, 8-15 mg/kg/min
DOSE = re.compile(r"\d+(?:[.,]\d+)?\s*(?:%|mg|ml|mcg|µg|g|mmol|iu|units?)\b(?:\s*/\s*kg)?", re.I)
DANGLING = re.compile(r"\b(the (?:table|figure|list|true-set|chart)\s+(?:above|below)|as shown (?:above|below)|listed above)\b", re.I)


def load_cards() -> list[dict]:
    text = CARDS.read_text(encoding="utf-8")
    marker = "export const flashcards: Flashcard[] = "
    start = text.index(marker) + len(marker)
    return json.loads(text[start : text.rindex("];") + 1])


def sentences(blob: str) -> list[str]:
    return [s.strip() for s in re.split(r"(?<=[.;])\s+", blob) if s.strip()]


def numbers_in(text: str) -> set[str]:
    return {n.replace(",", ".") for n in re.findall(r"\d+(?:[.,]\d+)?", text)}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("source", help="extracted plain text of the source textbook")
    ap.add_argument("--out", default=str(ROOT / "DRILL_AUDIT.md"))
    ap.add_argument("--min-id", type=int, default=359, help="derived drills start above this id")
    args = ap.parse_args()

    source = Path(args.source).read_text(encoding="utf-8")
    source_flat = re.sub(r"\s+", " ", source)
    source_low = source_flat.lower()
    source_nums = numbers_in(source_flat)

    cards = load_cards()
    drills = [c for c in cards if c["id"] >= args.min_id]

    findings: list[dict] = []
    for card in drills:
        # Text inside [CORRECTED: ...] quotes the wrong wording on purpose, as the record of
        # what was fixed. Auditing it re-flags every correction forever.
        back = re.sub(r"\[CORRECTED:.*?\]", " ", card["back"], flags=re.S)
        for sentence in sentences(back):
            low = sentence.lower()

            # "use X to avoid overload" is a purpose clause, not a prohibition on the dose.
            purpose = re.search(r"\b(?:to|and|so as to)\s+(?:avoid|prevent)\b", sentence, re.I)
            if NEGATION.search(sentence) and DOSE.search(sentence) and not purpose:
                # does the source state the same thing positively somewhere?
                doses = DOSE.findall(sentence)
                contradiction = None
                for window in re.finditer(re.escape(doses[0].lower()), source_low):
                    seg = source_flat[max(0, window.start() - 260) : window.start() + 160]
                    if POSITIVE.search(seg) and not NEGATION.search(seg):
                        contradiction = " ".join(seg.split())
                        break
                findings.append({
                    "id": card["id"], "kind": "NEGATED INSTRUCTION",
                    "severity": "HIGH" if contradiction else "REVIEW",
                    "text": sentence,
                    "evidence": contradiction or "(no positive statement of the same dose found in the source)",
                })
                continue

            if DANGLING.search(sentence):
                findings.append({"id": card["id"], "kind": "DANGLING REFERENCE", "severity": "LOW",
                                 "text": sentence, "evidence": "points at content that is not on the card"})
                continue

            nums = numbers_in(sentence)
            if nums and not (nums & source_nums):
                findings.append({"id": card["id"], "kind": "NUMBERS NOT IN SOURCE", "severity": "REVIEW",
                                 "text": sentence,
                                 "evidence": "none of %s appear anywhere in the source text" % sorted(nums)[:6]})

    order = {"HIGH": 0, "REVIEW": 1, "LOW": 2}
    findings.sort(key=lambda f: (order[f["severity"]], f["id"]))

    lines = ["# Source-drill audit", "",
             f"Cards audited: **{len(drills)}** (ids >= {args.min_id})  ",
             f"Findings: **{len(findings)}**  ",
             "",
             "Annotations only - nothing in the deck was modified by this script.", "",
             "| severity | card | kind | text | evidence |", "| --- | --- | --- | --- | --- |"]
    for f in findings:
        esc = lambda t: t.replace("|", "\\|")[:300]
        lines.append(f"| {f['severity']} | {f['id']} | {f['kind']} | {esc(f['text'])} | {esc(f['evidence'])} |")
    Path(args.out).write_text("\n".join(lines) + "\n", encoding="utf-8")

    counts: dict[tuple[str, str], int] = {}
    for f in findings:
        counts[(f["severity"], f["kind"])] = counts.get((f["severity"], f["kind"]), 0) + 1
    print(f"audited {len(drills)} drill cards")
    for (sev, kind), n in sorted(counts.items(), key=lambda kv: (order[kv[0][0]], -kv[1])):
        print(f"  {sev:<6} {kind:<24} {n}")
    print(f"report -> {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
