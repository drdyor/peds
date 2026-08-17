// Reader for the standalone reference notes. Same overlay pattern as the sheet gallery so
// the two feel like one feature: a list on the left, the note on the right, Esc to close.
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { references } from "@/lib/references";
import { estimateSpeechSeconds, formatDuration } from "@/lib/speech";
import Markdown from "./Markdown";

export default function ReferenceReader({ startAt, onClose }: { startAt: number; onClose: () => void }) {
  const [index, setIndex] = useState(startAt);
  const note = references[index];
  const listen = (body: string) => formatDuration(estimateSpeechSeconds(body.replace(/[#*>|`-]/g, " ")));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="reference-reader" role="dialog" aria-modal="true" aria-label="Reference notes">
      <header className="reference-bar">
        <div>
          <p className="eyebrow">Reference note · ≈ {listen(note.body)} to read aloud</p>
          <h2>{note.title}</h2>
        </div>
        <button onClick={onClose} title="Close (Esc)" aria-label="Close"><X size={18} /></button>
      </header>
      <div className="reference-main">
        <nav className="reference-list" aria-label="Reference notes">
          {references.map((item, i) => (
            <button key={item.id} className={i === index ? "active" : ""} onClick={() => setIndex(i)}>
              <strong>{item.title}</strong>
              <span>{item.subtitle}</span>
              <span className="ref-time">≈ {listen(item.body)}</span>
            </button>
          ))}
        </nav>
        <article className="reference-body">
          <p className="reference-provenance">
            {note.provenance ??
              "Written for this deck, not taken from the LEK sources — the 371-page textbook contains no karyotype, Klinefelter or Asherman material at all, so there was nothing to quote. Check the detail against a genetics text before you rely on it."}
          </p>
          <Markdown source={note.body} />
        </article>
      </div>
    </div>
  );
}
