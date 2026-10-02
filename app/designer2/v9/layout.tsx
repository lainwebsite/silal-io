import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./chrome.module.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { SmoothScroll } from "./_components/SmoothScroll";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], weight: ["300", "400"], variable: "--font-d9-brand", display: "swap" });

export const metadata: Metadata = {
  title: "Innovation Oasis — Designer 2 · v9",
  description: "Designer 2, direction v9. Advancing Agri-food Systems.",
  icons: { icon: "/brand/io-mark.svg" },
};

// Flags motion before first paint so animated elements start hidden (no flash), with a failsafe
// that un-hides everything if the page script never reports ready.
const motionFlag = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.setAttribute('data-d9m','');setTimeout(function(){if(!window.__d9ready)d.removeAttribute('data-d9m')},4000)}catch(e){}})();`;

export default function V9Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      <a href="#d9-main" className={s.skip}>
        Skip to content
      </a>
      <Header />
      <main id="d9-main">{children}</main>
      <Footer />
      <SmoothScroll />
    </div>
  );
}
