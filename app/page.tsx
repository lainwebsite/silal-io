import type { Metadata } from "next";

// Neutral root. Design routes (/D1, /D2) are not linked from here on purpose: the client only gets /V1–/V3.
export const metadata: Metadata = { title: "Innovation Oasis", robots: { index: false, follow: false } };

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#fff" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/io-mark.svg" alt="Innovation Oasis" width={96} height={96} />
    </main>
  );
}
