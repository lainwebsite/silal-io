"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const q = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const one = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/* Page themes. All rgba() so they mix number by number. */
type Theme = { bg: string; fg: string; soft: string; line: string; card: string; accent: string; dark: boolean };
const THEMES: Record<string, Theme> = {
  light: { bg: "rgba(255,255,255,1)", fg: "rgba(52,48,47,1)", soft: "rgba(107,110,112,1)", line: "rgba(89,84,83,0.14)", card: "rgba(244,244,242,1)", accent: "rgba(28,114,153,1)", dark: false },
  paper: { bg: "rgba(242,242,239,1)", fg: "rgba(52,48,47,1)", soft: "rgba(107,110,112,1)", line: "rgba(89,84,83,0.16)", card: "rgba(255,255,255,1)", accent: "rgba(28,114,153,1)", dark: false },
  dark: { bg: "rgba(47,43,42,1)", fg: "rgba(255,255,255,1)", soft: "rgba(255,255,255,0.66)", line: "rgba(255,255,255,0.16)", card: "rgba(255,255,255,0.06)", accent: "rgba(184,224,240,1)", dark: true },
  green: { bg: "rgba(1,72,31,1)", fg: "rgba(255,255,255,1)", soft: "rgba(255,255,255,0.7)", line: "rgba(255,255,255,0.18)", card: "rgba(255,255,255,0.08)", accent: "rgba(184,224,240,1)", dark: true },
};
const KEYS = ["bg", "fg", "soft", "line", "card", "accent"] as const;

/*
 * Motion director for v8/about — one continuous page.
 *  · Page colour: each section's theme is mixed in by scroll as it arrives (no section edges).
 *  · Hero: the photo opens from a card to the full screen and dims into the dark introduction.
 *  · Story: one sticky photo, wiped by each beat (scrubbed both ways); the key line fills as you read.
 *  · "A place where…" and the Journey: horizontal tracks driven by vertical scroll (sticky, no pin-spacer).
 *  · People: the CEO photo opens; team columns drift at different speeds.
 *  · Why Here: constraint → testbed wipe; the pressures light in turn.
 *  · Mission + closing: the photo card opens to the full width.
 *  · Everywhere: lines rise, words brighten, items fade up, photos drift.
 * Reduced motion: nothing runs; CSS gives each section its own static theme.
 */
