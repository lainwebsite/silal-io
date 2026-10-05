import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import a from "./about.module.css";
import { Motion } from "./_c/Motion";
import { Site3D } from "./_c/Site3D";
import { Terrain } from "./_c/Terrain";
import { P, photo } from "../_lib/photo";
import { BASE, platforms } from "../_lib/site";

export const metadata: Metadata = {
  title: "About Innovation Oasis — Designer 2 · v4",
  description: "The future of food security is being built in the desert.",
};

/*
 * About Innovation Oasis — v4. Observed, imitated and adapted from two references:
 *  Anthem (anthem.co.za): photo panel that cuts its corners into a card, cut-corner photos drifting
 *    at different speeds, words that brighten, colour stat tiles on a sideways track, a highlight bar
 *    that moves through a list, a sticky 4-step process with a morphing frame, a "watch" strip, a brand-blue footer.
 *  Hut 8 (hut8.com): hero held while a dark panel slides over it, a white isometric 3D world in layers,
 *    notched rules, the "Our Impact" dot-terrain with a giant sliding title and labelled spikes,
 *    a giant scrolling list beside a guide rule, the striped signature in the footer.
 * Copy: content/about.md, verbatim. Colours/marks: docs/brand.md.
 */

const TEAM = "iO Team Headshot & Bios";
const team = [
  { name: "Ahmed", src: photo(TEAM, "Ahmed/Ahmed-1.jpg") },
  { name: "Ali", src: photo(TEAM, "Ali/Ali-4.jpg") },
  { name: "Nadia", src: photo(TEAM, "Nadia/Nadia-10.jpg") },
  { name: "Sagar", src: photo(TEAM, "Sagar/Sagar-2.jpg") },
  { name: "Caitlin", src: photo(TEAM, "Caitlin/Caitlin-4-2.jpg") },
  { name: "Francisco", src: photo(TEAM, "Francisco/Francisco-7.jpg") },
  { name: "Jude", src: photo(TEAM, "Jude/Jude-1.jpg") },
  { name: "Mohsin", src: photo(TEAM, "Mohsin/Mohsin-4.jpg") },
];

// Facts from content/about.md only.
const tiles = [
  { kind: "img" as const, src: P.canopy, alt: "The Innovation Oasis building and canopy" },
  { kind: "stat" as const, tone: "blue", n: "34", unit: "ha", label: "Parcel of land adjacent to Al Foah Farm" },
  { kind: "img" as const, src: P.aerialPlots, alt: "Trial plots and greenhouses from the air" },
  { kind: "stat" as const, tone: "charcoal", n: "2020", label: "Silal is established" },
  { kind: "img" as const, src: P.microscope, alt: "A scientist at a microscope" },
  { kind: "stat" as const, tone: "green", n: "2024", label: "Official inauguration" },
  { kind: "img" as const, src: P.tomatoAisle, alt: "A greenhouse aisle of tomato plants" },
  { kind: "stat" as const, tone: "lime", n: "2030", label: "Vision: the global reference point for arid-climate agriculture" },
  { kind: "img" as const, src: P.pitchWinners, alt: "FoodTech Challenge winners on stage" },
];

const pattern = ["Research existed.", "Commercial technologies existed.", "Farmers faced urgent challenges."];

const together = [
  "World-class research facilities",
  "Commercial testbeds",
  "Venture development programs",
  "Industry partnerships",
  "Farmer networks",
  "Academic collaborators",
  "Investment pathways",
  "Food security stakeholders",
];

const principles = [
  { t: "We Build for the Real World", d: "Innovation only matters when it can survive outside the lab." },
  { t: "We Connect Ecosystems", d: "Researchers, farmers, startups, industry, and government all have a role to play." },
  { t: "We Learn by Doing", d: "Progress comes through action, adaptation, and continuous improvement." },
  { t: "We Think Beyond Borders", d: "The UAE is our testbed. The world is our opportunity." },
  { t: "We Build Resilience", d: "Not just for today’s food systems, but for tomorrow’s." },
];

