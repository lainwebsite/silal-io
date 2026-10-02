"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { lenis } from "./SmoothScroll";

/*
 * Header: three quiet capsules floating on the page (compact, minimal).
 *  left   — menu + the current page
 *  centre — the logo in format three (wordmark + "Part of Silal", mark right): the only place the mark appears
 *  right  — Contact / Enquire
 * Menu: a white panel drops from the top with the six sitemap categories and their pages.
 */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState(0);
  const [hide, setHide] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 8) {
        setHide(y > last && y > 300);
        last = y;
      }
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  useEffect(() => {
    const el = panel.current!;
    if (first.current) {
      first.current = false;
      if (!open) return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (open) {
      lenis()?.stop();
      el.hidden = false;
      gsap
        .timeline()
        .fromTo(el, { clipPath: "inset(0 0 100% 0 round 0 0 10px 10px)" }, { clipPath: "inset(0 0 0% 0 round 0 0 10px 10px)", duration: reduce ? 0 : 0.8, ease: "expo.inOut" })
        .fromTo(el.querySelectorAll("[data-mi]"), { yPercent: 110 }, { yPercent: 0, duration: reduce ? 0 : 0.9, ease: "expo.out", stagger: 0.04 }, reduce ? 0 : 0.3)
        .fromTo(el.querySelectorAll("[data-mf]"), { opacity: 0 }, { opacity: 1, duration: reduce ? 0 : 0.6 }, reduce ? 0 : 0.5);
    } else {
      gsap.to(el, { clipPath: "inset(0 0 100% 0 round 0 0 10px 10px)", duration: reduce ? 0 : 0.6, ease: "expo.inOut", onComplete: () => void (el.hidden = true) });
      lenis()?.start();
    }
  }, [open]);

  const c = nav[cat];
  return (
    <>
      <header className={s.nav} data-hide={hide && !open ? "" : undefined}>
        <div className={s.cap}>
          <button type="button" className={s.burger} aria-expanded={open} aria-controls="d6-menu" onClick={() => setOpen((o) => !o)}>
            <i data-x={open ? "" : undefined} />
            <span>{open ? "Close" : "Menu"}</span>
          </button>
          <span className={s.capSep} aria-hidden />
          <Link href={BASE} className={s.capLink} aria-current="page">
            About IO
          </Link>
        </div>

        <Link href={BASE} className={`${s.cap} ${s.capLogo}`} aria-label="Innovation Oasis, part of Silal — home">
          {/* Logo format three (guidelines p.9): wordmark + endorsement, mark right. Official paths (cropped view). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/V3/brand/io-wordmark-endorsed.svg" alt="" width={326} height={148} className={s.logoWord} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/io-mark.svg" alt="" width={255} height={188} className={s.logoMark} />
        </Link>

        <div className={`${s.cap} ${s.capEnd}`}>
          <Link href={footerLinks.contact} className={s.capLink}>
            Contact
          </Link>
          <Link href={footerLinks.contact} className={s.capCta}>
            Enquire
          </Link>
        </div>
      </header>

      <div id="d6-menu" ref={panel} className={s.menu} hidden role="dialog" aria-modal="true" aria-label="Menu">
        <div className={s.menuGrid}>
          <ol className={s.menuList}>
            {nav.map((n, i) => (
              <li key={n.key} onMouseEnter={() => setCat(i)} onFocus={() => setCat(i)} data-on={i === cat ? "" : undefined}>
                <span className={s.mask}>
                  <span data-mi>
                    <Link href={n.href} onClick={() => setOpen(false)}>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      {n.label}
                    </Link>
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <div className={s.menuSide} data-mf>
            <div className={s.menuImg}>
              {nav.map((n, i) => (
                <div key={n.key} data-on={i === cat ? "" : undefined}>
                  <Image src={n.img} alt="" fill sizes="30vw" />
                </div>
              ))}
            </div>
            <ul className={s.menuSubs} key={c.key}>
              {c.subs.map((sub) => (
                <li key={sub.label}>
                  <Link href={sub.href} onClick={() => setOpen(false)} target={sub.external ? "_blank" : undefined} rel={sub.external ? "noreferrer" : undefined}>
                    {sub.label}
                    <span aria-hidden>{sub.external ? "↗" : "→"}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={s.menuFoot} data-mf>
          <span>Advancing Agri-food Systems</span>
          <span lang="ar" dir="rtl">
            نحو أنظمة زراعة وغذاء متطورة
          </span>
        </p>
      </div>
    </>
  );
}
