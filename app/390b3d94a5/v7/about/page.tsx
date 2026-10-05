import type { Metadata } from "next";
import Image from "next/image";
import a from "./about.module.css";
import { Motion } from "./_c/Motion";
import { Platforms } from "./_c/Platforms";
import { Journey } from "./_c/Journey";
import { Btn, Label } from "../_c/Brand";
import { P, photo } from "../_lib/photo";
import { BASE, footerLinks } from "../_lib/site";

export const metadata: Metadata = {
  title: "About Innovation Oasis",
  description: "The future of food security is being built in the desert.",
};

/*
 * About Innovation Oasis — v7. Simple, clean, professional.
 * Every section is the same two columns: a small label on the left (cols 1–3), the content on the
 * right (cols 4–12). Copy: content/about.md, verbatim, in the client's order.
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

const place = [
  "A place where startups can test technologies in real-world conditions.",
  "Where researchers and farmers collaborate side-by-side.",
  "Where commercial partners help scale solutions.",
  "And where the UAE’s toughest growing conditions become the ultimate proving ground for the future of food.",
];

const pressures = [
  "Heat",
  "Water scarcity",
  "Salinity",
  "Resource constraints",
  "Operational complexity",
];

const together: { t: string; icon: string }[] = [
  {
    t: "World-class research facilities",
    icon: "M9 3v6l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3M7 3h10M7 15h10",
  },
  { t: "Commercial testbeds", icon: "M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6" },
  {
    t: "Venture development programs",
    icon: "M4 20l5-5M14 4c3 0 6 3 6 6l-7 7-6-6 7-7zM15 9h.01",
  },
  { t: "Industry partnerships", icon: "M3 12l4-4 5 2 5-2 4 4-4 4-5-2-5 2z" },
  {
    t: "Farmer networks",
    icon: "M12 21V9m0 0c0-3 2-5 6-6 0 4-2 6-6 6zm0 4c0-3-2-5-6-6 0 4 2 6 6 6z",
  },
  {
    t: "Academic collaborators",
    icon: "M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5",
  },
  { t: "Investment pathways", icon: "M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3" },
  {
    t: "Food security stakeholders",
    icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  },
];
const flow = [
  "Concept",
  "Validation",
  "Adoption",
  "Local impact",
  "Global relevance",
];

const principles = [
  {
    t: "We Build for the Real World",
    d: "Innovation only matters when it can survive outside the lab.",
  },
  {
    t: "We Connect Ecosystems",
    d: "Researchers, farmers, startups, industry, and government all have a role to play.",
  },
  {
    t: "We Learn by Doing",
    d: "Progress comes through action, adaptation, and continuous improvement.",
  },
  {
    t: "We Think Beyond Borders",
    d: "The UAE is our testbed. The world is our opportunity.",
  },
  {
    t: "We Build Resilience",
    d: "Not just for today’s food systems, but for tomorrow’s.",
  },
];

/** Rounded image with a parallax layer inside (Motion drives [data-img] / [data-px]). */
function Img({
  src,
  alt = "",
  sizes,
  className,
  preload,
  tag,
}: {
  src: string;
  alt?: string;
  sizes: string;
  className?: string;
  preload?: boolean;
  tag?: string;
}) {
  return (
    <figure className={`${a.img} ${className ?? ""}`} data-img>
      <div className={a.imgIn} data-px>
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} />
      </div>
      {tag ? <figcaption className={a.tag}>{tag}</figcaption> : null}
    </figure>
  );
}