const journey = [
  { when: "2021", title: "The Search Begins", src: P.fieldSpecialist, text: "Following the creation of Silal, a dedicated innovation function begins taking shape. Extensive engagement across farms, universities, government entities, and industry reveals a clear gap between research, technology, and practical implementation." },
  { when: "Late 2021", title: "An Opportunity in the Desert", src: P.droneTop, text: "An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born." },
  { when: "2022", title: "Building the Blueprint", src: P.labWide, text: "A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation." },
  { when: "2022", title: "First Innovation Partners Arrive", src: P.hydroTomato, text: "Early collaborations begin with pioneering agritech companies, demonstrating a new model where innovators can validate technologies directly within the UAE’s agricultural environment." },
  { when: "2023", title: "From Vision to Reality", src: P.greenhouseWide, text: "Construction, equipment installation, and ecosystem activation advance rapidly. Research capabilities, specialized laboratories, greenhouse infrastructure, and field-testing assets come online." },
  { when: "2024", title: "Official Inauguration", src: P.inaugurationCeremony, text: "Innovation Oasis officially opens as a state-of-the-art center for agricultural research, innovation, validation, and commercialization. Global partners begin using the facility as a launchpad for collaboration and growth." },
  { when: "2025", title: "Building the Ecosystem", src: P.pitchWinners, text: "The focus expands from infrastructure to people. Research teams grow, partnerships mature, venture programs launch, and Innovation Oasis strengthens its role as a connector across the regional and global agrifood ecosystem." },
  { when: "2030 Vision", title: "Global Leadership in Desert Agriculture", src: P.aerialCampus, text: "Innovation Oasis aims to become the global reference point for arid-climate agriculture, food system resilience, and agritech deployment, helping shape research, investment, commercialization, and policy for the future of food security." },
];

function Notch() {
  return <span className={a.notch} aria-hidden data-notch />;
}

