"use client";

import Link from "next/link";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { gsap } from "gsap";
import s from "./shell.module.css";
import type { ShellCategory } from "./types";

type FooterLink = { label: string; href: string };

type Props = {
  /** The six menu categories (Explore column). */
  nav: ShellCategory[];
  /** "Resources" column. A leading "Resources" hub entry is skipped (the column heading already says it). */
  resources: FooterLink[];
  legal: FooterLink[];
  contact: string;
  linkedin: string;
};

type LenisLike = { scrollTo: (target: number, opts?: { duration?: number }) => void };

const HEAD = ["If", "it", "works", "here,", "it", "can", "work", "anywhere."];

const Arrow = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/**
 * The homepage footer ("the V1 footer language, in the dark") as a normal-flow footer: kicker + roll-up headline +
 * Enquire button, hairline, newsletter / Explore / Resources+Connect / wordmark + big IO mark, bottom bar with the
 * Al Ain clock. The entrance plays once when the footer scrolls into view (instant with prefers-reduced-motion).
 */
export function SiteFooter({ nav, resources, legal, contact, linkedin }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [sent, setSent] = useState(false);

  // Entrance: hide the pieces, play them (once) when the footer is a quarter in view.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = root.querySelectorAll("[data-fw]");
    const lines = root.querySelectorAll("[data-fl]");
    const fx = root.querySelectorAll("[data-fx]");

    const ctx = gsap.context(() => {
      gsap.set(lines, { scaleX: 0 });
      gsap.set(fx, { opacity: 0, y: 22 });
      gsap.set(words, { yPercent: 112 });
    }, root);

    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      ctx.add(() => {
        gsap.to(words, { yPercent: 0, duration: 1.2, stagger: 0.07, ease: "power4.out" });
        gsap.to(lines, { scaleX: 1, duration: 1.3, stagger: 0.15, ease: "power3.out", delay: 0.2 });
        gsap.to(fx, { opacity: 1, y: 0, duration: 1.0, stagger: 0.06, ease: "power3.out", delay: 0.3 });
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && (e.intersectionRatio >= 0.25 || e.intersectionRect.height >= window.innerHeight * 0.25)) {
            play();
            io.disconnect();
          }
        }
      },
      { threshold: [0, 0.1, 0.25, 0.5] },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      ctx.revert();
    };
  }, []);

  // Live Al Ain clock (Asia/Dubai, GST).
  useEffect(() => {
    const el = clockRef.current;
    if (!el) return;
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dubai" });
    const tick = () => {
      el.textContent = fmt.format(new Date());
    };
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);

  // The big mark leans away from the pointer (hover devices only).
  useEffect(() => {
    const root = rootRef.current;
    const mark = markRef.current;
    if (!root || !mark) return;
    if (!window.matchMedia("(hover: hover)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mx = gsap.quickTo(mark, "x", { duration: 1.2, ease: "power3.out" });
    const my = gsap.quickTo(mark, "y", { duration: 1.2, ease: "power3.out" });
    const onMove = (e: PointerEvent) => {
      mx((e.clientX / window.innerWidth - 0.5) * -16);
      my((e.clientY / window.innerHeight - 0.5) * -10);
    };
    const onLeave = () => {
      mx(0);
      my(0);
    };
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) inputRef.current.value = "";
    setSent(true);
  };

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const l = (window as unknown as { __d2lenis?: LenisLike }).__d2lenis;
    if (l) l.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  const resourceLinks = resources.filter((l) => l.label !== "Resources");

  return (
    <footer ref={rootRef} className={s.foot}>
      <div className={s.fTop}>
        <div>
          <p className={s.fKick} data-fx>
            <i />
            Innovation Oasis · Part of Silal
          </p>
          <h2 className={s.fHead} aria-label="If it works here, it can work anywhere.">
            {HEAD.map((w, k) => (
              <Fragment key={k}>
                <span className={s.fW} aria-hidden="true">
                  <i data-fw>{w}</i>
                </span>
                {k < HEAD.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className={s.fCols}>
        <i className={s.fl} data-fl />
        <div className={s.fNews} data-fx>
          <h4>Stay close to the work</h4>
          <p>Research, programmes and calls for innovators, a few times a year.</p>
          <form className={`${s.fForm} ${sent ? s.fFormOk : ""}`} action="#" aria-label="Newsletter" onSubmit={onSubscribe}>
            <input
              ref={inputRef}
              type="email"
              placeholder={sent ? "Thank you (sample, not connected yet)" : "Email address"}
              aria-label="Email address"
              autoComplete="email"
            />
            <button type="submit" aria-label="Subscribe">
              <Arrow />
            </button>
          </form>
        </div>
        <nav data-fx aria-label="Explore">
          <h4>Explore</h4>
          <ul>
            {nav.map((c) => (
              <li key={c.key}>
                <Link className={s.fLink} href={c.href}>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav data-fx aria-label="Resources">
          <h4>Resources</h4>
          <ul>
            {resourceLinks.map((l) => (
              <li key={l.label}>
                <Link className={s.fLink} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className={s.fSp}>Connect</h4>
          <ul>
            <li>
              <Link className={s.fLink} href={contact}>
                Contact
              </Link>
            </li>
            <li>
              <Link className={s.fLink} href={contact}>
                Enquire
              </Link>
            </li>
            <li>
              <a className={s.fLink} href={linkedin} target={linkedin === "#" ? undefined : "_blank"} rel="noreferrer">
                LinkedIn&nbsp;↗
              </a>
            </li>
          </ul>
        </nav>
        <div className={s.fBrand} data-fx>
          <div className={s.fId}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/V2/brand/io-wordmark-endorsed-reversed.svg" alt="Innovation Oasis — Part of Silal" width={326} height={148} />
            <a className={`${s.fU} ${s.fLink}`} href="https://io-silal.ae">
              io-silal.ae
            </a>
            <address>
              <span lang="ar" dir="rtl">
                واحة الابتكار – سلال، العين، الإمارات العربية المتحدة
              </span>
              <br />
              Innovation Oasis – Silal, Al Ain, UAE
            </address>
          </div>
          <div ref={markRef} className={s.fMark} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/io-mark.svg" alt="" width={255} height={188} />
            <i />
          </div>
        </div>
      </div>

      <div className={s.fBar}>
        <i className={s.fl} data-fl />
        <span data-fx>© 2026 Silal. All rights reserved.</span>
        <span className={s.fClock} data-fx>
          Al Ain{" "}
          <b ref={clockRef} suppressHydrationWarning>
            --:--
          </b>{" "}
          GST
        </span>
        <nav data-fx aria-label="Legal">
          {legal.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
          <a className={s.fTopBtn} href="#top" onClick={toTop}>
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
