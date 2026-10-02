"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import a from "../about.module.css";
import { Label } from "../../_c/Brand";
import { P } from "../../_lib/photo";
import world from "../../_lib/worldDots.json";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
 * 03 Why Here? — two scenes.
 *  1 Constraint → testbed: one pinned frame. A desaturated photo of bare desert ground
 *    ("constraint") is wiped away by the same land, planted and trialled ("testbed").
 *  2 The arid world: a dotted map. The UAE lights first, then the world's arid and semi-arid
 *    regions light up outward from it, as the copy says "conditions once considered unique to the
 *    UAE are becoming increasingly common elsewhere". Regions are broad and illustrative (stated).
 */

const pressures = ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"];
type Dot = [number, number, number, number];
const dots = (world as { aspect: number; dots: Dot[] }).dots;
const ASPECT = (world as { aspect: number }).aspect;
const uaeDots = dots.filter((d) => d[2] === 2);
const UAE = [0, 1].map((j) => uaeDots.reduce((s, d) => s + d[j], 0) / uaeDots.length);

function WorldMap({ progress }: { progress: React.RefObject<number> }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvas.current!;
    const g = c.getContext("2d")!;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let last = -1;
    let visible = false;
    let raf = 0;
    const lit = new Float32Array(dots.length);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth;
      h = w / ASPECT;
      c.style.height = `${h}px`;
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
      last = -1;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(c);

    let prev = 0;
    const draw = (time: number) => {
      raf = requestAnimationFrame(draw);
      const dt = Math.min(100, time - (prev || time));
      prev = time;
      if (!visible) return;
      const k = 1 - Math.pow(0.002, dt / 1000);
      const p = progress.current ?? 0;
      // UAE 0 → 0.12; the arid reach grows with distance from the UAE 0.15 → 0.85
      const reach = gsap.utils.mapRange(0.15, 0.85, 0, 150, p);
      const uae = gsap.utils.clamp(0, 1, p / 0.12);
      let moving = Math.abs(p - last) > 1e-4;
      for (let i = 0; i < dots.length; i++) {
        const [, , k, d] = dots[i];
        const target = k === 2 ? uae : k === 1 ? gsap.utils.clamp(0, 1, (reach - d) / 10) : 0;
        const v = lit[i] + (target - lit[i]) * k;
        if (Math.abs(v - lit[i]) > 1e-3) moving = true;
        lit[i] = v;
      }
      const pulse = uae > 0.5;
      if (!moving && !pulse) return;
      last = p;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);
      const step = w / 158; // dot pitch (grid is 2.2° over 348°)
      const r = step * 0.32;
      for (let i = 0; i < dots.length; i++) {
        const [x, y, k] = dots[i];
        const v = lit[i];
        const px = x * w;
        const py = y * h;
        if (v < 0.02) {
          g.fillStyle = "#cfd2d4";
          g.beginPath();
          g.arc(px, py, r, 0, 6.2832);
          g.fill();
          continue;
        }
        // grey → IO Blue (arid), → IO ink (UAE)
        const to = k === 2 ? [28, 114, 153] : [60, 167, 210];
        const from = [207, 210, 212];
        g.fillStyle = `rgb(${from.map((f, j) => Math.round(f + (to[j] - f) * v)).join(",")})`;
        g.beginPath();
        g.arc(px, py, r * (1 + v * (k === 2 ? 0.9 : 0.25)), 0, 6.2832);
        g.fill();
      }
      if (pulse) {
        const t = (time / 1600) % 1;
        g.strokeStyle = `rgba(28,114,153,${0.6 * (1 - t)})`;
        g.lineWidth = 1;
        g.beginPath();
        g.arc(UAE[0] * w, UAE[1] * h, step * (1.2 + t * 5), 0, 6.2832);
        g.stroke();
      }
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [progress]);

  return <canvas ref={canvas} className={a.mapCanvas} aria-hidden />;
}

