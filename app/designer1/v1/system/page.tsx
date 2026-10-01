import Image from "next/image";
import s from "../v1.module.css";
import { Arrow, IoMark, Waves } from "../_components/Brand";
import { P } from "../_lib/photo";

export const metadata = { title: "Design system — Designer 1 · v1" };

const colours = [
  { name: "Ink", token: "--ink", hex: "#0B1F2E" },
  { name: "Ink 2", token: "--ink-2", hex: "#3A4D5C" },
  { name: "Ink 3", token: "--ink-3", hex: "#6B7C89" },
  { name: "IO Blue", token: "--io", hex: "#1689CF" },
  { name: "IO Deep", token: "--io-deep", hex: "#0A5A92" },
  { name: "IO Sky", token: "--io-sky", hex: "#E7F3FB" },
  { name: "Sand", token: "--sand", hex: "#F3EDE3" },
  { name: "Sand Deep", token: "--sand-deep", hex: "#D9C9AE" },
  { name: "Leaf", token: "--leaf", hex: "#3F8F4E" },
  { name: "Mist", token: "--mist", hex: "#F4F7F9" },
  { name: "Paper", token: "--paper", hex: "#FFFFFF" },
];

const type = [
  { cls: s.hero1, token: "Hero · Sora 500", sample: "Growing the future" },
  { cls: s.h1, token: "H1 · Sora 500", sample: "The problems we exist to solve" },
  { cls: s.h2, token: "H2 · Sora 500", sample: "Five ways to work with IO" },
  { cls: s.h3, token: "H3 · Sora 500", sample: "Phenotyping chambers" },
  { cls: s.lead, token: "Lead · Inter 400", sample: "A research and innovation campus for arid-climate agri-food." },
  { cls: "", token: "Body · Inter 400 / 16", sample: "Lab testing, field trials and advisory for growers and partners." },
  { cls: s.label, token: "Label · JetBrains Mono", sample: "Agricultural challenges" },
];

const space = [4, 8, 12, 16, 24, 32, 48, 64, 96, 144];

export default function System() {
  return (
    <div className={s.wrap} style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
        <span className={s.label}>Designer 1 · v1</span>
        <h1 className={s.h1}>“Clear Field” design system</h1>
        <p className={s.lead}>
          Bright, clinical whites from the labs, IO blue from the logo and wall graphics, sand from the land around the
          campus. Big confident type, generous space, photography doing the talking.
        </p>
      </div>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Colour</h2>
          <p>IO Blue is the only saturated colour. Sand and Leaf are supporting accents.</p>
        </header>
        <div className={s.swatches}>
          {colours.map((c) => (
            <figure key={c.token} className={s.swatch} style={{ margin: 0 }}>
              <div style={{ background: c.hex }} />
              <figcaption>
                <b>{c.name}</b>
                <code>
                  {c.token} · {c.hex}
                </code>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Typography</h2>
          <p>Sora for display, Inter for reading, JetBrains Mono for labels and data. Fluid sizes via clamp().</p>
        </header>
        <div>
          {type.map((t) => (
            <div key={t.token} className={s.typeRow}>
              <code>{t.token}</code>
              <div className={t.cls}>{t.sample}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Spacing</h2>
          <p>4-based scale. Sections use clamp(72px, 10vw, 144px).</p>
        </header>
        <div className={s.spaceRow}>
          {space.map((v) => (
            <div key={v}>
              <i style={{ width: v, height: v }} />
              {v}
            </div>
          ))}
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Buttons & links</h2>
          <p>Pill buttons, 52px tall. Arrow nudges on hover.</p>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className={s.row}>
            <a className={`${s.btn} ${s.btnPrimary}`} href="#">
              Primary <Arrow />
            </a>
            <a className={`${s.btn} ${s.btnGhost}`} href="#">
              Ghost
            </a>
            <a className={s.textLink} href="#">
              Text link <Arrow />
            </a>
          </div>
          <div className={s.row} style={{ background: "var(--ink)", padding: 24, borderRadius: 10 }}>
            <a className={`${s.btn} ${s.btnLight}`} href="#">
              Light <Arrow />
            </a>
            <a className={`${s.btn} ${s.btnGhostLight}`} href="#">
              Ghost light
            </a>
          </div>
          <div className={s.row}>
            <span className={s.tag}>Tag</span>
            <span className={`${s.tag} ${s.tagSand}`}>Sand tag</span>
            <span className={`${s.tag} ${s.tagLeaf}`}>Leaf tag</span>
          </div>
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Brand elements</h2>
          <p>Placeholder io mark until the SVG arrives. Wave lines echo the lab wall graphics.</p>
        </header>
        <div className={s.row} style={{ gap: 32 }}>
          <IoMark size={56} />
          <div style={{ background: "var(--ink)", padding: 20, borderRadius: 10 }}>
            <IoMark size={56} color="#fff" />
          </div>
          <div style={{ background: "var(--io)", borderRadius: 10, padding: 20, width: 280 }}>
            <Waves />
          </div>
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Cards & imagery</h2>
          <p>20px radius, photography full-bleed inside cards, mono captions on frosted pills.</p>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          <div className={s.hubCard} style={{ minHeight: 360 }}>
            <Image src={P.microscope} alt="" fill sizes="33vw" />
            <span className={s.hubIndex}>01</span>
            <span className={s.hubArrow}>
              <Arrow />
            </span>
            <div className={s.hubBody}>
              <h3 className={s.h3}>Hub card</h3>
              <p>Section hub entry with hover tint.</p>
            </div>
          </div>
          <div className={s.newsCard}>
            <div className={s.figure}>
              <Image src={P.greenhouseLeafy} alt="" fill sizes="33vw" />
              <span className={s.figureCaption}>Caption</span>
            </div>
            <div className={s.newsMeta}>
              <span className={s.tag}>News</span>
              <span>Sep 2026</span>
            </div>
            <h3 className={s.h3}>News card title</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
