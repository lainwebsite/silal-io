"use client";

import { useEffect, useRef, useState } from "react";
import a from "../about.module.css";

type Ch = { id: string; n: string; label: string };

// Fixed reading index: current chapter, its progress, and a jump list. Hidden over the hero.
export function ChapterIndex() {
  const [chapters, setChapters] = useState<Ch[]>([]);
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    setChapters(els.map((el) => ({ id: el.id, n: el.dataset.chapter ?? "", label: el.dataset.chapterLabel ?? "" })));
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.45;
      let idx = -1;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= mid) idx = i;
      });
      setActive(idx);
      if (idx >= 0 && bar.current) {
        const r = els[idx].getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
        bar.current.style.transform = `scaleX(${p.toFixed(3)})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as unknown as { __d9lenis?: { scrollTo: (t: HTMLElement, o?: object) => void } }).__d9lenis;
    if (lenis) lenis.scrollTo(el, { offset: -20, duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const cur = chapters[active];
  return (
    <nav className={a.index} data-show={active >= 0 ? "" : undefined} data-open={open ? "" : undefined} aria-label="Chapters">
      <ol className={a.indexList} id="ab-chapters">
        {chapters.map((c, i) => (
          <li key={c.id} data-current={i === active ? "" : undefined}>
            <button type="button" onClick={() => go(c.id)} tabIndex={open ? 0 : -1}>
              <span>{c.n}</span>
              {c.label}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" className={a.indexBtn} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="ab-chapters">
        <span className={a.indexNum}>{cur?.n ?? "00"}</span>
        <span className={a.indexLabel} key={cur?.id}>
          {cur?.label ?? ""}
        </span>
        <span className={a.indexOf}>/ 0{chapters.length}</span>
        <span className={a.indexBar} aria-hidden>
          <span ref={bar} />
        </span>
      </button>
    </nav>
  );
}
