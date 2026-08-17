// In-app reader for the LEK Last Minute Pediatria textbook.
//
// Built because read-aloud on the PDF loses text. Two separate causes:
//   1. A 371-page PDF gives the browser no structure - it narrates layout fragments.
//   2. Speech engines truncate long utterances. Queueing one giant string is the classic way
//      to have the back half silently dropped, which is exactly what "the text is lost" is.
// So this reads ONE SECTION at a time, and splits that section into sentence-sized chunks
// queued in order. It also renders real headings and paragraphs, so the browser's own
// read-aloud works on it too.
import { useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Pause, Play, Search, SkipForward, X } from "lucide-react";
import { chunkForSpeech, estimateSpeechSeconds, formatDuration, pickVoice } from "@/lib/speech";

type Section = { level: number; title: string; page: number; paragraphs: string[] };
type Book = { title: string; note: string; pages: number; sections: Section[] };

export default function TextbookReader({ onClose }: { onClose: () => void }) {
  const [book, setBook] = useState<Book | null>(null);
  const [failed, setFailed] = useState(false);
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [continuous, setContinuous] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    fetch("textbook.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(setBook)
      .catch(() => setFailed(true));
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Never leave speech running behind a closed reader.
  useEffect(() => () => { if (speechSupported) window.speechSynthesis.cancel(); }, [speechSupported]);

  const matches = useMemo(() => {
    if (!book) return [];
    const q = query.trim().toLowerCase();
    if (!q) return book.sections.map((_, i) => i);
    return book.sections
      .map((s, i) => ({ s, i }))
      .filter(({ s }) => s.title.toLowerCase().includes(q) || s.paragraphs.some((p) => p.toLowerCase().includes(q)))
      .map(({ i }) => i);
  }, [book, query]);

  const section = book?.sections[index];

  const sectionText = section ? [section.title, ...section.paragraphs].join(". ") : "";
  const sectionSeconds = estimateSpeechSeconds(sectionText, 0.98);
  // Everything from here to the end of the book, for the "Read on" mode.
  const remainingSeconds = useMemo(() => {
    if (!book) return 0;
    return book.sections
      .slice(index)
      .reduce((total, s) => total + estimateSpeechSeconds([s.title, ...s.paragraphs].join(". "), 0.98), 0);
  }, [book, index]);

  function stop() {
    if (speechSupported) window.speechSynthesis.cancel();
    setSpeaking(false);
    setContinuous(false);
  }

  function speakSection(target: Section, thenNext: boolean) {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    const voice = pickVoice();
    const pieces = chunkForSpeech([target.title, ...target.paragraphs].join(". "));
    setSpeaking(true);
    pieces.forEach((piece, i) => {
      const utterance = new SpeechSynthesisUtterance(piece);
      if (voice) utterance.voice = voice;
      utterance.lang = voice?.lang || "en-GB";
      utterance.rate = 0.98;
      if (i === pieces.length - 1) {
        utterance.onend = () => {
          setSpeaking(false);
          if (thenNext) setIndex((current) => Math.min(current + 1, (book?.sections.length ?? 1) - 1));
        };
      }
      window.speechSynthesis.speak(utterance);
    });
  }

  // When reading continuously, moving to a new section starts it automatically.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    if (continuous && section) speakSection(section, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="textbook" role="dialog" aria-modal="true" aria-label="Textbook reader">
      <header className="textbook-bar">
        <div>
          <p className="eyebrow">LEK Last Minute — Pediatria{book ? ` · ${book.sections.length} sections` : ""}{section ? ` · ≈ ${formatDuration(sectionSeconds)} to listen · ${formatDuration(remainingSeconds)} left in the book` : ""}</p>
          <h2>{section ? section.title : "Loading…"}</h2>
        </div>
        <div className="textbook-actions">
          {speechSupported && section && (
            <>
              <button onClick={() => (speaking ? stop() : speakSection(section, false))} title={speaking ? "Stop" : "Read this section aloud"}>
                {speaking ? <Pause size={16} /> : <Play size={16} />}
                <span>{speaking ? "Stop" : `Listen · ${formatDuration(sectionSeconds)}`}</span>
              </button>
              <button
                className={continuous ? "on" : ""}
                onClick={() => {
                  if (continuous) { stop(); return; }
                  setContinuous(true);
                  speakSection(section, true);
                }}
                title="Keep reading into the following sections"
              >
                <SkipForward size={16} />
                <span>Read on · {formatDuration(remainingSeconds)}</span>
              </button>
            </>
          )}
          <button onClick={onClose} title="Close (Esc)" aria-label="Close"><X size={18} /></button>
        </div>
      </header>

      <div className="textbook-main">
        <nav className="textbook-toc" aria-label="Contents">
          <label className="textbook-search">
            <Search size={14} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the textbook" aria-label="Search the textbook" />
          </label>
          {book && <p className="textbook-count">{matches.length} of {book.sections.length} sections</p>}
          <div className="textbook-list">
            {book && matches.slice(0, 400).map((i) => (
              <button key={i} className={`toc-item lvl${book.sections[i].level} ${i === index ? "active" : ""}`} onClick={() => { setIndex(i); if (continuous) stop(); }}>
                {book.sections[i].title}
                <small>{formatDuration(estimateSpeechSeconds([book.sections[i].title, ...book.sections[i].paragraphs].join(". "), 0.98))} · p.{book.sections[i].page}</small>
              </button>
            ))}
            {book && matches.length > 400 && <p className="textbook-count">Showing the first 400 — narrow the search to see the rest.</p>}
          </div>
        </nav>

        <article className="textbook-body" ref={bodyRef}>
          {failed && <p className="textbook-error">Could not load the extracted text. The PDF itself is still available from the rail.</p>}
          {!book && !failed && <p className="textbook-loading"><Loader2 size={16} /> Loading the textbook…</p>}
          {section && (
            <>
              <p className="textbook-page">page {section.page} of {book?.pages}</p>
              <h3>{section.title}</h3>
              {section.paragraphs.map((para) => <p key={para.slice(0, 60)}>{para}</p>)}
              <p className="textbook-foot">
                Extracted from the PDF so it can be read aloud section by section. The original PDF is
                linked in the rail if you want the page layout.
              </p>
            </>
          )}
        </article>
      </div>
    </div>
  );
}
