// Study-desk access gate. Deliberately simple: this is a personal revision deck, not
// secret material — the gate keeps the link from being casually shareable. It is a
// client-side check, so treat it as a doorplate, not a lock.
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const GATE_KEY = "pediatrics-flashcards-gate-v1";
const PASSPHRASE = "genius";

export function isUnlocked() {
  try {
    return localStorage.getItem(GATE_KEY) === "open";
  } catch {
    return false;
  }
}

export default function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (value.trim().toLowerCase() !== PASSPHRASE) {
      setWrong(true);
      if ("vibrate" in navigator) navigator.vibrate([18, 40, 18]);
      window.setTimeout(() => setWrong(false), 1400);
      return;
    }
    try {
      localStorage.setItem(GATE_KEY, "open");
    } catch {
      /* private mode: unlock for this session only */
    }
    if ("vibrate" in navigator) navigator.vibrate(12);
    onUnlock();
  }

  return (
    <main className="gate-shell">
      <form className={`gate-card ${wrong ? "is-wrong" : ""}`} onSubmit={submit}>
        <div className="brand-lockup">
          <div className="brand-mark">
            <Sparkles size={19} strokeWidth={2.6} />
          </div>
          <div>
            <p className="eyebrow">Pediatrics / 2026</p>
            <h1>Study desk</h1>
          </div>
        </div>
        <p className="gate-intro">831 audited LEK cards. One card at a time.</p>
        <label className="gate-label" htmlFor="gate-input">
          Passphrase
        </label>
        <input
          id="gate-input"
          className="gate-input"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter to open the desk"
          aria-invalid={wrong}
        />
        <button className="gate-button" type="submit">
          Open the desk <ArrowRight size={16} />
        </button>
        <p className="gate-note" role={wrong ? "alert" : undefined}>
          {wrong ? "Not it. Try again." : "Your progress stays in this browser."}
        </p>
      </form>
    </main>
  );
}
