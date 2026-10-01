"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import a from "../about.module.css";
import { P } from "../../_lib/photo";

const principles = [
  { t: "We Build for the Real World", d: "Innovation only matters when it can survive outside the lab.", img: P.soilProbe },
  {
    t: "We Connect Ecosystems",
    d: "Researchers, farmers, startups, industry, and government all have a role to play.",
    img: P.pitchArrival,
  },
  { t: "We Learn by Doing", d: "Progress comes through action, adaptation, and continuous improvement.", img: P.labWorking },
  { t: "We Think Beyond Borders", d: "The UAE is our testbed. The world is our opportunity.", img: P.pitchGlobal },
  { t: "We Build Resilience", d: "Not just for today’s food systems, but for tomorrow’s.", img: P.hydroTomato },
];

// Rows with a small photo that trails the cursor on desktop (fine pointers only); inline thumbs on touch.
export function Principles() {
  const root = useRef<HTMLDivElement>(null);
  const float = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const el = float.current!;
        const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" });
        const rTo = gsap.quickTo(el, "rotation", { duration: 0.9, ease: "power3" });
        let lastX = 0;
        const move = (e: PointerEvent) => {
          const box = root.current!.getBoundingClientRect();
          const x = e.clientX - box.left;
          xTo(x);
          yTo(e.clientY - box.top);
          rTo(gsap.utils.clamp(-6, 6, (e.clientX - lastX) * 0.4));
          lastX = e.clientX;
        };
        const rows = Array.from(root.current!.querySelectorAll<HTMLElement>("[data-principle]"));
        const enter = (i: number) => () => {
          el.dataset.active = String(i);
          gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power3.out" });
        };
        const leave = () => gsap.to(el, { autoAlpha: 0, scale: 0.85, duration: 0.4, ease: "power3.out" });
        const offs = rows.map((r, i) => {
          const fn = enter(i);
          r.addEventListener("pointerenter", fn);
          return () => r.removeEventListener("pointerenter", fn);
        });
        root.current!.addEventListener("pointermove", move);
        root.current!.addEventListener("pointerleave", leave);
        gsap.set(el, { autoAlpha: 0, scale: 0.85, xPercent: -50, yPercent: -50 });
        return () => {
          offs.forEach((f) => f());
          root.current?.removeEventListener("pointermove", move);
          root.current?.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: root },
  );

  return (
    <div className={a.princ} ref={root}>
      <ol className={a.princList}>
        {principles.map((p, i) => (
          <li key={p.t} className={a.princRow} data-principle data-fade>
            <span className={a.princNum}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={a.princTitle}>{p.t}</h3>
            <p className={a.princText}>{p.d}</p>
            <div className={a.princThumb} aria-hidden>
              <Image src={p.img} alt="" fill sizes="30vw" />
            </div>
            <i className={a.princRule} aria-hidden />
          </li>
        ))}
      </ol>
      <div className={a.princFloat} ref={float} data-active="0" aria-hidden>
        {principles.map((p, i) => (
          <div key={p.t} className={a.princFloatImg} data-i={i}>
            <Image src={p.img} alt="" fill sizes="320px" />
          </div>
        ))}
      </div>
    </div>
  );
}
