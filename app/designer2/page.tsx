import Link from "next/link";

// Owned by the DESIGNER 2 chat. Index of Designer 2's directions.
const designs = [
  {
    href: "/designer2/v1",
    name: "v1 — Proving Ground",
    note: "Cinematic, charcoal-led. The desert as the world's testbed: big Light type, IO mark supergraphic, scroll-driven “here → anywhere”.",
    pages: [
      { href: "/designer2/v1", label: "Home" },
      { href: "/designer2/v1/system", label: "Design system" },
    ],
  },
  {
    href: "/designer2/v2/about",
    name: "v2 — About IO (storytelling)",
    note: "Light, information-first About page told as a story: client copy verbatim, a photo matched to every beat, slow GSAP + Lenis motion.",
    pages: [{ href: "/designer2/v2/about", label: "About IO" }],
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
