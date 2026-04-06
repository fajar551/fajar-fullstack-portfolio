"use client";

import Image from "next/image";
import { useDict, useLocale } from "@/components/LocaleProvider";
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
} from "@/lib/site";

export function HomePageContent() {
  const { locale } = useLocale();
  const d = useDict();

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
            <p className="mt-5 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-[var(--mist)] sm:text-base">
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

            <div className="mt-8 flex flex-wrap gap-2">
              <a className="link-pill" href={`mailto:${EMAIL}`}>
                {d.hero.email}
              </a>
              <a className="link-pill" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                {d.hero.phone}
              </a>
              <a className="link-pill" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                {d.hero.linkedin}
              </a>
              <a className="link-pill" href={PORTFOLIO_EXTERNAL} target="_blank" rel="noopener noreferrer">
                {d.hero.portfolioCanva}
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[min(100%,380px)] flex-col items-center overflow-x-clip lg:mx-0 lg:max-w-none">
            <div className="orbit-accent top-[18%]" />
            <div className="relative w-full max-w-[280px]">
              <span className="hero-ring" />
              <Image
                src="/profile-round.webp"
                alt={d.about.imgRoundAlt}
                width={560}
                height={560}
                sizes="(max-width: 1024px) min(92vw, 380px), 280px"
                quality={78}
                className="hero-portrait-drop relative z-[1] w-full"
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
          <p className="mb-4 text-center font-[family-name:var(--font-space-mono)] text-[0.68rem] uppercase tracking-[0.28em] text-[var(--caption)]">
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

        <section id="pengalaman" className="section-defer mt-16 scroll-mt-28 sm:mt-20 md:mt-24 md:scroll-mt-28">
          <h2 className="section-title text-xl font-semibold text-[var(--snow)] sm:text-2xl">{d.experience.title}</h2>
          <div className="mt-8 exp-grid">
            <article className="slab p-5 sm:p-7">
              <p className="exp-meta">{d.experience.q1.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--snow)]">{d.experience.q1.company}</h3>
              <p className="mt-1 text-sm text-[var(--mist)]">{d.experience.roleFtBandung}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                {d.experience.q1.bullets.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>

            <article className="slab p-5 sm:p-7">
              <p className="exp-meta">{d.experience.tdi1.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--snow)]">{d.experience.tdi1.company}</h3>
              <p className="mt-1 text-sm text-[var(--mist)]">{d.experience.roleFtBandung}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                {d.experience.tdi1.bullets.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="exp-meta mt-8">{d.experience.tdi2.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--snow)]">{d.experience.tdi2.company}</h3>
              <p className="mt-1 text-sm text-[var(--mist)]">{d.experience.roleIntern}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                {d.experience.tdi2.bullets.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="proyek" className="section-defer mt-16 scroll-mt-28 sm:mt-20 md:mt-24 md:scroll-mt-28">
          <h2 className="section-title text-xl font-semibold text-[var(--snow)] sm:text-2xl">{d.projects.title}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.projects.items.map((p) => (
              <li key={p.title} className="slab p-5 transition-transform hover:-translate-y-1 sm:p-6">
                <h3 className="font-semibold text-[var(--snow)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--mist)]">{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>

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

        <section className="section-defer mt-16 grid gap-6 sm:mt-20 sm:gap-8 md:mt-24 lg:grid-cols-2">
          <div id="pendidikan" className="slab scroll-mt-28 p-5 sm:p-7 md:scroll-mt-28">
            <h2 className="text-xl font-semibold text-[var(--snow)]">{d.education.title}</h2>
            <p className="exp-meta mt-4">{d.education.period}</p>
            <h3 className="mt-2 font-semibold text-[var(--snow)]">{d.education.school}</h3>
            <p className="mt-1 text-sm text-[var(--mist)]">{d.education.degree}</p>
            <h4 className="mt-6 text-sm font-semibold text-[var(--snow)]">{d.education.academicTitle}</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--mist)] marker:text-[var(--signal)]">
              {d.education.academicItems.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="slab p-5 sm:p-7">
            <h2 className="text-xl font-semibold text-[var(--snow)]">{d.certification.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--mist)]">{d.certification.body}</p>
            <p className="mt-6 text-xs font-[family-name:var(--font-space-mono)] text-[var(--caption-muted)]">
              {d.certification.toolchain}
            </p>
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
                <a className="underline decoration-[var(--signal)]/40 underline-offset-4 hover:text-[var(--snow)]" href={`tel:${PHONE.replace(/\s/g, "")}`}>
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
