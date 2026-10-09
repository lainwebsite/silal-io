"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/*
 * Scroll-scrubbed story for Home Page · Concept 1 "Built by the Desert".
 * The server markup in page.tsx is one 1440 x 870 design frame pinned (CSS sticky) inside a tall .story;
 * one paused GSAP timeline holds every Figma keyframe and ScrollTrigger scrubs it with the scroll position.
 * Timeline positions are "scroll units": 1 unit = 70% of the viewport height (62% on phones).
 */

// Natural pixel size of every web asset (only the aspect ratio matters for the crops).
const DIM: Record<string, [number, number]> = {
  "2c9732cc": [1880, 1058], f502e814: [1880, 1058], e95e0b67: [1614, 975], "0ba94745": [735, 420], b1788c81: [1680, 936],
  "8e44e3b2": [2400, 1600], "0c5a04bd": [2400, 1600], "3e723371": [2400, 1600], bed5d79a: [2400, 1600], c67af94c: [867, 1300], "132f755b": [1880, 1253],
  "80510502": [1880, 1058], "977c9001": [1880, 1058], bf471039: [1732, 1300], "90abeb8f": [2400, 1600], "70840e80": [1086, 1448], "06f2951c": [1360, 764],
  "4bf8fa0b": [1614, 975], "050b0100": [867, 1300], "1c4d7b58": [867, 1300], e5f0025f: [867, 1300], e66cc018: [1880, 1253],
};
const EXT: Record<string, string> = { "06f2951c": "png" };
const IMG_BASE = "/home-page/c1-v2/img";

const TOTAL = 55.4; // timeline length in scroll units
const CHAPTER_AT = [0, 8.6, 14.4, 21.0, 29.0, 37.0]; // when each nav item takes over
const CHAPTER_GO = [0, 9.6, 16.4, 23.6, 34.8, 39.8, 46.8]; // where a click scrolls to

type Q = HTMLElement;

