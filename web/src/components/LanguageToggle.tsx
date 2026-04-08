"use client";

import { useDict, useLocale } from "@/components/LocaleProvider";
import type { Locale } from "@/i18n/dictionaries";

const options: { code: Locale; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const { lang } = useDict();

  return (
    <div
      role="group"
      aria-label={lang.groupLabel}
      className="inline-flex h-9 shrink-0 items-center rounded-full border border-[var(--toggle-border)] bg-[var(--toggle-bg)] p-0.5 text-[var(--snow)]"
    >
      {options.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={
              active
                ? "lang-toggle-btn--active min-w-[2rem] rounded-full border px-2.5 py-1 text-center text-[0.7rem] font-bold uppercase tracking-wide"
                : "min-w-[2rem] rounded-full px-2.5 py-1 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-[var(--snow)] transition hover:opacity-100 dark:text-[var(--mist)]"
            }
            aria-pressed={active}
            aria-label={code === "id" ? lang.id : lang.en}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
