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
