"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import s from "../v1.module.css";
import b from "./about-b.module.css";
import { IoMark, IoWord } from "../_components/Brand";
import { ahead, arid, different, hero, journey, leadership, mission, principles, story, team } from "../_lib/copy";
import { HQ, P } from "../_lib/photo";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Variation B — "branded". Copy is verbatim from the client About PDF (via _lib/copy.ts).
// Gallery captions are photo descriptions, not page copy.

const gallery: { src: string; cap: string }[][] = [
  [
    { src: HQ.canopy2, cap: "Entrance canopy" },
    { src: HQ.labSeed, cap: "Seed development" },
    { src: HQ.greenhouseWide, cap: "Greenhouse" },
    { src: HQ.flask, cap: "Laboratory" },
    { src: HQ.phenotyping2, cap: "Phenotyping" },
  ],
  [
    { src: HQ.tour, cap: "Greenhouse tour" },
    { src: HQ.microscope, cap: "Microscopy" },
    { src: HQ.atrium, cap: "Atrium" },
    { src: HQ.hydroTomato, cap: "Hydroponics" },
    { src: HQ.winners, cap: "Agricultural Challenge" },
  ],
  [
    { src: HQ.labPots, cap: "Plant trials" },
    { src: HQ.blueberry, cap: "Blueberry trials" },
    { src: HQ.growthChamber, cap: "Growth chamber" },
    { src: HQ.labWorking, cap: "Research team" },
    { src: HQ.tomatoAisle, cap: "Tomato production" },
  ],
];

const journeyImgs = [HQ.tour, P.aerialWide, HQ.labSeed, P.droneTop, HQ.greenhouseWide, HQ.inauguration, HQ.stage, P.aerialCampus];

// Letterhead motif: a thin IO-blue rule that runs into the "i" of the mark.
function BrandRule({ n, label, light = false }: { n: string; label: string; light?: boolean }) {
  return (
    <div className={`${b.rule} ${light ? b.ruleLight : ""}`}>
      <span className={b.ruleText}>
        <span className={b.ruleNum}>{n}</span>
        {label}
      </span>
      <span className={b.ruleLine} data-line />
      <img src="/brand/io-mark.svg" alt="" className={b.ruleMark} />
    </div>
  );
}

function Frame({ src, alt = "", ratio, sizes = "50vw", amt = 12 }: { src: string; alt?: string; ratio: string; sizes?: string; amt?: number }) {
  return (
    <div className={b.frame} style={{ aspectRatio: ratio }} data-clip>
      <div className={b.frameInner} data-parallax={amt}>
        <Image src={src} alt={alt} fill sizes={sizes} />
      </div>
    </div>
  );
}

