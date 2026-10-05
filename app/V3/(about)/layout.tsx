import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./shell.module.css";
import { Nav } from "./_c/Nav";
import { Footer } from "./_c/Footer";
import { SmoothScroll } from "./_c/SmoothScroll";
import { LinkGuard } from "./_c/LinkGuard";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
// Only two weights in the whole design: Light 300 (display) and Regular 400 (text).
const brand = Readex_Pro({ subsets: ["latin", "arabic"], weight: ["300", "400"], variable: "--font-d6", display: "swap" });

const title = "About Innovation Oasis";
const description =
  "The future of food security is being built in the desert. Innovation Oasis, part of Silal: Advancing Agri-food Systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://silal-io.vercel.app"),
  title,
  description,
  icons: { icon: [{ url: "/brand/io-mark.svg", type: "image/svg+xml" }, { url: "/brand/io-icon-32.png", sizes: "32x32" }], apple: "/brand/io-icon-180.png" },
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "Innovation Oasis", title, description, url: "/V3", images: [{ url: "/V3/og.jpg", width: 1200, height: 630, alt: "Innovation Oasis" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/V3/og.jpg"] },
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <a href="#d6-main" className={s.skip}>
        Skip to content
      </a>
      <Nav />
      <main id="d6-main">{children}</main>
      <Footer />
      <SmoothScroll />
      <LinkGuard />
    </div>
  );
}
