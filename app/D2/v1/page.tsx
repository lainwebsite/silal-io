import Image from "next/image";
import Link from "next/link";
import s from "./v1.module.css";
import { Mark } from "./_components/Brand";
import { HereAnywhere } from "./_components/HereAnywhere";
import { P } from "./_lib/photo";
import { BASE, footerLinks, platforms } from "./_lib/site";

// Copy: content/about.md (client copy, verbatim) unless marked PLACEHOLDER.
const conditions = ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"];

const ecosystem = [
  "World-class research facilities",
  "Commercial testbeds",
  "Venture development programs",
  "Industry partnerships",
  "Farmer networks",
  "Academic collaborators",
  "Investment pathways",
  "Food security stakeholders",
];

// Stages from the "What makes IO different" copy: concept → validation → adoption → global relevance.
const pathway = ["concept", "validation", "adoption", "global relevance"];

// PLACEHOLDER news items until the client supplies Resources content.
const latest = [
  { img: P.pitchWinners, tag: "News", title: "FoodTech Challenge finalists take the stage", date: "Placeholder" },
  { img: P.inauguration, tag: "Media", title: "Innovation Oasis officially opens in Al Ain", date: "2024" },
  { img: P.phenotyping, tag: "Publication", title: "Phenotyping under heat stress: early findings", date: "Placeholder" },
];

