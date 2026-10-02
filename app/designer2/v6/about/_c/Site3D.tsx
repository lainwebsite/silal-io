"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import a from "../about.module.css";
import { Label } from "../../_c/Brand";
import { P } from "../../_lib/photo";

gsap.registerPlugin(ScrollTrigger);

/*
 * 01 · The site. A model of the 34-hectare campus built from the aerial footage: the long white main
 * building with its perforated canopy "trees", the roundabout, gatehouse and shaded car parks; fenced
 * trial plots, rows of shade cages, multi-span greenhouses, the blue dome and water tanks; the date
 * palms of Al Foah Farm across the road; desert beyond. Illustrative, not to scale.
 * The camera holds at each stop (long enough to read), then eases to the next. At each stop a card
 * (photo + copy) sits beside the point it describes and follows it on screen.
 */

type V3 = [number, number, number];
const stops: { name: string; text: string; src: string; at: V3; cam: V3; look: V3 }[] = [
  {
    name: "34 hectares beside Al Foah Farm",
    text: "Where others saw empty desert, the team saw an opportunity to create a living ecosystem designed around collaboration, experimentation, and impact.",
    src: P.aerialWide,
    at: [-6, 3, -22],
    cam: [92, 104, 150],
    look: [-6, 0, -20],
  },
  {
    name: "Field-testing areas",
    text: "A place where startups can test technologies in real-world conditions.",
    src: P.soilProbe,
    at: [-34, 1.4, -24],
    cam: [2, 40, 26],
    look: [-32, 0, -26],
  },
  {
    name: "Greenhouses",
    text: "Where researchers and farmers collaborate side-by-side.",
    src: P.tomatoAisle,
    at: [-36, 4.4, -64],
    cam: [10, 34, -24],
    look: [-32, 1, -66],
  },
  {
    name: "Laboratories and collaboration spaces",
    text: "Where commercial partners help scale solutions.",
    src: P.atrium,
    at: [0, 7.2, 14],
    cam: [38, 19, 62],
    look: [0, 3, 16],
  },
  {
    name: "The proving ground",
    text: "And where the UAE’s toughest growing conditions become the ultimate proving ground for the future of food.",
    src: P.droneSky,
    at: [36, 6, -24],
    cam: [-150, 150, 150],
    look: [0, 0, -24],
  },
];
const N = stops.length;

