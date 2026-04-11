import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    /** Mengurangi CSS render-blocking (Lighthouse): menyisipkan stylesheet ke HTML di production. */
    inlineCss: true,
    /** Import per-ikon dari react-icons agar tree-shaking lebih ketat & bundle lebih kecil. */
    optimizePackageImports: ["react-icons"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
