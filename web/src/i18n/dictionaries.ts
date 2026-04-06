export type Locale = "id" | "en";

const id = {
  nav: {
    main: "Navigasi utama",
    about: "Tentang",
    experience: "Pengalaman",
    projects: "Proyek",
    skills: "Skills",
    contact: "Kontak",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    closeMenuBackdrop: "Tutup menu",
    mobileDialog: "Menu navigasi",
  },
  lang: {
    groupLabel: "Pilih bahasa",
    id: "Indonesia",
    en: "English",
  },
  scroll: {
    toTop: "Kembali ke atas halaman",
    progressLabel: "Progres scroll halaman",
  },
  hero: {
    roleLocation: "Full-Stack Developer · Bandung",
    intro:
      "Full-Stack Developer dengan 3+ tahun pengalaman menghadirkan solusi web dan mobile yang skalabel untuk sektor fintech dan pemerintahan. Terbiasa mengoptimalkan sistem volume tinggi (8.400+ faktur bulanan, 600+ transaksi harian), merancang arsitektur microservices, dan mengembangkan aplikasi berbasis AI melalui integrasi OpenAI.",
    github: "GitHub",
    downloadCv: "Unduh CV",
    email: "Email",
    phone: "Telepon",
    linkedin: "LinkedIn",
    portfolioCanva: "Portofolio (Canva)",
  },
  typewriter: [
    "Full-Stack Developer · skala produksi",
    "Fintech, pemerintahan & billing volume tinggi",
    "React · NestJS · Laravel · Node.js",
    "Microservices · AI (OpenAI) · real-time chat",
    "Mobile: React Native & Flutter",
  ],
  marquee: {
    aria: "Teknologi yang digunakan",
    caption: "Orbit stack — loop tanpa putus",
  },
  about: {
    title: "Tentang",
    lead:
      "Mahir pada stack modern: Laravel, Angular, React, dan Spring Boot, dengan pengalaman mobile menggunakan React Native dan Flutter serta sistem real-time. Terbiasa memimpin siklus pengembangan end-to-end, mengoptimalkan performa, dan mendampingi developer junior di lingkungan produksi dengan standar kualitas kode dan keandalan sistem yang tinggi.",
    bullets: [
      "Web performance, lazy loading & caching (skor PageSpeed 90+).",
      "OAuth2, MFA kustom (fingerprint perangkat + OTP email untuk WHMCS).",
      "Integrasi cloud & container: Portainer, Coolify, CapRover, Docker, Redis, WebSocket.",
    ],
    imgRoundAlt: "Fajar Habib Zaelani — foto formal dengan frame bulat",
    imgSquareAlt: "Fajar — potret formal frame kotak",
  },
  experience: {
    title: "Pengalaman kerja",
    roleFtBandung: "Full-Stack Developer (Full-Time) · Bandung, ID",
    roleIntern: "Full-Stack Developer Intern (Full-Time) · Bandung, ID",
    q1: {
      period: "Okt 2024 — Sekarang",
      company: "PT. Qwords Company Internationals",
      bullets: [
        "Memproses dan mengoptimalkan sistem billing untuk 8.400+ faktur/bulan dan 600+ transaksi/hari dengan ketersediaan, performa, dan akurasi data yang tinggi.",
        "Memimpin proses end-to-end: perencanaan, desain, development, testing, review kode, debugging, dan deployment di berbagai platform web.",
        "Membangun aplikasi berperforma tinggi dengan React, NestJS, Laravel, dan Node.js.",
        "Chatbot AI & live chat real-time dengan OpenAI API, Node.js, NestJS, React; deploy PM2 di lingkungan cPanel.",
        "MFA kustom untuk WHMCS (fingerprint + OTP email); CBMS (Laravel) di mobile (React Native, rilis Play Store); FCM & WhatsApp API (Watzapp.id).",
        "Aplikasi absensi Flutter (~50 DAU), integrasi Portainer, Coolify, CapRover via REST, modul WHMCS enterprise & pipeline untuk Biznet GIO, Asianet, Botpress, n8n, WordPress.",
      ],
    },
    tdi1: {
      period: "Okt 2023 — Okt 2024",
      company: "PT Tabel Data Informatika",
      bullets: [
        "Merancang dan memelihara aplikasi web end-to-end untuk fintech & pemerintahan dengan Java Spring Boot dan Angular (v8/v16).",
        "Microservices Spring Boot; front-end responsif dengan Angular CLI & Angular Material.",
        "REST API, OAuth2, UUID; PostgreSQL volume tinggi; JasperReports.",
        "Proyek utama: ETO Fintech (Timor Leste) — microservices pembelian pulsa & data; SIAP BOS/BOP (Jakarta) — distribusi dana & laporan kompleks.",
      ],
    },
    tdi2: {
      period: "Agu 2022 — Feb 2023",
      company: "PT Tabel Data Informatika",
      bullets: [
        "Aplikasi BKU BUD untuk Pemprov DKI Jakarta — Angular 9 & Spring Boot.",
        "Landing, login, dashboard; optimasi query untuk tabel data besar.",
      ],
    },
  },
  projects: {
    title: "Proyek pilihan",
    items: [
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
    ],
  },
  technical: {
    title: "Skills teknis",
    languages: "Bahasa",
    languagesBody:
      "JavaScript, TypeScript, HTML5, CSS3, PHP, Python, Java, SQL — level advanced.",
    framework: "Framework",
    frameworkBody:
      "Laravel, Angular, React, Next.js, Node.js, Express.js, Spring Boot, Flutter, React Native.",
    tools: "Tools & DB",
    toolsChips: [
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
    ],
    toolsNote:
      "Relevan: optimasi web, aksesibilitas, clean code, desain REST, microservices, auth (OAuth2, MFA), integrasi sistem, CI/CD & deployment.",
  },
  education: {
    title: "Pendidikan",
    period: "Agu 2019 — Sep 2023",
    school: "STMIK Mardira Indonesia",
    degree: "Teknik Informatika — IPK: 3.72/4.0 · Bandung, ID",
    academicTitle: "Proyek akademik",
    academicItems: [
      "Operational Cost System (Laravel) — keuangan & laporan (ekspor HTML).",
      "SPOT Learning System — komponen UI untuk LMS (tim 7 developer).",
    ],
  },
  certification: {
    title: "Sertifikasi",
    body: "Udemy: Java Programming, PHP Programming, Laravel Web Development.",
    toolchain: "Versi toolchain lokal: Node.js v20.11.1 · npm 10.2.4",
  },
  footer: {
    cta: "Mari terhubung",
    copyright: (year: number) =>
      `© ${year} Fajar Habib Zaelani — dibangun dengan Next.js.`,
  },
};

