/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import s from "../v1.module.css";
import { IoMark, IoWord } from "../_components/Brand";
import { Reveal } from "../_components/Motion";
import { Timeline } from "../_components/Interactive";
import { AridChapter, Ecosystem, Kicker, MissionBand, SectionHead } from "../_components/Sections";
import { ahead, hero, journey, leadership, principles, story, team } from "../_lib/copy";
import { P } from "../_lib/photo";

export const metadata = { title: "About IO — Innovation Oasis · Designer 1 · v1" };

// All copy verbatim from content/about.md.
export default function About() {
  return (
    <>
      {/* HERO */}
      <section className={s.pageHero}>
        <div className={`${s.wrap} ${s.pageHeroGrid}`}>
          <div>
            <Reveal>
              <Kicker>{hero.kicker}</Kicker>
            </Reveal>
            <Reveal delay={1}>
              <h1 className={s.pageTitle}>{hero.title}</h1>
            </Reveal>
          </div>
          <Reveal delay={2} className={s.pageHeroText}>
            <p className={s.lead}>{hero.paras[0]}</p>
            <p>{hero.paras[1]}</p>
            <p className={s.pageHeroPunch}>{hero.paras[2]}</p>
          </Reveal>
        </div>
        <div className={`${s.wrap} ${s.pageHeroMedia}`}>
          <img src="/brand/io-mark.svg" alt="" className={s.pageHeroMark} />
          <div className={s.frameWide}>
            <Image src={P.aerialWide} alt="Aerial view of Innovation Oasis and Al Foah Farm" fill priority sizes="100vw" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.longread}`}>
          <aside className={s.longreadSide}>
            <Kicker>{story.kicker}</Kicker>
            <h2 className={s.h2}>{story.title}</h2>
            <div className={s.longreadImg}>
              <Image src={P.atrium} alt="The IO atrium: Research, Development, Growth" fill sizes="(max-width: 900px) 100vw, 35vw" />
            </div>
          </aside>
          <div className={s.longreadBody}>
            <Reveal>
              <p className={s.bigLine}>
                {story.lead[0]}
                <br />
                <span className={s.accent}>{story.lead[1]}</span>
              </p>
            </Reveal>
            {story.paras.map((p) => (
              <Reveal key={p}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <p className={s.turn}>
                {story.turn[0]}
                <br />
                <b>
                  What it lacked was <IoWord word="implementation." />
                </b>
              </p>
            </Reveal>
            {story.paras2.map((p, i) => (
              <Reveal key={p}>
                <p className={i === 2 ? s.bigLine : undefined}>{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <p className={s.lead}>{story.close}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className={`${s.section} ${s.sectionLight}`}>
        <div className={s.wrap}>
          <SectionHead kicker="Our People" title={leadership.title} />
          <div className={s.leader}>
            <Reveal className={s.leaderCard}>
              <div className={s.leaderPortrait}>
                <IoMark height={90} alt="" />
                <span>Portrait to come</span>
              </div>
              <div>
                <b>Dr. Shamal Mohammed</b>
                <span>CEO, Innovation Oasis</span>
              </div>
            </Reveal>
            <div className={s.leaderText}>
              <Reveal>
                <p className={s.lead}>{leadership.text}</p>
              </Reveal>
              <Reveal delay={1}>
                <blockquote className={s.leaderQuote}>
                  “{leadership.quote}”<cite>— {leadership.by}</cite>
                </blockquote>
              </Reveal>
            </div>
          </div>

          <div className={s.teamHead}>
            <Reveal>
              <h3 className={s.h3}>{team.title}</h3>
              <p className={s.lead}>{team.intro}</p>
            </Reveal>
            <Reveal delay={1}>
              <p>{team.text}</p>
            </Reveal>
          </div>
          <ul className={s.teamGrid}>
            {team.names.map((n, i) => (
              <Reveal as="li" key={n} delay={i % 4}>
                <span className={s.teamPhoto} aria-hidden="true">
                  {n[0]}
                </span>
                <b>{n}</b>
                <span>Photo &amp; role to come</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <AridChapter />

      <Ecosystem />

      {/* PRINCIPLES */}
      <section className={s.section}>
        <div className={s.wrap}>
          <SectionHead kicker="Our Values" title="The Principles That Guide Us" />
          <ol className={s.principles}>
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i}>
                <span className={s.signNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* JOURNEY */}
      <section className={`${s.section} ${s.sectionInk}`}>
        <div className={s.wrap}>
          <SectionHead
            light
            kicker="Our Journey"
            title={
              <>
                From an overlooked plot to a <span className={s.accent}>global testbed.</span>
              </>
            }
          />
          <Timeline items={journey} />
        </div>
      </section>

      {/* LOOKING AHEAD */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.ahead}`}>
          <Reveal>
            <Kicker>{ahead.title}</Kicker>
          </Reveal>
          {ahead.paras.map((p, i) => (
            <Reveal key={p} delay={i}>
              <p className={i === 0 ? s.bigLine : s.lead}>{p}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className={s.aheadClose}>
              {ahead.close[0]}
              <br />
              <span className={s.accent}>{ahead.close[1]}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <MissionBand />
    </>
  );
}
