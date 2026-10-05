"use client";

import { useEffect, useRef } from "react";
import s from "../v1.module.css";

// Scroll-driven statement: "If it works here," gives way to "it can work anywhere." while rings spread out from Al Ain.
// Progress is written to --p (0 → 1); CSS does the rest. Static end state under reduced motion.
export function HereAnywhere() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 1;
      el.style.setProperty("--p", p.toFixed(3));
      el.toggleAttribute("data-far", p > 0.5);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className={s.here} aria-labelledby="d2-here">
      <div className={s.hereStick}>
        <div className={s.hereRings} aria-hidden>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} style={{ ["--i" as string]: i }} />
          ))}
          <b />
        </div>
        <div className={s.hereText}>
          <p className={s.kicker}>Why here? The arid advantage</p>
          <h2 id="d2-here" className={s.hereLine}>
            <span className={s.hereSmall} data-near="">If it works</span>{" "}
            <span className={s.hereBig} data-near="">here,</span>{" "}
            <span className={s.hereSmall} data-far="">it can work</span>{" "}
            <span className={s.hereBig} data-far="">anywhere.</span>
          </h2>
          <p className={s.hereCite}>Dr. Shamal Mohammed, CEO, Innovation Oasis</p>
        </div>
        <p className={s.herePlace}>
          <span>Al Ain, UAE</span>
          <span aria-hidden>→</span>
          <span>anywhere</span>
        </p>
      </div>
    </section>
  );
}
