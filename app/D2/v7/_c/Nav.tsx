"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { Btn } from "./Brand";
import { lenis } from "./SmoothScroll";

/*
 * Header: logo (format three — wordmark with "Part of Silal", mark right), the six sitemap
 * categories with their pages in a small dropdown, one "Contact us" button. White, a hairline
 * appears once the page scrolls; hides while scrolling down. Phones: a full-height list.
 */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) > 8) {
        setHide(y > last && y > 240);
        last = y;
      }
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (open) lenis()?.stop();
    else lenis()?.start();
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <>
      <header className={s.nav} data-hide={hide && !open ? "" : undefined} data-scrolled={scrolled || open ? "" : undefined}>
        <div className={s.navIn}>
          <Link href={BASE} className={s.logo} aria-label="Innovation Oasis, part of Silal — home">
            {/* Logo format three (guidelines p.9), official paths in a cropped view. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/D2/brand/io-wordmark-endorsed.svg" alt="" width={326} height={148} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/io-mark.svg" alt="" width={255} height={188} />
          </Link>
          <ul className={s.links}>
            {nav.map((n) => (
              <li key={n.key}>
                <Link href={n.href} aria-current={n.key === "about" ? "page" : undefined}>
                  {n.label}
                </Link>
                <div className={s.drop}>
                  {n.subs.map((sub) => (
                    <Link key={sub.label} href={sub.href} target={sub.external ? "_blank" : undefined} rel={sub.external ? "noreferrer" : undefined}>
                      {sub.label}
                      <span aria-hidden>{sub.external ? "↗" : "→"}</span>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className={s.navCta}>
            <Btn href={footerLinks.contact}>Contact us</Btn>
          </div>
          <button type="button" className={s.burger} aria-expanded={open} aria-controls="d7-menu" onClick={() => setOpen((o) => !o)}>
            <i />
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <div id="d7-menu" className={s.panel} hidden={!open}>
        <ul>
          {nav.map((n) => (
            <li key={n.key}>
              <Link href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
              <ul>
                {n.subs.map((sub) => (
                  <li key={sub.label}>
                    <Link href={sub.href} onClick={() => setOpen(false)}>
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 24 }}>
          <Btn href={footerLinks.contact}>Contact us</Btn>
        </div>
      </div>
    </>
  );
}
