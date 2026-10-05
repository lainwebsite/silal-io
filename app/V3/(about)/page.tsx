import Image from "next/image";
import a from "./_about/about.module.css";
import { Motion } from "./_about/_c/Motion";
import { Hero } from "./_about/_c/Hero";
import { Site3D } from "./_about/_c/Site3D";
import { Platforms } from "./_about/_c/Platforms";
import { WhyHere } from "./_about/_c/WhyHere";
import { Go, Label } from "./_c/Brand";
import { P, photo } from "./_lib/photo";
import { SOON } from "./_lib/site";

/*
 * About Innovation Oasis — v6.
 * One system for every section (see ../shell.module.css): two type weights, one label, one grid,
 * one easing. Copy: content/about.md, verbatim, in the client's order.
 * Chapters: 01 Our Story (story · the site · today) · 02 Our People · 03 Why Here? · 04 Different ·
 * 05 Mission · 06 Principles · 07 Journey · 08 Looking Ahead.
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
  { when: "Late 2021", title: "An Opportunity in the Desert", src: P.droneSky, text: "An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born." },
  { when: "2022", title: "Building the Blueprint", src: P.labWide, text: "A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation." },
  { when: "2022", title: "First Innovation Partners Arrive", src: P.hydroTomato, text: "Early collaborations begin with pioneering agritech companies, demonstrating a new model where innovators can validate technologies directly within the UAE’s agricultural environment." },
  { when: "2023", title: "From Vision to Reality", src: P.greenhouseWide, text: "Construction, equipment installation, and ecosystem activation advance rapidly. Research capabilities, specialized laboratories, greenhouse infrastructure, and field-testing assets come online." },
  { when: "2024", title: "Official Inauguration", src: P.inaugurationCeremony, text: "Innovation Oasis officially opens as a state-of-the-art center for agricultural research, innovation, validation, and commercialization. Global partners begin using the facility as a launchpad for collaboration and growth." },
  { when: "2025", title: "Building the Ecosystem", src: P.pitchWinners, text: "The focus expands from infrastructure to people. Research teams grow, partnerships mature, venture programs launch, and Innovation Oasis strengthens its role as a connector across the regional and global agrifood ecosystem." },
  { when: "2030 Vision", title: "Global Leadership in Desert Agriculture", src: P.aerialCampus, text: "Innovation Oasis aims to become the global reference point for arid-climate agriculture, food system resilience, and agritech deployment, helping shape research, investment, commercialization, and policy for the future of food security." },
];

function Img({ src, alt = "", sizes, className, priority }: { src: string; alt?: string; sizes: string; className?: string; priority?: boolean }) {
  // every image card: rounded frame + inner parallax layer (Motion drives [data-px])
  return (
    <div className={`${a.img} ${className ?? ""}`} data-wipe>
      <div className={a.imgIn} data-px>
        <Image src={src} alt={alt} fill sizes={sizes} preload={priority} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className={a.page}>
      <Motion />

      {/* ═══ HERO → AT A GLANCE (one continuous scene) ═══ */}
      <Hero />

      {/* ═══ INTRO ═══ */}
      <section className={a.sec}>
        <div className={a.wrap}>
          <Label n="00">About Innovation Oasis</Label>
          <div className={a.introGrid}>
            <p className={a.statement} data-words>
              Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE today will
              define agriculture for much of the world tomorrow.
            </p>
            <div className={a.introSide}>
              <p className={a.body} data-up>
                In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers,
                startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies needed
                for a more resilient food system.
              </p>
              <p className={a.lead} data-up>
                If solutions can succeed here, they can succeed almost anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 01 OUR STORY — one section: sticky photo + beats ═══ */}
      <section className={a.sec} id="story" data-story>
        <div className={a.wrap}>
          <Label n="01">Our Story</Label>
          <h2 className={a.h2} data-lines>
            An Oasis Built for What&rsquo;s Next
          </h2>
          <div className={a.storyGrid}>
            <div className={a.storyMedia}>
              <div className={a.storyFrame}>
                {[P.droneTop, P.tour, P.aerialPlots, P.canopy].map((src, i) => (
                  <div key={src} className={a.storyImg} data-story-img={i}>
                    <div className={a.imgIn} data-px>
                      <Image src={src} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" />
                    </div>
                  </div>
                ))}
              </div>
              <p className={a.storyCap} aria-hidden>
                <span data-story-n>01</span> / 04
              </p>
            </div>
            <div className={a.storyBeats}>
              <div className={a.beat} data-beat>
                <p className={a.lead}>Innovation Oasis did not begin with a building. It began with a question.</p>
                <p className={a.body}>
                  When Silal was established in 2020, food security and agricultural development were at the heart of its
                  mission. Yet one important piece of the puzzle was missing: a place where research, technology,
                  entrepreneurship, and real-world farming could come together to solve practical challenges facing agriculture.
                </p>
              </div>
              <div className={a.beat} data-beat>
                <p className={a.body}>
                  When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government
                  entities, researchers, and technology companies across the UAE. A pattern quickly emerged.
                </p>
                <ul className={a.pattern}>
                  <li>Research existed.</li>
                  <li>Commercial technologies existed.</li>
                  <li>Farmers faced urgent challenges.</li>
                </ul>
                <p className={a.body}>But there was no ecosystem connecting them together.</p>
              </div>
              <div className={a.beat} data-beat>
                <p className={a.lead}>
                  The world had innovation.
                  <br />
                  What it lacked was implementation.
                </p>
                <p className={a.body}>
                  The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side of Al
                  Foah Farm, largely overlooked and unused. Where others saw empty desert, the team saw an opportunity to create a
                  living ecosystem designed around collaboration, experimentation, and impact.
                </p>
              </div>
              <div className={a.beat} data-beat>
                <p className={a.body}>What followed was not the creation of another research center.</p>
                <p className={a.lead}>It was the creation of Innovation Oasis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 01 THE SITE (3D) ═══ */}
      <Site3D />

      {/* ═══ 01 TODAY + platforms ═══ */}
      <section className={a.sec}>
        <div className={a.wrap}>
          <Label n="01">Today</Label>
          <p className={a.statement} data-words>
            Today, Innovation Oasis serves as Silal&rsquo;s R&amp;D and venture engine, helping bridge the gap between
            breakthrough ideas and meaningful impact across agriculture and food systems.
          </p>
          <Platforms />
        </div>
      </section>

      {/* ═══ 02 OUR PEOPLE — leadership in one screen ═══ */}
      <section className={a.leaderSec} id="people">
        <div className={a.wrap}>
          <Label n="02">Our People</Label>
          <div className={a.leader}>
            <Img src={P.ceo} alt="Dr. Shamal Mohammed, CEO of Innovation Oasis" sizes="(max-width: 900px) 100vw, 36vw" className={a.leaderImg} />
            <div className={a.leaderText}>
              <p className={a.kicker}>Leadership</p>
              <h2 className={a.h2} data-lines>
                Innovation Oasis is led by Dr. Shamal Mohammed, CEO.
              </h2>
              <p className={a.body} data-up>
                Dr. Mohammed joined Silal in 2021 to build its innovation and R&amp;D function from the ground up, bringing more
                than two decades of experience running agricultural research facilities in the UK. It was the months he spent
                meeting farmers, universities, government entities and technology companies across the UAE — described above —
                that surfaced the gap Innovation Oasis was built to close, and led him to the overlooked plot of land beside Al
                Foah Farm where it now stands.
              </p>
              <blockquote className={a.quote} data-up>
                <p>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
                <footer>Dr. Shamal Mohammed, CEO, Innovation Oasis</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 02 OUR TEAM — sticky copy, portraits scroll ═══ */}
      <section className={a.teamSec}>
        <div className={a.wrap}>
          <div className={a.teamGrid}>
            <div className={a.teamSide}>
              <div className={a.teamSticky}>
                <p className={a.kicker}>Team</p>
                <h2 className={a.h2} data-lines>
                  Our Team
                </h2>
                <p className={a.body} data-up>
                  Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown
                  alongside the ecosystem itself
                </p>
                <p className={a.body} data-up>
                  Coming from different disciplines and different corners of the world, the team shares one mandate: build for
                  the real world, learn by doing, and prove that solutions tested here can succeed almost anywhere.
                </p>
              </div>
            </div>
            <ul className={a.team}>
              {team.map((t, i) => (
                <li key={t.name} className={a.member} data-up>
                  <Img src={t.src} alt="" sizes="(max-width: 900px) 50vw, 26vw" className={a.memberImg} />
                  <p className={a.memberName}>
                    <span>{t.name}</span>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 03 WHY HERE? — constraint → testbed, then the world map ═══ */}
      <WhyHere />

      {/* ═══ 04 WHAT MAKES IO DIFFERENT ═══ */}
      <section className={a.sec}>
        <div className={a.wrap}>
          <Label n="04">What Makes Innovation Oasis Different?</Label>
          <div className={a.headGrid}>
            <h2 className={a.h2} data-lines>
              More Than a Research Center. More Than an Accelerator.
            </h2>
            <p className={a.body} data-up>
              Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all. We
              bring together:
            </p>
          </div>
          <ul className={a.together}>
            {together.map((x, i) => (
              <li key={x.t} data-up>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d={x.icon} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <p>{x.t}</p>
              </li>
            ))}
          </ul>
          <div className={a.flowBlock}>
            <p className={a.body} data-up>
              Under one ecosystem. This integrated model allows promising ideas to move from concept to validation, from
              validation to adoption, and from local impact to global relevance.
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
      </section>

      {/* ═══ 05 MISSION ═══ */}
      <section className={a.mission} aria-labelledby="mission-h">
        <div className={a.missionCard} data-mission>
          <div className={a.missionImg} data-mission-img>
            <Image src={P.greenhouseLeafy} alt="" fill sizes="100vw" />
          </div>
          <div className={a.missionShade} />
          <div className={a.missionIn}>
            <Label n="05" dark>
              Our Mission
            </Label>
            <h2 id="mission-h" className={a.missionText} data-words>
              To fast-track the future of food security by turning the UAE&rsquo;s agricultural challenges into global
              opportunities for innovation, resilience, and growth.
            </h2>
          </div>
        </div>
      </section>

      {/* ═══ 06 PRINCIPLES ═══ */}
      <section className={a.sec}>
        <div className={a.wrap}>
          <Label n="06">Principles</Label>
          <div className={a.headGrid}>
            <h2 className={a.h2} data-lines>
              The Principles That Guide Us
            </h2>
          </div>
          <ol className={a.princ}>
            {principles.map((p, i) => (
              <li key={p.t} className={a.princRow} data-princ-row>
                <span className={a.princN}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={a.h3}>{p.t}</h3>
                <p className={a.princD}>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ 07 JOURNEY ═══ */}
      <section className={a.journey} data-journey style={{ height: `${journey.length * 75 + 60}vh` }}>
        <div className={a.jStage}>
          <div className={a.wrap}>
            <Label n="07">Our Journey</Label>
            <div className={a.jGrid}>
              <div className={a.jFrame} data-jframe>
                {journey.map((j, i) => (
                  <div key={j.title} className={a.jImg} data-jimg={i}>
                    <Image src={j.src} alt="" fill sizes="(max-width: 900px) 100vw, 44vw" />
                  </div>
                ))}
              </div>
              <div className={a.jSide}>
                <p className={a.jYear} aria-hidden>
                  <span data-jyear>{journey[0].when}</span>
                </p>
                <div className={a.jTexts}>
                  {journey.map((j, i) => (
                    <article key={j.title} className={a.jText} data-jtext={i}>
                      <p className={a.jWhen}>{j.when}</p>
                      <h3 className={a.h3}>{j.title}</h3>
                      <p className={a.body}>{j.text}</p>
                    </article>
                  ))}
                </div>
                <div className={a.jTrack} aria-hidden>
                  <i className={a.jRail} data-jrail />
                  <ol className={a.jTicks}>
                    {journey.map((j, i) => (
                      <li key={j.title} data-jidx={i}>
                        <i />
                        <span>{j.when.replace(" Vision", "")}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 08 LOOKING AHEAD ═══ */}
      <section className={a.sec}>
        <div className={a.wrap}>
          <Label n="08">Looking Ahead</Label>
          <div className={a.headGrid}>
            <h2 className={a.h2} data-lines>
              The next chapter of Innovation Oasis is larger than any single facility.
            </h2>
            <div className={a.aheadText}>
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
          <a href={SOON} className={a.tour} aria-label="Virtual Tour">
            <div className={a.imgIn} data-px>
              <Image src={P.aerialCampus} alt="The Innovation Oasis campus from the air" fill sizes="100vw" />
            </div>
            <span className={a.tourO}>Virtual Tour</span>
          </a>
          <div className={a.closing}>
            <p className={a.statement} data-words>
              Because building a resilient food future requires more than innovation. It requires an ecosystem. And that ecosystem
              is growing here.
            </p>
            <div className={a.closeLinks}>
              <Go href={SOON}>Team &amp; CEO Message</Go>
              <Go href={SOON}>Research &amp; Science</Go>
              <Go href={SOON}>Contact us</Go>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
