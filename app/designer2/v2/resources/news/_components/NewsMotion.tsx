"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const EASE = "expo.out";
const SOFT = "power3.out";

/**
 * Motion for the News & Media pages, in the About page's language (v2): masked lines rise, hairline
 * rules draw, framed photos open like a curtain and drift inside their frame, text fades up in
 * reading order. Same pre-paint contract as the About page: the layout sets <html data-d2m>; we flag
 * __d2ready once start states are applied. Reduced motion: nothing runs.
 */
export function NewsMotion() {
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
      const build = () => {
        if (cancelled) return;
        w.__d2ready = true;

        const title = document.querySelector<HTMLElement>("[data-news-title]");
        if (title) {
          const st = SplitText.create(title, { type: "lines", mask: "lines", linesClass: "ln" });
          splits.push(st);
          gsap.from(st.lines, { yPercent: 110, duration: 1.5, ease: EASE, stagger: 0.1, delay: 0.1 });
        }

        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          splits.push(
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              linesClass: "ln",
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(self.lines, { yPercent: 105, duration: 1.3, ease: EASE, stagger: 0.08, scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
            }),
          );
        });

        gsap.set("[data-fade]", { opacity: 0, y: 24 });
        ScrollTrigger.batch("[data-fade]", {
          start: "top 92%",
          once: true,
          onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: SOFT, stagger: 0.07, overwrite: true }),
        });

        gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((el) =>
          gsap.from(el, { "--rule": 0, duration: 1.5, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 92%", once: true } }),
        );

        gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 90%", once: true } },
          );
          const inner = el.querySelector<HTMLElement>("[data-parallax]");
          if (inner) {
            gsap.from(inner, { scale: 1.2, duration: 2, ease: EASE, scrollTrigger: { trigger: el, start: "top 90%", once: true } });
            gsap.fromTo(inner, { yPercent: -4 }, { yPercent: 4, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
          }
        });

        html.removeAttribute("data-d2m");
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
