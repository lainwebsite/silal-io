import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./shell.module.css";
import { Nav } from "./_c/Nav";
import { Footer } from "./_c/Footer";
import { SmoothScroll } from "./_c/SmoothScroll";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Two weights only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], weight: ["300", "400"], variable: "--font-d8", display: "swap" });

export const metadata: Metadata = {
  title: "About Innovation Oasis",
  description:
    "Innovation Oasis, part of Silal: the R&D and venture engine on 34 hectares beside Al Foah Farm, Al Ain. Advancing Agri-food Systems.",
  icons: { icon: "/brand/io-mark.svg" },
};

export default function V8Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <a href="#d8-main" className={s.skip}>
        Skip to content
      </a>
      <Nav />
      <main id="d8-main">{children}</main>
      <Footer />
      <SmoothScroll />
    </div>
  );
}