// ── materials / helpers ──────────────────────────────────────────────────────────────────────────
function stripes(n: number, bg: string, fg: string, w = 0.42) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = bg;
  g.fillRect(0, 0, 256, 256);
  g.fillStyle = fg;
  const s = 256 / n;
  for (let i = 0; i < n; i++) g.fillRect(i * s + s * (1 - w) * 0.5, 0, s * w, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
function grain() {
  // fine sand grain + wind ripples, multiplied over the sand colour
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, 512, 512);
  let s = 3;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 9000; i++) {
    const v = 236 + Math.floor(r() * 16);
    g.fillStyle = `rgb(${v},${v - 4},${v - 10})`;
    g.fillRect(r() * 512, r() * 512, 1 + r() * 2, 1 + r() * 2);
  }
  g.strokeStyle = "rgba(200,180,150,0.18)";
  for (let y = 0; y < 512; y += 9) {
    g.beginPath();
    for (let x = 0; x <= 512; x += 16) g.lineTo(x, y + Math.sin(x * 0.03 + y) * 3);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(70, 70);
  t.anisotropy = 8;
  return t;
}
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function Site3D() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const dots = useRef<(HTMLSpanElement | null)[]>([]);
  const lead = useRef<SVGLineElement>(null);
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    THREE.ColorManagement.enabled = true;
    const host = stage.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 900;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch {
      setFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.02;
    renderer.shadowMap.enabled = !small;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const haze = new THREE.Color("#efece6");
    scene.background = haze;
    scene.fog = new THREE.Fog(haze, 220, 520);
    const camera = new THREE.PerspectiveCamera(30, 1, 1, 900);

    scene.add(new THREE.HemisphereLight("#f4f8fb", "#d8c5a4", 1.35));
    const sun = new THREE.DirectionalLight("#fff6ea", 2.5);
    sun.position.set(-70, 110, 60);
    sun.castShadow = !small;
    sun.shadow.mapSize.set(4096, 4096);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = sc.bottom = -130;
    sc.right = sc.top = 130;
    sc.near = 10;
    sc.far = 360;
    sun.shadow.bias = -0.0005;
    sun.shadow.normalBias = 0.04;
    scene.add(sun);

    const bin: { dispose: () => void }[] = [];
    const mat = (o: THREE.MeshStandardMaterialParameters) => {
      const m = new THREE.MeshStandardMaterial({ roughness: 0.9, ...o });
      bin.push(m);
      return m;
    };
    const sandTex = grain();
    bin.push(sandTex);
    const M = {
      sand: mat({ color: "#dfcca9", map: sandTex, roughness: 1 }),
      farmSoil: mat({ color: "#cdb48c", roughness: 1 }),
      asphalt: mat({ color: "#a9a6a0", roughness: 0.95 }),
      concrete: mat({ color: "#e2dbcf", roughness: 0.95 }),
      paving: mat({ color: "#ece8e1", roughness: 0.9 }),
      white: mat({ color: "#fbfbfa", roughness: 0.75 }),
      offwhite: mat({ color: "#eeeeec", roughness: 0.85 }),
      glass: mat({ color: "#3a4a55", roughness: 0.25, metalness: 0.2 }),
      blue: mat({ color: "#3ca7d2", roughness: 0.55 }),
      grass: mat({ color: "#6f9a46", roughness: 1 }),
      palmLeaf: mat({ color: "#5b7d3c", roughness: 0.9 }),
      trunk: mat({ color: "#9a8466", roughness: 1 }),
      datePalm: mat({ color: "#4a6537", roughness: 1, flatShading: true }),
      fence: mat({ color: "#2f9a78", roughness: 0.8, transparent: true, opacity: 0.78 }),
      roof: mat({ color: "#ffffff", roughness: 0.6, side: THREE.DoubleSide }),
      ghWall: mat({ color: "#e6eae3", roughness: 0.7 }),
      dome: mat({ color: "#3f8fcf", roughness: 0.35, metalness: 0.25, flatShading: true }),
      solar: mat({ color: "#2d3a4a", roughness: 0.35, metalness: 0.3 }),
      car: mat({ color: "#ffffff", roughness: 0.5 }),
      dark: mat({ color: "#59616a", roughness: 0.7 }),
    };

    const keep = <T extends THREE.Object3D>(o: T, shadow = true) => {
      o.traverse((c) => {
        const m = c as THREE.Mesh;
        if (m.isMesh) {
          m.castShadow = shadow;
          m.receiveShadow = true;
        }
      });
      scene.add(o);
      return o;
    };
    const geo = <G extends THREE.BufferGeometry>(g: G) => {
      bin.push(g);
      return g;
    };
    const box = (w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material, ry = 0) => {
      const o = new THREE.Mesh(geo(new THREE.BoxGeometry(w, h, d)), m);
      o.position.set(x, y + h / 2, z);
      o.rotation.y = ry;
      return keep(o);
    };
    const flat = (w: number, d: number, x: number, z: number, m: THREE.Material, y = 0.02) => {
      const o = new THREE.Mesh(geo(new THREE.PlaneGeometry(w, d)), m);
      o.rotation.x = -Math.PI / 2;
      o.position.set(x, y, z);
      o.receiveShadow = true;
      scene.add(o);
      return o;
    };
    const o3 = new THREE.Object3D();
    const inst = (g: THREE.BufferGeometry, m: THREE.Material, items: { p: V3; s?: V3; r?: number; c?: string }[], shadow = true) => {
      const im = new THREE.InstancedMesh(geo(g), m, items.length);
      const col = new THREE.Color();
      items.forEach((it, i) => {
        o3.position.set(...it.p);
        o3.rotation.set(0, it.r ?? 0, 0);
        o3.scale.set(...(it.s ?? [1, 1, 1]));
        o3.updateMatrix();
        im.setMatrixAt(i, o3.matrix);
        if (it.c) im.setColorAt(i, col.set(it.c));
      });
      im.castShadow = shadow;
      im.receiveShadow = true;
      scene.add(im);
      return im;
    };
    const rnd = (() => {
      let s = 7;
      return () => ((s = (s * 16807) % 2147483647) / 2147483647);
    })();

    // ── ground: desert, irrigated farm soil, dunes ──
    const dg = geo(new THREE.PlaneGeometry(1400, 1400, 180, 180));
    const pos = dg.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const r = Math.hypot(x, y * 1.2);
      const fall = THREE.MathUtils.smoothstep(r, 190, 320);
      pos.setZ(i, fall * (Math.sin(x * 0.03 + y * 0.01) * 5 + Math.sin(y * 0.045 - x * 0.012) * 4 + 5));
    }
    dg.computeVertexNormals();
    const ground = new THREE.Mesh(dg, M.sand);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    flat(300, 70, 0, 96, M.farmSoil, 0.01); // Al Foah Farm, across the road
    flat(90, 210, 150, -20, M.farmSoil, 0.01);
    flat(260, 50, -10, -130, M.farmSoil, 0.01);

    // ── roads ──
    flat(420, 6, 0, 58, M.asphalt, 0.04); // public road
    flat(6, 26, 0, 45, M.asphalt, 0.05); // entrance
    flat(80, 4, 0, 32, M.asphalt, 0.05); // front road
    const ring = new THREE.Mesh(geo(new THREE.CircleGeometry(7.5, 48)), M.asphalt);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.06, 32);
    ring.receiveShadow = true;
    scene.add(ring);
    keep(new THREE.Mesh(geo(new THREE.CylinderGeometry(3.6, 3.6, 0.3, 40)), M.white)).position.set(0, 0.15, 32);
    keep(new THREE.Mesh(geo(new THREE.CylinderGeometry(3.3, 3.3, 0.36, 40)), M.grass)).position.set(0, 0.18, 32);
    flat(130, 3.2, -2, -4, M.concrete, 0.04); // service spine behind the building
    flat(3.2, 80, -8, -42, M.concrete, 0.04);
    flat(3.2, 70, 22, -40, M.concrete, 0.04);
    flat(110, 3.2, -4, -48, M.concrete, 0.04);

    // perimeter
    const per: { p: V3; s: V3; r?: number }[] = [
      { p: [0, 0, 28], s: [128, 0.7, 0.25] },
      { p: [0, 0, -84], s: [128, 0.7, 0.25] },
      { p: [-64, 0, -28], s: [0.25, 0.7, 112] },
      { p: [64, 0, -28], s: [0.25, 0.7, 112] },
    ];
    inst(geo(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0)), M.offwhite, per);

    // ── main building (labs + collaboration spaces) ──
    box(40, 4.4, 12, 0, 0, 14, M.white);
    box(15, 2.2, 10, 0, 4.4, 13, M.white);
    box(42, 0.35, 13.4, 0, 4.4, 14, M.white); // fascia
    box(6.5, 3, 0.25, 0, 0, 20.1, M.glass); // entrance
    box(8, 0.3, 3, 0, 3.6, 21.4, M.white); // entrance canopy
    [-15, 15].forEach((x) => box(2.2, 4.2, 0.2, x, 0, 20.12, M.blue)); // the blue façade panels
    [-10, -6, 6, 10].forEach((x) => box(2.6, 2.4, 0.15, x, 0.6, 20.1, M.glass));
    for (let i = 0; i < 6; i++) box(2.6, 1.2, 2.4, -16 + i * 6.4, 4.75, 11, M.offwhite); // roof plant
    flat(48, 8, 0, 24.5, M.paving, 0.05); // plaza
    // the perforated canopy "trees": dish on a stem that branches into the rim
    const dish = new THREE.LatheGeometry(
      [new THREE.Vector2(0.15, 0), new THREE.Vector2(0.9, 0.15), new THREE.Vector2(1.9, 0.42), new THREE.Vector2(2.7, 0.62), new THREE.Vector2(2.75, 0.7)],
      40,
    ).translate(0, 4.5, 0);
    const parts: THREE.BufferGeometry[] = [dish, new THREE.CylinderGeometry(0.11, 0.13, 3.4, 10).translate(0, 1.7, 0)];
    for (let k = 0; k < 6; k++) {
      const t = (k / 6) * Math.PI * 2;
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 3.3, 0),
        new THREE.Vector3(Math.cos(t) * 0.4, 4.0, Math.sin(t) * 0.4),
        new THREE.Vector3(Math.cos(t) * 1.4, 4.5, Math.sin(t) * 1.4),
        new THREE.Vector3(Math.cos(t) * 2.5, 5.08, Math.sin(t) * 2.5),
      );
      parts.push(new THREE.TubeGeometry(curve, 14, 0.06, 6));
    }
    const canopyGeo = mergeGeometries(parts.map((g) => g.toNonIndexed()));
    parts.forEach((g) => g.dispose());
    const canopyMat = mat({ color: "#ffffff", roughness: 0.6, side: THREE.DoubleSide });
    inst(
      canopyGeo,
      canopyMat,
      [-15, -9, -3, 3, 9, 15].map((x, i) => ({ p: [x, 0, 24 + (i % 2) * 1.6] as V3, s: [1, 1, 1] as V3, r: i })),
    );
    // palms
    const crown = mergeGeometries(
      Array.from({ length: 9 }, (_, k) =>
        new THREE.BoxGeometry(0.28, 0.05, 2.1)
          .translate(0, 0, 1.05)
          .rotateX(0.42 + (k % 2) * 0.2)
          .rotateY((k / 9) * Math.PI * 2)
          .translate(0, 3.7, 0)
          .toNonIndexed(),
      ),
    );
    const palms: { p: V3; r: number; s: V3 }[] = [];
    const palm = (x: number, z: number) => palms.push({ p: [x, 0, z], r: rnd() * 6, s: [1, 0.85 + rnd() * 0.3, 1] });
    for (let i = 0; i < 12; i++) palm(-34 + i * 6.2, 29.4);
    for (let i = 0; i < 5; i++) palm(-22 + i * 2.6, 22), palm(12 + i * 2.6, 22);
    for (let i = 0; i < 6; i++) palm(-5, 38 + i * 3), palm(5, 38 + i * 3);
    inst(new THREE.CylinderGeometry(0.1, 0.17, 3.7, 6).translate(0, 1.85, 0), M.trunk, palms);
    inst(crown, M.palmLeaf, palms);

    // car parks with shade sails, cars, gatehouse, the IO totem
    const shades: { p: V3; s: V3 }[] = [];
    const cars: { p: V3; c: string; r: number }[] = [];
    const carCols = ["#ffffff", "#f2f2f2", "#c9cdd1", "#8e959c", "#3b4148", "#ffffff", "#d8d2c8"];
    [-1, 1].forEach((side) => {
      flat(30, 9, side * 24, 38, M.asphalt, 0.045);
      for (let i = 0; i < 6; i++) {
        shades.push({ p: [side * (12 + i * 4.8), 2.3, 39], s: [4.5, 0.12, 4.6] });
        if (rnd() > 0.25) cars.push({ p: [side * (12 + i * 4.8) - 1, 0, 39 + (rnd() - 0.5)], c: carCols[Math.floor(rnd() * carCols.length)], r: 0 });
        if (rnd() > 0.35) cars.push({ p: [side * (12 + i * 4.8) + 1.1, 0, 39 + (rnd() - 0.5)], c: carCols[Math.floor(rnd() * carCols.length)], r: 0 });
      }
    });
    inst(new THREE.BoxGeometry(1, 1, 1), M.white, shades);
    inst(new THREE.CylinderGeometry(0.06, 0.06, 2.3, 5).translate(0, 1.15, 0), M.offwhite, shades.map((s) => ({ p: [s.p[0], 0, s.p[2] - 2.2] as V3 })));
    inst(new THREE.BoxGeometry(1.05, 0.75, 2.1).translate(0, 0.45, 0), M.car, cars);
    box(3.2, 2.6, 3.2, 0, 0, 47, M.white);
    box(4.4, 0.3, 4.4, 0, 2.6, 47, M.white);
    box(1.1, 5.2, 0.5, -8, 0, 46, M.white);
    box(0.75, 0.75, 0.05, -8, 3.9, 46.27, M.blue);

    // ── field-testing areas: fenced plots of crops, sandy trial beds ──
    const crop = stripes(16, "#ffffff", "#c9d2bd", 0.38);
    const bare = stripes(14, "#efe5d4", "#d8c8ac", 0.3);
    bin.push(crop, bare);
    const greens = ["#4f7d2e", "#5f8b34", "#78a03f", "#3f6b2a", "#8cb04c", "#6b9338"];
    const cropMats = greens.map((g) => mat({ color: g, map: crop, roughness: 1 }));
    const bareMat = mat({ map: bare, roughness: 1 });
    const fences: { p: V3; s: V3 }[] = [];
    const fenceRect = (x: number, z: number, w: number, d: number) => {
      fences.push({ p: [x, 0, z - d / 2], s: [w, 0.8, 0.06] }, { p: [x, 0, z + d / 2], s: [w, 0.8, 0.06] });
      fences.push({ p: [x - w / 2, 0, z], s: [0.06, 0.8, d] }, { p: [x + w / 2, 0, z], s: [0.06, 0.8, d] });
    };
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 3; j++) {
        const x = -56 + i * 11.4;
        const z = -12 - j * 11;
        const green = (i + j) % 4 !== 3;
        const plot = new THREE.Mesh(geo(new THREE.BoxGeometry(9.6, green ? 0.32 : 0.06, 9.2)), green ? cropMats[(i * 3 + j) % cropMats.length] : bareMat);
        plot.position.set(x, green ? 0.16 : 0.04, z);
        if ((i + j) % 2) plot.rotation.y = Math.PI / 2;
        keep(plot, false);
        if (green) fenceRect(x, z, 10.4, 10);
      }
    inst(geo(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0)), M.fence, fences);
    // shade cages (rows of white mesh cages)
    const cages: { p: V3 }[] = [];
    for (let i = 0; i < 14; i++) for (let j = 0; j < 9; j++) cages.push({ p: [-3 + i * 1.55, 0, -14 - j * 2.2] });
    inst(new THREE.BoxGeometry(1.05, 0.9, 1.6).translate(0, 0.45, 0), M.offwhite, cages);
    // a few sensor masts + a drone over the plots
    const masts = Array.from({ length: 8 }, (_, i) => ({ p: [-58 + i * 6.6, 0, -2.5] as V3 }));
    inst(new THREE.CylinderGeometry(0.06, 0.06, 2.6, 5).translate(0, 1.3, 0), M.offwhite, masts);
    const drone = new THREE.Group();
    drone.add(new THREE.Mesh(geo(new THREE.BoxGeometry(0.7, 0.25, 0.7)), M.dark));
    for (let k = 0; k < 4; k++) {
      const r = new THREE.Mesh(geo(new THREE.CylinderGeometry(0.42, 0.42, 0.03, 18)), M.offwhite);
      r.position.set(k % 2 ? 0.7 : -0.7, 0.14, k < 2 ? 0.7 : -0.7);
      drone.add(r);
    }
    keep(drone);

    // ── multi-span greenhouses (pale green / white film roofs) ──
    const span = new THREE.Shape();
    span.moveTo(-1.6, 0);
    span.absellipse(0, 0, 1.6, 1.15, Math.PI, 0, true);
    span.lineTo(-1.6, 0);
    const greenhouse = (x0: number, z0: number, spans: number, len: number, tints: string[]) => {
      const g = new THREE.ExtrudeGeometry(span, { depth: len, bevelEnabled: false, curveSegments: 18 }).translate(0, 2.4, -len / 2);
      inst(
        g,
        M.roof,
        Array.from({ length: spans }, (_, i) => ({ p: [x0 + i * 3.2, 0, z0] as V3, c: tints[i % tints.length] })),
      );
      box(spans * 3.2, 2.4, len, x0 + (spans - 1) * 1.6, 0, z0, M.ghWall);
    };
    const pale = ["#e3edc5", "#dfeabd", "#e6efcc", "#dbe7b8"];
    greenhouse(-58, -64, 14, 20, pale);
    greenhouse(-58, -88, 14, 16, ["#e8eae8", "#e2e5e3", "#e3edc5", "#e8eae8"]);
    greenhouse(28, -64, 10, 18, pale);
    // solar array
    const solar = [] as { p: V3; s: V3 }[];
    for (let i = 0; i < 7; i++) for (let j = 0; j < 3; j++) solar.push({ p: [28 + i * 3.6, 1, -78 - j * 3.2], s: [3.2, 0.1, 2] });
    const sm = inst(new THREE.BoxGeometry(1, 1, 1), M.solar, solar);
    sm.rotation.x = 0;

    // ── dome, water tanks, sheds ──
    const domeGeo = geo(new THREE.IcosahedronGeometry(5.6, 2));
    const dome = keep(new THREE.Mesh(domeGeo, M.dome));
    dome.position.set(36, -0.6, -24);
    const edges = new THREE.LineSegments(geo(new THREE.EdgesGeometry(domeGeo, 1)), new THREE.LineBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.55 }));
    edges.position.copy(dome.position);
    scene.add(edges);
    flat(16, 16, 36, -24, M.concrete, 0.03);
    [-17, -31].forEach((z) => {
      keep(new THREE.Mesh(geo(new THREE.CylinderGeometry(4.2, 4.2, 2.8, 48)), M.white)).position.set(50, 1.4, z);
      const cap = keep(new THREE.Mesh(geo(new THREE.SphereGeometry(4.25, 48, 12, 0, Math.PI * 2, 0, Math.PI / 2)), M.white));
      cap.position.set(50, 2.8, z);
      cap.scale.y = 0.26;
    });
    box(16, 3, 5.5, 36, 0, -38, M.white); // controlled-environment hall
    for (let i = 0; i < 5; i++) box(2.6, 0.5, 4.6, 30 + i * 3, 3, -38, M.offwhite);
    box(9, 2.6, 6, 30, 0, -8, M.white);
    box(4, 2, 3, 44, 0, -6, M.white);

    // ── Al Foah Farm: date palm plantations ──
    const groves: { p: V3; s: V3; r: number }[] = [];
    const grove = (x0: number, z0: number, nx: number, nz: number, step = 3.2) => {
      for (let i = 0; i < nx; i++)
        for (let j = 0; j < nz; j++) {
          if (rnd() < 0.06) continue;
          const s = 0.8 + rnd() * 0.45;
          groves.push({ p: [x0 + i * step + (rnd() - 0.5) * 0.5, 1.2 * s, z0 + j * step + (rnd() - 0.5) * 0.5], s: [s, s * 0.75, s], r: rnd() * 6 });
        }
    };
    grove(-140, 72, small ? 44 : 88, small ? 8 : 16, small ? 6.4 : 3.2);
    grove(110, -110, small ? 12 : 24, small ? 30 : 56, small ? 6.4 : 3.2);
    grove(-120, -150, small ? 30 : 60, small ? 4 : 8, small ? 6.4 : 3.2);
    inst(new THREE.IcosahedronGeometry(1.3, 0), M.datePalm, groves, !small);

    // ── post: soft contact shading (desktop) ──
    let composer: EffectComposer | null = null;
    if (!small) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const ao = new GTAOPass(scene, camera, 1, 1);
      ao.updateGtaoMaterial({ radius: 2.6, distanceExponent: 1.6, thickness: 1.6, scale: 1.1, samples: 12 });
      ao.blendIntensity = 0.75;
      composer.addPass(ao);
      composer.addPass(new OutputPass());
    }

    // ── camera path ──
    const camCurve = new THREE.CatmullRomCurve3(stops.map((s) => new THREE.Vector3(...s.cam)), false, "centripetal");
    const lookCurve = new THREE.CatmullRomCurve3(stops.map((s) => new THREE.Vector3(...s.look)), false, "centripetal");
    const goal = { pos: camCurve.getPoint(0), look: lookCurve.getPoint(0) };
    const camPos = goal.pos.clone();
    const camLook = goal.look.clone();
    let raw = 0;

    let W = 0;
    let H = 0;
    const resize = () => {
      W = host.clientWidth;
      H = host.clientHeight;
      renderer.setSize(W, H, false);
      composer?.setSize(W, H);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = W / H;
      camera.fov = W / H < 1 ? 46 : 30;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let cur = 0;
    const st = ScrollTrigger.create({
      trigger: section.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        raw = Math.min(N - 0.0001, self.progress * N);
        const i = Math.floor(raw);
        const f = raw - i;
        // hold for 60% of each stop, then ease to the next
        const c = i < N - 1 && f > 0.6 ? i + ease((f - 0.6) / 0.4) : i;
        camCurve.getPoint(c / (N - 1), goal.pos);
        lookCurve.getPoint(c / (N - 1), goal.look);
        if (camera.aspect < 1) goal.pos.sub(goal.look).multiplyScalar(1.35).add(goal.look);
        if (i !== cur) {
          cur = i;
          setActive(i);
        }
      },
    });

    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: "200px" });
    io.observe(host);

    const v = new THREE.Vector3();
    const side: number[] = stops.map(() => 1);
    const cardOp = stops.map(() => 0);
    const tick = (time: number, dt: number) => {
      if (!visible) return;
      const k = reduce ? 1 : 1 - Math.pow(0.004, Math.min(dt, 50) / 1000);
      camPos.lerp(goal.pos, k);
      camLook.lerp(goal.look, k);
      camera.position.copy(camPos);
      camera.lookAt(camLook);
      if (!reduce) {
        drone.position.set(-34 + Math.sin(time * 0.35) * 12, 7 + Math.sin(time * 1.4) * 0.25, -24 + Math.cos(time * 0.35) * 8);
        drone.rotation.y = -time * 0.35;
      }
      if (composer) composer.render();
      else renderer.render(scene, camera);

      // cards + dots follow their points on screen
      const i = Math.floor(raw);
      const f = raw - i;
      let lx = 0;
      let ly = 0;
      let lx2 = 0;
      let ly2 = 0;
      let lo = 0;
      stops.forEach((s, j) => {
        let target = 0;
        if (j === i) target = Math.min(j === 0 ? 1 : clamp01(f / 0.08), j === N - 1 ? 1 : 1 - clamp01((f - 0.52) / 0.08));
        cardOp[j] += (target - cardOp[j]) * (reduce ? 1 : 1 - Math.pow(0.0005, Math.min(dt, 100) / 1000));
        v.set(...s.at).project(camera);
        const x = ((v.x + 1) / 2) * W;
        const y = ((1 - v.y) / 2) * H;
        const off = v.z > 1 || x < -40 || x > W + 40 || y < -40 || y > H + 40;
        const dot = dots.current[j];
        if (dot) {
          dot.style.transform = `translate(${x}px, ${y}px)`;
          dot.style.opacity = off ? "0" : String(0.55 + cardOp[j] * 0.45);
          dot.toggleAttribute("data-on", cardOp[j] > 0.5);
        }
        const card = cards.current[j];
        if (!card) return;
        card.style.opacity = String(cardOp[j]);
        card.style.visibility = cardOp[j] < 0.01 ? "hidden" : "visible";
        if (small) return;
        if (x > W * 0.6) side[j] = -1;
        else if (x < W * 0.4) side[j] = 1;
        const cw = card.offsetWidth;
        const ch = card.offsetHeight;
        const gap = 72;
        const cx = side[j] > 0 ? Math.min(x + gap, W - cw - 32) : Math.max(x - gap - cw, 32);
        const cy = Math.min(Math.max(y - ch * 0.42, 110), H - ch - 40);
        card.style.transform = `translate(${cx}px, ${cy + (1 - cardOp[j]) * 16}px)`;
        if (cardOp[j] > lo) {
          lo = cardOp[j];
          lx = x;
          ly = y;
          lx2 = side[j] > 0 ? cx : cx + cw;
          ly2 = Math.min(Math.max(y, cy + 24), cy + ch - 24);
        }
      });
      const L = lead.current;
      if (L) {
        L.setAttribute("x1", String(lx));
        L.setAttribute("y1", String(ly));
        L.setAttribute("x2", String(lx2));
        L.setAttribute("y2", String(ly2));
        L.style.opacity = small ? "0" : String(lo);
      }
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
      io.disconnect();
      ro.disconnect();
      bin.forEach((d) => d.dispose());
      canopyGeo.dispose();
      crown.dispose();
      composer?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section ref={section} className={a.site} aria-labelledby="site-h" style={{ height: `${N * 130 + 40}vh` }}>
      <div className={a.siteStage}>
        <div ref={stage} className={a.siteCanvas} aria-hidden />
        {failed ? (
          <div className={a.siteFallback}>
            <Image src={P.aerialWide} alt="" fill sizes="100vw" />
          </div>
        ) : null}
        <svg className={a.siteLead} aria-hidden>
          <line ref={lead} />
        </svg>
        <div className={a.siteDots} aria-hidden>
          {stops.map((s, i) => (
            <span key={s.name} ref={(el) => void (dots.current[i] = el)} className={a.siteDot}>
              <i>{i + 1}</i>
            </span>
          ))}
        </div>
        {stops.map((s, i) => (
          <article key={s.name} ref={(el) => void (cards.current[i] = el)} className={a.siteCard} aria-hidden={i !== active}>
            <div className={a.siteCardImg}>
              <Image src={s.src} alt="" fill sizes="320px" />
            </div>
            <div className={a.siteCardBody}>
              <p className={a.siteCardN}>
                {String(i + 1).padStart(2, "0")} <span>/ {String(N).padStart(2, "0")}</span>
              </p>
              <h3 className={a.siteCardName}>{s.name}</h3>
              <p className={a.siteCardText}>{s.text}</p>
            </div>
          </article>
        ))}
        <div className={a.siteHead}>
          <Label n="01">The Site</Label>
          <h2 id="site-h" className={a.srOnly}>
            The site
          </h2>
        </div>
        <ol className={a.siteSteps} aria-hidden>
          {stops.map((s, i) => (
            <li key={s.name} data-on={i === active ? "" : undefined} data-past={i < active ? "" : undefined}>
              <i />
              <span>{s.name}</span>
            </li>
          ))}
        </ol>
        <p className={a.siteNote}>Illustrative model · not to scale</p>
      </div>
    </section>
  );
}
