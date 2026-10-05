import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import a from "./about.module.css";
import { Story } from "./_components/Story";
import { Principles } from "./_components/Principles";
import { Clock } from "../_components/Clock";
import { P, photo } from "../_lib/photo";
import { BASE, footerLinks } from "../_lib/site";

export const metadata: Metadata = {
  title: "About Innovation Oasis — Designer 2 · v3",
  description: "The future of food security is being built in the desert.",
};

/*
 * About Innovation Oasis, told as one continuous scroll.
 * Copy: content/about.md (client-supplied), verbatim, in the client PDF's order.
 * Sections are transparent: the World behind them (sky + particles) changes with
 * invisible [data-scene] markers, so nothing ever cuts. Motion lives in _components/Story.tsx.
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

const pattern = [
  { n: "01", label: "Research", line: "Research existed.", src: P.microscope, alt: "A scientist at a microscope" },
  { n: "02", label: "Technology", line: "Commercial technologies existed.", src: P.droneSky, alt: "An agricultural drone in flight" },
  { n: "03", label: "Farming", line: "Farmers faced urgent challenges.", src: P.greenhouseLeafy, alt: "Rows of leafy crops in a greenhouse" },
];

const place = [
  { text: "A place where startups can test technologies in real-world conditions.", src: P.soilProbe, alt: "A soil sensor probe tested at the base of a tree", cap: "Field test" },
  { text: "Where researchers and farmers collaborate side-by-side.", src: P.chamberTwo, alt: "A researcher and a farmer working side by side in a growth chamber", cap: "Growth chamber" },
  { text: "Where commercial partners help scale solutions.", src: P.pitchRoom, alt: "A founder pitching at the FoodTech Challenge", cap: "FoodTech Challenge" },
  {
    text: "And where the UAE’s toughest growing conditions become the ultimate proving ground for the future of food.",
    src: P.greenhouseRoofs,
    alt: "Greenhouses on the edge of the desert",
    cap: "The desert edge",
  },
];

const conditions = ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"];

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

const journey = [
  { when: "2021", year: 2021, title: "The Search Begins", src: P.fieldSpecialist, alt: "A specialist walking through crop rows", text: "Following the creation of Silal, a dedicated innovation function begins taking shape. Extensive engagement across farms, universities, government entities, and industry reveals a clear gap between research, technology, and practical implementation." },
  { when: "Late 2021", year: 2021, title: "An Opportunity in the Desert", src: P.droneTop, alt: "Desert soil seen from above, a drone overhead", text: "An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born." },
  { when: "2022", year: 2022, title: "Building the Blueprint", src: P.labWide, alt: "A long, newly fitted laboratory", text: "A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation." },
  { when: "2022", year: 2022, title: "First Innovation Partners Arrive", src: P.hydroTomato, alt: "Young tomato plants in hydroponic trial pots", text: "Early collaborations begin with pioneering agritech companies, demonstrating a new model where innovators can validate technologies directly within the UAE’s agricultural environment." },
  { when: "2023", year: 2023, title: "From Vision to Reality", src: P.tomatoAisle, alt: "A greenhouse aisle lined with tomato plants", text: "Construction, equipment installation, and ecosystem activation advance rapidly. Research capabilities, specialized laboratories, greenhouse infrastructure, and field-testing assets come online." },
  { when: "2024", year: 2024, title: "Official Inauguration", src: P.inaugurationCeremony, alt: "Guests at the official inauguration of Innovation Oasis", text: "Innovation Oasis officially opens as a state-of-the-art center for agricultural research, innovation, validation, and commercialization. Global partners begin using the facility as a launchpad for collaboration and growth." },
  { when: "2025", year: 2025, title: "Building the Ecosystem", src: P.pitchWinners, alt: "FoodTech Challenge winners on stage", text: "The focus expands from infrastructure to people. Research teams grow, partnerships mature, venture programs launch, and Innovation Oasis strengthens its role as a connector across the regional and global agrifood ecosystem." },
  { when: "2030 Vision", year: 2030, title: "Global Leadership in Desert Agriculture", src: P.aerialCampus, alt: "The Innovation Oasis campus from the air", text: "Innovation Oasis aims to become the global reference point for arid-climate agriculture, food system resilience, and agritech deployment, helping shape research, investment, commercialization, and policy for the future of food security." },
];

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Marker({ scene, at }: { scene: string; at: string }) {
  return <i className={a.marker} data-scene={scene} style={{ top: at }} aria-hidden />;
}

export default function About() {
  return (
    <div className={a.story}>
      <Story />

      {/* ═════════ PROLOGUE ═════════ */}
      <div id="prologue" data-chapter="Prologue">
        <section className={a.hero} data-scene="hero" data-hero aria-labelledby="h-hero">
          <div className={a.heroDial} data-dial aria-hidden>
            <span className={a.dialTicks} data-dial-ticks />
            <span className={a.dialCircle} />
            <span className={a.dialWords} data-dial-words>
              <b style={{ ["--a" as string]: "0deg" }}>Research</b>
              <b style={{ ["--a" as string]: "120deg" }}>Development</b>
              <b style={{ ["--a" as string]: "240deg" }}>Growth</b>
            </span>
          </div>
          <div className={a.heroText}>
            <p className={a.kicker} data-hero-in>
              About Innovation Oasis <span /> Accelerating the Future of Food Security
            </p>
            <h1 id="h-hero" className={a.heroTitle} data-hero-title>
              The future of food security is being built in the <em>desert.</em>
            </h1>
          </div>
          <div className={a.heroFoot} data-hero-in>
            <p className={a.scrollCue}>
              <span className={a.scrollLine} aria-hidden />
              Scroll to begin
            </p>
            <p className={a.heroMeta}>
              <span>Al Foah, Al Ain</span>
              <span>
                <Clock /> GST
              </span>
            </p>
          </div>
        </section>

        <section className={a.belief} data-scene="belief">
          <div className={a.wrap}>
            <p className={a.beliefText} data-words>
              Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE{" "}
              <em>today</em> will define agriculture for much of the world <em>tomorrow.</em>
            </p>
            <div className={a.beliefRow}>
              <p className={a.body} data-rise>
                In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers,
                startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies
                needed for a more resilient food system.
              </p>
              <figure className={a.beliefFig} data-card>
                <div className={a.cardImg}>
                  <div data-card-inner>
                    <Image src={P.aerialWide} alt="Aerial view of the trial fields at Innovation Oasis in the desert" fill sizes="(max-width: 900px) 100vw, 56vw" />
                  </div>
                </div>
                <figcaption className={a.cap}>
                  <span>01</span> Trial fields beside Al Foah Farm, from the air
                </figcaption>
              </figure>
            </div>
            <p className={a.punch} data-lines>
              If solutions can succeed here, they can succeed almost <em>anywhere.</em>
            </p>
          </div>
        </section>
      </div>

      {/* ═════════ 01 OUR STORY ═════════ */}
      <div id="story" data-chapter="Our Story">
        <section className={a.track} style={{ height: "220vh" }} data-scene="question" data-seq="question">
          <div className={a.stage}>
            <div className={a.center}>
              <p className={a.kicker} data-q-kick>
                <b>01</b> Our Story <span /> An Oasis Built for What&rsquo;s Next
              </p>
              <p className={a.qOne} data-q-one>
                Innovation Oasis did not begin with a building.
              </p>
              <p className={a.qTwo} data-q-two>
                It began with a <em>question.</em>
              </p>
              <span className={a.qDot} data-q-dot aria-hidden />
            </div>
          </div>
        </section>

        <section className={a.origin} data-scene="origin">
          <div className={a.wrap}>
            <div className={a.originGrid}>
              <div className={a.originYear} data-rise>
                <span className={a.bigYear}>2020</span>
                <p className={a.yearLabel}>Silal is established</p>
              </div>
              <p className={a.body} data-rise>
                When Silal was established in 2020, food security and agricultural development were at the heart of its
                mission. Yet one important piece of the puzzle was missing: a place where research, technology,
                entrepreneurship, and real-world farming could come together to solve practical challenges facing
                agriculture.
              </p>
            </div>
            <div className={a.originGrid} data-flip>
              <figure className={a.originFig} data-card>
                <div className={a.cardImg}>
                  <div data-card-inner>
                    <Image src={P.tour} alt="Growers, partners and researchers meeting in a tomato greenhouse" fill sizes="(max-width: 900px) 100vw, 44vw" />
                  </div>
                </div>
                <figcaption className={a.cap}>
                  <span>02</span> Meeting growers and partners in the greenhouse
                </figcaption>
              </figure>
              <div>
                <div className={a.originYear} data-rise>
                  <span className={a.bigYear}>2021</span>
                  <p className={a.yearLabel}>Dr. Shamal Mohammed joins Silal</p>
                </div>
                <p className={a.body} data-rise>
                  When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government
                  entities, researchers, and technology companies across the UAE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A pattern: three islands that never connect */}
        <section className={a.track} style={{ height: "340vh" }} data-scene="pattern" data-seq="pattern">
          <div className={a.stage}>
            <p className={`${a.kicker} ${a.stageKick}`} data-p-kick>
              A pattern quickly emerged.
            </p>
            {pattern.map((p, i) => (
              <div key={p.n} className={a.island} style={{ ["--x" as string]: `${20 + i * 30}%` }} data-p-island>
                <div className={a.islandLens} data-p-lens>
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 30vw, 18vw" />
                </div>
                <p className={a.islandLabel} data-p-label>
                  <span>{p.n}</span> {p.label}
                </p>
                <p className={a.islandLine} data-p-line>
                  {p.line}
                </p>
              </div>
            ))}
            {[0, 1].map((k) => (
              <span key={k} className={a.gap} style={{ ["--x" as string]: `${35 + k * 30}%` }} aria-hidden>
                <i data-p-gl />
                <b data-p-x>×</b>
                <i data-p-gr />
              </span>
            ))}
            <p className={a.patternClose} data-p-close>
              But there was no ecosystem connecting them together.
            </p>
          </div>
        </section>

        <section className={a.track} style={{ height: "230vh" }} data-scene="lack" data-seq="lack">
          <div className={a.stage}>
            <p className={a.lackA} data-l-a>
              The world had <span data-l-inn>innovation.</span>
            </p>
            <p className={a.lackB} data-l-b>
              What it lacked was <em data-l-imp>implementation.</em>
            </p>
          </div>
        </section>

        <section className={a.land} data-scene="land">
          <div className={a.wrap}>
            <p className={a.landText} data-words>
              The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side of
              Al Foah Farm, largely overlooked and unused.
            </p>
            <div className={a.survey} data-survey>
              <div className={a.surveyImg} data-survey-img>
                <Image src={P.aerialPlots} alt="Trial plots and greenhouses on the once-unused parcel" fill sizes="100vw" />
              </div>
              <span className={a.surveyGrid} aria-hidden />
              <span className={a.surveyBox} data-survey-box aria-hidden>
                <i />
                <i />
                <i />
                <i />
              </span>
              <div className={a.surveyStat}>
                <p className={a.surveyNum}>
                  <span data-count="34">0</span>
                  <small>ha</small>
                </p>
                <p className={a.surveyNote}>Opposite side of Al Foah Farm</p>
              </div>
              <p className={a.surveyCap}>
                <span>03</span> Trial plots on the once-unused parcel
              </p>
            </div>
            <p className={a.landAfter} data-lines>
              Where others saw empty desert, the team saw an opportunity to create a living ecosystem designed around
              collaboration, experimentation, and impact.
            </p>
          </div>
        </section>

        {/* The creation → the O opens → a place where… */}
        <section className={a.track} style={{ height: "1000vh" }} data-seq="oasis">
          <Marker scene="creation" at="0%" />
          <Marker scene="place" at="44%" />
          <div className={a.stage}>
            <p className={a.cNot} data-c-not>
              What followed was not the creation of another research center.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/io-mark.svg" alt="" className={a.cMark} data-c-mark width={255} height={188} />
            <p className={a.cIs} data-c-is>
              It was the creation of <strong>Innovation Oasis.</strong>
            </p>
            <div className={a.oPhoto} data-o-photo>
              <div className={a.oImg} data-o-img="0">
                <Image src={P.canopy} alt="The Innovation Oasis building and its canopy entrance" fill sizes="100vw" />
              </div>
              {place.map((p, i) => (
                <div key={p.cap} className={a.oImg} data-o-img={i + 1}>
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 80vw, 40vw" />
                </div>
              ))}
            </div>
            <div className={a.oRing} data-o-ring aria-hidden>
              <span className={a.dialTicks} />
              <span className={a.oRingLabel} data-o-count>
                01 / 04
              </span>
            </div>
            <p className={a.oCap} data-o-cap>
              <span>04</span> <b data-o-captext>Innovation Oasis, Al Foah</b>
            </p>
            <ol className={a.placeList}>
              {place.map((p, i) => (
                <li key={p.cap} data-place={i}>
                  <span className={a.placeNum}>{String(i + 1).padStart(2, "0")}</span>
                  {p.text}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={a.today} data-scene="today">
          <div className={a.wrap}>
            <p className={a.todayText} data-words>
              Today, Innovation Oasis serves as Silal&rsquo;s R&amp;D and venture engine, helping bridge the gap between
              breakthrough ideas and meaningful impact across agriculture and food systems.
            </p>
            <figure className={a.todayFig} data-card>
              <div className={a.cardImg}>
                <div data-card-inner>
                  <Image src={P.atrium} alt="The atrium, with Research, Development and Growth in English and Arabic" fill sizes="100vw" />
                </div>
              </div>
              <figcaption className={a.cap}>
                <span>05</span> Research · Development · Growth, the atrium
              </figcaption>
            </figure>
          </div>
        </section>
      </div>

      {/* ═════════ 02 OUR PEOPLE ═════════ */}
      <div id="people" data-chapter="Our People">
        <section className={a.leader} data-scene="people">
          <div className={a.wrap}>
            <p className={a.kicker} data-rise>
              <b>02</b> Our People <span /> Leadership
            </p>
            <div className={a.leaderGrid}>
              <figure className={a.leaderFig} data-card>
                <div className={a.cardImg}>
                  <div data-card-inner>
                    <Image src={P.ceo} alt="Dr. Shamal Mohammed, CEO of Innovation Oasis" fill sizes="(max-width: 900px) 100vw, 38vw" />
                  </div>
                </div>
                <figcaption className={a.cap}>
                  <span>06</span> Dr. Shamal Mohammed, CEO
                </figcaption>
              </figure>
              <div className={a.leaderCopy}>
                <p className={a.leaderLead} data-lines>
                  Innovation Oasis is led by Dr. Shamal Mohammed, CEO.
                </p>
                <p className={a.body} data-rise>
                  Dr. Mohammed joined Silal in 2021 to build its innovation and R&amp;D function from the ground up, bringing
                  more than two decades of experience running agricultural research facilities in the UK. It was the months
                  he spent meeting farmers, universities, government entities and technology companies across the UAE —
                  described above — that surfaced the gap Innovation Oasis was built to close, and led him to the overlooked
                  plot of land beside Al Foah Farm where it now stands.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={a.track} style={{ height: "240vh" }} data-scene="quote" data-seq="quote">
          <div className={a.stage}>
            <blockquote className={a.quote}>
              <p data-quote-words>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
              <footer data-quote-by>Dr. Shamal Mohammed, CEO, Innovation Oasis</footer>
            </blockquote>
          </div>
        </section>

        <section className={a.team} data-scene="people">
          <div className={a.wrap}>
            <div className={a.teamHead}>
              <h2 className={a.h2} data-lines>
                Our Team
              </h2>
              <div className={a.teamIntro}>
                <p className={a.body} data-rise>
                  Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown
                  alongside the ecosystem itself
                </p>
                <p className={a.body} data-rise>
                  Coming from different disciplines and different corners of the world, the team shares one mandate: build
                  for the real world, learn by doing, and prove that solutions tested here can succeed almost anywhere.
                </p>
              </div>
            </div>
            <ul className={a.teamGrid} data-team>
              {team.map((t, i) => (
                <li key={t.name} className={a.member} data-col={i % 4}>
                  <div className={a.memberImg}>
                    <Image src={t.src} alt={t.name} fill sizes="(max-width: 640px) 50vw, 24vw" />
                  </div>
                  <p className={a.memberName}>
                    <span>{t.name}</span>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* ═════════ 03 WHY HERE ═════════ */}
      <div id="why-here" data-chapter="Why Here?">
        <section className={a.why} data-scene="why">
          <div className={a.wrap}>
            <p className={a.kicker} data-rise>
              <b>03</b> Why Here? <span /> The Arid Advantage
            </p>
            <p className={a.whyA} data-lines>
              Many see the desert as a constraint.
            </p>
            <p className={a.whyB} data-words>
              We see it as the world&rsquo;s most important <em>testbed.</em>
            </p>
            <div className={a.whyCols}>
              <p className={a.body} data-rise>
                Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will
                reshape agriculture around the world. Conditions once considered unique to the UAE are becoming increasingly
                common elsewhere.
              </p>
              <p className={a.body} data-rise>
                That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the
                pressures that define tomorrow&rsquo;s food system today.
              </p>
            </div>
          </div>
        </section>

        <section className={a.track} style={{ height: "520vh" }} data-seq="bench">
          <Marker scene="why" at="0%" />
          <Marker scene="bench" at="74%" />
          <div className={a.stage}>
            <p className={`${a.kicker} ${a.stageKick}`} data-b-kick>
              <b data-b-count>01</b> / 05 <span /> The Arid Advantage
            </p>
            <ol className={a.bench}>
              {conditions.map((c) => (
                <li key={c} data-b-item>
                  {c}
                </li>
              ))}
            </ol>
            <div className={a.benchEnd} data-b-end>
              <p className={a.benchLine}>
                These are not barriers to innovation. They are the <em>benchmark.</em>
              </p>
              <p className={a.benchQuote}>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
            </div>
          </div>
        </section>
      </div>

      {/* ═════════ 04 WHAT MAKES IO DIFFERENT ═════════ */}
      <div id="different" data-chapter="What Makes Us Different">
        <section className={a.track} style={{ height: "420vh" }} data-scene="different" data-seq="eco">
          <div className={a.stage}>
            <div className={a.ecoText}>
              <p className={a.kicker} data-e-kick>
                <b>04</b> What Makes Innovation Oasis Different?
              </p>
              <h2 className={a.ecoTitle} data-e-title>
                More Than a Research Center. <em>More Than an Accelerator.</em>
              </h2>
              <div className={a.ecoSwap}>
                <p className={a.body} data-e-p1>
                  Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them
                  all. We bring together:
                </p>
                <div className={a.ecoP2} data-e-p2>
                  <p className={a.body}>
                    Under one ecosystem. This integrated model allows promising ideas to move from concept to validation,
                    from validation to adoption, and from local impact to global relevance.
                  </p>
                  <p className={a.ecoSilos}>Because food security cannot be solved in silos.</p>
                </div>
              </div>
            </div>
            <ul className={a.ecoLabels}>
              {together.map((t, i) => {
                const ang = (i / together.length) * 360 - 90;
                return (
                  <li key={t} data-e-label style={{ ["--ang" as string]: `${ang}deg` }} data-side={Math.cos((ang * Math.PI) / 180) > 0.2 ? "r" : Math.cos((ang * Math.PI) / 180) < -0.2 ? "l" : "c"}>
                    <span>
                      <b>{String(i + 1).padStart(2, "0")}</b> {t}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className={a.ecoCore} data-e-core>
              Under one ecosystem.
            </p>
          </div>
        </section>
      </div>

      {/* ═════════ 05 MISSION ═════════ */}
      <div id="mission" data-chapter="Our Mission">
        <section className={a.track} style={{ height: "200vh" }} data-scene="mission" data-seq="mission">
          <div className={a.stage}>
            <div className={a.missionBox}>
              <p className={a.kicker}>
                <b>05</b> Our Mission
              </p>
              <p className={a.missionText} data-m-words>
                To fast-track the future of food security by turning the UAE&rsquo;s agricultural challenges into global
                opportunities for innovation, resilience, and growth.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ═════════ 06 PRINCIPLES ═════════ */}
      <div id="principles" data-chapter="Principles">
        <section className={a.principles} data-scene="principles">
          <div className={a.wrap}>
            <p className={a.kicker} data-rise>
              <b>06</b> Principles
            </p>
            <h2 className={a.h2} data-lines>
              The Principles That Guide Us
            </h2>
            <Principles />
          </div>
        </section>
      </div>

      {/* ═════════ 07 JOURNEY ═════════ */}
      <div id="journey" data-chapter="Our Journey">
        <section className={a.track} style={{ height: `${journey.length * 95 + 60}vh` }} data-scene="journey" data-seq="journey">
          <div className={a.stage}>
            <p className={`${a.kicker} ${a.stageKick}`}>
              <b>07</b> Our Journey
            </p>
            <div className={a.jYear} aria-hidden>
              <span>2</span>
              <span>0</span>
              <span className={a.jDigit}>
                <span data-j-tens>
                  {DIGITS.map((d) => (
                    <i key={d}>{d}</i>
                  ))}
                </span>
              </span>
              <span className={a.jDigit}>
                <span data-j-ones>
                  {DIGITS.map((d) => (
                    <i key={d}>{d}</i>
                  ))}
                </span>
              </span>
            </div>
            <div className={a.jItems}>
              {journey.map((j, i) => (
                <article key={j.title} className={a.jItem} data-j-item={i}>
                  <p className={a.jWhen}>{j.when}</p>
                  <h3 className={a.jTitle}>{j.title}</h3>
                  <p className={a.jText}>{j.text}</p>
                </article>
              ))}
            </div>
            <div className={a.jLens} data-j-lens>
              {journey.map((j, i) => (
                <div key={j.title} className={a.jImg} data-j-img={i}>
                  <Image src={j.src} alt={j.alt} fill sizes="(max-width: 760px) 60vw, 30vw" />
                </div>
              ))}
              <span className={a.jRing} aria-hidden>
                <span className={a.dialTicks} data-j-ticks />
              </span>
            </div>
            <ol className={a.jTicks} aria-hidden>
              {journey.map((j, i) => (
                <li key={j.title} data-j-tick={i}>
                  <i />
                  <span>{j.when.replace(" Vision", "")}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      {/* ═════════ 08 LOOKING AHEAD ═════════ */}
      <div id="ahead" data-chapter="Looking Ahead">
        <section className={a.ahead} data-scene="ahead">
          <div className={a.wrap}>
            <p className={a.kicker} data-rise>
              <b>08</b> Looking Ahead
            </p>
            <p className={a.aheadLead} data-words>
              The next chapter of Innovation Oasis is larger than any single facility.
            </p>
            <p className={a.body} data-rise>
              Our ambition is to become a platform that not only advances technology but helps shape the future of food
              security itself.
            </p>
            <ul className={a.aheadWhere}>
              <li data-lines>A place where research informs policy.</li>
              <li data-lines>Where innovation informs investment.</li>
              <li data-lines>Where today&rsquo;s challenges become tomorrow&rsquo;s exportable solutions.</li>
            </ul>
          </div>
        </section>

        <section className={a.track} style={{ height: "320vh" }} data-scene="finale" data-seq="finale">
          <div className={a.stage}>
            <p className={a.fLine} data-f-line>
              Because building a resilient food future requires more than innovation.
            </p>
            <p className={a.fLine} data-f-line>
              It requires an ecosystem.
            </p>
            <p className={`${a.fLine} ${a.fLast}`} data-f-line>
              And that ecosystem is growing <em>here.</em>
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/io-mark.svg" alt="" className={a.fMark} data-f-mark width={255} height={188} />
            <nav className={a.next} data-f-next aria-label="Continue">
              <Link href={`${BASE}/about/team`}>
                <small>Next</small> Team &amp; CEO Message
              </Link>
              <Link href={`${BASE}/research`}>
                <small>Explore</small> Research &amp; Science
              </Link>
              <Link href={footerLinks.contact}>
                <small>Talk to us</small> Contact
              </Link>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}
