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
    whatsapp: "WhatsApp",
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
    caption: "Teknologi stack",
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
    viewHere: "Lihat di sini",
    labelKeyFeatures: "Fitur utama",
    labelTechStack: "Stack teknologi",
    paginationNav: "Navigasi halaman proyek",
    paginationPrev: "Sebelumnya",
    paginationNext: "Berikutnya",
    paginationPage: (page: number, totalPages: number) => `Halaman ${page} dari ${totalPages}`,
    items: [
      {
        id: "ai-chatbot",
        title: "AI Chatbot (OpenAI + WhatsApp API)",
        desc:
          "Mengembangkan chatbot berbasis AI terintegrasi WhatsApp untuk interaksi pelanggan otomatis. Meningkatkan waktu respons dan otomatisasi layanan pelanggan.",
        images: ["/projects/ai-chatbot/main.webp"],
        keyFeatures:
          "Integrasi WhatsApp Business API, percakapan otomatis, peningkatan waktu respons layanan pelanggan.",
        techStack: "Node.js, OpenAI API, WhatsApp API.",
        projectUrl: "https://admin-chat.genio.id/home",
      },
      {
        id: "cbms-mobile",
        title: "Qwords Internet (React Native + Firebase)",
        desc:
          "Aplikasi resmi Qwords Internet untuk pelanggan Internetan.id — tagihan, bukti pembayaran, tiket support, dan manajemen akun layanan dalam satu aplikasi mobile (React Native + Firebase).",
        images: ["/projects/cbms-mobile-app/mobile-1.webp", "/projects/cbms-mobile-app/mobile-2.webp"],
        keyFeatures:
          "Dashboard billing mobile, pemantauan invoice & pelacakan pembayaran, push notification (FCM), integrasi notifikasi WhatsApp, dukungan mobile lintas platform.",
        techStack: "React Native, Firebase (FCM), Laravel API, WhatsApp API.",
        projectUrl: "https://play.google.com/store/apps/details?id=com.relabs.portalrelabsapps",
      },
      {
        id: "attendance-app",
        title: "Employee Attendance App (Flutter)",
        desc:
          "Mengembangkan sistem absensi mobile berbasis lokasi untuk mendukung check-in karyawan di berbagai shift dan lokasi.",
        images: ["/projects/attendance-app/mobile-1.webp", "/projects/attendance-app/mobile-2.webp"],
        keyFeatures:
          "Absensi berbasis lokasi (pelacakan GPS), sistem jadwal multi-shift, pencatatan absensi real-time, antarmuka mobile yang ramah pengguna.",
        techStack: "Flutter, REST API, GPS/layanan lokasi.",
        projectUrl: "https://fajarhabibzaelani.vercel.app",
      },
      {
        id: "whmcs-billing",
        title: "Qwords Billing System & WHMCS Integration",
        desc:
          "Mengembangkan dan mengoptimalkan sistem billing skala besar terintegrasi WHMCS untuk menangani volume besar invoice klien dan mengotomatisasi provisioning.",
        images: ["/projects/whmcs-integration/cover.png"],
        keyFeatures:
          "Manajemen invoice, billing & provisioning otomatis, keamanan MFA, integrasi penyedia cloud, arsitektur berbasis REST API.",
        techStack: "Laravel, WHMCS, Node.js, REST API, OAuth2, MySQL/PostgreSQL.",
        projectUrl: "https://www.qwords.com/",
      },
      {
        id: "portal-order-qwords",
        title: "Portal Order Qwords (Hosting, Domain, VPS, SSL, Email)",
        desc:
          "Portal pemesanan layanan Qwords berbasis web (React + Redux) untuk alur order end-to-end berbagai produk (hosting, domain, VPS, SSL, email), terintegrasi ke API order internal.",
        images: ["/projects/portal-order/cover.png"],
        keyFeatures:
          "Alur pemesanan multi-produk (hosting, domain, VPS, SSL, email), checkout dinamis per order_type, pemilihan metode pembayaran terintegrasi, manajemen state Redux dengan persistensi, integrasi Internal Order API, deployment berbasis environment (staging/production).",
        techStack: "React 18, React Redux, Bootstrap 5, Sass (SCSS), JavaScript (ES6+).",
        projectUrl:
          "https://portal.qwords.com/orderv10/orderhosting?pid=1126&billingcycle=monthly&_gl=1*5y4zbw*_gcl_au*MTk5NTgxODA0NS4xNzY4Mjc5NjU4LjE2NjM3NDM4OS4xNzczMTkxMTMxLjE3NzMxOTExMzA.",
      },
      {
        id: "portal-order-gfn",
        title: "Portal Order Golden Fast Network (Frontend Order Multi-Product)",
        desc:
          "Frontend web untuk pemesanan layanan Qwords end-to-end (hosting, domain, VPS/server, SSL, email, dll), dibangun dengan React + Redux Toolkit, terintegrasi API order internal staging/production lewat konfigurasi.",
        images: ["/projects/order-gfn/cover.png"],
        keyFeatures:
          "Alur pemesanan multi-produk (orderhosting, orderdomain, orderserver, orderdomainbackorder, orderproduct, dll), checkout bertahap dengan state global (cart, step, products, slice per produk).",
        techStack: "React 18, React Router DOM 6, React Bootstrap, Sass (SCSS), JavaScript (ES6+).",
        projectUrl: "https://client.goldenfast.net/order/",
      },
      {
        id: "portal-internetan",
        title: "Portal Internetan (CBMS Auto)",
        desc: "Portal billing hosting (CBMS Auto, mirip WHMCS) — klien, layanan, domain, invoice, order, pembayaran, dan tiket. Stack Laravel modular + tema. Relabs: portal.internetan.id.",
        images: ["/projects/portal-internetan/cover.png"],
        keyFeatures:
          "Billing end-to-end, gateway pembayaran, admin & API ber-permission, modul/addon & hooks, Virtualizor, tema & order form.",
        techStack: "PHP, Laravel 7, Blade/Smarty, Bootstrap 4, jQuery, Sass, Laravel Mix.",
        projectUrl: "http://portal.internetan.id/",
      },
      {
        id: "portal-gssl",
        title: "Portal GSSL (CBMS — Billing & layanan SSL)",
        desc: "Portal manajemen billing SSL berbasis web (Laravel) untuk operasi CBMS: invoice, produk, pembayaran, dan modul terkait, dengan arsitektur modular.",
        images: ["/projects/portal-gssl/cover.png"],
        keyFeatures:
          "Billing & layanan CBMS, modul gateway/server/registrar, tema & admin, deployment internal (Git).",
        techStack: "Laravel 7, PHP, MySQL, Bootstrap 4, Sass, jQuery, Laravel Mix.",
        projectUrl: "http://client.gudangssl.id/",
      },
      {
        id: "portal-bikin-website",
        title: "Portal Bikin Website (penjualan & pengelolaan layanan website)",
        desc: "Portal web untuk pemesanan, billing, dan pengelolaan siklus hidup layanan website pelanggan dalam satu sistem, berbasis Cloud Billing Management System (CBMS) / otomasi billing.",
        images: ["/projects/portal-bikin-website/cover.png"],
        keyFeatures:
          "Pemesanan & manajemen layanan web, billing terpusat, integrasi pembayaran (gateway/modul), arsitektur modular (Laravel Modules), tema & admin, deployment environment (staging/production).",
        techStack:
          "Laravel 7, PHP 7.2+, Blade, Bootstrap 4, jQuery, Sass (SCSS), Laravel Mix (Webpack), MySQL.",
        projectUrl: "http://client.bikin.website/",
      },
      {
        id: "eto-fintech",
        title: "TI-OAN Fintech (Power your money)",
        desc: "Aplikasi e-wallet dan e-commerce terintegrasi pertama di Timor-Leste yang dikembangkan untuk menyediakan solusi keuangan digital, manajemen produk, serta ekosistem belanja yang aman. Platform ini dirancang untuk memberdayakan UMKM dan mempercepat pertumbuhan ekonomi digital di Timor-Leste.",
        images: ["/projects/eto-fintech/cover.png"],
        keyFeatures:
          "E-wallet & pembayaran digital, fitur withdraw (penarikan dana), laporan transaksi (reporting), manajemen produk & e-commerce, sistem keamanan transaksi.",
        techStack: "Java 17, Spring Boot 3, Angular 18, MySQL, REST API.",
        projectUrl: "http://bank-eto.dimas-maryanto.com/eto-app/login",
      },
      {
        id: "siap-bop-bos",
        title: "SIAP BOP BOS Jakarta (Sistem Informasi Akuntabilitas Pendidikan)",
        desc: "Sistem informasi berbasis web yang digunakan untuk mengelola dan memonitor penyaluran serta penggunaan dana BOP dan BOS di Jakarta. Aplikasi ini membantu meningkatkan transparansi, akuntabilitas, serta efisiensi dalam pengelolaan anggaran pendidikan.",
        images: ["/projects/siap-bop-bos/cover.png"],
        keyFeatures:
          "Manajemen data anggaran BOP & BOS, monitoring penyaluran dana, laporan dan audit (reporting), validasi data sekolah, dashboard analitik.",
        techStack: "Java 8, Spring Boot 2, Oracle, Angular 8, REST API.",
        projectUrl: "https://siap.jakarta.go.id/webapp/#/landingpage",
      },
      {
        id: "bku-bud-dki",
        title: "BKU BUD DKI Jakarta (Buku Kas Umum Bendahara Umum Daerah)",
        desc: "Sistem informasi berbasis web yang digunakan untuk mengelola pencatatan dan pelaporan transaksi keuangan daerah pada level Bendahara Umum Daerah (BUD) DKI Jakarta. Aplikasi ini mendukung proses administrasi keuangan yang transparan, terstruktur, dan sesuai dengan regulasi pemerintah.",
        images: ["/projects/bku-bud-dki/cover.png"],
        keyFeatures:
          "Pencatatan transaksi keuangan (BKU), pengelolaan kas masuk & keluar, laporan keuangan (reporting), rekonsiliasi data, dashboard monitoring.",
        techStack: "Java 8, Spring Boot 2, Oracle, Angular 8, REST API.",
        projectUrl:
          "https://www.figma.com/design/5CCzAlrFAsZuMEYctXqz0v/BKU-BUD-PPKD?node-id=113-1612&t=EFTwU3bWEwMhmQFU-0",
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
    whatsapp: "WhatsApp",
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
    caption: "Technology stack",
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
    viewHere: "View here",
    labelKeyFeatures: "Key features",
    labelTechStack: "Tech stack",
    paginationNav: "Project pages",
    paginationPrev: "Previous",
    paginationNext: "Next",
    paginationPage: (page: number, totalPages: number) => `Page ${page} of ${totalPages}`,
    items: [
      {
        id: "ai-chatbot",
        title: "AI Chatbot (OpenAI + WhatsApp API)",
        desc:
          "Developed an AI-powered chatbot integrated with WhatsApp for automated customer interaction. Improved response time and automated customer service interactions.",
        images: ["/projects/ai-chatbot/main.webp"],
        keyFeatures:
          "WhatsApp Business API integration, automated conversations, faster customer service response times.",
        techStack: "Node.js, OpenAI API, WhatsApp API.",
        projectUrl: "https://admin-chat.genio.id/home",
      },
      {
        id: "cbms-mobile",
        title: "Qwords Internet (React Native + Firebase)",
        desc:
          "Official Qwords Internet mobile app for Internetan.id customers—invoices, payment proof uploads, support tickets, and account management in one React Native + Firebase app.",
        images: ["/projects/cbms-mobile-app/mobile-1.webp", "/projects/cbms-mobile-app/mobile-2.webp"],
        keyFeatures:
          "Mobile billing dashboard, invoice monitoring & payment tracking, push notifications (Firebase Cloud Messaging), WhatsApp notification integration, cross-platform mobile support.",
        techStack: "React Native, Firebase (FCM), Laravel API, WhatsApp API.",
        projectUrl: "https://play.google.com/store/apps/details?id=com.relabs.portalrelabsapps",
      },
      {
        id: "attendance-app",
        title: "Employee Attendance App (Flutter)",
        desc:
          "Developed a mobile attendance system with location-based tracking to support employee check-ins across multiple shifts and locations.",
        images: ["/projects/attendance-app/mobile-1.webp", "/projects/attendance-app/mobile-2.webp"],
        keyFeatures:
          "Location-based attendance (GPS tracking), multi-shift scheduling system, real-time attendance recording, user-friendly mobile interface.",
        techStack: "Flutter, REST API, GPS/location services.",
        projectUrl: "https://fajarhabibzaelani.vercel.app",
      },
      {
        id: "whmcs-billing",
        title: "Qwords Billing System & WHMCS Integration",
        desc:
          "Developed and optimized a high-scale billing system integrated with WHMCS to handle large volumes of client invoices and automate provisioning processes.",
        images: ["/projects/whmcs-integration/cover.png"],
        keyFeatures:
          "Invoice management system, automated billing & provisioning, multi-factor authentication (MFA) security, integration with cloud providers, REST API–based architecture.",
        techStack: "Laravel, WHMCS, Node.js, REST API, OAuth2, MySQL/PostgreSQL.",
        projectUrl: "https://www.qwords.com/",
      },
      {
        id: "portal-order-qwords",
        title: "Portal Order Qwords (Hosting, Domain, VPS, SSL, Email)",
        desc:
          "Web-based Qwords service ordering portal (React + Redux) for end-to-end ordering across hosting, domain, VPS, SSL, and email—integrated with internal order APIs.",
        images: ["/projects/portal-order/cover.png"],
        keyFeatures:
          "Multi-product ordering flow (hosting, domain, VPS, SSL, email), dynamic checkout per order_type, integrated payment method selection, Redux-based state management with persistence, internal Order API integration, environment-based deployment (staging/production).",
        techStack: "React 18, React Redux, Bootstrap 5, Sass (SCSS), JavaScript (ES6+).",
        projectUrl:
          "https://portal.qwords.com/orderv10/orderhosting?pid=1126&billingcycle=monthly&_gl=1*5y4zbw*_gcl_au*MTk5NTgxODA0NS4xNzY4Mjc5NjU4LjE2NjM3NDM4OS4xNzczMTkxMTMxLjE3NzMxOTExMzA.",
      },
      {
        id: "portal-order-gfn",
        title: "Portal Order Golden Fast Network (Frontend Order Multi-Product)",
        desc:
          "End-to-end Qwords ordering front-end (hosting, domain, VPS/server, SSL, email, and more) built with React + Redux Toolkit, integrated with internal staging/production order APIs via configuration.",
        images: ["/projects/order-gfn/cover.png"],
        keyFeatures:
          "Multi-product ordering flow (orderhosting, orderdomain, orderserver, orderdomainbackorder, orderproduct, etc.), staged checkout with global state (cart, step, products, per-product slices).",
        techStack: "React 18, React Router DOM 6, React Bootstrap, Sass (SCSS), JavaScript (ES6+).",
        projectUrl: "https://client.goldenfast.net/order/",
      },
      {
        id: "portal-internetan",
        title: "Portal Internetan (CBMS Auto)",
        desc: "Hosting billing portal (CBMS Auto, WHMCS-like) — clients, services, domains, invoices, orders, payments, and tickets. Modular Laravel stack + themes. Relabs: portal.internetan.id.",
        images: ["/projects/portal-internetan/cover.png"],
        keyFeatures:
          "End-to-end billing, payment gateways, admin & permissioned API, modules/add-ons & hooks, Virtualizor, themes & order forms.",
        techStack: "PHP, Laravel 7, Blade/Smarty, Bootstrap 4, jQuery, Sass, Laravel Mix.",
        projectUrl: "http://portal.internetan.id/",
      },
      {
        id: "portal-gssl",
        title: "Portal GSSL (CBMS — billing & SSL services)",
        desc: "Web-based SSL billing management portal (Laravel) for CBMS operations: invoices, products, payments, and related modules, with a modular architecture.",
        images: ["/projects/portal-gssl/cover.png"],
        keyFeatures:
          "CBMS billing & services, gateway/server/registrar modules, themes & admin, internal deployment (Git).",
        techStack: "Laravel 7, PHP, MySQL, Bootstrap 4, Sass, jQuery, Laravel Mix.",
        projectUrl: "http://client.gudangssl.id/",
      },
      {
        id: "portal-bikin-website",
        title: "Portal Bikin Website (website service sales & lifecycle)",
        desc: "Web portal for ordering, billing, and managing the full lifecycle of customer website services in one system, based on a Cloud Billing Management System (CBMS) / billing automation.",
        images: ["/projects/portal-bikin-website/cover.png"],
        keyFeatures:
          "Web service ordering & management, centralized billing, payment integrations (gateway/modules), modular architecture (Laravel Modules), themes & admin, staging/production deployment.",
        techStack:
          "Laravel 7, PHP 7.2+, Blade, Bootstrap 4, jQuery, Sass (SCSS), Laravel Mix (Webpack), MySQL.",
        projectUrl: "http://client.bikin.website/",
      },
      {
        id: "eto-fintech",
        title: "TI-OAN Fintech (Power your money)",
        desc: "Timor-Leste’s first integrated e-wallet and e-commerce platform for digital finance, product management, and secure shopping—designed to empower SMEs and accelerate digital economic growth.",
        images: ["/projects/eto-fintech/cover.png"],
        keyFeatures:
          "E-wallet & digital payments, withdrawals, transaction reporting, product & e-commerce management, transaction security.",
        techStack: "Java 17, Spring Boot 3, Angular 18, MySQL, REST API.",
        projectUrl: "http://bank-eto.dimas-maryanto.com/eto-app/login",
      },
      {
        id: "siap-bop-bos",
        title: "SIAP BOP BOS Jakarta (Education Accountability Information System)",
        desc: "Web-based information system to manage and monitor disbursement and use of BOP and BOS funds in Jakarta—supporting transparency, accountability, and efficiency in education budgeting.",
        images: ["/projects/siap-bop-bos/cover.png"],
        keyFeatures:
          "BOP & BOS budget data management, disbursement monitoring, reporting & audit, school data validation, analytics dashboards.",
        techStack: "Java 8, Spring Boot 2, Oracle, Angular 8, REST API.",
        projectUrl: "https://siap.jakarta.go.id/webapp/#/landingpage",
      },
      {
        id: "bku-bud-dki",
        title: "BKU BUD DKI Jakarta (General Cash Book)",
        desc: "Web-based information system for recording and reporting regional financial transactions at the DKI Jakarta Regional Treasury (BUD). Supports transparent, structured administration aligned with government regulations.",
        images: ["/projects/bku-bud-dki/cover.png"],
        keyFeatures:
          "Financial transaction recording (BKU), cash in/out management, financial reporting, data reconciliation, monitoring dashboards.",
        techStack: "Java 8, Spring Boot 2, Oracle, Angular 8, REST API.",
        projectUrl:
          "https://www.figma.com/design/5CCzAlrFAsZuMEYctXqz0v/BKU-BUD-PPKD?node-id=113-1612&t=EFTwU3bWEwMhmQFU-0",
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
