"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type W = Window & { __lenis?: Lenis };
export const lenis = () => (window as W).__lenis;

/*
 * Smooth scroll, same settings as the new homepage (prototypes/new-homepage/v2/app.js: duration 1.15, ease-out quart,
 * touchMultiplier 1.4). Lenis runs on GSAP's ticker so scroll, ScrollTrigger and the reveals share one clock.
 * In-page anchors (#request, the section index) glide with lenis.scrollTo; the mobile menu stops scrolling while open.
 * Off under prefers-reduced-motion (native scroll).
 */
export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), touchMultiplier: 1.4 });
    (window as W).__lenis = l;
    l.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => l.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      const id = a?.getAttribute("href");
      if (!a || !id || id.length < 2 || id[0] !== "#") return;
      const to = document.getElementById(id.slice(1));
      if (!to) return;
      e.preventDefault();
      l.scrollTo(to, { offset: -88, duration: 1.6 });
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      l.destroy();
      delete (window as W).__lenis;
    };
  }, []);
  return null;
}
