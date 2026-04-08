"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useDict } from "@/components/LocaleProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

function MoreIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}

export function SiteHeader() {
  const d = useDict();
  const navLinks = [
    { href: "#tentang", label: d.nav.about },
    { href: "#pengalaman", label: d.nav.experience },
    { href: "#proyek", label: d.nav.projects },
    { href: "#skills", label: d.nav.skills },
    { href: "#kontak", label: d.nav.contact },
  ] as const;

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerH, setHeaderH] = useState(0);
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const apply = () => {
      const nextHeight = el.offsetHeight;
      setHeaderH((prev) => (prev === nextHeight ? prev : nextHeight));
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (btnRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  const close = () => setOpen(false);

  const mobileMenu =
    mounted && open ? (
      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={d.nav.mobileDialog}
        className="mobile-nav-portal fixed right-0 bottom-0 left-0 z-[100] flex flex-col md:hidden"
        style={{ top: Math.max(headerH, 0) }}
      >
        <button
          type="button"
          className="mobile-nav-backdrop absolute inset-0 -z-10 border-0 bg-[color-mix(in_srgb,var(--ink)_94%,transparent)] backdrop-blur-md"
          aria-label={d.nav.closeMenuBackdrop}
          onClick={close}
        />
        <div className="relative flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {navLinks.map(({ href, label }) => (
            <a key={href} className="mobile-nav-link font-bold" href={href} onClick={close}>
              {label}
            </a>
          ))}
        </div>
      </div>
    ) : null;

  return (
    <>
      <header
        ref={headerRef}
        className="site-header sticky top-0 z-[110] max-md:pt-[max(1rem,env(safe-area-inset-top))] border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--ink)_90%,transparent)] px-4 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--ink)_80%,transparent)] sm:px-6 md:border-transparent md:bg-transparent md:py-8 md:backdrop-blur-none"
      >
        <div className="mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-3">
          <a
            href="#"
            className="min-h-11 min-w-[3rem] shrink-0 py-2 font-semibold tracking-tight text-[var(--snow)]"
          >
            FHZ<span className="text-[var(--signal)]">.</span>
          </a>

          <nav
            className="hidden flex-wrap items-center gap-2 text-sm md:flex"
            aria-label={d.nav.main}
          >
            {navLinks.map(({ href, label }) => (
              <a key={href} className="link-pill font-bold" href={href}>
                {label}
              </a>
            ))}
            <LanguageToggle />
            <ThemeToggle />
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              ref={btnRef}
              type="button"
              className="mobile-nav-trigger inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--toggle-border)] bg-[var(--toggle-bg)] text-[var(--snow)] transition hover:border-[var(--signal)] hover:text-[var(--signal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--signal)] active:scale-[0.98]"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? d.nav.closeMenu : d.nav.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <MoreIcon />
            </button>
          </div>
        </div>
      </header>
      {mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