export function WhyHere() {
  const root = useRef<HTMLElement>(null);
  const mapP = useRef(0);

  useGSAP(
    () => {
      const el = root.current!;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* scene 1: constraint → testbed */
        const wipe = el.querySelector<HTMLElement>("[data-wipe-scene]")!;
        gsap
          .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: wipe, start: "top top", end: "bottom bottom", scrub: 0.8 } })
          .fromTo("[data-wipe-frame]", { clipPath: "inset(6% 4% 6% 4% round 6px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 20 }, 0)
          .fromTo("[data-constraint] img", { scale: 1.12 }, { scale: 1, duration: 50 }, 0)
          .fromTo("[data-testbed]", { clipPath: "inset(0% 0% 0% 100%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 40, ease: "power2.inOut" }, 34)
          .fromTo("[data-testbed] img", { scale: 1.2 }, { scale: 1, duration: 50 }, 34)
          .fromTo("[data-wipe-line]", { left: "100%" }, { left: "0%", duration: 40, ease: "power2.inOut" }, 34)
          .fromTo("[data-word-a]", { opacity: 1 }, { opacity: 0.0, yPercent: -40, duration: 12 }, 44)
          .fromTo("[data-word-b]", { opacity: 0, yPercent: 40 }, { opacity: 1, yPercent: 0, duration: 14 }, 56)
          .to({}, { duration: 16 }, 84);

        /* scene 2: the map */
        const map = el.querySelector<HTMLElement>("[data-map-scene]")!;
        const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-map-step]"));
        const chips = Array.from(el.querySelectorAll<HTMLElement>("[data-chip]"));
        ScrollTrigger.create({
          trigger: map,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (s) => {
            mapP.current = s.progress;
            const step = s.progress < 0.18 ? 0 : s.progress < 0.62 ? 1 : 2;
            steps.forEach((x, i) => x.toggleAttribute("data-on", i === step));
            chips.forEach((x, i) => x.toggleAttribute("data-on", s.progress > 0.66 + i * 0.05));
          },
        });
        steps[0]?.setAttribute("data-on", "");
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        mapP.current = 1;
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="why-here" aria-labelledby="why-h">
      {/* scene 1 */}
      <div className={a.wipeScene} data-wipe-scene>
        <div className={a.wipeStage}>
          <div className={a.wipeFrame} data-wipe-frame>
            <div className={`${a.wipeImg} ${a.wipeCrop}`} data-constraint>
              <Image src={P.aerialWideAlt} alt="Open desert around Al Foah, from the air" fill sizes="100vw" />
            </div>
            <div className={`${a.wipeImg} ${a.wipeB}`} data-testbed>
              <Image src={P.aerialPlots} alt="The same desert, planted: trial plots at Innovation Oasis" fill sizes="100vw" />
            </div>
            <i className={a.wipeLine} data-wipe-line aria-hidden />
            <div className={a.wipeShade} />
          </div>
          <div className={a.wipeText}>
            <Label n="03" dark>
              Why Here?
            </Label>
            <p className={a.wipeKicker}>The Arid Advantage</p>
            <h2 id="why-h" className={a.wipeH}>
              <span className={a.wipeA} data-word-a>
                Many see the desert as a <em>constraint.</em>
              </span>
              <span className={a.wipeB2} data-word-b>
                We see it as the world&rsquo;s most important <em>testbed.</em>
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* scene 2 */}
      <div className={a.mapScene} data-map-scene>
        <div className={a.mapStage}>
          <div className={a.wrap}>
            <div className={a.mapGrid}>
              <div className={a.mapSteps}>
                <p className={a.mapStep} data-map-step>
                  Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will
                  reshape agriculture around the world.
                </p>
                <p className={`${a.mapStep} ${a.mapStepLead}`} data-map-step>
                  Conditions once considered unique to the UAE are becoming increasingly common elsewhere.
                </p>
                <p className={a.mapStep} data-map-step>
                  That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the
                  pressures that define tomorrow&rsquo;s food system today.
                </p>
              </div>
              <div className={a.mapSide}>
                <WorldMap progress={mapP} />
                <div className={a.mapLegend}>
                  <span>
                    <i data-k="uae" /> UAE
                  </span>
                  <span>
                    <i data-k="arid" /> Arid and semi-arid regions
                  </span>
                  <em>Illustrative</em>
                </div>
                <ul className={a.chips} aria-label="The pressures">
                  {pressures.map((p) => (
                    <li key={p} data-chip>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={a.bench}>
        <div className={a.wrap}>
          <div className={a.benchGrid}>
            <p className={a.statement} data-words>
              These are not barriers to innovation. They are the benchmark.
            </p>
            <blockquote className={a.quote} data-up>
              <p>&ldquo;If it works here, it can work anywhere.&rdquo;</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
