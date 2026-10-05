"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import s from "../shell.module.css";
import { world } from "../_world/store";
import { getLenis } from "./SmoothScroll";

/*
 * Opening: the particles gather into the O of the brandmark while real assets load
 * (webfont + first photos). At 100 the counter lifts away, the O hands its particles to
 * the hero helix, and the page is told to enter ("d3:enter").
 */
export function Loader() {
  const [done, setDone] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enter = () => {
      html.removeAttribute("data-d3-loading");
      window.dispatchEvent(new Event("d3:enter"));
      (window as unknown as { __d3entered?: boolean }).__d3entered = true;
    };
    if (reduce) {
      world.intro = 2;
      setDone(true);
      enter();
      return;
    }
    html.setAttribute("data-d3-loading", "");
    getLenis()?.stop();

    const state = { p: 0, target: 0 };
    const tasks: Promise<unknown>[] = [];
    let settled = 0;
    const track = (pr: Promise<unknown>) => {
      tasks.push(pr.finally(() => (settled += 1)));
    };
    if (document.fonts?.ready) track(document.fonts.ready);
    document.querySelectorAll<HTMLImageElement>("img[data-preload], [data-hero] img").forEach((img) => {
      if (img.complete) return;
      track(new Promise((res) => {
        img.addEventListener("load", res, { once: true });
        img.addEventListener("error", res, { once: true });
      }));
    });
    track(new Promise((res) => (world.ready ? res(null) : world.on(() => res(null)))));
    const minTime = new Promise((res) => setTimeout(res, 1700));

    const ticker = () => {
      state.target = tasks.length ? Math.max(state.target, (settled / tasks.length) * 0.9) : 0.9;
      state.p += (state.target - state.p) * 0.06;
      world.intro = Math.min(1, state.p);
      if (num.current) num.current.textContent = String(Math.round(state.p * 100)).padStart(3, "0");
      if (bar.current) bar.current.style.transform = `scaleX(${state.p})`;
    };
    gsap.ticker.add(ticker);

    let killed = false;
    const safety = setTimeout(() => finish(), 7000);
    Promise.all([Promise.all(tasks), minTime]).then(() => finish());

    function finish() {
      if (killed) return;
      killed = true;
      clearTimeout(safety);
      gsap.ticker.remove(ticker);
      const tl = gsap.timeline();
      tl.to(state, {
        p: 1,
        duration: 0.7,
        ease: "power2.out",
        onUpdate: () => {
          world.intro = state.p;
          if (num.current) num.current.textContent = String(Math.round(state.p * 100)).padStart(3, "0");
          if (bar.current) bar.current.style.transform = `scaleX(${state.p})`;
        },
      })
        .to(root.current!.querySelectorAll("[data-l]"), { yPercent: -110, duration: 0.9, ease: "expo.in", stagger: 0.05 }, "+=0.15")
        .to(bar.current!.parentElement, { scaleX: 0, transformOrigin: "right center", duration: 0.8, ease: "expo.inOut" }, "<")
        .add(() => {
          enter();
          getLenis()?.start();
        })
        .to(world, { intro: 2, duration: 2.2, ease: "expo.inOut" }, "<")
        .add(() => setDone(true));
    }

    return () => {
      killed = true;
      clearTimeout(safety);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (done) return null;
  return (
    <div className={s.loader} ref={root} aria-hidden>
      <div className={s.loaderTop}>
        <span className={s.loaderBar}>
          <span ref={bar} />
        </span>
      </div>
      <div className={s.loaderFoot}>
        <p className={s.loaderLabel}>
          <span data-l>Innovation Oasis</span>
          <span data-l>Al Foah · Al Ain · United Arab Emirates</span>
        </p>
        <p className={s.loaderNum}>
          <span data-l ref={num}>
            000
          </span>
        </p>
      </div>
    </div>
  );
}
