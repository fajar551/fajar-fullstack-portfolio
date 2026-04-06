const PHRASES = [
  "Full-Stack Developer · skala produksi",
  "Fintech, pemerintahan & billing volume tinggi",
  "React · NestJS · Laravel · Node.js",
  "Microservices · AI (OpenAI) · real-time chat",
  "Mobile: React Native & Flutter",
] as const;

const SEC_PER_PHRASE = 5;
const CYCLE_SEC = PHRASES.length * SEC_PER_PHRASE;

/** Tagline berganti frasa — murni CSS, tanpa JS di klien (ringan untuk TBT). */
export function RotatingTagline({ className }: { className?: string }) {
  return (
    <p className={`rotating-tagline ${className ?? ""}`} aria-live="polite">
      <span className="rotating-tagline__track">
        {PHRASES.map((text, i) => (
          <span
            key={text}
            className="rotating-tagline__phrase"
            style={{
              animationDuration: `${CYCLE_SEC}s`,
              animationDelay: `${i * SEC_PER_PHRASE}s`,
            }}
          >
            {text}
          </span>
        ))}
      </span>
      <span className="typewriter-caret" aria-hidden>
        ▌
      </span>
    </p>
  );
}
