"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import s from "../v1.module.css";
import c from "./about-c.module.css";
import { IoWord } from "../_components/Brand";
import { ahead, arid, different, hero, journey, leadership, mission, principles, story, team } from "../_lib/copy";
import { HQ, P } from "../_lib/photo";
/* eslint-disable @next/next/no-img-element */

const SiteModel = dynamic(() => import("./SiteModel"), { ssr: false, loading: () => <section className={c.map} /> });

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Variation C — corporate-premium. All copy verbatim from the client About PDF (via _lib/copy.ts);
// stats and 3D-model captions reuse exact phrases from the same PDF. Photo captions describe the photos.

const slides = [
  { src: HQ.canopy, cap: "Entrance" },
  { src: HQ.greenhouseWide, cap: "Greenhouses" },
  { src: HQ.labWorking, cap: "Laboratories" },
  { src: HQ.phenotyping2, cap: "Controlled environment" },
];

const stats = [
  { n: 2020, label: "Silal was established" },
  { n: 34, label: "hectare parcel of land adjacent to Al Foah Farm" },
  { n: 2024, label: "Official Inauguration" },
  { n: 2030, label: "Vision" },
];


const bento = [
  { src: HQ.atrium, cap: "Atrium", span: "a" },
  { src: HQ.flask, cap: "Laboratory", span: "b" },
  { src: HQ.tomatoAisle, cap: "Greenhouse", span: "c" },
  { src: HQ.hydroTomato, cap: "Hydroponics", span: "d" },
  { src: HQ.microscope, cap: "Microscopy", span: "e" },
  { src: HQ.blueberry, cap: "Crop trials", span: "f" },
  { src: HQ.winners, cap: "Agricultural Challenge", span: "g" },
];

const journeyImgs = [HQ.tour, P.aerialWide, HQ.labSeed, P.droneTop, HQ.greenhouseWide, HQ.inauguration, HQ.stage, HQ.canopy2];

function Eyebrow({ n, children, light = false }: { n?: string; children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`${c.eyebrow} ${light ? c.eyebrowLight : ""}`}>
      {n ? <span className={c.eyebrowNum}>{n}</span> : null}
      {children}
    </span>
  );
}

function Photo({ src, alt = "", ratio, sizes = "50vw", amt = 10 }: { src: string; alt?: string; ratio?: string; sizes?: string; amt?: number }) {
  return (
    <div className={c.photo} style={ratio ? { aspectRatio: ratio } : undefined} data-reveal-img>
      <div className={c.photoInner} data-parallax={amt}>
        <Image src={src} alt={alt} fill sizes={sizes} />
      </div>
    </div>
  );
}

