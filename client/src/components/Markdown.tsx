// A deliberately small markdown renderer for Eva's teaching notes.
//
// Why not a library: the notes are pasted straight from a chat window, so they use a narrow
// and predictable subset — headings, tables, lists, bold, blockquotes, rules. Rendering that
// subset is ~80 lines and keeps the bundle free of a parser plus its sanitiser. No raw HTML is
// ever interpreted: every value ends up as a React text child, so pasted markup cannot inject.
import type { ReactNode } from "react";

function inline(text: string, keyBase: string): ReactNode[] {
  // **bold**, *italic*, `code` — applied in one pass so nesting cannot double-wrap.
  const out: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyBase}-i${i++}`;
    if (token.startsWith("**")) out.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    else if (token.startsWith("`")) out.push(<code key={key}>{token.slice(1, -1)}</code>);
    else out.push(<em key={key}>{token.slice(1, -1)}</em>);
    last = match.index + token.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function splitRow(line: string) {
  return line.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

export default function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ");
    blocks.push(<p key={`p${blocks.length}`}>{inline(text, `p${blocks.length}`)}</p>);
    paragraph = [];
  };
  const flushList = () => {
    if (!list) return;
    const items = list.items.map((item, index) => <li key={`li${index}-${item.slice(0, 12)}`}>{inline(item, `l${blocks.length}-${index}`)}</li>);
    blocks.push(list.ordered ? <ol key={`o${blocks.length}`}>{items}</ol> : <ul key={`u${blocks.length}`}>{items}</ul>);
    list = null;
  };
  const flushAll = () => { flushParagraph(); flushList(); };

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) { flushAll(); continue; }

    if (/^#{1,6}\s/.test(trimmed)) {
      flushAll();
      const level = (trimmed.match(/^#+/) as RegExpMatchArray)[0].length;
      const text = trimmed.replace(/^#+\s*/, "");
      const Tag = (level <= 2 ? "h3" : level === 3 ? "h4" : "h5") as "h3" | "h4" | "h5";
      blocks.push(<Tag key={`h${blocks.length}`}>{inline(text, `h${blocks.length}`)}</Tag>);
      continue;
    }

    if (/^(-{3,}|_{3,}|\*{3,})$/.test(trimmed)) { flushAll(); blocks.push(<hr key={`hr${blocks.length}`} />); continue; }

    if (trimmed.startsWith(">")) {
      flushAll();
      blocks.push(<blockquote key={`q${blocks.length}`}>{inline(trimmed.replace(/^>\s?/, ""), `q${blocks.length}`)}</blockquote>);
      continue;
    }

    // Table: a header row followed by a |---|---| separator.
    if (trimmed.startsWith("|") && /^\|?[\s:*-]+\|/.test((lines[index + 1] || "").trim()) && (lines[index + 1] || "").includes("-")) {
      flushAll();
      const headers = splitRow(trimmed);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(splitRow(lines[index].trim()));
        index++;
      }
      index--;
      blocks.push(
        <div className="md-table-wrap" key={`t${blocks.length}`}>
          <table>
            <thead><tr>{headers.map((cell, c) => <th key={`th${c}`}>{inline(cell, `th${c}`)}</th>)}</tr></thead>
            <tbody>{rows.map((row, r) => <tr key={`tr${r}`}>{row.map((cell, c) => <td key={`td${r}-${c}`}>{inline(cell, `td${r}-${c}`)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }

    const bullet = trimmed.match(/^[-*+]\s+(.*)$/);
    const numbered = trimmed.match(/^\d+[.)]\s+(.*)$/);
    if (bullet || numbered) {
      flushParagraph();
      const ordered = Boolean(numbered);
      if (!list || list.ordered !== ordered) { flushList(); list = { ordered, items: [] }; }
      list.items.push((bullet ? bullet[1] : (numbered as RegExpMatchArray)[1]));
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }
  flushAll();

  return <div className="md">{blocks}</div>;
}
