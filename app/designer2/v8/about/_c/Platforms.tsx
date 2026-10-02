"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import a from "../about.module.css";
import { platforms } from "../../_lib/site";

gsap.registerPlugin(ScrollTrigger);

/*
 * The five platforms (sitemap) as a list; a sticky frame beside it shows the platform that is
 * passing the middle of the screen (or hovered). Photos cross-fade with a slight zoom.
 */
export function Platforms() {
  const list = useRef<HTMLOListElement>(null);
  const [on, setOn] = useState(0);

  useEffect(() => {
    const rows = Array.from(list.current!.querySelectorAll<HTMLElement>("[data-plat]"));
    const sts = rows.map((r, i) =>
      ScrollTrigger.create({ trigger: r, start: "top 58%", end: "bottom 58%", onToggle: (s) => s.isActive && setOn(i) }),
    );
    return () => sts.forEach((s) => s.kill());
  }, []);

  return (
    <div className={a.plat}>
      <ol ref={list} className={a.platList}>
        {platforms.map((p, i) => (
          <li key={p.key} className={a.platRow} data-plat data-on={on === i ? "" : undefined} onPointerEnter={() => setOn(i)}>
            <small>{String(i + 1).padStart(2, "0")}</small>
            <div>
              <Link href={p.href} className={a.platName}>
                {p.label}
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
            </div>
          </li>
        ))}
      </ol>
      <div className={a.platMedia} aria-hidden>
        <div className={a.platFrame}>
          {platforms.map((p, i) => (
            <div key={p.key} className={a.platImg} data-on={on === i ? "" : undefined}>
              <Image src={p.img} alt="" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
          ))}
          <p className={a.platCap}>
            <b>{String(on + 1).padStart(2, "0")}</b> {platforms[on]?.label}
          </p>
        </div>
      </div>
    </div>
  );
}