export default function About() {
  return (
    <div className={a.page}>
      <Motion />

      {/* ═══ HERO ═══ */}
      <section className={a.hero} aria-labelledby="hero-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>About Innovation Oasis</Label>
            </div>
            <div className={a.main}>
              <p className={a.kicker} data-up>
                Accelerating the Future of Food Security
              </p>
              <h1 id="hero-h" className={a.h1} data-lines>
                The future of food security is being built in the desert.
              </h1>
              <div className={a.heroCtas} data-up>
                <Btn href="#story">Our story</Btn>
                <Btn href={footerLinks.contact} v="ghost">
                  Contact us
                </Btn>
              </div>
            </div>
          </div>
        </div>
        <div className={a.heroMedia}>
          <Img
            src={P.aerialWide}
            alt="Innovation Oasis from the air: greenhouses and trial fields beside Al Foah Farm"
            sizes="100vw"
            preload
            className={a.heroImg}
            tag="Al Foah, Al Ain"
          />
        </div>
        <div className={a.wrap}>
          <ul className={a.glance} aria-label="At a glance">
            {glance.map((g) => (
              <li key={g.n} data-up>
                <b>{g.n}</b>
                <span>{g.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ INTRO (the one dark band) ═══ */}
      <section className={a.dark} aria-label="Introduction">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label dark>Introduction</Label>
            </div>
            <div className={a.main}>
              <p className={a.statement} data-words>
                Innovation Oasis was created on a simple belief:{" "}
                <em>
                  the conditions challenging agriculture in the UAE today will
                  define agriculture for much of the world tomorrow.
                </em>
              </p>
              <div className={a.introCols}>
                <p className={a.body} data-up>
                  In one of the planet&rsquo;s most demanding growing
                  environments, we bring together researchers, farmers,
                  startups, industry leaders, investors, and policymakers to
                  develop, validate, and scale the technologies needed for a
                  more resilient food system.
                </p>
                <p className={a.lead} data-up>
                  If solutions can succeed here, they can succeed almost
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className={a.sec} id="story" aria-labelledby="story-h">
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

          <div className={a.split}>
            <div className={a.splitText}>
              <p className={a.lead} data-up>
                Innovation Oasis did not begin with a building.
                <br />
                It began with a question.
              </p>
              <p className={a.body} data-up>
                When Silal was established in 2020, food security and
                agricultural development were at the heart of its mission. Yet
                one important piece of the puzzle was missing: a place where
                research, technology, entrepreneurship, and real-world farming
                could come together to solve practical challenges facing
                agriculture.
              </p>
            </div>
            <Img
              src={P.fieldSpecialist}
              sizes="(max-width: 900px) 100vw, 45vw"
              className={a.splitImg}
              tag="2020"
            />
          </div>

          <div className={`${a.split} ${a.splitRev}`}>
            <div className={a.splitText}>
              <p className={a.body} data-up>
                When Dr. Shamal Mohammed joined Silal in 2021, he spent months
                meeting farmers, universities, government entities, researchers,
                and technology companies across the UAE. A pattern quickly
                emerged.
              </p>
              <ul className={a.pattern}>
                <li data-up>Research existed.</li>
                <li data-up>Commercial technologies existed.</li>
                <li data-up>Farmers faced urgent challenges.</li>
              </ul>
              <p className={a.body} data-up>
                But there was no ecosystem connecting them together.
              </p>
            </div>
            <Img
              src={P.tour}
              sizes="(max-width: 900px) 100vw, 45vw"
              className={a.splitImg}
              tag="2021"
            />
          </div>

          <div className={a.row}>
            <div className={a.main}>
              <p className={a.pull} data-lines>
                The world had innovation.{" "}
                <span>What it lacked was implementation.</span>
              </p>
            </div>
          </div>

          <div className={a.split}>
            <div className={a.splitText}>
              <p className={a.body} data-up>
                The answer was found in an unexpected place: a 34-hectare parcel
                of undeveloped land on the opposite side of Al Foah Farm,
                largely overlooked and unused. Where others saw empty desert,
                the team saw an opportunity to create a living ecosystem
                designed around collaboration, experimentation, and impact.
              </p>
              <p className={a.body} data-up>
                What followed was not the creation of another research center.
              </p>
              <p className={a.lead} data-up>
                It was the creation of Innovation Oasis.
              </p>
            </div>
            <Img
              src={P.aerialPlots}
              sizes="(max-width: 900px) 100vw, 45vw"
              className={a.splitImg}
              tag="34 hectares"
            />
          </div>

          <ol className={a.place}>
            {place.map((p, i) => (
              <li key={p} data-up>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ TODAY ═══ */}
      <section className={`${a.sec} ${a.paper}`} aria-labelledby="today-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Today</Label>
            </div>
            <div className={a.main}>
              <h2 id="today-h" className={a.h2} data-lines>
                Today, Innovation Oasis serves as Silal&rsquo;s R&amp;D and
                venture engine, helping bridge the gap between breakthrough
                ideas and meaningful impact across agriculture and food systems.
              </h2>
              <Platforms />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR PEOPLE ═══ */}
      <section className={a.sec} id="people" aria-labelledby="people-h">
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
              <p className={`${a.body} ${a.bodyWide}`} data-up>
                Dr. Mohammed joined Silal in 2021 to build its innovation and
                R&amp;D function from the ground up, bringing more than two
                decades of experience running agricultural research facilities
                in the UK. It was the months he spent meeting farmers,
                universities, government entities and technology companies
                across the UAE — described above — that surfaced the gap
                Innovation Oasis was built to close, and led him to the
                overlooked plot of land beside Al Foah Farm where it now stands.
              </p>
            </div>
          </div>

          <figure className={a.ceo} data-up>
            <Img
              src={P.ceo}
              alt="Dr. Shamal Mohammed, CEO of Innovation Oasis"
              sizes="(max-width: 900px) 100vw, 40vw"
              className={a.ceoImg}
            />
            <div className={a.ceoPanel}>
              <Label dark>Leadership</Label>
              <blockquote>
                <p>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
              </blockquote>
              <figcaption>
                <b>Dr. Shamal Mohammed</b>
                <span>CEO, Innovation Oasis</span>
              </figcaption>
            </div>
          </figure>

          <div className={`${a.row} ${a.teamHead}`}>
            <div className={a.side}>
              <Label>Our Team</Label>
            </div>
            <div className={a.main}>
              <p className={a.lead} data-up>
                Behind every laboratory, trial and partnership at Innovation
                Oasis is a small, hands-on team that has grown alongside the
                ecosystem itself
              </p>
              <p className={`${a.body} ${a.bodyWide}`} data-up>
                Coming from different disciplines and different corners of the
                world, the team shares one mandate: build for the real world,
                learn by doing, and prove that solutions tested here can succeed
                almost anywhere.
              </p>
            </div>
          </div>
          <ul className={a.team}>
            {team.map((t) => (
              <li key={t.name} className={a.member} data-up>
                <Img
                  src={t.src}
                  alt={t.name}
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className={a.memberImg}
                />
                <p className={a.memberBar}>
                  <b>{t.name}</b>
                  <span>Innovation Oasis</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ WHY HERE? ═══ */}
      <section
        className={`${a.sec} ${a.paper}`}
        id="why-here"
        aria-labelledby="why-h"
      >
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Why Here?</Label>
            </div>
            <div className={a.main}>
              <p className={a.kicker} data-up>
                The Arid Advantage
              </p>
              <h2 id="why-h" className={a.h2} data-lines>
                <span className={a.mute}>
                  Many see the desert as a constraint.
                </span>{" "}
                We see it as the world&rsquo;s most important testbed.
              </h2>
            </div>
          </div>
          <div className={a.split}>
            <div className={a.splitText}>
              <p className={a.body} data-up>
                Over the coming decades, climate volatility, water scarcity,
                land degradation, and rising temperatures will reshape
                agriculture around the world. Conditions once considered unique
                to the UAE are becoming increasingly common elsewhere.
              </p>
              <p className={a.body} data-up>
                That creates a unique opportunity. Innovation Oasis exists to
                help innovators validate solutions under the pressures that
                define tomorrow&rsquo;s food system today.
              </p>
            </div>
            <Img
              src={P.droneTop}
              sizes="(max-width: 900px) 100vw, 45vw"
              className={a.splitImg}
            />
          </div>
          <ul className={a.cards}>
            {pressures.map((p, i) => (
              <li key={p} className={a.card} data-up>
                <i className={a.plus} aria-hidden />
                <small>{String(i + 1).padStart(2, "0")}</small>
                <p>{p}</p>
              </li>
            ))}
            <li className={`${a.card} ${a.cardAccent}`} data-up>
              <i className={a.plus} aria-hidden />
              <p>
                These are not barriers to innovation. They are the benchmark.
              </p>
            </li>
          </ul>
          <div className={a.row}>
            <div className={a.main}>
              <blockquote className={a.quote} data-up>
                <p>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES IO DIFFERENT ═══ */}
      <section className={a.sec} aria-labelledby="diff-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>What Makes Innovation Oasis Different?</Label>
            </div>
            <div className={a.main}>
              <h2 id="diff-h" className={a.h2} data-lines>
                More Than a Research Center. More Than an Accelerator.
              </h2>
              <p className={`${a.body} ${a.bodyWide}`} data-up>
                Most innovation ecosystems focus on one part of the journey.
                Innovation Oasis was designed to connect them all. We bring
                together:
              </p>
              <ul className={a.together}>
                {together.map((x) => (
                  <li key={x.t} data-up>
                    <svg viewBox="0 0 24 24" aria-hidden>
                      <path
                        d={x.icon}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>{x.t}</p>
                  </li>
                ))}
              </ul>
              <p className={`${a.body} ${a.bodyWide}`} data-up>
                Under one ecosystem. This integrated model allows promising
                ideas to move from concept to validation, from validation to
                adoption, and from local impact to global relevance.
              </p>
              <ol
                className={a.flow}
                data-flow
                aria-label="From concept to global relevance"
              >
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

      {/* ═══ MISSION ═══ */}
      <section className={a.band} aria-labelledby="mission-h">
        <div className={a.bandCard}>
          <div className={a.bandImg} data-band-img>
            <Image src={P.greenhouseLeafy} alt="" fill sizes="100vw" />
          </div>
          <div className={a.bandShade} data-green />
          <div className={a.bandIn}>
            <Label dark>Our Mission</Label>
            <h2 id="mission-h" className={a.bandText} data-lines>
              To fast-track the future of food security by turning the
              UAE&rsquo;s agricultural challenges into global opportunities for
              innovation, resilience, and growth.
            </h2>
          </div>
        </div>
      </section>

      {/* ═══ PRINCIPLES ═══ */}
      <section className={a.sec} aria-labelledby="princ-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Principles</Label>
            </div>
            <div className={a.main}>
              <h2 id="princ-h" className={a.h2} data-lines>
                The Principles That Guide Us
              </h2>
              <ol className={a.princ}>
                {principles.map((p, i) => (
                  <li key={p.t} data-up>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    <h3>{p.t}</h3>
                    <p>{p.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ JOURNEY ═══ */}
      <Journey />

      {/* ═══ LOOKING AHEAD ═══ */}
      <section className={a.sec} aria-labelledby="ahead-h">
        <div className={a.wrap}>
          <div className={a.row}>
            <div className={a.side}>
              <Label>Looking Ahead</Label>
            </div>
            <div className={a.main}>
              <div className={a.ahead}>
                <h2 id="ahead-h" className={a.h2} data-lines>
                  The next chapter of Innovation Oasis is larger than any single
                  facility.
                </h2>
                <div>
                  <p className={a.body} data-up>
                    Our ambition is to become a platform that not only advances
                    technology but helps shape the future of food security
                    itself.
                  </p>
                  <ul className={a.where}>
                    <li data-up>A place where research informs policy.</li>
                    <li data-up>Where innovation informs investment.</li>
                    <li data-up>
                      Where today&rsquo;s challenges become tomorrow&rsquo;s
                      exportable solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={a.cta}>
          <div className={a.ctaCard}>
            <div className={a.ctaImg} data-band-img>
              <Image src={P.aerialCampus} alt="" fill sizes="100vw" />
            </div>
            <div className={a.ctaShade} />
            <div className={a.ctaIn}>
              <p className={a.ctaText} data-lines>
                Because building a resilient food future requires more than
                innovation. It requires an ecosystem. And that ecosystem is
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
        </div>
      </section>
    </div>
  );
}
