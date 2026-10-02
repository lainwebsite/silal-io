"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import a from "../about.module.css";
import { platforms } from "../../_lib/site";

/*
 * The five platforms (sitemap), as a numbered list. One row open at a time: its photo and its
 * real pages slide open. Height animates with CSS grid rows (0fr → 1fr), no JS measuring.
 */
export function Platforms() {
  const [open, setOpen] = useState(0);
  return (
    <ol className={a.plat}>
      {platforms.map((p, i) => {
        const on = open === i;
        return (
          <li key={p.key} className={a.platRow} data-on={on ? "" : undefined} data-up>
            <button type="button" className={a.platHead} aria-expanded={on} aria-controls={`plat-${p.key}`} onClick={() => setOpen(on ? -1 : i)}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <span className={a.platThumb} aria-hidden>
                <Image src={p.img} alt="" fill sizes="64px" />
              </span>
              <span className={a.platName}>{p.label}</span>
              <i className={a.platPlus} aria-hidden />
            </button>
            <div id={`plat-${p.key}`} className={a.platBody}>
              <div>
                <div className={a.platInner}>
                  <div className={a.platImg}>
                    <Image src={p.img} alt="" fill sizes="(max-width: 900px) 100vw, 26vw" />
                  </div>
                  <div className={a.platLinks}>
                    <ul>
                      {p.subs.map((s) => (
                        <li key={s.label}>
                          <Link href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noreferrer" : undefined} tabIndex={on ? 0 : -1}>
                            {s.label}
                            <span aria-hidden>{s.external ? "↗" : "→"}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={p.href} className={a.platAll} tabIndex={on ? 0 : -1}>
                      Explore {p.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