export function AboutB() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* hero */
        SplitText.create(q(`.${b.heroTitle}`), {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, { yPercent: 110, duration: 1.6, ease: "expo.out", stagger: 0.1, delay: 0.2 }),
        });
        gsap.from(q(`.${b.heroMark}`), { xPercent: 12, autoAlpha: 0, duration: 2.2, ease: "expo.out" });
        gsap.from(q(`.${b.heroFoot} > *`), { y: 24, autoAlpha: 0, duration: 1.2, ease: "expo.out", stagger: 0.1, delay: 0.9 });
        gsap.from(q(`.${b.heroLine}`), { scaleX: 0, transformOrigin: "left center", duration: 2, ease: "expo.inOut", delay: 0.6 });
        const heroEl = q(`.${b.hero}`)[0];
        gsap.to(q(`.${b.heroMark}`), { yPercent: 18, ease: "none", scrollTrigger: { trigger: heroEl, start: "top top", end: "bottom top", scrub: true } });
        gsap.to(q(`.${b.heroInner}`), { yPercent: -14, autoAlpha: 0.2, ease: "none", scrollTrigger: { trigger: heroEl, start: "top top", end: "bottom top", scrub: true } });

        /* generic */
        q("[data-split]").forEach((el: Element) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, { yPercent: 110, duration: 1.3, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 88%" } }),
          });
        });
        q("[data-reveal]").forEach((el: Element) => {
          gsap.from(el, { y: 40, autoAlpha: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } });
        });
        q("[data-stagger]").forEach((el: Element) => {
          gsap.from(el.children, { y: 60, autoAlpha: 0, duration: 1.3, ease: "expo.out", stagger: 0.09, scrollTrigger: { trigger: el, start: "top 85%" } });
        });
        q("[data-lit]").forEach((el: Element) => {
          SplitText.create(el, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.fromTo(self.words, { opacity: 0.16 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true } }),
          });
        });
        q("[data-line]").forEach((el: Element) => {
          gsap.from(el, { scaleX: 0, transformOrigin: "left center", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 90%" } });
        });
        q("[data-clip]").forEach((el: Element) => {
          gsap.fromTo(el, { clipPath: "inset(12% 8% 12% 8%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
        });
        // photo parallax: the image travels inside its frame
        q("[data-parallax]").forEach((el: Element) => {
          const amt = Number((el as HTMLElement).dataset.parallax || 12);
          gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
        });
        q("[data-count]").forEach((el: Element) => {
          const o = { v: 0 };
          gsap.to(o, {
            v: Number((el as HTMLElement).dataset.count),
            duration: 2.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => {
              el.textContent = String(Math.round(o.v));
            },
          });
        });
        // gallery rows drift in opposite directions with scroll
        q(`.${b.gRow}`).forEach((row: Element, i: number) => {
          const dir = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(row, { xPercent: dir < 0 ? 0 : -18 }, { xPercent: dir < 0 ? -18 : 0, ease: "none", scrollTrigger: { trigger: q(`.${b.gallery}`)[0], start: "top bottom", end: "bottom top", scrub: true } });
        });
        // ecosystem rungs
        q(`.${s.ecoCol} i`).forEach((el: Element) => {
          const side = el.closest("[data-side]")?.getAttribute("data-side");
          gsap.from(el, { scaleX: 0, transformOrigin: side === "left" ? "left center" : "right center", duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
        });
      });

      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1000px) and (min-height: 700px)", () => {
        // the canopy photo opens from a framed window to full-bleed
        const ex = q(`.${b.expand}`)[0];
        const tl = gsap.timeline({ scrollTrigger: { trigger: ex, start: "top top", end: "+=130%", pin: true, scrub: 1 } });
        tl.fromTo(q(`.${b.expandImg}`), { clipPath: "inset(16% 30% 16% 30%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }, 0)
          .fromTo(q(`.${b.expandImg} img`), { scale: 1.35 }, { scale: 1, ease: "none" }, 0)
          .from(q(`.${b.expandCap}`), { autoAlpha: 0, y: 30, duration: 0.3 }, 0.7);

        // journey moves sideways
        const track = q(`.${b.jTrack}`)[0] as HTMLElement;
        const jSec = q(`.${b.journey}`)[0];
        const dist = () => track.scrollWidth - track.parentElement!.clientWidth;
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: { trigger: jSec, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 1, invalidateOnRefresh: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={b.page}>
      {/* ============ HERO — IO Blue field, white single-colour mark as supergraphic ============ */}
      <section className={b.hero}>
        <img src="/D1/brand/io-mark-white-on-blue.svg" alt="" className={b.heroMark} />
        <div className={`${s.wrap} ${b.heroInner}`}>
          <span className={b.heroLabel}>About Innovation Oasis</span>
          <h1 className={b.heroTitle}>{hero.statement}</h1>
          <span className={b.heroLine} />
          <div className={b.heroFoot}>
            <p>{hero.title}</p>
            <span className={b.cue}>
              <i />
            </span>
          </div>
        </div>
      </section>

      {/* ============ EXPANDING IMAGE ============ */}
      <section className={b.expand}>
        <div className={b.expandImg}>
          <Image src={HQ.canopy} alt="The Innovation Oasis entrance canopy" fill priority sizes="100vw" />
        </div>
        <span className={b.expandCap}>Innovation Oasis · Al Foah, Al Ain</span>
      </section>

      {/* ============ INTRO ============ */}
      <section className={b.section}>
        <div className={`${s.wrap} ${b.intro}`}>
          <p className={b.statement} data-lit>
            {hero.paras[0]}
          </p>
          <div className={b.introSide}>
            <p className={b.body} data-reveal>
              {hero.paras[1]}
            </p>
            <p className={b.punch} data-split>
              {hero.paras[2]}
            </p>
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className={`${b.section} ${b.white}`}>
        <div className={s.wrap}>
          <BrandRule n="01" label="Our Story" />
          <h2 className={b.h2} data-split>
            {story.title}
          </h2>
          <p className={b.giant} data-split>
            {story.lead[0]} <span className={b.blue}>{story.lead[1]}</span>
          </p>
          <div className={b.storyGrid}>
            <div className={b.storyA}>
              <Frame src={HQ.atrium} alt="The IO atrium" ratio="16 / 11" sizes="(max-width: 1000px) 100vw, 55vw" />
            </div>
            <div className={b.storyB}>
              <Frame src={HQ.labSeed} alt="Seed development laboratory" ratio="4 / 5" sizes="(max-width: 1000px) 100vw, 30vw" amt={16} />
            </div>
            <p className={`${b.body} ${b.storyP1}`} data-reveal>
              {story.paras[0]}
            </p>
            <p className={`${b.body} ${b.storyP2}`} data-reveal>
              {story.paras[1]}
            </p>
          </div>
        </div>
      </section>

      <section className={b.turn}>
        <div className={s.wrap}>
          <p className={b.turnA} data-split>
            {story.turn[0]}
          </p>
          <p className={b.turnB} data-split>
            What it lacked was <IoWord word="implementation." />
          </p>
        </div>
      </section>

      <section className={`${b.land} ${b.white}`}>
        <div className={b.landImg}>
          <Frame src={P.aerialPlots} alt="IO trial plots and greenhouses" ratio="16 / 10" sizes="(max-width: 1000px) 100vw, 60vw" amt={8} />
        </div>
        <div className={b.landPanel} data-reveal>
          <span className={b.landNum}>
            <span data-count="34">34</span>
          </span>
          <span className={b.landUnit}>hectares</span>
          <img src="/D1/brand/io-mark-white-on-blue.svg" alt="" className={b.landMark} />
        </div>
        <div className={`${s.wrap} ${b.landText}`}>
          <p className={b.lead} data-reveal>
            {story.paras2[0]}
          </p>
        </div>
      </section>

      <section className={`${b.section} ${b.white}`}>
        <div className={`${s.wrap} ${b.created}`}>
          <p className={b.createdA} data-split>
            {story.paras2[1]}
          </p>
          <p className={b.createdB} data-split>
            It was the creation of <IoWord word="Innovation" /> Oasis.
          </p>
        </div>
      </section>

      <section className={b.band}>
        <div className={b.bandImg} data-parallax="14">
          <Image src={HQ.tomatoAisle} alt="A tomato greenhouse at IO" fill sizes="100vw" />
        </div>
      </section>

      <section className={`${b.section} ${b.white}`}>
        <div className={`${s.wrap} ${b.close}`}>
          <p className={b.body} data-reveal>
            {story.paras2[3]}
          </p>
          <p className={b.closeLead} data-split>
            {story.close}
          </p>
        </div>
      </section>

      {/* ============ GALLERY — full bleed ============ */}
      <section className={b.gallery}>
        <div className={`${s.wrap} ${b.gHead}`}>
          <img src="/D1/brand/io-wordmark.svg" alt="Innovation Oasis" className={b.gWordmark} />
        </div>
        {gallery.map((row, i) => (
          <div key={i} className={b.gRow}>
            {[...row, ...row].map((g, k) => (
              <figure key={k} className={b.gItem}>
                <Image src={g.src} alt={g.cap} fill sizes="(max-width: 700px) 70vw, 30vw" />
                <figcaption>{g.cap}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </section>

      {/* ============ OUR PEOPLE ============ */}
      <section className={b.section}>
        <div className={s.wrap}>
          <BrandRule n="02" label="Our People" />
          <div className={b.leader}>
            <div className={b.leaderImg}>
              <Frame src={leadership.photo} alt="Dr. Shamal Mohammed, CEO, Innovation Oasis" ratio="4 / 5" sizes="(max-width: 1000px) 100vw, 40vw" amt={8} />
            </div>
            <div className={b.leaderText}>
              <h2 className={b.h2} data-split>
                {leadership.title}
              </h2>
              <p className={b.body} data-reveal>
                {leadership.text}
              </p>
              <blockquote className={b.quote}>
                <p data-split>“{leadership.quote}”</p>
                <cite data-reveal>— {leadership.by}</cite>
              </blockquote>
            </div>
          </div>

          <div className={b.teamHead}>
            <h3 className={b.h2} data-split>
              {team.title}
            </h3>
            <p className={b.lead} data-reveal>
              {team.intro}
            </p>
            <div data-reveal>
              <span className={b.mini}>{team.membersLabel}</span>
              <p className={b.body}>{team.text}</p>
            </div>
          </div>
          <ul className={b.team} data-stagger>
            {team.members.map((m) => (
              <li key={m.name}>
                <span className={b.teamImg}>
                  {m.photo ? <Image src={m.photo} alt={m.name} fill sizes="(max-width: 700px) 50vw, 25vw" /> : null}
                  <span className={b.teamVeil}>
                    <img src="/D1/brand/io-mark-white-on-blue.svg" alt="" />
                  </span>
                </span>
                <span className={b.teamName}>{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ WHY HERE — split: blue brand field / white ============ */}
      <section className={b.why}>
        <div className={b.whyBlue}>
          <img src="/D1/brand/io-mark-white-on-blue.svg" alt="" className={b.whyMark} />
          <div className={b.whyBlueInner}>
            <BrandRule n="03" label="Why Here?" light />
            <h2 className={b.whyTitle}>{arid.title}</h2>
            <p className={b.whyLines} data-split>
              {arid.lines[0]} {arid.lines[1]}
            </p>
          </div>
        </div>
        <div className={b.whyWhite}>
          {arid.paras.map((p) => (
            <p key={p} className={b.body} data-reveal>
              {p}
            </p>
          ))}
          <ol className={b.pressures} data-stagger>
            {arid.pressures.map((x, i) => (
              <li key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {x}
              </li>
            ))}
          </ol>
          <p className={b.lead} data-reveal>
            {arid.benchmark}
          </p>
        </div>
      </section>
      <section className={`${b.section} ${b.white}`}>
        <div className={s.wrap}>
          <p className={b.bigQuote} data-split>
            “{leadership.quote}”
          </p>
        </div>
      </section>

      {/* ============ DIFFERENT ============ */}
      <section className={b.section}>
        <div className={s.wrap}>
          <BrandRule n="04" label={different.kicker} />
          <div className={b.diffHead}>
            <h2 className={b.h2} data-split>
              {different.title[0]} <span className={b.blue}>{different.title[1]}</span>
            </h2>
            <p className={b.lead} data-reveal>
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
              <IoMark height={240} alt="Innovation Oasis" />
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
          <p className={b.outro} data-lit>
            {different.outro}
          </p>
        </div>
      </section>

      {/* ============ MISSION — full-bleed photo ============ */}
      <section className={b.mission}>
        <div className={b.missionImg} data-parallax="12">
          <Image src={HQ.greenhouseLeafy} alt="" fill sizes="100vw" />
        </div>
        <div className={b.missionShade} />
        <div className={`${s.wrap} ${b.missionInner}`}>
          <BrandRule n="05" label="Our Mission" light />
          <p className={b.missionText} data-split>
            {mission}
          </p>
        </div>
      </section>

      {/* ============ PRINCIPLES — wayfinding signs ============ */}
      <section className={`${b.section} ${b.white}`}>
        <div className={s.wrap}>
          <BrandRule n="06" label="The Principles That Guide Us" />
          <ol className={b.signs} data-stagger>
            {principles.map((p, i) => (
              <li key={p.title}>
                <span className={b.signNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ JOURNEY — horizontal ============ */}
      <section className={b.journey}>
        <div className={`${s.wrap} ${b.jHead}`}>
          <BrandRule n="07" label="Our Journey" />
        </div>
        <div className={b.jViewport}>
          <ol className={b.jTrack}>
            {journey.map((m, i) => (
              <li key={m.when + m.title} className={b.jItem}>
                <div className={b.jImg}>
                  <Image src={journeyImgs[i]} alt="" fill sizes="(max-width: 1000px) 80vw, 26vw" />
                </div>
                <span className={b.jDot} />
                <span className={b.jWhen}>{m.when}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ LOOKING AHEAD ============ */}
      <section className={`${b.section} ${b.white}`}>
        <div className={s.wrap}>
          <BrandRule n="08" label={ahead.title} />
          <div className={b.ahead}>
            <p className={b.h2} data-split>
              {ahead.paras[0]}
            </p>
            <div className={b.aheadSide}>
              <p className={b.body} data-reveal>
                {ahead.paras[1]}
              </p>
              <p className={b.lead} data-reveal>
                {ahead.paras[2]}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={b.finale}>
        <img src="/D1/brand/io-mark-white-on-blue.svg" alt="" className={b.finaleMark} />
        <div className={`${s.wrap} ${b.finaleInner}`}>
          <p className={b.finaleText} data-split>
            {ahead.close[0]}
            <br />
            {ahead.close[1]}
          </p>
        </div>
      </section>
    </div>
  );
}
