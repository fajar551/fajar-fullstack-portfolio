"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 36;
const HOLD_MS = 2400;
const DELETE_MS = 20;
const BETWEEN_MS = 380;

export function Typewriter({
  className,
  phrases,
}: {
  className?: string;
  phrases: readonly string[];
}) {
  const [line, setLine] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (phrases.length === 0) return;
    const full = phrases[phraseIndex % phrases.length] ?? "";
    let t: ReturnType<typeof setTimeout>;

    if (typing) {
      if (line.length < full.length) {
        t = setTimeout(() => setLine(full.slice(0, line.length + 1)), TYPE_MS);
      } else {
        t = setTimeout(() => setTyping(false), HOLD_MS);
      }
    } else if (line.length > 0) {
      t = setTimeout(() => setLine(line.slice(0, -1)), DELETE_MS);
    } else {
      t = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setTyping(true);
      }, BETWEEN_MS);
    }

    return () => clearTimeout(t);
  }, [line, phraseIndex, typing, phrases]);

  return (
    <p className={`typewriter-line ${className ?? ""}`} aria-live="polite">
      <span className="typewriter-text">{line}</span>
      <span className="typewriter-caret" aria-hidden>
        ▌
      </span>
    </p>
  );
}
