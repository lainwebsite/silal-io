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

/*
 * The archive: filter by category and year, search by words, six at a time with "Load more".
 * Cards re-enter with a short stagger whenever the selection changes.
 */
export function Archive({ items }: { items: Release[] }) {
  const [cat, setCat] = useState<string>("All");
  const [yr, setYr] = useState<string>("All years");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(PAGE);
  const grid = useRef<HTMLUListElement>(null);

  const years = useMemo(() => ["All years", ...Array.from(new Set(items.map((r) => year(r.date))))], [items]);
  const list = useMemo(() => {
    const words = q.trim().toLowerCase();
    return items.filter(
      (r) =>
        (cat === "All" || r.category === cat) &&
        (yr === "All years" || year(r.date) === yr) &&
        (!words || `${r.title} ${r.excerpt}`.toLowerCase().includes(words)),
    );
  }, [items, cat, yr, q]);

  useEffect(() => setShown(PAGE), [cat, yr, q]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !grid.current) return;
    const cards = grid.current.querySelectorAll("li");
    gsap.fromTo(cards, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.05, overwrite: true });
    ScrollTrigger.refresh();
  }, [list, shown]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: items.length };
    items.forEach((r) => (c[r.category] = (c[r.category] ?? 0) + 1));
    return c;
  }, [items]);

  return (
    <div className={n.archive}>
      <div className={n.filters}>
        <div className={n.chips} role="group" aria-label="Filter by category">
          {["All", ...categories].map((c) => (
            <button key={c} type="button" className={n.chip} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
              <sup>{counts[c] ?? 0}</sup>
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
          {list.slice(0, shown).map((r, i) => (
            <li key={r.slug} className={n.card}>
              <Link href={`${BASE}/resources/news/${r.slug}`} className={n.cardLink}>
                <div className={n.cardImg}>
                  <Image src={r.src} alt={r.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className={n.corners} aria-hidden />
                </div>
                <p className={n.meta}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <time dateTime={r.date}>{fmtDate(r.date)}</time>
                  <span className={n.metaCat}>{r.category}</span>
                </p>
                <h3 className={n.cardTitle}>{r.title}</h3>
                <p className={n.cardExcerpt}>{r.excerpt}</p>
                <span className={n.more}>Read more</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={n.empty}>
          <p>No releases match these filters.</p>
          <button
            type="button"
            className={n.reset}
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
