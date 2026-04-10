"use client";

import Image from "next/image";
import { useId } from "react";
import { useDict, useLocale } from "@/components/LocaleProvider";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import TechMarquee from "@/components/TechMarquee";
import { Typewriter } from "@/components/Typewriter";
import {
  CV_FILENAME,
  EMAIL,
  GITHUB,
  LINKEDIN,
  LOCATION,
  PHONE,
  PORTFOLIO_EXTERNAL,
  WHATSAPP_URL,
} from "@/lib/site";

export function HomePageContent() {
  const { locale } = useLocale();
  const d = useDict();
  const heroRingGradId = `heroCvRing-${useId().replace(/:/g, "")}`;

  return (
    <div className="relative min-w-0 overflow-x-clip">
      <SiteHeader />

      <main className="mx-auto min-w-0 max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24">
        <section className="relative grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <div className="relative z-[1] min-w-0">
            <p className="mt-0 max-md:mt-6 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.22em] text-[var(--mist)]">
              {d.hero.roleLocation}
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--snow)] sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-[clamp(2.75rem,4vw,3.35rem)]">
              Fajar Habib{" "}
              <span className="bg-gradient-to-r from-[var(--signal)] via-[var(--snow)] to-[var(--violet-hot)] bg-clip-text text-transparent">
                Zaelani
              </span>
            </h1>
            <Typewriter key={locale} className="mt-6" phrases={d.typewriter} />
            <p className="max-w-xl text-pretty text-[0.95rem] leading-relaxed text-[var(--mist)] sm:text-base">
              {d.hero.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                className="btn-primary btn-github w-full justify-center sm:w-auto"
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {d.hero.github}
              </a>
              <a
                className="btn-primary btn-cv w-full justify-center sm:w-auto"
                href="/cv-fajar-habib-zaelani.docx"
                download={CV_FILENAME}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 3v12m0 0l4-4m-4 4L8 11M5 21h14" />
                </svg>
                {d.hero.downloadCv}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="hero-contact-icon"
                href={`mailto:${EMAIL}`}
                aria-label={d.hero.email}
                title={d.hero.email}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a
                className="hero-contact-icon"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={d.hero.phone}
                title={d.hero.phone}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.163-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </a>
              <a
                className="hero-contact-icon"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={d.hero.linkedin}
                title={d.hero.linkedin}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                className="hero-contact-icon"
                href={PORTFOLIO_EXTERNAL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={d.hero.portfolioCanva}
                title={d.hero.portfolioCanva}
              >
                <svg width="20" height="20" viewBox="0 0 36 36" aria-hidden>
                  <text
                    x="18"
                    y="18"
                    dominantBaseline="central"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="30"
                    fontWeight="900"
                    fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                  >
                    C
                  </text>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[min(100%,380px)] flex-col items-center overflow-x-clip lg:mx-0 lg:max-w-none">
            <div className="orbit-accent top-[18%]" />
            <div className="hero-portrait-frame relative w-full max-w-[280px]">
              <svg className="hero-ring-svg" viewBox="0 0 100 100" aria-hidden>
                <defs>
                  <linearGradient
                    id={heroRingGradId}
                    gradientUnits="userSpaceOnUse"
                    x1="12"
                    y1="88"
                    x2="88"
                    y2="12"
                  >
                    <stop offset="0%" stopColor="var(--ember)" />
                    <stop offset="100%" stopColor="var(--btn-cv-grad-end)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke={`url(#${heroRingGradId})`}
                  strokeWidth="2.1"
                  strokeDasharray="9 12"
                  strokeLinecap="round"
                />
              </svg>
              <Image
                src="/profile-round.webp"
                alt={d.about.imgRoundAlt}
                width={560}
                height={560}
                sizes="(max-width: 1024px) min(92vw, 380px), 280px"
                quality={78}
                className="hero-portrait-drop relative z-[1] w-full rounded-full"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section
          className="mt-12 slab px-3 py-5 sm:mt-16 sm:px-4 sm:py-6 md:mt-20"
          aria-label={d.marquee.aria}
        >
          <p className="mb-4 text-center font-[family-name:var(--font-space-mono)] text-[0.68rem] font-bold uppercase tracking-[0.28em] text-black dark:text-[var(--snow)]">
            {d.marquee.caption}
          </p>
          <TechMarquee />
        </section>

        <section id="tentang" className="section-defer mt-16 scroll-mt-28 sm:mt-20 md:mt-24 md:scroll-mt-28">
          <h2 className="section-title text-xl font-semibold text-[var(--snow)] sm:text-2xl">{d.about.title}</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative flex justify-center overflow-x-clip lg:justify-start">
              <div className="relative w-full max-w-[280px] overflow-x-clip">
                <div className="portrait-glow pointer-events-none absolute -inset-6 rounded-[2rem] opacity-60 blur-2xl" />
                <div className="polaroid polaroid--tilt-right relative z-[1] w-full">
                  <Image
                    src="/profile-square.webp"
                    alt={d.about.imgSquareAlt}
                    width={400}
                    height={400}
                    sizes="(max-width: 1024px) min(92vw, 280px), 280px"
                    quality={80}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="polaroid__img object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="slab p-5 sm:p-8">
              <p className="text-pretty text-[0.95rem] leading-relaxed text-[var(--mist)] sm:text-base">{d.about.lead}</p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--snow)]">
                {d.about.bullets.map((text) => (
                  <li key={text} className="flex gap-2">
                    <span className="mt-1 text-[var(--signal)]">◆</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section id="skills" className="section-defer mt-16 scroll-mt-28 sm:mt-20 md:mt-24 md:scroll-mt-28">
          <h2 className="section-title text-xl font-semibold text-[var(--snow)] sm:text-2xl">{d.technical.title}</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="slab p-5 sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--signal)]">{d.technical.languages}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mist)]">{d.technical.languagesBody}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--signal)]">
                {d.technical.framework}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mist)]">{d.technical.frameworkBody}</p>
            </div>
            <div className="slab p-5 sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--signal)]">{d.technical.tools}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {d.technical.toolsChips.map((s) => (
                  <span key={s} className="skill-chip">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[var(--mist)]">{d.technical.toolsNote}</p>
            </div>
          </div>
        </section>

        <section id="pengalaman" className="section-defer mt-16 scroll-mt-28 sm:mt-20 md:mt-24 md:scroll-mt-28">
          <h2 className="section-title text-xl font-semibold text-[var(--snow)] sm:text-2xl">{d.experience.title}</h2>
          <div className="mt-8 exp-grid">
            <article className="slab p-5 sm:p-7">
              <h3 className="text-lg font-semibold text-[var(--snow)]">{d.experience.q1.company}</h3>
              <p className="exp-meta mt-2">{d.experience.q1.period}</p>
              <p className="mt-1 text-sm text-[var(--mist)]">{d.experience.roleFtBandung}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                {d.experience.q1.bullets.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>

            <article className="slab p-5 sm:p-7">
              <h3 className="text-lg font-semibold text-[var(--snow)]">{d.experience.tdi1.company}</h3>
              <div className="mt-5 space-y-8">
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--signal)] bg-[var(--surface)]" />
                  <span className="absolute bottom-[-2.25rem] left-[5px] top-5 w-px bg-[var(--signal)]/45" />
                  <p className="exp-meta">{d.experience.tdi1.period}</p>
                  <p className="mt-1 text-sm text-[var(--mist)]">{d.experience.roleFtBandung}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                    {d.experience.tdi1.bullets.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--signal)] bg-[var(--surface)]" />
                  <p className="exp-meta">{d.experience.tdi2.period}</p>
                  <p className="mt-1 text-sm text-[var(--mist)]">{d.experience.roleIntern}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                    {d.experience.tdi2.bullets.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <footer id="kontak" className="section-defer mt-16 scroll-mt-28 border-t border-[var(--footer-border)] pt-8 sm:mt-20 sm:pt-10 md:mt-24 md:scroll-mt-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-semibold text-[var(--snow)]">{d.footer.cta}</p>
              <p className="mt-2 text-sm text-[var(--mist)]">{LOCATION}</p>
              <p className="mt-1 break-words text-sm text-[var(--mist)] [overflow-wrap:anywhere]">
                <a className="underline decoration-[var(--signal)]/40 underline-offset-4 hover:text-[var(--snow)]" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                ·{" "}
                <a
                  className="underline decoration-[var(--signal)]/40 underline-offset-4 hover:text-[var(--snow)]"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PHONE}
                </a>
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 min-[420px]:w-auto min-[420px]:flex-row min-[420px]:flex-wrap">
              <a
                className="btn-primary btn-github w-full justify-center !px-5 !py-2.5 text-sm min-[420px]:w-auto"
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                {d.hero.github}
              </a>
              <a
                className="btn-primary btn-cv w-full justify-center !px-5 !py-2.5 text-sm min-[420px]:w-auto"
                href="/cv-fajar-habib-zaelani.docx"
                download={CV_FILENAME}
              >
                {d.hero.downloadCv}
              </a>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-[var(--caption-faint)]">
            {d.footer.copyright(new Date().getFullYear())}
          </p>
        </footer>
      </main>
    </div>
  );
}
