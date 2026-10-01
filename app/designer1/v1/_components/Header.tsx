"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import s from "../v1.module.css";
import { Arrow, IoMark } from "./Brand";
import { BASE, mainNav } from "./nav";

export function Header() {
  const pathname = usePathname();
  const overlay = pathname === BASE;
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`${s.header} ${overlay ? "" : s.headerSolid}`}>
      <div className={`${s.wrap} ${s.headerInner}`}>
        <Link href={BASE} className={s.logo} aria-label="Silal Innovation Oasis — home">
          <IoMark size={34} color={overlay ? "#ffffff" : "#1689cf"} />
          <span className={s.logoText}>
            <b>Innovation Oasis</b>
            <span>by Silal</span>
          </span>
        </Link>

        <nav className={s.nav} aria-label="Main">
          {mainNav.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={s.headerActions}>
          <span className={s.lang}>EN / عربي</span>
          <Link href={`${BASE}/enquire`} className={`${s.btn} ${overlay ? s.btnLight : s.btnPrimary}`}>
            Enquire <Arrow />
          </Link>
          <button className={s.menuToggle} aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M4 9h20M4 19h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={s.mobileNav} data-open={open}>
        <div className={s.mobileNavTop}>
          <IoMark size={30} color="#ffffff" />
          <button className={s.menuToggle} aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M7 7l14 14M21 7 7 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul>
          {mainNav.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href={`${BASE}/contact`}>Contact</Link>
          </li>
        </ul>
        <div style={{ marginTop: 32 }}>
          <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnLight}`}>
            Enquire <Arrow />
          </Link>
        </div>
      </div>
    </header>
  );
}
