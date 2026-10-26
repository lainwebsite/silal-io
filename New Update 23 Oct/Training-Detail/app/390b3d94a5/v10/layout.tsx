import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./shell.module.css";
import { Header } from "./_c/Header";
import { Footer } from "./_c/Footer";
import { LinkGuard } from "./_c/LinkGuard";
import { SmoothScroll } from "./_c/SmoothScroll";

/*
 * Designer 2 · v10: inner pages in the NEW HOMEPAGE shell (public/new-homepage, sources prototypes/new-homepage/v2,
 * footer from branch 23-oct/new-homepage): utility strip, white header with dropdowns + Enquire pill, the guideline
 * back-cover footer. Page bodies keep the v6 News & Media grammar (pages.module.css). Readex Pro stands in for 29LT Bukra.
 */
const brand = Readex_Pro({ subsets: ["latin", "arabic"], weight: ["300", "400", "500"], variable: "--font-d10", display: "swap" });

export const metadata: Metadata = {
  title: "IO Academy · Innovation Oasis",
  icons: { icon: "/brand/io-mark.svg" },
  robots: { index: false, follow: false },
};

export default function V10Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <a href="#d10-main" className={s.skip}>
        Skip to content
      </a>
      <Header />
      <main id="d10-main">{children}</main>
      <Footer />
      <SmoothScroll />
      <LinkGuard />
    </div>
  );
}
