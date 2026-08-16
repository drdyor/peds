// Study-desk sound cues, synthesised live with Web Audio. No audio files to host, no vendor,
// nothing to download — the whole thing is a few oscillators and envelopes.
//
// meow    : two-stage pitch glide (up then down) through a resonant band-pass, which is what
//           gives a synthesised tone its cat-like vowel quality, plus a little vibrato.
// bubble  : quick upward pitch blip — the classic "blup". A few staggered blips read as a
//           small stream of bubbles.
// lowBlub : a single slow downward bubble, used for Hard so it reads as "sinking", not failure.

export type Cue = "reveal" | "easy" | "hard";

function envelope(ctx: AudioContext, node: GainNode, start: number, peak: number, dur: number) {
  node.gain.setValueAtTime(0.0001, start);
  node.gain.exponentialRampToValueAtTime(peak, start + 0.015);
  node.gain.exponentialRampToValueAtTime(0.0001, start + dur);
}

function bubble(ctx: AudioContext, at: number, from: number, to: number, dur = 0.13, level = 0.05) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(from, at);
  osc.frequency.exponentialRampToValueAtTime(to, at + dur * 0.85);
  envelope(ctx, gain, at, level, dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(at);
  osc.stop(at + dur + 0.02);
}

function meow(ctx: AudioContext, at: number, level = 0.06) {
  // Voice: a sawtooth is rich enough for the band-pass to shape into a vowel.
  const osc = ctx.createOscillator();
  const band = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  osc.type = "sawtooth";

  // "mee" rising, then "ow" falling — the shape that makes it read as a meow.
  osc.frequency.setValueAtTime(520, at);
  osc.frequency.exponentialRampToValueAtTime(760, at + 0.12);
  osc.frequency.exponentialRampToValueAtTime(430, at + 0.42);

  band.type = "bandpass";
  band.Q.value = 6;
  band.frequency.setValueAtTime(900, at);
  band.frequency.exponentialRampToValueAtTime(1700, at + 0.12);
  band.frequency.exponentialRampToValueAtTime(700, at + 0.42);

  // Vibrato keeps it from sounding like a plain synth sweep.
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 18;
  lfoGain.gain.value = 14;
  lfo.connect(lfoGain).connect(osc.frequency);

  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(level, at + 0.06);
  gain.gain.setValueAtTime(level, at + 0.24);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.46);

  osc.connect(band).connect(gain).connect(ctx.destination);
  osc.start(at);
  lfo.start(at);
  osc.stop(at + 0.48);
  lfo.stop(at + 0.48);
}

export function playCue(kind: Cue) {
  const AudioContextClass =
    window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const ctx = new AudioContextClass();
  const now = ctx.currentTime;

  if (kind === "reveal") {
    // A small rise of bubbles as the answer surfaces.
    bubble(ctx, now, 280, 620, 0.11, 0.045);
    bubble(ctx, now + 0.07, 360, 820, 0.1, 0.035);
    bubble(ctx, now + 0.15, 300, 700, 0.09, 0.025);
  } else if (kind === "easy") {
    meow(ctx, now);
  } else {
    // Hard: one slow descending bubble — a nudge, not a buzzer.
    bubble(ctx, now, 420, 180, 0.26, 0.05);
  }

  window.setTimeout(() => void ctx.close(), kind === "easy" ? 900 : 600);
}
