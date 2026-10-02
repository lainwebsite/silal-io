"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const EASE = "expo.out";
const SOFT = "power3.out";

/**
 * All About-page motion in one place. Markup is server-rendered with data-* hooks; this only animates.
 * Principle: slow, quiet reveals that follow the reading order. Nothing loops, nothing bounces.
 * The layout flags <html data-d2m> before paint so hooked elements start hidden; we clear it once
 * every tween has applied its start state. Reduced motion: nothing runs, everything is visible.
 */
export function AboutMotion() {
  useGSAP(() => {
    const html = document.documentElement;
    const w = window as unknown as { __d2ready?: boolean };
    const mm = gsap.matchMedia();
    let cancelled = false;

    mm.add("(prefers-reduced-motion: reduce)", () => {
      html.removeAttribute("data-d2m");
    });

    mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
      const splits: SplitText[] = [];
      const desktop = window.matchMedia("(min-width: 901px)").matches;

      const build = () => {
        if (cancelled) return;
        w.__d2ready = true;

        /* ── Hero: lines rise, photo opens from a slit, then widens to full bleed on scroll ── */
        const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]");
        if (heroTitle) {
          const st = SplitText.create(heroTitle, { type: "lines", mask: "lines", linesClass: "ln" });
          splits.push(st);
          const tl = gsap.timeline({ delay: 0.15 });
          tl.from(st.lines, { yPercent: 110, duration: 1.6, ease: EASE, stagger: 0.11 })
            .fromTo(
              "[data-hero-media]",
              { clipPath: "inset(100% 6% 0% 6%)" },
              { clipPath: "inset(0% 6% 0% 6%)", duration: 1.9, ease: "expo.inOut" },
              0.3,
            )
            .from("[data-hero-img]", { scale: 1.35, duration: 2.6, ease: EASE }, 0.35);
          gsap.to("[data-hero-media]", {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: { trigger: "[data-hero-media]", start: "top 85%", end: "top 15%", scrub: true },
          });
          gsap.to("[data-hero-img]", {
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: "[data-hero-media]", start: "top top", end: "bottom top", scrub: true },
          });
        }

        /* ── Line reveals: masked lines rise in reading order ── */
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const st = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "ln",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 105,
                duration: 1.35,
                ease: EASE,
                stagger: 0.09,
                scrollTrigger: { trigger: el, start: "top 86%", once: true },
              });
            },
          });
          splits.push(st);
        });

        /* ── Words that brighten as you read (scrubbed) ── */
        gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((el) => {
          const st = SplitText.create(el, { type: "words", wordsClass: "wd" });
          splits.push(st);
          gsap.fromTo(
            st.words,
            { opacity: 0.14 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.12,
              scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 48%", scrub: 0.6 },
            },
          );
        });

        /* ── Soft fades ── */
        ScrollTrigger.batch("[data-fade]", {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.fromTo(els, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 1.2, ease: SOFT, stagger: 0.08, overwrite: true }),
        });
        gsap.set("[data-fade]", { opacity: 0, y: 26 });

        /* ── Rules that draw (chapter heads) ── */
        gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((el) => {
          gsap.from(el, {
            "--rule": 0,
            duration: 1.6,
            ease: "expo.inOut",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        /* ── Framed photos: curtain up + settle, then a gentle drift inside the frame ── */
        gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
          const inner = el.querySelector("[data-parallax]");
          const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
          tl.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" });
          if (inner) {
            tl.fromTo(inner, { scale: 1.3 }, { scale: 1.08, duration: 2.2, ease: EASE }, 0);
            gsap.fromTo(
              inner,
              { yPercent: -4 },
              { yPercent: 4, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
            );
          }
        });

        /* ── A pattern: three photos arrive, the links between them start but never meet ── */
        const pattern = document.querySelector("[data-pattern]");
        if (pattern) {
          const tl = gsap.timeline({ scrollTrigger: { trigger: pattern, start: "top 70%", once: true } });
          tl.fromTo(
            "[data-pattern-img]",
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", stagger: 0.18 },
          )
            .from("[data-pattern] li > p", { opacity: 0, y: 18, duration: 1, ease: SOFT, stagger: 0.12 }, 0.6)
            .from("[data-gap-l]", { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease: "power2.inOut" }, 1.2)
            .from("[data-gap-r]", { scaleX: 0, transformOrigin: "right center", duration: 1.1, ease: "power2.inOut" }, 1.2)
            .from("[data-pattern] b", { opacity: 0, scale: 0.4, duration: 0.6, ease: "back.out(2)" }, 2.1);
        }

        /* ── Innovation fades back as implementation comes forward ── */
        const lack = document.querySelector("[data-lack]");
        if (lack) {
          const tl = gsap.timeline({ scrollTrigger: { trigger: lack, start: "top 70%", end: "bottom 45%", scrub: 0.8 } });
          tl.fromTo("[data-lack-a]", { xPercent: -4 }, { xPercent: 0, ease: "none" }, 0)
            .fromTo("[data-lack-b]", { xPercent: 4 }, { xPercent: 0, ease: "none" }, 0)
            .to("[data-lack-a] span", { color: "#b9b7b6", ease: "none" }, 0.35)
            .fromTo("[data-lack-b] span", { color: "#b9b7b6" }, { color: "#3ca7d2", ease: "none" }, 0.35);
        }

        /* ── The land: aerial opens, survey box draws, hectares count up ── */
        const land = document.querySelector("[data-land]");
        if (land) {
          gsap.fromTo(
            "[data-land-img]",
            { clipPath: "inset(12% 10% 12% 10%)", scale: 1.15 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: land, start: "top 90%", end: "top 10%", scrub: true },
            },
          );
          const tl = gsap.timeline({ scrollTrigger: { trigger: land, start: "top 30%", once: true } });
          tl.fromTo("[data-land-box]", { "--draw": 0 }, { "--draw": 1, duration: 1.8, ease: "expo.inOut" });
          const num = land.querySelector<HTMLElement>("[data-count]");
          if (num) {
            const o = { v: 0 };
            tl.to(
              o,
              { v: Number(num.dataset.count), duration: 1.8, ease: "power2.out", onUpdate: () => (num.textContent = String(Math.round(o.v))) },
              0.2,
            );
          }
        }

        /* ── Creation: the name lands, the building opens up ── */
        const creation = document.querySelector<HTMLElement>("[data-creation]");
        if (creation) {
          gsap.from(creation, {
            opacity: 0,
            y: 40,
            duration: 1.6,
            ease: EASE,
            scrollTrigger: { trigger: creation, start: "top 85%", once: true },
          });
          gsap.fromTo(
            "[data-expand]",
            { clipPath: "inset(0% 22% 0% 22%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: { trigger: "[data-expand]", start: "top 90%", end: "top 15%", scrub: true },
            },
          );
          gsap.fromTo(
            "[data-expand-img]",
            { scale: 1.25 },
            { scale: 1, ease: "none", scrollTrigger: { trigger: "[data-expand]", start: "top bottom", end: "bottom top", scrub: true } },
          );
        }

        /* ── A place where…: sticky photo follows the sentence you are reading ── */
        const place = document.querySelector<HTMLElement>("[data-place]");
        if (place) {
          place.dataset.active = "0";
          gsap.utils.toArray<HTMLElement>("[data-place-item]").forEach((el, i) => {
            ScrollTrigger.create({
              trigger: el,
              start: "top 60%",
              end: "bottom 60%",
              onToggle: (self) => {
                if (self.isActive) place.dataset.active = String(i);
              },
            });
          });
        }

        /* ── Team: portraits rise one after another ── */
        gsap.from("[data-team] li", {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 40,
          duration: 1.4,
          ease: "expo.out",
          stagger: { each: 0.08, grid: "auto", from: "start" },
          scrollTrigger: { trigger: "[data-team]", start: "top 80%", once: true },
        });

        /* ── Benchmarks: rules draw like a gauge filling ── */
        gsap.from("[data-bench-rule]", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.6,
          ease: "expo.inOut",
          stagger: 0.12,
          scrollTrigger: { trigger: "[data-bench]", start: "top 75%", once: true },
        });
        gsap.from("[data-bench] li > span", {
          opacity: 0,
          y: 16,
          duration: 1,
          ease: SOFT,
          stagger: 0.04,
          scrollTrigger: { trigger: "[data-bench]", start: "top 75%", once: true },
        });

        /* ── The ring: eight parts connect to one centre (scrubbed, answers the broken links above) ── */
        const ring = document.querySelector("[data-ring]");
        if (ring) {
          const spokes = gsap.utils.toArray<SVGLineElement>("[data-ring-spoke]");
          spokes.forEach((l) => {
            const len = 230;
            l.style.strokeDasharray = `${len}`;
            l.style.strokeDashoffset = `${len}`;
          });
          const orbit = document.querySelector<SVGCircleElement>("[data-ring-orbit]");
          const circ = 2 * Math.PI * 230;
          if (orbit) {
            orbit.style.strokeDasharray = `${circ}`;
            orbit.style.strokeDashoffset = `${circ}`;
          }
          const tl = gsap.timeline({
            scrollTrigger: { trigger: ring, start: "top 75%", end: "center 45%", scrub: 0.8 },
          });
          tl.to(orbit, { strokeDashoffset: 0, ease: "none", duration: 1 })
            .from("[data-ring-node]", { scale: 0, transformOrigin: "center", transformBox: "fill-box", stagger: 0.08, duration: 0.3 }, 0.1)
            .from("[data-ring-label]", { opacity: 0, stagger: 0.08, duration: 0.3 }, 0.15)
            .to(spokes, { strokeDashoffset: 0, stagger: 0.06, duration: 0.5, ease: "none" }, 0.6)
            .from("[data-ring-core]", { scale: 0, transformOrigin: "center", transformBox: "fill-box", duration: 0.4 }, 1.1)
            .from("[data-ring-center]", { opacity: 0, y: 10, duration: 0.4 }, 1.2);
        }

        gsap.from("[data-flow] li", {
          opacity: 0,
          x: -24,
          duration: 1.2,
          ease: SOFT,
          stagger: 0.15,
          scrollTrigger: { trigger: "[data-flow]", start: "top 85%", once: true },
        });

        /* ── Mission: the leaf drifts behind the words ── */
        gsap.fromTo(
          "[data-mission-bg]",
          { yPercent: -8, scale: 1.12 },
          {
            yPercent: 8,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-mission-bg]", start: "top bottom", end: "bottom top", scrub: true },
          },
        );

        /* ── Finale: pinned. The greenhouse settles, three lines arrive one by one ── */
        const finale = document.querySelector<HTMLElement>("[data-finale]");
        if (finale) {
          const lines = gsap.utils.toArray<HTMLElement>("[data-finale-line]");
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: finale,
              start: "top top",
              end: desktop ? "+=180%" : "+=140%",
              pin: true,
              scrub: 0.8,
            },
          });
          tl.fromTo("[data-finale-img]", { scale: 1.2 }, { scale: 1, ease: "none", duration: 3 }, 0);
          lines.forEach((l, i) => {
            tl.fromTo(l, { opacity: 0, y: 50, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, 0.3 + i * 0.85);
            if (i < lines.length - 1) tl.to(l, { opacity: 0.28, duration: 0.6 }, 0.3 + (i + 1) * 0.85);
          });
          tl.from("[data-finale-mark]", { opacity: 0, yPercent: 20, duration: 0.8 }, 2.2);
        }

        html.removeAttribute("data-d2m");
        ScrollTrigger.refresh();
      };

      // Split only after the webfont is in, or line breaks would be measured on the fallback face.
      // ctx.add keeps the async-created tweens inside this matchMedia context so they revert cleanly.
      if (document.fonts?.ready) document.fonts.ready.then(() => !cancelled && ctx.add(build));
      else build();

      return () => {
        cancelled = true;
        splits.forEach((s) => s.revert());
      };
    });

    return () => {
      cancelled = true;
      mm.revert();
    };
  });

  return null;
}
