import s from "../v1.module.css";
import { Arrow, IoHorizontal, IoLockup, IoMark, IoWord } from "../_components/Brand";
import { Kicker } from "../_components/Sections";

export const metadata = { title: "Design system — Designer 1 · v1" };

const colours = [
  { name: "IO Blue", token: "--io", hex: "#3CA7D2", note: "Core · large type, rules, marks" },
  { name: "IO Blue ink", token: "--io-ink", hex: "#1A6F96", note: "Tint · small text, links, buttons" },
  { name: "Charcoal", token: "--charcoal", hex: "#595453", note: "Core · text, dark panels" },
  { name: "Grey", token: "--grey", hex: "#7F8284", note: "Core · secondary text" },
  { name: "Light grey", token: "--light", hex: "#F1F1F1", note: "Core · panels" },
  { name: "White", token: "--paper", hex: "#FFFFFF", note: "Core" },
  { name: "Dark green", token: "#014220", hex: "#015825", note: "Accent · leaf chapters" },
  { name: "Green", token: "--green", hex: "#00A16B", note: "Accent" },
  { name: "Lime", token: "--lime", hex: "#70B62B", note: "Accent" },
  { name: "Orange", token: "--orange", hex: "#F08104", note: "Accent" },
  { name: "Pink", token: "--pink", hex: "#E94492", note: "Accent" },
];

export default function System() {
  return (
    <div className={s.wrap} style={{ paddingTop: 72, paddingBottom: 120 }}>
      <Kicker>Designer 1 · v1</Kicker>
      <h1 className={s.h1}>
        Clear Field — <IoWord word="system" /> <IoWord word="foundation" />
      </h1>
      <p className={s.lead} style={{ marginTop: 24, marginBottom: 64 }}>
        Built from the Innovation Oasis brand creation guidelines: light, bright and cutting-edge. Lots of white space,
        thin IO-blue rules that run into the “i”, the IO mark as supergraphic, “io” highlighted inside words, deep-green
        leaf chapters, wayfinding-sign cards.
      </p>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Logo formats</h2>
          <p>Official files only. Format three (wordmark + small mark) in the header; back-cover arrangement in the footer.</p>
        </header>
        <div className={s.row} style={{ gap: 40, alignItems: "flex-end" }}>
          <IoHorizontal height={56} />
          <IoLockup width={150} />
          <div style={{ background: "var(--charcoal)", padding: 20 }}>
            <IoLockup width={150} reversed />
          </div>
          <IoMark height={80} />
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Colour</h2>
          <p>Core colours dominate; secondary only as accents. IO Blue on white is 2.7:1, so small text uses IO Blue ink.</p>
        </header>
        <div className={s.swatches}>
          {colours.map((c) => (
            <figure key={c.name} className={s.swatch}>
              <div style={{ background: c.hex }} />
              <figcaption>
                <b>{c.name}</b>
                <small>
                  {c.hex} · {c.token}
                </small>
                <small>{c.note}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Typography</h2>
          <p>29LT Bukra (licence pending) → Readex Pro stand-in, one variable. Light for display, Medium for emphasis.</p>
        </header>
        <div>
          <div className={s.typeRow}>
            <small>Hero word · 500 · grey + io</small>
            <div className={s.heroWord}>
              <IoWord word="exploration" />
            </div>
          </div>
          <div className={s.typeRow}>
            <small>Display · Light 300</small>
            <div className={s.display}>The future of food security</div>
          </div>
          <div className={s.typeRow}>
            <small>H2 · Light 300</small>
            <div className={s.h2}>An Oasis Built for What&apos;s Next</div>
          </div>
          <div className={s.typeRow}>
            <small>H3 · Medium 500</small>
            <div className={s.h3}>Centres of Excellence</div>
          </div>
          <div className={s.typeRow}>
            <small>Lead · 400</small>
            <p className={s.lead}>If solutions can succeed here, they can succeed almost anywhere.</p>
          </div>
          <div className={s.typeRow}>
            <small>Kicker</small>
            <div>
              <Kicker>Advancing Agri-food Systems</Kicker>
            </div>
          </div>
          <div className={s.typeRow}>
            <small>Arabic</small>
            <p lang="ar" dir="rtl" className={s.h2} style={{ textAlign: "left" }}>
              نحو أنظمة زراعة وغذاء متطورة
            </p>
          </div>
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Actions</h2>
          <p>Pill buttons in IO Blue ink (AA contrast). Text links underline from a thin IO-blue rule.</p>
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
            <span className={s.tag}>Tag</span>
          </div>
          <div className={s.row} style={{ background: "var(--charcoal)", padding: 24 }}>
            <a className={`${s.btn} ${s.btnPrimary}`} href="#">
              On charcoal <Arrow />
            </a>
            <a className={`${s.btn} ${s.btnGhostLight}`} href="#">
              Ghost light
            </a>
          </div>
        </div>
      </section>

      <section className={s.dsBlock}>
        <header>
          <h2 className={s.h3}>Signature details</h2>
          <p>Thin IO-blue rule that runs into the IO mark (letterhead); wayfinding cards with a blue top bar; helix-rung connectors.</p>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div className={s.quoteRule} style={{ marginTop: 0 }}>
            <span />
            <IoMark height={56} alt="" />
          </div>
          <div className={s.signGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            <div className={s.sign}>
              <span className={s.signBody} style={{ paddingBottom: 28 }}>
                <span className={s.signNum}>01</span>
                <span className={s.signTitle}>Wayfinding card</span>
                <span className={s.signText}>4px IO-blue top bar, light numerals.</span>
              </span>
            </div>
            <ul className={s.ecoCol} data-side="right" style={{ alignSelf: "center" }}>
              <li>
                <i aria-hidden="true" />
                <span>Helix-rung connector</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
