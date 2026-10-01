import Link from "next/link";

// Owned by the DESIGNER 1 chat. Lists Designer 1's design directions.
const designs = [
  {
    href: "/designer1/v1",
    name: "v1 — Clear Field",
    note: "Built from the IO brand guidelines: light hero with IO supergraphic, blue rules into the “i”, deep-green chapters. Home + About.",
    system: "/designer1/v1/system",
  },
];

export default function Designer1Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "48px 24px", maxWidth: 640, margin: "0 auto" }}>
      <h1>Designer 1</h1>
      <ul style={{ paddingLeft: 18 }}>
        {designs.map((d) => (
          <li key={d.href} style={{ marginBottom: 12 }}>
            <Link href={d.href}>{d.name}</Link> · <Link href={d.system}>design system</Link>
            <br />
            <small>{d.note}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
