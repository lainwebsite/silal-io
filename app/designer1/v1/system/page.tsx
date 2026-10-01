import Image from "next/image";
import s from "../v1.module.css";
import { Arrow, IoLockup, IoMark } from "../_components/Brand";
import { P } from "../_lib/photo";

export const metadata = { title: "Design system — Designer 1 · v1" };

const colours = [
  { name: "IO Blue", token: "--io", hex: "#3CA7D2", note: "Core" },
  { name: "IO Blue ink", token: "--io-ink", hex: "#1A6F96", note: "Tint for small text/links" },
  { name: "Charcoal", token: "--charcoal", hex: "#595453", note: "Core" },
  { name: "Grey", token: "--grey", hex: "#7F8284", note: "Core" },
  { name: "Light grey", token: "--light", hex: "#F1F1F1", note: "Core" },
  { name: "White", token: "--paper", hex: "#FFFFFF", note: "Core" },
  { name: "Green", token: "--green", hex: "#00A16B", note: "Accent" },
  { name: "Dark green", token: "--green-dark", hex: "#015825", note: "Accent" },
  { name: "Lime", token: "--lime", hex: "#70B62B", note: "Accent" },
  { name: "Orange", token: "--orange", hex: "#F08104", note: "Accent" },
  { name: "Pink", token: "--pink", hex: "#E94492", note: "Accent" },
];

const type = [
  { cls: s.hero1, token: "Hero · Light 300", sample: "exploration" },
  { cls: s.h1, token: "H1 · Light 300", sample: "The future of food security" },
  { cls: s.h2, token: "H2 · Light 300", sample: "An Oasis Built for What's Next" },
  { cls: s.h3, token: "H3 · Medium 500", sample: "Centres of Excellence" },
  { cls: s.lead, token: "Lead · Regular 400", sample: "If solutions can succeed here, they can succeed almost anywhere." },
  { cls: "", token: "Body · Regular 400 / 16", sample: "Innovation only matters when it can survive outside the lab." },
  { cls: s.label, token: "Kicker · Medium 500 caps", sample: "Advancing Agri-food Systems" },
  { cls: "", token: "Arabic", sample: "نحو أنظمة زراعة وغذاء متطورة" },
];

const space = [4, 8, 12, 16, 24, 32, 48, 64, 96, 144];

export default function System() {
  return (
    <div className={s.wrap} style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
        <span className={s.label}>Designer 1 · v1</span>
        <h1 className={s.h1}>“Clear Field” design system</h1>
        <p className={s.lead}>
          Aligned to the Innovation Oasis brand guidelines (docs/brand.md): IO Blue, Charcoal, Grey and Light grey
          dominate; greens, orange and pink are accents only. Light-weight display type, thin IO-blue rules, lots of
          white space, photography doing the talking.
        </p>
      </div>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Colour</h2>
          <p>Core colours dominate. Secondary colours are accents only (tags, charts, colour-coding). IO Blue on white is 2.7:1, so small text uses the IO Blue ink tint.</p>
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
                <code>{c.note}</code>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Typography</h2>
          <p>Brand font is 29LT Bukra (licence pending). Stand-in: Readex Pro, one CSS variable (--f-brand). Fluid sizes via clamp().</p>
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
            <span className={`${s.tag} ${s.tagGreen}`}>Green tag</span>
            <span className={`${s.tag} ${s.tagOrange}`}>Orange tag</span>
          </div>
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Brand elements</h2>
          <p>Brand files from /public/brand. Lock-up (with “Part of Silal”) in the footer of every page; mark alone in the header; mark as cropped supergraphic.</p>
        </header>
        <div className={s.row} style={{ gap: 32 }}>
          <IoLockup width={150} />
          <div style={{ background: "var(--charcoal)", padding: 20, borderRadius: 10 }}>
            <IoLockup width={150} reversed />
          </div>
          <IoMark height={64} />
          <div style={{ width: 280, height: 2, background: "var(--io)" }} title="Thin IO-blue rule" />
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Cards & imagery</h2>
          <p>20px radius, photography full-bleed inside cards, captions on frosted pills.</p>
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
              <div className={s.hubLinks}>
                <span>Sub-page</span>
                <span>Sub-page</span>
              </div>
            </div>
          </div>
          <div className={s.newsCard}>
            <div className={s.figure}>
              <Image src={P.greenhouseLeafy} alt="" fill sizes="33vw" />
              <span className={s.figureCaption}>Caption</span>
            </div>
            <div className={s.newsMeta}>
              <span className={s.tag}>News</span>
              <span>2026</span>
            </div>
            <h3 className={s.h3}>News card title</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
