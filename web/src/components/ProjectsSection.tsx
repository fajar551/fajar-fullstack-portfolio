"use client";

import Image from "next/image";
import { useDict, useLocale } from "@/components/LocaleProvider";
import { PORTFOLIO_EXTERNAL } from "@/lib/site";
import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 6;

export function ProjectsSection() {
  const { locale } = useLocale();
  const d = useDict();
  const items = d.projects.items;
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [locale]);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const slice = useMemo(
    () => items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [items, page],
  );

  return (
    <section id="proyek" className="section-defer mt-16 scroll-mt-28 sm:mt-20 md:mt-24 md:scroll-mt-28">
      <h2 className="section-title text-xl font-semibold text-[var(--snow)] sm:text-2xl">{d.projects.title}</h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slice.map((proj) => {
          const imgs = proj.images.length > 0 ? proj.images : ["/profile-square.webp"];
          const two = imgs.length === 2;
          const href = proj.projectUrl ?? PORTFOLIO_EXTERNAL;
          return (
            <li key={proj.id} className="slab p-5 sm:p-6">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ember)]"
                aria-label={`${proj.title} — ${d.projects.viewHere}`}
              >
                <div className={`grid gap-2 ${two ? "grid-cols-2" : "grid-cols-1"}`}>
                  {imgs.map((imgSrc) => (
                    <Image
                      key={`${proj.id}-${imgSrc}`}
                      src={imgSrc}
                      alt=""
                      width={640}
                      height={360}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="h-56 w-full rounded-xl bg-[color-mix(in_srgb,var(--ink)_94%,var(--slab-bg-bottom))] object-contain p-1.5 transition-opacity group-hover:opacity-95"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  ))}
                </div>
                <h3 className="mt-4 font-semibold text-[var(--snow)] underline-offset-4 transition-colors group-hover:text-[var(--ember)] group-hover:underline group-hover:decoration-[var(--ember)]/50">
                  {proj.title}
                </h3>
              </a>
              <p className="mt-2 text-sm leading-relaxed text-[var(--mist)]">{proj.desc}</p>
              {proj.keyFeatures ? (
                <div className="mt-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--ember)]">
                    {d.projects.labelKeyFeatures}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--mist)]">{proj.keyFeatures}</p>
                </div>
              ) : null}
              {proj.techStack ? (
                <div className="mt-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--ember)]">
                    {d.projects.labelTechStack}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-space-mono)] text-[0.7rem] leading-relaxed text-[var(--caption)]">
                    {proj.techStack}
                  </p>
                </div>
              ) : null}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-[var(--ember)] underline decoration-[var(--ember)]/50 underline-offset-4 hover:text-[var(--snow)]"
              >
                {d.projects.viewHere}
              </a>
            </li>
          );
        })}
      </ul>

      {totalPages > 1 ? (
        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          aria-label={d.projects.paginationNav}
        >
          <button
            type="button"
            className="link-pill cursor-pointer font-bold disabled:pointer-events-none disabled:opacity-40"
            disabled={page <= 0}
            onClick={() => setPage((n) => Math.max(0, n - 1))}
          >
            {d.projects.paginationPrev}
          </button>
          <span className="font-[family-name:var(--font-space-mono)] text-xs font-bold text-[var(--caption)]">
            {d.projects.paginationPage(page + 1, totalPages)}
          </span>
          <button
            type="button"
            className="link-pill cursor-pointer font-bold disabled:pointer-events-none disabled:opacity-40"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((n) => Math.min(totalPages - 1, n + 1))}
          >
            {d.projects.paginationNext}
          </button>
        </nav>
      ) : null}
    </section>
  );
}
