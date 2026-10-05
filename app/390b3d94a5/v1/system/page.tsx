import type { Metadata } from "next";
import Link from "next/link";
import s from "../v1.module.css";
import { Lockup, Mark, Wordmark } from "../_components/Brand";
import { BASE } from "../_lib/site";

export const metadata: Metadata = { title: "Design system — Designer 2 · v1" };

const core = [
  { name: "IO Blue", hex: "#3CA7D2", token: "--io", use: "Large type, rules, marks, rings" },
  { name: "Charcoal", hex: "#595453", token: "--charcoal", use: "Text, dark sections, footer" },
  { name: "Grey", hex: "#7F8284", token: "--grey", use: "Large secondary text" },
  { name: "Light grey", hex: "#F1F1F1", token: "--light", use: "Panels, statement sections" },
];
const tints = [
  { name: "IO ink", hex: "#1C7299", token: "--io-ink", use: "Small blue text, buttons (5.4:1 on white)" },
  { name: "IO mist", hex: "#B8E0F0", token: "--io-mist", use: "Small blue text on charcoal (5.3:1)" },
  { name: "Grey ink", hex: "#6E7173", token: "--grey-ink", use: "Small secondary text (4.9:1)" },
];
const accents = [
  { name: "Green", hex: "#00A16B" },
  { name: "Dark green", hex: "#015825" },
  { name: "Lime", hex: "#70B62B" },
  { name: "Pink", hex: "#E94492" },
  { name: "Orange-red", hex: "#EB5D3E" },
  { name: "Orange", hex: "#F08104" },
];

function Swatch({ hex, name, token, use, small }: { hex: string; name: string; token?: string; use?: string; small?: boolean }) {
  return (
    <li className={s.sysSwatch} data-small={small ? "" : undefined}>
      <span style={{ background: hex }} />
      <b>{name}</b>
      <code>{hex}</code>
      {token && <code>{token}</code>}
      {use && <small>{use}</small>}
    </li>
  );
}

export default function System() {
  return (
    <div className={s.sys}>
      <div className={s.wrap}>
        <header className={s.sysHead}>
          <p className={s.kicker}>Designer 2 · v1 · Proving Ground</p>
          <h1 className={s.display}>
            design <span>system</span>
          </h1>
          <p>
            Brand rules from <code>docs/brand.md</code> are binding. This direction explores composition and motion: a
            cinematic, charcoal-led site where the desert is the testbed. <Link href={BASE} className={s.arrowLink}>Home</Link>
          </p>
        </header>

        <section className={s.sysBlock}>
          <h2 className={s.sysH}>Logo</h2>
          <div className={s.sysLogos}>
            <div>
              <Lockup />
              <small>Lock-up, light</small>
            </div>
            <div data-dark="">
              <Lockup reversed />
              <small>Lock-up, reversed (footer)</small>
            </div>
            <div>
              <span className={s.sysRow}>
                <Wordmark />
                <Mark />
              </span>
              <small>Format three (header): wordmark + endorsement, mark right</small>
            </div>
            <div data-dark="" className={s.sysCrop}>
              <Mark />
              <small>Mark as cropped supergraphic (hero, footer)</small>
            </div>
          </div>
        </section>

        <section className={s.sysBlock}>
          <h2 className={s.sysH}>Colour</h2>
          <p className={s.sysNote}>Core dominates. Accents only for tags, charts and the one leaf chapter.</p>
          <ul className={s.sysSwatches}>
            {core.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </ul>
          <h3 className={s.sysH3}>Accessible tints of the core (small text)</h3>
          <ul className={s.sysSwatches}>
            {tints.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </ul>
          <h3 className={s.sysH3}>Secondary accents</h3>
          <ul className={s.sysSwatches}>
            {accents.map((c) => (
              <Swatch key={c.hex} {...c} small />
            ))}
          </ul>
        </section>

        <section className={s.sysBlock}>
          <h2 className={s.sysH}>Type</h2>
          <p className={s.sysNote}>
            Readex Pro stands in for 29LT Bukra (one variable: <code>--font-d2-brand</code>). Light for display, Regular
            for text, Medium for labels.
          </p>
          <div className={s.sysType}>
            <p className={s.heroTitle} style={{ color: "var(--charcoal)", maxWidth: "none" }}>
              the <em>desert.</em>
            </p>
            <small>Hero · Light 300 · 42–108px · −0.03em</small>
            <p className={s.display}>
              five platforms, <span>one proving ground</span>
            </p>
            <small>Display · Light 300 · 38–84px · lowercase, second half IO blue</small>
            <p className={s.beliefText}>
              The conditions challenging agriculture in the UAE <mark>today</mark>…
            </p>
            <small>Statement · Light 300 · 28–56px</small>
            <p style={{ fontSize: 18, maxWidth: "52ch" }}>
              In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers,
              startups, industry leaders, investors, and policymakers.
            </p>
            <small>Body · Regular 400 · 17–18px · 1.6</small>
            <p className={s.kicker}>Kicker label</p>
            <small>Kicker · Medium 500 · 13px · caps · IO ink + blue rule</small>
            <p lang="ar" dir="rtl" style={{ fontSize: 32, fontWeight: 300 }}>
              نحو أنظمة زراعة وغذاء متطورة
            </p>
            <small>Arabic · same family</small>
          </div>
        </section>

        <section className={s.sysBlock}>
          <h2 className={s.sysH}>Actions</h2>
          <div className={s.sysRow}>
            <a href="#" className={s.btn}>
              Primary
            </a>
            <a href="#" className={s.btnLine}>
              Secondary
            </a>
            <a href="#" className={s.arrowLink}>
              Text link
            </a>
          </div>
          <div className={s.sysRow} data-dark="">
            <a href="#" className={s.btn}>
              Primary
            </a>
            <a href="#" className={s.btnGhost}>
              Ghost on dark
            </a>
          </div>
        </section>

        <section className={s.sysBlock}>
          <h2 className={s.sysH}>Signature devices</h2>
          <ul className={s.sysDevices}>
            <li>
              <b>Thin IO-blue rules</b> under the header, above the hero&rsquo;s test-conditions strip, in fact rows,
              marquees and the footer.
            </li>
            <li>
              <b>Rings</b> from the &ldquo;o&rdquo; of the mark: &ldquo;If it works here&rdquo; spreads from one point to
              &ldquo;anywhere&rdquo; as you scroll.
            </li>
            <li>
              <b>Cropped IO mark</b> bleeding off the end edge (hero) and off the top corner (footer, back cover p.31).
            </li>
            <li>
              <b>Expanding panels</b> for the five platforms: greyscale at rest, colour when opened.
            </li>
            <li>
              <b>Deep-green leaf chapter</b> for the mission (guidelines p.2, p.4, p.14), luminosity-blended macro photo.
            </li>
            <li>
              <b>Square corners</b> everywhere: images, buttons, panels. Architectural, like the campus.
            </li>
            <li>
              <b>Motion</b> Reveal on scroll, slow hero drift, scroll-driven rings, marquee. All off under
              prefers-reduced-motion.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
