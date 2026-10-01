"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const q = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const one = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);

/*
 * Motion director for v4/about. Everything here imitates a mechanic observed in the two references
 * (see page.tsx) and is tuned to IO: expo easing, ~1.2–1.6s reveals, scrubbed scroll scenes.
 * Reduced motion: nothing runs; CSS shows every section statically.
 */
export function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
      const splits: SplitText[] = [];
      let dead = false;
      const desktop = window.matchMedia("(min-width: 901px)").matches;

      const build = () => {
        if (dead) return;

        /* Hero (Anthem): slow crossfading frames; on scroll the panel cuts its bottom corners and becomes a card */
        const frames = q("[data-hero-frame]");
        gsap.set(frames, { opacity: 0 });
        gsap.set(frames[0], { opacity: 1 });
        const loop = gsap.timeline({ repeat: -1 });
        frames.forEach((f, i) => {
          const next = frames[(i + 1) % frames.length];
          const img = one("img", f);
          loop.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 7, ease: "none" }, i * 6);
          loop.to(next, { opacity: 1, duration: 1.6, ease: "power2.inOut" }, i * 6 + 5.2);
          loop.to(f, { opacity: 0, duration: 0.01 }, i * 6 + 6.8);
          loop.set(next, { zIndex: 2 }, i * 6 + 5.2).set(f, { zIndex: 1 }, i * 6 + 6.8);
        });
        const title = one("[data-hero-title]");
        if (title) {
          const st = SplitText.create(title, { type: "lines", mask: "lines", linesClass: "ln" });
          splits.push(st);
          gsap.from(st.lines, { yPercent: 110, duration: 1.6, ease: "expo.out", stagger: 0.1, delay: 0.25 });
          gsap.from("[data-hero-in]", { opacity: 0, y: 20, duration: 1.2, ease: "expo.out", delay: 0.8, stagger: 0.1 });
        }
        gsap
          .timeline({ scrollTrigger: { trigger: "[data-hero-panel]", start: "top top", end: "bottom top", scrub: true } })
          .fromTo("[data-hero-panel]", { "--cb": "0px", "--ins": "0px" }, { "--cb": desktop ? "90px" : "40px", "--ins": desktop ? "18px" : "8px", ease: "none" }, 0)
          .to("[data-hero-text]", { yPercent: -30, opacity: 0.2, ease: "none" }, 0);

        /* Lines rise from masks */
        q("[data-lines]").forEach((el) => {
          const st = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "ln",
            autoSplit: true,
            onSplit: (s) =>
              gsap.from(s.lines, { yPercent: 110, duration: 1.3, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
          });
          splits.push(st);
        });

        /* Words brighten as you read (Anthem) */
        q("[data-words]").forEach((el) => {
          const st = SplitText.create(el, { type: "words", wordsClass: "w" });
          splits.push(st);
          gsap.fromTo(st.words, { opacity: 0.18 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 } });
        });

        gsap.set("[data-rise]", { opacity: 0, y: 32 });
        ScrollTrigger.batch("[data-rise]", {
          start: "top 90%",
          once: true,
          onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.3, ease: "expo.out", stagger: 0.07, overwrite: true }),
        });

        /* Cut-corner photos drift at their own speed (Anthem) */
        q("[data-drift]").forEach((el) => {
          const amt = Number(el.dataset.drift || 0);
          gsap.fromTo(el, { yPercent: amt }, { yPercent: -amt, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
          gsap.from(one("img", el), { scale: 1.25, duration: 2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
        });

        /* Notched rules draw (Hut 8) */
        q("[data-notch]").forEach((el) =>
          gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease: "expo.inOut", transformOrigin: "left center", scrollTrigger: { trigger: el, start: "top 90%", once: true } }),
        );

        /* Facts: tiles and photos travel sideways while pinned (Anthem) */
        const tilesSec = one("[data-tiles]");
        const tilesTrack = one("[data-tiles-track]");
        if (tilesSec && tilesTrack) {
          const dist = () => tilesTrack.scrollWidth - window.innerWidth + 40;
          gsap.to(tilesTrack, {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: { trigger: tilesSec, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 },
          });
          gsap.from(q("li", tilesTrack), { yPercent: 18, opacity: 0, stagger: 0.06, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: tilesSec, start: "top 70%", once: true } });
        }

        /* Team: sideways track while pinned (Anthem) */
        const teamSec = one("[data-team]");
        const teamTrack = one("[data-team-track]");
        if (teamSec && teamTrack && desktop) {
          const dist = () => teamTrack.scrollWidth - teamTrack.clientWidth;
          gsap.to(teamTrack, {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: { trigger: teamSec, start: "top top", end: () => `+=${dist() + window.innerHeight * 0.3}`, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 },
          });
        }

        /* Why here: the giant title slides across the terrain; copy swaps half way (Hut 8 "Our Impact") */
        const terrain = one("[data-terrain]");
        if (terrain) {
          const copy = q("[data-terrain-copy] > p", terrain);
          gsap.set(copy.slice(3), { opacity: 0, y: 20 });
          gsap
            .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: terrain, start: "top top", end: "bottom bottom", scrub: 0.8 } })
            .fromTo("[data-terrain-title]", { xPercent: 55 }, { xPercent: -8, duration: 45 }, 0)
            .to("[data-terrain-title]", { color: "rgb(89 84 83 / 0.28)", duration: 10 }, 42)
            .fromTo(copy.slice(0, 3), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 8, stagger: 2 }, 6)
            .to(copy[2], { opacity: 0, y: -16, duration: 6 }, 52)
            .to(copy[3], { opacity: 1, y: 0, duration: 6 }, 56)
            .to({}, { duration: 30 }, 70);
        }

        /* The giant list runs past the guide rule (Hut 8 "Powering the Future") */
        const list = one("[data-list]");
        const listTrack = one("[data-list-track]");
        if (list && listTrack) {
          const items = q("[data-list-item]", listTrack);
          const rule = () => window.innerHeight * 0.5;
          const offset = (i: number) => items[i].offsetTop + items[i].offsetHeight / 2;
          let last = -1;
          gsap.to(listTrack, {
            y: () => rule() - offset(items.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: list,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
              onRefresh: () => gsap.set(listTrack, { y: rule() - offset(0) }),
              onUpdate: () => {
                const y = Number(gsap.getProperty(listTrack, "y"));
                let best = 0;
                let bd = Infinity;
                items.forEach((it, i) => {
                  const d = Math.abs(y + offset(i) - rule());
                  if (d < bd) {
                    bd = d;
                    best = i;
                  }
                });
                if (best !== last) {
                  last = best;
                  items.forEach((it, i) => it.toggleAttribute("data-on", i === best));
                }
              },
            },
          });
          gsap.set(listTrack, { y: rule() - offset(0) });
          items[0]?.setAttribute("data-on", "");
        }

        /* Mission panel cuts its corners as it leaves (Anthem) */
        const mission = one("[data-mission]");
        if (mission) {
          gsap.fromTo(mission, { "--c": "0px" }, { "--c": desktop ? "80px" : "36px", ease: "none", scrollTrigger: { trigger: mission, start: "center center", end: "bottom top", scrub: true } });
          gsap.fromTo(one("img", mission), { scale: 1.18 }, { scale: 1, ease: "none", scrollTrigger: { trigger: mission, start: "top bottom", end: "bottom top", scrub: true } });
        }

        /* Principles: the blue bar moves through the list (Anthem "What we do") */
        const rows = q("[data-princ-row]");
        rows.forEach((r, i) =>
          ScrollTrigger.create({
            trigger: r,
            start: "top 58%",
            end: "bottom 58%",
            onToggle: (s) => {
              if (s.isActive) rows.forEach((x, k) => x.toggleAttribute("data-on", k === i));
            },
          }),
        );

        /* Journey: sticky steps; the frame folds to a sliver and opens on the next photo (Anthem process) */
        const jSec = one("[data-journey]");
        if (jSec) {
          const imgs = q("[data-jimg]", jSec);
          const idx = q("[data-jidx]", jSec);
          const texts = q("[data-jtext]", jSec);
          const count = one("[data-jcount]", jSec)!;
          const frame = one("[data-jframe]", jSec)!;
          const set = (i: number) => {
            idx.forEach((x, k) => x.toggleAttribute("data-on", k === i));
            texts.forEach((x, k) => x.toggleAttribute("data-on", k === i));
            count.textContent = String(i + 1).padStart(2, "0");
          };
          let cur = 0;
          gsap.set(imgs, { opacity: 0 });
          gsap.set(imgs[0], { opacity: 1 });
          set(0);
          const full = "polygon(6% 0%, 100% 0%, 100% 94%, 94% 100%, 0% 100%, 0% 6%)";
          const sliver = "polygon(18% 46%, 86% 40%, 82% 52%, 78% 56%, 14% 62%, 18% 50%)";
          let tl: gsap.core.Timeline | null = null;
          ScrollTrigger.create({
            trigger: jSec,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (s) => {
              const i = Math.min(imgs.length - 1, Math.floor(s.progress * imgs.length * 0.999));
              if (i === cur) return;
              const prev = cur;
              cur = i;
              set(i);
              tl?.kill();
              tl = gsap
                .timeline()
                .to(frame, { clipPath: sliver, duration: 0.45, ease: "power3.in" })
                .set(imgs[prev], { opacity: 0 })
                .set(imgs[i], { opacity: 1 })
                .fromTo(one("img", imgs[i]), { scale: 1.15 }, { scale: 1, duration: 1.4, ease: "expo.out" })
                .to(frame, { clipPath: full, duration: 0.8, ease: "expo.out" }, "<");
            },
          });
        }

        /* Watch strip: slow pan */
        const watch = one("[data-watch]");
        if (watch)
          gsap.fromTo(one("img", watch), { scale: 1.2, yPercent: -4 }, { scale: 1, yPercent: 4, ease: "none", scrollTrigger: { trigger: watch, start: "top bottom", end: "bottom top", scrub: true } });

        ScrollTrigger.sort();
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
  });
  return null;
}
