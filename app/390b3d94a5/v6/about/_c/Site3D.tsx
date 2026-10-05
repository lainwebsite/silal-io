"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
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
 * Look: architectural-visualisation finish, not low poly — rounded edges, smooth crowns, folded palm
 * fronds, translucent ribbed greenhouse film, perforated canopies that throw dappled shade; lit by a
 * low warm sun (soft PCF shadows) + image-based fill, with MSAA and ambient occlusion (desktop).
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

// ── generated textures + geometry helpers ─────────────────────────────────────────────────────
// canvas textures (generated, no assets)
function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void, repeat?: [number, number], srgb = true) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d")!);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (repeat) t.repeat.set(...repeat);
  t.anisotropy = 8;
  return t;
}
const seeded = (s: number) => () => ((s = (s * 16807) % 2147483647) / 2147483647);

// crop rows: light/dark bands, used as colour map and as bump
const rows = (n: number, w = 0.45) =>
  canvasTex(256, 256, (g) => {
    g.fillStyle = "#fff";
    g.fillRect(0, 0, 256, 256);
    const r = seeded(11);
    const s = 256 / n;
    for (let i = 0; i < n; i++) {
      g.fillStyle = `rgb(${150 + r() * 30},${165 + r() * 25},${140 + r() * 20})`;
      g.fillRect(i * s + s * (1 - w) * 0.5, 0, s * w, 256);
    }
    for (let i = 0; i < 1400; i++) {
      g.fillStyle = `rgba(255,255,255,${r() * 0.25})`;
      g.fillRect(r() * 256, r() * 256, 2, 2);
    }
  });

// sand: fine grain + wind ripples (colour and bump)
const sandGrain = () =>
  canvasTex(
    512,
    512,
    (g) => {
      g.fillStyle = "#fff";
      g.fillRect(0, 0, 512, 512);
      const r = seeded(3);
      for (let i = 0; i < 12000; i++) {
        const v = 232 + Math.floor(r() * 20);
        g.fillStyle = `rgb(${v},${v - 5},${v - 12})`;
        g.fillRect(r() * 512, r() * 512, 1 + r() * 2, 1 + r() * 2);
      }
      g.strokeStyle = "rgba(190,170,140,0.16)";
      g.lineWidth = 2;
      for (let y = 0; y < 512; y += 11) {
        g.beginPath();
        for (let x = 0; x <= 512; x += 8) g.lineTo(x, y + Math.sin(x * 0.025 + y * 0.7) * 4);
        g.stroke();
      }
    },
    [60, 60],
  );

// perforation for the canopy "trees": holes get larger towards the rim (alpha: black = hole)
const perforation = () =>
  canvasTex(
    256,
    256,
    (g) => {
      g.fillStyle = "#fff";
      g.fillRect(0, 0, 256, 256);
      g.fillStyle = "#000";
      const r = seeded(5);
      for (let i = 0; i < 700; i++) {
        const y = r() * 256;
        const rad = 1 + (y / 256) * 5.5 * r();
        g.beginPath();
        g.arc(r() * 256, y, rad, 0, Math.PI * 2);
        g.fill();
      }
    },
    [6, 1],
    false,
  );

// greenhouse film: arched ribs along the length and a faint gutter line
const film = () =>
  canvasTex(64, 256, (g) => {
    g.fillStyle = "#fff";
    g.fillRect(0, 0, 64, 256);
    g.fillStyle = "rgba(170,178,170,0.55)";
    for (let y = 0; y < 256; y += 32) g.fillRect(0, y, 64, 2);
    g.fillStyle = "rgba(200,206,198,0.5)";
    g.fillRect(31, 0, 2, 256);
  });

// glazing: mullions on glass
const glazing = (bg: string, line: string, n: number) =>
  canvasTex(256, 64, (g) => {
    g.fillStyle = bg;
    g.fillRect(0, 0, 256, 64);
    g.fillStyle = line;
    for (let i = 0; i <= n; i++) g.fillRect((i * 256) / n - 1, 0, 3, 64);
    g.fillRect(0, 0, 256, 3);
    g.fillRect(0, 61, 256, 3);
  });

