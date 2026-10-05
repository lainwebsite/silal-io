"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import r from "../newsroom.module.css";
import { Go } from "../../../_c/Brand";
import { BASE } from "../../../_lib/site";
import { fmtDate, type Release } from "../../../_lib/news";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const HOLD = 7; // seconds per slide

/*
 * Featured carousel (after Hut 8's News & Insights hero): full-bleed photo, three featured releases.
 * A hairline fills while a slide holds, then the next photo wipes in from the right and the title
 * rises out of its mask. Arrows step, the counter turns. On scroll the hero stays put and dims
 * while the feed panel slides up over it. Reduced motion: no autoplay, instant changes.
 */
export function Hero({ items }: { items: Release[] }) {
  const root = useRef<HTMLElement>(null);
  const [cur, setCur] = useState(0);
  const prev = useRef(0);
  const bar = useRef<HTMLElement>(null);
  const timer = useRef<gsap.core.Tween | null>(null);
  const reduce = useRef(false);

  const go = useCallback((i: number) => setCur(((i % items.length) + items.length) % items.length), [items.length]);

  // progress line drives autoplay
  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current || !bar.current) return;
    timer.current?.kill();
    timer.current = gsap.fromTo(bar.current, { scaleX: 0 }, { scaleX: 1, duration: HOLD, ease: "none", onComplete: () => go(cur + 1) });
    return () => void timer.current?.kill();
  }, [cur, go]);

  // pause while the hero is covered
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => (e.intersectionRatio < 0.35 ? timer.current?.pause() : timer.current?.resume()), { threshold: [0, 0.35, 1] });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  // slide change
  useEffect(() => {
    const el = root.current!;
    const from = prev.current;
    prev.current = cur;
    if (from === cur || reduce.current) return;
    const dir = cur > from || (from === items.length - 1 && cur === 0) ? 1 : -1;
    const imgs = el.querySelectorAll<HTMLElement>("[data-slide-img]");
    const texts = el.querySelectorAll<HTMLElement>("[data-slide-text]");
    imgs.forEach((im, i) => (im.style.zIndex = i === cur ? "2" : i === from ? "1" : "0"));
    gsap.fromTo(
      imgs[cur],
      { clipPath: dir > 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut", overwrite: true },
    );
    gsap.fromTo(imgs[cur].querySelector("img"), { scale: 1.14 }, { scale: 1, duration: 2.2, ease: "expo.out" });
    gsap.to(texts[from].querySelectorAll("[data-mask] > *"), { yPercent: -105, duration: 0.6, ease: "power3.in" });
    gsap.set(texts[from], { autoAlpha: 0, delay: 0.6 });
    gsap.set(texts[cur], { autoAlpha: 1 });
    gsap.fromTo(texts[cur].querySelectorAll("[data-mask] > *"), { yPercent: 105 }, { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.06, delay: 0.45 });
  }, [cur, items.length]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const title = root.current!.querySelector<HTMLElement>("[data-hero-title]")!;
        const st = SplitText.create(title, { type: "lines", mask: "lines", linesClass: "ln" });
        gsap
          .timeline({ delay: 0.1 })
          .from("[data-hero-img] img", { scale: 1.2, duration: 2.4, ease: "expo.out" }, 0)
          .from(st.lines, { yPercent: 110, duration: 1.4, ease: "expo.out", stagger: 0.08 }, 0.2)
          .from("[data-hero-in]", { opacity: 0, y: 16, duration: 1, ease: "expo.out", stagger: 0.08 }, 0.5)
          .from("[data-slide-text]:first-of-type [data-mask] > *", { yPercent: 105, duration: 1.2, ease: "expo.out", stagger: 0.06 }, 0.6);
        // the feed slides up over the hero; the hero dims and drifts back
        gsap
          .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } })
          .to("[data-hero-content]", { yPercent: -18, opacity: 0.2 }, 0)
          .to("[data-hero-dim]", { opacity: 0.75 }, 0)
          .to("[data-hero-img]", { scale: 1.06 }, 0);
        return () => st.revert();
      });
    },
    { scope: root },
  );

  const f = items[cur];
  return (
    <section ref={root} className={r.hero} aria-roledescription="carousel" aria-label="Featured releases">
      <div className={r.heroImgs} data-hero-img>
        {items.map((it, i) => (
          <div key={it.slug} className={r.heroImg} data-slide-img style={{ zIndex: i === 0 ? 2 : 0 }} aria-hidden={i !== cur}>
            <Image src={it.src} alt="" fill sizes="100vw" preload={i === 0} />
          </div>
        ))}
      </div>
      <div className={r.heroShade} />
      <div className={r.heroDim} data-hero-dim />

      <div className={r.heroContent} data-hero-content>
        <div className={r.wrap}>
          <div className={r.heroBar} data-hero-in>
            <p className={r.heroMeta} aria-live="polite">
              <time dateTime={f.date}>{fmtDate(f.date)}</time>
              <span>{f.category}</span>
            </p>
            <div className={r.heroCtl}>
              <span className={r.heroCount}>
                {cur + 1} <i>/ {items.length}</i>
              </span>
              <button type="button" onClick={() => go(cur - 1)} aria-label="Previous featured release">
                <svg viewBox="0 0 16 16" aria-hidden>
                  <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" onClick={() => go(cur + 1)} aria-label="Next featured release">
                <svg viewBox="0 0 16 16" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className={r.heroLine} aria-hidden>
            <i ref={bar} />
          </div>

          {/* page title, small, right above the featured headline (client feedback) */}
          <h1 className={r.heroTitle} data-hero-title>
            News &amp; Media
          </h1>
          <div className={r.heroSlides}>
            {items.map((it, i) => (
              <div key={it.slug} className={r.heroSlide} data-slide-text style={{ visibility: i === 0 ? "visible" : "hidden" }} aria-hidden={i !== cur}>
                <h2 className={r.heroSlideTitle} data-mask>
                  <span>{it.title}</span>
                </h2>
                <div data-mask>
                  <div>
                    <Go href={`${BASE}/resources/news/${it.slug}`} dark>
                      Read more
                    </Go>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className={r.heroScroll} aria-hidden data-hero-in>
        Scroll for feed <i />
      </p>
    </section>
  );
}
