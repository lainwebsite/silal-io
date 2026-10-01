"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import s from "../v1.module.css";
import { Mark, Wordmark } from "./Brand";
import { BASE, footerLinks, nav } from "../_lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [darkHero, setDarkHero] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<number | null>(null);

  // Transparent over a dark hero (pages mark it with data-hero="dark"), solid once scrolled.
  useEffect(() => {
    setDarkHero(!!document.querySelector('[data-hero="dark"]'));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobile]);

  const enter = (key: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const leave = () => {
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };

  const onDark = darkHero && !scrolled && !open && !mobile;
  const active = nav.find((c) => c.key === open);

  return (
    <header className={s.header} data-ondark={onDark ? "" : undefined} data-solid={!onDark ? "" : undefined}>
      <div className={s.headerBar} onMouseLeave={leave}>
        <Link href={BASE} className={s.headerBrand} aria-label="Innovation Oasis, home">
          {/* Logo format three (guidelines p.9): wordmark + endorsement left, mark right. */}
          <Wordmark reversed={onDark} className={s.headerWordmark} />
          <Mark className={s.headerMark} alt="" />
        </Link>

        <nav className={s.nav} aria-label="Main">
          <ul>
            {nav.map((c) => (
              <li key={c.key} onMouseEnter={() => enter(c.key)}>
                <Link
                  href={c.href}
                  className={s.navLink}
                  aria-expanded={open === c.key}
                  aria-controls="d2-mega"
                  data-current={pathname.startsWith(c.href) ? "" : undefined}
                  onFocus={() => enter(c.key)}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.headerEnd}>
          <Link href={footerLinks.contact} className={s.headerCta}>
            Contact
          </Link>
          <button
            type="button"
            className={s.menuBtn}
            aria-expanded={mobile}
            aria-controls="d2-mobile"
            onClick={() => setMobile((m) => !m)}
          >
            <span className={s.menuBtnLines} aria-hidden />
            <span className={s.srOnly}>{mobile ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        <div
          id="d2-mega"
          className={s.mega}
          data-open={active ? "" : undefined}
          onMouseEnter={() => active && enter(active.key)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
          }}
        >
          {active && (
            <div className={s.megaInner} key={active.key}>
              <div className={s.megaIntro}>
                <p className={s.kicker}>{active.n === "00" ? "About" : `Platform ${active.n}`}</p>
                <p className={s.megaTitle}>{active.label}</p>
                <p className={s.megaBlurb}>{active.blurb}</p>
                <Link href={active.href} className={s.arrowLink}>
                  Overview
                </Link>
              </div>
              <ul className={s.megaList}>
                {active.subs.map((sub) => (
                  <li key={sub.label}>
                    <Link href={sub.href} target={sub.external ? "_blank" : undefined} rel={sub.external ? "noreferrer" : undefined}>
                      <span>{sub.label}</span>
                      <span aria-hidden>{sub.external ? "↗" : "→"}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={s.megaImg} style={{ backgroundImage: `url("${active.img}")` }} aria-hidden />
            </div>
          )}
        </div>
      </div>

      <div id="d2-mobile" className={s.mobile} data-open={mobile ? "" : undefined} hidden={!mobile}>
        <ul className={s.mobileList}>
          {nav.map((c) => (
            <li key={c.key}>
              <details>
                <summary>
                  <span className={s.mobileNum}>{c.n}</span>
                  {c.label}
                </summary>
                <ul>
                  <li>
                    <Link href={c.href}>Overview</Link>
                  </li>
                  {c.subs.map((sub) => (
                    <li key={sub.label}>
                      <Link href={sub.href}>
                        {sub.label}
                        {sub.external ? " ↗" : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
        <div className={s.mobileFoot}>
          <Link href={footerLinks.contact} className={s.btn}>
            Contact us
          </Link>
          <p className={s.tagline}>
            Advancing Agri-food Systems
            <span lang="ar" dir="rtl">
              نحو أنظمة زراعة وغذاء متطورة
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
