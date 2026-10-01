import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./shell.module.css";
import { World } from "./_world/World";
import { SmoothScroll } from "./_components/SmoothScroll";
import { Loader } from "./_components/Loader";
import { Nav } from "./_components/Nav";
import { Cursor } from "./_components/Cursor";
import { Footer } from "./_components/Footer";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], variable: "--font-d3", display: "swap" });

export const metadata: Metadata = {
  title: "Innovation Oasis — Designer 2 · v3",
  description: "Innovation Oasis, part of Silal. Advancing Agri-food Systems.",
  icons: { icon: "/brand/io-mark.svg" },
};

// Before first paint: hide the page until the loader hands over (failsafe after 8s), and start at the top.
const boot = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.setAttribute('data-d3-loading','');setTimeout(function(){if(!window.__d3entered){d.removeAttribute('data-d3-loading')}},8000)}catch(e){}})();`;

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <script dangerouslySetInnerHTML={{ __html: boot }} />
      <World className={s.world} />
      <div className={s.worldFallback} aria-hidden />
      <a href="#d3-main" className={s.skip}>
        Skip to content
      </a>
      <Nav />
      <div className={s.page}>
        <main id="d3-main">{children}</main>
        <Footer />
      </div>
      <Loader />
      <Cursor />
      <SmoothScroll />
    </div>
  );
}
