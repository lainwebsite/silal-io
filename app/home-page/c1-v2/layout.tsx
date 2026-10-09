import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Innovation Oasis — Built by the Desert",
  description: "Innovation Oasis by Silal: a scroll-driven journey from Earth to the farms, laboratories and people of Al Foah.",
  icons: { icon: "/brand/io-mark.svg" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#0f0f0f", viewportFit: "cover" };

export default function C1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
