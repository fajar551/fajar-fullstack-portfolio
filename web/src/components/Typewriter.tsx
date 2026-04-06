"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Full-Stack Developer · skala produksi",
  "Fintech, pemerintahan & billing volume tinggi",
  "React · NestJS · Laravel · Node.js",
  "Microservices · AI (OpenAI) · real-time chat",
  "Mobile: React Native & Flutter",
];

const TYPE_MS = 42;
const HOLD_MS = 2200;
const DELETE_MS = 28;
const BETWEEN_MS = 380;

export function Typewriter({ className }: { className?: string }) {
  const [line, setLine] = useState("");
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const full = PHRASES[phaseIdx % PHRASES.length];
    let t: ReturnType<typeof setTimeout>;

    if (typing) {
      if (line.length < full.length) {
        t = setTimeout(() => setLine(full.slice(0, line.length + 1)), TYPE_MS);
      } else {
        t = setTimeout(() => setTyping(false), HOLD_MS);
      }
    } else {
      if (line.length > 0) {
        t = setTimeout(() => setLine(line.slice(0, -1)), DELETE_MS);
      } else {
        t = setTimeout(() => {
          setPhaseIdx((i) => (i + 1) % PHRASES.length);
          setTyping(true);
        }, BETWEEN_MS);
      }
    }

    return () => clearTimeout(t);
  }, [line, phaseIdx, typing]);

  return (
    <p className={className} aria-live="polite">
      <span className="typewriter-text">{line}</span>
      <span className="typewriter-caret" aria-hidden>
        ▌
      </span>
    </p>
  );
}
