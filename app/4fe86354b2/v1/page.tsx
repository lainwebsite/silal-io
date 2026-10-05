/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import s from "./v1.module.css";
import { Arrow } from "./_components/Brand";
import { Counter, CycleWord, Reveal, ScrollText } from "./_components/Motion";
import { PillarList } from "./_components/Interactive";
import { AridChapter, Ecosystem, Kicker, MissionBand, QuoteBand, SectionHead } from "./_components/Sections";
import { hero, story } from "./_lib/copy";
import { BASE, categories } from "./_lib/site";
import { P } from "./_lib/photo";

// Copy: content/about.md (verbatim), docs/sitemap.md (names), docs/brand.md (tagline).
// PLACEHOLDER: centre one-liners, Agricultural Challenges paragraph, resource items.

const heroWords = ["exploration", "validation", "collaboration", "implementation", "innovation"];

const centres = [
  {
    n: "01",
    title: "Agri Robotics & AI",
    text: "Drones, sensing and autonomy for open-field and protected farming.",
    img: P.droneTop,
  },
  {
    n: "02",
    title: "Abiotic Resilience & Crop Genomics",
    tag: "ARC-GEN",
    text: "Crops bred and screened for heat, drought and salinity.",
    img: P.labSeed,
  },
  {
    n: "03",
    title: "Advanced Controlled Environment Ag",
    tag: "CEA",
    text: "Greenhouses and growth chambers that make every climate variable a dial.",
    img: P.growthChamber,
  },
];

const resources = [
  { type: "Event", date: "2026", title: "Agricultural Challenge finalists pitch to the IO jury", img: P.pitchRoom },
  { type: "News", date: "2024", title: "Innovation Oasis officially inaugurated", img: P.inauguration },
  { type: "Project", date: "2026", title: "Greenhouse trials: blueberries in an arid climate", img: P.tomatoAisle },
];

