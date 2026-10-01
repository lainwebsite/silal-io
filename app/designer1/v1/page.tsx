import Image from "next/image";
import Link from "next/link";
import s from "./v1.module.css";
import { Arrow, Waves } from "./_components/Brand";
import { BASE } from "./_components/nav";
import { P } from "./_lib/photo";

// Placeholder copy and figures until BRAIN supplies content (see docs/designer1.md).
const stats = [
  { value: "5", label: "Innovation pillars" },
  { value: "12+", label: "Research labs & chambers" },
  { value: "40+", label: "Start-ups in programmes" },
  { value: "1", label: "Campus for arid agri-food" },
];

const hubs = [
  {
    href: `${BASE}/research`,
    title: "Research",
    text: "Plant science, seed development and controlled-environment trials for crops that thrive in heat and scarce water.",
    img: P.microscope,
  },
  {
    href: `${BASE}/ventures`,
    title: "Ventures",
    text: "Programmes that take agri-food start-ups from pilot to scale, with access to land, labs and Silal's supply chain.",
    img: P.awardsStage,
  },
  {
    href: `${BASE}/centres`,
    title: "Centres of Excellence",
    text: "Specialist hubs for seed, protected cultivation and digital agriculture.",
    img: P.phenotyping,
  },
  {
    href: `${BASE}/services`,
    title: "Services",
    text: "Lab testing, field trials and advisory for growers and partners.",
    img: P.labWorking,
  },
  {
    href: `${BASE}/training`,
    title: "Training",
    text: "The Advanced Agritech Academy builds the next generation of UAE agri-talent.",
    img: P.academy,
  },
];

const challenges = [
  { title: "Water scarcity", text: "Growing more with less: irrigation, sensing and drought-tolerant crops." },
  { title: "Extreme heat", text: "Protected cultivation and cooling for year-round production." },
  { title: "Soil health", text: "Restoring and monitoring sandy, low-nutrient soils." },
  { title: "Food import dependence", text: "Local seed and supply chains that strengthen national food security." },
];

const tech = [
  {
    tag: "Field robotics",
    title: "Drones & precision spraying",
    text: "Mapping, monitoring and targeted inputs across open-field trial plots.",
    img: P.droneTop,
  },
  {
    tag: "Sensing",
    title: "Soil & plant sensors",
    text: "Live data on moisture, nutrients and plant stress, from root zone to canopy.",
    img: P.soilProbe,
  },
  {
    tag: "Controlled environment",
    title: "Phenotyping chambers",
    text: "Precisely controlled climate to test varieties before they reach the field.",
    img: P.growthChamber,
  },
];

