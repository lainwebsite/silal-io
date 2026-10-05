"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { world } from "../_world/store";

gsap.registerPlugin(ScrollTrigger);

export type LenisLike = { scrollTo: (t: number | HTMLElement | string, o?: object) => void; stop: () => void; start: () => void };
export const getLenis = () => (window as unknown as { __d3lenis?: LenisLike }).__d3lenis;

// Lenis on GSAP's clock (one RAF for scroll, ScrollTrigger and the World). Off for reduced motion.
export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
    (window as unknown as { __d3lenis?: Lenis }).__d3lenis = lenis;
    if (document.documentElement.hasAttribute("data-d3-loading")) lenis.stop();
    lenis.on("scroll", (l: Lenis) => {
      world.velocity = l.velocity;
      ScrollTrigger.update();
    });
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as unknown as { __d3lenis?: Lenis }).__d3lenis;
      world.velocity = 0;
    };
  }, []);
  return null;
}
