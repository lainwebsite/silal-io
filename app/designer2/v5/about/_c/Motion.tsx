"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const q = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const one = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);

/*
 * Motion director for v5/about. Scroll-driven chapters (kept from v4, after Hut 8 + Anthem), every
 * movement expressed with IO's own devices: hairlines that draw, square frames that wipe, the mark
 * that settles, words that brighten. Reduced motion: nothing runs; CSS shows everything statically.
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

        /* ── Hero: the website mock assembles — mark settles, title rises, the hairline drops from the "i"
              and runs under the title, the photo opens, the two guideline cards slide in ── */
        const title = one("[data-hero-title]");
        if (title) {
          const st = SplitText.create(title, { type: "lines", mask: "lines", linesClass: "ln" });
          splits.push(st);
          gsap
            .timeline({ delay: 0.15 })
            .from("[data-hero-mark]", { yPercent: -12, opacity: 0, duration: 1.6, ease: "expo.out" }, 0)
            .from(st.lines, { yPercent: 110, duration: 1.4, ease: "expo.out", stagger: 0.09 }, 0.2)
            .from("[data-hero-in]", { opacity: 0, y: 14, duration: 1, ease: "expo.out" }, 0.3)
            .from("[data-hero-v]", { scaleY: 0, transformOrigin: "top center", duration: 0.9, ease: "power3.inOut" }, 0.45)
            .from("[data-hero-h]", { scaleX: 0, transformOrigin: "right center", duration: 1.2, ease: "expo.inOut" }, 1.15)
            .from("[data-hero-media]", { clipPath: "inset(0% 0% 100% 0%)", duration: 1.6, ease: "expo.inOut" }, 0.7)
            .from("[data-hero-img]", { scale: 1.2, duration: 2.2, ease: "expo.out" }, 0.7)
            .from("[data-hero-cards] > *", { yPercent: 40, opacity: 0, duration: 1.2, ease: "expo.out", stagger: 0.12 }, 1.5);
        }
        // scroll: the photo grows from the page margins to full bleed (Anthem's panel, in square IO form)
        gsap
          .timeline({ scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true } })
          .fromTo("[data-hero-media]", { "--inset": "var(--gx)" }, { "--inset": "0px", ease: "none", duration: 0.4 }, 0)
          .to("[data-hero-img]", { yPercent: 12, ease: "none", duration: 1 }, 0)
          .to("[data-hero-cards]", { yPercent: -30, ease: "none", duration: 1 }, 0);

        /* ── Guideline page headers: the hairline draws ── */
        q("[data-head-rule]").forEach((el) =>
          gsap.from(el, { scaleX: 0, duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 92%", once: true } }),
        );

        /* ── Text ── */
        q("[data-lines]").forEach((el) => {
          splits.push(
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              linesClass: "ln",
              autoSplit: true,
              onSplit: (s) => gsap.from(s.lines, { yPercent: 110, duration: 1.3, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
            }),
          );
        });
        q("[data-words]").forEach((el) => {
          const st = SplitText.create(el, { type: "words", wordsClass: "w" });
          splits.push(st);
          gsap.fromTo(st.words, { opacity: 0.16 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 } });
        });
        gsap.set("[data-rise]", { opacity: 0, y: 30 });
        ScrollTrigger.batch("[data-rise]", {
          start: "top 90%",
          once: true,
          onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.3, ease: "expo.out", stagger: 0.07, overwrite: true }),
        });
        q("[data-reveal]").forEach((el) => {
          gsap.from(el, { clipPath: "inset(100% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
          const img = one("img", el);
          if (img) gsap.fromTo(img, { scale: 1.2 }, { scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
        });

        /* ── Facts: square guideline cards travel sideways while pinned ── */
        const facts = one("[data-facts]");
        const factsTrack = one("[data-facts-track]");
        if (facts && factsTrack) {
          const dist = () => Math.max(0, factsTrack.scrollWidth - factsTrack.clientWidth);
          if (desktop && dist() > 0)
            gsap.to(factsTrack, {
              x: () => -dist(),
              ease: "none",
              scrollTrigger: { trigger: facts, start: "top top", end: () => `+=${dist() + window.innerHeight * 0.4}`, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 },
            });
          gsap.from(q("li", factsTrack), { y: 60, opacity: 0, stagger: 0.08, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: facts, start: "top 75%", once: true } });
        }

        /* ── Team: sideways track while pinned ── */
        const teamSec = one("[data-team]");
        const teamTrack = one("[data-team-track]");
        if (teamSec && teamTrack && desktop) {
          const dist = () => Math.max(0, teamTrack.scrollWidth - teamTrack.clientWidth);
          gsap.to(teamTrack, {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: { trigger: teamSec, start: "top top", end: () => `+=${dist() + window.innerHeight * 0.4}`, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 },
          });
        }

        /* ── Why here: the title slides across the terrain; the copy hands over half way ── */
        const terrain = one("[data-terrain]");
        if (terrain) {
          const copy = q("[data-terrain-copy] > p", terrain);
          gsap.set(copy, { opacity: 0, y: 20 });
          gsap
            .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: terrain, start: "top top", end: "bottom bottom", scrub: 0.8 } })
            .fromTo("[data-terrain-title]", { xPercent: 50 }, { xPercent: -6, duration: 45 }, 0)
            .to("[data-terrain-title]", { opacity: 0.22, duration: 10 }, 40)
            .to(copy.slice(0, 2), { opacity: 1, y: 0, duration: 8, stagger: 2 }, 6)
            .to(copy[1], { opacity: 0, y: -16, duration: 6 }, 50)
            .to(copy[2], { opacity: 1, y: 0, duration: 6 }, 54)
            .to({}, { duration: 30 }, 70);
        }

        /* ── Different: the list runs past the hairline, one line lit ── */
        const list = one("[data-list]");
        const listTrack = one("[data-list-track]");
        if (list && listTrack) {
          const items = q("[data-list-item]", listTrack);
          const rule = () => window.innerHeight * 0.56;
          const offset = (i: number) => items[i].offsetTop + items[i].offsetHeight / 2;
          let last = -1;
          const light = () => {
            const y = Number(gsap.getProperty(listTrack, "y"));
            let best = 0;
            let bd = Infinity;
            items.forEach((_, i) => {
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
          };
          gsap.fromTo(
            listTrack,
            { y: () => rule() - offset(0) },
            {
              y: () => rule() - offset(items.length - 1),
              ease: "none",
              immediateRender: true,
              scrollTrigger: { trigger: list, start: "top top", end: "bottom bottom", scrub: 0.6, invalidateOnRefresh: true, onUpdate: light, onRefresh: light },
            },
          );
          light();
        }

        /* ── Mission: the leaf drifts, the cover hairline draws ── */
        const mission = one("[data-mission]");
        if (mission) {
          gsap.fromTo("[data-mission-img]", { yPercent: -8, scale: 1.12 }, { yPercent: 8, scale: 1, ease: "none", scrollTrigger: { trigger: mission, start: "top bottom", end: "bottom top", scrub: true } });
        }

        /* ── Principles: the IO-Blue bar moves through the list ── */
        const rows = q("[data-princ-row]");
        rows.forEach((r, i) =>
          ScrollTrigger.create({
            trigger: r,
            start: "top 60%",
            end: "bottom 60%",
            onToggle: (s) => s.isActive && rows.forEach((x, k) => x.toggleAttribute("data-on", k === i)),
          }),
        );
        rows[0]?.setAttribute("data-on", "");

        /* ── Journey: sticky steps; the square frame wipes up to the next milestone ── */
        const jSec = one("[data-journey]");
        if (jSec) {
          const imgs = q("[data-jimg]", jSec);
          const idx = q("[data-jidx]", jSec);
          const texts = q("[data-jtext]", jSec);
          const count = one("[data-jcount]", jSec)!;
          const year = one("[data-jyear]", jSec)!;
          const whens = texts.map((t) => one("p", t)?.textContent ?? "");
          let cur = 0;
          const set = (i: number) => {
            idx.forEach((x, k) => {
              x.toggleAttribute("data-on", k === i);
              x.toggleAttribute("data-past", k < i);
            });
            texts.forEach((x, k) => x.toggleAttribute("data-on", k === i));
            count.textContent = String(i + 1).padStart(2, "0");
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
              gsap.fromTo(one("img", imgs[i]), { scale: 1.18 }, { scale: 1, duration: 1.8, ease: "expo.out" });
              gsap
                .timeline()
                .to(year, { yPercent: down ? -110 : 110, opacity: 0, duration: 0.35, ease: "power2.in" })
                .add(() => void (year.textContent = whens[i]))
                .fromTo(year, { yPercent: down ? 110 : -110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out" });
            },
          });
        }

        /* ── Virtual tour strip ── */
        const watch = one("[data-watch]");
        if (watch)
          gsap.fromTo(one("img", watch), { scale: 1.2, yPercent: -5 }, { scale: 1, yPercent: 5, ease: "none", scrollTrigger: { trigger: watch, start: "top bottom", end: "bottom top", scrub: true } });

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