export type Dictionary = typeof id;

export const en: Dictionary = {
  nav: {
    main: "Main navigation",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    closeMenuBackdrop: "Close menu",
    mobileDialog: "Navigation menu",
  },
  lang: {
    groupLabel: "Choose language",
    id: "Indonesia",
    en: "English",
  },
  scroll: {
    toTop: "Back to top of page",
    progressLabel: "Page scroll progress",
  },
  hero: {
    roleLocation: "Full-Stack Developer · Bandung",
    intro:
      "Full-stack developer with 3+ years delivering scalable web and mobile solutions for fintech and public sector. Experienced in optimizing high-volume systems (8,400+ invoices/month, 600+ daily transactions), designing microservice architectures, and shipping AI-powered apps via OpenAI integration.",
    github: "GitHub",
    downloadCv: "Download CV",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    portfolioCanva: "Portfolio (Canva)",
  },
  typewriter: [
    "Full-stack developer · production scale",
    "Fintech, government & high-volume billing",
    "React · NestJS · Laravel · Node.js",
    "Microservices · AI (OpenAI) · real-time chat",
    "Mobile: React Native & Flutter",
  ],
  marquee: {
    aria: "Technologies used",
    caption: "Orbit stack — non-stop loop",
  },
  about: {
    title: "About",
    lead:
      "Strong on modern stacks: Laravel, Angular, React, and Spring Boot, with mobile experience using React Native and Flutter plus real-time systems. I lead end-to-end delivery, tune performance, and mentor juniors in production with high standards for code quality and reliability.",
    bullets: [
      "Web performance, lazy loading & caching (PageSpeed 90+).",
      "OAuth2, custom MFA (device fingerprint + email OTP for WHMCS).",
      "Cloud & container integrations: Portainer, Coolify, CapRover, Docker, Redis, WebSocket.",
    ],
    imgRoundAlt: "Fajar Habib Zaelani — formal headshot in a round frame",
    imgSquareAlt: "Fajar — formal portrait in a polaroid frame",
  },
  experience: {
    title: "Work experience",
    roleFtBandung: "Full-Stack Developer (Full-Time) · Bandung, ID",
    roleIntern: "Full-Stack Developer Intern (Full-Time) · Bandung, ID",
    q1: {
      period: "Oct 2024 — Present",
      company: "PT. Qwords Company Internationals",
      bullets: [
        "Process and optimize billing for 8,400+ invoices/month and 600+ daily transactions with strong uptime, performance, and data accuracy.",
        "Lead end-to-end delivery: planning, design, development, testing, code review, debugging, and deployment across web platforms.",
        "Build high-performance apps with React, NestJS, Laravel, and Node.js.",
        "AI chatbot & real-time live chat with OpenAI API, Node.js, NestJS, React; PM2 deployment on cPanel.",
        "Custom MFA for WHMCS (fingerprint + email OTP); CBMS (Laravel) on mobile (React Native, Play Store); FCM & WhatsApp API (Watzapp.id).",
        "Flutter attendance app (~50 DAU), Portainer / Coolify / CapRover REST integrations, enterprise WHMCS modules & pipelines for Biznet GIO, Asianet, Botpress, n8n, WordPress.",
      ],
    },
    tdi1: {
      period: "Oct 2023 — Oct 2024",
      company: "PT Tabel Data Informatika",
      bullets: [
        "Designed and maintained end-to-end web apps for fintech & government with Java Spring Boot and Angular (v8/v16).",
        "Spring Boot microservices; responsive front-end with Angular CLI & Angular Material.",
        "REST API, OAuth2, UUID; high-volume PostgreSQL; JasperReports.",
        "Key projects: ETO Fintech (Timor-Leste) — airtime & data microservices; SIAP BOS/BOP (DKI Jakarta) — fund distribution & complex reporting.",
      ],
    },
    tdi2: {
      period: "Aug 2022 — Feb 2023",
      company: "PT Tabel Data Informatika",
      bullets: [
        "BKU BUD app for DKI Jakarta provincial government — Angular 9 & Spring Boot.",
        "Landing, login, dashboard; query tuning for large tables.",
      ],
    },
  },
  projects: {
    title: "Featured projects",
    items: [
      {
        title: "AI Chatbot",
        desc: "Conversational chatbot + WhatsApp API — Node.js & OpenAI API.",
      },
      {
        title: "CBMS Mobile App",
        desc: "Billing web to mobile (React Native) with Firebase notifications.",
      },
      {
        title: "Attendance App",
        desc: "Flutter staff attendance with location & multi-shift (~50 DAU).",
      },
    ],
  },
  technical: {
    title: "Technical skills",
    languages: "Languages",
    languagesBody:
      "JavaScript, TypeScript, HTML5, CSS3, PHP, Python, Java, SQL — advanced level.",
    framework: "Frameworks",
    frameworkBody:
      "Laravel, Angular, React, Next.js, Node.js, Express.js, Spring Boot, Flutter, React Native.",
    tools: "Tools & databases",
    toolsChips: id.technical.toolsChips,
    toolsNote:
      "Also: web optimization, accessibility, clean code, REST design, microservices, auth (OAuth2, MFA), system integration, CI/CD & deployment.",
  },
  education: {
    title: "Education",
    period: "Aug 2019 — Sep 2023",
    school: "STMIK Mardira Indonesia",
    degree: "Informatics — GPA: 3.72/4.0 · Bandung, ID",
    academicTitle: "Academic projects",
    academicItems: [
      "Operational Cost System (Laravel) — finance & reporting (HTML export).",
      "SPOT Learning System — UI components for an LMS (team of 7 developers).",
    ],
  },
  certification: {
    title: "Certifications",
    body: "Udemy: Java Programming, PHP Programming, Laravel Web Development.",
    toolchain: "Local toolchain: Node.js v20.11.1 · npm 10.2.4",
  },
  footer: {
    cta: "Let’s connect",
    copyright: (year: number) => `© ${year} Fajar Habib Zaelani — built with Next.js.`,
  },
};

export const dictionaries: Record<Locale, Dictionary> = { id, en };
