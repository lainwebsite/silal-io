/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import s from "./v1.module.css";
import { Arrow } from "./_components/Brand";
import { BASE } from "./_components/nav";
import { P } from "./_lib/photo";

// Copy sources: content/about.md (client copy, verbatim), docs/sitemap.md (names), docs/brand.md (tagline).
// Anything not from those files is marked PLACEHOLDER below.

const facts = [
  { value: "34 ha", label: "Site beside Al Foah Farm" },
  { value: "2024", label: "Official inauguration" },
  { value: "3", label: "Centres of Excellence" },
  { value: "6", label: "Technology & services" },
];

const hubs = [
  {
    href: `${BASE}/research`,
    title: "Research & Science",
    links: ["Precision Breeding & Plant Health", "Crop Diversification", "Soil & Water", "Food Technology", "R&D Trialing"],
    img: P.microscope,
  },
  {
    href: `${BASE}/ventures`,
    title: "Innovation & Venture Platforms",
    links: ["Farm Innovation Fund", "Incubation", "Accelerator", "Agricultural Challenges"],
    img: P.awardsStage,
  },
  {
    href: `${BASE}/centres`,
    title: "Centres of Excellence",
    links: ["Agri Robotics & AI", "ARC-GEN", "Advanced CEA"],
    img: P.phenotyping,
  },
  {
    href: `${BASE}/services`,
    title: "Technology & Services",
    links: ["iO Sense", "Solar Desalination", "Analytical Services", "Paid Trials", "Facilities as a Service"],
    img: P.labWorking,
  },
  {
    href: `${BASE}/training`,
    title: "Talent & Training",
    links: ["Advanced Agritech Academy", "Student Sponsorship", "Mustadeem / School Programs"],
    img: P.academy,
  },
];

// "Why Here? The Arid Advantage" — content/about.md
const pressures = ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"];

// PLACEHOLDER one-liners for the three centres (names from sitemap).
const centres = [
  { title: "Agri Robotics & AI", text: "Drones, sensing and autonomy for open-field and protected farming.", img: P.droneTop },
  { title: "ARC-GEN", text: "Abiotic Resilience & Crop Genomics: crops bred for heat, drought and salinity.", img: P.labSeed },
  { title: "Advanced CEA", text: "Advanced Controlled Environment Agriculture: greenhouses and growth chambers.", img: P.growthChamber },
];

