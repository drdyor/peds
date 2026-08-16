// Full-screen viewer for the Visual Master sheets. Deliberately keyboard-first: these are
// dense posters, so the useful interaction is paging through them and zooming one panel,
// not hunting for controls.
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { sheets } from "@/lib/sheets";

export default function SheetGallery({ startAt, onClose }: { startAt: number; onClose: () => void }) {
  const [index, setIndex] = useState(startAt);
  const [zoomed, setZoomed] = useState(false);
  const sheet = sheets[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") { setIndex((i) => (i + 1) % sheets.length); setZoomed(false); }
      if (event.key === "ArrowLeft") { setIndex((i) => (i - 1 + sheets.length) % sheets.length); setZoomed(false); }
      if (event.key === " ") { event.preventDefault(); setZoomed((z) => !z); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="gallery" role="dialog" aria-modal="true" aria-label="Visual Master sheets">
      <header className="gallery-bar">
        <div>
          <p className="eyebrow">Visual Master 2026 · sheet {index + 1} of {sheets.length}</p>
          <h2>{sheet.number} — {sheet.title}{sheet.variant ? ` (${sheet.variant})` : ""}</h2>
        </div>
        <div className="gallery-actions">
          <button onClick={() => setZoomed((z) => !z)} title={zoomed ? "Fit to screen (space)" : "Zoom to full size (space)"} aria-label={zoomed ? "Fit to screen" : "Zoom in"}>
            {zoomed ? <ZoomOut size={17} /> : <ZoomIn size={17} />}
          </button>
          <button onClick={onClose} title="Close (Esc)" aria-label="Close"><X size={18} /></button>
        </div>
      </header>

      <div className={`gallery-stage ${zoomed ? "is-zoomed" : ""}`} onClick={() => setZoomed((z) => !z)}>
        <img src={sheet.file} alt={`${sheet.number} — ${sheet.title}`} />
      </div>

      <nav className="gallery-nav">
        <button onClick={() => { setIndex((i) => (i - 1 + sheets.length) % sheets.length); setZoomed(false); }} aria-label="Previous sheet"><ChevronLeft size={19} /></button>
        <div className="gallery-strip">
          {sheets.map((item, i) => (
            <button key={item.file} className={i === index ? "active" : ""} onClick={() => { setIndex(i); setZoomed(false); }} title={`${item.number} — ${item.title}`}>
              {item.number}{item.variant || ""}
            </button>
          ))}
        </div>
        <button onClick={() => { setIndex((i) => (i + 1) % sheets.length); setZoomed(false); }} aria-label="Next sheet"><ChevronRight size={19} /></button>
      </nav>
    </div>
  );
}