const news = [
  {
    type: "Event",
    date: "Sep 2026",
    title: "FoodTech Challenge finalists pitch to the IO jury",
    img: P.pitchRoom,
  },
  {
    type: "News",
    date: "Jun 2026",
    title: "Innovation Oasis officially inaugurated",
    img: P.inauguration,
  },
  {
    type: "Research",
    date: "Apr 2026",
    title: "Greenhouse trials: blueberries in a desert climate",
    img: P.blueberry,
  },
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
              <span className={s.label}>Innovation Oasis · by Silal</span>
              <h1 className={s.hero1}>
                Growing the future of food, <span style={{ color: "#7cc4f0" }}>in the desert.</span>
              </h1>
            </div>
            <div className={s.heroSide}>
              <p className={s.lead}>
                A research and innovation campus where scientists, start-ups and growers solve agriculture&apos;s
                hardest problems for arid climates.
              </p>
              <div className={s.heroCtas}>
                <Link href={`${BASE}/about`} className={`${s.btn} ${s.btnLight}`}>
                  Discover IO <Arrow />
                </Link>
                <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnGhostLight}`}>
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
          <div className={s.heroMeta}>
            {stats.map((st) => (
              <div key={st.label} className={s.stat}>
                <b>{st.value}</b>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.split}`}>
          <div className={s.splitText}>
            <span className={s.label}>About IO</span>
            <h2 className={s.h1}>
              Research, development and growth, <span className={s.accent}>under one roof.</span>
            </h2>
            <p className={s.lead}>
              IO brings together laboratories, greenhouses and open-field trial plots so ideas can move from the bench to
              the farm in one place, and from the farm to the UAE&apos;s food supply.
            </p>
            <Link href={`${BASE}/about`} className={s.textLink}>
              About Innovation Oasis <Arrow />
            </Link>
            <div className={s.pillars3}>
              <div>
                <b>Research</b>
                <span>Lab & field science</span>
              </div>
              <div>
                <b>Development</b>
                <span>Pilots & ventures</span>
              </div>
              <div>
                <b>Growth</b>
                <span>Scale & skills</span>
              </div>
            </div>
          </div>
          <div className={`${s.figure} ${s.figureTall}`}>
            <Image src={P.atrium} alt="IO atrium: Research, Development, Growth" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <span className={s.figureCaption}>IO atrium</span>
          </div>
        </div>
      </section>

      {/* HUBS */}
      <section className={`${s.section} ${s.sectionMist}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>What we do</span>
              <h2 className={s.h2}>Five ways to work with IO</h2>
            </div>
            <div className={s.sectionHeadAside}>
              <p className={s.lead}>
                From fundamental research to market-ready ventures, every part of the campus is open to partners.
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
                  <p>{h.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className={`${s.section} ${s.sectionInk}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>Agricultural challenges</span>
              <h2 className={s.h1}>The problems we exist to solve.</h2>
            </div>
            <div className={s.sectionHeadAside}>
              <p className={s.lead}>
                Open challenges invite researchers and start-ups worldwide to bring solutions to test on our land.
              </p>
              <Link href={`${BASE}/challenges`} className={s.textLink}>
                View all challenges <Arrow />
              </Link>
            </div>
          </div>
          <ul className={s.challengeList}>
            {challenges.map((c, i) => (
              <li key={c.title}>
                <Link href={`${BASE}/challenges`} className={s.challengeItem}>
                  <span className={s.challengeNum}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={s.h3}>{c.title}</h3>
                  <p>{c.text}</p>
                  <Arrow size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECH */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>Inside the oasis</span>
              <h2 className={s.h2}>Tools built for heat, sand and scarce water</h2>
            </div>
            <div className={s.sectionHeadAside}>
              <p className={s.lead}>
                Our teams pair field robotics, sensing and controlled-environment science to shorten the path from
                trial to harvest.
              </p>
            </div>
          </div>
          <div className={`${s.figure} ${s.figureBanner}`}>
            <Image src={P.fieldSpecialist} alt="Field specialist among crop rows" fill sizes="100vw" />
            <span className={s.figureCaption}>Open-field trials</span>
          </div>
          <div className={s.techGrid}>
            {tech.map((t) => (
              <article key={t.title} className={s.techCard}>
                <div className={s.figure}>
                  <Image src={t.img} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <span className={s.tag}>{t.tag}</span>
                <h3 className={s.h3}>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURE FEATURE */}
      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.wrap}>
          <div className={s.feature}>
            <Image src={P.pitchWinners} alt="FoodTech Challenge winners on stage" fill sizes="100vw" />
            <div className={s.featureBody}>
              <span className={s.label}>Venture programme</span>
              <h2 className={s.h1}>FoodTech Challenge</h2>
              <p className={s.lead}>
                Start-ups from around the world pitch solutions to the UAE&apos;s food challenges. Winners pilot their
                technology at IO with Silal as their first customer.
              </p>
              <div className={s.featureStats}>
                <div className={s.stat}>
                  <b>Pilot</b>
                  <span>on IO land & labs</span>
                </div>
                <div className={s.stat}>
                  <b>Scale</b>
                  <span>through Silal</span>
                </div>
              </div>
              <Link href={`${BASE}/ventures`} className={`${s.btn} ${s.btnLight}`}>
                Explore ventures <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS STRIP */}
      <section className={`${s.section} ${s.sectionSand}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <span className={s.label}>The campus</span>
              <h2 className={s.h2}>Labs, greenhouses and open fields</h2>
            </div>
            <div className={s.sectionHeadAside}>
              <Link href={`${BASE}/centres`} className={s.textLink}>
                Our centres of excellence <Arrow />
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
              <span className={s.label}>Latest</span>
              <h2 className={s.h2}>News, events & research</h2>
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

      {/* CTA */}
      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.wrap}>
          <div className={s.cta}>
            <Waves className={s.ctaWaves} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 20 }}>
              <span className={s.label} style={{ color: "#fff" }}>
                Work with IO
              </span>
              <h2 className={s.h1}>Have an idea that could feed a nation?</h2>
              <p className={s.lead}>
                Researchers, start-ups, growers and investors: tell us what you&apos;re working on and we&apos;ll find
                the right team, lab or programme.
              </p>
            </div>
            <div className={s.ctaActions}>
              <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnLight}`}>
                Send an enquiry <Arrow />
              </Link>
              <Link href={`${BASE}/contact`} className={`${s.btn} ${s.btnGhostLight}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
