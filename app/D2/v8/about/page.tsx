import type { Metadata } from "next";
import Image from "next/image";
import a from "./about.module.css";
import s from "../shell.module.css";
import { Motion } from "./_c/Motion";
import { Platforms } from "./_c/Platforms";
import { Btn, Label } from "../_c/Brand";
import { P, photo } from "../_lib/photo";
import { BASE, footerLinks } from "../_lib/site";

export const metadata: Metadata = {
  title: "About Innovation Oasis",
  description: "The future of food security is being built in the desert.",
};

/*
 * About Innovation Oasis — v8. One continuous page.
 * Sections carry a theme (data-theme) instead of a background; Motion mixes the page colour from one
 * theme to the next as you scroll, so chapters dissolve into each other. Layout stays the v7 rule:
 * small label left (cols 1–3), content right (cols 4–12). Copy: content/about.md, verbatim, in order.
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

const glance = [
  { n: "2020", t: "Silal is established" },
  { n: "2021", t: "Dr. Shamal Mohammed joins Silal" },
  { n: "34 ha", t: "On the opposite side of Al Foah Farm" },
  { n: "2024", t: "Official inauguration" },
];

const storyImgs = [
  { src: P.fieldSpecialist, tag: "2020" },
  { src: P.tour, tag: "2021" },
  { src: P.aerialPlots, tag: "34 hectares" },
];

const place = [
  { t: "A place where startups can test technologies in real-world conditions.", src: P.soilProbe },
  { t: "Where researchers and farmers collaborate side-by-side.", src: P.tomatoAisle },
  { t: "Where commercial partners help scale solutions.", src: P.pitchRoom },
  { t: "And where the UAE’s toughest growing conditions become the ultimate proving ground for the future of food.", src: P.droneSky },
];

const pressures = ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"];

const together: { t: string; icon: string }[] = [
  { t: "World-class research facilities", icon: "M9 3v6l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3M7 3h10M7 15h10" },
  { t: "Commercial testbeds", icon: "M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6" },
  { t: "Venture development programs", icon: "M4 20l5-5M14 4c3 0 6 3 6 6l-7 7-6-6 7-7zM15 9h.01" },
  { t: "Industry partnerships", icon: "M3 12l4-4 5 2 5-2 4 4-4 4-5-2-5 2z" },
  { t: "Farmer networks", icon: "M12 21V9m0 0c0-3 2-5 6-6 0 4-2 6-6 6zm0 4c0-3-2-5-6-6 0 4 2 6 6 6z" },
  { t: "Academic collaborators", icon: "M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5" },
  { t: "Investment pathways", icon: "M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3" },
  { t: "Food security stakeholders", icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" },
];
const flow = ["Concept", "Validation", "Adoption", "Local impact", "Global relevance"];

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

      {/* the chapter thread (fixed, bottom left) */}
      <div className={s.chapter} data-ch aria-hidden>
        <b data-ch-n>01</b>
        <i />
        <span data-ch-name>Introduction</span>
      </div>

      {/* ═══ HERO: the photo opens to full screen and dims into the dark introduction ═══ */}
      <section className={a.hero} data-hero data-theme="light" aria-labelledby="hero-h">
        <div className={a.heroStage}>
          <div className={a.heroTop} data-hero-top>
            <div className={a.wrap}>
              <div className={a.row}>
                <div className={a.side}>
                  <Label>About Innovation Oasis</Label>
                </div>
                <div className={a.main}>
                  <p className={a.kicker} data-hero-in>
                    Accelerating the Future of Food Security
                  </p>
                  <h1 id="hero-h" className={a.h1} data-hero-h1>
                    The future of food security is being built in the desert.
                  </h1>
                  <div className={a.ctas} data-hero-in>
                    <Btn href="#story">Our story</Btn>
                    <Btn href={footerLinks.contact} v="ghost">
                      Contact us
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={a.heroMedia} data-hero-media>
            <div className={a.heroImg} data-hero-img>
              <Image src={P.aerialWide} alt="Innovation Oasis from the air: greenhouses and trial fields beside Al Foah Farm" fill sizes="100vw" preload />
            </div>
            <div className={a.heroDim} data-hero-dim />
            <ul className={a.glance} data-hero-glance aria-label="At a glance">
              {glance.map((g) => (
                <li key={g.n}>
                  <b>{g.n}</b>
                  <span>{g.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 01 INTRODUCTION ═══ */}
      <section className={a.sec} data-theme="dark" data-chapter="Introduction" data-n="01" aria-label="Introduction">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Introduction</Label>
            </div>
            <div className={a.main}>
              <p className={a.statement} data-words>
                Innovation Oasis was created on a simple belief: <em>the conditions challenging agriculture in the UAE today will define agriculture for much of the world tomorrow.</em>
              </p>
              <div className={a.cols}>
                <p className={a.body} data-up>
                  In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers, startups,
                  industry leaders, investors, and policymakers to develop, validate, and scale the technologies needed for a more
                  resilient food system.
                </p>
                <p className={a.lead} data-up>
                  If solutions can succeed here, they can succeed almost anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 02 OUR STORY: sticky photo, wiped by each beat ═══ */}
      <section className={a.sec} id="story" data-theme="light" data-chapter="Our Story" data-n="02" aria-labelledby="story-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Our Story</Label>
            </div>
            <div className={a.main}>
              <h2 id="story-h" className={a.h2} data-lines>
                An Oasis Built for What&rsquo;s Next
              </h2>
            </div>
          </div>
          <div className={a.story} data-story>
            <div className={a.storyMedia}>
              <div className={a.storyFrame}>
                {storyImgs.map((im, i) => (
                  <div key={im.src} className={a.storyImg} data-story-img={i}>
                    <Image src={im.src} alt="" fill sizes="(max-width: 900px) 100vw, 46vw" />
                  </div>
                ))}
                <p className={a.storyTag} aria-hidden>
                  {storyImgs.map((im, i) => (
                    <span key={im.tag} data-story-tag={i}>
                      {im.tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={a.storyBeats}>
              <div className={a.beat} data-beat>
                <p className={a.lead}>
                  Innovation Oasis did not begin with a building.
                  <br />
                  It began with a question.
                </p>
                <p className={a.body}>
                  When Silal was established in 2020, food security and agricultural development were at the heart of its mission. Yet
                  one important piece of the puzzle was missing: a place where research, technology, entrepreneurship, and real-world
                  farming could come together to solve practical challenges facing agriculture.
                </p>
              </div>
              <div className={a.beat} data-beat>
                <p className={a.body}>
                  When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government entities,
                  researchers, and technology companies across the UAE. A pattern quickly emerged.
                </p>
                <ul className={a.pattern}>
                  <li>Research existed.</li>
                  <li>Commercial technologies existed.</li>
                  <li>Farmers faced urgent challenges.</li>
                </ul>
                <p className={a.body}>But there was no ecosystem connecting them together.</p>
              </div>
              <div className={a.beat} data-beat>
                <p className={a.body}>
                  The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side of Al Foah
                  Farm, largely overlooked and unused. Where others saw empty desert, the team saw an opportunity to create a living
                  ecosystem designed around collaboration, experimentation, and impact.
                </p>
              </div>
            </div>
          </div>

          {/* the line fills as you read it */}
          <div className={a.row}>
            <div className={a.main}>
              <p className={a.fill} data-fill>
                <span>The world had innovation.</span> <span>What it lacked was implementation.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 02 · A PLACE WHERE: horizontal track ═══ */}
      <section className={a.hs} data-hs data-theme="paper" data-chapter="Our Story" data-n="02" aria-label="What Innovation Oasis is">
        <div className={a.hsStage}>
          <div className={a.hsTrack} data-hs-track>
            <div className={a.hsIntro}>
              <Label>Innovation Oasis</Label>
              <p className={a.lead}>What followed was not the creation of another research center.</p>
              <p className={a.h2}>It was the creation of Innovation Oasis.</p>
            </div>
            {place.map((p, i) => (
              <article key={p.t} className={a.hsCard}>
                <div className={a.hsImg}>
                  <div className={a.hsImgIn} data-hs-img>
                    <Image src={p.src} alt="" fill sizes="(max-width: 900px) 100vw, 34vw" />
                  </div>
                </div>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <p>{p.t}</p>
              </article>
            ))}
          </div>
          <div className={a.wrap}>
            <div className={a.hsBar} aria-hidden>
              <i data-hs-bar />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 03 TODAY ═══ */}
      <section className={a.sec} data-theme="light" data-chapter="Today" data-n="03" aria-labelledby="today-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Today</Label>
            </div>
            <div className={a.main}>
              <h2 id="today-h" className={a.h2} data-lines>
                Today, Innovation Oasis serves as Silal&rsquo;s R&amp;D and venture engine, helping bridge the gap between
                breakthrough ideas and meaningful impact across agriculture and food systems.
              </h2>
            </div>
          </div>
          <Platforms />
        </div>
      </section>

      {/* ═══ 04 OUR PEOPLE ═══ */}
      <section className={a.sec} id="people" data-theme="light" data-chapter="Our People" data-n="04" aria-labelledby="people-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Our People</Label>
            </div>
            <div className={a.main}>
              <p className={a.kicker} data-up>
                Leadership
              </p>
              <h2 id="people-h" className={a.h2} data-lines>
                Innovation Oasis is led by Dr. Shamal Mohammed, CEO.
              </h2>
            </div>
          </div>
          <div className={a.ceo} data-ceo>
            <div className={a.ceoImg} data-ceo-img>
              <div className={a.ceoImgIn} data-ceo-in>
                <Image src={P.ceo} alt="Dr. Shamal Mohammed, CEO of Innovation Oasis" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
            </div>
            <div className={a.ceoText}>
              <p className={a.body} data-up>
                Dr. Mohammed joined Silal in 2021 to build its innovation and R&amp;D function from the ground up, bringing more than
                two decades of experience running agricultural research facilities in the UK. It was the months he spent meeting
                farmers, universities, government entities and technology companies across the UAE — described above — that surfaced
                the gap Innovation Oasis was built to close, and led him to the overlooked plot of land beside Al Foah Farm where it
                now stands.
              </p>
              <blockquote className={a.ceoQuote}>
                <p data-words>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
                <footer data-up>Dr. Shamal Mohammed, CEO, Innovation Oasis</footer>
              </blockquote>
            </div>
          </div>

          <div className={`${a.row} ${a.gapTop}`}>
            <div className={a.side}>
              <Label>Our Team</Label>
            </div>
            <div className={a.main}>
              <p className={a.lead} data-up>
                Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown alongside
                the ecosystem itself
              </p>
              <p className={`${a.body} ${a.mt}`} data-up>
                Coming from different disciplines and different corners of the world, the team shares one mandate: build for the real
                world, learn by doing, and prove that solutions tested here can succeed almost anywhere.
              </p>
            </div>
          </div>
          <ul className={a.team} data-team>
            {team.map((t, i) => (
              <li key={t.name} className={a.member} data-speed={[0, 1, 0.4, 1.4][i % 4]}>
                <div className={a.memberImg}>
                  <Image src={t.src} alt={t.name} fill sizes="(max-width: 900px) 50vw, 25vw" />
                </div>
                <p className={a.memberName}>
                  <b>{t.name}</b>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 05 WHY HERE?: constraint → testbed, then the pressures ═══ */}
      <section className={a.why} data-theme="dark" data-chapter="Why Here?" data-n="05" aria-labelledby="why-h">
        <div className={a.wipe} data-wipe>
          <div className={a.wipeStage}>
            <div className={a.wipeFrame} data-wipe-frame>
              <div className={`${a.wipeImg} ${a.grey}`}>
                <Image src={P.droneTop} alt="Bare desert ground" fill sizes="100vw" />
              </div>
              <div className={a.wipeImg} data-wipe-b>
                <Image src={P.aerialPlots} alt="The same desert, planted: trial plots at Innovation Oasis" fill sizes="100vw" />
              </div>
              <div className={a.wipeShade} />
              <div className={a.wipeText}>
                <div className={a.wrap}>
                  <div className={a.row}>
                    <div className={a.side}>
                      <Label>Why Here?</Label>
                    </div>
                    <div className={a.main}>
                      <p className={a.kickerLight}>The Arid Advantage</p>
                      <h2 id="why-h" className={a.wipeH}>
                        <span data-wipe-a>Many see the desert as a constraint.</span>
                        <span data-wipe-b2>We see it as the world&rsquo;s most important testbed.</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.main}>
              <div className={a.cols}>
                <p className={a.body} data-up>
                  Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will reshape
                  agriculture around the world. Conditions once considered unique to the UAE are becoming increasingly common
                  elsewhere.
                </p>
                <p className={a.body} data-up>
                  That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the pressures
                  that define tomorrow&rsquo;s food system today.
                </p>
              </div>
              <ol className={a.press} data-press>
                {pressures.map((p, i) => (
                  <li key={p}>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
              <p className={a.bench} data-lines>
                These are not barriers to innovation. <em>They are the benchmark.</em>
              </p>
              <blockquote className={a.quote} data-up>
                <p>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 06 DIFFERENT ═══ */}
      <section className={a.sec} data-theme="light" data-chapter="What Makes IO Different" data-n="06" aria-labelledby="diff-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>What Makes Innovation Oasis Different?</Label>
            </div>
            <div className={a.main}>
              <h2 id="diff-h" className={a.h2} data-lines>
                More Than a Research Center. More Than an Accelerator.
              </h2>
              <p className={`${a.body} ${a.mt}`} data-up>
                Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all. We
                bring together:
              </p>
              <ul className={a.together} data-together>
                {together.map((x) => (
                  <li key={x.t}>
                    <svg viewBox="0 0 24 24" aria-hidden>
                      <path d={x.icon} pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>{x.t}</p>
                  </li>
                ))}
              </ul>
              <p className={a.body} data-up>
                Under one ecosystem. This integrated model allows promising ideas to move from concept to validation, from validation
                to adoption, and from local impact to global relevance.
              </p>
              <ol className={a.flow} data-flow aria-label="From concept to global relevance">
                <i className={a.flowLine} data-flow-line aria-hidden />
                {flow.map((f) => (
                  <li key={f} data-flow-node>
                    <i aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ol>
              <p className={a.lead} data-up>
                Because food security cannot be solved in silos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 07 MISSION: the card opens to the full screen ═══ */}
      <section className={a.mission} data-theme="green" data-chapter="Our Mission" data-n="07" aria-labelledby="mission-h">
        <div className={a.missionCard} data-mission>
          <div className={a.missionImg} data-mission-img>
            <Image src={P.greenhouseLeafy} alt="" fill sizes="100vw" />
          </div>
          <div className={a.missionShade} />
          <div className={a.missionIn}>
            <div className={a.wrap}>
              <div className={a.row}>
                <div className={a.side}>
                  <Label>Our Mission</Label>
                </div>
                <div className={a.main}>
                  <h2 id="mission-h" className={a.missionText} data-lines>
                    To fast-track the future of food security by turning the UAE&rsquo;s agricultural challenges into global
                    opportunities for innovation, resilience, and growth.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 08 PRINCIPLES ═══ */}
      <section className={a.sec} data-theme="light" data-chapter="Principles" data-n="08" aria-labelledby="princ-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Principles</Label>
            </div>
            <div className={a.main}>
              <div className={a.princ}>
                <h2 id="princ-h" className={a.h2} data-lines>
                  The Principles That Guide Us
                </h2>
                <ol>
                  {principles.map((p, i) => (
                    <li key={p.t} data-princ>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      <h3>{p.t}</h3>
                      <p>{p.d}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 09 JOURNEY: horizontal track ═══ */}
      <section className={a.hs} data-hs data-theme="dark" data-chapter="Our Journey" data-n="09" aria-labelledby="journey-h">
        <div className={a.hsStage}>
          <div className={a.wrap}>
            <div className={a.row}>
              <div className={a.side}>
                <Label>2021 — 2030</Label>
              </div>
              <div className={`${a.main} ${a.jHead}`}>
                <h2 id="journey-h" className={a.h2}>
                  Our Journey
                </h2>
                <p className={a.jYear} aria-hidden>
                  <span data-jyear>2021</span>
                </p>
              </div>
            </div>
          </div>
          <ol className={`${a.hsTrack} ${a.jTrack}`} data-hs-track>
            {journey.map((j) => (
              <li key={j.title} className={a.jCard} data-jcard data-when={j.when}>
                <div className={a.hsImg}>
                  <div className={a.hsImgIn} data-hs-img>
                    <Image src={j.src} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
                  </div>
                </div>
                <p className={a.jWhen}>{j.when}</p>
                <h3 className={a.jTitle}>{j.title}</h3>
                <p className={a.jText}>{j.text}</p>
              </li>
            ))}
          </ol>
          <div className={a.wrap}>
            <div className={a.hsBar} aria-hidden>
              <i data-hs-bar />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10 LOOKING AHEAD + close ═══ */}
      <section className={a.sec} data-theme="light" data-chapter="Looking Ahead" data-n="10" aria-labelledby="ahead-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Looking Ahead</Label>
            </div>
            <div className={a.main}>
              <div className={a.ahead}>
                <h2 id="ahead-h" className={a.h2} data-lines>
                  The next chapter of Innovation Oasis is larger than any single facility.
                </h2>
                <div>
                  <p className={a.body} data-up>
                    Our ambition is to become a platform that not only advances technology but helps shape the future of food security
                    itself.
                  </p>
                  <ul className={a.where}>
                    <li data-up>A place where research informs policy.</li>
                    <li data-up>Where innovation informs investment.</li>
                    <li data-up>Where today&rsquo;s challenges become tomorrow&rsquo;s exportable solutions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={a.cta} data-cta>
          <div className={a.ctaImg} data-cta-img>
            <Image src={P.aerialCampus} alt="" fill sizes="100vw" />
          </div>
          <div className={a.ctaShade} />
          <div className={a.ctaIn}>
            <p className={a.ctaText} data-lines>
              Because building a resilient food future requires more than innovation. It requires an ecosystem. And that ecosystem is
              growing here.
            </p>
            <div className={a.ctaBtns} data-up>
              <Btn href="#" v="light" ext>
                Virtual Tour
              </Btn>
              <Btn href={footerLinks.contact}>Contact us</Btn>
            </div>
            <ul className={a.ctaLinks} data-up>
              <li>
                <a href={`${BASE}/about/team`}>Team &amp; CEO Message →</a>
              </li>
              <li>
                <a href={`${BASE}/research`}>Research &amp; Science →</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
