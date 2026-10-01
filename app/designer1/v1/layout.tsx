import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import s from "./v1.module.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const display = Sora({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-d1-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-d1-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-d1-mono" });

export const metadata: Metadata = {
  title: "Innovation Oasis by Silal — Designer 1 · v1",
  description: "Designer 1, direction v1 “Clear Field”.",
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${s.root} ${display.variable} ${body.variable} ${mono.variable}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
