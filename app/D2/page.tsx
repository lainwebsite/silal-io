import Link from "next/link";

// Owned by the DESIGNER 2 chat. Index of Designer 2's directions.
const designs = [
  {
    href: "/D2/v9/about",
    name: "v9 — v2 About, polished (current)",
    note: "v2's storytelling page as its own variation, tightened: one type scale for the whole page (8 sizes, display max 68px instead of up to 220px), two weights, consistent letter-spacing and line-height per level, heading measures re-set for the new sizes.",
    pages: [{ href: "/D2/v9/about", label: "About IO" }],
  },
  {
    href: "/D2/v8/about",
    name: "v8 — About IO, one continuous page",
    note: "v7's clean system, with motion pushed: sections have no backgrounds — the page colour mixes by scroll from chapter to chapter; the hero photo opens to full screen and dims into the dark introduction; sticky story photo wiped by each beat; text that fills as you read; horizontal tracks for 'A place where…' and the journey; constraint → testbed wipe; the mission card opens to the full width; a chapter thread in the corner.",
    pages: [{ href: "/D2/v8/about", label: "About IO" }],
  },
  {
    href: "/D2/v7/about",
    name: "v7 — About IO, simple and professional",
    note: "No 3D. One layout rule for every section (small label left, content right), light headings, one dark band, IO-Blue accents only. Split text/photo story, platform accordion, CEO quote card, team cards, pressure cards, journey slider, photo CTA. Subtle motion: line reveals, fade-ups, image parallax.",
    pages: [{ href: "/D2/v7/about", label: "About IO" }],
  },
  {
    href: "/D2/v6/about",
    name: "v6 — About IO, compact and clean",
    note: "One type/grid/motion system. Hero photo closes into a card and the 'at a glance' collage builds around it; one Our Story section; a detailed 3D model of the real site with cards beside each point; hover photos on the platforms; leadership in one screen; sticky team; Why Here as constraint → testbed and a dotted world map; a clear 'different' grid with flow line.",
    pages: [
      { href: "/D2/v6/about", label: "About IO" },
      { href: "/D2/v6/resources/newsroom", label: "News & Media · Feed (after Hut 8)" },
      { href: "/D2/v6/resources/news", label: "News & Media · Press releases" },
      { href: "/D2/v6/resources/news/innovation-oasis-officially-opens", label: "Press release (detail)" },
    ],
  },
  {
    href: "/D2/v5/about",
    name: "v5 — About IO in the Silal / IO guideline language",
    note: "v4's scroll-driven chapters rebuilt in the brand book's own language: the website mock-up hero, guideline page headers, IO-Blue hairlines, square charcoal / IO-Blue cards, 'io' in blue inside words, the back-cover footer, a polished white 3D site.",
    pages: [{ href: "/D2/v5/about", label: "About IO" }],
  },
  {
    href: "/D2/v4/about",
    name: "v4 — About IO, Hut 8 × Anthem",
    note: "Observed and adapted from hut8.com and anthem.co.za: corner-cutting photo panels, colour fact tiles, white isometric 3D site in layers, dot-terrain 'Why Here?', giant scrolling list, moving highlight bar, morphing process frame, striped-mark footer.",
    pages: [{ href: "/D2/v4/about", label: "About IO" }],
  },
  {
    href: "/D2/v3/about",
    name: "v3 — About IO, one living world (current)",
    note: "Built from scratch after Inkwell: one WebGL world behind the page (sky gradient + 6k particles that morph from helix to desert to the IO O to a globe), new pathfinder nav, circle menu, loader, cursor, footer.",
    pages: [{ href: "/D2/v3/about", label: "About IO" }],
  },
  {
    href: "/D2/v1",
    name: "v1 — Proving Ground",
    note: "Cinematic, charcoal-led. The desert as the world's testbed: big Light type, IO mark supergraphic, scroll-driven “here → anywhere”.",
    pages: [
      { href: "/D2/v1", label: "Home" },
      { href: "/D2/v1/system", label: "Design system" },
    ],
  },
  {
    href: "/D2/v2/about",
    name: "v2 — About IO (storytelling)",
    note: "Light, information-first About page told as a story: client copy verbatim, a photo matched to every beat, slow GSAP + Lenis motion.",
    pages: [
      { href: "/D2/v2/about", label: "About IO" },
      { href: "/D2/v2/resources/news", label: "News & Media · Press releases" },
      { href: "/D2/v2/resources/news/innovation-oasis-officially-opens", label: "Press release (detail)" },
    ],
  },
];

export default function Designer2Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "48px 24px", maxWidth: 680, margin: "0 auto", color: "#595453" }}>
      <h1 style={{ fontWeight: 300 }}>Designer 2</h1>
      {designs.map((d) => (
        <section key={d.href} style={{ borderTop: "1px solid #3CA7D2", paddingTop: 16, marginTop: 24 }}>
          <h2 style={{ fontWeight: 400, margin: 0 }}>
            <Link href={d.href}>{d.name}</Link>
          </h2>
          <p>{d.note}</p>
          <ul>
            {d.pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
