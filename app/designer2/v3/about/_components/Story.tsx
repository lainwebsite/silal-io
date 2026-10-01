"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/*
 * The director. Markup is server-rendered with data-* hooks; this file gives it time.
 * Long sections are "tracks": a tall section with a sticky 100vh stage; one scrubbed timeline per
 * track maps scroll → story. Everything else reveals as it enters. Under reduced motion nothing
 * here runs and the CSS lays every track out as plain, static content.
 */

const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
const one = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

const mobile = () => window.innerWidth < 760;
/** O lens geometry, must match about.module.css (.oRing) and scenes.ts (layout.orbit) */
const lens = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return mobile() ? { x: w * 0.5, y: h * 0.36, r: w * 0.36 } : { x: w * 0.7, y: h * 0.5, r: Math.min(w * 0.18, h * 0.32) };
};
/** Mark ring radius in px, must match scenes.ts (layout.ring) */
const ringR = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return Math.min(w * 0.16, h * 0.26) * (mobile() ? 1.6 : 1);
};

export function Story() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
      const splits: SplitText[] = [];
      let cancelled = false;

      const build = () => {
        if (cancelled) return;
        const track = (name: string) => one(`[data-seq="${name}"]`);
        const scrubTl = (el: Element | null, scrub = 1) =>
          gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: el, start: "top 65%", end: "bottom bottom", scrub, invalidateOnRefresh: true } });

        /* ── Generic reveals ─────────────────────────────── */
        q("[data-words]").forEach((el) => {
          const st = SplitText.create(el, { type: "words", wordsClass: "w" });
          splits.push(st);
          gsap.fromTo(
            st.words,
            { opacity: 0.12, y: "0.12em" },
            { opacity: 1, y: 0, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: 0.8 } },
          );
        });

        q("[data-lines]").forEach((el) => {
          const st = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "ln",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 115,
                rotate: 2.5,
                transformOrigin: "0% 100%",
                duration: 1.5,
                ease: "expo.out",
                stagger: 0.09,
                scrollTrigger: { trigger: el, start: "top 86%", once: true },
              }),
          });
          splits.push(st);
        });

        gsap.set("[data-rise]", { opacity: 0, y: 40 });
        ScrollTrigger.batch("[data-rise]", {
          start: "top 90%",
          once: true,
          onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.5, ease: "expo.out", stagger: 0.09, overwrite: true }),
        });

        q("[data-card]").forEach((el) => {
          const img = one("div", el)!;
          const inner = one("[data-card-inner]", el);
          const cap = one("figcaption", el);
          const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 88%", once: true } });
          tl.fromTo(img, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" });
          if (inner) tl.fromTo(inner, { scale: 1.35 }, { scale: 1.08, duration: 2.4, ease: "expo.out" }, 0);
          if (cap) tl.fromTo(cap, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.8);
          if (inner)
            gsap.fromTo(inner, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
        });

        /* ── Hero ────────────────────────────────────────── */
        const hero = one("[data-hero]");
        const title = one("[data-hero-title]");
        if (hero && title) {
          const st = SplitText.create(title, { type: "lines", mask: "lines", linesClass: "ln" });
          splits.push(st);
          gsap.set(st.lines, { yPercent: 120, rotate: 3, transformOrigin: "0% 100%" });
          gsap.set("[data-hero-in]", { opacity: 0, y: 24 });
          gsap.set("[data-dial]", { scale: 0.86, rotate: -70, opacity: 0 });
          const intro = () => {
            gsap
              .timeline({ delay: 0.25 })
              .to(st.lines, { yPercent: 0, rotate: 0, duration: 2, ease: "expo.out", stagger: 0.11 })
              .to("[data-dial]", { scale: 1, rotate: 0, opacity: 1, duration: 2.6, ease: "expo.out" }, 0)
              .to("[data-hero-in]", { opacity: 1, y: 0, duration: 1.4, ease: "expo.out", stagger: 0.1 }, 0.6);
          };
          const w = window as unknown as { __d3entered?: boolean };
          if (w.__d3entered) intro();
          else window.addEventListener("d3:enter", intro, { once: true });

          gsap
            .timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } })
            .to(title, { yPercent: -35, opacity: 0, ease: "none" }, 0)
            .to("[data-dial-ticks]", { rotate: 140, ease: "none" }, 0)
            .to("[data-dial-words]", { rotate: -60, ease: "none" }, 0);
        }

        /* ── Question ────────────────────────────────────── */
        {
          const el = track("question");
          if (el) {
            const one1 = one("[data-q-one]", el)!;
            const st1 = SplitText.create(one1, { type: "words", wordsClass: "w" });
            const st2 = SplitText.create(one("[data-q-two]", el)!, { type: "chars,words", charsClass: "c", mask: "chars" });
            splits.push(st1, st2);
            gsap.set(st1.words, { opacity: 0.08, filter: "blur(8px)" });
            gsap.set(st2.chars, { yPercent: 110 });
            scrubTl(el)
              .fromTo("[data-q-kick]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 6 }, 0)
              .fromTo(st1.words, { opacity: 0.08, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", stagger: 2.2, duration: 6 }, 2)
              .to(one1, { opacity: 0.22, y: -16, duration: 8 }, 30)
              .fromTo(st2.chars, { yPercent: 110 }, { yPercent: 0, stagger: 0.7, duration: 6, ease: "power3.out" }, 34)
              .fromTo("[data-q-dot]", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 6, ease: "back.out(2)" }, 52)
              .to({}, { duration: 22 })
              .to("[data-q-kick], [data-q-one], [data-q-two], [data-q-dot]", { opacity: 0, y: -30, duration: 10, stagger: 1 });
          }
        }

        /* ── A pattern: three islands that never connect ── */
        {
          const el = track("pattern");
          if (el) {
            const islands = q("[data-p-island]", el);
            gsap.set(q("[data-p-label], [data-p-line]", el), { opacity: 0, y: 24 });
            const tl = scrubTl(el).fromTo("[data-p-kick]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 4 }, 0);
            islands.forEach((isl, i) => {
              const at = 5 + i * 16;
              tl.fromTo(one("[data-p-lens]", isl), { clipPath: "circle(0% at 50% 50%)", scale: 1.2 }, { clipPath: "circle(50% at 50% 50%)", scale: 1, duration: 10, ease: "power2.out" }, at)
                .fromTo(q("[data-p-label], [data-p-line]", isl), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 6, stagger: 1.5 }, at + 4);
            });
            tl.fromTo("[data-p-gl]", { scaleX: 0 }, { scaleX: 1, duration: 8, transformOrigin: "left center" }, 56)
              .fromTo("[data-p-gr]", { scaleX: 0 }, { scaleX: 1, duration: 8, transformOrigin: "right center" }, 56)
              .fromTo("[data-p-x]", { opacity: 0, scale: 0.3, rotate: -90 }, { opacity: 1, scale: 1, rotate: 0, duration: 4, ease: "back.out(3)" }, 63)
              .fromTo("[data-p-close]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 7 }, 68)
              .to({}, { duration: 12 })
              .to(q("[data-p-island], [data-p-gl], [data-p-gr], [data-p-x], [data-p-kick], [data-p-close]", el), { opacity: 0, y: -40, duration: 8, stagger: 0.5 }, 90);
          }
        }

        /* ── Innovation → implementation ─────────────────── */
        {
          const el = track("lack");
          if (el) {
            const a = SplitText.create(one("[data-l-a]", el)!, { type: "words", wordsClass: "w", mask: "words" });
            const b = SplitText.create(one("[data-l-b]", el)!, { type: "words", wordsClass: "w", mask: "words" });
            splits.push(a, b);
            gsap.set([...a.words, ...b.words], { yPercent: 110 });
            scrubTl(el)
              .fromTo(a.words, { yPercent: 110 }, { yPercent: 0, stagger: 2, duration: 8, ease: "power3.out" }, 0)
              .fromTo(b.words, { yPercent: 110 }, { yPercent: 0, stagger: 2, duration: 8, ease: "power3.out" }, 22)
              .to(q("[data-l-inn] .w, [data-l-inn]", el), { opacity: 0.25, duration: 10 }, 46)
              .fromTo(q("[data-l-imp]", el), { color: "rgb(89, 84, 83)" }, { color: "#3CA7D2", duration: 10 }, 46)
              .to({}, { duration: 24 })
              .to(q("[data-l-a], [data-l-b]", el), { opacity: 0, y: -40, duration: 10, stagger: 2 }, 88);
          }
        }

        /* ── The land: survey ───────────────────────────── */
        {
          const sv = one("[data-survey]");
          if (sv) {
            gsap.fromTo(
              "[data-survey-img]",
              { clipPath: "inset(14% 20% 14% 20%)" },
              { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: sv, start: "top 95%", end: "top 15%", scrub: true } },
            );
            gsap.fromTo("[data-survey-img] img", { scale: 1.3 }, { scale: 1, ease: "none", scrollTrigger: { trigger: sv, start: "top bottom", end: "bottom top", scrub: true } });
            gsap.fromTo("[data-survey-box] i", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: sv, start: "top 35%", once: true } });
            const num = one("[data-count]", sv);
            if (num) {
              const o = { v: 0 };
              gsap.to(o, {
                v: Number(num.dataset.count),
                ease: "none",
                onUpdate: () => (num.textContent = String(Math.round(o.v))),
                scrollTrigger: { trigger: sv, start: "top 70%", end: "center 45%", scrub: 0.6 },
              });
            }
          }
        }

        /* ── The creation, the O opens, a place where… ──── */
        {
          const el = track("oasis");
          if (el) {
            const cNot = SplitText.create(one("[data-c-not]", el)!, { type: "lines", mask: "lines", linesClass: "ln" });
            const cIs = SplitText.create(one("[data-c-is]", el)!, { type: "lines", mask: "lines", linesClass: "ln" });
            splits.push(cNot, cIs);
            const imgs = q("[data-o-img]", el);
            const items = q("[data-place]", el);
            const caps = ["Innovation Oasis, Al Foah", "Field test", "Growth chamber", "FoodTech Challenge", "The desert edge"];
            const capEl = one("[data-o-captext]", el)!;
            const countEl = one("[data-o-count]", el)!;
            const open = () => `circle(${ringR()}px at 50% 50%)`;
            const full = () => `circle(${Math.hypot(window.innerWidth, window.innerHeight)}px at 50% 50%)`;
            const shrink = () => {
              const l = lens();
              return `circle(${l.r}px at ${l.x}px ${l.y}px)`;
            };
            const fullAt = () => {
              const l = lens();
              return `circle(${Math.hypot(window.innerWidth, window.innerHeight)}px at ${l.x}px ${l.y}px)`;
            };
            gsap.set(imgs.slice(1), { opacity: 0 });
            gsap.set([...cNot.lines, ...cIs.lines], { yPercent: 115 });
            gsap.set(items, { opacity: 0, y: 46 });
            gsap.set("[data-o-photo]", { clipPath: "circle(0px at 50% 50%)" });
            const tl = scrubTl(el, 1.2);
            tl.fromTo(cNot.lines, { yPercent: 115 }, { yPercent: 0, stagger: 1.2, duration: 5, ease: "power3.out" }, 0)
              .to(cNot.lines, { yPercent: -115, stagger: 0.8, duration: 4, ease: "power2.in" }, 9)
              .fromTo("[data-c-mark]", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 6, ease: "power2.out" }, 13)
              .fromTo(cIs.lines, { yPercent: 115 }, { yPercent: 0, stagger: 1.2, duration: 5, ease: "power3.out" }, 16)
              .to(cIs.lines, { yPercent: -115, duration: 4, ease: "power2.in" }, 27)
              // the O opens
              .fromTo("[data-o-photo]", { clipPath: "circle(0px at 50% 50%)" }, { clipPath: open, duration: 0.01, immediateRender: false }, 29.9)
              .fromTo("[data-o-photo]", { clipPath: open }, { clipPath: full, duration: 11, ease: "power2.inOut", immediateRender: false }, 30)
              .to("[data-c-mark]", { opacity: 0, scale: 1.25, duration: 5 }, 30)
              .fromTo(imgs[0], { scale: 1.35 }, { scale: 1, duration: 14, ease: "power1.out" }, 30)
              .fromTo("[data-o-cap]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 3 }, 38)
              // …and closes into the lens
              .fromTo("[data-o-photo]", { clipPath: fullAt }, { clipPath: shrink, duration: 10, ease: "power2.inOut", immediateRender: false }, 45)
              .to("[data-o-cap]", { opacity: 0, duration: 3 }, 45)
              .fromTo("[data-o-ring]", { opacity: 0, scale: 0.9, rotate: -40 }, { opacity: 1, scale: 1, rotate: 0, duration: 8, ease: "power2.out" }, 51)
              .to("[data-o-ring] span", { rotate: 220, duration: 46 }, 54);
            items.forEach((it, i) => {
              const at = 55 + i * 11;
              tl.fromTo(it, { opacity: 0, y: 46 }, { opacity: 1, y: 0, duration: 4, ease: "power3.out" }, at)
                .fromTo(imgs[i + 1], { opacity: 0, scale: 1.15 }, { opacity: 1, scale: 1, duration: 4, ease: "power2.out" }, at)
                .call(() => {
                  capEl.textContent = caps[i + 1];
                  countEl.textContent = `${String(i + 1).padStart(2, "0")} / 04`;
                }, undefined, at + 0.1)
                .call(() => {
                  capEl.textContent = caps[i];
                  countEl.textContent = `${String(Math.max(1, i)).padStart(2, "0")} / 04`;
                }, undefined, at - 0.1);
              if (i < items.length - 1) tl.to(it, { opacity: 0, y: -40, duration: 3, ease: "power2.in" }, at + 8);
            });
            tl.fromTo("[data-o-cap]", { opacity: 0 }, { opacity: 1, duration: 3, immediateRender: false }, 56).to({}, { duration: 4 }, 96);
          }
        }

        /* ── Quote: inside the big O ────────────────────── */
        {
          const el = track("quote");
          if (el) {
            const st = SplitText.create(one("[data-quote-words]", el)!, { type: "words", wordsClass: "w" });
            splits.push(st);
            gsap.set(st.words, { opacity: 0.06, filter: "blur(10px)", y: 20 });
            scrubTl(el)
              .fromTo(st.words, { opacity: 0.06, filter: "blur(10px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, stagger: 3, duration: 8 }, 5)
              .fromTo("[data-quote-by]", { opacity: 0 }, { opacity: 1, duration: 6 }, 40)
              .to({}, { duration: 30 })
              .to(q("[data-quote-words], [data-quote-by]", el), { opacity: 0, y: -30, duration: 10 }, 88);
          }
        }

        /* ── Team: columns drift at different speeds ────── */
        q("[data-team] li").forEach((li) => {
          const col = Number(li.dataset.col ?? 0);
          gsap.fromTo(
            li,
            { y: 60 + col * 50 },
            { y: -(col % 2) * 40, ease: "none", scrollTrigger: { trigger: "[data-team]", start: "top bottom", end: "bottom top", scrub: true } },
          );
          gsap.fromTo(
            one("div", li),
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: li, start: "top 92%", once: true } },
          );
        });

        /* ── The pressures → the benchmark ──────────────── */
        {
          const el = track("bench");
          if (el) {
            const items = q("[data-b-item]", el);
            const count = one("[data-b-count]", el)!;
            let last = -1;
            ScrollTrigger.create({
              trigger: el,
              start: "top top",
              end: "bottom bottom",
              onUpdate: (self) => {
                const p = self.progress / 0.7;
                const i = Math.min(items.length - 1, Math.max(0, Math.floor(p * items.length)));
                if (i !== last) {
                  last = i;
                  items.forEach((it, k) => it.toggleAttribute("data-on", k === i));
                  items.forEach((it, k) => it.toggleAttribute("data-past", k < i));
                  count.textContent = String(i + 1).padStart(2, "0");
                }
              },
            });
            gsap.set(items, { opacity: 0, yPercent: 40 });
            scrubTl(el)
              .fromTo(items, { opacity: 0, yPercent: 40 }, { opacity: 1, yPercent: 0, stagger: 1, duration: 4 }, 0)
              .to({}, { duration: 60 })
              .to(items, { opacity: 0, filter: "blur(8px)", stagger: 0.6, duration: 6 }, 70)
              .to("[data-b-kick]", { opacity: 0, duration: 4 }, 70)
              .fromTo("[data-b-end]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 8 }, 76)
              .to("[data-b-end]", { opacity: 0, y: -40, duration: 6 }, 94);
          }
        }

        /* ── Ecosystem: eight parts, one centre ─────────── */
        {
          const el = track("eco");
          if (el) {
            const t = SplitText.create(one("[data-e-title]", el)!, { type: "lines", mask: "lines", linesClass: "ln" });
            splits.push(t);
            gsap.set(t.lines, { yPercent: 115 });
            gsap.set("[data-e-label]", { opacity: 0, scale: 0.85 });
            scrubTl(el)
              .fromTo("[data-e-kick]", { opacity: 0 }, { opacity: 1, duration: 3 }, 0)
              .fromTo(t.lines, { yPercent: 115 }, { yPercent: 0, stagger: 1.5, duration: 6, ease: "power3.out" }, 1)
              .fromTo("[data-e-p1]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 5 }, 8)
              .fromTo("[data-e-label]", { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, stagger: 4.5, duration: 4, ease: "back.out(1.6)" }, 14)
              .fromTo("[data-e-core]", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 5 }, 52)
              .to("[data-e-p1]", { opacity: 0, y: -24, duration: 4 }, 58)
              .fromTo("[data-e-p2]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 6 }, 62)
              .to({}, { duration: 20 })
              .to(q("[data-e-kick], [data-e-title], [data-e-p2], [data-e-label], [data-e-core]", el), { opacity: 0, duration: 8 }, 92);
          }
        }

        /* ── Mission ─────────────────────────────────────── */
        {
          const el = track("mission");
          if (el) {
            const st = SplitText.create(one("[data-m-words]", el)!, { type: "words", wordsClass: "w" });
            splits.push(st);
            gsap.set(st.words, { opacity: 0.1, y: "0.2em" });
            scrubTl(el)
              .fromTo(st.words, { opacity: 0.1, y: "0.2em" }, { opacity: 1, y: 0, stagger: 2, duration: 6 }, 4)
              .to({}, { duration: 20 })
              .to(one("[data-m-words]", el), { opacity: 0, y: -40, duration: 10 }, 90);
          }
        }

        /* ── Journey: year odometer, lens, ticks ─────────── */
        {
          const el = track("journey");
          if (el) {
            const items = q("[data-j-item]", el);
            const imgs = q("[data-j-img]", el);
            const ticks = q("[data-j-tick]", el);
            const tens = one("[data-j-tens]", el)!;
            const ones = one("[data-j-ones]", el)!;
            const years = [2021, 2021, 2022, 2022, 2023, 2024, 2025, 2030];
            let last = -1;
            const set = (i: number) => {
              if (i === last) return;
              last = i;
              const y = years[i];
              tens.style.transform = `translateY(${-Math.floor((y % 100) / 10) * 10}%)`;
              ones.style.transform = `translateY(${-(y % 10) * 10}%)`;
              items.forEach((it, k) => it.toggleAttribute("data-on", k === i));
              imgs.forEach((it, k) => {
                it.toggleAttribute("data-on", k === i);
                it.toggleAttribute("data-past", k < i);
              });
              ticks.forEach((it, k) => it.toggleAttribute("data-on", k <= i));
            };
            set(0);
            ScrollTrigger.create({
              trigger: el,
              start: "top top",
              end: "bottom bottom",
              onUpdate: (self) => set(Math.min(items.length - 1, Math.floor(self.progress * items.length * 0.999))),
            });
            gsap.to("[data-j-ticks]", { rotate: 300, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 1 } });
          }
        }

        /* ── Finale ──────────────────────────────────────── */
        {
          const el = track("finale");
          if (el) {
            const lines = q("[data-f-line]", el);
            gsap.set(lines, { opacity: 0, y: 60, filter: "blur(10px)" });
            gsap.set("[data-f-next] a", { opacity: 0, y: 30 });
            const tl = scrubTl(el, 1.2);
            lines.forEach((l, i) => {
              const at = i * 22;
              tl.fromTo(l, { opacity: 0, y: 60, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 8, ease: "power2.out" }, at);
              if (i < lines.length - 1) tl.to(l, { opacity: 0, y: -60, filter: "blur(10px)", duration: 7, ease: "power2.in" }, at + 14);
            });
            // the last line settles under the mark as the mark lands
            tl.to(lines[lines.length - 1], { top: mobile() ? "64%" : "75%", scale: mobile() ? 0.62 : 0.56, duration: 10, ease: "power2.inOut" }, 62)
              .fromTo("[data-f-mark]", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 10, ease: "power2.out" }, 64)
              .fromTo("[data-f-next] a", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 2, duration: 8 }, 76)
              .to({}, { duration: 10 }, 90);
          }
        }

        ScrollTrigger.refresh();
      };

      if (document.fonts?.ready) document.fonts.ready.then(() => !cancelled && ctx.add(build));
      else build();

      return () => {
        cancelled = true;
        splits.forEach((s) => s.revert());
      };
    });

    return () => mm.revert();
  });

  return null;
}
