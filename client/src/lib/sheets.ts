// The "Pediatrics LEK · Visual Master 2026" poster sheets Eva supplied (Korean cat memory art).
// Converted to WebP and capped at a 1600px long edge: 21.3 MB of PNG became 2.8 MB, which is
// the difference between a gallery that opens instantly and one that hangs on a phone.
//
// Where two sheets cover the same number they are different drafts of the same topic, kept as
// variants a/b rather than one being silently dropped — they do not contain identical panels.

export type Sheet = { file: string; number: string; title: string; variant?: string };

export const sheets: Sheet[] = [
  { file: "sheets/sheet-21-cardiology-patterns.webp", number: "21", title: "Cardiology patterns" },
  { file: "sheets/sheet-22-neuro-neuromuscular.webp", number: "22", title: "Neuro & neuromuscular" },
  { file: "sheets/sheet-23-genetics-syndromes-a.webp", number: "23", title: "Genetics & syndromes", variant: "a" },
  { file: "sheets/sheet-23-genetics-syndromes-b.webp", number: "23", title: "Genetics & syndromes", variant: "b" },
  { file: "sheets/sheet-24-pediatric-dermatology-a.webp", number: "24", title: "Pediatric dermatology", variant: "a" },
  { file: "sheets/sheet-24-pediatric-dermatology-b.webp", number: "24", title: "Pediatric dermatology", variant: "b" },
  { file: "sheets/sheet-25-rheumatology-vasculitis-a.webp", number: "25", title: "Rheumatology & vasculitis", variant: "a" },
  { file: "sheets/sheet-25-rheumatology-vasculitis-b.webp", number: "25", title: "Rheumatology & vasculitis", variant: "b" },
  { file: "sheets/sheet-26-eyes-ent-a.webp", number: "26", title: "Eyes & ENT", variant: "a" },
  { file: "sheets/sheet-26-eyes-ent-b.webp", number: "26", title: "Eyes & ENT", variant: "b" },
];
