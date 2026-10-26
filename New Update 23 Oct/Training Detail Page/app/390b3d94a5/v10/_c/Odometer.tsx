"use client";

import { useEffect, useRef } from "react";
import a from "../training/io-academy-training/academy.module.css";

/* Numbers roll like the homepage odometer: one 0–9 strip per digit, moved when the figure scrolls into view. */
export function Odometer({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const strips = Array.from(el.querySelectorAll<HTMLElement>("[data-to]"));
    const go = () => strips.forEach((s) => (s.style.transform = `translateY(${-Number(s.dataset.to) * 10}%)`));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return go();
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (go(), io.disconnect()), { rootMargin: "0px 0px -9% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <span ref={ref} className={a.odo} role="img" aria-label={value}>
      {value.split("").map((ch, k) => (
        <span key={k} className={a.odoCell} aria-hidden>
          <span className={a.odoStrip} data-to={ch} style={{ transitionDelay: `${k * 90}ms` }}>
            {Array.from({ length: 10 }, (_, d) => (
              <i key={d}>{d}</i>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}
