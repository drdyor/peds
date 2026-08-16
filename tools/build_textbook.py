"""Turn the LEK Last Minute Pediatria PDF into structured JSON for an in-app reader.

Why this exists: the PDF's text layer is fine, but a browser's read-aloud on a 371-page PDF
has no structure to work with - no headings, no sections, no way to say "read this bit". It
reads a page of layout fragments and loses the thread. Extracting the same text into real
sections gives the app something it can read one section at a time, search, and link to.

Heading detection uses the document's own font hierarchy, sampled from the file rather than
assumed: body text is 7.3pt Charter-Roman; 11.2 / 9.2 / 8.0 bold are the three heading levels.

Usage:
    py -3.13 tools/build_textbook.py [--pdf <path>] [--out <path>]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

import fitz

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_PDF = ROOT / "client" / "public_assets" / "lek-last-minute-pediatria.pdf"
DEFAULT_OUT = ROOT / "client" / "public_assets" / "textbook.json"

# Sampled from the file itself; see the module docstring.
LEVEL_BY_SIZE = {11.2: 1, 9.2: 2, 8.0: 3}
BODY_SIZE = 7.3
# Running headers/footers to drop, e.g. "40 | PEDIATRIA"
CHROME = re.compile(r"^\s*\d+\s*\|\s*PEDIATRIA\s*$|^\s*PEDIATRIA\s*\|\s*\d+\s*$", re.I)


def classify(span_size: float, font: str) -> int | None:
    """Return heading level 1-3, or None for body text."""
    rounded = round(span_size, 1)
    for size, level in LEVEL_BY_SIZE.items():
        if abs(rounded - size) < 0.35 and "Bold" in font:
            return level
    return None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", default=str(DEFAULT_PDF))
    ap.add_argument("--out", default=str(DEFAULT_OUT))
    args = ap.parse_args()

    doc = fitz.open(args.pdf)
    sections: list[dict] = []
    current = {"level": 1, "title": "Front matter", "page": 1, "paragraphs": []}

    for page_index in range(doc.page_count):
        page = doc[page_index]
        for block in page.get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                spans = line.get("spans", [])
                if not spans:
                    continue
                text = "".join(s["text"] for s in spans).strip()
                if not text or CHROME.match(text):
                    continue
                lead = spans[0]
                level = classify(lead["size"], lead["font"])
                if level is not None and len(text) < 120:
                    if current["paragraphs"] or current["title"] != "Front matter":
                        sections.append(current)
                    current = {"level": level, "title": text, "page": page_index + 1, "paragraphs": []}
                else:
                    current["paragraphs"].append(text)
    sections.append(current)

    # Merge runt sections: a heading followed by nothing is usually a title that wrapped onto
    # two lines. But an ALL-CAPS heading is a real chapter opener, and merging those glued
    # three unrelated titles together ("References SELECTED PROBLEMS... URINARY CALCULUS..."),
    # so those are kept separate even when they carry no body text of their own.
    def is_chapter_opener(title: str) -> bool:
        letters = [c for c in title if c.isalpha()]
        return len(letters) > 6 and sum(c.isupper() for c in letters) / len(letters) > 0.85

    merged: list[dict] = []
    for section in sections:
        runt = not section["paragraphs"] and len(section["title"]) < 45
        if runt and merged and not is_chapter_opener(section["title"]) and not is_chapter_opener(merged[-1]["title"]):
            merged[-1]["title"] = f"{merged[-1]['title']} {section['title']}".strip()
            continue
        merged.append(section)

    # Join paragraph fragments: the PDF breaks lines, not paragraphs.
    for section in merged:
        joined: list[str] = []
        for para in section["paragraphs"]:
            if joined and not re.match(r"^[•\-–●\dᾞ0]|^[A-Z][a-z]+ [a-z]", para) and len(joined[-1]) < 400 and not joined[-1].endswith((".", ":", "!", "?")):
                joined[-1] = f"{joined[-1]} {para}"
            else:
                joined.append(para)
        section["paragraphs"] = [p for p in joined if p.strip()]

    payload = {
        "title": "LEK Last Minute — Pediatria",
        "note": "English translation of a Polish medical textbook, expanded with memory aids. "
                "Extracted from the PDF for reading and read-aloud; the PDF remains available.",
        "pages": doc.page_count,
        "sections": [s for s in merged if s["paragraphs"]],
    }
    Path(args.out).write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")

    words = sum(len(" ".join(s["paragraphs"]).split()) for s in payload["sections"])
    print(f"pages          : {doc.page_count}")
    print(f"sections       : {len(payload['sections'])}")
    print(f"words captured : {words:,}")
    print(f"by level       : " + ", ".join(
        f"h{lvl}={sum(1 for s in payload['sections'] if s['level'] == lvl)}" for lvl in (1, 2, 3)))
    print(f"out            : {args.out} ({Path(args.out).stat().st_size/1e6:.2f} MB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
