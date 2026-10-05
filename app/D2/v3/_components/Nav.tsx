"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import s from "../shell.module.css";
import { BASE, footerLinks } from "../_lib/site";
import { getLenis } from "./SmoothScroll";
import { Menu } from "./Menu";

type Ch = { id: string; label: string; el: HTMLElement };

/*
 * Top bar: wordmark (format three) · pathfinder · Contact · Menu.
 * The pathfinder reads [data-chapter] sections: one segment per chapter, each filling as you
 * read it; the current chapter's name rolls in. Segments are jump links.
 */
export function Nav() {
  const pathname = usePathname();
  const [chapters, setChapters] = useState<Ch[]>([]);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const fills = useRef<(HTMLSpanElement | null)[]>([]);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const list = els.map((el) => ({ id: el.id, label: el.dataset.chapter ?? "", el }));
    setChapters(list);
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      let idx = 0;
      list.forEach((c, i) => {
        const r = c.el.getBoundingClientRect();
        if (r.top <= vh * 0.5) idx = i;
        const p = Math.min(1, Math.max(0, (vh * 0.5 - r.top) / Math.max(1, r.height)));
        const f = fills.current[i];
        if (f) f.style.transform = `scaleX(${p.toFixed(4)})`;
      });
      setActive(idx);
    };
    const loop = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", loop, { passive: true });
    window.addEventListener("resize", loop);
    return () => {
      window.removeEventListener("scroll", loop);
      window.removeEventListener("resize", loop);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const jump = (c: Ch) => {
    const l = getLenis();
    if (l) l.scrollTo(c.el, { duration: 2.2, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
    else c.el.scrollIntoView({ behavior: "smooth" });
  };

  const cur = chapters[active];
  return (
    <>
      <header className={s.nav} data-menu={open ? "" : undefined}>
        <Link href={BASE} className={s.navBrand} aria-label="Innovation Oasis, home">
          {/* Logo format three (guidelines p.9): wordmark + endorsement, mark right. Official paths, cropped views. */}
          <span className={s.navWord}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/D2/brand/io-wordmark-endorsed.svg" alt="" width={326} height={148} data-tone="light" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/D2/brand/io-wordmark-endorsed-reversed.svg" alt="" width={326} height={148} data-tone="dark" />
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/io-mark.svg" alt="" width={255} height={188} className={s.navMark} />
        </Link>

        {chapters.length > 0 && (
          <nav className={s.path} aria-label="Chapters on this page">
            <p className={s.pathNow} aria-live="polite">
              <span className={s.pathNum}>{String(active + 1).padStart(2, "0")}</span>
              <span className={s.pathLabel} key={cur?.id}>
                {cur?.label}
              </span>
            </p>
            <ol className={s.pathTrack}>
              {chapters.map((c, i) => (
                <li key={c.id}>
                  <button type="button" onClick={() => jump(c)} data-on={i === active ? "" : undefined} aria-label={`Go to ${c.label}`}>
                    <span className={s.pathTip}>{c.label}</span>
                    <span className={s.pathSeg}>
                      <span ref={(el) => void (fills.current[i] = el)} />
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={s.navEnd}>
          <Link href={footerLinks.contact} className={s.navLink} data-cursor="link">
            <span data-roll="Contact">Contact</span>
          </Link>
          <button
            ref={menuBtn}
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls="d3-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={s.menuWord} data-roll={open ? "Close" : "Menu"}>
              {open ? "Close" : "Menu"}
            </span>
            <span className={s.menuIcon} aria-hidden>
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <Menu open={open} onClose={() => setOpen(false)} origin={menuBtn} />
    </>
  );
}
