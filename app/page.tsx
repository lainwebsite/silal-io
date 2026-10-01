import Link from "next/link";

const designers = [
  { href: "/designer1", name: "Designer 1" },
  { href: "/designer2", name: "Designer 2" },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "48px 24px", maxWidth: 640, margin: "0 auto" }}>
      <h1>Silal IO — design explorations</h1>
      <ul>
        {designers.map((d) => (
          <li key={d.href}>
            <Link href={d.href}>{d.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
