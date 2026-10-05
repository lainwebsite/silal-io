import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./v1.module.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Reveal } from "./_components/Reveal";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], variable: "--font-d2-brand", display: "swap" });

export const metadata: Metadata = {
  title: "Innovation Oasis — Designer 2 · v1",
  description: "Designer 2, direction v1 “Proving Ground”. Advancing Agri-food Systems.",
  icons: { icon: "/brand/io-mark.svg" },
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <a href="#d2-main" className={s.skip}>
        Skip to content
      </a>
      <Header />
      <main id="d2-main">{children}</main>
      <Footer />
      <Reveal />
    </div>
  );
}
