"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import a from "../about.module.css";
import { P } from "../../_lib/photo";

const rows = [
  { t: "We Build for the Real World", d: "Innovation only matters when it can survive outside the lab.", img: P.soilProbe },
  { t: "We Connect Ecosystems", d: "Researchers, farmers, startups, industry, and government all have a role to play.", img: P.pitchArrival },
  { t: "We Learn by Doing", d: "Progress comes through action, adaptation, and continuous improvement.", img: P.labWorking },
  { t: "We Think Beyond Borders", d: "The UAE is our testbed. The world is our opportunity.", img: P.pitchGlobal },
  { t: "We Build Resilience", d: "Not just for today’s food systems, but for tomorrow’s.", img: P.hydroTomato },
];

/*
 * Five principles. On desktop an O lens trails the cursor and shows the photo for the row
 * under it (velocity tilts it a touch). On touch, each row carries its own photo.
 */
export function Principles() {
  const root = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const el = lens.current!;
        const box = root.current!;
        gsap.set(el, { xPercent: -50, yPercent: -50, scale: 0, autoAlpha: 1 });
        const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" });
        const rTo = gsap.quickTo(el, "rotation", { duration: 1, ease: "power3" });
        let lx = 0;
        const move = (e: PointerEvent) => {
          const r = box.getBoundingClientRect();
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
          rTo(gsap.utils.clamp(-8, 8, (e.clientX - lx) * 0.5));
          lx = e.clientX;
        };
        const show = (i: number) => () => {
          el.dataset.i = String(i);
          gsap.to(el, { scale: 1, duration: 0.7, ease: "expo.out", overwrite: "auto" });
        };
        const hide = () => gsap.to(el, { scale: 0, duration: 0.5, ease: "expo.out", overwrite: "auto" });
        const items = Array.from(box.querySelectorAll<HTMLElement>("[data-pr]"));
        const offs = items.map((it, i) => {
          const f = show(i);
          it.addEventListener("pointerenter", f);
          return () => it.removeEventListener("pointerenter", f);
        });
        box.addEventListener("pointermove", move);
        box.addEventListener("pointerleave", hide);
        return () => {
          offs.forEach((f) => f());
          box.removeEventListener("pointermove", move);
          box.removeEventListener("pointerleave", hide);
        };
      });
    },
    { scope: root },
  );

  return (
    <div className={a.pr} ref={root}>
      <ol className={a.prList}>
        {rows.map((r, i) => (
          <li key={r.t} className={a.prRow} data-pr data-rise>
            <span className={a.prNum}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={a.prTitle}>
              <span>{r.t}</span>
            </h3>
            <p className={a.prText}>{r.d}</p>
            <div className={a.prThumb} aria-hidden>
              <Image src={r.img} alt="" fill sizes="90vw" />
            </div>
          </li>
        ))}
      </ol>
      <div className={a.prLens} ref={lens} data-i="0" aria-hidden>
        {rows.map((r, i) => (
          <div key={r.t} className={a.prLensImg} data-k={i}>
            <Image src={r.img} alt="" fill sizes="320px" />
          </div>
        ))}
      </div>
    </div>
  );
}
