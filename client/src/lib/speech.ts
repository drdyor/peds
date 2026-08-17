// Shared speech helpers.
//
// This exists because of a real defect. Several speech engines silently truncate a long
// utterance: you queue one string, it starts reading, and the back half is simply never
// spoken. It looks exactly like "the text got lost" and it gives no error.
//
// The textbook reader was written with chunking, the flashcard reader was not - and 39 cards
// send more than 300 characters, card 5 sending 1,456 (its ESID teaching note). So both now
// go through the same code path rather than each keeping its own idea of how to speak.

export function chunkForSpeech(text: string, max = 220): string[] {
  const sentences = text.replace(/\s+/g, " ").match(/[^.!?;]+[.!?;]*\s*/g) ?? [text];
  const out: string[] = [];
  let buffer = "";
  for (const sentence of sentences) {
    if ((buffer + sentence).length > max && buffer) {
      out.push(buffer.trim());
      buffer = sentence;
    } else {
      buffer += sentence;
    }
  }
  if (buffer.trim()) out.push(buffer.trim());
  return out.filter(Boolean);
}

// Listening-time estimate.
//
// Characters are the wrong unit on their own - "immunodeficiency" and "is a" have wildly
// different character counts per unit of speaking time - so this counts WORDS and converts.
// 150 wpm is the usual figure quoted for synthesised speech at normal rate; the app speaks at
// `rate`, which scales it. It is an estimate and the UI says so: real duration varies with the
// installed voice, and abbreviations spoken letter by letter (PPNAD, KCNJ11) run slower.
const WORDS_PER_MINUTE = 150;

export function estimateSpeechSeconds(text: string, rate = 0.95): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (!words) return 0;
  return Math.round((words / (WORDS_PER_MINUTE * rate)) * 60);
}

/** "45 sec", "2 min", "1 hr 12 min" — short enough to sit in a header. */
export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.max(1, Math.round(seconds))} sec`;
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} hr ${rest} min` : `${hours} hr`;
}

export function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => /en-GB/i.test(v.lang)) || voices.find((v) => /^en/i.test(v.lang)) || voices[0] || null;
}

/** Speak text as an ordered queue of sentence-sized utterances. onDone fires after the last. */
export function speakChunked(text: string, opts: { rate?: number; onDone?: () => void } = {}) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const pieces = chunkForSpeech(text);
  if (!pieces.length) {
    opts.onDone?.();
    return;
  }
  const voice = pickVoice();
  pieces.forEach((piece, index) => {
    const utterance = new SpeechSynthesisUtterance(piece);
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || "en-GB";
    utterance.rate = opts.rate ?? 0.95;
    if (index === pieces.length - 1) {
      utterance.onend = () => opts.onDone?.();
      utterance.onerror = () => opts.onDone?.();
    }
    window.speechSynthesis.speak(utterance);
  });
}
