// Clinical Notebook / Editorial Study Desk: warm paper, cobalt ink, coral review annotations.
import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Check, CheckCircle2, ChevronLeft, ChevronRight, CircleAlert, CircleHelp, BookMarked, ChevronDown, ClipboardCopy, Command, FileText, Flag, GraduationCap, Images, Headphones, ListChecks, ListFilter, RotateCcw, Play, Sparkles, Square, Star, Target, Volume2, VolumeX, Vibrate, X } from "lucide-react";
import { flashcards, type Flashcard } from "@/lib/cards";
import { cardQuestions } from "@/lib/options";
import { doctorNotes } from "@/lib/explanations";
import { playCue } from "@/lib/sounds";
import { speakChunked, estimateSpeechSeconds, formatDuration } from "@/lib/speech";
import { teachingNotes } from "@/lib/teaching";
import Markdown from "@/components/Markdown";
import SheetGallery from "@/components/SheetGallery";
import ReferenceReader from "@/components/ReferenceReader";
import TextbookReader from "@/components/TextbookReader";
import { references } from "@/lib/references";
import { sheets } from "@/lib/sheets";

type Rating = "hard" | "easy";
type ValidationState = "verified" | "needs-review" | "rejected";
type ReviewState = Record<number, Rating>;
type ValidationMap = Record<number, ValidationState>;
const STORAGE_KEY = "pediatrics-flashcards-progress-v1";
const VALIDATION_KEY = "pediatrics-flashcards-validation-v1";
const FEEDBACK_KEY = "pediatrics-flashcards-feedback-v1";
const FLAG_KEY = "pediatrics-flashcards-flags-v1";

type Filter = "all" | "new" | "hard" | "easy" | "updates" | "numbers" | "pharma" | "traps" | "source" | "validation" | "teaching" | "flagged";
const PALETTES = ["peach", "mint", "lavender", "sky", "butter"] as const;
const CATEGORY_LABELS: Record<string, string> = { numbers: "Number drill", pharma: "Pharma lab", traps: "Trap radar", signs_scores: "Sign spotlight", source: "Source trail" };

function loadProgress(): ReviewState {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function loadValidation(): ValidationMap {
  try {
    return JSON.parse(localStorage.getItem(VALIDATION_KEY) || "{}");
  } catch {
    return {};
  }
}

function loadFlags(): Record<number, true> {
  try {
    return JSON.parse(localStorage.getItem(FLAG_KEY) || "{}");
  } catch {
    return {};
  }
}

function loadFeedback() {
  try {
    return { sound: true, haptics: true, speech: false, ...JSON.parse(localStorage.getItem(FEEDBACK_KEY) || "{}") };
  } catch {
    return { sound: true, haptics: true, speech: false };
  }
}

// Manus's generator ended EXCEPT-card answers with a pointer to a "table above" that it
// had already dropped. Where the real option table is now rendered below, that dangling
// sentence is removed for display only — cards.ts is left byte-for-byte intact.
const DANGLING_TABLE_REF = /\s*The (?:table\/true-set|true-set|table) above shows what remains correct\.?/gi;

// The same two verify-this warnings are stamped on 433 cards. Spelled out on every card they
// are visual noise that crowds the actual answer, so they collapse to a single "*" with one
// footnote under the card. Nothing is lost — the wording moves to the footnote, and the
// card's own source-status tag still shows in the header.
const VERIFY_NOTES: { pattern: RegExp; note: string }[] = [
  { pattern: /\s*Legacy source number\s*[—-]\s*verify against current local\/national guidance before clinical use\.?/gi,
    note: "Legacy source number — verify against current local/national guidance before clinical use." },
  { pattern: /\s*SOURCE-DERIVED\s*[—-]\s*verify before clinical use\.?/gi,
    note: "Source-derived — verify before clinical use." },
];

function answerParts(card: Flashcard, hasOptions: boolean) {
  let text = hasOptions ? card.back.replace(DANGLING_TABLE_REF, "") : card.back;
  const notes: string[] = [];
  for (const { pattern, note } of VERIFY_NOTES) {
    if (pattern.test(text)) {
      notes.push(note);
      text = text.replace(pattern, "");
    }
    pattern.lastIndex = 0;
  }
  return { text: text.replace(/\s+/g, " ").trim(), notes };
}

function speakableAnswer(text: string) {
  // Normally speak the ANSWER LINE ONLY — narrating a whole explanation defeats the point.
  // EXCEPTION: on INVALID/OUTDATED cards the answer line is just "invalid, do not memorize",
  // and ALL the teaching sits in the caveat that follows, so those are read in full.
  const isInvalid = /INVALID\s*\/\s*OUTDATED/i.test(text);
  const spoken = isInvalid ? text : text.split(/\s*(?:Explanation:|Caveat:|Memory cue:)/i)[0];
  return spoken
    .replace(/^Answer:\s*([A-E])\s*[:.]\s*/i, "Answer $1. ")
    .replace(/^Answer:\s*/i, "")
    .replace(/INVALID\s*\/\s*OUTDATED\s*[-\u2014]?\s*/gi, "This item is invalid or outdated. ")
    .replace(/\s*Caveat:\s*/gi, ". Caveat. ")
    .replace(/\s*Explanation:\s*/gi, ". Explanation. ")
    .replace(/\s*2026 GUIDELINE NOTE\s*\(ESID\):\s*/gi, ". 2026 guideline note. ")
    .replace(/\u2265\s*/g, "at least ")
    .replace(/\s+/g, " ")
    .replace(/\s*\.\s*\./g, ".")
    .replace(/(^|\.\s+)([a-z])/g, (_m, lead, ch) => lead + ch.toUpperCase())
    .replace(/\s*[.;,]\s*$/, "")
    .trim();
}

// Stems and options often pack an enumerated list onto one line ("1) x; 2) y; 3) z"), which
// reads as a wall of text. Split those onto their own lines. The lead-in keeps the editorial
// display face; the items drop to body type so a 5-item stem does not fill the whole card.
function splitEnumerated(text: string) {
  const parts = text.split(/\s+(?=\d\)\s)/);
  return parts.length >= 3 ? { lead: parts[0], items: parts.slice(1) } : { lead: text, items: [] as string[] };
}

