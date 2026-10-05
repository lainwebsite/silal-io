"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { Clock } from "./Clock";
import { Mark, Wordmark } from "./Brand";
import { lenis } from "./SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

/*
 * Footer = the guideline back cover (last page of the book): white, the IO mark large, an IO-Blue
 * hairline dropping from the stem of the "i" down the page, the wordmark + address set against it.
 * Above it: tagline (EN + AR), sitemap, contact — separated by the guideline hairline.
 * Scroll: the hairline draws downward and the mark rises into place.
 */
export function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-fr]", { y: 30, opacity: 0, duration: 1.2, ease: "expo.out", stagger: 0.06, scrollTrigger: { trigger: root.current, start: "top 80%", once: true } });
        const tl = gsap.timeline({ scrollTrigger: { trigger: "[data-sign]", start: "top 90%", end: "bottom bottom", scrub: 0.8 } });
        tl.fromTo("[data-sign-mark]", { yPercent: 30, opacity: 0 }, { yPercent: 0, opacity: 1, ease: "none", duration: 1 }, 0).fromTo(
          "[data-sign-line]",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", duration: 1.2, transformOrigin: "top center" },
          0.2,
        );
      });
    },
    { scope: root },
  );

  const top = () => {
    const l = lenis();
    if (l) l.scrollTo(0, { duration: 2.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={s.footer} ref={root}>
      <span className={s.footRule} aria-hidden />
      <div className={s.footTop}>
        <div className={s.footLead} data-fr>
          <p className={s.footKick}>Our tagline</p>
          <p className={s.footTag}>Advancing Agri-food Systems</p>
          <p className={s.footAr} lang="ar" dir="rtl">
            نحو أنظمة زراعة وغذاء متطورة
          </p>
        </div>
        <nav className={s.footCol} aria-label="Explore" data-fr>
          <p>Explore</p>
          <ul>
            {nav.map((n) => (
              <li key={n.key}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={s.footCol} aria-label="Resources" data-fr>
          <p>Resources</p>
          <ul>
            {footerLinks.resources.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={footerLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </nav>
        <div className={s.footCol} data-fr>
          <p>Contact</p>
          <ul>
            <li>
              <a href="tel:+97126144444">+971 261 44444</a>
            </li>
            <li>
              <Link href={footerLinks.contact}>Contact &amp; enquiries</Link>
            </li>
          </ul>
          <p className={s.footTime}>
            Al Ain <Clock /> GST
          </p>
        </div>
      </div>

      <div className={s.sign} data-sign>
        <div className={s.signMark} data-sign-mark>
          <Mark />
          <span className={s.signLine} data-sign-line aria-hidden />
        </div>
        <div className={s.signText}>
          <Link href={BASE} aria-label="Innovation Oasis, part of Silal">
            <Wordmark className={s.signWord} />
          </Link>
          {/* From the stationery templates; confirm with client (docs/brand.md). */}
          <address>
            <span lang="ar" dir="rtl">
              واحة الابتكار – سلال، العين، الإمارات العربية المتحدة
            </span>
            Innovation Oasis – Silal, Al Ain, United Arab Emirates
          </address>
        </div>
      </div>

      <div className={s.footBase}>
        <p>© {new Date().getFullYear()} Innovation Oasis. Part of Silal.</p>
        <ul>
          {footerLinks.legal.map((l) => (
            <li key={l.label}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <button type="button" onClick={top} className={s.footUp}>
          Back to top <span aria-hidden>↑</span>
        </button>
      </div>
    </footer>
  );
}
