"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const q = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

/*
 * Motion for the v6 News & Media pages, the About page's grammar (v6):
 *   [data-lines] headings rise line by line · [data-up] items fade up · [data-wipe] rounded image
 *   cards open from the bottom, their [data-px] layer drifts · label hairlines draw.
 * Reduced motion: nothing runs.
 */
export function NewsMotion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
      const splits: SplitText[] = [];
      let dead = false;
      const build = () => {
        if (dead) return;
        const E = "expo.out";
        q("main [data-rule]").forEach((el) =>
          gsap.from(el, { scaleX: 0, duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 94%", once: true } }),
        );
        q("main [data-lines]").forEach((el) =>
          splits.push(
            SplitText.create(el, {
              type: "lines",
              aria: "none",
              mask: "lines",
              linesClass: "ln",
              autoSplit: true,
              onSplit: (s) => gsap.from(s.lines, { yPercent: 105, duration: 1.3, ease: E, stagger: 0.08, scrollTrigger: { trigger: el, start: "top 90%", once: true } }),
            }),
          ),
        );
        gsap.set("main [data-up]", { opacity: 0, y: 26 });
        ScrollTrigger.batch("main [data-up]", {
          start: "top 92%",
          once: true,
          onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.2, ease: E, stagger: 0.07, overwrite: true }),
        });
        q("main [data-wipe]").forEach((el) =>
          gsap.from(el, { clipPath: "inset(100% 0% 0% 0% round 6px)", duration: 1.5, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 92%", once: true } }),
        );
        q("main [data-px]").forEach((el) => {
          gsap.from(el, { scale: 1.15, duration: 2, ease: E, scrollTrigger: { trigger: el.parentElement, start: "top 92%", once: true } });
          gsap.fromTo(el, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
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
