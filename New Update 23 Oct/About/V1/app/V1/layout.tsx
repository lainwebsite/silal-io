import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { SmoothScroll } from "./_components/SmoothScroll";
import { Shell } from "./_components/Shell";
import { LinkGuard } from "./_components/LinkGuard";

// Stand-in for 29LT Bukra until the licensed webfont arrives (docs/brand.md). Swap here only.
const brand = Readex_Pro({ subsets: ["latin", "arabic"], weight: ["300", "400", "500", "600"], variable: "--font-d1-brand" });

const title = "About Innovation Oasis";
const description =
  "The future of food security is being built in the desert. Innovation Oasis, part of Silal: Advancing Agri-food Systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://silal-io.vercel.app"),
  title,
  description,
  icons: { icon: [{ url: "/brand/io-mark.svg", type: "image/svg+xml" }, { url: "/brand/io-icon-32.png", sizes: "32x32" }], apple: "/brand/io-icon-180.png" },
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "Innovation Oasis", title, description, url: "/V1", images: [{ url: "/V1/og.jpg", width: 1200, height: 630, alt: "Innovation Oasis" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/V1/og.jpg"] },
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <Shell className={brand.variable}>
      <SmoothScroll />
      <LinkGuard />
      <Header />
      <main>{children}</main>
      <Footer />
    </Shell>
  );
}
