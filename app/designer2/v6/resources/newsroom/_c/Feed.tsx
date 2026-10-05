"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import r from "../newsroom.module.css";
import { Clock } from "../../../_c/Clock";
import { BASE, footerLinks } from "../../../_lib/site";
import { categories, fmtDate, type Release, topics } from "../../../_lib/news";

gsap.registerPlugin(ScrollTrigger);

const STEP = 8;
const PATTERN = [2, 3, 1]; // two cards · three cards · one large card with its text beside it

const res = (label: string) => footerLinks.resources.find((x) => x.label === label)!.href;
const groups = [
  {
    title: "News & Media",
    links: [
      { label: "Overview", href: `${BASE}/resources/newsroom`, current: true },
      { label: "Press releases", href: `${BASE}/resources/news` },
      { label: "Publications", href: res("Publications") },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources hub", href: res("Resources") },
      { label: "Projects & Case Studies", href: res("Projects & Case Studies") },
      { label: "FAQs", href: res("FAQs") },
    ],
  },
];

function Face({ it, sizes }: { it: Release; sizes: string }) {
  if (it.card?.style === "mark")
    return (
      <div className={r.face} data-tone={it.card.tone}>
        {/* official mark, single-colour white */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/io-mark.svg" alt="" className={r.faceMark} />
      </div>
    );
  if (it.card?.style === "type")
    return (
      <div className={r.face} data-tone={it.card.tone}>
        <p className={r.faceText}>
          <small>{it.category}</small>
          {it.card.text}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/io-mark.svg" alt="" className={r.faceMarkSm} />
      </div>
    );
  return (
    <div className={r.photo} data-px>
      <Image src={it.src} alt={it.alt} fill sizes={sizes} />
    </div>
  );
}

function Arrow() {
  return (
    <i className={r.arrow} aria-hidden>
      <svg viewBox="0 0 16 16">
        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </i>
  );
}

function Card({ it, size }: { it: Release; size: 2 | 3 }) {
  return (
    <li className={r.card} data-card>
      <Link href={`${BASE}/resources/news/${it.slug}`} className={r.cardLink}>
        <div className={r.cardImg} data-card-img>
          <Face it={it} sizes={size === 2 ? "(max-width: 900px) 100vw, 36vw" : "(max-width: 900px) 100vw, 24vw"} />
        </div>
        <p className={r.meta} data-card-txt>
          <time dateTime={it.date}>{fmtDate(it.date)}</time>
          <span>{it.category}</span>
        </p>
        <div className={r.cardHead} data-card-txt>
          <h3 className={r.cardTitle}>{it.title}</h3>
          <Arrow />
        </div>
      </Link>
    </li>
  );
}

function Big({ it }: { it: Release }) {
  return (
    <li className={r.big} data-card>
      <Link href={`${BASE}/resources/news/${it.slug}`} className={r.bigLink}>
        <div className={r.bigImg} data-card-img>
          <Face it={it} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className={r.bigText}>
          <p className={r.meta} data-card-txt>
            <time dateTime={it.date}>{fmtDate(it.date)}</time>
            <span>{it.category}</span>
          </p>
          <h3 className={r.bigTitle} data-card-txt>
            {it.title}
          </h3>
          <p className={r.bigExcerpt} data-card-txt>
            {it.excerpt}
          </p>
          <span className={r.explore} data-card-txt>
            Explore <Arrow />
          </span>
        </div>
      </Link>
    </li>
  );
}

/*
 * The feed (after Hut 8): sticky sidebar (section nav with open/close groups, campus clock in place
 * of their share price, media contact), type / topic / search filters, then rows in a repeating
 * rhythm of 2 · 3 · 1 large. More rows load as you near the end. Cards open as they enter (image
 * wipes up, text follows), the photo drifts inside its frame, and on hover the small arrow fills
 * into the round IO-Blue button.
 */
export function Feed({ items, featured }: { items: Release[]; featured: string[] }) {
  const [type, setType] = useState("All types");
  const [topic, setTopic] = useState("All topics");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(STEP);
  const [open, setOpen] = useState<Record<string, boolean>>({ "News & Media": true, Resources: false });
  const list = useRef<HTMLDivElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);
  const drift = useRef<gsap.core.Tween[]>([]);
  const filtering = type !== "All types" || topic !== "All topics" || q.trim() !== "";

  const pool = useMemo(() => {
    const w = q.trim().toLowerCase();
    return items.filter(
      (it) =>
        (filtering || !featured.includes(it.slug)) &&
        (type === "All types" || it.category === type) &&
        (topic === "All topics" || it.topic === topic) &&
        (!w || `${it.title} ${it.excerpt}`.toLowerCase().includes(w)),
    );
  }, [items, featured, filtering, type, topic, q]);
  const visible = pool.slice(0, shown);

  const rows = useMemo(() => {
    const out: { size: number; items: Release[] }[] = [];
    let i = 0;
    let k = 0;
    while (i < visible.length) {
      const size = PATTERN[k++ % PATTERN.length];
      out.push({ size, items: visible.slice(i, i + size) });
      i += size;
    }
    return out;
  }, [visible]);

  useEffect(() => setShown(STEP), [type, topic, q]);

  // keep loading as the end comes near
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown((s) => s + STEP), { rootMargin: "0px 0px 600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [shown, pool.length]);

  // reveal new cards; parallax inside the photos
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !list.current) return;
    const fresh = Array.from(list.current.querySelectorAll<HTMLElement>("[data-card]:not([data-seen])"));
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const card = e.target as HTMLElement;
          const row = Array.from(card.parentElement!.children).indexOf(card);
          gsap.to(card.querySelector("[data-card-img]"), { clipPath: "inset(0% 0% 0% 0% round 6px)", duration: 1.3, ease: "expo.inOut", delay: row * 0.09 });
          gsap.to(card.querySelectorAll("[data-card-txt]"), { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.06, delay: 0.35 + row * 0.09 });
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    fresh.forEach((card) => {
      card.setAttribute("data-seen", "");
      gsap.set(card.querySelector("[data-card-img]"), { clipPath: "inset(100% 0% 0% 0% round 6px)" });
      gsap.set(card.querySelectorAll("[data-card-txt]"), { opacity: 0, y: 18 });
      io.observe(card);
      const px = card.querySelector<HTMLElement>("[data-px]");
      if (px)
        drift.current.push(
          gsap.fromTo(px, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } }),
        );
    });
    ScrollTrigger.refresh();
    return () => io.disconnect();
  }, [rows]);
  useEffect(
    () => () =>
      drift.current.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      }),
    [],
  );

  return (
    <section className={r.feed} aria-labelledby="feed-h">
      <div className={r.wrap}>
        <div className={r.feedGrid}>
          <aside className={r.side}>
            <nav className={r.sideNav} aria-label="News & Media">
              {groups.map((g) => (
                <div key={g.title} className={r.group} data-open={open[g.title] ? "" : undefined}>
                  <button type="button" className={r.groupHead} aria-expanded={!!open[g.title]} onClick={() => setOpen((o) => ({ ...o, [g.title]: !o[g.title] }))}>
                    {g.title}
                    <i aria-hidden />
                  </button>
                  <div className={r.groupBody}>
                    <ul>
                      {g.links.map((l) => (
                        <li key={l.label}>
                          <Link href={l.href} aria-current={"current" in l && l.current ? "page" : undefined} tabIndex={open[g.title] ? 0 : -1}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </nav>
            <div className={r.sideInfo}>
              <p className={r.sideLabel}>Al Ain, UAE</p>
              <p className={r.sideSub}>Campus time</p>
              <p className={r.sideClock}>
                <Clock /> <small>GST</small>
              </p>
              <Link href={footerLinks.contact} className={r.sideLink}>
                Media enquiries <Arrow />
              </Link>
            </div>
          </aside>

          <div className={r.main}>
            <h2 id="feed-h" className={r.srOnly}>
              All news
            </h2>
            <div className={r.filters}>
              <label className={r.select}>
                <span className={r.srOnly}>Type</span>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option>All types</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className={r.select}>
                <span className={r.srOnly}>Topic</span>
                <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                  <option>All topics</option>
                  {topics.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className={r.search}>
                <span className={r.srOnly}>Search</span>
                <svg viewBox="0 0 16 16" aria-hidden>
                  <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <input type="search" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} />
              </label>
            </div>

            <div ref={list} className={r.rows} aria-live="polite">
              {rows.map((row, i) =>
                row.size === 1 ? (
                  <ul key={i} className={r.rowBig}>
                    <Big it={row.items[0]} />
                  </ul>
                ) : (
                  <ul key={i} className={row.size === 2 ? r.row2 : r.row3}>
                    {row.items.map((it) => (
                      <Card key={it.slug} it={it} size={row.size as 2 | 3} />
                    ))}
                  </ul>
                ),
              )}
            </div>

            {!pool.length ? (
              <div className={r.empty}>
                <p>Nothing matches these filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setType("All types");
                    setTopic("All topics");
                    setQ("");
                  }}
                >
                  Clear filters
                </button>
              </div>
            ) : null}

            {shown < pool.length ? <div ref={sentinel} className={r.sentinel} aria-hidden /> : null}
            {pool.length && shown >= pool.length ? <p className={r.end}>You&rsquo;re up to date.</p> : null}
            <p className={r.note}>Sample entries shown for layout. Final news to be supplied by Innovation Oasis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
