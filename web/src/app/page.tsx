import dynamic from "next/dynamic";
import Image from "next/image";
import { Typewriter } from "@/components/Typewriter";

const TechMarquee = dynamic(() => import("@/components/TechMarquee"), {
  loading: () => (
    <div
      className="flex h-[5.5rem] items-center justify-center rounded-[var(--radius-slab)] border border-[rgba(125,211,252,0.1)] bg-[rgba(255,255,255,0.03)]"
      aria-hidden
    />
  ),
});

const GITHUB = "https://github.com/fajar551";
const LINKEDIN = "https://www.linkedin.com/in/fajarhabib551";
const PORTFOLIO_EXTERNAL = "https://fajarhabizaelani.my.canva.site/portofolio-fajar-habib-zaelani";
const EMAIL = "fajarhabibzaelani@gmail.com";
const PHONE = "+62 821 3069 7168";
const LOCATION = "Bandung, Jawa Barat 40383";

export default function Home() {
  return (
    <div className="relative">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <a href="#" className="font-semibold tracking-tight text-[var(--snow)]">
          FHZ<span className="text-[var(--signal)]">.</span>
        </a>
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          <a className="link-pill" href="#tentang">
            Tentang
          </a>
          <a className="link-pill" href="#pengalaman">
            Pengalaman
          </a>
          <a className="link-pill" href="#proyek">
            Proyek
          </a>
          <a className="link-pill" href="#skills">
            Skills
          </a>
          <a className="link-pill" href="#kontak">
            Kontak
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        {/* Hero */}
        <section className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <div className="relative z-[1]">
            <p className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.22em] text-[var(--mist)]">
              Full-Stack Developer · Bandung
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--snow)] sm:text-5xl lg:text-[3.35rem]">
              Fajar Habib{" "}
              <span className="bg-gradient-to-r from-[var(--signal)] via-[var(--snow)] to-[var(--violet-hot)] bg-clip-text text-transparent">
                Zaelani
              </span>
            </h1>
            <Typewriter className="mt-6 min-h-[3.25rem]" />
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--mist)]">
              Full-Stack Developer dengan 3+ tahun pengalaman menghadirkan solusi web dan mobile yang
              skalabel untuk sektor fintech dan pemerintahan. Terbiasa mengoptimalkan sistem volume
              tinggi (8.400+ faktur bulanan, 600+ transaksi harian), merancang arsitektur
              microservices, dan mengembangkan aplikasi berbasis AI melalui integrasi OpenAI.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a className="btn-primary btn-github" href={GITHUB} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                className="btn-primary btn-cv"
                href="/cv-fajar-habib-zaelani.docx"
                download="Fajar-Habib-Zaelani-CV.docx"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 3v12m0 0l4-4m-4 4L8 11M5 21h14" />
                </svg>
                Unduh CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <a className="link-pill" href={`mailto:${EMAIL}`}>
                Email
              </a>
              <a className="link-pill" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                Telepon
              </a>
              <a className="link-pill" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="link-pill" href={PORTFOLIO_EXTERNAL} target="_blank" rel="noopener noreferrer">
                Portofolio (Canva)
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[380px] flex-col items-center gap-8 lg:mx-0 lg:max-w-none">
            <div className="orbit-accent top-[18%]" />
            <div className="relative w-[min(100%,280px)]">
              <span className="hero-ring" />
              <Image
                src="/profile-round.webp"
                alt="Fajar Habib Zaelani — foto formal dengan frame bulat"
                width={560}
                height={560}
                sizes="(max-width: 1024px) min(92vw, 380px), 280px"
                quality={78}
                className="relative z-[1] w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
                priority
                fetchPriority="high"
              />
            </div>
            <div className="polaroid polaroid--tilt-right w-[min(100%,240px)]">
              <Image
                src="/profile-square.webp"
                alt="Fajar — potret formal frame kotak"
                width={400}
                height={400}
                sizes="240px"
                quality={80}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Marquee strip */}
        <section className="section-defer mt-20 slab px-4 py-6" aria-label="Teknologi yang digunakan">
          <p className="mb-4 text-center font-[family-name:var(--font-space-mono)] text-[0.68rem] uppercase tracking-[0.28em] text-[rgba(159,179,209,0.75)]">
            Orbit stack — loop tanpa putus
          </p>
          <TechMarquee />
        </section>

        {/* Tentang + cutout */}
        <section id="tentang" className="section-defer mt-24 scroll-mt-24">
          <h2 className="section-title text-2xl font-semibold text-[var(--snow)]">Tentang</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[320px]">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(92,225,196,0.25), transparent 55%), radial-gradient(circle at 70% 60%, rgba(192,132,252,0.2), transparent 50%)",
                  }}
                />
                <Image
                  src="/profile-cutout.webp"
                  alt="Fajar — foto tanpa background"
                  width={640}
                  height={640}
                  sizes="(max-width: 1024px) min(92vw, 360px), 320px"
                  quality={82}
                  loading="lazy"
                  decoding="async"
                  className="relative z-[1] w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
            <div className="slab p-8">
              <p className="text-pretty leading-relaxed text-[var(--mist)]">
                Mahir pada stack modern: Laravel, Angular, React, dan Spring Boot, dengan pengalaman
                mobile menggunakan React Native dan Flutter serta sistem real-time. Terbiasa memimpin
                siklus pengembangan end-to-end, mengoptimalkan performa, dan mendampingi developer
                junior di lingkungan produksi dengan standar kualitas kode dan keandalan sistem yang
                tinggi.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--snow)]">
                <li className="flex gap-2">
                  <span className="mt-1 text-[var(--signal)]">◆</span>
                  <span>Web performance, lazy loading & caching (skor PageSpeed 90+).</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-[var(--signal)]">◆</span>
                  <span>OAuth2, MFA kustom (fingerprint perangkat + OTP email untuk WHMCS).</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-[var(--signal)]">◆</span>
                  <span>Integrasi cloud & container: Portainer, Coolify, CapRover, Docker, Redis, WebSocket.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pengalaman */}
        <section id="pengalaman" className="section-defer mt-24 scroll-mt-24">
          <h2 className="section-title text-2xl font-semibold text-[var(--snow)]">Pengalaman kerja</h2>
          <div className="mt-8 exp-grid">
            <article className="slab p-7">
              <p className="exp-meta">Okt 2024 — Sekarang</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--snow)]">PT. Qwords Company Internationals</h3>
              <p className="mt-1 text-sm text-[var(--mist)]">Full-Stack Developer (Full-Time) · Bandung, ID</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                <li>
                  Memproses dan mengoptimalkan sistem billing untuk 8.400+ faktur/bulan dan 600+
                  transaksi/hari dengan ketersediaan, performa, dan akurasi data yang tinggi.
                </li>
                <li>
                  Memimpin proses end-to-end: perencanaan, desain, development, testing, review kode,
                  debugging, dan deployment di berbagai platform web.
                </li>
                <li>
                  Membangun aplikasi berperforma tinggi dengan React, NestJS, Laravel, dan Node.js.
                </li>
                <li>
                  Chatbot AI & live chat real-time dengan OpenAI API, Node.js, NestJS, React; deploy
                  PM2 di lingkungan cPanel.
                </li>
                <li>
                  MFA kustom untuk WHMCS (fingerprint + OTP email); CBMS (Laravel) di mobile (React
                  Native, rilis Play Store); FCM & WhatsApp API (Watzapp.id).
                </li>
                <li>
                  Aplikasi absensi Flutter (~50 DAU), integrasi Portainer, Coolify, CapRover via REST,
                  modul WHMCS enterprise & pipeline untuk Biznet GIO, Asianet, Botpress, n8n, WordPress.
                </li>
              </ul>
            </article>

            <article className="slab p-7">
              <p className="exp-meta">Okt 2023 — Okt 2024</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--snow)]">PT Tabel Data Informatika</h3>
              <p className="mt-1 text-sm text-[var(--mist)]">Full-Stack Developer (Full-Time) · Bandung, ID</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                <li>
                  Merancang dan memelihara aplikasi web end-to-end untuk fintech & pemerintahan dengan
                  Java Spring Boot dan Angular (v8/v16).
                </li>
                <li>Microservices Spring Boot; front-end responsif dengan Angular CLI & Angular Material.</li>
                <li>REST API, OAuth2, UUID; PostgreSQL volume tinggi; JasperReports.</li>
                <li>
                  <strong className="text-[var(--snow)]">Key projects:</strong> ETO Fintech (Timor
                  Leste) — microservices pembelian pulsa & data; SIAP BOS/BOP (DKI Jakarta) —
                  distribusi dana & laporan kompleks.
                </li>
              </ul>
              <p className="exp-meta mt-8">Agu 2022 — Feb 2023</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--snow)]">PT Tabel Data Informatika</h3>
              <p className="mt-1 text-sm text-[var(--mist)]">Full-Stack Developer Intern (Full-Time) · Bandung, ID</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--mist)] marker:text-[var(--signal)]">
                <li>Aplikasi BKU BUD untuk Pemprov DKI Jakarta — Angular 9 & Spring Boot.</li>
                <li>Landing, login, dashboard; optimasi query untuk tabel data besar.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Proyek */}
        <section id="proyek" className="section-defer mt-24 scroll-mt-24">
          <h2 className="section-title text-2xl font-semibold text-[var(--snow)]">Proyek pilihan</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Chatbot",
                desc: "Chatbot percakapan + WhatsApp API — Node.js & OpenAI API.",
              },
              {
                title: "CBMS Mobile App",
                desc: "Billing web ke mobile (React Native) dengan notifikasi Firebase.",
              },
              {
                title: "Attendance App",
                desc: "Absensi karyawan Flutter dengan lokasi & multi-shift (~50 DAU).",
              },
            ].map((p) => (
              <li key={p.title} className="slab p-6 transition-transform hover:-translate-y-1">
                <h3 className="font-semibold text-[var(--snow)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--mist)]">{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="section-defer mt-24 scroll-mt-24">
          <h2 className="section-title text-2xl font-semibold text-[var(--snow)]">Skills teknis</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="slab p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--signal)]">Bahasa</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mist)]">
                JavaScript, TypeScript, HTML5, CSS3, PHP, Python, Java, SQL — level advanced.
              </p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--signal)]">
                Framework
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mist)]">
                Laravel, Angular, React, Next.js, Node.js, Express.js, Spring Boot, Flutter, React
                Native.
              </p>
            </div>
            <div className="slab p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--signal)]">Tools & DB</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Git / GitHub",
                  "Docker",
                  "Redis",
                  "WebSocket",
                  "cPanel",
                  "aaPanel",
                  "VPS",
                  "PM2",
                  "Figma",
                  "Notion",
                  "PostgreSQL",
                  "MySQL",
                  "Oracle",
                  "FCM",
                  "REST",
                  "OpenAI API",
                ].map((s) => (
                  <span key={s} className="skill-chip">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[var(--mist)]">
                Relevan: optimasi web, aksesibilitas, clean code, desain REST, microservices, auth
                (OAuth2, MFA), integrasi sistem, CI/CD & deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Pendidikan & sertifikasi */}
        <section className="section-defer mt-24 grid gap-8 lg:grid-cols-2">
          <div id="pendidikan" className="slab scroll-mt-24 p-7">
            <h2 className="text-xl font-semibold text-[var(--snow)]">Pendidikan</h2>
            <p className="exp-meta mt-4">Agu 2019 — Sep 2023</p>
            <h3 className="mt-2 font-semibold text-[var(--snow)]">STMIK Mardira Indonesia</h3>
            <p className="mt-1 text-sm text-[var(--mist)]">
              Teknik Informatika — IPK: 3.72/4.0 · Bandung, ID
            </p>
            <h4 className="mt-6 text-sm font-semibold text-[var(--snow)]">Proyek akademik</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--mist)] marker:text-[var(--signal)]">
              <li>Operational Cost System (Laravel) — keuangan & laporan (ekspor HTML).</li>
              <li>SPOT Learning System — komponen UI untuk LMS (tim 7 developer).</li>
            </ul>
          </div>
          <div className="slab p-7">
            <h2 className="text-xl font-semibold text-[var(--snow)]">Sertifikasi</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--mist)]">
              Udemy: Java Programming, PHP Programming, Laravel Web Development.
            </p>
            <p className="mt-6 text-xs font-[family-name:var(--font-space-mono)] text-[rgba(159,179,209,0.65)]">
              Versi toolchain lokal: Node.js v20.11.1 · npm 10.2.4
            </p>
          </div>
        </section>

        {/* Kontak */}
        <footer id="kontak" className="section-defer mt-24 scroll-mt-24 border-t border-[rgba(125,211,252,0.12)] pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-semibold text-[var(--snow)]">Mari terhubung</p>
              <p className="mt-2 text-sm text-[var(--mist)]">{LOCATION}</p>
              <p className="mt-1 text-sm text-[var(--mist)]">
                <a className="underline decoration-[var(--signal)]/40 underline-offset-4 hover:text-[var(--snow)]" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                ·{" "}
                <a className="underline decoration-[var(--signal)]/40 underline-offset-4 hover:text-[var(--snow)]" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  {PHONE}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a className="btn-primary btn-github !px-5 !py-2.5 text-sm" href={GITHUB} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="btn-primary btn-cv !px-5 !py-2.5 text-sm" href="/cv-fajar-habib-zaelani.docx" download="Fajar-Habib-Zaelani-CV.docx">
                Unduh CV
              </a>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-[rgba(159,179,209,0.55)]">
            © {new Date().getFullYear()} Fajar Habib Zaelani — dibangun dengan Next.js.
          </p>
        </footer>
      </main>
    </div>
  );
}