function EnumeratedText({ text }: { text: string }) {
  const { lead, items } = splitEnumerated(text);
  if (!items.length) return <>{text}</>;
  return (
    <>
      {lead}
      {items.map((item) => (
        <span className="enum-item" key={item}>{item}</span>
      ))}
    </>
  );
}

function statusLabel(card: Flashcard, state?: ValidationState) {
  if (card.status === "source-derived") {
    if (state === "verified") return "Verified locally";
    if (state === "rejected") return "Rejected fragment";
    if (state === "needs-review") return "Needs review";
    return "Source drill · verify";
  }
  if (card.status === "invalid/outdated") return "Source caveat";
  if (card.status === "caveat/updated") return "2026 update";
  return "Source settled";
}

export default function Home() {
  const [progress, setProgress] = useState<ReviewState>(() => loadProgress());
  const [validation, setValidation] = useState<ValidationMap>(() => loadValidation());
  const [filter, setFilter] = useState<Filter>("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [notice, setNotice] = useState("");
  const [sessionReviewed, setSessionReviewed] = useState(0);
  const [feedback, setFeedback] = useState<{ sound: boolean; haptics: boolean; speech: boolean }>(() => loadFeedback());
  const [flags, setFlags] = useState<Record<number, true>>(() => loadFlags());
  const [copied, setCopied] = useState(false);
  const [gallery, setGallery] = useState<number | null>(null);
  const [reference, setReference] = useState<number | null>(null);
  const [textbook, setTextbook] = useState(false);
  const cardBodyRef = useRef<HTMLDivElement>(null);
  const [speaking, setSpeaking] = useState(false);
  // Matches the CSS breakpoint for the side-by-side layout. In two columns there is room to
  // show the doctors' explanation immediately; making Eva click to open it made reading the
  // explanation "an effort", which is exactly what the side panel was meant to remove.
  const WIDE = "(min-width: 1180px)";
  const [wide, setWide] = useState(() => typeof window !== "undefined" && window.matchMedia(WIDE).matches);
  const [showDoctorNote, setShowDoctorNote] = useState(wide);
  const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [overflowing, setOverflowing] = useState(false);

  const counts = useMemo(() => {
    const values = Object.values(progress);
    return {
      new: flashcards.length - values.length,
      hard: values.filter((v) => v === "hard").length,
      easy: values.filter((v) => v === "easy").length,
      updates: flashcards.filter((card) => card.status !== "valid").length,
      needsValidation: flashcards.filter((card) => card.status === "source-derived" && validation[card.id] !== "verified").length,
      numbers: flashcards.filter((card) => card.category === "numbers").length,
      pharma: flashcards.filter((card) => card.category === "pharma").length,
      traps: flashcards.filter((card) => card.category === "traps" || card.category === "signs_scores").length,
      source: flashcards.filter((card) => card.status === "source-derived").length,
      teaching: flashcards.filter((card) => teachingNotes[card.id]).length,
      flagged: Object.keys(flags).length,
    };
  }, [progress, validation, flags]);

  const topics = useMemo(() => Array.from(new Set(flashcards.map((card) => card.topic).filter(Boolean))).sort() as string[], []);
  const deck = useMemo(() => {
    const topicMatches = (card: Flashcard) => topicFilter === "all" || card.topic === topicFilter;
    const scoped = flashcards.filter(topicMatches);
    if (filter === "new") return scoped.filter((card) => !progress[card.id]);
    if (filter === "hard") return scoped.filter((card) => progress[card.id] === "hard");
    if (filter === "easy") return scoped.filter((card) => progress[card.id] === "easy");
    if (filter === "updates") return scoped.filter((card) => card.status !== "valid");
    if (filter === "numbers") return scoped.filter((card) => card.category === "numbers");
    if (filter === "pharma") return scoped.filter((card) => card.category === "pharma");
    if (filter === "traps") return scoped.filter((card) => card.category === "traps" || card.category === "signs_scores");
    if (filter === "source") return scoped.filter((card) => card.status === "source-derived");
    if (filter === "teaching") return scoped.filter((card) => teachingNotes[card.id]);
    if (filter === "flagged") return scoped.filter((card) => flags[card.id]);
    if (filter === "validation") return scoped.filter((card) => card.status === "source-derived" && validation[card.id] !== "verified");
    return scoped;
  }, [filter, progress, topicFilter, validation, flags]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem(VALIDATION_KEY, JSON.stringify(validation));
  }, [validation]);

  useEffect(() => {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    localStorage.setItem(FLAG_KEY, JSON.stringify(flags));
  }, [flags]);

  useEffect(() => {
    const query = window.matchMedia(WIDE);
    const sync = (event: MediaQueryListEvent) => { setWide(event.matches); setShowDoctorNote(event.matches); };
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setIndex(0);
    setRevealed(false);
  }, [filter, topicFilter]);

  // The fade cue must reflect reality, so measure the rendered body rather than guessing
  // from card length. Re-measured on reveal, card change, and viewport resize.
  useEffect(() => {
    const measure = () => {
      const node = cardBodyRef.current;
      if (node) setOverflowing(node.scrollHeight > node.clientHeight + 1);
    };
    // Always start a card at its question — revealing must never leave the stem scrolled
    // off the top of the card.
    if (cardBodyRef.current) cardBodyRef.current.scrollTop = 0;
    setShowDoctorNote(wide);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [revealed, index, filter, topicFilter, wide]);



  function giveFeedback(kind: "reveal" | "easy" | "hard") {
    if (feedback.haptics && "vibrate" in navigator) navigator.vibrate(kind === "reveal" ? 8 : kind === "easy" ? [12, 35, 12] : [20, 35, 20]);
    if (feedback.sound) playCue(kind);
  }


  function speakAnswer(text: string) {
    if (!speechSupported) return;
    // Chunked: a single long utterance gets silently truncated by several engines, and 39
    // cards send more than 300 characters (card 5 sends 1,456).
    setSpeaking(true);
    speakChunked(speakableAnswer(text), { rate: 0.95, onDone: () => setSpeaking(false) });
  }


  function stopSpeaking() {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  function toggleFlag() {
    setFlags((current) => {
      const next = { ...current };
      if (next[card.id]) delete next[card.id];
      else next[card.id] = true;
      return next;
    });
    setNotice(flags[card.id] ? "Flag removed." : "Flagged — needs a better explanation.");
    window.setTimeout(() => setNotice(""), 1600);
    if (feedback.haptics && "vibrate" in navigator) navigator.vibrate(10);
  }

  async function copyFlagged() {
    const ids = Object.keys(flags).map(Number).sort((a, b) => a - b);
    try {
      await navigator.clipboard.writeText(ids.join(", "));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setNotice("Could not reach the clipboard — the numbers are: " + ids.join(", "));
      window.setTimeout(() => setNotice(""), 6000);
    }
  }

  function toggleFeedback(key: "sound" | "haptics" | "speech", event?: React.MouseEvent<HTMLButtonElement>) {
    setFeedback((current) => ({ ...current, [key]: !current[key] }));
    // Leave focus behind, or the next SPACE re-presses this toggle instead of revealing.
    event?.currentTarget.blur();
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement) return;
      if (event.key === " ") { event.preventDefault(); setRevealed((current) => { giveFeedback("reveal"); return !current; }); }
      if (event.key.toLowerCase() === "h" && revealed) rate("hard");
      if (event.key.toLowerCase() === "e" && revealed) rate("easy");
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const card = deck[index] ?? flashcards[0];
  const palette = PALETTES[card.id % PALETTES.length];
  const question = cardQuestions[card.id];
  const categoryLabel = card.category ? CATEGORY_LABELS[card.category] ?? card.category.replace(/_/g, " ") : "Core review";
  const answer = answerParts(card, Boolean(question));
  const doctorNote = doctorNotes[card.id];
  const listenSeconds = estimateSpeechSeconds(speakableAnswer(answer.text), 0.95);
  const teaching = teachingNotes[card.id];
  const completion = Math.round((Object.keys(progress).length / flashcards.length) * 100);

  // Speak the answer when it becomes visible, if the reader is switched on. Any card change
  // cancels playback immediately so answers never overlap or trail the wrong card.
  useEffect(() => {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    if (revealed && feedback.speech) {
      const timer = window.setTimeout(() => speakAnswer(answer.text), 120);
      return () => {
        window.clearTimeout(timer);
        window.speechSynthesis.cancel();
      };
    }
    return () => window.speechSynthesis.cancel();
  }, [revealed, card.id, feedback.speech]);

  useEffect(() => () => { if (speechSupported) window.speechSynthesis.cancel(); }, []);

  function move(direction: number) {
    if (!deck.length) return;
    setIndex((current) => (current + direction + deck.length) % deck.length);
    setRevealed(false);
  }

  function rate(rating: Rating) {
    giveFeedback(rating);
    setProgress((current) => ({ ...current, [card.id]: rating }));
    setSessionReviewed((current) => current + 1);
    setNotice(rating === "hard" ? "Saved to your Hard pile — future you will thank you." : sessionReviewed % 5 === 4 ? "Five cards down. Tiny victory unlocked." : "Added to your learned pile.");
    window.setTimeout(() => setNotice(""), 1800);
    if (deck.length > 1) move(1);
    else setRevealed(false);
  }

  function setCardValidation(state: ValidationState) {
    setValidation((current) => ({ ...current, [card.id]: state }));
    setNotice(state === "verified" ? "Marked verified in this browser." : state === "rejected" ? "Marked as a rejected fragment." : "Queued for source review.");
    window.setTimeout(() => setNotice(""), 1800);
  }

  function resetProgress() {
    if (!window.confirm("Reset all saved card ratings and validation states?")) return;
    setProgress({});
    setValidation({});
    setFilter("all");
    setTopicFilter("all");
    setIndex(0);
    setRevealed(false);
  }

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All cards", count: flashcards.length },
    { key: "new", label: "Unseen", count: counts.new },
    { key: "hard", label: "Hard pile", count: counts.hard },
    { key: "easy", label: "Learned", count: counts.easy },
    { key: "updates", label: "Corrections", count: counts.updates },
    { key: "numbers", label: "Numbers", count: counts.numbers },
    { key: "pharma", label: "Pharma", count: counts.pharma },
    { key: "traps", label: "Traps & signs", count: counts.traps },
    { key: "source", label: "Source drills", count: counts.source },
    { key: "validation", label: "Needs validation", count: counts.needsValidation },
    { key: "teaching", label: "Teaching notes", count: counts.teaching },
    { key: "flagged", label: "Needs better material", count: counts.flagged },
  ];

  return (
    <main className={`app-shell study-theme-${palette}`}>
      <aside className="side-rail">
        <div className="brand-lockup">
          <div className="brand-mark"><Sparkles size={19} strokeWidth={2.6} /></div>
          <div><p className="eyebrow">Pediatrics / 2026</p><h1>Study desk</h1></div>
        </div>
        <p className="rail-intro">Reveal, rate, repeat. Mark a card <strong>Hard</strong> and it stays saved in this browser for your Hard pile.</p>
        <div className="progress-card">
          <div className="progress-heading"><span>Deck progress</span><strong>{completion}%</strong></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: `${completion}%` }} /></div>
          <p>{Object.keys(progress).length} of {flashcards.length} cards marked</p>
        </div>
        <nav className="deck-nav" aria-label="Deck filters">
          <p className="section-kicker">Your queue</p>
          {filters.map((item) => (
            <button key={item.key} className={`filter-button ${filter === item.key ? "active" : ""}`} onClick={() => setFilter(item.key)}>
              <span>{item.label}</span><span className="count-badge">{item.count}</span>
            </button>
          ))}
        </nav>
          <div className="rail-footer">
          <div className="shortcut-row"><Star size={15} /><span><strong>Hard</strong> is saved automatically — open Hard pile anytime.</span></div>
          <div className="shortcut-row"><Command size={15} /><span>Space to reveal</span></div>
          <div className="shortcut-row"><span className="verify-mark">*</span><span>verify against current guidance</span></div>
          <div className="shortcut-row"><span className="keycap">H</span><span>Hard</span><span className="keycap">E</span><span>Easy</span></div>
          <button className="reading-link" onClick={() => setReference(0)}><BookMarked size={14} /> Reference notes <small>{references.length}</small></button>
          <button className="reading-link" onClick={() => setGallery(0)}><Images size={14} /> Visual Master sheets <small>{sheets.length}</small></button>
          <button className="reading-link" onClick={() => setTextbook(true)}><BookOpen size={14} /> Read the textbook <small>371 pp · read-aloud</small></button>
          <a className="reading-link subtle" href="textbook.html" target="_blank" rel="noreferrer"><FileText size={14} /> textbook as a web page <small>read-aloud</small></a>
          <a className="reading-link subtle" href="high-yield-2026.html" target="_blank" rel="noreferrer"><FileText size={14} /> high-yield addendum as a web page</a>
          <a className="reading-link subtle" href="lek-last-minute-pediatria.pdf" target="_blank" rel="noreferrer"><FileText size={14} /> original PDFs</a>
          <a className="reading-link" href="pediatrics-high-yield-2026.pdf" target="_blank" rel="noreferrer"><FileText size={14} /> High-yield addendum 2026 <small>17 pp</small></a>
          {counts.flagged > 0 && <button className="reading-link copy-flagged" onClick={copyFlagged}><ClipboardCopy size={14} /> {copied ? "Copied!" : `Copy ${counts.flagged} flagged card number${counts.flagged === 1 ? "" : "s"}`}</button>}
          <button className="reset-button" onClick={resetProgress}><RotateCcw size={14} /> Reset progress</button>
        </div>
      </aside>

      <section className="study-workspace">
        <header className="topbar">
          <div><p className="eyebrow">Active deck</p><p className="topbar-title">LEK 2026 · Audited & corrected</p></div>
          <div className="topbar-meta"><span className="saved-dot" /> Saved locally <span className="divider" /> <BookOpen size={15} /> {deck.length} in queue <span className="feedback-controls" aria-label="Feedback preferences">
            <button className={`feedback-toggle ${feedback.sound ? "on" : ""}`} onClick={(event) => toggleFeedback("sound", event)} aria-label={`${feedback.sound ? "Disable" : "Enable"} sound feedback`} title={`${feedback.sound ? "Disable" : "Enable"} sound feedback`}>{feedback.sound ? <Volume2 size={15} /> : <VolumeX size={15} />}</button>
            <button className={`feedback-toggle ${feedback.speech ? "on" : ""}`} onClick={(event) => toggleFeedback("speech", event)} aria-label={`${feedback.speech ? "Stop reading" : "Read"} answers aloud`} title={`${feedback.speech ? "Stop reading" : "Read"} answers aloud automatically`}><Headphones size={15} /></button>
            <button className={`feedback-toggle ${feedback.haptics ? "on" : ""}`} onClick={(event) => toggleFeedback("haptics", event)} aria-label={`${feedback.haptics ? "Disable" : "Enable"} haptic feedback`} title={`${feedback.haptics ? "Disable" : "Enable"} haptic feedback`}><Vibrate size={15} /></button>
          </span></div>
        </header>

        <div className="workspace-content">
          <div className="topic-toolbar">
            <div className="topic-toolbar-label"><ListFilter size={15} /><span>Targeted review</span></div>
            <select aria-label="Filter source drills by topic" value={topicFilter} onChange={(event) => setTopicFilter(event.target.value)}>
              <option value="all">All topics</option>
              {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
            </select>
          </div>
          <div className="study-heading">
            <div><p className="eyebrow accent-eyebrow">{filter === "all" ? "Daily review" : filters.find((item) => item.key === filter)?.label}</p><h2>Make the next card count.</h2><div className="session-chip"><Sparkles size={13} /> {sessionReviewed ? `${sessionReviewed} reviewed this session` : "Your next tiny win is ready"}</div></div>
            <div className="card-position"><span>{deck.length ? String(index + 1).padStart(3, "0") : "000"}</span><span className="slash">/</span><span>{String(deck.length).padStart(3, "0")}</span></div>
          </div>

        <div className={`study-main ${revealed && (teaching || doctorNote) ? "has-aside" : ""}`}>
          <div className={`flashcard ${revealed ? "is-revealed" : ""} ${overflowing ? "has-overflow" : ""} palette-${palette}`} onClick={() => setRevealed((current) => { giveFeedback("reveal"); return !current; })} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter") setRevealed((current) => !current); }}>
            <div className="card-topline"><span className="card-id">CARD {String(card.id).padStart(3, "0")}</span><span className="card-category"><Star size={12} /> {categoryLabel}</span><button className={`flag-button ${flags[card.id] ? "is-flagged" : ""}`} onClick={(event) => { event.stopPropagation(); toggleFlag(); event.currentTarget.blur(); }} aria-pressed={Boolean(flags[card.id])} title={flags[card.id] ? "Flagged as needing better material — click to unflag" : "Flag this card: explained poorly / needs more material"}><Flag size={13} /></button>{teaching && <span className="has-teaching" title="This card has a teaching note"><GraduationCap size={12} /> note</span>}<span className={`source-tag ${card.status}`}>{statusLabel(card, validation[card.id])}</span></div>
            <div className="card-body" ref={cardBodyRef}>
              <div className="prompt-label"><CircleHelp size={16} /> Prompt</div>
              <p className={`card-question ${splitEnumerated(card.front).items.length ? "has-enum" : ""}`}><EnumeratedText text={card.front} /></p>
              {!revealed ? <div className="reveal-prompt"><span className="reveal-icon"><Star size={14} /></span><span>Tap to reveal answer</span><span className="keycap">SPACE</span></div> : <><div className="answer-block"><div className="prompt-label answer-label"><Check size={16} /> Answer & memory cue{speechSupported && <button className={`speak-button ${speaking ? "is-speaking" : ""}`} onClick={(event) => { event.stopPropagation(); speaking ? stopSpeaking() : speakAnswer(answer.text); }} aria-label={speaking ? "Stop reading the answer" : "Read the answer aloud"} title={speaking ? "Stop" : "Read the answer aloud"}>{speaking ? <Square size={13} /> : <Play size={13} />}<span>{speaking ? "Stop" : `Listen · ${formatDuration(listenSeconds)}`}</span></button>}</div><p>{answer.text}{answer.notes.length > 0 && <sup className="verify-mark" title={answer.notes.join(" ")}>*</sup>}</p></div>{question && <div className="option-table">
                <div className="prompt-label option-table-label"><ListChecks size={16} /> {question.keyed === null ? "All five options — legacy key withdrawn, nothing highlighted" : question.negative ? "Every option — the excluded one is the answer" : "Every option, as printed on the exam paper"}</div>
                {question.options.map((option) => {
                  const isKeyed = option.letter === question.keyed;
                  const tone = question.keyed === null ? "is-neutral" : isKeyed ? (question.negative ? "is-false" : "is-answer") : question.negative ? "is-true" : "is-neutral";
                  const label = question.keyed === null ? "" : isKeyed ? (question.negative ? "FALSE / EXCLUDED" : "ANSWER") : question.negative ? "TRUE" : "";
                  return (
                    <div key={option.letter} className={`option-row ${tone}`}>
                      <span className="option-letter">{option.letter}</span>
                      <span className="option-text"><EnumeratedText text={option.text} /></span>
                      {label && <span className="option-status">{label}</span>}
                    </div>
                  );
                })}
              </div>}
              </>}
            </div>
            <div className="card-footer"><span>{revealed ? "Answer revealed · nice work" : "Recall first, then reveal"}</span><span className="card-corner"><Sparkles size={17} /></span></div>
          </div>
          {revealed && (teaching || doctorNote) && <aside className="study-aside">
            {teaching && <div className="teaching-note">
            <div className="prompt-label teaching-label"><GraduationCap size={16} /> Teaching note<span className="block-time">≈ {formatDuration(estimateSpeechSeconds(teaching.replace(/[#*>|`-]/g, " ")))} read</span></div>
            <Markdown source={teaching} />
            </div>}
            {doctorNote && <div className={`doctor-note ${showDoctorNote ? "is-open" : ""}`}>
            <button className="doctor-note-toggle" onClick={(event) => { event.stopPropagation(); const opening = !showDoctorNote; setShowDoctorNote(opening); if (opening) window.setTimeout(() => event.currentTarget?.scrollIntoView({ behavior: "smooth", block: "start" }), 60); }} aria-expanded={showDoctorNote}>
            <ChevronDown size={15} className="doctor-note-chevron" />
            <span>Doctors&rsquo; explanation</span><span className="block-time">≈ {formatDuration(estimateSpeechSeconds(doctorNote.text))} read</span>
            {doctorNote.consensusPct !== null && doctorNote.doctorsN !== null && (
            <span className="doctor-note-stat">{doctorNote.consensusPct}% of {doctorNote.doctorsN.toLocaleString()} doctors chose {doctorNote.key || "the key"}</span>
            )}
            </button>
            {showDoctorNote && <div className="doctor-note-body">
            {doctorNote.text.split("\n").map((para) => para.trim()).filter(Boolean).map((para) => <p key={para}>{para}</p>)}
            <p className="doctor-note-source">Konsylium doctors&rsquo; explanation{doctorNote.topic ? ` · ${doctorNote.topic}` : ""}. Matched to Konsylium question: &ldquo;{doctorNote.konsyliumStem}&rdquo; &mdash; if that is not this question, the pairing is wrong; tell Claude.</p>
            </div>}
            </div>}
          </aside>}
        </div>

          <div className="action-row">
            <button className="nav-button" onClick={() => move(-1)} aria-label="Previous card"><ChevronLeft size={19} /></button>
            <button className="rate-button hard" disabled={!revealed} onClick={() => rate("hard")}><X size={18} /><span>Hard</span><small>H</small></button>
            <button className="rate-button easy" disabled={!revealed} onClick={() => rate("easy")}><Check size={18} /><span>Easy</span><small>E</small></button>
            <button className="nav-button" onClick={() => move(1)} aria-label="Next card"><ChevronRight size={19} /></button>
          </div>
          <p className="action-hint">Reveal the card, then rate it. <strong>Hard</strong> saves it locally and keeps it in your Hard pile; <strong>Easy</strong> marks it learned. Your ratings remain after refresh in this browser.</p>
          {card.status === "source-derived" && <div className="validation-panel">
            <div className="validation-copy"><CircleAlert size={15} /><span>Source-drill validation is separate from study rating.</span></div>
            <div className="validation-actions">
              <button className={`validation-button verified ${validation[card.id] === "verified" ? "active" : ""}`} disabled={!revealed} onClick={() => setCardValidation("verified")}><CheckCircle2 size={14} /> Verified</button>
              <button className={`validation-button review ${validation[card.id] === "needs-review" ? "active" : ""}`} disabled={!revealed} onClick={() => setCardValidation("needs-review")}><CircleAlert size={14} /> Needs review</button>
              <button className={`validation-button rejected ${validation[card.id] === "rejected" ? "active" : ""}`} disabled={!revealed} onClick={() => setCardValidation("rejected")}><X size={14} /> Reject fragment</button>
            </div>
          </div>}
          {notice && <div className="toast-note">{notice}</div>}
          {!deck.length && <div className="empty-state"><Target size={23} /><strong>That queue is clear.</strong><span>Choose another pile to keep studying.</span></div>}
        </div>
      </section>
      {gallery !== null && <SheetGallery startAt={gallery} onClose={() => setGallery(null)} />}
      {reference !== null && <ReferenceReader startAt={reference} onClose={() => setReference(null)} />}
      {textbook && <TextbookReader onClose={() => setTextbook(false)} />}
    </main>
  );
}
