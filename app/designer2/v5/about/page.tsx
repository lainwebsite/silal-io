import type { Metadata } from "next";
import Image from "next/image";
import a from "./about.module.css";
import { Motion } from "./_c/Motion";
import { Site3D } from "./_c/Site3D";
import { Terrain } from "./_c/Terrain";
import { Go, Head, Io, Mark } from "../_c/Brand";
import { P, photo } from "../_lib/photo";
import { BASE, platforms } from "../_lib/site";

export const metadata: Metadata = {
  title: "About Innovation Oasis",
  description: "The future of food security is being built in the desert.",
};

/*
 * About Innovation Oasis — v5.
 * Structure and motion: kept from v4 (scroll-driven chapters adapted from hut8.com + anthem.co.za).
 * Look: rebuilt in the IO guideline language (docs/brand.md + the 35-page guidelines PDF) —
 * light white pages, IO-Blue hairlines, square corners, "io" in blue inside words, guideline page
 * headers, charcoal / IO-Blue cards, deep-green leaf chapter, the official mark as supergraphic.
 * Copy: content/about.md, verbatim, in the client's order.
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

// Facts strictly from content/about.md
const facts = [
  { tone: "charcoal", n: "2020", label: "Silal is established", src: P.canopy },
  { tone: "blue", n: "2021", label: "Dr. Shamal Mohammed joins Silal", src: P.tour },
  { tone: "light", n: "34", unit: "ha", label: "Parcel of land on the opposite side of Al Foah Farm", src: P.aerialPlots },
  { tone: "charcoal", n: "2024", label: "Official inauguration", src: P.inaugurationCeremony },
  { tone: "blue", n: "2030", label: "Vision: global leadership in desert agriculture", src: P.aerialCampus },
];

const pattern = [
  { t: "Research existed.", src: P.microscope },
  { t: "Commercial technologies existed.", src: P.droneSky },
  { t: "Farmers faced urgent challenges.", src: P.greenhouseLeafy },
];

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

export default function About() {
  return (
    <div className={a.page}>
      <Motion />

      {/* ═══ HERO — the guideline website mock (p.27), brought to life ═══ */}
      <section className={a.hero} aria-labelledby="h1" data-hero>
        <div className={a.heroTop}>
          <div className={a.heroPanel} data-hero-panel>
            <p className={a.kicker} data-hero-in>
              About Innovation Oasis · Accelerating the Future of Food Security
            </p>
            <h1 id="h1" className={a.h1} data-hero-title>
              The future of food security is being built in the desert.
            </h1>
            <span className={a.heroLineV} data-hero-v aria-hidden />
            <span className={a.heroLineH} data-hero-h aria-hidden />
          </div>
          <div className={a.heroMark} data-hero-mark aria-hidden>
            <Mark />
          </div>
        </div>
        <div className={a.heroMedia} data-hero-media>
          <div className={a.heroImg} data-hero-img>
            <Image src={P.aerialWide} alt="Innovation Oasis from the air: trial fields and greenhouses in the desert beside Al Foah Farm, Al Ain" fill preload sizes="100vw" />
          </div>
          <div className={a.heroCards} data-hero-cards>
            <div className={a.heroCard} data-c="charcoal">
              <div className={a.heroCardImg}>
                <Image src={P.greenhouseRoofs} alt="" fill sizes="240px" />
              </div>
              <p className={a.heroCardKick}>The site</p>
              <p className={a.heroCardText}>34 hectares beside Al Foah Farm, Al Ain, United Arab Emirates.</p>
            </div>
            <div className={a.heroCard} data-c="blue">
              <div className={a.heroCardImg}>
                <Image src={P.labWorking} alt="" fill sizes="240px" />
              </div>
              <p className={a.heroCardKick}>Part of Silal</p>
              <p className={a.heroCardText}>Silal&rsquo;s R&amp;D and venture engine. Inaugurated 2024.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className={a.intro}>
        <p className={a.statement} data-words>
          Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE today will define
          agriculture for much of the world tomorrow.
        </p>
        <div className={a.introCols}>
          <p className={a.body} data-rise>
            In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers, startups,
            industry leaders, investors, and policymakers to develop, validate, and scale the technologies needed for a more
            resilient food system.
          </p>
          <p className={a.lead} data-rise>
            If solutions can succeed here, they can succeed almost anywhere.
          </p>
        </div>
      </section>

      {/* ═══ FACTS — square guideline cards on a pinned sideways track ═══ */}
      <section className={a.facts} data-facts aria-label="Innovation Oasis in facts">
        <div className={a.factsStage}>
          <div className={a.factsHead}>
            <Head n="00" title="At a glance" sub="From a question in 2021 to a global vision for 2030" />
          </div>
          <ul className={a.factsTrack} data-facts-track>
            {facts.map((f) => (
              <li key={f.n} className={a.fact} data-c={f.tone}>
                <div className={a.factImg}>
                  <Image src={f.src} alt="" fill sizes="(max-width: 900px) 70vw, 24vw" />
                </div>
                <div className={a.factBody}>
                  <p className={a.factN}>
                    {f.n}
                    {f.unit ? <small>{f.unit}</small> : null}
                  </p>
                  <p className={a.factL}>{f.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 01 OUR STORY — the photo holds while a charcoal page slides over it ═══ */}
      <section className={a.story} id="story">
        <div className={a.storyHold}>
          <Image src={P.greenhouseRoofs} alt="Greenhouses on the edge of the desert at Innovation Oasis" fill sizes="100vw" />
          <div className={a.storyShade} />
          <div className={a.storyHoldText}>
            <p className={a.kickerLight}>01 · Our Story</p>
            <h2 className={a.storyTitle}>An Oasis Built for What&rsquo;s Next</h2>
          </div>
        </div>
        <div className={a.storyPage}>
          <div className={a.wrap}>
            <Head n="01" title="Our Story" sub="An Oasis Built for What’s Next" tone="dark" />
            <div className={a.storyGrid}>
              <p className={a.bigLight} data-words>
                Innovation Oasis did not begin with a building. It began with a question.
              </p>
              <div className={a.cols}>
                <p className={a.bodyLight} data-rise>
                  When Silal was established in 2020, food security and agricultural development were at the heart of its
                  mission. Yet one important piece of the puzzle was missing: a place where research, technology,
                  entrepreneurship, and real-world farming could come together to solve practical challenges facing agriculture.
                </p>
                <p className={a.bodyLight} data-rise>
                  When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government
                  entities, researchers, and technology companies across the UAE. A pattern quickly emerged.
                </p>
              </div>
              <ol className={a.pattern}>
                {pattern.map((p, i) => (
                  <li key={p.t} data-rise>
                    <div className={a.patternImg}>
                      <Image src={p.src} alt="" fill sizes="(max-width: 900px) 100vw, 26vw" />
                    </div>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <p>{p.t}</p>
                  </li>
                ))}
              </ol>
              <p className={a.midLight} data-lines>
                But there was no ecosystem connecting them together.
              </p>
              <p className={a.giantLight} data-lines>
                The world had innovation.
                <br />
                What it lacked was <Io w="implementation" />.
              </p>
              <div className={a.cols}>
                <p className={a.midLight} data-lines>
                  The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side of Al
                  Foah Farm, largely overlooked and unused.
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
                It was the creation of <Io w="Innovation" /> Oasis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE SITE — white 3D model, toured place by place ═══ */}
      <Site3D />

      {/* ═══ TODAY + the five platforms (sitemap) ═══ */}
      <section className={a.today}>
        <div className={a.wrap}>
          <p className={a.giant} data-lines>
            Today, <Io w="Innovation" /> Oasis serves as Silal&rsquo;s R&amp;D and venture engine, helping bridge the gap between
            breakthrough ideas and meaningful impact across agriculture and food systems.
          </p>
          <ol className={a.platforms}>
            {platforms.map((p, i) => (
              <li key={p.key} className={a.platform} data-rise>
                <a href={p.href} className={a.platformLink}>
                  <span className={a.platformNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={a.platformName}>{p.label}</span>
                  <span className={a.platformSubs}>{p.subs.filter((s) => !s.external).map((s) => s.label).join("  ·  ")}</span>
                  <span className={a.platformO} aria-hidden>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ 02 OUR PEOPLE ═══ */}
      <section className={a.people} id="people">
        <div className={a.wrap}>
          <Head n="02" title="Our People" sub="Leadership" />
          <div className={a.leader}>
            <figure className={a.leaderImg} data-reveal>
              <Image src={P.ceo} alt="Dr. Shamal Mohammed, CEO of Innovation Oasis" fill sizes="(max-width: 900px) 100vw, 40vw" />
              <figcaption>Dr. Shamal Mohammed, CEO</figcaption>
            </figure>
            <div className={a.leaderText}>
              <h2 className={a.h2} data-lines>
                Innovation Oasis is led by Dr. Shamal Mohammed, CEO.
              </h2>
              <p className={a.body} data-rise>
                Dr. Mohammed joined Silal in 2021 to build its innovation and R&amp;D function from the ground up, bringing more
                than two decades of experience running agricultural research facilities in the UK. It was the months he spent
                meeting farmers, universities, government entities and technology companies across the UAE — described above —
                that surfaced the gap Innovation Oasis was built to close, and led him to the overlooked plot of land beside Al
                Foah Farm where it now stands.
              </p>
            </div>
          </div>
          <blockquote className={a.quote}>
            <p data-words>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
            <footer>Dr. Shamal Mohammed, CEO, Innovation Oasis</footer>
          </blockquote>
        </div>
      </section>

      <section className={a.team} data-team aria-labelledby="team-h">
        <div className={a.teamStage}>
          <div className={a.teamHead}>
            <h2 id="team-h" className={a.h2}>
              Our Team
            </h2>
            <p className={a.body}>
              Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown alongside
              the ecosystem itself
            </p>
            <p className={a.body}>
              Coming from different disciplines and different corners of the world, the team shares one mandate: build for the
              real world, learn by doing, and prove that solutions tested here can succeed almost anywhere.
            </p>
          </div>
          <ul className={a.teamTrack} data-team-track>
            {team.map((t, i) => (
              <li key={t.name} className={a.member}>
                <div className={a.memberImg}>
                  <Image src={t.src} alt={t.name} fill sizes="(max-width: 900px) 60vw, 20vw" />
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

      {/* ═══ 03 WHY HERE — the desert as data ═══ */}
      <Terrain />

      <section className={a.bench}>
        <div className={a.wrap}>
          <p className={a.mid} data-lines>
            These are not barriers to innovation. They are the benchmark.
          </p>
          <p className={a.bigQuote} data-words>
            &ldquo;If it works here, it can work anywhere.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══ 04 WHAT MAKES IO DIFFERENT — the list runs past the hairline ═══ */}
      <section className={a.list} data-list>
        <div className={a.listStage}>
          <div className={a.listTop}>
            <Head n="04" title="What Makes Innovation Oasis Different?" sub="More Than a Research Center. More Than an Accelerator." tone="dark" />
          </div>
          <div className={a.listLeft}>
            <p className={a.bodyLight}>
              Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all. We
              bring together:
            </p>
          </div>
          <div className={a.listRule} aria-hidden />
          <ol className={a.listItems} data-list-track>
            {together.map((t, i) => (
              <li key={t} data-list-item>
                <small>{String(i + 1).padStart(2, "0")}</small>
                {t}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={a.listAfter}>
        <div className={a.wrap}>
          <p className={a.midLight} data-lines>
            Under one ecosystem. This integrated model allows promising ideas to move from concept to validation, from validation
            to adoption, and from local impact to global relevance.
          </p>
          <p className={a.giantLight} data-lines>
            Because food security cannot be solved in silos.
          </p>
        </div>
      </section>

      {/* ═══ 05 MISSION — the guideline's deep-green leaf chapter cover ═══ */}
      <section className={a.mission} data-mission aria-labelledby="mission-h">
        <div className={a.missionImg} data-mission-img>
          <Image src={P.greenhouseLeafy} alt="" fill sizes="100vw" />
        </div>
        <div className={a.missionShade} />
        <div className={a.missionInner}>
          <Head n="05" title="Our Mission" sub="Advancing Agri-food Systems" tone="dark" />
          <h2 id="mission-h" className={a.srOnly}>
            Our Mission
          </h2>
          <p className={a.missionText} data-words>
            To fast-track the future of food security by turning the UAE&rsquo;s agricultural challenges into global opportunities
            for innovation, resilience, and growth.
          </p>
          <span className={a.missionRule} aria-hidden />
        </div>
      </section>

      {/* ═══ 06 PRINCIPLES — the IO-Blue bar moves through the list ═══ */}
      <section className={a.princ}>
        <div className={a.wrap}>
          <Head n="06" title="The Principles That Guide Us" sub="How we work" />
          <ol className={a.princList}>
            {principles.map((p, i) => (
              <li key={p.t} className={a.princRow} data-princ-row>
                <span className={a.princNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={a.princTitle}>{p.t}</h3>
                <p className={a.princText}>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ 07 OUR JOURNEY — sticky steps, the frame wipes to each milestone ═══ */}
      <section className={a.journey} data-journey style={{ height: `${journey.length * 80 + 40}vh` }}>
        <div className={a.jStage}>
          <div className={a.jHead}>
            <Head n="07" title="Our Journey" sub="2021 → 2030" />
          </div>
          <div className={a.jFrame} data-jframe>
            {journey.map((j, i) => (
              <div key={j.title} className={a.jImg} data-jimg={i}>
                <Image src={j.src} alt="" fill sizes="(max-width: 900px) 100vw, 46vw" />
              </div>
            ))}
            <span className={a.jYear} data-jyear aria-hidden>
              {journey[0].when}
            </span>
          </div>
          <div className={a.jSide}>
            <ol className={a.jTicks} aria-hidden>
              {journey.map((j, i) => (
                <li key={j.title} data-jidx={i}>
                  <i />
                  <span>{j.when.replace(" Vision", "")}</span>
                </li>
              ))}
            </ol>
            <p className={a.jCount}>
              <span data-jcount>01</span> / {String(journey.length).padStart(2, "0")}
            </p>
            <div className={a.jTexts}>
              {journey.map((j, i) => (
                <article key={j.title} className={a.jText} data-jtext={i}>
                  <p className={a.kicker}>{j.when}</p>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 08 LOOKING AHEAD ═══ */}
      <section className={a.ahead}>
        <div className={a.wrap}>
          <Head n="08" title="Looking Ahead" sub="The next chapter" />
          <div className={a.aheadGrid}>
            <h2 className={a.h2Big} data-lines>
              The next chapter of <Io w="Innovation" /> Oasis is larger than any single facility.
            </h2>
            <div className={a.aheadText}>
              <p className={a.body} data-rise>
                Our ambition is to become a platform that not only advances technology but helps shape the future of food security
                itself.
              </p>
              <ul className={a.where}>
                <li data-rise>A place where research informs policy.</li>
                <li data-rise>Where innovation informs investment.</li>
                <li data-rise>Where today&rsquo;s challenges become tomorrow&rsquo;s exportable solutions.</li>
              </ul>
            </div>
          </div>
        </div>
        <a href="#" className={a.watch} data-watch aria-label="Virtual Tour (opens the tour)">
          <div className={a.watchImg}>
            <Image src={P.aerialCampus} alt="The Innovation Oasis campus from the air" fill sizes="100vw" />
          </div>
          <span className={a.watchO}>
            <span>Virtual Tour</span>
          </span>
        </a>
        <div className={a.wrap}>
          <div className={a.closing}>
            <p className={a.closeLine} data-words>
              Because building a resilient food future requires more than innovation. It requires an ecosystem. And that ecosystem
              is growing here.
            </p>
            <div className={a.closeLinks}>
              <Go href={`${BASE}/about/team`}>Team &amp; CEO Message</Go>
              <Go href={`${BASE}/research`}>Research &amp; Science</Go>
              <Go href={`${BASE}/contact`}>Contact us</Go>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
