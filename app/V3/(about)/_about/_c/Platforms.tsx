"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import a from "../about.module.css";
import { platforms } from "../../_lib/site";

/*
 * What the engine runs: the five platforms from the sitemap, each with its real pages.
 * Hover (pointer devices): the platform's photo follows the cursor and overlaps the row; it swaps
 * with a quick vertical wipe between rows. Touch: the photo sits in the row instead.
 */
export function Platforms() {
  const wrap = useRef<HTMLDivElement>(null);
  const float = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(-1);

  useEffect(() => {
    const w = wrap.current!;
    const f = float.current!;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const xTo = gsap.quickTo(f, "x", { duration: 0.7, ease: "expo.out" });
    const yTo = gsap.quickTo(f, "y", { duration: 0.7, ease: "expo.out" });
    const rTo = gsap.quickTo(f, "rotation", { duration: 0.9, ease: "expo.out" });
    let lastX = 0;
    const move = (e: PointerEvent) => {
      const r = w.getBoundingClientRect();
      const x = e.clientX - r.left;
      xTo(x);
      yTo(e.clientY - r.top);
      rTo(gsap.utils.clamp(-5, 5, (x - lastX) * 0.4));
      lastX = x;
    };
    w.addEventListener("pointermove", move);
    return () => w.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const f = float.current!;
    gsap.to(f, { scale: on < 0 ? 0.6 : 1, opacity: on < 0 ? 0 : 1, duration: 0.6, ease: "expo.out", overwrite: "auto" });
    if (on < 0) return;
    const img = f.querySelector<HTMLElement>(`[data-pi="${on}"]`);
    if (img) gsap.fromTo(img, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "expo.out" });
  }, [on]);

  return (
    <div ref={wrap} className={a.plat} onPointerLeave={() => setOn(-1)}>
      <p className={a.platHead}>
        <span>Platforms</span>
        <span>Pages</span>
      </p>
      <ul>
        {platforms.map((p, i) => (
          <li key={p.key} className={a.platRow} data-on={on === i ? "" : undefined} data-dim={on >= 0 && on !== i ? "" : undefined} onPointerEnter={() => setOn(i)} data-up>
            <Link href={p.href} className={a.platMain} onFocus={() => setOn(i)} onBlur={() => setOn(-1)}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <span className={a.platName}>{p.label}</span>
              <span className={a.platThumb} aria-hidden>
                <Image src={p.img} alt="" fill sizes="40vw" />
              </span>
            </Link>
            <ul className={a.platSubs}>
              {p.subs.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noreferrer" : undefined}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div ref={float} className={a.platFloat} aria-hidden>
        {platforms.map((p, i) => (
          <div key={p.key} data-pi={i} data-on={on === i ? "" : undefined}>
            <Image src={p.img} alt="" fill sizes="22vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