export default function Home() {
  return (
    <>
      {/* 1 — Hero: the desert as proving ground */}
      <section className={s.hero} data-hero="dark" aria-labelledby="d2-hero">
        <Image
          src={P.aerialWide}
          alt="Aerial view of the Innovation Oasis trial fields and greenhouses in the desert near Al Ain"
          fill
          preload
          sizes="100vw"
          className={s.heroImg}
        />
        <div className={s.heroShade} aria-hidden />
        <Mark className={s.heroMark} alt="" />
        <div className={s.heroInner}>
          <p className={s.kicker} data-reveal>
            Accelerating the Future of Food Security
          </p>
          <h1 id="d2-hero" className={s.heroTitle} data-reveal>
            The future of food security is being built in the <em>desert.</em>
          </h1>
          <div className={s.heroFoot} data-reveal>
            <p className={s.heroLead}>
              If solutions can succeed here, they can succeed almost anywhere.
            </p>
            <div className={s.heroActions}>
              <Link href={`${BASE}/about`} className={s.btn}>
                Discover Innovation Oasis
              </Link>
              <Link href={`${BASE}/about#virtual-tour`} className={s.btnGhost}>
                Virtual tour ↗
              </Link>
            </div>
          </div>
        </div>
        <div className={s.conditions}>
          <p className={s.conditionsLabel}>Test conditions</p>
          <ul>
            {conditions.map((c, i) => (
              <li key={c}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {c}
              </li>
            ))}
          </ul>
          <p className={s.conditionsNote}>These are not barriers to innovation. They are the benchmark.</p>
        </div>
      </section>

      {/* 2 — Belief */}
      <section className={s.belief}>
        <div className={s.wrap}>
          <p className={s.kicker} data-reveal>
            Silal&rsquo;s R&amp;D and venture engine
          </p>
          <p className={s.beliefText} data-reveal>
            Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE{" "}
            <mark>today</mark> will define agriculture for much of the world <mark>tomorrow.</mark>
          </p>
          <div className={s.beliefCols} data-reveal>
            <p>
              In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers,
              startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies
              needed for a more resilient food system.
            </p>
            <dl className={s.facts}>
              <div>
                <dt>Hectares beside Al Foah Farm</dt>
                <dd>34</dd>
              </div>
              <div>
                <dt>The search begins</dt>
                <dd>2021</dd>
              </div>
              <div>
                <dt>Officially inaugurated</dt>
                <dd>2024</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3 — If it works here… */}
      <HereAnywhere />

      {/* 4 — Five platforms */}
      <section className={s.platforms} aria-labelledby="d2-platforms">
        <div className={s.wrap}>
          <div className={s.sectionHead} data-reveal>
            <p className={s.kicker}>What we do</p>
            <h2 id="d2-platforms" className={s.display}>
              five platforms, <span>one proving ground</span>
            </h2>
          </div>
        </div>
        <ul className={s.panels}>
          {platforms.map((c) => (
            <li key={c.key} className={s.panel}>
              <Image src={c.img} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" className={s.panelImg} />
              <div className={s.panelBody}>
                <span className={s.panelNum}>{c.n}</span>
                <h3 className={s.panelTitle}>
                  <Link href={c.href}>{c.label}</Link>
                </h3>
                <div className={s.panelMore}>
                  <div>
                    <p>{c.blurb}</p>
                    <p className={s.panelSubs}>{c.subs.map((sub) => sub.label).join("  ·  ")}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 5 — Ecosystem */}
      <section className={s.eco} aria-labelledby="d2-eco">
        <div className={s.wrap}>
          <div className={s.ecoHead} data-reveal>
            <p className={s.kicker}>What makes Innovation Oasis different?</p>
            <h2 id="d2-eco" className={s.ecoTitle}>
              More Than a Research Center. <span>More Than an Accelerator.</span>
            </h2>
            <p className={s.ecoLead}>
              Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them
              all. We bring together:
            </p>
          </div>
        </div>
        <div className={s.marquee} aria-label="What we bring together">
          <ul className={s.marqueeTrack}>
            {ecosystem.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <ul className={s.marqueeTrack} aria-hidden>
            {ecosystem.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
        <div className={s.wrap}>
          <p className={s.ecoUnder} data-reveal>
            Under one ecosystem.
          </p>
          <ol className={s.path} data-reveal>
            {pathway.map((word, i) => (
              <li key={word} style={{ ["--i" as string]: i }}>
                <span className={s.pathNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.pathWord}>{word}</span>
              </li>
            ))}
          </ol>
          <p className={s.ecoClose} data-reveal>
            Because food security cannot be solved in silos.
          </p>
        </div>
      </section>

      {/* 6 — Campus */}
      <section className={s.campus} aria-labelledby="d2-campus">
        <div className={s.campusImg} data-reveal>
          <Image src={P.canopy} alt="The Innovation Oasis entrance canopy in Al Ain" fill sizes="(max-width: 900px) 100vw, 58vw" />
        </div>
        <div className={s.campusBody} data-reveal>
          <p className={s.kicker}>Our story</p>
          <h2 className={s.display}>
            an oasis built for <span>what&rsquo;s next</span>
          </h2>
          <p>
            Where others saw empty desert, the team saw an opportunity to create a living ecosystem designed around
            collaboration, experimentation, and impact.
          </p>
          <p className={s.campusPull}>
            The world had innovation.
            <br />
            What it lacked was implementation.
          </p>
          <Link href={`${BASE}/about`} className={s.arrowLink}>
            Read our story
          </Link>
        </div>
      </section>

      {/* 7 — Mission: deep-green leaf chapter */}
      <section className={s.mission} aria-labelledby="d2-mission">
        <Image src={P.blueberry} alt="" fill sizes="100vw" className={s.missionImg} />
        <div className={s.missionInner} data-reveal>
          <p id="d2-mission" className={s.kicker}>
            Our mission
          </p>
          <p className={s.missionText}>
            To fast-track the future of food security by turning the UAE&rsquo;s agricultural challenges into global
            opportunities for innovation, resilience, and growth.
          </p>
        </div>
      </section>

      {/* 8 — Latest (PLACEHOLDER content) */}
      <section className={s.latest} aria-labelledby="d2-latest">
        <div className={s.wrap}>
          <div className={s.latestHead} data-reveal>
            <h2 id="d2-latest" className={s.display}>
              latest <span>from the oasis</span>
            </h2>
            <Link href={footerLinks.resources[0].href} className={s.arrowLink}>
              All resources
            </Link>
          </div>
          <ul className={s.cards}>
            {latest.map((n, i) => (
              <li key={n.title} className={s.card} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <div className={s.cardImg}>
                  <Image src={n.img} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <p className={s.cardMeta}>
                  <span>{n.tag}</span>
                  <span>{n.date}</span>
                </p>
                <h3 className={s.cardTitle}>
                  <Link href={footerLinks.resources[1].href}>{n.title}</Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9 — Call to action (PLACEHOLDER line) */}
      <section className={s.cta} aria-labelledby="d2-cta">
        <div className={s.wrap}>
          <div className={s.ctaInner} data-reveal>
            <h2 id="d2-cta" className={s.ctaTitle}>
              Test it <em>here.</em>
            </h2>
            <p>Bring a technology, a trial or a partnership to the world&rsquo;s most demanding testbed.</p>
            <div className={s.heroActions}>
              <Link href={`${BASE}/services`} className={s.btn}>
                Explore services
              </Link>
              <Link href={footerLinks.contact} className={s.btnLine}>
                Start an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