export function Story() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const rootEl = document.getElementById("c1") as Q;
    const doc = document.documentElement;
    const prevBg = doc.style.background;
    doc.style.background = "#0f0f0f";

    const $ = <T extends Element = Q>(s: string, r: ParentNode = rootEl) => r.querySelector(s) as T;
    const $$ = <T extends Element = Q>(s: string, r: ParentNode = rootEl) => [...r.querySelectorAll(s)] as T[];
    const el = (id: string) => document.getElementById(id) as Q;

    const story = $("#story"), stage = $("#stage"), frame = $("#frame");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const params = new URLSearchParams(location.search); // ?t=12.4 jumps to a timeline position, ?lenis=0 turns smooth scroll off (QA / deep links)

    // Figma image-fill crops: imageTransform [[a,0,tx],[0,d,ty]] = the visible window of the image,
    // scaled to cover its box (identical to Figma at the design aspect, graceful elsewhere).
    function applyCrop(node: Q, W?: number, H?: number) {
      const k = node.dataset.img as string, [iw, ih] = DIM[k];
      const [a, tx, d, ty] = (node.dataset.crop || "1,0,1,0").split(",").map(Number);
      W = W || node.offsetWidth; H = H || node.offsetHeight;
      if (!W || !H) return;
      const S = Math.max(W / (a * iw), H / (d * ih));
      node.style.backgroundSize = `${iw * S}px ${ih * S}px`;
      node.style.backgroundPosition = `${W / 2 - (tx + a / 2) * iw * S}px ${H / 2 - (ty + d / 2) * ih * S}px`;
    }
    $$("[data-img]").forEach(n => { const k = n.dataset.img as string; n.style.backgroundImage = `url(${IMG_BASE}/${k}.${EXT[k] || "jpg"})`; });
    const refreshCrops = () => $$("[data-img]").forEach(n => { if (n.closest("#drone")) return; applyCrop(n); });

    const E: Record<string, Q> = {};
    ["bgE1", "bgE2", "bgAer", "bgDes", "bgFarm", "glowA", "bgLab", "glowB", "glowC", "glowD", "bgField", "bgB1", "bgB2", "bgR70", "bgR06", "glowE", "base", "drone",
      "hero", "intro", "stats", "statement", "capLab", "labcard", "rootTitle", "hdrRoot", "rootSub", "trio", "ring", "fieldCopy", "venTitle", "hdrVen", "venSub", "tiles", "venBtn",
      "engTitle", "hdrEng", "eng", "hdrTal", "talSub", "list", "hdrTour", "tourSub", "tour", "tourBtn", "cursor", "num1", "num2", "hint", "nav", "mark"].forEach(i => { E[i] = el(i); });

    let U = 1, M = false;
    let ctx: gsap.Context | null = null, tl: gsap.core.Timeline | null = null, st: ScrollTrigger | null = null;
    let lenis: Lenis | null = null;
    let tickFn: ((t: number) => void) | null = null;

    function metrics(): void {
      const w = innerWidth, h = innerHeight;
      M = w < 820 || w / h < 0.9;
      U = M ? 1 : Math.min(w / 1440, h / 870);
      if (M) rootEl.setAttribute("data-m", ""); else rootEl.removeAttribute("data-m");
      rootEl.style.setProperty("--u", U.toFixed(4));
      rootEl.style.setProperty("--ft", (M ? 1 : Math.max(U, 0.82)).toFixed(4));
      rootEl.style.setProperty("--fu", (M ? 1 : Math.max(w / 1440, 0.7)).toFixed(4));
      const ppu = h * (M ? 0.62 : 0.7);
      story.style.height = TOTAL * ppu + h + "px";
    }

    const px = (n: number) => n * U;
    // absolute stage rect of a design-space box (desktop)
    const R = (x: number, y: number, w: number, h: number) => ({ x: frame.offsetLeft + x * U, y: frame.offsetTop + y * U, w: w * U, h: h * U });
    const offsetIn = (node: Q | null, anc: Q) => { let x = 0, y = 0; while (node && node !== anc) { x += node.offsetLeft; y += node.offsetTop; node = node.offsetParent as Q | null; } return { x, y }; };

    /* ------------------------------------------------------------------ chrome state (nav, marker, hint) */
    const navLinks = $$<HTMLAnchorElement>("#nav a");
    let lastIdx = -2;
    function chrome(t: number) {
      let i = -1;
      if (t < 48.4) { i = 0; for (let k = 1; k < CHAPTER_AT.length; k++) if (t >= CHAPTER_AT[k]) i = k; }
      if (i !== lastIdx) {
        lastIdx = i;
        navLinks.forEach((a, k) => a.classList.toggle("on", k === i));
        E.nav.classList.toggle("off", i < 0); E.mark.classList.toggle("off", i < 0);
        if (i >= 0 && !M) E.mark.style.transform = `translateY(${25 * i * U}px)`;
        $$<HTMLAnchorElement>("#menuList a").forEach((a, k) => { a.style.color = k === i ? "#fff" : ""; });
      }
      E.hint.style.opacity = String(Math.max(0, Math.min(1, 1 - (t - 0.3) / 0.5)));
    }

    /* ------------------------------------------------------------------ build the story */
    function build() {
      if (ctx) ctx.revert();
      metrics();
      refreshCrops();
      const vw = stage.clientWidth, vh = stage.clientHeight;
      ctx = gsap.context(() => {
        const A = E;
        const bgs = ["bgE2", "bgAer", "bgDes", "bgFarm", "glowA", "bgLab", "glowB", "glowC", "glowD", "bgField", "bgB1", "bgB2", "bgR70", "bgR06", "glowE"].map(k => A[k]);
        gsap.set(bgs, { opacity: 0 });
        gsap.set(A.bgE1, { opacity: 1, scale: 1 });
        gsap.set(A.base, { backgroundColor: "#101010" });

        // hidden initial states of every UI block
        const hide = [A.hero, A.intro, A.stats, A.statement, A.capLab, A.labcard, A.rootTitle, A.hdrRoot, A.rootSub, A.trio, A.fieldCopy, A.venTitle, A.hdrVen, A.venSub, A.tiles, A.venBtn,
          A.engTitle, A.hdrEng, A.eng, A.hdrTal, A.talSub, A.list, A.hdrTour, A.tourSub, A.tour, A.tourBtn, A.cursor];
        gsap.set(hide, { opacity: 0 });
        gsap.set(A.drone, { opacity: 0 });

        const tcards = $$(".tcard"), rows = $$(".row", A.labcard), tiles = $$(".tile"), ecards = $$(".ecard"), lis = $$(".li", A.list);
        const t = gsap.timeline({ paused: true, defaults: { duration: 1 } });
        tl = t;
        // fromTo with the end state pre-rendered only when the playhead gets there (scrub-safe)
        const ft = (tg: gsap.TweenTarget, from: gsap.TweenVars, to: gsap.TweenVars, at: number) =>
          t.fromTo(tg, from, Object.assign({ ease: "power2.inOut", immediateRender: false }, to), at);
        const out = "power3.out";

        /* ---------- 01 · INTRODUCTION: Earth to close-up to aerial to desert to farm ---------- */
        t.fromTo(A.bgE1, { scale: 1 }, { scale: 1.22, duration: 2.8, ease: "none", immediateRender: false }, 0);
        ft(A.bgE1, { opacity: 1 }, { opacity: 0, duration: 1 }, 1.9);
        ft(A.bgE2, { opacity: 0, scale: 0.86 }, { opacity: 1, scale: 1, duration: 1 }, 1.9);
        t.fromTo(A.bgE2, { scale: 1 }, { scale: 1.2, duration: 2.2, ease: "none", immediateRender: false }, 2.9);
        ft(A.bgE2, { opacity: 1 }, { opacity: 0, duration: 1 }, 4.3);
        ft(A.bgAer, { opacity: 0, scale: 0.86 }, { opacity: 1, scale: 1, duration: 1 }, 4.3);
        t.fromTo(A.bgAer, { scale: 1 }, { scale: 1.16, duration: 2.2, ease: "none", immediateRender: false }, 5.3);
        ft(A.bgAer, { opacity: 1 }, { opacity: 0, duration: 1 }, 6.5);
        ft(A.bgDes, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, 6.5);
        t.fromTo(A.bgDes, { scale: 1 }, { scale: 1.14, duration: 2.4, ease: "none", immediateRender: false }, 7.5);
        // 01.03 / 01.04: "Step into the Oasis"
        ft(A.hero, { opacity: 0, y: px(26), filter: "blur(14px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: out }, 4.8);
        // 01.05: transition to Al Foah. The title dissolves into blur while the farm rolls in
        ft(A.hero, { opacity: 1, filter: "blur(0px)", scale: 1 }, { opacity: 0, filter: "blur(14px)", scale: 1.04, duration: 1.1 }, 8.1);
        ft(A.bgFarm, { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1.02, duration: 1.4 }, 8.0);
        t.fromTo(A.bgFarm, { scale: 1.02 }, { scale: 1.12, duration: 5, ease: "none", immediateRender: false }, 9.4);

        /* ---------- 02 · THE LOCATION ---------- */
        ft(A.intro, { opacity: 0, y: px(40), filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: out }, 9.2);
        const upY = M ? -(vh * 0.3) : px(-325);
        ft(A.intro, { y: 0 }, { y: upY, duration: 1.1 }, 10.9);
        const hr = $$(".hr");
        gsap.set(hr, { scaleX: 0 });
        ft(A.stats, { opacity: 0, y: px(36) }, { opacity: 1, y: 0, duration: 1, ease: out }, 11.2);
        ft(hr, { scaleX: 0 }, { scaleX: 1, duration: 1.1, stagger: 0.12, ease: out }, 11.3);
        const cnt = { a: 0, b: 0 };
        t.fromTo(cnt, { a: 0, b: 0 }, { a: 34, b: 4, duration: 1.4, ease: "power2.out", immediateRender: false,
          onUpdate() { A.num1.textContent = Math.round(cnt.a) + " ha"; A.num2.textContent = String(Math.round(cnt.b)).padStart(2, "0"); } }, 11.4);

        /* ---------- 03 · WHAT YOU'LL PASS ON THE WAY ---------- */
        ft(A.bgFarm, { opacity: 1 }, { opacity: 0, duration: 1.2 }, 13.5);
        ft(A.glowA, { opacity: 0 }, { opacity: 0.55, duration: 1.2 }, 13.5);
        ft([A.intro, A.stats], { opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(12px)", duration: 0.9 }, 13.3);
        ft(A.statement, { opacity: 0, y: px(30), filter: "blur(12px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: out }, 14.2);
        // 03.02: the statement docks to the top as a caption; the lab card opens
        ft(A.statement, { opacity: 1, y: 0 }, { opacity: 0, y: px(-34), duration: 0.8 }, 15.7);
        ft(A.capLab, { opacity: 0, y: px(14) }, { opacity: 1, y: 0, duration: 0.8 }, 16.0);
        ft(A.labcard, { opacity: 0, y: px(46), scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: out }, 16.0);
        ft(rows, { opacity: 0, x: px(-12) }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease: out }, 16.3);
        // 03.03: Soil & Water Lab highlighted. Row 2 unfolds into a photo, the background becomes the lab
        const row2 = rows[1], m2 = $(".media", row2), big = $(".big", row2), th2 = $(".thumb", row2);
        const bigW = row2.clientWidth || px(391), bigH = M ? bigW * 0.614 : px(240), r0 = M ? 14 : px(16), r1 = M ? 20 : px(24);
        gsap.set(big, { width: bigW, height: bigH }); applyCrop(big, bigW, bigH);
        ft(A.bgLab, { opacity: 0 }, { opacity: 1, duration: 1.2 }, 18.5);
        ft(A.glowA, { opacity: 0.55 }, { opacity: 0, duration: 1.2 }, 18.5);
        ft(row2, { height: row2.clientHeight }, { height: bigH, duration: 1.2 }, 18.6);
        ft(m2, { width: row2.clientHeight, height: row2.clientHeight, borderRadius: r0 }, { width: bigW, height: bigH, borderRadius: r1, duration: 1.2 }, 18.6);
        ft(big, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 18.9);
        ft(th2, { opacity: 1 }, { opacity: 0, duration: 0.6 }, 19.0);
        ft([rows[0], rows[2], rows[3]].map(r => $(".t-18", r)), { opacity: 1 }, { opacity: 0.5, duration: 0.9 }, 18.7);
        ft($(".t-eye", row2), { color: "rgba(255,255,255,.5)" }, { color: "#ffffff", duration: 0.8 }, 18.8);
        // the cursor taps the card
        const cxy = M ? { x: bigW * 0.55 + 20, y: vh * 0.5 } : { x: px(782), y: px(426) };
        ft(A.cursor, { opacity: 0, x: cxy.x + px(80), y: cxy.y + px(60) }, { opacity: 1, x: cxy.x + frame.offsetLeft, y: cxy.y + frame.offsetTop, duration: 1, ease: out }, 18.7);

        /* ---------- 04 · WHAT WE'RE GROWING ---------- */
        ft([A.labcard, A.capLab, A.cursor], { opacity: 1 }, { opacity: 0, duration: 0.9 }, 20.9);
        ft(A.labcard, { y: 0 }, { y: px(-28), duration: 0.9 }, 20.9);
        ft(A.bgLab, { opacity: 1 }, { opacity: 0, duration: 1.2 }, 20.9);
        ft(A.glowB, { opacity: 0 }, { opacity: 1, duration: 1.2 }, 20.9);
        ft(A.base, { backgroundColor: "#101010" }, { backgroundColor: "#0f0f0f", duration: 1 }, 20.9);
        ft(A.rootTitle, { opacity: 0, y: px(30), filter: "blur(12px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: out }, 21.4);
        const subDy = M ? 0 : px(670);
        gsap.set(A.rootSub, { y: subDy });
        ft(A.rootSub, { opacity: 0, y: subDy + px(24) }, { opacity: 1, y: subDy, duration: 0.9, ease: out }, 21.7);
        // 04.02: the title shrinks into the header, the sub travels up, the three centres appear
        ft(A.rootTitle, { opacity: 1, y: 0, scale: 1 }, { opacity: 0, y: px(-60), scale: 0.92, filter: "blur(10px)", duration: 1 }, 23.2);
        ft(A.hdrRoot, { opacity: 0, y: px(10) }, { opacity: 1, y: 0, duration: 0.9 }, 23.5);
        if (!M) ft(A.rootSub, { y: subDy }, { y: 0, duration: 1.2 }, 23.2);
        else ft(A.rootSub, { opacity: 1 }, { opacity: 0, duration: 0.5 }, 23.2);
        ft(A.trio, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 23.5);
        ft(tcards, { y: px(56), scale: 0.94, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 1, stagger: 0.14, ease: out }, 23.5);
        // initial focus: card 1
        const caps = tcards.map(c => $(".cap", c)), ringX = (i: number) => tcards[i].offsetLeft - tcards[0].offsetLeft;
        const trioBase = M ? (vw - tcards[0].offsetWidth) / 2 : 0;
        const focusX = (i: number) => (M ? trioBase - tcards[i].offsetLeft : 0);
        gsap.set(A.trio, { x: M ? focusX(0) : 0 });
        gsap.set(A.ring, { opacity: 0, x: 0 });
        gsap.set(caps, { opacity: 0 });
        ft(A.ring, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 24.4);
        ft(caps[0], { opacity: 0, y: px(10) }, { opacity: 1, y: 0, duration: 0.8 }, 24.5);
        ft([tcards[1], tcards[2]].map(c => $(".face", c)), { opacity: 1 }, { opacity: 0.4, duration: 0.8 }, 24.4);
        const abs = (p: { x: number; y: number }) => (M ? p : { x: p.x + frame.offsetLeft, y: p.y + frame.offsetTop });
        const c1 = M ? { x: vw * 0.5, y: vh * 0.3 + tcards[0].offsetHeight * 0.8 } : { x: px(420), y: px(519) };
        ft(A.cursor, { opacity: 0, x: abs(c1).x + px(60), y: abs(c1).y + px(50) }, { opacity: 1, x: abs(c1).x, y: abs(c1).y, duration: 1, ease: out }, 24.5);
        // 04.03: card 2 (greenhouse systems)
        const focus = (i: number, at: number) => {
          const prev = i - 1;
          ft(A.ring, { x: ringX(prev) }, { x: ringX(i), duration: 1.1 }, at);
          if (M) ft(A.trio, { x: focusX(prev) }, { x: focusX(i), duration: 1.1 }, at);
          ft($(".face", tcards[prev]), { opacity: 1 }, { opacity: 0.4, duration: 1 }, at);
          ft($(".face", tcards[i]), { opacity: 0.4 }, { opacity: 1, duration: 1 }, at);
          ft(caps[prev], { opacity: 1 }, { opacity: 0, duration: 0.5 }, at);
          ft(caps[i], { opacity: 0, y: px(10) }, { opacity: 1, y: 0, duration: 0.8 }, at + 0.35);
        };
        focus(1, 26.0);
        ft(A.glowB, { opacity: 1 }, { opacity: 0, duration: 1.2 }, 26.0);
        ft(A.glowC, { opacity: 0 }, { opacity: 1, duration: 1.2 }, 26.0);
        ft(A.base, { backgroundColor: "#0f0f0f" }, { backgroundColor: "#015825", duration: 1.2 }, 26.0);
        const c2 = M ? { x: vw * 0.5, y: vh * 0.3 + tcards[0].offsetHeight * 0.8 } : { x: px(824), y: px(472) };
        ft(A.cursor, { x: abs(c1).x, y: abs(c1).y }, { x: abs(c2).x, y: abs(c2).y, duration: 1.1 }, 26.0);
        // 04.04: card 3 (crop resilience)
        focus(2, 27.9);
        ft(A.glowC, { opacity: 1 }, { opacity: 0, duration: 1.2 }, 27.9);
        ft(A.glowD, { opacity: 0 }, { opacity: 1, duration: 1.2 }, 27.9);
        ft(A.base, { backgroundColor: "#015825" }, { backgroundColor: "#0f0f0f", duration: 1.2 }, 27.9);
        const c3 = M ? c2 : { x: px(1204), y: px(447) };
        ft(A.cursor, { x: abs(c2).x, y: abs(c2).y }, { x: abs(c3).x, y: abs(c3).y, duration: 1.1 }, 27.9);

        /* ---------- 05 · WE COME TO YOU (card 3 to drone frame to full bleed) ---------- */
        const card3 = (() => { const o = offsetIn(tcards[2], stage); const dx = M ? focusX(2) : 0; return { x: o.x + dx, y: o.y, w: tcards[2].offsetWidth, h: tcards[2].offsetHeight }; })();
        const rO = M ? { x: vw * 0.07, y: vh * 0.5 - vw * 0.86 * 0.31, w: vw * 0.86, h: vw * 0.86 * 0.624 } : R(396, 233, 647, 404);
        const rP = M ? { x: vw * 0.03, y: vh * 0.5 - vw * 0.94 * 0.42, w: vw * 0.94, h: vw * 0.94 * 0.84 } : R(199, 120, 1043, 630);
        const rQ = { x: 0, y: 0, w: vw, h: vh };
        const dr = E.drone, drIm = $(".im", dr), drOv = $(".ov", dr);
        const setBox = (r: { x: number; y: number; w: number; h: number }) => ({ x: r.x, y: r.y, width: r.w, height: r.h });
        const dTick = () => applyCrop(drIm, dr.offsetWidth, dr.offsetHeight);
        gsap.set(dr, Object.assign({ opacity: 0, borderRadius: M ? 26 : px(34) }, setBox(card3)));
        dTick();
        ft([A.hdrRoot, A.rootSub, A.cursor], { opacity: 1 }, { opacity: 0, duration: 0.7 }, 29.7);
        ft(caps, { opacity: 1 }, { opacity: 0, duration: 0.5 }, 29.6);
        ft([tcards[0], tcards[1]], { opacity: 1 }, { opacity: 0, duration: 0.8 }, 29.7);
        ft(A.ring, { opacity: 1 }, { opacity: 0, duration: 0.6 }, 29.6);
        ft(dr, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 29.9);
        ft(tcards[2], { opacity: 1 }, { opacity: 0, duration: 0.5 }, 30.1);
        ft(dr, setBox(card3), Object.assign({ borderRadius: M ? 26 : px(40), duration: 1.3, onUpdate: dTick }, setBox(rO)), 29.9);
        // 05.02: close-up
        ft(dr, setBox(rO), Object.assign({ borderRadius: M ? 30 : px(60), duration: 1.2, onUpdate: dTick }, setBox(rP)), 31.7);
        ft(drOv, { backgroundColor: "rgba(0,0,0,.2)" }, { backgroundColor: "rgba(0,0,0,.3)", duration: 1.2 }, 31.7);
        ft(A.trio, { opacity: 1 }, { opacity: 0, duration: 0.3 }, 31.0);
        // 05.03: the photo becomes the whole world, the copy arrives
        ft(dr, setBox(rP), Object.assign({ borderRadius: 0, duration: 1.3, onUpdate: dTick }, setBox(rQ)), 33.2);
        ft(A.bgField, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.1 }, 34.1);
        ft(dr, { opacity: 1 }, { opacity: 0, duration: 0.6 }, 34.4);
        ft(A.glowD, { opacity: 1 }, { opacity: 0, duration: 1 }, 34.0);
        t.fromTo(A.bgField, { scale: 1 }, { scale: 1.08, duration: 2.2, ease: "none", immediateRender: false }, 35.2);
        ft(A.fieldCopy, { opacity: 0, y: px(40), filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: out }, 34.7);

        /* ---------- 06 · WHO YOU'LL MEET: innovation & venture platforms ---------- */
        ft(A.fieldCopy, { opacity: 1, y: 0 }, { opacity: 0, y: px(-30), filter: "blur(10px)", duration: 0.8 }, 37.0);
        ft(A.bgField, { opacity: 1 }, { opacity: 0, duration: 1.2 }, 37.0);
        ft(A.bgB1, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.2 }, 37.0);
        ft(A.venTitle, { opacity: 0, y: px(30), filter: "blur(12px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: out }, 37.5);
        // 06.02: funding, incubation, acceleration
        ft(A.venTitle, { opacity: 1, y: 0 }, { opacity: 0, y: px(-50), filter: "blur(10px)", duration: 0.9 }, 39.0);
        ft(A.bgB1, { opacity: 1 }, { opacity: 0, duration: 1.1 }, 39.0);
        ft(A.bgB2, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.1 }, 39.0);
        ft([A.hdrVen, A.venSub], { opacity: 0, y: px(12) }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, 39.3);
        ft(A.tiles, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 39.4);
        ft(tiles, { opacity: 0, y: px(46), scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.12, ease: out }, 39.5);
        ft(A.venBtn, { opacity: 0, y: px(20) }, { opacity: 1, y: 0, duration: 0.8, ease: out }, 40.2);
        const tImgs = tiles.map(x => $(".im", x));
        const tOn = (i: number, at: number) => {
          ft(tiles[i], {}, { duration: 0.001, onStart() { tiles.forEach((x, k) => x.classList.toggle("on", k === i)); }, onReverseComplete() { tiles.forEach((x, k) => x.classList.toggle("on", k === Math.max(i - 1, 0))); } }, at);
          ft(tImgs[i], { opacity: 0, scale: 1.14 }, { opacity: 1, scale: 1, duration: 0.9 }, at);
          if (i > 0) ft(tImgs[i - 1], { opacity: 1 }, { opacity: 0, duration: 0.6 }, at);
        };
        gsap.set(tImgs, { opacity: 0, scale: 1.14 }); gsap.set(tImgs[0], { opacity: 1, scale: 1 });
        tiles.forEach((x, k) => x.classList.toggle("on", k === 0));
        tOn(1, 41.2); tOn(2, 42.2); tOn(3, 43.2);

        /* ---------- 07 · ONE OASIS, THREE WAYS IN ---------- */
        ft([A.hdrVen, A.venSub, A.tiles, A.venBtn], { opacity: 1 }, { opacity: 0, duration: 0.8 }, 44.2);
        ft(A.bgB2, { opacity: 1 }, { opacity: 0, duration: 1.2 }, 44.2);
        ft(A.bgR70, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.2 }, 44.2);
        ft(A.engTitle, { opacity: 0, y: px(30), filter: "blur(12px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: out }, 44.8);
        ft(A.engTitle, { opacity: 1, y: 0 }, { opacity: 0, y: px(-50), filter: "blur(10px)", duration: 0.9 }, 46.2);
        ft(A.bgR70, { opacity: 1 }, { opacity: 0, duration: 1.1 }, 46.2);
        ft(A.bgR06, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.1 }, 46.2);
        ft(A.hdrEng, { opacity: 0, y: px(12) }, { opacity: 1, y: 0, duration: 0.9 }, 46.5);
        ft(A.eng, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 46.6);
        ft(ecards, { opacity: 0, y: px(50), scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.14, ease: out }, 46.7);

        /* ---------- 08 · TRAINING & TALENT ---------- */
        ft([A.hdrEng, A.eng], { opacity: 1 }, { opacity: 0, duration: 0.8 }, 48.2);
        ft(A.bgR06, { opacity: 1 }, { opacity: 0, duration: 1.2 }, 48.2);
        ft(A.base, { backgroundColor: "#0f0f0f" }, { backgroundColor: "#000000", duration: 1.2 }, 48.2);
        ft(A.glowE, { opacity: 0 }, { opacity: 1, duration: 1.2 }, 48.2);
        ft([A.hdrTal, A.talSub], { opacity: 0, y: px(12) }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, 48.8);
        ft(A.list, { opacity: 0, y: px(44), scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: out }, 48.9);
        ft(lis, { opacity: 0, x: px(-10) }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: out }, 49.2);
        const liOn = (i: number, at: number) => ft(lis[i], {}, { duration: 0.001, onStart() { lis.forEach((l, k) => l.classList.toggle("on", k === i)); }, onReverseComplete() { lis.forEach((l, k) => l.classList.toggle("on", k === Math.max(i - 1, 0))); } }, at);
        lis.forEach(l => l.classList.remove("on")); lis[0].classList.add("on");
        liOn(1, 49.9); liOn(2, 50.4); liOn(3, 50.9);

        /* ---------- 09 · VIRTUAL TOUR ---------- */
        ft([A.hdrTal, A.talSub, A.list], { opacity: 1 }, { opacity: 0, duration: 0.8 }, 51.4);
        ft([A.hdrTour, A.tourSub], { opacity: 0, y: px(12) }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, 51.8);
        ft(A.tour, { opacity: 0, scale: 0.9, y: px(30) }, { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: out }, 51.9);
        ft(A.tourBtn, { opacity: 0, y: px(20) }, { opacity: 1, y: 0, duration: 0.8, ease: out }, 52.5);

        // hand the stage over to the footer
        ft([A.hdrTour, A.tourSub, A.tour, A.tourBtn], { opacity: 1 }, { opacity: 1, duration: 0.001 }, 53.2);
        t.to({}, { duration: 0.001 }, TOTAL - 0.001);

        /* ---------- scroll binding ---------- */
        st = ScrollTrigger.create({
          trigger: story, start: "top top", end: "bottom bottom", animation: t,
          scrub: reduce ? true : 0.7,
          onUpdate: () => chrome(t.time()),
        });
        chrome(t.time());
      }, stage);
    }

    /* ------------------------------------------------------------------ navigation */
    const seekTo = (y: number, immediate = false) => {
      if (lenis) lenis.scrollTo(y, immediate ? { immediate: true, force: true } : { duration: 2.2, easing: (x: number) => 1 - Math.pow(1 - x, 4) });
      else scrollTo({ top: y, behavior: immediate ? "auto" : "smooth" });
    };
    const ppuNow = () => innerHeight * (M ? 0.62 : 0.7);
    const go = (i: number) => seekTo(story.offsetTop + CHAPTER_GO[i] * ppuNow());

    const menu = $("#menu"), menuBtn = $("#menuBtn");
    const closeMenu = () => { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-hidden", "true"); lenis?.start(); };
    const onMenuBtn = () => {
      const open = !menu.classList.contains("open");
      menu.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open)); menu.setAttribute("aria-hidden", String(!open));
      if (open) lenis?.stop(); else lenis?.start();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    const onChapter = (e: Event) => { e.preventDefault(); closeMenu(); go(Number((e.currentTarget as Q).dataset.i)); };
    const onHome = (e: Event) => { e.preventDefault(); go(0); };
    const chapterLinks = $$("#nav a, #menuList a");
    chapterLinks.forEach(a => a.addEventListener("click", onChapter));
    $("#home").addEventListener("click", onHome);
    menuBtn.addEventListener("click", onMenuBtn);
    addEventListener("keydown", onKey);

    /* ------------------------------------------------------------------ footer layout (design coordinates) */
    function footer() {
      const a = $("#colA"), b = $("#colB");
      if (M) { a.style.left = b.style.left = ""; return; }
      const f = parseFloat(getComputedStyle(rootEl).getPropertyValue("--fu"));
      a.style.left = (728 - 64) * f + "px";
      b.style.left = (1060 - 64) * f + "px";
    }

    /* ------------------------------------------------------------------ boot */
    if (!reduce && params.get("lenis") !== "0") {
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      tickFn = (time: number) => { lenis?.raf(time * 1000); };
      gsap.ticker.add(tickFn);
      gsap.ticker.lagSmoothing(0);
    }
    function init() {
      const p = st ? st.progress : 0;
      build(); footer();
      ScrollTrigger.refresh();
      const startY = params.get("t") ? story.offsetTop + parseFloat(params.get("t") as string) * ppuNow() : 0;
      if (p > 0) scrollTo(0, story.offsetTop + p * (story.offsetHeight - innerHeight));
      else if (startY) seekTo(startY, true);
      chrome(tl ? tl.time() : 0);
    }
    let lastW = innerWidth, lastH = innerHeight, rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (innerWidth === lastW && Math.abs(innerHeight - lastH) < 120 && M) return; // phone browser bars show / hide
        lastW = innerWidth; lastH = innerHeight; init();
      }, 180);
    };
    addEventListener("resize", onResize);

    let alive = true;
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    fontsReady.then(() => { if (alive) init(); });

    return () => {
      alive = false;
      clearTimeout(rt);
      removeEventListener("resize", onResize);
      removeEventListener("keydown", onKey);
      chapterLinks.forEach(a => a.removeEventListener("click", onChapter));
      $("#home")?.removeEventListener("click", onHome);
      menuBtn?.removeEventListener("click", onMenuBtn);
      st?.kill();
      ctx?.revert();
      if (tickFn) gsap.ticker.remove(tickFn);
      lenis?.destroy();
      doc.style.background = prevBg;
    };
  }, []);

  return null;
}
