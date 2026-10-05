"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { gsap } from "gsap";
import s from "../shell.module.css";
import { footerLinks, nav } from "../_lib/site";
import { getLenis } from "./SmoothScroll";

/*
 * Full-screen menu that opens as a circle from the Menu button (the O of the mark).
 * Six sitemap categories, large; hovering one shows its pages and its photo inside an O lens.
 */
export function Menu({ open, onClose, origin }: { open: boolean; onClose: () => void; origin: RefObject<HTMLButtonElement | null> }) {
  const root = useRef<HTMLDivElement>(null);
  const [cat, setCat] = useState(0);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const first = useRef(true);

  useEffect(() => {
    const el = root.current!;
    const btn = origin.current;
    const r = btn?.getBoundingClientRect();
    const ox = r ? r.left + r.width - 22 : window.innerWidth - 40;
    const oy = r ? r.top + r.height / 2 : 36;
    el.style.setProperty("--ox", `${ox}px`);
    el.style.setProperty("--oy", `${oy}px`);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    tl.current?.kill();
    if (first.current) {
      first.current = false;
      if (!open) return;
    }
    const items = el.querySelectorAll("[data-mi]");
    const fades = el.querySelectorAll("[data-mf]");
    if (open) {
      getLenis()?.stop();
      document.documentElement.style.overflow = "hidden";
      el.hidden = false;
      tl.current = gsap
        .timeline()
        .fromTo(el, { clipPath: `circle(0px at ${ox}px ${oy}px)` }, { clipPath: `circle(150vmax at ${ox}px ${oy}px)`, duration: reduce ? 0 : 1.1, ease: "expo.inOut" })
        .fromTo(items, { yPercent: 110 }, { yPercent: 0, duration: reduce ? 0 : 1.1, ease: "expo.out", stagger: 0.05 }, reduce ? 0 : 0.45)
        .fromTo(fades, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: reduce ? 0 : 0.8, ease: "power3.out", stagger: 0.04 }, reduce ? 0 : 0.7);
      (el.querySelector("[data-mi] a") as HTMLElement | null)?.focus({ preventScroll: true });
    } else {
      tl.current = gsap
        .timeline({
          onComplete: () => {
            el.hidden = true;
          },
        })
        .to(el, { clipPath: `circle(0px at ${ox}px ${oy}px)`, duration: reduce ? 0 : 0.85, ease: "expo.inOut" });
      document.documentElement.style.overflow = "";
      getLenis()?.start();
    }
  }, [open, origin]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && open && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const c = nav[cat];
  return (
    <div id="d3-menu" className={s.menu} ref={root} hidden role="dialog" aria-modal="true" aria-label="Menu">
      <div className={s.menuGrid}>
        <ol className={s.menuList}>
          {nav.map((n, i) => (
            <li key={n.key} onMouseEnter={() => setCat(i)} onFocus={() => setCat(i)} data-on={i === cat ? "" : undefined}>
              <span className={s.menuMask}>
                <span data-mi>
                  <Link href={n.href} onClick={onClose}>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    {n.label}
                  </Link>
                </span>
              </span>
            </li>
          ))}
        </ol>
        <div className={s.menuSide}>
          <div className={s.menuLens} data-mf>
            {nav.map((n, i) => (
              <div key={n.key} className={s.menuLensImg} data-on={i === cat ? "" : undefined}>
                <Image src={n.img} alt="" fill sizes="30vw" />
              </div>
            ))}
            <span className={s.menuLensRing} aria-hidden />
          </div>
          <div className={s.menuSubs} data-mf key={c.key}>
            <p className={s.menuSubHead}>{c.label}</p>
            <ul>
              {c.subs.map((sub) => (
                <li key={sub.label}>
                  <Link href={sub.href} onClick={onClose} target={sub.external ? "_blank" : undefined} rel={sub.external ? "noreferrer" : undefined}>
                    {sub.label}
                    <span aria-hidden>{sub.external ? "↗" : "→"}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={s.menuFoot}>
        <p data-mf>
          Advancing Agri-food Systems
          <span lang="ar" dir="rtl">
            نحو أنظمة زراعة وغذاء متطورة
          </span>
        </p>
        <p data-mf>
          Innovation Oasis – Silal
          <br />
          Al Ain, United Arab Emirates
        </p>
        <p data-mf>
          <Link href={footerLinks.contact} onClick={onClose}>
            Contact &amp; enquiries
          </Link>
          <a href={footerLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </p>
      </div>
    </div>
  );
}
