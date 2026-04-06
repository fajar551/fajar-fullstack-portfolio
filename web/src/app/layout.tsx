import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#070b12" }, { color: "#ffffff" }],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Fajar Habib Zaelani — Full-Stack Developer",
  description:
    "Portofolio Fajar Habib Zaelani: Full-Stack Developer (Laravel, React, NestJS, Spring Boot, mobile). Pengalaman fintech, pemerintahan, billing skala tinggi, dan integrasi AI.",
  openGraph: {
    title: "Fajar Habib Zaelani — Full-Stack Developer",
    description:
      "Full-Stack Developer dengan pengalaman sistem billing, microservices, AI, dan mobile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${bricolage.variable} ${spaceMono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="aurora-canvas" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
