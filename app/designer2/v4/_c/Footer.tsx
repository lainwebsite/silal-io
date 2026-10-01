"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { Clock } from "./Clock";
import { lenis } from "./SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const BANDS = 18;

/*
 * Footer: Anthem's full-colour brand footer (IO Blue) + Hut 8's striped signature.
 * The official mark (single-colour white, allowed on IO Blue) is cut into horizontal bands that
 * slide in from alternating sides and lock together as the footer arrives. The mark itself is
 * never redrawn: every band is the same SVG, clipped.
 */
export function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const bands = gsap.utils.toArray<HTMLElement>("[data-band]");
        gsap.fromTo(
          bands,
          { xPercent: (i) => (i % 2 ? 1 : -1) * (40 + ((i * 37) % 50)) },
          {
            xPercent: 0,
            ease: "none",
            stagger: { each: 0.02, from: "random" },
            scrollTrigger: { trigger: "[data-stripes]", start: "top bottom", end: "bottom bottom", scrub: 0.6 },
          },
        );
        gsap.from("[data-fr]", {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });
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
    <footer className={s.footer} ref={root} data-tone="blue">
      <div className={s.footTop}>
        <div className={s.footLead} data-fr>
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
          </ul>
        </nav>
        <div className={s.footCol} data-fr>
          <p>Contact</p>
          {/* From the stationery templates; confirm with client (docs/brand.md). */}
          <address>
            Innovation Oasis – Silal
            <br />
            Al Ain, United Arab Emirates
            <span lang="ar" dir="rtl">
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
      </div>

      <div className={s.footBar} data-fr>
        <Link href={BASE} className={s.footLockup} aria-label="Innovation Oasis, part of Silal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/designer2/brand/io-wordmark-endorsed-reversed.svg" alt="" width={326} height={148} />
        </Link>
        <p>© {new Date().getFullYear()} Innovation Oasis. Part of Silal.</p>
        <p className={s.footClock}>
          Al Ain <Clock /> GST
        </p>
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

      <div className={s.stripes} data-stripes aria-hidden>
        <div className={s.stripeMark}>
          {Array.from({ length: BANDS }, (_, i) => (
            <div key={i} className={s.band} data-band style={{ top: `${(i / BANDS) * 100}%`, height: `${100 / BANDS}%` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/io-mark.svg" alt="" style={{ top: `${-i * 100}%`, height: `${BANDS * 100}%` }} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
