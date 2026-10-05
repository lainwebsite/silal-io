"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import s from "../shell.module.css";

/*
 * A small dot and a lagging ring (the O). Over links the ring opens up; over [data-cursor="view"]
 * it shows a word. Difference blending keeps it visible on every sky. Fine pointers only.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const html = document.documentElement;
    html.setAttribute("data-d3-cursor", "");
    const d = dot.current!;
    const r = ring.current!;
    gsap.set([d, r], { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    const dx = gsap.quickTo(d, "x", { duration: 0.08, ease: "none" });
    const dy = gsap.quickTo(d, "y", { duration: 0.08, ease: "none" });
    const rx = gsap.quickTo(r, "x", { duration: reduce ? 0.01 : 0.45, ease: "power3" });
    const ry = gsap.quickTo(r, "y", { duration: reduce ? 0.01 : 0.45, ease: "power3" });
    let state = "";
    const move = (e: PointerEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      const t = (e.target as HTMLElement | null)?.closest?.("[data-cursor], a, button") as HTMLElement | null;
      const next = t ? (t.dataset.cursor ?? "link") : "";
      if (next !== state) {
        state = next;
        r.dataset.state = next;
        d.dataset.state = next;
        if (label.current) label.current.textContent = next === "view" ? (t?.dataset.cursorLabel ?? "View") : "";
      }
    };
    const down = () => gsap.to(r, { scale: 0.82, duration: 0.2 });
    const up = () => gsap.to(r, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    const leave = () => gsap.to([d, r], { opacity: 0, duration: 0.3 });
    const enter = () => gsap.to([d, r], { opacity: 1, duration: 0.3 });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    return () => {
      html.removeAttribute("data-d3-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
    };
  }, []);

  return (
    <>
      <div className={s.cursorRing} ref={ring} aria-hidden>
        <span ref={label} />
      </div>
      <div className={s.cursorDot} ref={dot} aria-hidden />
    </>
  );
}
