"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import s from "../v1.module.css";
import { Arrow } from "./Brand";
import type { Category } from "../_lib/site";

// Index of the five categories; the photo panel follows the hovered/focused row.
export function PillarList({ items }: { items: Category[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className={s.pillars}>
      <ol className={s.pillarList}>
        {items.map((c, i) => (
          <li key={c.key} data-active={active === i}>
            <Link href={c.href} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className={s.pillarRow}>
              <span className={s.pillarNum}>{String(i + 1).padStart(2, "0")}</span>
              <span className={s.pillarBody}>
                <span className={s.pillarTitle}>{c.label}</span>
                <span className={s.pillarBlurb}>{c.blurb}</span>
                <span className={s.pillarSubs}>
                  {c.subs.map((x) => (
                    <span key={x.label}>{x.label}</span>
                  ))}
                </span>
              </span>
              <span className={s.pillarArrow}>
                <Arrow size={20} />
              </span>
              <span className={s.pillarThumb}>
                <Image src={c.img} alt="" fill sizes="100vw" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <div className={s.pillarMedia} aria-hidden="true">
        {items.map((c, i) => (
          <div key={c.key} className={s.pillarImg} data-active={active === i}>
            <Image src={c.img} alt="" fill sizes="(max-width: 1000px) 100vw, 40vw" />
          </div>
        ))}
        <span className={s.pillarCaption}>
          {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} · {items[active].label}
        </span>
      </div>
    </div>
  );
}

export type Milestone = { when: string; title: string; text: string };

// Horizontal journey; the connecting rule echoes the helix lines in the IO mark.
export function Timeline({ items }: { items: Milestone[] }) {
  const track = useRef<HTMLOListElement>(null);
  const go = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li") as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  };
  return (
    <div className={s.timeline}>
      <div className={s.timelineNav}>
        <button onClick={() => go(-1)} aria-label="Previous">
          <span style={{ display: "inline-flex", transform: "scaleX(-1)" }}>
            <Arrow size={18} />
          </span>
        </button>
        <button onClick={() => go(1)} aria-label="Next">
          <Arrow size={18} />
        </button>
      </div>
      <ol ref={track} className={s.timelineTrack}>
        {items.map((m) => (
          <li key={m.when + m.title}>
            <span className={s.timelineDot} aria-hidden="true" />
            <span className={s.timelineWhen}>{m.when}</span>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
