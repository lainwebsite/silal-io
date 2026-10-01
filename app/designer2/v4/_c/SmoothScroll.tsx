"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type LenisLike = { scrollTo: (t: number | HTMLElement, o?: object) => void; stop: () => void; start: () => void };
export const lenis = () => (window as unknown as { __d4lenis?: LenisLike }).__d4lenis;

// Lenis driven by GSAP's ticker: one clock for scroll, ScrollTrigger and both WebGL scenes.
export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
    (window as unknown as { __d4lenis?: Lenis }).__d4lenis = l;
    l.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => l.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      l.destroy();
      delete (window as unknown as { __d4lenis?: Lenis }).__d4lenis;
    };
  }, []);
  return null;
}
