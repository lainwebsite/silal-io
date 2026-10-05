"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "../chrome.module.css";
import { Lockup, Mark } from "./Brand";
import { BASE, footerLinks, nav } from "../_lib/site";

export function Footer() {
  // News & Media pages: no large mark (client feedback); the About page keeps its back-cover mark.
  const plain = usePathname().includes("/resources/news");
  return (
    <footer className={s.footer} data-plain={plain ? "" : undefined}>
      {plain ? null : <Mark className={s.footerMark} alt="" />}
      <div className={s.footerInner}>
        <div className={s.footerBrand}>
          <Link href={BASE} aria-label="Innovation Oasis, home">
            <Lockup reversed className={s.footerLockup} />
          </Link>
          <p className={s.tagline}>
            Advancing Agri-food Systems
            <span lang="ar" dir="rtl">
              نحو أنظمة زراعة وغذاء متطورة
            </span>
          </p>
        </div>

        <nav className={s.footerCols} aria-label="Footer">
          <div>
            <p className={s.footerHead}>Explore</p>
            <ul>
              {nav.map((c) => (
                <li key={c.key}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={s.footerHead}>Resources</p>
            <ul>
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={s.footerHead}>Visit</p>
            {/* From the stationery templates; confirm with client (docs/brand.md). */}
            <address>
              Innovation Oasis – Silal
              <br />
              Al Ain, United Arab Emirates
              <span lang="ar" dir="rtl" className={s.footerAr}>
                واحة الابتكار – سلال، العين، الإمارات العربية المتحدة
              </span>
            </address>
            <ul>
              <li>
                <a href="tel:+97126144444">+971 261 44444</a>
              </li>
              <li>
                <Link href={footerLinks.contact}>Contact &amp; enquiries</Link>
              </li>
              <li>
                <a href={footerLinks.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={s.footerBase}>
        <p>© {new Date().getFullYear()} Innovation Oasis. Part of Silal.</p>
        <ul>
          {footerLinks.legal.map((l) => (
            <li key={l.label}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