export default function About() {
  return (
    <div className={a.page}>
      <Motion />

      {/* ═══ HERO — Anthem: photo panel that turns into a card ═══ */}
      <section className={a.hero} data-tone="dark" aria-labelledby="h1">
        <div className={a.heroPanel} data-hero-panel>
          {[P.aerialWide, P.greenhouseRoofs, P.canopy].map((src, i) => (
            <div key={src} className={a.heroFrame} data-hero-frame>
              <Image src={src} alt={i === 0 ? "Aerial view of Innovation Oasis in the desert beside Al Foah Farm" : ""} fill preload={i === 0} sizes="100vw" />
            </div>
          ))}
          <div className={a.heroShade} />
          <div className={a.heroText} data-hero-text>
            <p className={a.kickerLight}>Accelerating the Future of Food Security</p>
            <h1 id="h1" className={a.h1} data-hero-title>
              The future of food security is being built in the desert.
            </h1>
            <p className={a.heroIntro} data-hero-in>
              In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers,
              startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies
              needed for a more resilient food system.
            </p>
          </div>
          <p className={a.heroCue} data-hero-in>
            Scroll to discover more <span aria-hidden>↓</span>
          </p>
        </div>
      </section>

      {/* ═══ INTRO — Anthem: label left, statement right, cut-corner photos drifting ═══ */}
      <section className={a.intro} id="about">
        <p className={a.label}>About Innovation Oasis</p>
        <div className={a.introMain}>
          <h2 className={a.h2} data-lines>
            Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE today will
            define agriculture for much of the world tomorrow.
          </h2>
          <figure className={`${a.cut} ${a.introBig}`} data-drift="-8">
            <Image src={P.aerialPlots} alt="Trial plots and greenhouses at Innovation Oasis from the air" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </figure>
          <a href="#story" className={a.btn} data-rise>
            Our story <span aria-hidden>→</span>
          </a>
        </div>
        <figure className={`${a.cut} ${a.introSmall}`} data-drift="18">
          <Image src={P.canopy} alt="The canopy entrance of the Innovation Oasis building" fill sizes="20vw" />
        </figure>
      </section>

      {/* ═══ STATEMENT — Anthem: words brighten as you read ═══ */}
      <section className={a.statement}>
        <p className={a.bright} data-words>
          If solutions can succeed here, they can succeed almost anywhere.
        </p>
      </section>

      {/* ═══ FACTS — Anthem: colour tiles and photos on a sideways track ═══ */}
      <section className={a.tilesSec} data-tiles aria-label="Innovation Oasis in facts">
        <div className={a.tilesStage}>
          <ul className={a.tiles} data-tiles-track>
            {tiles.map((t, i) =>
              t.kind === "img" ? (
                <li key={i} className={`${a.tile} ${a.tileImg}`}>
                  <Image src={t.src} alt={t.alt} fill sizes="(max-width: 900px) 70vw, 30vw" />
                </li>
              ) : (
                <li key={i} className={a.tile} data-tile={t.tone}>
                  <p className={a.tileN}>
                    {t.n}
                    {t.unit ? <small>{t.unit}</small> : null}
                  </p>
                  <p className={a.tileL}>{t.label}</p>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* ═══ OUR STORY — Hut 8: the photo holds while a charcoal panel slides over it ═══ */}
      <section className={a.story} id="story">
        <div className={a.storyHold} data-tone="dark">
          <Image src={P.greenhouseRoofs} alt="Greenhouses on the edge of the desert" fill sizes="100vw" />
          <div className={a.storyHoldShade} />
          <p className={a.storyHoldTitle}>
            <span>01 · Our Story</span>
            An Oasis Built for What&rsquo;s Next
          </p>
        </div>
        <div className={a.storyPanel} data-tone="dark">
          <div className={a.storyGrid}>
            <aside className={a.storyAside}>
              <p className={a.labelLight}>01 · Our Story</p>
            </aside>
            <div className={a.storyMain}>
              <p className={a.bigLight} data-words>
                Innovation Oasis did not begin with a building. It began with a question.
              </p>
              <Notch />
              <div className={a.cols2}>
                <p className={a.bodyLight} data-rise>
                  When Silal was established in 2020, food security and agricultural development were at the heart of its
                  mission. Yet one important piece of the puzzle was missing: a place where research, technology,
                  entrepreneurship, and real-world farming could come together to solve practical challenges facing
                  agriculture.
                </p>
                <p className={a.bodyLight} data-rise>
                  When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government
                  entities, researchers, and technology companies across the UAE. A pattern quickly emerged.
                </p>
              </div>
              <ol className={a.pattern}>
                {pattern.map((p, i) => (
                  <li key={p} data-rise>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {p}
                  </li>
                ))}
              </ol>
              <p className={a.midLight} data-lines>
                But there was no ecosystem connecting them together.
              </p>
              <Notch />
              <p className={a.giantLight} data-lines>
                The world had innovation. <em>What it lacked was implementation.</em>
              </p>
              <Notch />
              <div className={a.cols2}>
                <p className={a.midLight} data-lines>
                  The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side
                  of Al Foah Farm, largely overlooked and unused.
                </p>
                <p className={a.bodyLight} data-rise>
                  Where others saw empty desert, the team saw an opportunity to create a living ecosystem designed around
                  collaboration, experimentation, and impact.
                </p>
              </div>
              <p className={a.bodyLight} data-rise>
                What followed was not the creation of another research center.
              </p>
              <p className={a.giantLight} data-lines>
                It was the creation of <em>Innovation Oasis.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE SITE — Hut 8: a white isometric world, layer by layer ═══ */}
      <Site3D />

      {/* ═══ TODAY — Hut 8 "Our Businesses": charcoal index with notched rules ═══ */}
      <section className={a.today} data-tone="dark">
        <div className={a.todayHead}>
          <Notch />
          <p className={a.giantLight} data-lines>
            Today, Innovation Oasis serves as Silal&rsquo;s R&amp;D and venture engine, helping bridge the gap between
            breakthrough ideas and meaningful impact across agriculture and food systems.
          </p>
        </div>
        <ol className={a.index}>
          {platforms.map((p, i) => (
            <li key={p.key} data-rise>
              <Link href={p.href} className={a.indexRow}>
                <span className={a.indexIcon}>{String(i + 1).padStart(2, "0")}</span>
                <span className={a.indexName}>{p.label}</span>
                <span className={a.indexNum}>{i + 1}.0</span>
                {/* PLACEHOLDER blurbs until the client supplies category copy */}
                <span className={a.indexText}>{p.blurb}</span>
                <span className={a.indexArrow} aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══ OUR PEOPLE — Anthem: cut-corner portrait, text right; team on a sideways track ═══ */}
      <section className={a.people} id="people">
        <p className={a.label}>02 · Our People</p>
        <div className={a.leader}>
          <figure className={`${a.cut} ${a.leaderImg}`} data-drift="-6">
            <Image src={P.ceo} alt="Dr. Shamal Mohammed, CEO of Innovation Oasis" fill sizes="(max-width: 900px) 100vw, 36vw" />
          </figure>
          <div className={a.leaderText}>
            <p className={a.smallCaps}>Leadership</p>
            <h2 className={a.h2} data-lines>
              Innovation Oasis is led by Dr. Shamal Mohammed, CEO.
            </h2>
            <p className={a.body} data-rise>
              Dr. Mohammed joined Silal in 2021 to build its innovation and R&amp;D function from the ground up, bringing
              more than two decades of experience running agricultural research facilities in the UK. It was the months he
              spent meeting farmers, universities, government entities and technology companies across the UAE — described
              above — that surfaced the gap Innovation Oasis was built to close, and led him to the overlooked plot of land
              beside Al Foah Farm where it now stands.
            </p>
          </div>
        </div>
        <blockquote className={a.quote}>
          <p className={a.bright} data-words>
            &ldquo;If it works here, it can work anywhere.&rdquo;
          </p>
          <footer>— Dr. Shamal Mohammed, CEO, Innovation Oasis</footer>
        </blockquote>
      </section>

      <section className={a.teamSec} data-team aria-label="Our Team">
        <div className={a.teamStage}>
          <div className={a.teamHead}>
            <h2 className={a.h2}>Our Team</h2>
            <p className={a.body}>
              Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown
              alongside the ecosystem itself
            </p>
            <p className={a.body}>
              Coming from different disciplines and different corners of the world, the team shares one mandate: build for
              the real world, learn by doing, and prove that solutions tested here can succeed almost anywhere.
            </p>
          </div>
          <ul className={a.teamTrack} data-team-track>
            {team.map((t, i) => (
              <li key={t.name} className={a.member}>
                <div className={`${a.cut} ${a.memberImg}`}>
                  <Image src={t.src} alt={t.name} fill sizes="(max-width: 900px) 60vw, 22vw" />
                </div>
                <p>
                  <span>{t.name}</span>
                  <small>{String(i + 1).padStart(2, "0")}</small>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ WHY HERE — Hut 8 "Our Impact": giant title slides over a dot terrain, spikes mark the pressures ═══ */}
      <Terrain />

      <section className={a.bench}>
        <p className={a.mid} data-lines>
          These are not barriers to innovation. They are the benchmark.
        </p>
        <p className={a.bright} data-words>
          &ldquo;If it works here, it can work anywhere.&rdquo;
        </p>
      </section>

      {/* ═══ DIFFERENT — Hut 8 "Powering the Future": a giant list runs past a guide rule ═══ */}
      <section className={a.list} data-list data-tone="dark">
        <div className={a.listStage}>
          <div className={a.listLeft}>
            <p className={a.labelLight}>04 · What Makes Innovation Oasis Different?</p>
            <h2 className={a.listTitle}>More Than a Research Center. More Than an Accelerator.</h2>
          </div>
          <div className={a.listRule} aria-hidden />
          <ol className={a.listItems} data-list-track>
            {together.map((t, i) => (
              <li key={t} data-list-item>
                {t}
                <small>{String(i + 1).padStart(2, "0")}</small>
              </li>
            ))}
          </ol>
          <div className={a.listRight}>
            <p className={a.labelBlue}>We bring together</p>
            <p className={a.bodyLight}>
              Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all.
              We bring together:
            </p>
          </div>
        </div>
      </section>
      <section className={a.listAfter} data-tone="dark">
        <p className={a.midLight} data-lines>
          Under one ecosystem. This integrated model allows promising ideas to move from concept to validation, from
          validation to adoption, and from local impact to global relevance.
        </p>
        <p className={a.giantLight} data-lines>
          Because food security cannot be solved in <em>silos.</em>
        </p>
      </section>

      {/* ═══ MISSION — Anthem: cut-corner photo panel ═══ */}
      <section className={a.mission} data-tone="dark">
        <div className={a.missionPanel} data-mission>
          <Image src={P.greenhouseLeafy} alt="" fill sizes="100vw" />
          <div className={a.missionShade} />
          <div className={a.missionText}>
            <p className={a.kickerLight}>05 · Our Mission</p>
            <p className={a.missionLine} data-words>
              To fast-track the future of food security by turning the UAE&rsquo;s agricultural challenges into global
              opportunities for innovation, resilience, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PRINCIPLES — Anthem "What we do": the blue bar moves through the list ═══ */}
      <section className={a.princ} data-princ>
        <div className={a.princHead}>
          <p className={a.label}>06 · Principles</p>
          <h2 className={a.h2} data-lines>
            The Principles That Guide Us
          </h2>
        </div>
        <ol className={a.princList}>
          {principles.map((p, i) => (
            <li key={p.t} className={a.princRow} data-princ-row>
              <span className={a.princNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={a.princTitle}>{p.t}</h3>
              <p className={a.princText}>{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══ JOURNEY — Anthem "The Anthem Model": sticky steps, the frame changes shape ═══ */}
      <section className={a.journey} data-journey style={{ height: `${journey.length * 80 + 40}vh` }}>
        <div className={a.jStage}>
          <p className={a.label}>07 · Our Journey</p>
          <div className={a.jFrame} data-jframe>
            {journey.map((j, i) => (
              <div key={j.title} className={a.jImg} data-jimg={i}>
                <Image src={j.src} alt="" fill sizes="(max-width: 900px) 100vw, 44vw" />
              </div>
            ))}
          </div>
          <div className={a.jSide}>
            <ol className={a.jIndex}>
              {journey.map((j, i) => (
                <li key={j.title} data-jidx={i}>
                  <span aria-hidden>→</span>
                  {j.when}
                </li>
              ))}
            </ol>
            <p className={a.jCount}>
              <span data-jcount>01</span> / {String(journey.length).padStart(2, "0")}
            </p>
            <div className={a.jTexts}>
              {journey.map((j, i) => (
                <article key={j.title} className={a.jText} data-jtext={i}>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOOKING AHEAD — Anthem "Watch" strip + closing ═══ */}
      <section className={a.ahead}>
        <a href="#" className={`${a.watch} ${a.cut}`} data-watch>
          <Image src={P.aerialCampus} alt="The Innovation Oasis campus from the air" fill sizes="100vw" />
          <span className={a.watchBtn}>
            Virtual
            <br />
            Tour ↗
          </span>
        </a>
        <div className={a.aheadGrid}>
          <p className={a.label}>08 · Looking Ahead</p>
          <h2 className={a.h2} data-lines>
            The next chapter of Innovation Oasis is larger than any single facility.
          </h2>
          <div className={a.aheadText}>
            <p className={a.body} data-rise>
              Our ambition is to become a platform that not only advances technology but helps shape the future of food
              security itself. A place where research informs policy. Where innovation informs investment. Where today&rsquo;s
              challenges become tomorrow&rsquo;s exportable solutions.
            </p>
          </div>
        </div>
        <div className={a.closing}>
          <p className={a.bright} data-words>
            Because building a resilient food future requires more than innovation. It requires an ecosystem. And that
            ecosystem is growing here.
          </p>
          <div className={a.closeLinks}>
            <Link href={`${BASE}/about/team`} className={a.btn}>
              Team &amp; CEO Message <span aria-hidden>→</span>
            </Link>
            <Link href={`${BASE}/contact`} className={a.btnGhost}>
              Contact us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
