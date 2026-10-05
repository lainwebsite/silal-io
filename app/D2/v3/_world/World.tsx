"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import { gsap } from "gsap";
import { CAM_Z, FOV, type Ctx, type Formation, markO, scatter } from "./formations";
import { palettes, scenes, layout, type Palette } from "./scenes";
import { world } from "./store";

/*
 * The World: one WebGL canvas fixed behind the whole page.
 *  - a sky gradient (noise-flowed, grained) whose colours follow the story
 *  - N particles that morph between formations as sections pass
 * Sections are transparent, so the page never "cuts" between backgrounds.
 * Scenes are read from the DOM: any element with data-scene="<key>" (see scenes.ts).
 * Blend rule: scene i is current once its top passes 50% of the viewport; the next scene
 * blends in while its top travels from 100% → 50% of the viewport.
 */

const BG_VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const BG_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec3 uTop, uMid, uBot, uGlow;
uniform float uGlowAmt, uTime, uAspect;
uniform vec2 uGlowPos, uRes;
vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec2 uv = vUv;
  float n = snoise(vec2(uv.x * uAspect * 1.2, uv.y * 1.2) + vec2(uTime * 0.025, -uTime * 0.018));
  float n2 = snoise(vec2(uv.x * uAspect * 2.6, uv.y * 2.6) - vec2(uTime * 0.02, uTime * 0.03));
  float y = uv.y + n * 0.07 + n2 * 0.025;
  vec3 c = mix(uBot, uMid, smoothstep(0.0, 0.55, y));
  c = mix(c, uTop, smoothstep(0.45, 1.05, y));
  vec2 gp = vec2((uv.x - uGlowPos.x) * uAspect, uv.y - uGlowPos.y);
  float g = exp(-dot(gp, gp) * 2.6) * (0.85 + 0.15 * n);
  c = mix(c, uGlow, clamp(g * uGlowAmt, 0.0, 1.0));
  c += (hash(uv * uRes + fract(uTime)) - 0.5) * 0.022;
  gl_FragColor = vec4(c, 1.0);
}`;

const PT_VERT = /* glsl */ `
attribute vec3 aFrom; attribute vec3 aTo; attribute float aFromA; attribute float aToA; attribute float aRand;
uniform float uMix, uTime, uSize, uPR, uAgitate, uVel, uMoveScale;
uniform vec3 uCFrom, uCTo; uniform float uSpinFrom, uSpinTo, uAxisFrom, uAxisTo;
uniform vec2 uMouse; uniform float uMouseOn;
varying float vAlpha; varying float vAccent;
vec3 rot(vec3 p, vec3 c, float a, float axis){
  p -= c; float s = sin(a), co = cos(a);
  if (axis < 0.5) p = vec3(co*p.x + s*p.z, p.y, -s*p.x + co*p.z);
  else if (axis < 1.5) p = vec3(co*p.x - s*p.y, s*p.x + co*p.y, p.z);
  else p = vec3(p.x, co*p.y - s*p.z, s*p.y + co*p.z);
  return p + c;
}
void main(){
  float t = clamp(uMix * 1.55 - aRand * 0.55, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  vec3 a = rot(aFrom, uCFrom, uTime * uSpinFrom * uMoveScale, uAxisFrom);
  vec3 b = rot(aTo, uCTo, uTime * uSpinTo * uMoveScale, uAxisTo);
  vec3 p = mix(a, b, t);
  float arc = sin(t * 3.14159);
  p.z += arc * (aRand - 0.5) * 3.0;
  p.y += arc * (fract(aRand * 13.7) - 0.5) * 0.8;
  float tt = uTime * uMoveScale;
  p += vec3(sin(tt * 0.6 + aRand * 40.0), cos(tt * 0.5 + aRand * 31.0), sin(tt * 0.4 + aRand * 17.0)) * 0.025;
  p.y += sin(tt * 2.6 + p.x * 1.7 + aRand * 6.2831) * 0.06 * uAgitate;
  p.x += cos(tt * 1.9 + p.y * 2.3 + aRand * 4.0) * 0.03 * uAgitate;
  p.y -= uVel * (0.2 + aRand * 0.8) * 0.35;
  vec2 d = p.xy - uMouse; float dl = length(d);
  p.xy += (dl > 0.0001 ? d / dl : vec2(0.0)) * max(0.0, 0.9 - dl) * 0.45 * uMouseOn;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float depth = -mv.z;
  gl_PointSize = uSize * uPR * (0.55 + aRand * 0.9) * (10.0 / depth);
  gl_Position = projectionMatrix * mv;
  vec3 cen = mix(uCFrom, uCTo, t);
  float dz = p.z - cen.z;
  vAlpha = mix(aFromA, aToA, t) * (0.5 + 0.5 * smoothstep(-1.6, 1.2, dz)) * smoothstep(60.0, 20.0, depth);
  vAccent = step(0.8, fract(aRand * 7.31));
}`;

const PT_FRAG = /* glsl */ `
precision highp float;
uniform vec3 uColor, uAccent; uniform float uOpacity;
varying float vAlpha; varying float vAccent;
void main(){
  vec2 c = gl_PointCoord - 0.5; float d = length(c);
  float a = smoothstep(0.5, 0.1, d) * vAlpha * uOpacity;
  if (a < 0.01) discard;
  gl_FragColor = vec4(mix(uColor, uAccent, vAccent), a);
}`;

// Shaders write colours straight to the screen, so keep hex values as-is (no sRGB→linear conversion);
// otherwise IO Blue and Charcoal render darker than the brand values.
THREE.ColorManagement.enabled = false;
const col = (h: string) => new THREE.Color(h);
const lerpHex = (a: string, b: string, t: number) => "#" + col(a).lerp(col(b), t).getHexString();
const ease = (t: number) => t * t * (3 - 2 * t);

export function World({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = host.current!;
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance" });
    } catch {
      world.still = true;
      world.ready = true;
      world.emit();
      return;
    }
    renderer.autoClear = false;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.domElement.setAttribute("aria-hidden", "true");
    el.appendChild(renderer.domElement);

    const mobile = () => window.innerWidth < 760;
    const N = mobile() ? 2600 : 6200;

    /* Background */
    const bgScene = new THREE.Scene();
    const bgCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const bgU = {
      uTop: { value: col("#ffffff") },
      uMid: { value: col("#ffffff") },
      uBot: { value: col("#ffffff") },
      uGlow: { value: col("#3CA7D2") },
      uGlowAmt: { value: 0 },
      uGlowPos: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uRes: { value: new THREE.Vector2(1, 1) },
    };
    bgScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ vertexShader: BG_VERT, fragmentShader: BG_FRAG, uniforms: bgU, depthWrite: false })));

    /* Particles */
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(FOV, 1, 0.1, 200);
    cam.position.set(0, 0, CAM_Z);
    const geo = new THREE.BufferGeometry();
    const aFrom = new THREE.BufferAttribute(new Float32Array(N * 3), 3);
    const aTo = new THREE.BufferAttribute(new Float32Array(N * 3), 3);
    const aFromA = new THREE.BufferAttribute(new Float32Array(N), 1);
    const aToA = new THREE.BufferAttribute(new Float32Array(N), 1);
    const rand = new Float32Array(N);
    for (let i = 0; i < N; i++) rand[i] = Math.random();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    geo.setAttribute("aFrom", aFrom);
    geo.setAttribute("aTo", aTo);
    geo.setAttribute("aFromA", aFromA);
    geo.setAttribute("aToA", aToA);
    geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);
    const ptU = {
      uMix: { value: 0 },
      uTime: { value: 0 },
      uSize: { value: 2.4 },
      uPR: { value: renderer.getPixelRatio() },
      uAgitate: { value: 0 },
      uVel: { value: 0 },
      uMoveScale: { value: reduce ? 0 : 1 },
      uCFrom: { value: new THREE.Vector3() },
      uCTo: { value: new THREE.Vector3() },
      uSpinFrom: { value: 0 },
      uSpinTo: { value: 0 },
      uAxisFrom: { value: 0 },
      uAxisTo: { value: 0 },
      uMouse: { value: new THREE.Vector2(99, 99) },
      uMouseOn: { value: 0 },
      uColor: { value: col("#595453") },
      uAccent: { value: col("#3CA7D2") },
      uOpacity: { value: 1 },
    };
    const points = new THREE.Points(
      geo,
      new THREE.ShaderMaterial({ vertexShader: PT_VERT, fragmentShader: PT_FRAG, uniforms: ptU, transparent: true, depthWrite: false }),
    );
    scene.add(points);

    /* Formation cache */
    let ctx: Ctx = { n: N, w: 1, h: 1, mobile: mobile() };
    const cache = new Map<string, Formation>();
    const get = (key: string): Formation => {
      let f = cache.get(key);
      if (!f) {
        if (key === "__scatter") f = scatter(ctx);
        else if (key === "__seed") f = markO(ctx, 0, 0, layout.ring(ctx) * 0.55);
        else f = (scenes[key] ?? scenes.question).build(ctx);
        cache.set(key, f);
      }
      return f;
    };

    let pairKey = "";
    const setPair = (a: string, b: string) => {
      const k = a + ">" + b;
      if (k === pairKey) return;
      pairKey = k;
      const fa = get(a);
      const fb = get(b);
      (aFrom.array as Float32Array).set(fa.pos);
      (aTo.array as Float32Array).set(fb.pos);
      (aFromA.array as Float32Array).set(fa.alpha);
      (aToA.array as Float32Array).set(fb.alpha);
      aFrom.needsUpdate = aTo.needsUpdate = aFromA.needsUpdate = aToA.needsUpdate = true;
      ptU.uCFrom.value.set(...fa.center);
      ptU.uCTo.value.set(...fb.center);
      ptU.uSpinFrom.value = fa.spin;
      ptU.uSpinTo.value = fb.spin;
      ptU.uAxisFrom.value = fa.axis;
      ptU.uAxisTo.value = fb.axis;
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
      const vh = 2 * CAM_Z * Math.tan(((FOV / 2) * Math.PI) / 180);
      ctx = { n: N, w: vh * (w / h), h: vh, mobile: mobile() };
      ptU.uSize.value = mobile() ? 2.1 : 2.4;
      bgU.uAspect.value = w / h;
      bgU.uRes.value.set(w, h);
      cache.clear();
      pairKey = "";
    };
    resize();

    /* Scenes from the DOM */
    let els: HTMLElement[] = [];
    const collect = () => {
      els = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    };
    collect();
    const mo = new MutationObserver(() => collect());
    mo.observe(document.body, { childList: true, subtree: true });

    /* Pointer → world (z = 0 plane) */
    const mouse = { x: 99, y: 99, on: 0 };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouse.x = (e.clientX / window.innerWidth - 0.5) * ctx.w;
      mouse.y = (0.5 - e.clientY / window.innerHeight) * ctx.h;
      mouse.on = 1;
    };
    const onLeave = () => (mouse.on = 0);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    let lastFg = "";
    let lastDark = -1;
    const applyPalette = (p: Palette, q: Palette, t: number) => {
      const e = ease(t);
      bgU.uTop.value.copy(col(p.top)).lerp(col(q.top), e);
      bgU.uMid.value.copy(col(p.mid)).lerp(col(q.mid), e);
      bgU.uBot.value.copy(col(p.bot)).lerp(col(q.bot), e);
      bgU.uGlow.value.copy(col(p.glow)).lerp(col(q.glow), e);
      bgU.uGlowAmt.value = p.glowAmt + (q.glowAmt - p.glowAmt) * e;
      bgU.uGlowPos.value.set(p.glowPos[0] + (q.glowPos[0] - p.glowPos[0]) * e, p.glowPos[1] + (q.glowPos[1] - p.glowPos[1]) * e);
      ptU.uColor.value.copy(col(p.dot)).lerp(col(q.dot), e);
      ptU.uAccent.value.copy(col(p.accent)).lerp(col(q.accent), e);
      ptU.uOpacity.value = p.dotAlpha + (q.dotAlpha - p.dotAlpha) * e;
      ptU.uAgitate.value = (p.agitate ?? 0) + ((q.agitate ?? 0) - (p.agitate ?? 0)) * e;
      // text colours follow the sky
      const fg = lerpHex(p.fg, q.fg, e);
      if (fg !== lastFg) {
        lastFg = fg;
        const c = col(fg);
        const rgb = `${Math.round(c.r * 255)} ${Math.round(c.g * 255)} ${Math.round(c.b * 255)}`;
        root.style.setProperty("--w-fg-rgb", rgb);
        root.style.setProperty("--w-accent", lerpHex(p.accentText, q.accentText, e));
        root.style.setProperty("--w-mid", "#" + bgU.uMid.value.getHexString());
      }
      const dark = p.dark + (q.dark - p.dark) * e > 0.5 ? 1 : 0;
      if (dark !== lastDark) {
        lastDark = dark;
        if (dark) root.setAttribute("data-w-dark", "");
        else root.removeAttribute("data-w-dark");
      }
    };

    let vel = 0;
    const tick = (time: number) => {
      const vh = window.innerHeight;
      // which scene, how far into the next
      let i = 0;
      const tops = els.map((e) => e.getBoundingClientRect().top);
      for (let k = 0; k < tops.length; k++) if (tops[k] <= vh * 0.5) i = k;
      const next = Math.min(i + 1, els.length - 1);
      let mix = next !== i ? Math.min(1, Math.max(0, (vh - tops[next]) / (vh * 0.5))) : 0;
      const keyA = els[i]?.dataset.scene ?? "hero";
      const keyB = els[next]?.dataset.scene ?? keyA;

      if (world.intro < 1) {
        setPair("__scatter", "__seed");
        ptU.uMix.value = world.intro;
        applyPalette(palettes.sky, palettes.sky, 0);
      } else if (world.intro < 2 && i === 0 && mix === 0) {
        setPair("__seed", keyA);
        ptU.uMix.value = world.intro - 1;
        applyPalette(palettes[scenes[keyA]?.palette ?? "sky"], palettes[scenes[keyA]?.palette ?? "sky"], 0);
      } else {
        setPair(keyA, keyB);
        ptU.uMix.value = mix;
        applyPalette(palettes[scenes[keyA]?.palette ?? "light"], palettes[scenes[keyB]?.palette ?? "light"], mix);
      }

      vel += (world.velocity - vel) * 0.08;
      ptU.uVel.value = reduce ? 0 : Math.max(-2, Math.min(2, vel * 0.03));
      ptU.uMouse.value.x += (mouse.x - ptU.uMouse.value.x) * 0.08;
      ptU.uMouse.value.y += (mouse.y - ptU.uMouse.value.y) * 0.08;
      ptU.uMouseOn.value += ((reduce ? 0 : mouse.on) - ptU.uMouseOn.value) * 0.05;
      ptU.uTime.value = time;
      bgU.uTime.value = reduce ? 0 : time;

      renderer.clear();
      renderer.render(bgScene, bgCam);
      renderer.render(scene, cam);
    };
    gsap.ticker.add(tick);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    world.ready = true;
    world.emit();

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      mo.disconnect();
      geo.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      root.removeAttribute("data-w-dark");
    };
  }, []);

  // re-read scenes on route change
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [pathname]);

  return <div ref={host} className={className} aria-hidden />;
}