export default function Home() {
  return (
    <>
      {/* HERO — after the guidelines' website mock: light, IO mark as supergraphic, blue rule into the "i" */}
      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroStage}`}>
          <img src="/brand/io-mark.svg" alt="" className={s.heroMark} />
          <div className={s.heroPanel}>
            <Kicker>Advancing Agri-food Systems</Kicker>
            <p className={s.heroWord} aria-hidden="true">
              <CycleWord words={heroWords} />
            </p>
            <h1 className={s.heroTitle}>{hero.title}</h1>
          </div>
          <div className={s.heroMedia}>
            <Image src={P.greenhouseLeafy} alt="Leafy crops growing in an IO greenhouse" fill priority sizes="100vw" />
          </div>
          <div className={s.heroCards}>
            <Link href={`${BASE}/about`} className={s.heroCard} data-tone="grey">
              <span className={s.heroCardImg}>
                <Image src={P.atrium} alt="" fill sizes="280px" />
              </span>
              <span className={s.heroCardBody}>
                <b>Our Story</b>
                <span>An Oasis Built for What&apos;s Next</span>
              </span>
            </Link>
            <Link href={`${BASE}/research`} className={s.heroCard} data-tone="blue">
              <span className={s.heroCardImg}>
                <Image src={P.hydroTomato} alt="" fill sizes="280px" />
              </span>
              <span className={s.heroCardBody}>
                <b>Agritech R&amp;D</b>
                <span>Research &amp; Science</span>
              </span>
            </Link>
          </div>
        </div>
        <div className={`${s.wrap} ${s.heroFoot}`}>
          <p className={s.lead}>{hero.paras[1]}</p>
          <div className={s.ctaRow}>
            <Link href={`${BASE}/about`} className={`${s.btn} ${s.btnPrimary}`}>
              Discover IO <Arrow />
            </Link>
            <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnGhost}`}>
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* BELIEF + FACTS */}
      <section className={s.section}>
        <div className={s.wrap}>
          <Reveal>
            <Kicker>{hero.kicker}</Kicker>
          </Reveal>
          <ScrollText text={hero.paras[0]} />
          <div className={s.facts}>
            {[
              { v: <Counter to={34} />, u: "ha", l: "of land beside Al Foah Farm" },
              { v: "2024", u: "", l: "Official inauguration" },
              { v: <Counter to={3} />, u: "", l: "Centres of Excellence" },
              { v: <Counter to={6} />, u: "", l: "Technology & services for partners" },
            ].map((f, i) => (
              <Reveal key={f.l} delay={i} className={s.fact}>
                <span className={s.factValue}>
                  {f.v}
                  {f.u ? <small>{f.u}</small> : null}
                </span>
                <span className={s.factLabel}>{f.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={`${s.wrap} ${s.storySplit}`}>
          <Reveal className={s.storyMedia}>
            <div className={s.frame}>
              <Image src={P.canopy} alt="The IO canopy entrance" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <span className={s.frameTag}>34-hectare campus · Al Ain</span>
          </Reveal>
          <div className={s.storyText}>
            <Reveal>
              <Kicker>{story.kicker}</Kicker>
              <h2 className={s.h2}>
                An Oasis Built for <span className={s.accent}>What&apos;s Next</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className={s.turn}>
                {story.turn[0]}
                <br />
                <b>{story.turn[1]}</b>
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className={s.lead}>{story.close}</p>
            </Reveal>
            <Reveal delay={3}>
              <Link href={`${BASE}/about`} className={s.textLink}>
                Read our story <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className={`${s.section} ${s.sectionLight}`}>
        <div className={s.wrap}>
          <SectionHead
            kicker="Explore IO"
            title={
              <>
                Five ways in. <span className={s.accent}>One ecosystem.</span>
              </>
            }
            aside={
              <p className={s.lead}>
                Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect
                them all.
              </p>
            }
          />
          <PillarList items={categories} />
        </div>
      </section>

      <AridChapter />

      {/* CENTRES — wayfinding-sign cards */}
      <section className={s.section}>
        <div className={s.wrap}>
          <SectionHead
            kicker="Centres of Excellence"
            title="Where the hardest problems get specialist attention."
            aside={
              <Link href={`${BASE}/centres`} className={s.textLink}>
                All centres <Arrow />
              </Link>
            }
          />
          <div className={s.signGrid}>
            {centres.map((c, i) => (
              <Reveal key={c.n} delay={i}>
                <Link href={`${BASE}/centres`} className={s.sign}>
                  <span className={s.signImg}>
                    <Image src={c.img} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </span>
                  <span className={s.signBody}>
                    <span className={s.signNum}>{c.n}</span>
                    <span className={s.signTitle}>{c.title}</span>
                    {c.tag ? <span className={s.signTag}>{c.tag}</span> : null}
                    <span className={s.signText}>{c.text}</span>
                    <span className={s.signArrow}>
                      <Arrow size={18} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Ecosystem />

      {/* AGRICULTURAL CHALLENGES */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.feature}`}>
          <Reveal className={s.featureMedia}>
            <div className={s.frame}>
              <Image src={P.pitchWinners} alt="Agricultural Challenge winners on stage" fill sizes="(max-width: 900px) 100vw, 60vw" />
            </div>
          </Reveal>
          <Reveal delay={1} className={s.featurePanel}>
            <Kicker>Innovation &amp; Venture Platforms</Kicker>
            <h2 className={s.h2}>
              Agricultural Challenges
            </h2>
            {/* PLACEHOLDER copy */}
            <p>
              Open calls for startups and researchers to solve real problems facing UAE agriculture, then validate
              their solutions on IO land, in IO labs and greenhouses.
            </p>
            <ul className={s.featureList}>
              <li>Farm Innovation Fund</li>
              <li>Incubation</li>
              <li>Accelerator</li>
            </ul>
            <Link href={`${BASE}/ventures`} className={`${s.btn} ${s.btnPrimary}`}>
              Explore venture platforms <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <QuoteBand />

      {/* RESOURCES */}
      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.wrap}>
          <SectionHead
            kicker="Resources"
            title="News, publications & projects"
            aside={
              <Link href={`${BASE}/resources`} className={s.textLink}>
                All resources <Arrow />
              </Link>
            }
          />
          <div className={s.newsGrid}>
            {resources.map((n, i) => (
              <Reveal key={n.title} delay={i}>
                <Link href={`${BASE}/resources`} className={s.newsCard}>
                  <span className={s.newsImg}>
                    <Image src={n.img} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </span>
                  <span className={s.newsMeta}>
                    <span className={s.tag}>{n.type}</span>
                    <span>{n.date}</span>
                  </span>
                  <span className={s.newsTitle}>{n.title}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MissionBand />
    </>
  );
}