export function AboutC() {
  const root = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      /* ---------- hero slideshow (always on; crossfade only when motion is reduced) ---------- */
      const imgs = q(`.${c.slide}`);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      gsap.set(imgs, { autoAlpha: 0 });
      gsap.set(imgs[0], { autoAlpha: 1 });
      const show = (i: number) => {
        setSlide(i);
        const el = imgs[i];
        gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.6, ease: "power2.inOut" });
        if (!reduce) gsap.fromTo(el.querySelector("img"), { scale: 1.12 }, { scale: 1, duration: 7.5, ease: "none" });
        imgs.forEach((o: Element, k: number) => k !== i && gsap.to(o, { autoAlpha: 0, duration: 1.6, delay: 0.2 }));
      };
      show(0);
      let idx = 0;
      const timer = window.setInterval(() => {
        idx = (idx + 1) % imgs.length;
        show(idx);
      }, 6000);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        SplitText.create(q(`.${c.heroTitle}`), {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, { yPercent: 105, duration: 1.4, ease: "expo.out", stagger: 0.09, delay: 0.3 }),
        });
        gsap.from(q(`.${c.heroSub}, .${c.heroAside}`), { y: 24, autoAlpha: 0, duration: 1.2, ease: "expo.out", stagger: 0.1, delay: 0.8 });
        const heroEl = q(`.${c.hero}`)[0];
        gsap.to(q(`.${c.heroMedia}`), { yPercent: 16, ease: "none", scrollTrigger: { trigger: heroEl, start: "top top", end: "bottom top", scrub: true } });

        q("[data-split]").forEach((el: Element) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, { yPercent: 105, duration: 1.2, ease: "expo.out", stagger: 0.07, scrollTrigger: { trigger: el, start: "top 88%" } }),
          });
        });
        q("[data-reveal]").forEach((el: Element) =>
          gsap.from(el, { y: 32, autoAlpha: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } }),
        );
        q("[data-stagger]").forEach((el: Element) =>
          gsap.from(el.children, { y: 36, autoAlpha: 0, duration: 1.1, ease: "expo.out", stagger: 0.07, scrollTrigger: { trigger: el, start: "top 86%" } }),
        );
        q("[data-reveal-img]").forEach((el: Element) =>
          gsap.fromTo(el, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 88%" } }),
        );
        q("[data-parallax]").forEach((el: Element) => {
          const amt = Number((el as HTMLElement).dataset.parallax || 10);
          gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
        });
        q("[data-lit]").forEach((el: Element) => {
          SplitText.create(el, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.fromTo(self.words, { opacity: 0.18 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true } }),
          });
        });
        q("[data-count]").forEach((el: Element) => {
          const o = { v: 0 };
          const to = Number((el as HTMLElement).dataset.count);
          gsap.to(o, {
            v: to,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
            onUpdate: () => {
              el.textContent = String(Math.round(o.v));
            },
          });
        });
        // brand rules: the IO-blue hairline under each section label draws in
        q(`.${c.headRow}`).forEach((el: Element) =>
          gsap.fromTo(el, { "--rule": 0 }, { "--rule": 1, duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 88%" } }),
        );
        // lowercase brand word drifts behind the pull quote
        q("[data-drift]").forEach((el: Element) =>
          gsap.fromTo(el, { xPercent: 8 }, { xPercent: -14, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } }),
        );
        // cropped mark slides in at the close
        q("[data-mark]").forEach((el: Element) =>
          gsap.fromTo(el, { xPercent: 20, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top 85%", end: "center center", scrub: true } }),
        );
        // the story's sticky column shows reading progress
        gsap.fromTo(q(`.${c.storyBar}`), { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: q(`.${c.story}`)[0], start: "top 30%", end: "bottom 70%", scrub: true } });
      });

      /* ---------- pinned journey: smooth horizontal travel ---------- */
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1000px) and (min-height: 700px)", () => {
        const track = q(`.${c.jTrack}`)[0] as HTMLElement;
        const sec = q(`.${c.journey}`)[0];
        const dist = () => track.scrollWidth - track.parentElement!.clientWidth;
        const tw = gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: { trigger: sec, start: "top top", end: () => `+=${dist()}`, pin: true, anticipatePin: 1, scrub: 0.8, invalidateOnRefresh: true },
        });
        gsap.fromTo(q(`.${c.jBar}`), { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: sec, start: "top top", end: () => `+=${dist()}`, scrub: 0.8 } });
        return () => tw.kill();
      });

      return () => window.clearInterval(timer);
    },
    { scope: root },
  );

  return (
    <div ref={root} className={c.page}>
      {/* ================= HERO ================= */}
      <section className={c.hero}>
        <div className={c.heroMedia}>
          {slides.map((sl, i) => (
            <div key={sl.cap} className={c.slide}>
              <Image src={sl.src} alt={sl.cap} fill priority={i === 0} sizes="100vw" />
            </div>
          ))}
        </div>
        <div className={c.heroShade} />
        <div className={`${s.wrap} ${c.heroInner}`}>
          <div className={c.heroMain}>
            <Eyebrow light>About Innovation Oasis</Eyebrow>
            <h1 className={c.heroTitle}>{hero.statement}</h1>
            <p className={c.heroSub}>{hero.title}</p>
            <p className={c.heroAr} lang="ar" dir="rtl">
              نحو أنظمة زراعة وغذاء متطورة
            </p>
          </div>
          <div className={c.heroAside}>
            <div className={c.slideNav}>
              {slides.map((sl, i) => (
                <span key={sl.cap} data-on={slide === i}>
                  <i />
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  {sl.cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className={c.section}>
        <div className={`${s.wrap} ${c.grid}`}>
          <p className={c.statement} data-lit>
            {hero.paras[0]}
          </p>
          <div className={c.introCols}>
            <p className={c.body} data-reveal>
              {hero.paras[1]}
            </p>
            <p className={c.lead} data-reveal>
              {hero.paras[2]}
            </p>
          </div>
          <ul className={c.stats} data-stagger>
            {stats.map((st) => (
              <li key={st.label}>
                <span className={c.statNum} data-count={st.n}>
                  {st.n}
                </span>
                <span className={c.statLabel}>{st.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= OUR STORY (CSS sticky) ================= */}
      <section className={`${c.section} ${c.white} ${c.story}`}>
        <div className={`${s.wrap} ${c.grid}`}>
          <aside className={c.storySide}>
            <Eyebrow n="01">Our Story</Eyebrow>
            <h2 className={c.h2}>{story.title}</h2>
            <span className={c.storyTrack}>
              <span className={c.storyBar} />
            </span>
          </aside>
          <div className={c.storyMain}>
            <p className={c.storyLead} data-split>
              {story.lead[0]} {story.lead[1]}
            </p>
            {story.paras.map((p) => (
              <p key={p} className={c.body} data-reveal>
                {p}
              </p>
            ))}
            <Photo src={HQ.atrium} alt="The IO atrium" ratio="16 / 10" sizes="(max-width: 1000px) 100vw, 55vw" />
            <blockquote className={c.pull}>
              <span className={c.bigWord} aria-hidden="true" data-drift>
                <IoWord word="implementation" />
              </span>
              <p data-split>{story.turn[0]}</p>
              <p data-split>
                What it lacked was <IoWord word="implementation." />
              </p>
            </blockquote>
            <p className={c.body} data-reveal>
              {story.paras2[0]}
            </p>
            <div className={c.pair}>
              <Photo src={HQ.labSeed} alt="Seed development laboratory" ratio="4 / 5" sizes="(max-width: 1000px) 100vw, 27vw" amt={12} />
              <Photo src={HQ.flask} alt="A scientist at work" ratio="4 / 5" sizes="(max-width: 1000px) 100vw, 27vw" amt={6} />
            </div>
            <p className={c.body} data-reveal>
              {story.paras2[1]}
            </p>
            <p className={c.h3} data-split>
              {story.paras2[2]}
            </p>
            <p className={c.body} data-reveal>
              {story.paras2[3]}
            </p>
            <p className={c.lead} data-reveal>
              {story.close}
            </p>
          </div>
        </div>
      </section>

      {/* ================= 3D SITE MODEL ================= */}
      <SiteModel />

      {/* ================= GALLERY (bento) ================= */}
      <section className={`${c.section} ${c.white}`}>
        <div className={s.wrap}>
          <div className={c.bento}>
            {bento.map((b) => (
              <figure key={b.cap} className={c.tile} data-area={b.span}>
                <div className={c.photo} data-reveal-img>
                  <div className={c.photoInner} data-parallax="8">
                    <Image src={b.src} alt={b.cap} fill sizes="(max-width: 1000px) 100vw, 40vw" />
                  </div>
                </div>
                <figcaption>{b.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PEOPLE ================= */}
      <section className={c.section}>
        <div className={`${s.wrap} ${c.grid}`}>
          <div className={c.headRow}>
            <Eyebrow n="02">Our People</Eyebrow>
          </div>
          <div className={c.leaderText}>
            <h2 className={c.h2} data-split>
              {leadership.title}
            </h2>
            <p className={c.body} data-reveal>
              {leadership.text}
            </p>
            <blockquote className={c.quote} data-reveal>
              <p>“{leadership.quote}”</p>
              <cite>— {leadership.by}</cite>
            </blockquote>
          </div>
          <div className={c.leaderImg}>
            <Photo src={leadership.photo} alt="Dr. Shamal Mohammed, CEO, Innovation Oasis" ratio="4 / 5" sizes="(max-width: 1000px) 100vw, 35vw" amt={6} />
          </div>

          <div className={c.teamHead}>
            <h3 className={c.h2} data-split>
              {team.title}
            </h3>
            <p className={c.lead} data-reveal>
              {team.intro}
            </p>
            <div data-reveal>
              <span className={c.mini}>{team.membersLabel}</span>
              <p className={c.body}>{team.text}</p>
            </div>
          </div>
          <ul className={c.team} data-stagger>
            {team.members.map((m) => (
              <li key={m.name}>
                <span className={c.teamImg}>{m.photo ? <Image src={m.photo} alt={m.name} fill sizes="(max-width: 700px) 50vw, 22vw" /> : null}</span>
                <span className={c.teamName}>{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHY HERE (sticky photo split) ================= */}
      <section className={`${c.why} ${c.chapter}`}>
        <div className={c.whyMedia}>
          <div className={c.whySticky}>
            <Image src={HQ.blueberry} alt="Blueberry crop trial at Innovation Oasis" fill sizes="50vw" />
          </div>
        </div>
        <div className={c.whyText}>
          <Eyebrow n="03" light>
            Why Here?
          </Eyebrow>
          <h2 className={c.h2} data-split>
            {arid.title}
          </h2>
          <p className={c.statement} data-split>
            {arid.lines[0]} <span className={c.blue}>{arid.lines[1]}</span>
          </p>
          {arid.paras.map((p) => (
            <p key={p} className={c.body} data-reveal>
              {p}
            </p>
          ))}
          <ol className={c.pressures} data-stagger>
            {arid.pressures.map((x, i) => (
              <li key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {x}
              </li>
            ))}
          </ol>
          <p className={c.lead} data-reveal>
            {arid.benchmark}
          </p>
          <p className={c.quoteBlue} data-split>
            “{leadership.quote}”
          </p>
        </div>
      </section>

      {/* ================= DIFFERENT ================= */}
      <section className={c.section}>
        <div className={`${s.wrap} ${c.grid}`}>
          <div className={c.headRow}>
            <Eyebrow n="04">{different.kicker}</Eyebrow>
          </div>
          <h2 className={`${c.h2} ${c.diffTitle}`} data-split>
            {different.title[0]} {different.title[1]}
          </h2>
          <p className={`${c.lead} ${c.diffIntro}`} data-reveal>
            {different.intro}
          </p>
          <ol className={c.tiles} data-stagger>
            {different.items.map((x, i) => (
              <li key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {x}
              </li>
            ))}
          </ol>
          <p className={c.outro} data-lit>
            {different.outro}
          </p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className={c.mission}>
        <div className={c.missionMedia} data-parallax="10">
          <Image src={HQ.greenhouseLeafy} alt="" fill sizes="100vw" />
        </div>
        <div className={c.missionShade} />
        <div className={`${s.wrap} ${c.missionInner}`}>
          <Eyebrow n="05" light>
            Our Mission
          </Eyebrow>
          <p className={c.missionText} data-split>
            {mission}
          </p>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className={`${c.section} ${c.white}`}>
        <div className={`${s.wrap} ${c.grid}`}>
          <div className={c.headRow}>
            <Eyebrow n="06">The Principles That Guide Us</Eyebrow>
          </div>
          <ol className={c.principles} data-stagger>
            {principles.map((p, i) => (
              <li key={p.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= JOURNEY (pinned, horizontal) ================= */}
      <section className={c.journey}>
        <div className={`${s.wrap} ${c.jHead}`}>
          <Eyebrow n="07">Our Journey</Eyebrow>
          <span className={c.jRail}>
            <span className={c.jBar} />
          </span>
        </div>
        <div className={`${s.wrap} ${c.jViewport}`}>
          <ol className={c.jTrack}>
            {journey.map((m, i) => (
              <li key={m.when + m.title}>
                <div className={c.jImg}>
                  <Image src={journeyImgs[i]} alt="" fill sizes="(max-width: 1000px) 90vw, 24vw" />
                </div>
                <span className={c.jWhen}>{m.when}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= LOOKING AHEAD ================= */}
      <section className={`${c.section} ${c.white} ${c.aheadSec}`}>
        <img src="/brand/io-mark.svg" alt="" className={c.closeMark} data-mark />
        <div className={`${s.wrap} ${c.grid}`}>
          <div className={c.headRow}>
            <Eyebrow n="08">{ahead.title}</Eyebrow>
          </div>
          <p className={`${c.h2} ${c.aheadLead}`} data-split>
            {ahead.paras[0]}
          </p>
          <div className={c.aheadText}>
            <p className={c.body} data-reveal>
              {ahead.paras[1]}
            </p>
            <p className={c.lead} data-reveal>
              {ahead.paras[2]}
            </p>
          </div>
          <p className={c.closing} data-split>
            {ahead.close[0]} <span className={c.blue}>{ahead.close[1]}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
