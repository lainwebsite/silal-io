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
 * Nav (after Hut 8): logo top-left, a solid IO-blue pill top-right ("Menu" + icon), Contact beside it.
 * The logo switches to its reversed file over dark sections ([data-tone="dark"]).
 * Menu (after Hut 8 / Anthem): a charcoal sheet drops from the top with cut bottom corners;
 * six sitemap categories, large; hovering one shows its pages and photo.
 */
export function Nav() {
  const pathname = usePathname();
  const [tone0, setTone0] = useState<"light" | "dark" | "blue">("light");
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState(0);
  const sheet = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const els = document.querySelectorAll<HTMLElement>("main [data-tone], footer[data-tone]"); // not the header itself
      let d: "light" | "dark" | "blue" = "light";
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= 40 && r.bottom > 40) d = (el.dataset.tone as "dark" | "blue") ?? "light";
      });
      setTone0(d);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [pathname]);

  useEffect(() => {
    const el = sheet.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (first.current) {
      first.current = false;
      if (!open) return;
    }
    const items = el.querySelectorAll("[data-mi]");
    if (open) {
      lenis()?.stop();
      el.hidden = false;
      gsap
        .timeline()
        .fromTo(el, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: reduce ? 0 : 0.9, ease: "expo.inOut" })
        .fromTo(items, { yPercent: 110 }, { yPercent: 0, duration: reduce ? 0 : 1, ease: "expo.out", stagger: 0.05 }, reduce ? 0 : 0.35)
        .fromTo("[data-mf]", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: reduce ? 0 : 0.7, stagger: 0.05 }, reduce ? 0 : 0.6);
    } else {
      gsap.to(el, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: reduce ? 0 : 0.7,
        ease: "expo.inOut",
        onComplete: () => {
          el.hidden = true;
        },
      });
      lenis()?.start();
    }
  }, [open]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const c = nav[cat];
  const tone = open ? "dark" : tone0;
  return (
    <>
      <header className={s.nav} data-tone={tone}>
        <Link href={BASE} className={s.brand} aria-label="Innovation Oasis, home">
          {/* Logo format three (guidelines p.9): wordmark + endorsement, mark right. Official paths (cropped viewBox). */}
          <span className={s.word}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/390b3d94a5/brand/io-wordmark-endorsed.svg" alt="" width={326} height={148} data-v="light" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/390b3d94a5/brand/io-wordmark-endorsed-reversed.svg" alt="" width={326} height={148} data-v="dark" />
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/io-mark.svg" alt="" width={255} height={188} className={s.mark} />
        </Link>
        <div className={s.navEnd}>
          <Link href={footerLinks.contact} className={s.navContact}>
            Contact us
          </Link>
          <button type="button" className={s.pill} aria-expanded={open} aria-controls="d4-menu" onClick={() => setOpen((o) => !o)}>
            <span className={s.pillWord}>{open ? "Close" : "Menu"}</span>
            <span className={s.pillIcon} aria-hidden>
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div id="d4-menu" ref={sheet} className={s.menu} hidden role="dialog" aria-modal="true" aria-label="Menu">
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
                  <Image src={n.img} alt="" fill sizes="28vw" />
                </div>
              ))}
            </div>
            <p className={s.menuHead}>{c.label}</p>
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
        <div className={s.menuFoot} data-mf>
          <p>
            Advancing Agri-food Systems{" "}
            <span lang="ar" dir="rtl">
              نحو أنظمة زراعة وغذاء متطورة
            </span>
          </p>
          <p>Innovation Oasis – Silal · Al Ain, United Arab Emirates</p>
          <p>
            <a href={footerLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export function goTo(el: HTMLElement) {
  const l = lenis();
  if (l) l.scrollTo(el, { duration: 2 });
  else el.scrollIntoView({ behavior: "smooth" });
}
