"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { Clock } from "./Clock";
import { getLenis } from "./SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

/*
 * Footer as the last scene of the World (charcoal sky). The tagline is the headline;
 * the reversed lock-up carries the "Part of Silal" endorsement. A big mark rises from the bottom edge.
 */
export function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 75%", once: true } });
        tl.from("[data-fw]", { yPercent: 110, duration: 1.4, ease: "expo.out", stagger: 0.06 })
          .from("[data-ff]", { opacity: 0, y: 20, duration: 1, ease: "power3.out", stagger: 0.04 }, 0.3)
          .from("[data-frule]", { scaleX: 0, transformOrigin: "left center", duration: 1.6, ease: "expo.inOut" }, 0.1);
        gsap.fromTo(
          "[data-fmark]",
          { yPercent: 40 },
          { yPercent: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true } },
        );
      });
    },
    { scope: root },
  );

  const top = () => {
    const l = getLenis();
    if (l) l.scrollTo(0, { duration: 2.6, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={s.footer} ref={root} data-scene="footer">
      <div className={s.footInner}>
        <div className={s.footHead}>
          <p className={s.footTag}>
            <span className={s.footMask}>
              <span data-fw>Advancing</span>
            </span>{" "}
            <span className={s.footMask}>
              <span data-fw>Agri-food</span>
            </span>{" "}
            <span className={s.footMask}>
              <span data-fw>Systems</span>
            </span>
          </p>
          <p className={s.footTagAr} lang="ar" dir="rtl" data-ff>
            نحو أنظمة زراعة وغذاء متطورة
          </p>
        </div>

        <span className={s.footRule} data-frule aria-hidden />

        <div className={s.footGrid}>
          <div className={s.footBrand} data-ff>
            <Link href={BASE} aria-label="Innovation Oasis, home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/io-lockup-reversed.svg" alt="Innovation Oasis, part of Silal" width={330} height={380} />
            </Link>
          </div>
          <nav className={s.footCol} aria-label="Explore" data-ff>
            <p>Explore</p>
            <ul>
              {nav.map((n) => (
                <li key={n.key}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={s.footCol} aria-label="Resources" data-ff>
            <p>Resources</p>
            <ul>
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.footCol} data-ff>
            <p>Visit</p>
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

        <div className={s.footBase} data-ff>
          <p>© {new Date().getFullYear()} Innovation Oasis. Part of Silal.</p>
          <p className={s.footTime}>
            Al Ain <Clock seconds /> GST
          </p>
          <ul>
            {footerLinks.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <button type="button" className={s.footTop} onClick={top}>
            Back to the beginning <span aria-hidden>↑</span>
          </button>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/io-mark.svg" alt="" className={s.footMark} data-fmark width={255} height={188} />
    </footer>
  );
}
