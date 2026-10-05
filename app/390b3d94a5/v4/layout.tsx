import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./shell.module.css";
import { Nav } from "./_c/Nav";
import { Footer } from "./_c/Footer";
import { SmoothScroll } from "./_c/SmoothScroll";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], variable: "--font-d4", display: "swap" });

export const metadata: Metadata = {
  title: "Innovation Oasis — Designer 2 · v4",
  description: "Innovation Oasis, part of Silal. Advancing Agri-food Systems.",
  icons: { icon: "/brand/io-mark.svg" },
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <a href="#d4-main" className={s.skip}>
        Skip to content
      </a>
      <Nav />
      <main id="d4-main">{children}</main>
      <Footer />
      <SmoothScroll />
    </div>
  );
}
