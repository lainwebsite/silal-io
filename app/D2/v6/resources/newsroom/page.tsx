import type { Metadata } from "next";
import r from "./newsroom.module.css";
import { Hero } from "./_c/Hero";
import { Feed } from "./_c/Feed";
import { releases } from "../../_lib/news";
import { P } from "../../_lib/photo";

// featured releases and the wide photo each one gets behind the hero title
const FEATURED: Record<string, string> = {
  "innovation-oasis-officially-opens": P.aerialWide,
  "foodtech-challenge-winners": P.awardsWinners,
  "drone-crop-monitoring": P.aerialPlots,
};

export const metadata: Metadata = {
  title: "News & Media · Innovation Oasis",
  description: "News, programmes and research from Innovation Oasis, Silal’s R&D and venture engine.",
};

/*
 * Resources → News & Media, the feed (v6 / the /V3 look), after Hut 8's "News & Insights" page:
 * a featured carousel over a full-bleed photo, then a feed panel that slides up over it with a sticky
 * sidebar, filters and a 2 · 3 · 1-large rhythm. Entries are SAMPLES (../../_lib/news.ts) and link to
 * the release detail pages.
 */
export default function Newsroom() {
  const sorted = [...releases].sort((x, y) => y.date.localeCompare(x.date));
  const featured = Object.entries(FEATURED).map(([slug, src]) => ({ ...sorted.find((x) => x.slug === slug)!, src }));
  return (
    <div className={r.page}>
      <Hero items={featured} />
      <Feed items={sorted} featured={featured.map((x) => x.slug)} />
    </div>
  );
}
