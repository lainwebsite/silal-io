import Image from "next/image";
import Link from "next/link";
import a from "./_about/about.module.css";
import { Mark } from "./_components/Brand";
import { AboutMotion } from "./_about/_components/AboutMotion";
import { ChapterIndex } from "./_about/_components/ChapterIndex";
import { Journey } from "./_about/_components/Journey";
import { LocalTime } from "./_about/_components/LocalTime";
import { Principles } from "./_about/_components/Principles";
import { P, photo } from "./_lib/photo";
import { SOON } from "./_lib/site";

// Copy: content/about.md, client-supplied, verbatim. Section order follows the client PDF.

const TEAM = "iO Team Headshot & Bios";
// Picks from content/team.md. Label = folder name. Roles pending from client.
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
  { line: "Research existed.", label: "Research", src: P.microscope, alt: "A scientist at a microscope in an Innovation Oasis laboratory" },
  {
    line: "Commercial technologies existed.",
    label: "Technology",
    src: photo("Archive", "Screenshot 2026-09-24 163857.jpg"),
    alt: "An agricultural drone in flight",
  },
  { line: "Farmers faced urgent challenges.", label: "Farming", src: P.greenhouseLeafy, alt: "Rows of leafy crops under a greenhouse roof" },
];

const place = [
  {
    text: "A place where startups can test technologies in real-world conditions.",
    src: P.soilProbe,
    alt: "A soil sensor probe being tested at the base of a tree",
    cap: "Field test, soil sensing",
  },
  {
    text: "Where researchers and farmers collaborate side-by-side.",
    src: photo("General MarCom Photos (1)", "PA__1576.jpg"),
    alt: "A researcher and a visitor inspecting plants in a growth chamber",
    cap: "Growth chamber, side-by-side",
  },
  {
    text: "Where commercial partners help scale solutions.",
    src: P.pitchRoom,
    alt: "A founder pitching to an audience at the FoodTech Challenge",
    cap: "FoodTech Challenge, final pitches",
  },
  {
    text: "And where the UAE’s toughest growing conditions become the ultimate proving ground for the future of food.",
    src: P.greenhouseRoofs,
    alt: "Greenhouse rooftops stretching to the desert horizon",
    cap: "Greenhouses on the desert edge",
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

function Chapter({ n, label, title, tone }: { n: string; label: string; title?: string; tone?: "dark" }) {
  return (
    <header className={a.chapter} data-tone={tone}>
      <p className={a.chapterRow} data-rule>
        <span className={a.chapterNum}>{n}</span>
        <span>{label}</span>
        <span className={a.chapterOf}>/ 08</span>
      </p>
      {title && (
        <h2 className={a.chapterTitle} data-split>
          {title}
        </h2>
      )}
    </header>
  );
}

function Figure({
  src,
  alt,
  n,
  caption,
  className,
  sizes = "(max-width: 900px) 100vw, 50vw",
  preload,
}: {
  src: string;
  alt: string;
  n: string;
  caption: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <figure className={`${a.figure} ${className ?? ""}`}>
      <div className={a.frame} data-clip>
        <div className={a.frameInner} data-parallax>
          <Image src={src} alt={alt} fill sizes={sizes} preload={preload} />
        </div>
        <span className={a.corners} aria-hidden />
      </div>
      <figcaption className={a.caption}>
        <span>Fig. {n}</span>
        {caption}
      </figcaption>
    </figure>
  );
}

export default function About() {
  return (
    <div className={a.about}>
      <AboutMotion />
      <ChapterIndex />

      {/* ───────── Hero ───────── */}
      <section className={a.hero} data-hero="light" aria-labelledby="ab-hero">
        <div className={a.heroTop}>
          <p className={a.kicker} data-fade>
            About Innovation Oasis
            <span className={a.kickerSep} aria-hidden />
            Accelerating the Future of Food Security
          </p>
          <h1 id="ab-hero" className={a.heroTitle} data-hero-title>
            The future of food security is being built in the <em>desert.</em>
          </h1>
        </div>
        <div className={a.heroMedia} data-hero-media>
          <div className={a.heroMediaInner} data-hero-img>
            <Image
              src={P.aerialWide}
              alt="Aerial view of Innovation Oasis: trial fields and greenhouses in the desert beside Al Foah Farm, Al Ain"
              fill
              preload
              sizes="100vw"
            />
          </div>
          <div className={a.heroMeta} data-fade>
            <span>Al Foah, Al Ain</span>
            <span>United Arab Emirates</span>
            <LocalTime />
          </div>
          <Mark className={a.heroMark} alt="" />
        </div>
        <div className={a.heroIntro}>
          <p className={a.lead} data-split>
            Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE today will
            define agriculture for much of the world tomorrow.
          </p>
          <div className={a.heroCols}>
            <p data-fade>
              In one of the planet&rsquo;s most demanding growing environments, we bring together researchers, farmers,
              startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies
              needed for a more resilient food system.
            </p>
            <p className={a.heroPunch} data-fade>
              If solutions can succeed here, they can succeed almost anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── 01 Our Story ───────── */}
      <section id="story" className={a.story} data-chapter="01" data-chapter-label="Our Story">
        <div className={a.wrap}>
          <Chapter n="01" label="Our Story" title="An Oasis Built for What’s Next" />

          <div className={a.question}>
            <p className={a.questionText} data-scrub-words>
              Innovation Oasis did not begin with a building.
            </p>
            <p className={`${a.questionText} ${a.questionStrong}`} data-scrub-words>
              It began with a question.
            </p>
          </div>

          <div className={a.storyGrid}>
            <div className={a.storyCopy}>
              <p className={a.yearTag} data-fade>
                <b>2020</b> Silal is established
              </p>
              <p data-fade>
                When Silal was established in 2020, food security and agricultural development were at the heart of its
                mission. Yet one important piece of the puzzle was missing: a place where research, technology,
                entrepreneurship, and real-world farming could come together to solve practical challenges facing
                agriculture.
              </p>
              <p className={a.yearTag} data-fade>
                <b>2021</b> Dr. Shamal Mohammed joins Silal
              </p>
              <p data-fade>
                When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government
                entities, researchers, and technology companies across the UAE. A pattern quickly emerged.
              </p>
            </div>
            <Figure
              src={P.tour}
              alt="Visitors and researchers touring a tomato greenhouse at Innovation Oasis"
              n="01"
              caption="Meeting growers, partners and researchers in the greenhouse"
              className={a.storyFig}
            />
          </div>
        </div>

        {/* A pattern: three worlds, not yet connected */}
        <div className={a.pattern} data-pattern>
          <div className={a.wrap}>
            <ol className={a.patternRow}>
              {pattern.map((p, i) => (
                <li key={p.label} className={a.patternItem}>
                  <div className={a.patternImg} data-pattern-img>
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 30vw" />
                  </div>
                  <p className={a.patternLabel}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {p.label}
                  </p>
                  <p className={a.patternLine}>{p.line}</p>
                  {i < pattern.length - 1 && (
                    <span className={a.patternGap} aria-hidden>
                      <i data-gap-l />
                      <b>×</b>
                      <i data-gap-r />
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p className={a.patternClose} data-split>
              But there was no ecosystem connecting them together.
            </p>
          </div>
        </div>

        {/* Innovation vs implementation */}
        <div className={a.lack} data-lack>
          <div className={a.wrap}>
            <p className={a.lackLine} data-lack-a>
              The world had <span>innovation.</span>
            </p>
            <p className={a.lackLine} data-lack-b>
              What it lacked was <span>implementation.</span>
            </p>
          </div>
        </div>

        {/* The land */}
        <div className={a.land}>
          <div className={a.wrap}>
            <p className={a.landIntro} data-split>
              The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side of
              Al Foah Farm, largely overlooked and unused.
            </p>
          </div>
          <div className={a.landMedia} data-land>
            <div className={a.landImg} data-land-img>
              <Image
                src={P.aerialPlots}
                alt="Aerial view of the trial plots and greenhouses at Innovation Oasis"
                fill
                sizes="100vw"
              />
            </div>
            <div className={a.landMeasure} aria-hidden>
              <span className={a.landBox} data-land-box />
              <span className={a.landTick} />
            </div>
            <div className={a.landStat}>
              <p className={a.landNum}>
                <span data-count="34">34</span>
                <small>ha</small>
              </p>
              <p>Opposite Al Foah Farm, Al Ain</p>
            </div>
          </div>
          <div className={a.wrap}>
            <div className={a.landCopy}>
              <p data-fade>
                Where others saw empty desert, the team saw an opportunity to create a living ecosystem designed around
                collaboration, experimentation, and impact.
              </p>
              <p className={a.caption} data-fade>
                <span>Fig. 02</span>Trial plots and greenhouses on the once-unused parcel
              </p>
            </div>
          </div>
        </div>

        {/* Creation */}
        <div className={a.creation}>
          <div className={a.wrap}>
            <div className={a.creationText}>
              <p className={a.creationNot} data-split>
                What followed was not the creation of another research center.
              </p>
              <p className={a.creationIs} data-creation>
                It was the creation of <span>Innovation Oasis.</span>
              </p>
            </div>
          </div>
          <div className={a.creationMedia} data-expand>
            <div className={a.creationImg} data-expand-img>
              <Image src={P.canopy} alt="The Innovation Oasis building and its canopy entrance" fill sizes="100vw" />
            </div>
            <Mark className={a.creationMark} alt="" />
          </div>
        </div>

        {/* A place where… */}
        <div className={a.place} data-place>
          <div className={a.wrap}>
            <div className={a.placeGrid}>
              <div className={a.placeStage}>
                <div className={a.placeFrames}>
                  {place.map((p, i) => (
                    <div key={p.cap} className={a.placeFrame} data-place-frame={i}>
                      <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                    </div>
                  ))}
                  <span className={a.corners} aria-hidden />
                </div>
                <p className={a.caption}>
                  <span>Fig. 03</span>
                  <span className={a.placeCaps}>
                    {place.map((p, i) => (
                      <i key={p.cap} data-place-cap={i}>
                        {p.cap}
                      </i>
                    ))}
                  </span>
                </p>
              </div>
              <ol className={a.placeList}>
                {place.map((p, i) => (
                  <li key={p.cap} data-place-item={i}>
                    <span className={a.placeNum}>{String(i + 1).padStart(2, "0")}</span>
                    <p>{p.text}</p>
                    <div className={a.placeMobileImg}>
                      <Image src={p.src} alt="" fill sizes="100vw" />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Today */}
        <div className={a.today}>
          <div className={a.wrap}>
            <div className={a.todayGrid}>
              <p className={a.todayText} data-split>
                Today, Innovation Oasis serves as Silal&rsquo;s R&amp;D and venture engine, helping bridge the gap between
                breakthrough ideas and meaningful impact across agriculture and food systems.
              </p>
              <Figure
                src={P.atrium}
                alt="The Innovation Oasis atrium with the words Research, Development and Growth in English and Arabic"
                n="04"
                caption="Research · Development · Growth, the atrium"
                className={a.todayFig}
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 02 Our People ───────── */}
      <section id="people" className={a.people} data-chapter="02" data-chapter-label="Our People">
        <div className={a.wrap}>
          <Chapter n="02" label="Our People" title="Leadership" />
          <div className={a.leader}>
            <figure className={a.leaderFig}>
              <div className={a.frame} data-clip>
                <div className={a.frameInner} data-parallax>
                  <Image
                    src={P.ceo}
                    alt="Dr. Shamal Mohammed, CEO of Innovation Oasis"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                  />
                </div>
                <span className={a.corners} aria-hidden />
              </div>
              <figcaption className={a.caption}>
                <span>Fig. 05</span>Dr. Shamal Mohammed, CEO
              </figcaption>
            </figure>
            <div className={a.leaderCopy}>
              <p className={a.leaderLead} data-split>
                Innovation Oasis is led by Dr. Shamal Mohammed, CEO.
              </p>
              <p data-fade>
                Dr. Mohammed joined Silal in 2021 to build its innovation and R&amp;D function from the ground up, bringing
                more than two decades of experience running agricultural research facilities in the UK. It was the months
                he spent meeting farmers, universities, government entities and technology companies across the UAE —
                described above — that surfaced the gap Innovation Oasis was built to close, and led him to the overlooked
                plot of land beside Al Foah Farm where it now stands.
              </p>
              <dl className={a.leaderFacts} data-fade>
                <div>
                  <dt>Joined Silal</dt>
                  <dd>2021</dd>
                </div>
                <div>
                  <dt>Research leadership</dt>
                  <dd>20+ yrs</dd>
                </div>
              </dl>
            </div>
          </div>

          <blockquote className={a.quote} data-quote>
            <p data-split>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
            <footer data-fade>Dr. Shamal Mohammed, CEO, Innovation Oasis</footer>
          </blockquote>

          <div className={a.teamHead}>
            <h3 className={a.subTitle} data-split>
              Our Team
            </h3>
            <div className={a.teamIntro}>
              <p data-fade>
                Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown
                alongside the ecosystem itself
              </p>
              <p data-fade>
                Coming from different disciplines and different corners of the world, the team shares one mandate: build
                for the real world, learn by doing, and prove that solutions tested here can succeed almost anywhere.
              </p>
            </div>
          </div>
          <ul className={a.team} data-team>
            {team.map((t, i) => (
              <li key={t.name} className={a.member}>
                <div className={a.memberImg}>
                  <Image src={t.src} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 22vw" />
                </div>
                <p className={a.memberName}>
                  <span>{t.name}</span>
                  <small>{String(i + 1).padStart(2, "0")}</small>
                </p>
              </li>
            ))}
          </ul>
          <Link href={SOON} className={a.arrowLink}>
            Team &amp; CEO Message
          </Link>
        </div>
      </section>

      {/* ───────── 03 Why Here? ───────── */}
      <section id="why-here" className={a.why} data-chapter="03" data-chapter-label="Why Here?">
        <div className={a.wrap}>
          <Chapter n="03" label="Why Here?" title="The Arid Advantage" tone="dark" />
          <div className={a.whyStatement}>
            <p className={a.whyA} data-split>
              Many see the desert as a constraint.
            </p>
            <p className={a.whyB} data-split>
              We see it as the world&rsquo;s most important <em>testbed.</em>
            </p>
          </div>
          <div className={a.whyGrid}>
            <div className={a.whyCopy}>
              <p data-fade>
                Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will
                reshape agriculture around the world. Conditions once considered unique to the UAE are becoming increasingly
                common elsewhere.
              </p>
              <p data-fade>
                That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the
                pressures that define tomorrow&rsquo;s food system today.
              </p>
            </div>
            <ol className={a.bench} data-bench>
              {conditions.map((c, i) => (
                <li key={c}>
                  <span className={a.benchNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={a.benchName}>{c}</span>
                  <span className={a.benchTag}>Benchmark</span>
                  <i className={a.benchRule} data-bench-rule aria-hidden />
                </li>
              ))}
            </ol>
          </div>
          <p className={a.whyClose} data-split>
            These are not barriers to innovation. They are the benchmark.
          </p>
          <blockquote className={a.whyQuote}>
            <p data-split>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
          </blockquote>
        </div>
      </section>

      {/* ───────── 04 What Makes IO Different? ───────── */}
      <section id="different" className={a.diff} data-chapter="04" data-chapter-label="What Makes Us Different">
        <div className={a.wrap}>
          <Chapter n="04" label="What Makes Innovation Oasis Different?" />
          <h2 className={a.diffTitle} data-split>
            More Than a Research Center. <span>More Than an Accelerator.</span>
          </h2>
          <div className={a.diffGrid}>
            <div className={a.diffCopy}>
              <p data-fade>
                Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them
                all. We bring together:
              </p>
              <ul className={a.diffList}>
                {together.map((t, i) => (
                  <li key={t} data-fade>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className={a.ring} data-ring aria-hidden>
              <svg viewBox="0 0 600 600" className={a.ringSvg}>
                <circle cx="300" cy="300" r="230" className={a.ringOrbit} data-ring-orbit />
                {together.map((t, i) => {
                  const ang = (i / together.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 300 + Math.cos(ang) * 230;
                  const y = 300 + Math.sin(ang) * 230;
                  return (
                    <g key={t}>
                      <line x1={x} y1={y} x2="300" y2="300" className={a.ringSpoke} data-ring-spoke />
                      <circle cx={x} cy={y} r="6" className={a.ringNode} data-ring-node />
                    </g>
                  );
                })}
                <circle cx="300" cy="300" r="14" className={a.ringCore} data-ring-core />
                <circle cx="300" cy="300" r="34" className={a.ringHalo} data-ring-core />
              </svg>
              {together.map((t, i) => {
                const ang = (i / together.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(ang) * 47;
                const y = 50 + Math.sin(ang) * 47;
                return (
                  <span
                    key={t}
                    className={a.ringLabel}
                    data-ring-label
                    data-side={Math.cos(ang) > 0.2 ? "r" : Math.cos(ang) < -0.2 ? "l" : "c"}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                );
              })}
              <p className={a.ringCenter} data-ring-center>
                Under one
                <br />
                ecosystem.
              </p>
            </div>
          </div>
          <div className={a.flow}>
            <p className={a.flowIntro} data-fade>
              Under one ecosystem. This integrated model allows promising ideas to move
            </p>
            <ol className={a.flowSteps} data-flow>
              <li>
                <span>from</span> concept <i aria-hidden>→</i>
                <span className={a.srOnly}> to </span> validation
              </li>
              <li>
                <span>from</span> validation <i aria-hidden>→</i>
                <span className={a.srOnly}> to </span> adoption
              </li>
              <li>
                <span>from</span> local impact <i aria-hidden>→</i>
                <span className={a.srOnly}> to </span> <em>global relevance</em>
              </li>
            </ol>
            <p className={a.flowClose} data-split>
              Because food security cannot be solved in silos.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── 05 Our Mission ───────── */}
      <section id="mission" className={a.mission} data-chapter="05" data-chapter-label="Our Mission">
        <div className={a.missionBg} data-mission-bg>
          <Image src={P.blueberry} alt="" fill sizes="100vw" />
        </div>
        <div className={a.wrap}>
          <Chapter n="05" label="Our Mission" tone="dark" />
          <p className={a.missionText} data-scrub-words>
            To fast-track the future of food security by turning the UAE&rsquo;s agricultural challenges into global
            opportunities for innovation, resilience, and growth.
          </p>
        </div>
      </section>

      {/* ───────── 06 Principles ───────── */}
      <section id="principles" className={a.principles} data-chapter="06" data-chapter-label="Principles">
        <div className={a.wrap}>
          <Chapter n="06" label="Principles" title="The Principles That Guide Us" />
          <Principles />
        </div>
      </section>

      {/* ───────── 07 Our Journey ───────── */}
      <section id="journey" className={a.journey} data-chapter="07" data-chapter-label="Our Journey">
        <div className={a.wrap}>
          <Chapter n="07" label="Our Journey" />
        </div>
        <Journey />
      </section>

      {/* ───────── 08 Looking Ahead ───────── */}
      <section id="ahead" className={a.ahead} data-chapter="08" data-chapter-label="Looking Ahead">
        <div className={a.wrap}>
          <Chapter n="08" label="Looking Ahead" />
          <p className={a.aheadLead} data-split>
            The next chapter of Innovation Oasis is larger than any single facility.
          </p>
          <div className={a.aheadGrid}>
            <p data-fade>
              Our ambition is to become a platform that not only advances technology but helps shape the future of food
              security itself.
            </p>
            <ul className={a.aheadWhere}>
              <li data-fade>A place where research informs policy.</li>
              <li data-fade>Where innovation informs investment.</li>
              <li data-fade>Where today&rsquo;s challenges become tomorrow&rsquo;s exportable solutions.</li>
            </ul>
          </div>
        </div>
        <div className={a.finale} data-finale>
          <div className={a.finaleImg} data-finale-img>
            <Image src={P.greenhouseWide} alt="A greenhouse full of crops at Innovation Oasis" fill sizes="100vw" />
          </div>
          <div className={a.finaleText}>
            <p data-finale-line>Because building a resilient food future requires more than innovation.</p>
            <p data-finale-line>It requires an ecosystem.</p>
            <p data-finale-line className={a.finaleLast}>
              And that ecosystem is growing <em>here.</em>
            </p>
          </div>
          <span className={a.finaleMark} data-finale-mark>
            <Mark alt="" />
          </span>
        </div>
        <div className={a.wrap}>
          <nav className={a.next} aria-label="Continue">
            <Link href={SOON} data-fade>
              <span>Next</span>
              Team &amp; CEO Message
            </Link>
            <Link href={SOON} data-fade>
              <span>Explore</span>
              Research &amp; Science
            </Link>
            <Link href={SOON} data-fade>
              <span>Talk to us</span>
              Contact
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
