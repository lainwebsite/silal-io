"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const q = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const one = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);

/*
 * Motion director for v6/about. One easing, three reveals, used everywhere:
 *   [data-lines]  headings rise line by line out of a mask
 *   [data-words]  statements brighten word by word with the scroll
 *   [data-up]     text and list items fade up
 *   [data-wipe]   image cards open from the bottom; every [data-px] inside drifts (parallax)
 * Plus the section devices: label hairlines draw, story photos change per beat, the flow line runs,
 * principles light in turn, the journey steps through its milestones.
 * Reduced motion: nothing runs; CSS shows everything statically.
 */
export function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
      const splits: SplitText[] = [];
      let dead = false;

      const build = () => {
        if (dead) return;
        const E = "expo.out";

        // label hairlines
        q("main [data-rule]").forEach((el) =>
          gsap.from(el, { scaleX: 0, duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 92%", once: true } }),
        );

        q("main [data-lines]").forEach((el) => {
          splits.push(
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              linesClass: "ln",
              autoSplit: true,
              onSplit: (s) => gsap.from(s.lines, { yPercent: 105, duration: 1.3, ease: E, stagger: 0.08, scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
            }),
          );
        });
        q("main [data-words]").forEach((el) => {
          const st = SplitText.create(el, { type: "words", wordsClass: "w" });
          splits.push(st);
          gsap.fromTo(st.words, { opacity: 0.18 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: 0.6 } });
        });
        gsap.set("main [data-up]", { opacity: 0, y: 28 });
        ScrollTrigger.batch("main [data-up]", {
          start: "top 90%",
          once: true,
          onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.2, ease: E, stagger: 0.07, overwrite: true }),
        });

        // image cards: wipe open once, then parallax for as long as they're on screen
        q("main [data-wipe]").forEach((el) =>
          gsap.from(el, { clipPath: "inset(100% 0% 0% 0% round 6px)", duration: 1.5, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 90%", once: true } }),
        );
        q("main [data-px]").forEach((el) => {
          const frame = el.parentElement!;
          gsap.fromTo(el, { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true } });
        });

        /* ── Our Story: one sticky frame, the photo changes with each beat ── */
        const story = one("[data-story]");
        if (story) {
          const imgs = q("[data-story-img]", story);
          const beats = q("[data-beat]", story);
          const n = one("[data-story-n]", story);
          let cur = 0;
          gsap.set(imgs, { clipPath: "inset(100% 0% 0% 0%)" });
          gsap.set(imgs[0], { clipPath: "inset(0% 0% 0% 0%)" });
          beats[0]?.setAttribute("data-on", "");
          const go = (i: number) => {
            if (i === cur) return;
            const down = i > cur;
            cur = i;
            beats.forEach((b, k) => b.toggleAttribute("data-on", k === i));
            if (n) n.textContent = String(i + 1).padStart(2, "0");
            imgs.forEach((im, k) => (im.style.zIndex = k === i ? "3" : "1"));
            gsap.fromTo(
              imgs[i],
              { clipPath: down ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "expo.inOut", overwrite: true },
            );
          };
          beats.forEach((b, i) =>
            ScrollTrigger.create({ trigger: b, start: "top 55%", end: "bottom 55%", onToggle: (s) => s.isActive && go(i) }),
          );
        }

        /* ── Different: the flow line runs, nodes light in turn ── */
        const flow = one("[data-flow]");
        if (flow) {
          const nodes = q("[data-flow-node]", flow);
          gsap.fromTo(
            "[data-flow-line]",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: flow,
                start: "top 85%",
                end: "top 35%",
                scrub: 0.6,
                onUpdate: (s) => nodes.forEach((x, i) => x.toggleAttribute("data-on", s.progress >= i / (nodes.length - 1) - 0.02)),
              },
            },
          );
        }

        /* ── Mission: the leaf drifts behind the card ── */
        const mission = one("[data-mission]");
        if (mission) {
          gsap.fromTo("[data-mission-img]", { yPercent: -8, scale: 1.14 }, { yPercent: 8, scale: 1.02, ease: "none", scrollTrigger: { trigger: mission, start: "top bottom", end: "bottom top", scrub: true } });
          gsap.fromTo(mission, { clipPath: "inset(6% 4% 6% 4% round 6px)" }, { clipPath: "inset(0% 0% 0% 0% round 6px)", ease: "none", scrollTrigger: { trigger: mission, start: "top bottom", end: "top 20%", scrub: true } });
        }

        /* ── Principles: one row lit at a time ── */
        const rows = q("[data-princ-row]");
        rows.forEach((r, i) =>
          ScrollTrigger.create({
            trigger: r,
            start: "top 62%",
            end: "bottom 62%",
            onToggle: (s) => s.isActive && rows.forEach((x, k) => x.toggleAttribute("data-on", k === i)),
          }),
        );
        rows[0]?.setAttribute("data-on", "");

        /* ── Journey: sticky; the frame wipes to each milestone, the year turns ── */
        const jSec = one("[data-journey]");
        if (jSec) {
          const imgs = q("[data-jimg]", jSec);
          const idx = q("[data-jidx]", jSec);
          const texts = q("[data-jtext]", jSec);
          const year = one("[data-jyear]", jSec)!;
          const whens = texts.map((t) => one("p", t)?.textContent ?? "");
          let cur = 0;
          const set = (i: number) => {
            idx.forEach((x, k) => {
              x.toggleAttribute("data-on", k === i);
              x.toggleAttribute("data-past", k < i);
            });
            texts.forEach((x, k) => x.toggleAttribute("data-on", k === i));
          };
          gsap.set(imgs, { clipPath: "inset(100% 0% 0% 0%)", zIndex: 1 });
          gsap.set(imgs[0], { clipPath: "inset(0% 0% 0% 0%)", zIndex: 2 });
          set(0);
          ScrollTrigger.create({
            trigger: jSec,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (s) => {
              const i = Math.min(imgs.length - 1, Math.floor(s.progress * imgs.length * 0.999));
              if (i === cur) return;
              const down = i > cur;
              const prev = cur;
              cur = i;
              set(i);
              gsap.set(imgs, { zIndex: 1 });
              gsap.set(imgs[prev], { zIndex: 2 });
              gsap.set(imgs[i], { zIndex: 3 });
              gsap.fromTo(
                imgs[i],
                { clipPath: down ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "expo.inOut", overwrite: true },
              );
              gsap.fromTo(one("img", imgs[i]), { scale: 1.15 }, { scale: 1, duration: 1.8, ease: E });
              gsap
                .timeline()
                .to(year, { yPercent: down ? -100 : 100, opacity: 0, duration: 0.3, ease: "power2.in" })
                .add(() => void (year.textContent = whens[i]))
                .fromTo(year, { yPercent: down ? 100 : -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, ease: E });
            },
          });
          // the progress rail fills with the scroll
          gsap.fromTo("[data-jrail]", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: jSec, start: "top top", end: "bottom bottom", scrub: true } });
        }

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
