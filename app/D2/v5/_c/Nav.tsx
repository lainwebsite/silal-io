"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { Mark } from "./Brand";
import { lenis } from "./SmoothScroll";

/*
 * Header after the guideline website mock (p.27): white bar, "Part of Silal" endorsement in clear
 * space at the top, wordmark left, small IO-Blue nav links, "contact" set small above them,
 * full-width IO-Blue hairline underneath. The six sitemap labels, exactly.
 * Hover a label: a white panel drops with its pages and a photo. Small screens: a white sheet.
 * The small mark joins the bar once the hero's large mark has scrolled away.
 */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [sheet, setSheet] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useRef<number | null>(null);
  const sheetEl = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > window.innerHeight * 0.5);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [pathname]);

  useEffect(() => {
    setOpen(null);
    setSheet(false);
  }, [pathname]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setSheet(false);
      }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  useEffect(() => {
    const el = sheetEl.current!;
    if (first.current) {
      first.current = false;
      if (!sheet) return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (sheet) {
      lenis()?.stop();
      el.hidden = false;
      gsap
        .timeline()
        .fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: reduce ? 0 : 0.8, ease: "expo.inOut" })
        .fromTo(el.querySelectorAll("[data-si]"), { yPercent: 110 }, { yPercent: 0, duration: reduce ? 0 : 0.9, ease: "expo.out", stagger: 0.05 }, reduce ? 0 : 0.3);
    } else {
      gsap.to(el, { clipPath: "inset(0 0 100% 0)", duration: reduce ? 0 : 0.6, ease: "expo.inOut", onComplete: () => void (el.hidden = true) });
      lenis()?.start();
    }
  }, [sheet]);

  const enter = (i: number) => {
    if (t.current) window.clearTimeout(t.current);
    setOpen(i);
  };
  const leave = () => {
    t.current = window.setTimeout(() => setOpen(null), 160);
  };
  const c = open !== null ? nav[open] : null;

  return (
    <>
      <header className={s.nav} data-scrolled={scrolled ? "" : undefined} onMouseLeave={leave}>
        <p className={s.endorse}>Part of Silal · جزء من سلال</p>
        <div className={s.navRow}>
          <Link href={BASE} className={s.brand} aria-label="Innovation Oasis, home">
            {/* wordmark only (cropped view of the official lock-up); the endorsement sits in clear space above, as on guideline p.4/27 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/D2/brand/io-wordmark.svg" alt="" width={326} height={94} className={s.word} />
          </Link>
          <nav className={s.links} aria-label="Main">
            <Link href={footerLinks.contact} className={s.contact}>
              contact
            </Link>
            <ul>
              {nav.map((n, i) => (
                <li key={n.key} onMouseEnter={() => enter(i)}>
                  <Link href={n.href} onFocus={() => enter(i)} aria-expanded={open === i} data-on={open === i ? "" : undefined}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" className={s.menuBtn} aria-expanded={sheet} aria-controls="d5-sheet" onClick={() => setSheet((v) => !v)}>
            {sheet ? "close" : "menu"}
            <span className={s.goO} aria-hidden>
              <i className={s.menuLines} data-x={sheet ? "" : undefined} />
            </span>
          </button>
          <Link href={BASE} className={s.navMark} aria-hidden tabIndex={-1}>
            <Mark />
          </Link>
        </div>
        <span className={s.navRule} aria-hidden />

        <div className={s.drop} data-open={c ? "" : undefined} onMouseEnter={() => open !== null && enter(open)}>
          {c ? (
            <div className={s.dropInner} key={c.key}>
              <div className={s.dropIntro}>
                <p className={s.dropKick}>{String((open ?? 0) + 1).padStart(2, "0")} · Explore</p>
                <p className={s.dropTitle}>{c.label}</p>
                <Link href={c.href} className={s.dropAll}>
                  Overview →
                </Link>
              </div>
              <ul className={s.dropList}>
                {c.subs.map((sub) => (
                  <li key={sub.label}>
                    <Link href={sub.href} target={sub.external ? "_blank" : undefined} rel={sub.external ? "noreferrer" : undefined}>
                      {sub.label}
                      <span aria-hidden>{sub.external ? "↗" : "→"}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={s.dropImg}>
                <Image src={c.img} alt="" fill sizes="26vw" />
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <div id="d5-sheet" ref={sheetEl} className={s.sheet} hidden role="dialog" aria-modal="true" aria-label="Menu">
        <ol>
          {nav.map((n, i) => (
            <li key={n.key}>
              <span className={s.mask}>
                <span data-si>
                  <Link href={n.href} onClick={() => setSheet(false)}>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    {n.label}
                  </Link>
                </span>
              </span>
            </li>
          ))}
        </ol>
        <p className={s.sheetFoot}>
          Advancing Agri-food Systems
          <span lang="ar" dir="rtl">
            نحو أنظمة زراعة وغذاء متطورة
          </span>
        </p>
      </div>
    </>
  );
}
