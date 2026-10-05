import Link from "next/link";

// Owned by the DESIGNER 1 chat. Lists Designer 1's design directions and page variations.
const designs = [
  {
    name: "v1 — Clear Field",
    note: "Built from the IO brand guidelines. Home + About + design system.",
    links: [
      { href: "/D1/v1", label: "Home" },
      { href: "/D1/v1/about", label: "About (A — immersive)" },
      { href: "/D1/v1/about-b", label: "About (B — branded)" },
      { href: "/D1/v1/about-c", label: "About (C — corporate premium, 3D site model)" },
      { href: "/D1/v1/about-d", label: "About (D — C + 3D model matched to the aerial photos) ★ latest" },
      { href: "/D1/v1/system", label: "Design system" },
    ],
  },
];

export default function Designer1Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "48px 24px", maxWidth: 640, margin: "0 auto" }}>
      <h1>Designer 1</h1>
      {designs.map((d) => (
        <section key={d.name} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, marginBottom: 4 }}>{d.name}</h2>
          <p style={{ margin: "0 0 8px", color: "#666" }}>{d.note}</p>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {d.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
