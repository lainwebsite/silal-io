import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { SmoothScroll } from "./_components/SmoothScroll";
import { Shell } from "./_components/Shell";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], weight: ["300", "400", "500", "600"], variable: "--font-d1-brand" });

export const metadata: Metadata = {
  title: "Innovation Oasis — Designer 1 · v1",
  description: "Designer 1, direction v1 “Clear Field”. Advancing Agri-food Systems.",
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <Shell className={brand.variable}>
      <SmoothScroll />
      <Header />
      <main>{children}</main>
      <Footer />
    </Shell>
  );
}
