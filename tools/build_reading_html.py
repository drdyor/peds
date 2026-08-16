"""Emit a plain, semantic HTML edition of a study PDF so read-aloud actually works.

Edge's Read Aloud refused to speak the textbook PDF. The PDF itself is fine - every font
carries a ToUnicode map, there are no image-only pages, and ~1,290 characters per page
extract cleanly - so this is the PDF viewer's behaviour, not a broken document. Rather than
fight the viewer, this produces the same content as ordinary HTML: <h1>/<h2>/<p>, which
every read-aloud implementation handles, plus the browser's own reader mode and Ctrl+F.

Headings come from the document's own font hierarchy, sampled per file rather than assumed.

Usage:
    py -3.13 tools/build_reading_html.py <in.pdf> <out.html> --title "..." [--subtitle "..."]
"""
from __future__ import annotations

import argparse
import collections
import html
import re
import sys
from pathlib import Path

import fitz

sys.stdout.reconfigure(encoding="utf-8")

CHROME = re.compile(r"^\s*\d+\s*\|\s*PEDIATRIA\s*$|^\s*PEDIATRIA\s*\|\s*\d+\s*$", re.I)

CSS = """
:root { color-scheme: light; }
* { box-sizing: border-box; }
body { margin: 0; background: #f7f3eb; color: #24293c;
       font: 17px/1.65 "Charter", Georgia, "Times New Roman", serif; }
main { max-width: 46rem; margin: 0 auto; padding: 3rem 1.25rem 6rem; }
header.doc { border-bottom: 2px solid #d9d0bf; padding-bottom: 1.25rem; margin-bottom: 2rem; }
h1 { font-size: 2rem; line-height: 1.15; margin: 0 0 .4rem; letter-spacing: -.02em; }
.sub { margin: 0; color: #6b6656; font-size: .95rem; }
h2 { font-size: 1.45rem; line-height: 1.2; margin: 2.4rem 0 .75rem; letter-spacing: -.015em;
     border-top: 1px solid #e5dccb; padding-top: 1.4rem; }
h3 { font-size: 1.12rem; margin: 1.6rem 0 .5rem; color: #33405f; }
p { margin: 0 0 .8rem; }
.page { color: #a49c8a; font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; }
nav.toc { background: #fffaf0; border: 1px solid #e5dccb; border-radius: .6rem; padding: 1rem 1.25rem; margin-bottom: 2.5rem; }
nav.toc p { font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; color: #8b8471; margin: 0 0 .5rem; }
nav.toc ol { margin: 0; padding-left: 1.2rem; }
nav.toc li { margin: .2rem 0; font-size: .92rem; }
nav.toc a { color: #1647e8; text-decoration: none; }
nav.toc a:hover { text-decoration: underline; }
.tip { background: #fff8e2; border-left: 3px solid #c9a227; padding: .8rem 1rem; margin: 0 0 2rem;
       font-size: .9rem; color: #6b5c2a; }
@media print { body { background: #fff; } nav.toc, .tip { display: none; } }
"""


def build(pdf_path: Path, out_path: Path, title: str, subtitle: str) -> dict:
    doc = fitz.open(pdf_path)

    sizes = collections.Counter()
    for i in range(0, doc.page_count, max(1, doc.page_count // 40)):
        for block in doc[i].get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                for span in line["spans"]:
                    sizes[round(span["size"], 1)] += 1
    body_size = sizes.most_common(1)[0][0]
    heading_sizes = sorted({s for s in sizes if s > body_size + 0.4}, reverse=True)
    # Thresholds relative to the body size, not to the largest heading: keying off the largest
    # meant a single title-page heading set the bar and every real section heading fell below
    # it, which produced a one-entry table of contents.
    h2_min = body_size + 1.5
    h3_min = body_size + 0.4

    parts: list[str] = []
    toc: list[tuple[str, str]] = []
    words = 0
    for page_index in range(doc.page_count):
        for block in doc[page_index].get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                spans = line.get("spans", [])
                if not spans:
                    continue
                text = "".join(s["text"] for s in spans).strip()
                if not text or CHROME.match(text):
                    continue
                words += len(text.split())
                lead = spans[0]
                size = round(lead["size"], 1)
                bold = "Bold" in lead["font"]
                esc = html.escape(text)
                if bold and size >= h3_min and len(text) < 120:
                    level = 2 if size >= h2_min else 3
                    if level == 2:
                        anchor = f"s{len(toc) + 1}"
                        toc.append((anchor, text))
                        parts.append(f'<h2 id="{anchor}">{esc}</h2>')
                    else:
                        parts.append(f"<h3>{esc}</h3>")
                else:
                    parts.append(f"<p>{esc}</p>")
        if page_index % 25 == 0:
            parts.append(f'<p class="page">page {page_index + 1}</p>')

    toc_html = "".join(f'<li><a href="#{a}">{html.escape(t)}</a></li>' for a, t in toc[:120])
    out = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title>
<style>{CSS}</style>
</head>
<body>
<main>
<header class="doc">
<h1>{html.escape(title)}</h1>
<p class="sub">{html.escape(subtitle)}</p>
</header>
<p class="tip">This is the plain-text edition, made because read-aloud would not speak the PDF.
Use your browser's Read Aloud (Edge: right-click &rarr; Read aloud, or Ctrl+Shift+U) and it will
read straight through. Ctrl+F searches the whole document.</p>
<nav class="toc"><p>Contents</p><ol>{toc_html}</ol></nav>
{''.join(parts)}
</main>
</body>
</html>"""
    out_path.write_text(out, encoding="utf-8")
    return {"pages": doc.page_count, "words": words, "sections": len(toc),
            "bytes": out_path.stat().st_size, "body_size": body_size, "heading_sizes": heading_sizes}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("out")
    ap.add_argument("--title", required=True)
    ap.add_argument("--subtitle", default="")
    args = ap.parse_args()
    stats = build(Path(args.pdf), Path(args.out), args.title, args.subtitle)
    print(f"{args.out}: {stats['pages']} pages, {stats['words']:,} words, "
          f"{stats['sections']} sections, {stats['bytes']/1e6:.2f} MB "
          f"(body {stats['body_size']}pt, headings {stats['heading_sizes']})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
