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

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Shared top-right capsule (logo pill + menu button) and the full-screen menu overlay, 1:1 with the homepage
 * ("menu v2"): two circles grow from the button (the IO-blue one leads, the dark one follows a beat behind, content is
 * clipped to the dark one), list lines rise from a mask, the right-hand panel wipes its picture between categories,
 * texts rise, a ghost number follows the active item, and the picture / a soft glow lean towards the pointer.
 */
export function SiteMenu({ nav, home, news, contact, linkedin }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const mbARef = useRef<HTMLDivElement>(null);
  const mbBRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLElement>(null);
  const contRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const openRef = useRef(false);
  const reduceRef = useRef(false);
  const shownRef = useRef(-1); // category whose picture/texts are on screen
  const layerRef = useRef(0); // which of the two picture layers is on top

  // Build the open/close timeline and the pointer effects once.
  useEffect(() => {
    const menu = menuRef.current;
    const btn = btnRef.current;
    const mbA = mbARef.current;
    const mbB = mbBRef.current;
    const cont = contRef.current;
    const glow = glowRef.current;
    const img = imgRef.current;
    if (!menu || !btn || !mbA || !mbB || !cont || !glow || !img) return;
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mpA = { p: 0 };
    const mpB = { p: 0 };
    // two circles grow from the button: IO blue leads, the dark one follows a beat behind, so a thin blue rim travels ahead of the dark
    const paint = () => {
      const m = menu.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      const cx = b.left + b.width / 2 - m.left;
      const cy = b.top + b.height / 2 - m.top;
      const R = Math.hypot(Math.max(cx, m.width - cx), Math.max(cy, m.height - cy)) + 4;
      mbA.style.clipPath = `circle(${(mpA.p * R).toFixed(1)}px at ${cx.toFixed(1)}px ${cy.toFixed(1)}px)`;
      mbB.style.clipPath = cont.style.clipPath = `circle(${(mpB.p * R).toFixed(1)}px at ${cx.toFixed(1)}px ${cy.toFixed(1)}px)`; // the content is only visible inside the dark circle
    };

    const ctx = gsap.context(() => {
      const lns = menu.querySelectorAll("[data-ln]");
      const nums = menu.querySelectorAll("[data-num]");
      const hrs = menu.querySelectorAll("[data-mh]");
      const ghost = menu.querySelector("[data-ghost]");
      const layers = img.querySelectorAll<HTMLElement>("[data-ml]");

      // first picture
      layers[0].style.backgroundImage = `url("${nav[0].img}")`;
      gsap.set(layers[0], { clipPath: "inset(0% 0% 0% 0%)", scale: 1, zIndex: 1 });
      gsap.set(layers[1], { clipPath: "inset(100% 0% 0% 0%)", zIndex: 0 });
      shownRef.current = 0;
      layerRef.current = 0;

      gsap.set(lns, { yPercent: 118 });
      gsap.set(nums, { opacity: 0 });
      const tl = gsap.timeline({
        paused: true,
        onReverseComplete() {
          menu.dataset.open = "false";
          mbA.style.clipPath = mbB.style.clipPath = cont.style.clipPath = "";
        },
      });
      tl.to(mpA, { p: 1, duration: 1.05, ease: "power3.inOut", onUpdate: paint }, 0)
        .to(mpB, { p: 1, duration: 1.05, ease: "power3.inOut", onUpdate: paint }, 0.07)
        .fromTo("[data-mtop]", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.6)
        .to(lns, { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.06 }, 0.5)
        .to(nums, { opacity: 1, duration: 0.5, stagger: 0.06 }, 0.65)
        .fromTo(hrs, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power3.out", stagger: 0.06 }, 0.6)
        .fromTo("[data-panel]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.65)
        .fromTo(ghost, { opacity: 0, y: 70 }, { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" }, 0.6)
        .fromTo("[data-mfoot]", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.0);
      tlRef.current = tl;
    }, menu);

    // the picture card and a soft light follow the pointer
    let onMove: ((e: PointerEvent) => void) | null = null;
    if (window.matchMedia("(hover: hover)").matches) {
      const ix = gsap.quickTo(img, "x", { duration: 0.9, ease: "power3.out" });
      const iy = gsap.quickTo(img, "y", { duration: 0.9, ease: "power3.out" });
      const gx = gsap.quickTo(glow, "x", { duration: 1.4, ease: "power3.out" });
      const gy = gsap.quickTo(glow, "y", { duration: 1.4, ease: "power3.out" });
      onMove = (e) => {
        const m = menu.getBoundingClientRect();
        ix((e.clientX / m.width - 0.5) * -22);
        iy((e.clientY / m.height - 0.5) * -14);
        gx(e.clientX - m.left);
        gy(e.clientY - m.top);
      };
      menu.addEventListener("pointermove", onMove);
    }

    const onResize = () => {
      if (openRef.current) paint();
    };
    window.addEventListener("resize", onResize);

    // warm the six pictures shortly after load so the first hover wipes in without a gap
    const warm = window.setTimeout(() => nav.forEach((c) => (new Image().src = c.img)), 1500);

    return () => {
      window.clearTimeout(warm);
      window.removeEventListener("resize", onResize);
      if (onMove) menu.removeEventListener("pointermove", onMove);
      ctx.revert();
      tlRef.current = null;
      shownRef.current = -1;
      mbA.style.clipPath = mbB.style.clipPath = cont.style.clipPath = "";
      lockScroll(false);
      lenis()?.start();
    };
  }, [nav]);

  const openMenu = useCallback(() => {
    const menu = menuRef.current;
    const tl = tlRef.current;
    if (!menu || !tl) return;
    openRef.current = true;
    setOpen(true);
    menu.dataset.open = "true";
    if (glowRef.current) gsap.set(glowRef.current, { x: window.innerWidth * 0.75, y: window.innerHeight * 0.3 });
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
    tl.timeScale(reduceRef.current ? 50 : 1.4).reverse();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!openRef.current) return;
      if (e.key === "Escape") closeMenu();
      else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const links = listRef.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links) return;
        const k = Math.max(0, Math.min(nav.length - 1, active + (e.key === "ArrowDown" ? 1 : -1)));
        links[k]?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu, active, nav.length]);

  // Right-hand panel: the picture changes with a wipe (the new one slides in through a clip, the old one drifts),
  // the texts and the ghost number rise.
  useEffect(() => {
    const img = imgRef.current;
    const panel = panelRef.current;
    const ghost = ghostRef.current;
    const prev = shownRef.current;
    if (!img || !panel || !ghost || prev < 0 || prev === active) return;
    shownRef.current = active;
    const dir = active > prev ? 1 : -1;
    const layers = img.querySelectorAll<HTMLElement>("[data-ml]");
    const nx = layers[1 - layerRef.current];
    const cur = layers[layerRef.current];
    nx.style.backgroundImage = `url("${nav[active].img}")`;
    gsap.killTweensOf([nx, cur]);
    gsap.set(nx, { zIndex: 2, clipPath: dir > 0 ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)", scale: 1.2 });
    gsap.set(cur, { zIndex: 1 });
    gsap.to(nx, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 0.95, ease: "power3.inOut" });
    gsap.to(cur, { scale: 1.08, duration: 0.95, ease: "power3.inOut" });
    layerRef.current = 1 - layerRef.current;

    const parts = panel.querySelectorAll("[data-pt]");
    gsap.killTweensOf(parts);
    gsap.fromTo(parts, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.045 });
    gsap.killTweensOf(ghost);
    gsap.fromTo(ghost, { opacity: 0, y: 40 * dir }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
  }, [active, nav]);

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
        <div ref={mbARef} className={s.mbA} />
        <div ref={mbBRef} className={s.mbB}>
          <i ref={glowRef} className={s.mglow} />
        </div>
        <div ref={contRef} className={s.mcontent}>
          <p className={s.mtop} data-mtop>
            <span>Menu</span>
            <span>
              <b>{cat.n}</b> / {pad(nav.length - 1)}
            </span>
          </p>
          <div className={s.mwrap}>
            <nav aria-label="Site">
              <ul ref={listRef} className={s.list}>
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
                        <span className={s.lt}>{c.label}</span>
                      </span>
                      <span className={s.arr} aria-hidden="true">
                        →
                      </span>
                    </Link>
                    <i className={s.mh} data-mh />
                  </li>
                ))}
              </ul>
            </nav>
            <aside ref={panelRef} className={s.panel} aria-live="polite" data-panel>
              <div ref={imgRef} className={s.mimg} aria-hidden>
                <i className={s.ml} data-ml />
                <i className={s.ml} data-ml />
              </div>
              <p className={s.mk} data-pt>
                {cat.n === "00" ? "About" : `Platform ${cat.n}`}
              </p>
              <p className={s.mb} data-pt>
                {cat.blurb}
              </p>
              <ul className={s.ms}>
                {cat.subs.map((sub) => (
                  <li key={`${cat.key}-${sub.label}`} data-pt>
                    <Link
                      href={sub.href}
                      target={sub.external ? "_blank" : undefined}
                      rel={sub.external ? "noreferrer" : undefined}
                      tabIndex={tab}
                      onClick={closeMenu}
                    >
                      <span>{sub.label}</span>
                      <span aria-hidden="true">{sub.external ? "↗" : "→"}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            <span ref={ghostRef} className={s.mghost} data-ghost aria-hidden="true">
              {cat.n}
            </span>
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
              <Link className={s.mcta} href={contact} tabIndex={tab} onClick={closeMenu}>
                Enquire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
