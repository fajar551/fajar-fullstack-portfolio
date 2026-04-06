"use client";

import { useDict } from "@/components/LocaleProvider";
import { useEffect, useState } from "react";

const SHOW_TOP_AFTER_PX = 320;

export function ScrollChrome() {
  const { scroll } = useDict();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const st = root.scrollTop;
      const total = root.scrollHeight - root.clientHeight;
      const p = total > 0 ? st / total : 0;
      setProgress(Number.isFinite(p) ? Math.min(1, Math.max(0, p)) : 0);
      setShowTop(st > SHOW_TOP_AFTER_PX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTop = () => {
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: instant ? "auto" : "smooth" });
  };

  const pct = Math.round(progress * 100);

  return (
    <>
      <div
        className="scroll-progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={scroll.progressLabel}
      >
        <div
          className="scroll-progress-fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <button
        type="button"
        className={`scroll-top-btn${showTop ? " scroll-top-btn--visible" : ""}`}
        onClick={goTop}
        aria-label={scroll.toTop}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
          <path d="M12 19V5M12 5l-7 7M12 5l7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
