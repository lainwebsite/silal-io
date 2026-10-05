"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import n from "../news.module.css";
import { BASE } from "../../../_lib/site";
import { categories, fmtDate, type Release, year } from "../../../_lib/news";

const PAGE = 6;

/* Archive: category capsules, year + search capsules, rounded cards six at a time, "Load more". */
export function Archive({ items }: { items: Release[] }) {
  const [cat, setCat] = useState("All");
  const [yr, setYr] = useState("All years");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(PAGE);
  const grid = useRef<HTMLUListElement>(null);

  const years = useMemo(() => ["All years", ...Array.from(new Set(items.map((r) => year(r.date))))], [items]);
  const counts = useMemo(() => {
    const c: Record<string, number> = { All: items.length };
    items.forEach((r) => (c[r.category] = (c[r.category] ?? 0) + 1));
    return c;
  }, [items]);
  const list = useMemo(() => {
    const w = q.trim().toLowerCase();
    return items.filter(
      (r) => (cat === "All" || r.category === cat) && (yr === "All years" || year(r.date) === yr) && (!w || `${r.title} ${r.excerpt}`.toLowerCase().includes(w)),
    );
  }, [items, cat, yr, q]);

  useEffect(() => setShown(PAGE), [cat, yr, q]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !grid.current) return;
    gsap.fromTo(grid.current.querySelectorAll("li"), { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.05, overwrite: true });
    ScrollTrigger.refresh();
  }, [list, shown]);

  return (
    <div>
      <div className={n.filters}>
        <div className={n.chips} role="group" aria-label="Filter by category">
          {["All", ...categories].map((c) => (
            <button key={c} type="button" className={n.chip} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
              <small>{counts[c] ?? 0}</small>
            </button>
          ))}
        </div>
        <div className={n.tools}>
          <label className={n.select}>
            <span className={n.srOnly}>Year</span>
            <select value={yr} onChange={(e) => setYr(e.target.value)}>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </label>
          <label className={n.search}>
            <span className={n.srOnly}>Search releases</span>
            <svg viewBox="0 0 16 16" aria-hidden>
              <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input type="search" placeholder="Search releases" value={q} onChange={(e) => setQ(e.target.value)} />
          </label>
        </div>
      </div>

      <p className={n.count} aria-live="polite">
        Showing {Math.min(shown, list.length)} of {list.length} {list.length === 1 ? "release" : "releases"}
      </p>

      {list.length ? (
        <ul ref={grid} className={n.grid}>
          {list.slice(0, shown).map((r) => (
            <li key={r.slug}>
              <Link href={`${BASE}/resources/news/${r.slug}`} className={n.card}>
                <div className={n.cardImg}>
                  <Image src={r.src} alt={r.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 30vw" />
                  <span className={n.cardTag}>{r.category}</span>
                </div>
                <time className={n.cardDate} dateTime={r.date}>
                  {fmtDate(r.date)}
                </time>
                <h3 className={n.cardTitle}>{r.title}</h3>
                <p className={n.cardExcerpt}>{r.excerpt}</p>
                <span className={n.cardGo}>
                  Read more
                  <i aria-hidden>
                    <svg viewBox="0 0 16 16">
                      <path d="M4 8h8M8.5 4.5L12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={n.empty}>
          <p>No releases match these filters.</p>
          <button
            type="button"
            className={n.chip}
            onClick={() => {
              setCat("All");
              setYr("All years");
              setQ("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}

      {shown < list.length ? (
        <div className={n.loadRow}>
          <button type="button" className={n.load} onClick={() => setShown((s) => s + PAGE)}>
            Load more releases
          </button>
        </div>
      ) : null}
    </div>
  );
}
