"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";
import s from "../v1.module.css";
import { IoWord } from "./Brand";

function useInView<T extends Element>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

// Fade/slide in once when scrolled into view.
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: string;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `${s.reveal} ${className}`,
      "data-in": inView,
      style: { transitionDelay: `${delay * 90}ms` },
    },
    children,
  );
}

// Counts up to a number once visible.
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

// Cycles "-tion" words; the "io" in each lights up in IO Blue.
export function CycleWord({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span className={s.cycle} aria-live="off">
      <IoWord key={words[i]} word={words[i]} className={s.cycleWord} />
    </span>
  );
}

// Words light up from grey to charcoal as the block scrolls through the viewport.
export function ScrollText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const v = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
        setP(Math.max(0, Math.min(1, v)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  const words = text.split(" ");
  const lit = Math.round(p * words.length);
  return (
    <p ref={ref} className={`${s.scrollText} ${className}`}>
      {words.map((w, k) => (
        <span key={k} data-lit={k < lit}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