// PLACEHOLDER news items (inauguration year from content/about.md).
const news = [
  { type: "Event", date: "2026", title: "Agricultural Challenge finalists pitch to the IO jury", img: P.pitchRoom },
  { type: "News", date: "2024", title: "Innovation Oasis officially inaugurated", img: P.inauguration },
  { type: "Project", date: "2026", title: "Greenhouse trials: blueberries in an arid climate", img: P.blueberry },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroMedia}>
          <Image src={P.aerialPlots} alt="Aerial view of IO trial plots and greenhouses" fill priority sizes="100vw" />
        </div>
        <div className={s.heroShade} />
        <div className={`${s.wrap} ${s.heroContent}`}>
          <div className={s.heroGrid}>
            <div>
              <span className={s.label}>Advancing Agri-food Systems</span>
              <h1 className={s.hero1}>
                The future of food security is being built <span style={{ color: "var(--io)" }}>in the desert.</span>
              </h1>
            </div>
            <div className={s.heroSide}>
              <p className={s.lead}>
                In one of the planet&apos;s most demanding growing environments, we bring together researchers,
                farmers, startups, industry leaders, investors, and policymakers to develop, validate, and scale the
                technologies needed for a more resilient food system.
              </p>
              <div className={s.heroCtas}>
                <Link href={`${BASE}/about`} className={`${s.btn} ${s.btnPrimary}`}>
                  About IO <Arrow />
                </Link>
                <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnGhostLight}`}>
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
          <div className={s.heroMeta}>
            {facts.map((st) => (
              <div key={st.label} className={s.stat}>
                <b>{st.value}</b>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.split}`}>
          <div className={s.splitText}>
            <span className={s.label}>Our Story</span>
            <h2 className={s.h1}>
              An Oasis Built for <span className={s.accent}>What&apos;s Next</span>
            </h2>
            <p className={s.lead}>
              Today, Innovation Oasis serves as Silal&apos;s R&amp;D and venture engine, helping bridge the gap between
              breakthrough ideas and meaningful impact across agriculture and food systems.
            </p>
            <p className={s.lead} style={{ fontSize: "1rem" }}>
              A place where startups can test technologies in real-world conditions. Where researchers and farmers
              collaborate side-by-side. Where commercial partners help scale solutions.
            </p>
            <Link href={`${BASE}/about`} className={s.textLink}>
              About Innovation Oasis <Arrow />
            </Link>
          </div>
          <div className={`${s.figure} ${s.figureTall}`}>
            <Image src={P.atrium} alt="IO atrium: Research, Development, Growth" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <span className={s.figureCaption}>IO atrium</span>
          </div>
        </div>
      </section>

      {/* HUBS */}
      <section className={`${s.section} ${s.sectionLight}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>Explore IO</span>
              <h2 className={s.h2}>
                More than a research center. <span className={s.accent}>More than an accelerator.</span>
              </h2>
            </div>
            <div className={s.sectionHeadAside}>
              <p className={s.lead}>
                Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect
                them all.
              </p>
            </div>
          </div>
          <div className={s.hubGrid}>
            {hubs.map((h, i) => (
              <Link key={h.href} href={h.href} className={s.hubCard}>
                <Image src={h.img} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 50vw" />
                <span className={s.hubIndex}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.hubArrow}>
                  <Arrow />
                </span>
                <div className={s.hubBody}>
                  <h3 className={s.h3}>{h.title}</h3>
                  <div className={s.hubLinks}>
                    {h.links.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HERE */}
      <section className={`${s.section} ${s.sectionInk}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>Why Here? The Arid Advantage</span>
              <h2 className={s.h2}>
                Many see the desert as a constraint.{" "}
                <span className={s.accent}>We see it as the world&apos;s most important testbed.</span>
              </h2>
            </div>
            <div className={s.sectionHeadAside}>
              <p className={s.lead}>
                Innovation Oasis exists to help innovators validate solutions under the pressures that define
                tomorrow&apos;s food system today.
              </p>
            </div>
          </div>
          <ul className={s.pressures}>
            {pressures.map((c, i) => (
              <li key={c}>
                <span className={s.challengeNum}>{String(i + 1).padStart(2, "0")}</span>
                {c.toLowerCase()}
              </li>
            ))}
          </ul>
          <p className={s.lead} style={{ marginTop: 32 }}>
            These are not barriers to innovation. They are the benchmark.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className={s.section}>
        <div className={s.wrap}>
          <figure className={s.quote}>
            <blockquote>&ldquo;If it works here, it can work anywhere.&rdquo;</blockquote>
            <figcaption>Dr. Shamal Mohammed, CEO, Innovation Oasis</figcaption>
          </figure>
        </div>
      </section>

      {/* CENTRES */}
      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>Centres of Excellence</span>
              <h2 className={s.h2}>Where the hardest problems get specialist attention</h2>
            </div>
            <div className={s.sectionHeadAside}>
              <Link href={`${BASE}/centres`} className={s.textLink}>
                All centres <Arrow />
              </Link>
            </div>
          </div>
          <div className={`${s.figure} ${s.figureBanner}`}>
            <Image src={P.fieldSpecialist} alt="Field specialist among crop rows" fill sizes="100vw" />
            <span className={s.figureCaption}>Field trials</span>
          </div>
          <div className={s.techGrid}>
            {centres.map((t) => (
              <Link key={t.title} href={`${BASE}/centres`} className={s.techCard}>
                <div className={s.figure}>
                  <Image src={t.img} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <span className={s.tag}>Centre of Excellence</span>
                <h3 className={s.h3}>{t.title}</h3>
                <p>{t.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AGRICULTURAL CHALLENGES FEATURE */}
      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.wrap}>
          <div className={s.feature}>
            <Image src={P.pitchWinners} alt="FoodTech Challenge winners on stage" fill sizes="100vw" />
            <div className={s.featureBody}>
              <span className={s.label}>Innovation &amp; Venture Platforms</span>
              <h2 className={s.h1}>Agricultural Challenges</h2>
              {/* PLACEHOLDER copy */}
              <p className={s.lead}>
                Open calls for startups and researchers to solve real problems facing UAE agriculture, then validate
                their solutions on IO land, labs and greenhouses.
              </p>
              <Link href={`${BASE}/ventures`} className={`${s.btn} ${s.btnLight}`}>
                Explore venture platforms <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS STRIP */}
      <section className={`${s.section} ${s.sectionLight}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>Under one ecosystem</span>
              <h2 className={s.h2}>Laboratories, greenhouses, field-testing areas and collaboration spaces</h2>
            </div>
            <div className={s.sectionHeadAside}>
              <Link href={`${BASE}/services`} className={s.textLink}>
                Facilities as a Service <Arrow />
              </Link>
            </div>
          </div>
          <div className={s.strip}>
            {[
              { img: P.canopy, cap: "Main entrance" },
              { img: P.labSeed, cap: "Seed development" },
              { img: P.tomatoAisle, cap: "Greenhouse" },
              { img: P.hydroTomato, cap: "Hydroponics" },
            ].map((g) => (
              <div key={g.cap} className={s.figure}>
                <Image src={g.img} alt={g.cap} fill sizes="(max-width: 800px) 50vw, 25vw" />
                <span className={s.figureCaption}>{g.cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>Resources</span>
              <h2 className={s.h2}>News, publications &amp; projects</h2>
            </div>
            <div className={s.sectionHeadAside}>
              <Link href={`${BASE}/resources`} className={s.textLink}>
                All resources <Arrow />
              </Link>
            </div>
          </div>
          <div className={s.newsGrid}>
            {news.map((n) => (
              <Link key={n.title} href={`${BASE}/resources`} className={s.newsCard}>
                <div className={s.figure}>
                  <Image src={n.img} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className={s.newsMeta}>
                  <span className={s.tag}>{n.type}</span>
                  <span>{n.date}</span>
                </div>
                <h3 className={s.h3}>{n.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / CTA */}
      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.wrap}>
          <div className={s.cta}>
            <img src="/brand/io-mark.svg" alt="" className={s.ctaMark} />
            <div className={s.ctaBody}>
              <span className={s.label} style={{ color: "var(--io)" }}>
                Our Mission
              </span>
              <h2 className={s.h2}>
                To fast-track the future of food security by turning the UAE&apos;s agricultural challenges into
                global opportunities for innovation, resilience, and growth.
              </h2>
              <div className={s.heroCtas} style={{ marginTop: 12 }}>
                <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnPrimary}`}>
                  Send an enquiry <Arrow />
                </Link>
                <Link href={`${BASE}/contact`} className={`${s.btn} ${s.btnGhostLight}`}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
