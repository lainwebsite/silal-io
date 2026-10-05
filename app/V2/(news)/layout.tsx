import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import s from "./chrome.module.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { SmoothScroll } from "./_components/SmoothScroll";
import { LinkGuard } from "./_components/LinkGuard";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], variable: "--font-d2-brand", display: "swap" });

const title = "News & Media · Innovation Oasis";
const description = "Announcements, programmes and research from Innovation Oasis, Silal’s R&D and venture engine.";

export const metadata: Metadata = {
  metadataBase: new URL("https://silal-io.vercel.app"),
  title,
  description,
  icons: { icon: [{ url: "/brand/io-mark.svg", type: "image/svg+xml" }, { url: "/brand/io-icon-32.png", sizes: "32x32" }], apple: "/brand/io-icon-180.png" },
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "Innovation Oasis", title, description, url: "/V2/resources/news", images: [{ url: "/V2/news/og.jpg", width: 1200, height: 630, alt: "Innovation Oasis" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/V2/news/og.jpg"] },
};

// Flags motion before first paint so animated elements start hidden (no flash), with a failsafe
// that un-hides everything if the page script never reports ready.
const motionFlag = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.setAttribute('data-d2m','');setTimeout(function(){if(!window.__d2ready)d.removeAttribute('data-d2m')},4000)}catch(e){}})();`;

export default function V2NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${brand.variable}`}>
      <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      <a href="#d2-main" className={s.skip}>
        Skip to content
      </a>
      <Header />
      <main id="d2-main">{children}</main>
      <Footer />
      <SmoothScroll />
      <LinkGuard />
    </div>
  );
}