export function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      { motion: "(prefers-reduced-motion: no-preference)", desk: "(min-width: 901px)" },
      (ctx) => {
        const { motion, desk } = ctx.conditions as { motion: boolean; desk: boolean };
        if (!motion) return;
        const splits: SplitText[] = [];
        let dead = false;
        const root = document.getElementById("d8-main")!.parentElement as HTMLElement;
        const E = "expo.out";

        const build = () => {
          if (dead) return;

          /* ── page colour ── */
          const apply = (t: Theme) => {
            KEYS.forEach((k) => root.style.setProperty(`--${k}`, t[k]));
            root.toggleAttribute("data-dark", t.dark);
          };
          const mix = (a: Theme, b: Theme, p: number) => {
            KEYS.forEach((k) => root.style.setProperty(`--${k}`, gsap.utils.interpolate(a[k], b[k], p) as string));
            root.toggleAttribute("data-dark", p > 0.5 ? b.dark : a.dark);
          };
          const secs = q("main [data-theme]");
          apply(THEMES[secs[0]?.dataset.theme ?? "light"]);
          secs.forEach((sec, i) => {
            if (!i) return;
            const a = THEMES[secs[i - 1].dataset.theme!];
            const b = THEMES[sec.dataset.theme!];
            if (a === b) return;
            // the hero hands over while its dimmed photo still fills the screen
            const early = secs[i - 1].hasAttribute("data-hero");
            ScrollTrigger.create({
              trigger: sec,
              start: early ? "top bottom" : "top 72%",
              end: early ? "top 88%" : "top 46%",
              onUpdate: (s) => mix(a, b, s.progress),
              onLeave: () => apply(b),
              onLeaveBack: () => apply(a),
            });
          });
          ctx.add(() => () => {
            KEYS.forEach((k) => root.style.removeProperty(`--${k}`));
            root.removeAttribute("data-dark");
          });

          /* ── chapter thread ── */
          const ch = one("[data-ch]");
          const chN = one("[data-ch-n]");
          const chName = one("[data-ch-name]");
          if (ch && chN && chName) {
            let curName = "";
            const chapters = q("main [data-chapter]");
            chapters.forEach((sec, i) =>
              ScrollTrigger.create({
                trigger: sec,
                start: "top 50%",
                end: "bottom 50%",
                onToggle: (s) => {
                  if (s.isActive) {
                    ch.setAttribute("data-on", "");
                    const name = sec.dataset.chapter!;
                    if (name !== curName) {
                      curName = name;
                      gsap.timeline()
                        .to([chN, chName], { yPercent: -100, opacity: 0, duration: 0.25, ease: "power2.in" })
                        .add(() => {
                          chN.textContent = sec.dataset.n!;
                          chName.textContent = name;
                        })
                        .fromTo([chN, chName], { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: E });
                    }
                  } else if (i === 0 && s.direction < 0) {
                    ch.removeAttribute("data-on");
                  }
                },
                onUpdate: (s) => ch.style.setProperty("--cp", String(s.progress)),
              }),
            );
          }

          // the thread steps aside for the footer
          const foot = document.querySelector("footer");
          if (ch && foot)
            ScrollTrigger.create({
              trigger: foot,
              start: "top 92%",
              onEnter: () => ch.removeAttribute("data-on"),
              onLeaveBack: () => ch.setAttribute("data-on", ""),
            });

          /* ── generic reveals ── */
          q("main [data-lines]").forEach((el) =>
            splits.push(
              SplitText.create(el, {
                type: "lines",
                mask: "lines",
                linesClass: "ln",
                autoSplit: true,
                onSplit: (s) => gsap.from(s.lines, { yPercent: 105, duration: 1.2, ease: E, stagger: 0.07, scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
              }),
            ),
          );
          q("main [data-words]").forEach((el) => {
            const st = SplitText.create(el, { type: "words", wordsClass: "w" });
            splits.push(st);
            gsap.fromTo(st.words, { opacity: 0.2 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: 0.6 } });
          });
          gsap.set("main [data-up]", { opacity: 0, y: 24 });
          ScrollTrigger.batch("main [data-up]", {
            start: "top 92%",
            once: true,
            onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.1, ease: E, stagger: 0.06, overwrite: true }),
          });

          /* ── hero ── */
          const hero = one("[data-hero]");
          if (hero) {
            const top = one("[data-hero-top]", hero)!;
            const media = one("[data-hero-media]", hero)!;
            const gx = () => parseFloat(getComputedStyle(root).getPropertyValue("--gx")) || 40;
            const startClip = () => {
              const t = Math.min(64, Math.max(40, ((top.offsetHeight + 28) / window.innerHeight) * 100));
              return `inset(${t}% ${gx()}px ${Math.round(gx() * 0.6)}px ${gx()}px round 4px)`;
            };
            const h1 = SplitText.create(one("[data-hero-h1]", hero)!, { type: "lines", mask: "lines", linesClass: "ln" });
            splits.push(h1);
            gsap.set(media, { clipPath: startClip() });
            gsap.set("[data-hero-img]", { scale: 1.12 });
            gsap.set("[data-hero-glance] li", { opacity: 0, y: 24 });
            gsap
              .timeline({ delay: 0.1 })
              .from(h1.lines, { yPercent: 105, duration: 1.3, ease: E, stagger: 0.08 }, 0.1)
              .from(q("[data-hero-in]", hero), { opacity: 0, y: 14, duration: 1, ease: E, stagger: 0.1 }, 0.35)
              .from(media, { clipPath: () => startClip().replace(/inset\(([\d.]+)%/, "inset(100%"), duration: 1.5, ease: "expo.inOut" }, 0.3)
              .fromTo("[data-hero-img]", { scale: 1.3 }, { scale: 1.12, duration: 2.2, ease: E }, 0.3);
            gsap
              .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: hero, start: "top top", end: "bottom bottom", scrub: 0.6, invalidateOnRefresh: true } })
              .fromTo(media, { clipPath: startClip }, { clipPath: "inset(0% 0px 0px 0px round 0px)", duration: 55, ease: "power2.inOut", immediateRender: false }, 0)
              .fromTo("[data-hero-img]", { scale: 1.12 }, { scale: 1, duration: 60, immediateRender: false }, 0)
              .to(top, { yPercent: -35, opacity: 0, duration: 35 }, 0)
              .fromTo("[data-hero-glance] li", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 14, stagger: 3 }, 42)
              .fromTo("[data-hero-dim]", { opacity: 0.1 }, { opacity: 1, duration: 30 }, 70);
          }

          /* ── story: sticky photo wiped by each beat; the key line fills ── */
          const story = one("[data-story]");
          if (story) {
            const imgs = q("[data-story-img]", story);
            const tags = q("[data-story-tag]", story);
            const beats = q("[data-beat]", story);
            gsap.set(imgs.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
            beats.forEach((b, i) => {
              gsap.fromTo(b, { opacity: 0.18, y: 40 }, { opacity: 1, y: 0, ease: "none", scrollTrigger: { trigger: b, start: "top 88%", end: "top 52%", scrub: 0.5 } });
              ScrollTrigger.create({ trigger: b, start: "top 60%", end: "bottom 60%", onToggle: (s) => s.isActive && tags.forEach((t, k) => t.toggleAttribute("data-on", k === i)) });
              if (!i || !imgs[i]) return;
              gsap
                .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: b, start: "top 85%", end: "top 40%", scrub: 0.5 } })
                .fromTo(imgs[i], { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", immediateRender: false }, 0)
                .fromTo(one("img", imgs[i]), { scale: 1.2 }, { scale: 1 }, 0)
                .to(one("img", imgs[i - 1]), { scale: 1.08, yPercent: -4 }, 0);
            });
            tags[0]?.setAttribute("data-on", "");
          }
          q("[data-fill]").forEach((el) => {
            const spans = q("span", el);
            const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 40%", scrub: 0.5 } });
            spans.forEach((sp) => tl.fromTo(sp, { backgroundPositionX: "100%" }, { backgroundPositionX: "0%" }));
          });

          /* ── horizontal tracks (desktop) ── */
          if (desk) {
            q("[data-hs]").forEach((sec) => {
              const track = one("[data-hs-track]", sec)!;
              const bar = one("[data-hs-bar]", sec);
              const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
              const size = () => (sec.style.height = `${dist() + window.innerHeight * 1.15}px`);
              size();
              ScrollTrigger.addEventListener("refreshInit", size);
              ctx.add(() => () => {
                ScrollTrigger.removeEventListener("refreshInit", size);
                sec.style.height = "";
              });
              const cards = q("[data-jcard]", sec);
              const year = one("[data-jyear]", sec);
              let curYear = "";
              const tl = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: sec,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 0.6,
                  invalidateOnRefresh: true,
                  onUpdate: (s) => {
                    if (bar) bar.style.transform = `scaleX(${0.06 + s.progress * 0.94})`;
                    if (!year || !cards.length) return;
                    // the year of the card nearest the reading line (a third in)
                    const line = window.innerWidth * 0.36;
                    let best = cards[0];
                    let bd = Infinity;
                    cards.forEach((c) => {
                      const r = c.getBoundingClientRect();
                      const d = Math.abs(r.left - line);
                      if (d < bd) {
                        bd = d;
                        best = c;
                      }
                      c.toggleAttribute("data-on", false);
                    });
                    best.toggleAttribute("data-on", true);
                    const w = best.dataset.when!;
                    if (w !== curYear) {
                      curYear = w;
                      gsap.timeline()
                        .to(year, { yPercent: -100, opacity: 0, duration: 0.2, ease: "power2.in" })
                        .add(() => void (year.textContent = w))
                        .fromTo(year, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: E });
                    }
                  },
                },
              });
              tl.to(track, { x: () => -dist(), duration: 1 }, 0).fromTo(q("[data-hs-img]", sec), { xPercent: -6 }, { xPercent: 6, duration: 1 }, 0);
            });
          }

          /* ── people ── */
          const ceo = one("[data-ceo]");
          if (ceo) {
            gsap
              .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: ceo, start: "top 85%", end: "top 30%", scrub: 0.6 } })
              .fromTo("[data-ceo-img]", { clipPath: "inset(0% 35% 0% 0% round 4px)" }, { clipPath: "inset(0% 0% 0% 0% round 4px)" }, 0)
              .fromTo("[data-ceo-in]", { scale: 1.25 }, { scale: 1 }, 0);
          }
          const team = one("[data-team]");
          if (team && desk) {
            q("[data-speed]", team).forEach((m) => {
              const sp = Number(m.dataset.speed);
              gsap.fromTo(m, { y: sp * 60 }, { y: -sp * 60, ease: "none", scrollTrigger: { trigger: team, start: "top bottom", end: "bottom top", scrub: 0.6 } });
            });
          }

          /* ── why here: constraint → testbed ── */
          const wipe = one("[data-wipe]");
          if (wipe) {
            gsap
              .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: wipe, start: "top top", end: "bottom bottom", scrub: 0.6 } })
              .fromTo("[data-wipe-frame]", { clipPath: "inset(7% 4% 7% 4% round 4px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 25 }, 0)
              .fromTo("[data-wipe-b]", { clipPath: "inset(0% 0% 0% 100%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 40, ease: "power2.inOut" }, 30)
              .fromTo("[data-wipe-b] img", { scale: 1.15 }, { scale: 1, duration: 50 }, 30)
              .to("[data-wipe-a]", { opacity: 0, yPercent: -30, duration: 12 }, 38)
              .fromTo("[data-wipe-b2]", { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 14 }, 52)
              .to({}, { duration: 16 }, 84);
          }
          const press = one("[data-press]");
          if (press)
            q("li", press).forEach((li) =>
              gsap.fromTo(li, { opacity: 0.2, x: -16 }, { opacity: 1, x: 0, ease: "none", scrollTrigger: { trigger: li, start: "top 85%", end: "top 60%", scrub: 0.5 } }),
            );

          /* ── different: icons draw, the flow runs ── */
          const tog = one("[data-together]");
          if (tog) {
            const items = q("li", tog);
            gsap.set(items, { opacity: 0, y: 20 });
            gsap.set(q("path", tog), { strokeDasharray: 1, strokeDashoffset: 1 });
            ScrollTrigger.create({
              trigger: tog,
              start: "top 80%",
              once: true,
              onEnter: () => {
                gsap.to(items, { opacity: 1, y: 0, duration: 1, ease: E, stagger: 0.06 });
                gsap.to(q("path", tog), { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut", stagger: 0.06, delay: 0.2 });
              },
            });
          }
          q("[data-flow]").forEach((flow) => {
            const nodes = q("[data-flow-node]", flow);
            gsap.fromTo(q("[data-flow-line]", flow), { scaleX: 0 }, {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: flow,
                start: "top 85%",
                end: "top 45%",
                scrub: 0.6,
                onUpdate: (s) => nodes.forEach((n, i) => n.toggleAttribute("data-on", s.progress >= i / (nodes.length - 1) - 0.02)),
              },
            });
          });

          /* ── mission + closing: cards open to the full width ── */
          const gxPx = () => parseFloat(getComputedStyle(root).getPropertyValue("--gx")) || 40;
          [
            ["[data-mission]", "[data-mission-img]"],
            ["[data-cta]", "[data-cta-img]"],
          ].forEach(([card, img]) => {
            const el = one(card);
            if (!el) return;
            gsap.fromTo(
              el,
              { clipPath: () => `inset(0px ${gxPx()}px 0px ${gxPx()}px round 4px)` },
              { clipPath: "inset(0px 0px 0px 0px round 0px)", ease: "none", scrollTrigger: { trigger: el, start: "top 90%", end: "top 15%", scrub: 0.6, invalidateOnRefresh: true } },
            );
            gsap.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
          });

          /* ── principles: the row at the centre is lit ── */
          const rows = q("[data-princ]");
          if (rows.length) {
            const light = () => {
              const c = window.innerHeight * 0.5;
              rows.forEach((r) => {
                const b = r.getBoundingClientRect();
                const d = Math.abs(b.top + b.height / 2 - c) / (window.innerHeight * 0.4);
                r.style.opacity = String(1 - clamp01(d) * 0.72);
              });
            };
            ScrollTrigger.create({ trigger: rows[0].parentElement, start: "top bottom", end: "bottom top", onUpdate: light, onRefresh: light });
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
      },
    );
    return () => mm.revert();
  });
  return null;
}
