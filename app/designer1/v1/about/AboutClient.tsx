"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import s from "../v1.module.css";
import a from "./about.module.css";
import { IoMark, IoWord } from "../_components/Brand";
import { ahead, arid, different, hero, journey, leadership, mission, principles, story, team } from "../_lib/copy";
import { P } from "../_lib/photo";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Every word on this page is verbatim from docs/source/Innovation_Oasis_About_Page_Content_v2.docx.pdf
// (via _lib/copy.ts). Section labels are the PDF's own section headings.

const principleImgs = [P.tomatoAisle, P.tour, P.labWorking, P.droneSky, P.hydroTomato];
const journeyImgs = [
  P.tour,
  P.aerialWide,
  P.labSeed,
  P.droneTop,
  P.greenhouseRoofs,
  P.inauguration,
  P.awardsStage,
  P.aerialCampus,
];

function Label({ n, children, light = false }: { n: string; children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`${a.label} ${light ? a.labelLight : ""}`} data-reveal>
      <span className={a.labelNum}>{n}</span>
      <span className={a.labelRule} />
      {children}
    </span>
  );
}

export function AboutClient() {
  const root = useRef<HTMLDivElement>(null);
  const [year, setYear] = useState(0);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ---------- hero intro ---------- */
        gsap.fromTo(q(`.${a.heroBg} img`), { scale: 1.18 }, { scale: 1, duration: 2.6, ease: "expo.out" });
        gsap.from(q(`.${a.heroShade}`), { opacity: 0, duration: 1.6, ease: "power2.out" });
        SplitText.create(q(`.${a.heroTitle}`), {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, { yPercent: 110, duration: 1.5, ease: "expo.out", stagger: 0.1, delay: 0.25 }),
        });
        gsap.from(q(`.${a.heroMeta} > *`), { y: 30, autoAlpha: 0, duration: 1.2, ease: "expo.out", stagger: 0.1, delay: 0.8 });

        // hero drifts away on scroll
        const heroEl = q(`.${a.hero}`)[0];
        gsap.to(q(`.${a.heroBg}`), {
          yPercent: 22,
          ease: "none",
          scrollTrigger: { trigger: heroEl, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(q(`.${a.heroInner}`), {
          yPercent: -18,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { trigger: heroEl, start: "top top", end: "70% top", scrub: true },
        });

        /* ---------- generic reveals ---------- */
        q("[data-split]").forEach((el: Element) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.3,
                ease: "expo.out",
                stagger: 0.08,
                scrollTrigger: { trigger: el, start: "top 88%" },
              }),
          });
        });

        q("[data-reveal]").forEach((el: Element) => {
          gsap.from(el, {
            y: 40,
            autoAlpha: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          });
        });

        q("[data-stagger]").forEach((el: Element) => {
          gsap.from(el.children, {
            y: 50,
            autoAlpha: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        // statement: words light up as it scrolls through
        q("[data-lit]").forEach((el: Element) => {
          SplitText.create(el, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.fromTo(
                self.words,
                { opacity: 0.14 },
                {
                  opacity: 1,
                  ease: "none",
                  stagger: 0.1,
                  scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 42%", scrub: true },
                },
              ),
          });
        });

        // images: curtain reveal + settle
        q("[data-clip]").forEach((el: Element) => {
          const img = el.querySelector("img");
          const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%" } });
          tl.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" });
          if (img) tl.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 2, ease: "expo.out" }, 0.15);
        });

        // gentle parallax on framed images
        q("[data-parallax]").forEach((el: Element) => {
          const amt = Number((el as HTMLElement).dataset.parallax || 10);
          gsap.fromTo(
            el,
            { yPercent: -amt },
            {
              yPercent: amt,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        // full-bleed backgrounds slowly zoom while in view
        q("[data-bgzoom]").forEach((el: Element) => {
          gsap.fromTo(
            el,
            { scale: 1.2 },
            { scale: 1, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
          );
        });

        // counters
        q("[data-count]").forEach((el: Element) => {
          const to = Number((el as HTMLElement).dataset.count);
          const o = { v: 0 };
          gsap.to(o, {
            v: to,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => {
              el.textContent = String(Math.round(o.v));
            },
          });
        });

        // ecosystem: helix rungs draw in toward the mark
        q(`.${s.ecoCol} i`).forEach((el: Element) => {
          const side = el.closest(`[data-side]`)?.getAttribute("data-side");
          gsap.from(el, {
            scaleX: 0,
            transformOrigin: side === "left" ? "left center" : "right center",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });

      /* ---------- pinned storytelling (desktop / tall screens only) ---------- */
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1000px) and (min-height: 700px)", () => {
        // "The world had innovation. / What it lacked was implementation."
        const turn = q(`.${a.turn}`)[0];
        const tl = gsap.timeline({
          scrollTrigger: { trigger: turn, start: "top top", end: "+=160%", pin: true, scrub: 1 },
        });
        tl.fromTo(q(`.${a.turnBg} img`), { scale: 1.25 }, { scale: 1, ease: "none", duration: 3 }, 0)
          .from(q(`.${a.turnA}`), { yPercent: 40, autoAlpha: 0, duration: 0.8 }, 0)
          .to(q(`.${a.turnA}`), { yPercent: -40, autoAlpha: 0, duration: 0.8 }, 1.2)
          .from(q(`.${a.turnB}`), { yPercent: 40, autoAlpha: 0, duration: 0.8 }, 1.5)
          .to(q(`.${a.turnShade}`), { opacity: 0.85, duration: 1.5 }, 1);

        // Why Here: pressures light up one by one while the section is pinned
        const why = q(`.${a.why}`)[0];
        const items = q(`.${a.pressure}`);
        const wtl = gsap.timeline({
          scrollTrigger: { trigger: why, start: "top top", end: `+=${items.length * 45}%`, pin: true, scrub: 1 },
        });
        wtl.fromTo(q(`.${a.whyBg} img`), { scale: 1.15 }, { scale: 1, ease: "none", duration: items.length }, 0);
        items.forEach((el: Element, i: number) => {
          wtl.to(el, { opacity: 1, x: 0, duration: 0.5 }, i);
          wtl.to(q(`.${a.whyBar}`), { scaleY: (i + 1) / items.length, duration: 0.5 }, i);
          if (i < items.length - 1) wtl.to(el, { opacity: 0.32, duration: 0.5 }, i + 0.9);
        });

        // Principles: vertical scroll drives a horizontal track
        const track = q(`.${a.pTrack}`)[0] as HTMLElement;
        const pSec = q(`.${a.principles}`)[0];
        const dist = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: { trigger: pSec, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 1, invalidateOnRefresh: true },
        });
      });

      /* ---------- journey: sticky year follows the active milestone ---------- */
      q(`.${a.jItem}`).forEach((el: Element, i: number) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => self.isActive && setYear(i),
        });
      });
      gsap.fromTo(
        q(`.${a.jProgress}`),
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: q(`.${a.jList}`)[0], start: "top 60%", end: "bottom 60%", scrub: true } },
      );
    },
    { scope: root },
  );

  return (
    <div ref={root} className={a.page}>
      {/* ============ HERO STATEMENT ============ */}
      <section className={a.hero}>
        <div className={a.heroBg}>
          <Image src={P.aerialWide} alt="Innovation Oasis beside Al Foah Farm, seen from above" fill priority sizes="100vw" />
        </div>
        <div className={a.heroShade} />
        <div className={`${s.wrap} ${a.heroInner}`}>
          <h1 className={a.heroTitle}>{hero.statement}</h1>
          <div className={a.heroMeta}>
            <p className={a.heroSub}>{hero.title}</p>
            <span className={a.scrollCue}>
              <i />
              About Innovation Oasis
            </span>
          </div>
        </div>
      </section>

      {/* ============ INTRO (hero copy continues) ============ */}
      <section className={a.section}>
        <div className={s.wrap}>
          <p className={a.statement} data-lit>
            {hero.paras[0]}
          </p>
          <div className={a.introGrid}>
            <div className={a.introImgA}>
              <div className={a.frame} data-clip>
                <Image src={P.labWorking} alt="Researchers at work in an IO laboratory" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
            </div>
            <div className={a.introText}>
              <p className={a.body} data-reveal>
                {hero.paras[1]}
              </p>
              <p className={a.punch} data-split>
                {hero.paras[2]}
              </p>
              <div className={a.introImgB}>
                <div className={a.frameWide} data-clip>
                  <Image src={P.greenhouseLeafy} alt="Crops in an IO greenhouse" fill sizes="(max-width: 900px) 100vw, 30vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className={`${a.section} ${a.sectionWhite}`}>
        <div className={s.wrap}>
          <div className={a.head}>
            <Label n="01">Our Story</Label>
            <h2 className={a.h2} data-split>
              {story.title}
            </h2>
          </div>
          <p className={a.bigPair} data-split>
            {story.lead[0]}
            <br />
            <span className={s.accent}>{story.lead[1]}</span>
          </p>
          <div className={a.storyGrid}>
            <div className={a.storySticky}>
              <div className={a.frameTall} data-clip>
                <Image src={P.atrium} alt="The IO atrium: Research, Development, Growth" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
            </div>
            <div className={a.storyText}>
              {story.paras.map((p) => (
                <p key={p} className={a.body} data-reveal>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* pinned turn: innovation → implementation */}
      <section className={a.turn}>
        <div className={a.turnBg}>
          <Image src={P.fieldSpecialist} alt="" fill sizes="100vw" />
        </div>
        <div className={a.turnShade} />
        <div className={a.turnInner}>
          <p className={a.turnA}>{story.turn[0]}</p>
          <p className={a.turnB}>
            What it lacked was <IoWord word="implementation." />
          </p>
        </div>
      </section>

      {/* the land */}
      <section className={a.land}>
        <div className={a.landBg}>
          <div className={a.landImg} data-bgzoom>
            <Image src={P.aerialPlots} alt="IO trial plots and greenhouses on the 34-hectare site" fill sizes="100vw" />
          </div>
        </div>
        <div className={`${s.wrap} ${a.landInner}`}>
          <div className={a.landCard} data-reveal>
            <span className={a.landNum}>
              <span data-count="34">34</span>
              <small>hectares</small>
            </span>
            <p className={a.body}>{story.paras2[0]}</p>
          </div>
        </div>
      </section>

      <section className={`${a.section} ${a.sectionWhite}`}>
        <div className={s.wrap}>
          <div className={a.created}>
            <p className={a.createdA} data-split>
              {story.paras2[1]}
            </p>
            <p className={a.createdB} data-split>
              It was the creation of <IoWord word="Innovation" /> Oasis.
            </p>
          </div>
          <div className={a.closeGrid}>
            <div className={a.closeImg}>
              <div className={a.frameTall} data-clip>
                <Image src={P.canopy} alt="The canopy at the IO entrance" fill sizes="(max-width: 900px) 100vw, 45vw" />
              </div>
            </div>
            <div className={a.closeText}>
              <p className={a.body} data-reveal>
                {story.paras2[3]}
              </p>
              <p className={a.lead} data-reveal>
                {story.close}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR PEOPLE ============ */}
      <section className={a.section}>
        <div className={s.wrap}>
          <div className={a.head}>
            <Label n="02">Our People</Label>
            <h2 className={a.h2} data-split>
              {leadership.title}
            </h2>
          </div>
          <div className={a.leader}>
            <div className={a.leaderImg}>
              <div className={a.frameTall} data-clip>
                <Image src={leadership.photo} alt="Dr. Shamal Mohammed, CEO, Innovation Oasis" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
            </div>
            <div className={a.leaderText}>
              <p className={a.body} data-reveal>
                {leadership.text}
              </p>
              <blockquote className={a.quote}>
                <p data-split>“{leadership.quote}”</p>
                <cite data-reveal>— {leadership.by}</cite>
              </blockquote>
            </div>
          </div>

          <div className={a.teamHead}>
            <div>
              <h3 className={a.h3} data-split>
                {team.title}
              </h3>
              <p className={a.lead} data-reveal>
                {team.intro}
              </p>
            </div>
            <div data-reveal>
              <span className={a.miniLabel}>{team.membersLabel}</span>
              <p className={a.body}>{team.text}</p>
            </div>
          </div>
          <ul className={a.team} data-stagger>
            {team.members.map((m) => (
              <li key={m.name}>
                <span className={a.teamImg}>
                  {m.photo ? <Image src={m.photo} alt={m.name} fill sizes="(max-width: 700px) 50vw, 25vw" /> : null}
                </span>
                <span className={a.teamName}>{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ WHY HERE? ============ */}
      <section className={a.why}>
        <div className={a.whyBg}>
          <Image src={P.greenhouseRoofs} alt="" fill sizes="100vw" />
        </div>
        <div className={a.whyShade} />
        <div className={`${s.wrap} ${a.whyInner}`}>
          <div className={a.whyLeft}>
            <Label n="03" light>
              Why Here?
            </Label>
            <h2 className={a.whySub}>{arid.title}</h2>
            <p className={a.whyLines}>
              {arid.lines[0]} <span className={a.whyLight}>{arid.lines[1]}</span>
            </p>
            {arid.paras.map((p) => (
              <p key={p} className={a.whyBody}>
                {p}
              </p>
            ))}
          </div>
          <div className={a.whyRight}>
            <span className={a.whyTrack}>
              <span className={a.whyBar} />
            </span>
            <ol>
              {arid.pressures.map((x, i) => (
                <li key={x} className={a.pressure}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {x}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`${a.section} ${a.sectionWhite}`}>
        <div className={`${s.wrap} ${a.bench}`}>
          <p className={a.benchLine} data-split>
            {arid.benchmark}
          </p>
          <p className={a.benchQuote} data-split>
            “{leadership.quote}”
          </p>
        </div>
      </section>

      {/* ============ WHAT MAKES IO DIFFERENT ============ */}
      <section className={a.section}>
        <div className={s.wrap}>
          <div className={a.head}>
            <Label n="04">{different.kicker}</Label>
            <h2 className={a.h2} data-split>
              {different.title[0]} <span className={s.accent}>{different.title[1]}</span>
            </h2>
            <p className={a.lead} data-reveal>
              {different.intro}
            </p>
          </div>
          <div className={s.eco}>
            <ul className={s.ecoCol} data-side="left" data-stagger>
              {different.items.slice(0, 4).map((x) => (
                <li key={x}>
                  <span>{x}</span>
                  <i aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className={s.ecoCore} data-reveal>
              <IoMark height={220} alt="Innovation Oasis" />
            </div>
            <ul className={s.ecoCol} data-side="right" data-stagger>
              {different.items.slice(4).map((x) => (
                <li key={x}>
                  <i aria-hidden="true" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className={a.ecoOutro} data-lit>
            {different.outro}
          </p>
        </div>
      </section>

      {/* ============ OUR MISSION ============ */}
      <section className={a.mission}>
        <div className={a.missionBg}>
          <div className={a.landImg} data-bgzoom>
            <Image src={P.tomatoAisle} alt="" fill sizes="100vw" />
          </div>
        </div>
        <div className={a.missionShade} />
        <div className={`${s.wrap} ${a.missionInner}`}>
          <Label n="05" light>
            Our Mission
          </Label>
          <p className={a.missionText} data-split>
            {mission}
          </p>
        </div>
      </section>

      {/* ============ PRINCIPLES (horizontal) ============ */}
      <section className={a.principles}>
        <div className={a.pTrack}>
          <div className={a.pIntro}>
            <Label n="06">Principles</Label>
            <h2 className={a.h2}>The Principles That Guide Us</h2>
            <span className={a.pHint}>
              <i /> Scroll
            </span>
          </div>
          {principles.map((p, i) => (
            <article key={p.title} className={a.pCard}>
              <div className={a.pImg}>
                <Image src={principleImgs[i]} alt="" fill sizes="(max-width: 1000px) 90vw, 30vw" />
              </div>
              <span className={a.pNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ OUR JOURNEY ============ */}
      <section className={`${a.section} ${a.sectionWhite}`}>
        <div className={s.wrap}>
          <div className={a.head}>
            <Label n="07">Our Journey</Label>
          </div>
          <div className={a.journey}>
            <div className={a.jSticky}>
              <div className={a.jYear} aria-hidden="true">
                {journey.map((m, i) => (
                  <span key={i} data-active={year === i}>
                    {m.when}
                  </span>
                ))}
              </div>
              <div className={a.jFrame}>
                {journey.map((m, i) => (
                  <div key={i} className={a.jImg} data-active={year === i}>
                    <Image src={journeyImgs[i]} alt="" fill sizes="40vw" />
                  </div>
                ))}
              </div>
            </div>
            <ol className={a.jList}>
              <span className={a.jLine}>
                <span className={a.jProgress} />
              </span>
              {journey.map((m, i) => (
                <li key={m.when + m.title} className={a.jItem} data-active={year === i}>
                  <span className={a.jWhen}>{m.when}</span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ LOOKING AHEAD ============ */}
      <section className={a.section}>
        <div className={s.wrap}>
          <div className={a.head}>
            <Label n="08">{ahead.title}</Label>
          </div>
          <div className={a.aheadGrid}>
            <p className={a.aheadLead} data-split>
              {ahead.paras[0]}
            </p>
            <div className={a.aheadText}>
              <p className={a.body} data-reveal>
                {ahead.paras[1]}
              </p>
              <p className={a.lead} data-reveal>
                {ahead.paras[2]}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={a.finale}>
        <div className={a.finaleBg}>
          <div className={a.landImg} data-bgzoom>
            <Image src={P.aerialCampus} alt="" fill sizes="100vw" />
          </div>
        </div>
        <div className={a.finaleShade} />
        <div className={`${s.wrap} ${a.finaleInner}`}>
          <p className={a.finaleText} data-split>
            {ahead.close[0]}
            <br />
            <span className={a.finaleBlue}>{ahead.close[1]}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
