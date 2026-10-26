"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import n from "../../../pages.module.css";
import a from "../academy.module.css";
import { BASE } from "../../../_lib/site";
import { type Course, DETAIL_LIVE, modes, tracks } from "../../../_lib/academy";

export const ACADEMY = `${BASE}/training/io-academy-training`;

/*
 * The IO Academy library: the News & Media archive grammar (chips, selects, search, three-across grid of
 * soft-cornered cards), with tracks instead of categories and format instead of topic.
 */
export function Library({ items }: { items: Course[] }) {
  const [track, setTrack] = useState("All tracks");
  const [mode, setMode] = useState("All formats");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const w = q.trim().toLowerCase();
    return items.filter(
      (c) => (track === "All tracks" || c.track === track) && (mode === "All formats" || c.mode === mode) && (!w || `${c.title} ${c.excerpt}`.toLowerCase().includes(w)),
    );
  }, [items, track, mode, q]);
  const count = (t: string) => items.filter((c) => c.track === t).length;

  return (
    <div>
      <div className={n.filters}>
        <div className={n.chips} role="group" aria-label="Track">
          {["All tracks", ...tracks].map((t) => (
            <button key={t} type="button" className={n.chip} aria-pressed={track === t} onClick={() => setTrack(t)}>
              {t}
              <small>{t === "All tracks" ? items.length : count(t)}</small>
            </button>
          ))}
        </div>
        <div className={n.tools}>
          <label className={n.select}>
            <span className={n.srOnly}>Format</span>
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              {["All formats", ...modes].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </label>
          <label className={n.search}>
            <span className={n.srOnly}>Search courses</span>
            <svg viewBox="0 0 16 16" aria-hidden>
              <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <input type="search" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} />
          </label>
        </div>
      </div>

      <p className={n.count} aria-live="polite">
        {list.length} {list.length === 1 ? "course" : "courses"}
      </p>

      {list.length ? (
        <ul className={n.grid}>
          {list.map((c) => (
            <li key={c.slug}>
              <Link href={DETAIL_LIVE ? `${ACADEMY}/${c.slug}` : "#"} className={n.card}>
                <div className={n.cardImg}>
                  <Image src={c.src} alt={c.alt} fill sizes="(max-width: 700px) 100vw, 30vw" />
                  <span className={n.cardTag}>{c.mode}</span>
                </div>
                <p className={n.cardDate}>{c.track}</p>
                <h3 className={n.cardTitle}>{c.title}</h3>
                <p className={n.cardExcerpt}>{c.excerpt}</p>
                <p className={a.cardFacts}>
                  <span>{c.length}</span>
                  <span>{c.level}</span>
                </p>
                <span className={n.cardGo}>
                  View course
                  <i aria-hidden>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={n.empty}>
          <p>No course matches these filters.</p>
          <button
            type="button"
            className={n.chip}
            onClick={() => {
              setTrack("All tracks");
              setMode("All formats");
              setQ("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
