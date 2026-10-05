"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const q = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

/*
 * Motion for v7/about — subtle, the same everywhere:
 *   [data-lines]  headings rise line by line out of a mask
 *   [data-words]  the dark-band statement brightens word by word with the scroll
 *   [data-up]     text, cards and list rows fade up (batched, staggered)
 *   [data-img]    image frames open from the bottom once; [data-px] inside drifts (parallax)
 *   [data-band-img] full-width photos drift behind their band
 *   [data-flow]   the flow line draws and its steps light in turn
 * Reduced motion: nothing runs; CSS shows everything.
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
          gsap.fromTo(st.words, { opacity: 0.22 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.6 } });
        });

        gsap.set("main [data-up]", { opacity: 0, y: 24 });
        ScrollTrigger.batch("main [data-up]", {
          start: "top 92%",
          once: true,
          onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.1, ease: E, stagger: 0.06, overwrite: true }),
        });

        q("main [data-img]").forEach((el) => {
          gsap.from(el, { clipPath: "inset(12% 0% 0% 0% round 4px)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
          const px = el.querySelector<HTMLElement>("[data-px]");
          if (px) gsap.fromTo(px, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
        });

        q("main [data-band-img]").forEach((el) =>
          gsap.fromTo(el, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } }),
        );

        q("main [data-flow]").forEach((flow) => {
          const nodes = q("[data-flow-node]", flow);
          gsap.fromTo(
            q("[data-flow-line]", flow),
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: flow,
                start: "top 85%",
                end: "top 45%",
                scrub: 0.6,
                onUpdate: (s) => nodes.forEach((n, i) => n.toggleAttribute("data-on", s.progress >= i / (nodes.length - 1) - 0.02)),
              },
            },
          );
        });

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
