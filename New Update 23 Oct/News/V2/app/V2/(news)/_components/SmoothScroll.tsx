"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scroll driven by GSAP's ticker so ScrollTrigger and Lenis share one clock.
// Off for prefers-reduced-motion. Exposed on window for in-page anchor jumps.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.25, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: { offset: -80 } });
    (window as unknown as { __d2lenis?: Lenis }).__d2lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as unknown as { __d2lenis?: Lenis }).__d2lenis;
    };
  }, []);
  return null;
}
