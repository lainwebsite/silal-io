"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import s from "../shell.module.css";
import { ACADEMY, nav } from "../_lib/site";
import { lenis } from "./SmoothScroll";

/* The new homepage's header (prototypes/new-homepage/v2/header.html): utility strip, logo, six categories with
   dropdowns, Enquire pill, and below 1180px the round menu button + full-screen list. White, not over a hero. */
const WM = "/new-homepage/brand/io-wordmark-endorsed.svg";
const WMR = "/new-homepage/brand/io-wordmark-endorsed-reversed.svg";
const MARK = "/new-homepage/brand/io-mark.svg";
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const sub = (l: { label: string; ext?: boolean }) => (l.ext ? `${l.label} ↗` : l.label);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const hero = usePathname()?.replace(/\/$/, "") === ACADEMY; // the library opens on a full-bleed photo: header is transparent until the page moves, like the homepage
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenis()?.stop();
    else lenis()?.start();
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={s.header} data-scrolled={scrolled} data-overlay={hero && !scrolled && !open}>
      <div className={s.utility}>
        <div className={`${s.wrap} ${s.utilityInner}`}>
          <span>
            Advancing Agri-food Systems <span className={s.utilitySep}>·</span> <span lang="ar">نحو أنظمة زراعة وغذاء متطورة</span>
          </span>
          <span className={s.utilityLinks}>
            <a href="#">Resources</a>
            <a href="#">Contact</a>
            <span lang="ar">عربي</span>
          </span>
        </div>
      </div>
      <div className={s.headerMain}>
        <div className={`${s.wrap} ${s.headerInner}`}>
          <a href="#" className={s.logo} aria-label="Innovation Oasis, home">
            <span className={s.logoFull}>
              <span className={s.logoOnLight}>
                <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 9 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={WM} alt="Innovation Oasis — Part of Silal" width={110} height={50} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MARK} alt="" height={39} width={53} />
                </span>
              </span>
              <span className={s.logoOnDark}>
                <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 9 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={WMR} alt="Innovation Oasis — Part of Silal" width={110} height={50} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MARK} alt="" height={39} width={53} />
                </span>
              </span>
            </span>
            <span className={s.logoSmall}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={MARK} alt="Innovation Oasis" height={36} width={49} />
            </span>
          </a>
          <nav className={s.nav} aria-label="Main">
            <ul>
              {nav.map((g) => (
                <li key={g.label} className={s.navItem}>
                  <a href="#" data-active={g.label === "Talent & Training"}>
                    {g.label}
                  </a>
                  <div className={s.dropdown}>
                    <div className={s.dropdownInner}>
                      <p>{g.blurb}</p>
                      <ul>
                        {g.subs.map((l) => (
                          <li key={l.label}>
                            <Link href={l.href}>{sub(l)}</Link>
                          </li>
                        ))}
                      </ul>
                      <a href="#" className={s.textLink}>
                        {g.label} <Arrow />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.headerActions}>
            <a href="#" className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`}>
              Enquire <Arrow />
            </a>
            <button className={s.menuToggle} aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div className={s.mobileNav} data-open={open} aria-hidden={!open}>
        <div className={`${s.wrap} ${s.mobileNavTop}`}>
          <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={WM} alt="Innovation Oasis — Part of Silal" width={93} height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MARK} alt="" height={33} width={45} />
          </span>
          <button className={s.menuClose} aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M7 7l14 14M21 7 7 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className={s.wrap}>
          {nav.map((g, i) => (
            <details key={g.label} className={s.mobileGroup} open={g.label === "Talent & Training"}>
              <summary>
                <span className={s.mobileNum}>{String(i + 1).padStart(2, "0")}</span>
                {g.label}
              </summary>
              <ul>
                <li>
                  <a href="#">Overview</a>
                </li>
                {g.subs.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} onClick={() => setOpen(false)}>
                      {sub(l)}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <div className={s.mobileFoot}>
            <a href="#" className={`${s.btn} ${s.btnPrimary}`}>
              Enquire <Arrow />
            </a>
            <a href="#" className={`${s.btn}`} style={{ borderColor: "var(--line)" }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