// road: asphalt with dashed centre line and edge lines
const roadTex = () =>
  canvasTex(512, 64, (g) => {
    g.fillStyle = "#a5a29c";
    g.fillRect(0, 0, 512, 64);
    const r = seeded(9);
    for (let i = 0; i < 1500; i++) {
      g.fillStyle = `rgba(${r() > 0.5 ? "255,255,255" : "60,60,60"},0.07)`;
      g.fillRect(r() * 512, r() * 64, 2, 2);
    }
    g.fillStyle = "rgba(255,255,255,0.85)";
    for (let x = 0; x < 512; x += 64) g.fillRect(x, 31, 34, 2);
    g.fillRect(0, 4, 512, 2);
    g.fillRect(0, 58, 512, 2);
  });

// a soft lumpy sphere for tree crowns (smooth, not faceted)
function crownGeo(rad: number, seg: number) {
  const g = new THREE.SphereGeometry(rad, seg, Math.round(seg * 0.7));
  const p = g.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = 1 + 0.09 * Math.sin(v.x * 3.1 + 1.3) * Math.sin(v.y * 2.7) * Math.sin(v.z * 3.3 + 0.4) + 0.05 * Math.sin(v.x * 7 + v.z * 5);
    v.multiplyScalar(n);
    v.y *= v.y < 0 ? 0.55 : 0.88;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

// one palm frond: tapered, folded along its rib, arching up then drooping
function frondGeo() {
  const segs = 10;
  const len = 2.5;
  const pos: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const w = 0.42 * Math.sin(Math.PI * Math.min(1, t * 1.15)) * (1 - t * 0.35);
    const y = 0.7 * t - 1.35 * t * t;
    for (const s of [-1, 0, 1]) {
      pos.push(t * len, y + (s === 0 ? 0.06 : -0.04 * Math.abs(s)), s * w);
      uv.push(t, (s + 1) / 2);
    }
  }
  for (let i = 0; i < segs; i++)
    for (let k = 0; k < 2; k++) {
      const a = i * 3 + k;
      idx.push(a, a + 3, a + 1, a + 1, a + 3, a + 4);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
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
    // adaptive resolution: start sharp, step down if frames run slow (see tick)
    const maxDpr = Math.min(window.devicePixelRatio, small ? 1.5 : 1.5);
    let dpr = maxDpr;
    renderer.setPixelRatio(dpr);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 0.96;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap; // Vogel-disk PCF: soft with shadow.radius
    renderer.shadowMap.autoUpdate = false; // the scene is static: the shadow map is drawn once
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const bin: { dispose: () => void }[] = [];
    const scene = new THREE.Scene();
    const haze = new THREE.Color("#eee8de");
    scene.background = haze;
    scene.fog = new THREE.Fog(haze, 380, 820);
    const camera = new THREE.PerspectiveCamera(30, 1, 1, 900);

    // light: soft image-based fill (studio room) + a low warm sun for long, soft shadows
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, 0.04).texture;
    room.dispose();
    pmrem.dispose();
    bin.push(env);
    scene.environment = env;
    scene.environmentIntensity = 0.12;
    scene.add(new THREE.HemisphereLight("#d6e3f0", "#c8b08a", 0.8));
    const sun = new THREE.DirectionalLight("#ffeacb", 4.1);
    sun.position.set(80, 72, -106); // behind-right of the camera path: shadows fall towards the viewer
    sun.target.position.set(0, 0, -18);
    scene.add(sun.target);
    sun.castShadow = true;
    sun.shadow.mapSize.set(small ? 2048 : 4096, small ? 2048 : 4096);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = sc.bottom = -125;
    sc.right = sc.top = 125;
    sc.near = 10;
    sc.far = 380;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.05;
    sun.shadow.radius = small ? 1.6 : 2.2;
    scene.add(sun);

    const tex = <T extends THREE.Texture>(t: T) => {
      bin.push(t);
      return t;
    };
    const mat = (o: THREE.MeshStandardMaterialParameters) => {
      const m = new THREE.MeshStandardMaterial({ roughness: 0.85, ...o });
      bin.push(m);
      return m;
    };
    const sandTex = tex(sandGrain());
    const roadT = tex(roadTex());
    roadT.repeat.set(36, 1);
    const filmT = tex(film());
    const holes = tex(perforation());
    const facade = tex(glazing("#55626b", "#e9ecec", 14));
    facade.repeat.set(2, 1);
    const ghSide = tex(glazing("#dfe6dd", "#f6f7f5", 10));
    ghSide.repeat.set(4, 1);
    const cropT = tex(rows(18));
    const bareT = tex(rows(14, 0.28));

    const M = {
      sand: mat({ color: "#dcc6a2", map: sandTex, bumpMap: sandTex, bumpScale: 0.6, roughness: 1 }),
      farmSoil: mat({ color: "#ccb48d", map: sandTex, roughness: 1 }),
      asphalt: mat({ color: "#a7a49e", roughness: 0.92 }),
      road: mat({ map: roadT, roughness: 0.9 }),
      concrete: mat({ color: "#e6e0d5", roughness: 0.9 }),
      paving: mat({ color: "#efebe4", roughness: 0.85 }),
      curb: mat({ color: "#f4f2ee", roughness: 0.8 }),
      white: mat({ color: "#fbfbf9", roughness: 0.6 }),
      offwhite: mat({ color: "#efefec", roughness: 0.7 }),
      facade: mat({ map: facade, roughness: 0.15, metalness: 0.4 }),
      blue: mat({ color: "#3ca7d2", roughness: 0.45 }),
      grass: mat({ color: "#6d9a43", roughness: 1 }),
      shrub: mat({ color: "#7d9a55", roughness: 1 }),
      leaf: mat({ color: "#5e8540", roughness: 0.75, side: THREE.DoubleSide }),
      trunk: mat({ color: "#a08a6a", roughness: 1 }),
      crown: mat({ color: "#ffffff", roughness: 0.95 }), // tinted per instance
      fence: mat({ color: "#2e8f6f", roughness: 0.8, transparent: true, opacity: 0.72 }),
      mesh: mat({ color: "#cfd3cf", roughness: 0.8, transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false }),
      roof: mat({ color: "#ffffff", map: filmT, roughness: 0.32, transparent: true, opacity: 0.86, side: THREE.DoubleSide }),
      ghWall: mat({ map: ghSide, roughness: 0.2, transparent: true, opacity: 0.85 }),
      cage: mat({ color: "#f6f6f4", roughness: 0.6, transparent: true, opacity: 0.9 }),
      dome: mat({ color: "#2f7fc4", roughness: 0.12, metalness: 0.35, flatShading: true }),
      solar: mat({ color: "#26344a", roughness: 0.18, metalness: 0.55 }),
      car: mat({ color: "#ffffff", roughness: 0.3, metalness: 0.3 }),
      dark: mat({ color: "#4f5861", roughness: 0.5 }),
      canopy: mat({ color: "#ffffff", roughness: 0.5, side: THREE.DoubleSide, alphaMap: holes, alphaTest: 0.5 }),
    };
    const cropMats = ["#4a7a2b", "#5c8a33", "#73a03c", "#3e6a28", "#86ad47", "#66923a"].map((c) =>
      mat({ color: c, map: cropT, bumpMap: cropT, bumpScale: 3, roughness: 1 }),
    );
    const bareMat = mat({ color: "#e8d9bd", map: bareT, bumpMap: bareT, bumpScale: 2, roughness: 1 });

    const keep = <T extends THREE.Object3D>(o: T, cast = true) => {
      o.traverse((c) => {
        const m = c as THREE.Mesh;
        if (m.isMesh) {
          m.castShadow = cast;
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
    // softened edges everywhere: the bevel catches the sun (no hard low-poly boxes)
    const rbox = (w: number, h: number, d: number, r = 0.12) => new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2.2, h / 2.2, d / 2.2));
    const box = (w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material, r = 0.14) => {
      const o = new THREE.Mesh(geo(rbox(w, h, d, r)), m);
      o.position.set(x, y + h / 2, z);
      return keep(o);
    };
    const flat = (w: number, d: number, x: number, z: number, m: THREE.Material, y = 0.02, ry = 0) => {
      const o = new THREE.Mesh(geo(new THREE.PlaneGeometry(w, d)), m);
      o.rotation.set(-Math.PI / 2, 0, ry);
      o.position.set(x, y, z);
      o.receiveShadow = true;
      scene.add(o);
      return o;
    };
    const o3 = new THREE.Object3D();
    type Item = { p: V3; s?: V3; r?: number; rx?: number; c?: string };
    const inst = (g: THREE.BufferGeometry, m: THREE.Material, items: Item[], cast = true) => {
      const im = new THREE.InstancedMesh(geo(g), m, items.length);
      const col = new THREE.Color();
      items.forEach((it, i) => {
        o3.position.set(...it.p);
        o3.rotation.set(it.rx ?? 0, it.r ?? 0, 0);
        o3.scale.set(...(it.s ?? [1, 1, 1]));
        o3.updateMatrix();
        im.setMatrixAt(i, o3.matrix);
        if (it.c) im.setColorAt(i, col.set(it.c));
      });
      im.castShadow = cast;
      im.receiveShadow = true;
      scene.add(im);
      return im;
    };
    const rnd = seeded(7);

    // ── ground: desert with dunes beyond, irrigated farm soil ──
    const dg = geo(new THREE.PlaneGeometry(1400, 1400, 150, 150));
    const pos = dg.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const r = Math.hypot(x, y * 1.2);
      const fall = THREE.MathUtils.smoothstep(r, 185, 330);
      const dune = Math.sin(x * 0.03 + y * 0.01) * 5 + Math.sin(y * 0.045 - x * 0.012) * 4 + Math.sin(x * 0.11 + y * 0.07) * 0.8 + 5;
      pos.setZ(i, fall * dune + Math.sin(x * 0.2) * Math.sin(y * 0.17) * 0.05);
    }
    dg.computeVertexNormals();
    const ground = new THREE.Mesh(dg, M.sand);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    flat(300, 70, 0, 96, M.farmSoil, 0.01);
    flat(90, 210, 150, -20, M.farmSoil, 0.01);
    flat(260, 50, -10, -130, M.farmSoil, 0.01);

    // ── roads, curbs ──
    flat(420, 7, 0, 58, M.road, 0.04);
    const entrance = flat(26, 6, 0, 45, M.road, 0.05, Math.PI / 2);
    entrance.material = M.asphalt;
    flat(80, 4.2, 0, 32, M.asphalt, 0.05);
    const ring = new THREE.Mesh(geo(new THREE.RingGeometry(3.9, 7.6, 64)), M.asphalt);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.06, 32);
    ring.receiveShadow = true;
    scene.add(ring);
    keep(new THREE.Mesh(geo(new THREE.CylinderGeometry(3.9, 3.95, 0.3, 64)), M.curb)).position.set(0, 0.15, 32);
    keep(new THREE.Mesh(geo(new THREE.CylinderGeometry(3.6, 3.6, 0.34, 64)), M.grass), false).position.set(0, 0.17, 32);
    const curbs: Item[] = [
      { p: [-23, 0, 29.7], s: [36, 0.22, 0.35] },
      { p: [23, 0, 29.7], s: [36, 0.22, 0.35] },
      { p: [-3.2, 0, 45], s: [0.35, 0.22, 22] },
      { p: [3.2, 0, 45], s: [0.35, 0.22, 22] },
    ];
    inst(rbox(1, 1, 1, 0.08).translate(0, 0.5, 0), M.curb, curbs, false);
    flat(130, 3.4, -2, -4, M.concrete, 0.04);
    flat(3.4, 80, -8, -42, M.concrete, 0.04);
    flat(3.4, 70, 22, -40, M.concrete, 0.04);
    flat(110, 3.4, -4, -48, M.concrete, 0.04);

    // perimeter: posts + see-through mesh
    const posts: Item[] = [];
    const run = (x0: number, z0: number, x1: number, z1: number) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const n = Math.round(len / 4);
      for (let i = 0; i <= n; i++) posts.push({ p: [x0 + ((x1 - x0) * i) / n, 0, z0 + ((z1 - z0) * i) / n] });
      const m = new THREE.Mesh(geo(new THREE.PlaneGeometry(len, 1.8)), M.mesh);
      m.position.set((x0 + x1) / 2, 0.9, (z0 + z1) / 2);
      m.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
      scene.add(m);
    };
    run(-64, 27, -10, 27);
    run(10, 27, 64, 27);
    run(64, 27, 64, -84);
    run(64, -84, -64, -84);
    run(-64, -84, -64, 27);
    inst(new THREE.CylinderGeometry(0.06, 0.06, 1.9, 6).translate(0, 0.95, 0), M.offwhite, posts);

    // ── main building (labs + collaboration spaces) ──
    box(40, 4.6, 12, 0, 0, 14, M.white, 0.3);
    box(16, 2.1, 10, 0, 4.6, 13, M.white, 0.25);
    box(41, 0.4, 13, 0, 4.4, 14.1, M.white, 0.18); // fascia
    for (let k = 0; k < 3; k++) box(0.7, 0.5, 6, -1.4 + k * 1.4, 6.7, 13, M.offwhite, 0.2); // skylights
    for (let i = 0; i < 5; i++) box(2.6, 1.1, 2.3, -17 + i * 8.5, 4.8, 10.4, M.offwhite, 0.2); // roof plant
    const glass = new THREE.Mesh(geo(new THREE.PlaneGeometry(34, 3.2)), M.facade);
    glass.position.set(0, 1.9, 20.04);
    scene.add(glass);
    [-18.4, 18.4].forEach((x) => box(2.4, 4.4, 0.3, x, 0, 20.05, M.blue, 0.06)); // blue façade panels
    for (let i = 0; i < 8; i++) box(0.5, 4.4, 0.6, -17.5 + i * 5, 0, 20.2, M.white, 0.1); // fins
    flat(50, 9, 0, 24.6, M.paving, 0.05); // plaza
    const beds: Item[] = [];
    for (let i = 0; i < 7; i++) beds.push({ p: [-18 + i * 6, 0, 26.5 + (i % 2) * 1.2], s: [3.2, 0.5, 1.6] });
    inst(new THREE.SphereGeometry(0.5, 16, 10).scale(1, 0.6, 1), M.shrub, beds);

    // the perforated canopy "trees": a flared dish on a stem that branches into the rim.
    // The holes are real (alpha-tested), so the sun throws dappled shade through them.
    const prof: THREE.Vector2[] = [];
    for (let i = 0; i <= 14; i++) {
      const t = i / 14;
      prof.push(new THREE.Vector2(0.12 + t * 2.75, Math.pow(t, 1.7) * 0.85));
    }
    const dish = new THREE.LatheGeometry(prof, 64).translate(0, 4.45, 0);
    const parts: THREE.BufferGeometry[] = [dish, new THREE.CylinderGeometry(0.1, 0.14, 3.6, 12).translate(0, 1.8, 0)];
    for (let k = 0; k < 8; k++) {
      const t = (k / 8) * Math.PI * 2;
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 3.3, 0),
        new THREE.Vector3(Math.cos(t) * 0.3, 4.1, Math.sin(t) * 0.3),
        new THREE.Vector3(Math.cos(t) * 1.5, 4.6, Math.sin(t) * 1.5),
        new THREE.Vector3(Math.cos(t) * 2.6, 5.25, Math.sin(t) * 2.6),
      );
      parts.push(new THREE.TubeGeometry(curve, 20, 0.05, 6));
    }
    const canopyGeo = mergeGeometries(parts.map((g) => g.toNonIndexed()));
    parts.forEach((g) => g.dispose());
    const canopies = inst(
      canopyGeo,
      M.canopy,
      [-16, -9.6, -3.2, 3.2, 9.6, 16].map((x, i) => ({ p: [x, 0, 24.2 + (i % 2) * 1.6] as V3, r: i * 0.7 })),
    );
    const holeDepth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, alphaMap: holes, alphaTest: 0.5, side: THREE.DoubleSide });
    bin.push(holeDepth);
    canopies.customDepthMaterial = holeDepth;

    // palms: curved trunk + twelve folded fronds
    const fr = frondGeo();
    const fronds: THREE.BufferGeometry[] = [];
    for (let k = 0; k < 13; k++) {
      const g = fr.clone();
      g.rotateZ(0.15 - (k % 3) * 0.12);
      g.rotateY((k / 13) * Math.PI * 2 + (k % 2) * 0.2);
      g.translate(0, 4.05, 0);
      fronds.push(g);
    }
    fr.dispose();
    const crown = geo(mergeGeometries(fronds));
    fronds.forEach((g) => g.dispose());
    const trunkG = new THREE.CylinderGeometry(0.11, 0.19, 4.1, 10, 8).translate(0, 2.05, 0);
    const tp = trunkG.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < tp.count; i++) tp.setX(i, tp.getX(i) + Math.pow(tp.getY(i) / 4.1, 2) * 0.25);
    trunkG.computeVertexNormals();
    const palms: Item[] = [];
    const palm = (x: number, z: number) => {
      const s = 0.85 + rnd() * 0.35;
      palms.push({ p: [x, 0, z], r: rnd() * 6.3, s: [s, s, s] });
    };
    for (let i = 0; i < 12; i++) palm(-34 + i * 6.2, 29.2);
    for (let i = 0; i < 5; i++) palm(-24 + i * 2.6, 22.2), palm(13.6 + i * 2.6, 22.2);
    for (let i = 0; i < 6; i++) palm(-5, 37.5 + i * 3), palm(5, 37.5 + i * 3);
    for (let i = 0; i < 8; i++) palm(-60 + i * 3.4, -2.4);
    inst(trunkG, M.trunk, palms);
    inst(crown.clone(), M.leaf, palms);

    // car parks with shade sails, cars, gatehouse, the IO totem
    const shades: Item[] = [];
    const cars: Item[] = [];
    const carCols = ["#ffffff", "#f3f3f3", "#c9cdd1", "#8e959c", "#30363d", "#ffffff", "#ddd6ca"];
    [-1, 1].forEach((side) => {
      flat(32, 10, side * 25, 38.5, M.asphalt, 0.045);
      for (let i = 0; i < 6; i++) {
        const x = side * (12.5 + i * 4.9);
        shades.push({ p: [x, 2.4, 39.2], s: [4.6, 0.12, 5], rx: -0.08 });
        for (const dx of [-1.05, 1.05])
          if (rnd() > 0.3) cars.push({ p: [x + dx, 0, 39.4 + (rnd() - 0.5) * 0.4], c: carCols[Math.floor(rnd() * carCols.length)] });
      }
    });
    inst(rbox(1, 1, 1, 0.3), M.white, shades);
    inst(new THREE.CylinderGeometry(0.07, 0.07, 2.4, 8).translate(0, 1.2, 0), M.offwhite, shades.map((s) => ({ p: [s.p[0], 0, s.p[2] - 2.3] as V3 })));
    inst(rbox(1.0, 0.7, 2.1, 0.28).translate(0, 0.4, 0), M.car, cars);
    inst(rbox(0.8, 0.4, 1.1, 0.16).translate(0, 0.9, -0.1), M.dark, cars.map((c) => ({ p: c.p })));
    box(3.2, 2.6, 3.4, 0, 0, 47.5, M.white, 0.2);
    box(4.6, 0.3, 4.8, 0, 2.6, 47.5, M.white, 0.12);
    box(1.1, 5.4, 0.55, -8, 0, 46, M.white, 0.12);
    box(0.75, 0.75, 0.06, -8, 4.1, 46.28, M.blue, 0.02);

    // ── field-testing areas: fenced plots of crops, sandy trial beds ──
    const fences: Item[] = [];
    const fenceRect = (x: number, z: number, w: number, d: number) => {
      fences.push({ p: [x, 0, z - d / 2], s: [w, 0.9, 0.06] }, { p: [x, 0, z + d / 2], s: [w, 0.9, 0.06] });
      fences.push({ p: [x - w / 2, 0, z], s: [0.06, 0.9, d] }, { p: [x + w / 2, 0, z], s: [0.06, 0.9, d] });
    };
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 3; j++) {
        const x = -56 + i * 11.4;
        const z = -12 - j * 11;
        const green = (i + j) % 4 !== 3;
        const plot = new THREE.Mesh(geo(rbox(9.6, green ? 0.38 : 0.08, 9.2, 0.03)), green ? cropMats[(i * 3 + j) % cropMats.length] : bareMat);
        plot.position.set(x, green ? 0.19 : 0.04, z);
        if ((i + j) % 2) plot.rotation.y = Math.PI / 2;
        keep(plot, green);
        if (green) fenceRect(x, z, 10.4, 10);
      }
    inst(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), M.fence, fences);
    // shade cages: translucent white mesh boxes, a plant inside each
    const cages: Item[] = [];
    for (let i = 0; i < 14; i++) for (let j = 0; j < 9; j++) cages.push({ p: [-3 + i * 1.6, 0, -14 - j * 2.25] });
    inst(new THREE.SphereGeometry(0.32, 10, 8).scale(1, 0.8, 1).translate(0, 0.3, 0), M.shrub, cages, false);
    inst(rbox(1.1, 0.95, 1.65, 0.08).translate(0, 0.48, 0), M.cage, cages);
    // sensor masts + a drone over the plots
    inst(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 8).translate(0, 1.3, 0), M.offwhite, Array.from({ length: 8 }, (_, i) => ({ p: [-58 + i * 6.6, 0, -6] as V3 })));
    const drone = new THREE.Group();
    drone.add(new THREE.Mesh(geo(rbox(0.7, 0.25, 0.7, 0.1)), M.dark));
    for (let k = 0; k < 4; k++) {
      const r = new THREE.Mesh(geo(new THREE.CylinderGeometry(0.42, 0.42, 0.02, 24)), M.mesh);
      r.position.set(k % 2 ? 0.7 : -0.7, 0.14, k < 2 ? 0.7 : -0.7);
      drone.add(r);
    }
    keep(drone, false);
    drone.position.set(-30, 7, -22);
    drone.rotation.y = 0.6;

    // ── multi-span greenhouses: translucent film over crops, ribbed arches, glazed walls ──
    const spanGeo = (len: number) => {
      const roof = new THREE.CylinderGeometry(1.6, 1.6, len, 32, 1, true, -Math.PI / 2, Math.PI).rotateX(-Math.PI / 2);
      const uvs = roof.attributes.uv as THREE.BufferAttribute;
      for (let i = 0; i < uvs.count; i++) uvs.setY(i, uvs.getY(i) * (len / 6));
      const capA = new THREE.CircleGeometry(1.6, 32, 0, Math.PI).translate(0, 0, len / 2);
      const capB = new THREE.CircleGeometry(1.6, 32, 0, Math.PI).rotateY(Math.PI).translate(0, 0, -len / 2);
      const g = mergeGeometries([roof, capA, capB]);
      [roof, capA, capB].forEach((x) => x.dispose());
      return g.scale(1, 0.72, 1).translate(0, 2.4, 0);
    };
    const greenhouse = (x0: number, z0: number, spans: number, len: number, tints: string[]) => {
      inst(spanGeo(len), M.roof, Array.from({ length: spans }, (_, i) => ({ p: [x0 + i * 3.2, 0, z0] as V3, c: tints[i % tints.length] })));
      const W = spans * 3.2;
      const cx = x0 + (spans - 1) * 1.6;
      const floor = new THREE.Mesh(geo(new THREE.PlaneGeometry(W - 0.4, len - 0.4)), cropMats[2]);
      floor.rotation.set(-Math.PI / 2, 0, Math.PI / 2);
      floor.position.set(cx, 0.35, z0);
      floor.receiveShadow = true;
      scene.add(floor);
      const walls = new THREE.Mesh(geo(new THREE.BoxGeometry(W, 2.4, len).translate(0, 1.2, 0)), M.ghWall);
      walls.position.set(cx, 0, z0);
      keep(walls);
      box(1.6, 2.6, 2.4, x0 - 2.4, 0, z0 + len / 2 - 2, M.offwhite, 0.12); // plant room
    };
    const pale = ["#eef5d8", "#e7f0cc", "#f1f6e2", "#e3edc4"];
    greenhouse(-58, -64, 14, 20, pale);
    greenhouse(-58, -88, 14, 16, ["#f3f4f3", "#eceeed", "#eef5d8", "#f3f4f3"]);
    greenhouse(28, -64, 10, 18, pale);
    // solar array, tilted to the sun
    const solar: Item[] = [];
    for (let i = 0; i < 7; i++) for (let j = 0; j < 3; j++) solar.push({ p: [28 + i * 3.6, 1.1, -78 - j * 3.3], s: [3.3, 0.08, 2.1], rx: -0.4 });
    inst(rbox(1, 1, 1, 0.02), M.solar, solar);

    // ── dome, water tanks, sheds ──
    const domeGeo = geo(new THREE.IcosahedronGeometry(5.6, 3));
    const dome = keep(new THREE.Mesh(domeGeo, M.dome));
    dome.position.set(36, -0.6, -24);
    const edges = new THREE.LineSegments(geo(new THREE.EdgesGeometry(domeGeo, 1)), new THREE.LineBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.7 }));
    edges.position.copy(dome.position);
    edges.scale.setScalar(1.002);
    scene.add(edges);
    flat(16, 16, 36, -24, M.concrete, 0.03);
    keep(new THREE.Mesh(geo(new THREE.TorusGeometry(5.5, 0.18, 10, 64).rotateX(Math.PI / 2)), M.curb)).position.set(36, 0.1, -24);
    [-17, -31].forEach((z) => {
      keep(new THREE.Mesh(geo(new THREE.CylinderGeometry(4.2, 4.2, 2.8, 64)), M.white)).position.set(50, 1.4, z);
      const cap = keep(new THREE.Mesh(geo(new THREE.SphereGeometry(4.22, 64, 16, 0, Math.PI * 2, 0, Math.PI / 2)), M.white));
      cap.position.set(50, 2.8, z);
      cap.scale.y = 0.24;
      keep(new THREE.Mesh(geo(new THREE.TorusGeometry(4.22, 0.08, 8, 64).rotateX(Math.PI / 2)), M.offwhite)).position.set(50, 2.8, z);
    });
    box(16, 3, 5.5, 36, 0, -38, M.white, 0.2); // controlled-environment hall
    for (let i = 0; i < 5; i++) box(2.6, 0.45, 4.4, 30 + i * 3, 3, -38, M.offwhite, 0.12);
    box(9, 2.6, 6, 30, 0, -8, M.white, 0.2);
    box(4, 2, 3, 44, 0, -6, M.white, 0.16);

    // ── Al Foah Farm: date palm groves (soft round crowns, varied greens) ──
    const greens = ["#4d6b38", "#56763e", "#476432", "#5d7b44", "#3f5a2e"];
    const groves: Item[] = [];
    const grove = (x0: number, z0: number, nx: number, nz: number, step: number) => {
      for (let i = 0; i < nx; i++)
        for (let j = 0; j < nz; j++) {
          if (rnd() < 0.05) continue;
          const s = 0.85 + rnd() * 0.4;
          groves.push({ p: [x0 + i * step + (rnd() - 0.5) * 0.6, 1.5 * s, z0 + j * step + (rnd() - 0.5) * 0.6], s: [s, s, s], r: rnd() * 6, c: greens[Math.floor(rnd() * greens.length)] });
        }
    };
    const st8 = small ? 6.4 : 3.6;
    grove(-140, 72, Math.round(280 / st8), Math.round(52 / st8), st8);
    grove(110, -110, Math.round(80 / st8), Math.round(180 / st8), st8);
    grove(-120, -150, Math.round(200 / st8), Math.round(26 / st8), st8);
    // split into 48-unit tiles so tiles off screen are culled; crowns don't need to receive shadows
    const crownG = crownGeo(1.3, small ? 9 : 11);
    const tiles = new Map<string, Item[]>();
    groves.forEach((g) => {
      const key = `${Math.floor(g.p[0] / 48)}:${Math.floor(g.p[2] / 48)}`;
      if (!tiles.has(key)) tiles.set(key, []);
      tiles.get(key)!.push(g);
    });
    tiles.forEach((items) => {
      const im = inst(crownG, M.crown, items, true);
      im.receiveShadow = false;
      im.computeBoundingSphere();
    });

    // ── post: MSAA composer + soft contact shading (desktop) ──
    let composer: EffectComposer | null = null;
    if (!small) {
      const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
      composer = new EffectComposer(renderer, rt);
      composer.addPass(new RenderPass(scene, camera));
      const ao = new GTAOPass(scene, camera, 1, 1);
      ao.updateGtaoMaterial({ radius: 3.2, distanceExponent: 1.8, thickness: 2, scale: 1.15, samples: 8 });
      ao.updatePdMaterial({ samples: 8, radius: 6 });
      ao.blendIntensity = 0.8;
      // occlusion at half resolution: it is soft anyway, and costs a quarter
      const aoSize = ao.setSize.bind(ao);
      ao.setSize = (w: number, h: number) => aoSize(Math.ceil(w / 2), Math.ceil(h / 2));
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
      dirty = true;
    };
    let dirty = true;
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
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        dirty = true;
      },
      { rootMargin: "200px" },
    );
    io.observe(host);

    const v = new THREE.Vector3();
    const side: number[] = stops.map(() => 1);
    const cardOp = stops.map(() => 0);
    const lastPos = new THREE.Vector3(1e9, 0, 0);
    const lastLook = new THREE.Vector3();
    let shadowsDone = false;
    let slow = 0;
    const tick = (_time: number, dt: number) => {
      if (!visible) return;
      const k = reduce ? 1 : 1 - Math.pow(0.004, Math.min(dt, 50) / 1000);
      camPos.lerp(goal.pos, k);
      camLook.lerp(goal.look, k);
      camera.position.copy(camPos);
      camera.lookAt(camLook);
      // render on demand: only while the camera is still travelling (the scene itself never moves)
      const moving = camPos.distanceToSquared(lastPos) > 1e-6 || camLook.distanceToSquared(lastLook) > 1e-6;
      if (moving || dirty) {
        lastPos.copy(camPos);
        lastLook.copy(camLook);
        dirty = false;
        if (!shadowsDone) {
          renderer.shadowMap.needsUpdate = true;
          shadowsDone = true;
        }
        if (composer) composer.render();
        else renderer.render(scene, camera);
        // adaptive quality: measure the frame interval while rendering, step resolution down if slow
        if (dt > 0 && dt < 200) {
          slow = slow * 0.9 + (dt > 26 ? 1 : 0) * 0.1;
          if (slow > 0.6 && dpr > 1) {
            dpr = Math.max(1, dpr - 0.25);
            renderer.setPixelRatio(dpr);
            resize();
            slow = 0;
          } else if (slow > 0.6 && composer && dpr <= 1) {
            composer.passes[1].enabled = false; // last resort on weak GPUs: drop the occlusion pass
            slow = 0;
          }
        }
      }

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
