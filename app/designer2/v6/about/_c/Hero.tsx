"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import a from "../about.module.css";
import { P } from "../../_lib/photo";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/*
 * Hero → At a glance, one continuous scene.
 * Full-bleed aerial of the site, headline split left / right. On scroll the photo closes into a
 * centre card (the 34-hectare parcel) between the two halves of the headline; the headline lifts
 * away and five fact cards rise in at different depths around it, forming the "at a glance" collage.
 * Every fact is from the client copy (content/about.md). Mobile + reduced motion: photo, then a grid.
 */

const facts = [
  { k: "f1", n: "2020", t: "Silal is established, with food security at the heart of its mission", src: P.soilSample, depth: 1.2 },
  { k: "f2", n: "2021", t: "Dr. Shamal Mohammed joins Silal", src: P.ceo, depth: 0.8 },
  { k: "f3", n: "2024", t: "Official inauguration", src: P.inaugurationCeremony, depth: 1.0 },
  { k: "f4", n: "2030", t: "Vision: global leadership in desert agriculture", src: P.greenhouseRoofs, depth: 1.4 },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", (ctx) => {
        const el = root.current!;
        const $ = (s: string) => el.querySelector<HTMLElement>(s)!;
        const $$ = (s: string) => Array.from(el.querySelectorAll<HTMLElement>(s));
        const splits: SplitText[] = [];
        let dead = false;

        const build = () => {
          if (dead) return;
          // two copies of the headline: charcoal on the page, white inside the photo (clipped with it),
          // so the words read in both places while the photo closes across them
          const L = $$("[data-hero-l]");
          const R = $$("[data-hero-r]");
          const halves = [...L, ...R];
          const lines = (els: HTMLElement[]) =>
            els.flatMap((h) => {
              const s = SplitText.create(h, { type: "lines", mask: "lines", linesClass: "ln" });
              splits.push(s);
              return s.lines;
            });
          const lnL = lines(L);
          const lnR = lines(R);

          // arrival
          gsap
            .timeline({ delay: 0.1 })
            .from("[data-hero-zoom]", { scale: 1.18, duration: 2.4, ease: "expo.out" }, 0)
            .from(lnL, { yPercent: 110, duration: 1.4, ease: "expo.out", stagger: (i: number) => (i % (lnL.length / 2)) * 0.08 }, 0.25)
            .from(lnR, { yPercent: 110, duration: 1.4, ease: "expo.out", stagger: (i: number) => (i % (lnR.length / 2)) * 0.08 }, 0.4)
            .from("[data-hero-bar] > *", { opacity: 0, y: 12, duration: 1, ease: "expo.out", stagger: 0.1 }, 0.8);

          // scroll: photo → card, headline → away, facts → collage
          const cards = $$("[data-fact]");
          gsap.set(cards, { opacity: 0, y: (i) => window.innerHeight * (0.55 + Number(cards[i].dataset.depth) * 0.25), scale: 0.94 });
          gsap.set(["[data-hero-cap]", "[data-hero-glance]"], { opacity: 0, y: 16 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.9 },
          });
          tl.fromTo("[data-hero-main]", { clipPath: "inset(0% 0% 0% 0% round 0px)" }, { clipPath: "inset(16% 35% 26% 35% round 6px)", duration: 40, ease: "power2.inOut" }, 0)
            .fromTo("[data-hero-img]", { scale: 1 }, { scale: 0.68, duration: 40, ease: "power2.inOut" }, 0)
            .to("[data-hero-shade]", { opacity: 0, duration: 26 }, 4)
            .to("[data-hero-bar]", { opacity: 0, y: 20, duration: 10 }, 0)
            .to(L, { x: () => -window.innerWidth * 0.01, duration: 40, ease: "power2.inOut" }, 0)
            .to(R, { x: () => window.innerWidth * 0.01, duration: 40, ease: "power2.inOut" }, 0)
            .to(L, { yPercent: -30, opacity: 0, duration: 12, ease: "power2.in" }, 44)
            .to(R, { yPercent: -30, opacity: 0, duration: 12, ease: "power2.in" }, 46);
          cards.forEach((c, i) => tl.to(c, { opacity: 1, y: 0, scale: 1, duration: 26, ease: "power3.out" }, 46 + i * 3.5));
          tl.to(["[data-hero-glance]", "[data-hero-cap]"], { opacity: 1, y: 0, duration: 10, stagger: 3 }, 60)
            // drift: the collage keeps breathing at its own depths while the page moves on
            .to(cards, { y: (i) => -window.innerHeight * 0.05 * Number(cards[i].dataset.depth), duration: 28 }, 74)
            .to("[data-hero-img]", { scale: 0.66, duration: 28 }, 74);

          ScrollTrigger.refresh();
        };
        if (document.fonts?.ready) document.fonts.ready.then(() => !dead && ctx.add(build));
        else build();
        return () => {
          dead = true;
          splits.forEach((s) => s.revert());
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className={a.hero} data-hero aria-labelledby="hero-h">
      <div className={a.heroStage}>
        <h1 id="hero-h" className={a.heroH1}>
          <span className={a.heroL} data-hero-l>
            The future of food security
          </span>{" "}
          <span className={a.heroR} data-hero-r>
            is being built in the desert.
          </span>
        </h1>
        <div className={a.heroMain} data-hero-main>
          <div className={a.heroImg} data-hero-img>
            <div className={a.heroZoom} data-hero-zoom>
              <Image src={P.aerialWide} alt="Innovation Oasis from the air: greenhouses and trial fields beside Al Foah Farm" fill sizes="100vw" preload />
            </div>
          </div>
          <div className={a.heroShade} data-hero-shade />
          <p className={`${a.heroH1} ${a.heroH1W}`} aria-hidden>
            <span className={a.heroL} data-hero-l>
              The future of food security
            </span>
            <span className={a.heroR} data-hero-r>
              is being built in the desert.
            </span>
          </p>
        </div>

        <div className={a.heroBar} data-hero-bar>
          <p>Accelerating the Future of Food Security</p>
          <p aria-hidden>
            Scroll <i className={a.heroCue} />
          </p>
        </div>

        {/* the collage */}
        <p className={a.heroGlance} data-hero-glance>
          <span>00</span> At a glance
        </p>
        <p className={a.heroCap} data-hero-cap>
          <b>
            34<small>ha</small>
          </b>
          <span>of undeveloped land on the opposite side of Al Foah Farm</span>
        </p>
        <ul className={a.facts} aria-label="At a glance">
          <li className={`${a.fact} ${a.factMain}`}>
            <b>
              34<small>ha</small>
            </b>
            <span>of undeveloped land on the opposite side of Al Foah Farm</span>
          </li>
          {facts.map((f) => (
            <li key={f.k} className={`${a.fact} ${a[f.k]}`} data-fact data-depth={f.depth}>
              <div className={a.factImg}>
                <Image src={f.src} alt="" fill sizes="(max-width: 900px) 50vw, 24vw" />
              </div>
              <b>{f.n}</b>
              <span>{f.t}</span>
            </li>
          ))}
          <li className={`${a.fact} ${a.f5}`} data-fact data-depth="0.6">
            <b>Silal&rsquo;s R&amp;D and venture engine</b>
            <span>Helping bridge the gap between breakthrough ideas and meaningful impact</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
