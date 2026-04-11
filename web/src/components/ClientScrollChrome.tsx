"use client";

import dynamic from "next/dynamic";

const ScrollChromeLazy = dynamic(
  () => import("@/components/ScrollChrome").then((m) => ({ default: m.ScrollChrome })),
  { ssr: false },
);

export function ClientScrollChrome() {
  return <ScrollChromeLazy />;
}
