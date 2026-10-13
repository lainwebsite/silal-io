"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import s from "./shell.module.css";
import { Glyph } from "./Glyph";
import type { ShellCategory } from "./types";

type Props = {
  nav: ShellCategory[];
  /** Home (the static homepage). Plain <a>: it is served outside the Next router. */
  home: string;
  news: string;
  contact: string;
  linkedin: string;
};

type LenisLike = { start: () => void; stop: () => void };
const lenis = () => (window as unknown as { __d2lenis?: LenisLike }).__d2lenis;

// Page scroll lock; the gutter stays reserved so the fixed capsule does not jump when the scrollbar goes.
function lockScroll(on: boolean) {
  const el = document.documentElement;
  el.style.overflow = on ? "hidden" : "";
  el.style.scrollbarGutter = on ? "stable" : "";
}

/**
 * Shared top-right capsule (logo pill + menu button) and the full-screen menu overlay, 1:1 with the
 * homepage: circular clip-path reveal from the button, list lines rising from a mask, category panel
 * on the right. Dark glass so it reads on both the light inner pages and the dark homepage.
 */
export function SiteMenu({ nav, home, news, contact, linkedin }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const openRef = useRef(false);
  const reduceRef = useRef(false);

  useEffect(() => {
    const menu = menuRef.current;
    const btn = btnRef.current;
    const panel = panelRef.current;
    if (!menu || !btn || !panel) return;
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mp = { p: 0 };
    const paint = () => {
      const m = menu.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      const cx = b.left + b.width / 2 - m.left;
      const cy = b.top + b.height / 2 - m.top;
      const R = Math.hypot(Math.max(cx, m.width - cx), Math.max(cy, m.height - cy));
      menu.style.clipPath = `circle(${(mp.p * R).toFixed(1)}px at ${cx.toFixed(1)}px ${cy.toFixed(1)}px)`;
    };

    const ctx = gsap.context(() => {
      const lns = menu.querySelectorAll("[data-ln]");
      const nums = menu.querySelectorAll("[data-num]");
      gsap.set(lns, { yPercent: 118 });
      gsap.set(nums, { opacity: 0 });
      const tl = gsap.timeline({
        paused: true,
        onReverseComplete() {
          menu.dataset.open = "false";
          menu.style.clipPath = "";
        },
      });
      tl.to(mp, { p: 1, duration: 1, ease: "power3.inOut", onUpdate: paint }, 0)
        .to(lns, { yPercent: 0, duration: 0.95, ease: "power4.out", stagger: 0.055 }, 0.32)
        .to(nums, { opacity: 1, duration: 0.5, stagger: 0.055 }, 0.5)
        .fromTo(panel, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.5)
        .fromTo("[data-mfoot]", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.8);
      tlRef.current = tl;
    }, menu);

    const onResize = () => {
      if (openRef.current) paint();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
      tlRef.current = null;
      menu.style.clipPath = "";
      lockScroll(false);
      lenis()?.start();
    };
  }, []);

  const openMenu = useCallback(() => {
    const menu = menuRef.current;
    const tl = tlRef.current;
    if (!menu || !tl) return;
    openRef.current = true;
    setOpen(true);
    menu.dataset.open = "true";
    lockScroll(true);
    lenis()?.stop();
    tl.timeScale(reduceRef.current ? 50 : 1).play();
  }, []);

  const closeMenu = useCallback(() => {
    const tl = tlRef.current;
    if (!openRef.current || !tl) return;
    openRef.current = false;
    setOpen(false);
    lockScroll(false);
    lenis()?.start();
    tl.timeScale(reduceRef.current ? 50 : 1.35).reverse();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  // Right-hand panel: fade/slide the pieces in whenever the hovered/focused item changes.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const parts = panel.querySelectorAll("[data-part]");
    gsap.killTweensOf(parts);
    gsap.fromTo(parts, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.05 });
  }, [active]);

  const cat = nav[active] ?? nav[0];
  const tab = open ? undefined : -1;

  return (
    <>
      <div className={s.capsule}>
        <a className={s.pill} href={home} aria-label="Innovation Oasis, home">
          <Glyph className={s.glyph} />
        </a>
        <button
          ref={btnRef}
          type="button"
          className={s.menuBtn}
          aria-label={open ? "Close menu" : "Menu"}
          aria-expanded={open}
          aria-controls="d2-menu"
          onClick={() => (openRef.current ? closeMenu() : openMenu())}
        >
          <i />
          <i />
          <i />
        </button>
      </div>

      <div ref={menuRef} id="d2-menu" className={s.menu} data-open="false" aria-hidden={!open}>
        <div className={s.wrap}>
          <nav aria-label="Site">
            <ul className={s.list}>
              {nav.map((c, k) => (
                <li key={c.key}>
                  <Link
                    href={c.href}
                    data-on={k === active ? "" : undefined}
                    tabIndex={tab}
                    onPointerEnter={() => setActive(k)}
                    onFocus={() => setActive(k)}
                    onClick={closeMenu}
                  >
                    <em data-num>{c.n}</em>
                    <span className={s.ln} data-ln>
                      {c.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <aside ref={panelRef} className={s.panel} aria-live="polite">
            <div className={s.pimg} data-part style={{ backgroundImage: `url("${cat.img}")` }} aria-hidden />
            <p className={s.pk} data-part>
              {cat.n === "00" ? "About" : `Platform ${cat.n}`}
            </p>
            <p className={s.pb} data-part>
              {cat.blurb}
            </p>
            <ul className={s.psubs} data-part>
              {cat.subs.map((sub) => (
                <li key={sub.label}>
                  <Link
                    href={sub.href}
                    target={sub.external ? "_blank" : undefined}
                    rel={sub.external ? "noreferrer" : undefined}
                    tabIndex={tab}
                    onClick={closeMenu}
                  >
                    <span>{sub.label}</span>
                    <span aria-hidden>{sub.external ? "↗" : "→"}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className={s.mfoot} data-mfoot>
          <p>Advancing Agri-food Systems</p>
          <p className={s.mlinks}>
            <Link href={contact} tabIndex={tab} onClick={closeMenu}>
              Contact
            </Link>
            <a href={linkedin} target="_blank" rel="noreferrer" tabIndex={tab} onClick={closeMenu}>
              LinkedIn&nbsp;↗
            </a>
            <Link href={news} tabIndex={tab} onClick={closeMenu}>
              News &amp; Media
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
