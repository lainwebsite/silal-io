"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import s from "../v1.module.css";
import { Arrow, IoHorizontal, IoMark } from "./Brand";
import { BASE, nav } from "../_lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent header over full-bleed heroes until the page scrolls.
  const overlayPage = [`${BASE}/about`, `${BASE}/about-b`, `${BASE}/about-c`, `${BASE}/about-d`].includes(pathname);
  const overlay = overlayPage && !scrolled && !open;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={s.header} data-scrolled={scrolled} data-overlay={overlay}>
      <div className={s.utility}>
        <div className={`${s.wrap} ${s.utilityInner}`}>
          <span>
            Advancing Agri-food Systems <span className={s.utilitySep}>·</span>{" "}
            <span lang="ar">نحو أنظمة زراعة وغذاء متطورة</span>
          </span>
          <span className={s.utilityLinks}>
            <Link href={`${BASE}/resources`}>Resources</Link>
            <Link href={`${BASE}/contact`}>Contact</Link>
            <span lang="ar" title="Arabic version coming">
              عربي
            </span>
          </span>
        </div>
      </div>

      <div className={s.headerMain}>
        <div className={`${s.wrap} ${s.headerInner}`}>
          <Link href={BASE} className={s.logo} aria-label="Innovation Oasis — home">
            <span className={s.logoFull}>
              <span className={s.logoOnLight}>
                <IoHorizontal height={50} />
              </span>
              <span className={s.logoOnDark}>
                <IoHorizontal height={50} reversed />
              </span>
              <span className={s.logoOnBlue}>
                <img
                  src="/designer1/brand/io-wordmark-endorsed-reversed.svg"
                  alt="Innovation Oasis — Part of Silal"
                  width={110}
                  height={50}
                  className={s.wordmarkWhite}
                />
                <img src="/designer1/brand/io-mark-white-on-blue.svg" alt="" width={53} height={39} />
              </span>
            </span>
            <span className={s.logoSmall}>
              <IoMark height={36} />
            </span>
          </Link>

          <nav className={s.nav} aria-label="Main">
            <ul>
              {nav.map((c) => (
                <li key={c.key} className={s.navItem}>
                  <Link href={c.href} data-active={pathname.startsWith(c.href)}>
                    {c.label}
                  </Link>
                  <div className={s.dropdown}>
                    <div className={s.dropdownInner}>
                      <p>{c.blurb}</p>
                      <ul>
                        {c.subs.map((sub) => (
                          <li key={sub.label}>
                            <Link href={sub.href}>
                              {sub.label}
                              {sub.external ? " ↗" : ""}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link href={c.href} className={s.textLink}>
                        {c.label} <Arrow />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className={s.headerActions}>
            <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`}>
              Enquire <Arrow />
            </Link>
            <button className={s.menuToggle} aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div className={s.mobileNav} data-open={open} aria-hidden={!open}>
        <div className={`${s.wrap} ${s.mobileNavTop}`}>
          <IoHorizontal height={42} />
          <button className={s.menuClose} aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M7 7l14 14M21 7 7 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className={s.wrap}>
          {nav.map((c, i) => (
            <details key={c.key} className={s.mobileGroup}>
              <summary>
                <span className={s.mobileNum}>{String(i + 1).padStart(2, "0")}</span>
                {c.label}
              </summary>
              <ul>
                <li>
                  <Link href={c.href}>Overview</Link>
                </li>
                {c.subs.map((sub) => (
                  <li key={sub.label}>
                    <Link href={sub.href}>{sub.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <div className={s.mobileFoot}>
            <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnPrimary}`}>
              Enquire <Arrow />
            </Link>
            <Link href={`${BASE}/contact`} className={`${s.btn} ${s.btnGhostLight}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
