"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import c from "./about-c.module.css";
import { tour } from "./tour";

gsap.registerPlugin(ScrollTrigger);

/* Illustrative "architect's maquette" of the 34-hectare parcel (≈700 m × 485 m; 1 unit = 10 m).
   Layout is not surveyed — replace with the client masterplan when available. */

type V3 = [number, number, number];
const VIEW: Record<string, { cam: V3; look: V3; label?: V3 }> = {
  overview: { cam: [74, 62, 92], look: [6, 0, 2] },
  labs: { cam: [-3, 15, 7], look: [-20, 1.5, -12.5], label: [-20, 5.2, -14] },
  cea: { cam: [-4, 11, 17], look: [-20, 1, 0], label: [-20, 4, 0] },
  collab: { cam: [-5, 12, 31], look: [-20.5, 0.5, 13], label: [-23, 4, 13] },
  fields: { cam: [30, 19, 35], look: [11, 0, 10], label: [11, 2, 10] },
  greenhouses: { cam: [27, 15, 7], look: [7, 1.5, -12], label: [7, 4, -12] },
  masterplan: { cam: [10, 170, 46], look: [8, 0, 2] },
};

function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void, repeat = false) {
  const cv = document.createElement("canvas");
  cv.width = w;
  cv.height = h;
  draw(cv.getContext("2d")!);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export default function SiteModel() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const jumpRef = useRef<(i: number) => void>(() => {});
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);
  const n = tour.length;

  useEffect(() => {
    const section = sectionRef.current!;
    const wrap = wrapRef.current!;
    const stage = stageRef.current!;
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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    stage.appendChild(renderer.domElement);

    const labels = new CSS2DRenderer();
    labels.domElement.className = c.mapLabels;
    stage.appendChild(labels.domElement);

    const scene = new THREE.Scene();
    const BG_DAWN = new THREE.Color("#efe7dc");
    const BG_DAY = new THREE.Color("#eef1f1");
    scene.background = BG_DAWN.clone();
    scene.fog = new THREE.Fog(BG_DAWN.clone(), 170, 360);
    const camera = new THREE.PerspectiveCamera(30, 1, 0.5, 900);

    /* ---------------- light: low golden sun that climbs with scroll ---------------- */
    const hemi = new THREE.HemisphereLight("#ffffff", "#d8cfc0", 1.15);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight("#ffd7a6", 2.6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -95;
    sc.right = 95;
    sc.top = 80;
    sc.bottom = -80;
    sc.far = 400;
    sun.shadow.bias = -0.0005;
    sun.shadow.normalBias = 0.02;
    sun.shadow.radius = 5;
    scene.add(sun, sun.target);
    const SUN_DAWN = new THREE.Color("#ffcf98");
    const SUN_DAY = new THREE.Color("#fff6ea");
    const setSun = (p: number) => {
      const el = THREE.MathUtils.degToRad(13 + 42 * p);
      const az = THREE.MathUtils.degToRad(-128 + 30 * p);
      sun.position.set(Math.cos(el) * Math.cos(az) * 140, Math.sin(el) * 140, Math.cos(el) * Math.sin(az) * 140);
      sun.color.copy(SUN_DAWN).lerp(SUN_DAY, p);
      sun.intensity = 2.5 + 0.9 * p;
      (scene.background as THREE.Color).copy(BG_DAWN).lerp(BG_DAY, p);
      scene.fog!.color.copy(scene.background as THREE.Color);
    };
    setSun(0);

    /* ---------------- materials ---------------- */
    const std = (color: string, o: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
      new THREE.MeshStandardMaterial({ color, roughness: 0.88, metalness: 0, ...o });
    const WHITE = "#f5f4f0";
    const IO = new THREE.Color("#3ca7d2");
    const zoneMats: Record<string, THREE.MeshStandardMaterial[]> = { labs: [], cea: [], collab: [], greenhouses: [] };
    const zoneMat = (key: string, o: Partial<THREE.MeshStandardMaterialParameters> = {}) => {
      const m = std(WHITE, o);
      m.userData.base = new THREE.Color(o.color ?? WHITE);
      m.userData.hi = o.transparent ? new THREE.Color("#9fd2e8") : IO;
      zoneMats[key].push(m);
      return m;
    };
    const shadowed = <T extends THREE.Object3D>(o: T) => {
      o.traverse((x) => {
        x.castShadow = true;
        x.receiveShadow = true;
      });
      return o;
    };
    const box = (w: number, h: number, d: number, m: THREE.Material | THREE.Material[], x: number, y: number, z: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
      mesh.position.set(x, y + h / 2, z);
      return shadowed(mesh);
    };

    /* ---------------- terrain: desert with contour lines ---------------- */
    const contour = canvasTex(
      1024,
      1024,
      (g) => {
        const img = g.createImageData(1024, 1024);
        for (let y = 0; y < 1024; y++) {
          for (let x = 0; x < 1024; x++) {
            const u = x / 1024;
            const v = y / 1024;
            const f =
              Math.sin(u * 9.1 + Math.sin(v * 5.3) * 1.7) * 0.6 +
              Math.cos(v * 7.7 + Math.cos(u * 4.1) * 1.9) * 0.5 +
              Math.sin((u + v) * 13.3) * 0.18;
            const band = Math.abs(((f * 6) % 1 + 1) % 1 - 0.5);
            const line = band > 0.47 ? 1 : 0;
            const i = (y * 1024 + x) * 4;
            const base = 232 - line * 16;
            img.data[i] = base + 3;
            img.data[i + 1] = base;
            img.data[i + 2] = base - 8;
            img.data[i + 3] = 255;
          }
        }
        g.putImageData(img, 0, 0);
      },
      true,
    );
    contour.repeat.set(3, 3);
    const groundGeo = new THREE.PlaneGeometry(700, 700, 160, 160);
    const pos = groundGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const d = Math.max(Math.abs(x) - 42, Math.abs(y) - 30, 0);
      const k = Math.min(1, d / 30);
      pos.setZ(i, k * (Math.sin(x * 0.05) * Math.cos(y * 0.043) * 1.6 + Math.sin(x * 0.11 + y * 0.07) * 0.6) - 0.05);
    }
    groundGeo.computeVertexNormals();
    const ground = new THREE.Mesh(groundGeo, std("#ffffff", { map: contour }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // the parcel: a slightly raised, smooth plinth like a model base
    const plinth = box(70, 0.25, 48.5, std("#f1efe9"), 0, -0.1, 0);
    plinth.castShadow = false;
    scene.add(plinth);
    const paths = std("#fbfaf7");
    [
      [0, 0, 70, 1.3],
      [-9.5, 0, 1.3, 48.5],
      [-30, 6.5, 12, 1],
    ].forEach(([x, z, w, d]) => {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), paths);
      p.rotation.x = -Math.PI / 2;
      p.position.set(x, 0.17, z);
      p.receiveShadow = true;
      scene.add(p);
    });
    const road = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 260), std("#d6d0c5"));
    road.rotation.x = -Math.PI / 2;
    road.position.set(38.6, 0.05, 0);
    road.receiveShadow = true;
    scene.add(road);

    // 34-ha boundary that draws itself in IO Blue
    const bpts: THREE.Vector3[] = [];
    const corners: [number, number][] = [
      [-35, -24.25],
      [35, -24.25],
      [35, 24.25],
      [-35, 24.25],
      [-35, -24.25],
    ];
    for (let k = 0; k < 4; k++) {
      const [x0, z0] = corners[k];
      const [x1, z1] = corners[k + 1];
      for (let s = 0; s < 100; s++) bpts.push(new THREE.Vector3(x0 + ((x1 - x0) * s) / 100, 0.22, z0 + ((z1 - z0) * s) / 100));
    }
    bpts.push(bpts[0].clone());
    const boundary = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bpts), new THREE.LineBasicMaterial({ color: IO }));
    boundary.geometry.setDrawRange(0, reduce ? bpts.length : 0);
    scene.add(boundary);

    const rise: THREE.Object3D[] = [];
    const group = (...objs: THREE.Object3D[]) => {
      const g = new THREE.Group();
      objs.forEach((o) => g.add(o));
      scene.add(g);
      rise.push(g);
      return g;
    };

    /* ---------------- laboratories ---------------- */
    const windows = (repeat: number) => {
      const t = canvasTex(256, 64, (g) => {
        g.fillStyle = "#ffffff";
        g.fillRect(0, 0, 256, 64);
        g.fillStyle = "#a9c4cf";
        g.fillRect(0, 22, 256, 22);
        g.fillStyle = "#ffffff";
        for (let x = 0; x < 256; x += 21) g.fillRect(x, 22, 3, 22);
      });
      t.wrapS = THREE.RepeatWrapping;
      t.repeat.set(repeat, 1);
      return t;
    };
    const labSide = zoneMat("labs", { map: windows(4) });
    const labTop = zoneMat("labs");
    const labs = group(
      box(16, 3.4, 8, [labSide, labSide, labTop, labTop, labSide, labSide], -20, 0, -14),
      box(6, 2.6, 6, [zoneMat("labs", { map: windows(1.5) }), labSide, labTop, labTop, labSide, labSide], -31, 0, -14),
    );
    // entrance canopies with a perforated top (casts dappled shadows, like the real canopy)
    const dots = canvasTex(256, 256, (g) => {
      g.fillStyle = "#fff";
      g.fillRect(0, 0, 256, 256);
      g.fillStyle = "#000";
      const r = rng(3);
      for (let i = 0; i < 520; i++) {
        const a = r() * Math.PI * 2;
        const d = Math.sqrt(r()) * 120;
        g.beginPath();
        g.arc(128 + Math.cos(a) * d, 128 + Math.sin(a) * d, 2 + r() * 3.5, 0, Math.PI * 2);
        g.fill();
      }
    });
    const capMat = zoneMat("labs", { alphaMap: dots, alphaTest: 0.5, side: THREE.DoubleSide });
    for (let i = 0; i < 4; i++) {
      const x = -26.5 + i * 4.3;
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.22, 3.4, 12), labTop);
      stem.position.set(x, 1.7, -7.4);
      const cap = new THREE.Mesh(new THREE.CircleGeometry(1.9, 40), capMat);
      cap.rotation.x = -Math.PI / 2 + 0.08;
      cap.position.set(x, 3.45, -7.4);
      labs.add(shadowed(stem), shadowed(cap));
    }

    /* ---------------- controlled-environment facilities ---------------- */
    const cea = group();
    const ceaSide = zoneMat("cea", { map: windows(1.2) });
    const ceaTop = zoneMat("cea");
    for (let i = 0; i < 3; i++) {
      cea.add(box(4.2, 2.5, 6.2, [ceaSide, ceaSide, ceaTop, ceaTop, ceaTop, ceaTop], -25 + i * 5, 0, 0));
      // rooftop plant
      cea.add(box(1.2, 0.5, 1.6, ceaTop, -25 + i * 5, 2.5, 1.2));
    }

    /* ---------------- greenhouses with crops inside ---------------- */
    const gh = group();
    const ghMat = zoneMat("greenhouses", { transparent: true, opacity: 0.55, roughness: 0.4, side: THREE.DoubleSide, depthWrite: false });
    const cropRow = new THREE.InstancedMesh(new THREE.BoxGeometry(0.16, 0.26, 14), std("#7aa864"), 9 * 3);
    const d = new THREE.Object3D();
    let k = 0;
    for (let i = 0; i < 9; i++) {
      const geo = new THREE.CylinderGeometry(1.15, 1.15, 15, 28, 1, true, Math.PI / 2, Math.PI);
      geo.rotateX(Math.PI / 2);
      const tunnel = new THREE.Mesh(geo, ghMat);
      tunnel.position.set(-3 + i * 2.5, 0, -13);
      tunnel.receiveShadow = true;
      tunnel.castShadow = true;
      gh.add(tunnel);
      for (let r = -1; r <= 1; r++) {
        d.position.set(-3 + i * 2.5 + r * 0.55, 0.13, -13);
        d.updateMatrix();
        cropRow.setMatrixAt(k++, d.matrix);
      }
    }
    cropRow.castShadow = true;
    gh.add(cropRow);

    /* ---------------- field-testing areas: textured trial plots ---------------- */
    const rows = canvasTex(128, 128, (g) => {
      g.fillStyle = "#ffffff";
      g.fillRect(0, 0, 128, 128);
      g.fillStyle = "#b9b9b9";
      for (let y = 4; y < 128; y += 9) g.fillRect(0, y, 128, 3);
    });
    const greens = ["#86b86c", "#6fa65c", "#a9c98a", "#93c26e", "#5f9852", "#bdd39c", "#d9cfb6"];
    const plots = new THREE.InstancedMesh(new THREE.BoxGeometry(4.6, 0.22, 3.4), std("#ffffff", { map: rows }), 7 * 4);
    const pr = rng(11);
    k = 0;
    for (let r = 0; r < 4; r++) {
      for (let col = 0; col < 7; col++) {
        d.position.set(-5 + col * 5.4, 0.12, 3.5 + r * 4.4);
        d.rotation.y = pr() > 0.5 ? Math.PI / 2 : 0;
        d.scale.set(d.rotation.y ? 3.4 / 4.6 : 1, 1, d.rotation.y ? 4.6 / 3.4 : 1);
        d.updateMatrix();
        plots.setMatrixAt(k, d.matrix);
        plots.setColorAt(k, new THREE.Color(greens[Math.floor(pr() * greens.length)]));
        k++;
      }
    }
    d.rotation.set(0, 0, 0);
    d.scale.set(1, 1, 1);
    plots.receiveShadow = true;
    const fields = group(plots);

    /* ---------------- irrigation: IO Blue lines with flowing water ---------------- */
    const flowTex: THREE.Texture[] = [];
    const pipe = (pts: V3[], r = 0.11) => {
      const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), false, "catmullrom", 0);
      const len = curve.getLength();
      const t = canvasTex(64, 8, (g) => {
        g.fillStyle = "#cfe9f5";
        g.fillRect(0, 0, 64, 8);
        g.fillStyle = "#3ca7d2";
        g.fillRect(0, 0, 26, 8);
      });
      t.wrapS = THREE.RepeatWrapping;
      t.repeat.set(len / 1.6, 1);
      flowTex.push(t);
      const m = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.ceil(len * 3), r, 6, false), new THREE.MeshBasicMaterial({ map: t }));
      fields.add(m);
    };
    pipe([
      [-27, 0.25, -9.6],
      [-12, 0.25, -9.6],
      [-12, 0.25, 1.3],
      [-7.8, 0.25, 1.3],
    ]);
    pipe([
      [-7.8, 0.25, 1.3],
      [-7.8, 0.25, 18.9],
    ]);
    for (let r = 0; r < 5; r++)
      pipe(
        [
          [-7.8, 0.25, 1.3 + r * 4.4],
          [29.8, 0.25, 1.3 + r * 4.4],
        ],
        0.08,
      );

    /* ---------------- collaboration spaces ---------------- */
    const collab = group();
    const plaza = new THREE.Mesh(new THREE.CircleGeometry(6, 64), std("#fbfaf7"));
    plaza.rotation.x = -Math.PI / 2;
    plaza.position.set(-23, 0.19, 13);
    plaza.receiveShadow = true;
    const ringMat = zoneMat("collab");
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.3, 12, 80), ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(-23, 2.5, 13);
    collab.add(plaza, shadowed(ring));
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.5, 8), ringMat);
      leg.position.set(-23 + Math.cos(a) * 4.2, 1.25, 13 + Math.sin(a) * 4.2);
      collab.add(shadowed(leg));
    }
    collab.add(box(6, 1.8, 3.2, [zoneMat("collab", { map: windows(1.6) }), ringMat, ringMat, ringMat, ringMat, ringMat], -13.5, 0, 15));
    // a few trees around the plaza
    const tree = std("#a8bf98");
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.4;
      const t = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 0), tree);
      t.position.set(-23 + Math.cos(a) * 7.4, 1.4, 13 + Math.sin(a) * 7.4);
      t.scale.y = 1.25;
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1, 6), tree);
      s.position.set(t.position.x, 0.5, t.position.z);
      collab.add(shadowed(t), shadowed(s));
    }

    /* ---------------- Al Foah Farm: palm grid with fronds ---------------- */
    const fronds: THREE.BufferGeometry[] = [];
    for (let f = 0; f < 7; f++) {
      const g = new THREE.BoxGeometry(1.5, 0.05, 0.3);
      g.translate(0.75, 0, 0);
      g.rotateZ(-0.38);
      g.rotateY((f / 7) * Math.PI * 2);
      fronds.push(g);
    }
    const crownGeo = mergeGeometries(fronds)!;
    const pc = 18 * 30;
    const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.07, 0.11, 1.8, 6), std("#c9bfae"), pc);
    const crowns = new THREE.InstancedMesh(crownGeo, std("#9db58c"), pc);
    const fr = rng(7);
    k = 0;
    for (let gx = 0; gx < 18; gx++) {
      for (let gz = 0; gz < 30; gz++) {
        const x = 43 + gx * 3.1 + (fr() - 0.5) * 0.5;
        const z = -46 + gz * 3.1 + (fr() - 0.5) * 0.5;
        const s = 0.85 + fr() * 0.4;
        d.position.set(x, 0.9 * s, z);
        d.scale.set(s, s, s);
        d.rotation.set(0, 0, 0);
        d.updateMatrix();
        trunks.setMatrixAt(k, d.matrix);
        d.position.set(x, 1.8 * s, z);
        d.rotation.y = fr() * Math.PI;
        d.updateMatrix();
        crowns.setMatrixAt(k, d.matrix);
        k++;
      }
    }
    [trunks, crowns].forEach((m) => {
      m.castShadow = true;
      m.receiveShadow = true;
      scene.add(m);
    });

    /* ---------------- drone over the trial plots ---------------- */
    const drone = new THREE.Group();
    const dBody = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.18, 0.7), std("#ffffff"));
    drone.add(dBody);
    const rotors: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.08), std("#ffffff"));
      arm.rotation.y = a;
      arm.position.set(Math.cos(a) * 0.45, 0.02, -Math.sin(a) * 0.45);
      const rot = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.02, 20), new THREE.MeshBasicMaterial({ color: IO, transparent: true, opacity: 0.55 }));
      rot.position.set(Math.cos(a) * 0.82, 0.1, -Math.sin(a) * 0.82);
      rotors.push(rot);
      drone.add(arm, rot);
    }
    shadowed(drone);
    scene.add(drone);

    /* ---------------- zone footprints (highlight pads) ---------------- */
    const pads: Record<string, THREE.Mesh> = {};
    const pad = (key: string, x: number, z: number, w: number, dd: number) => {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, dd),
        new THREE.MeshBasicMaterial({ color: IO, transparent: true, opacity: 0, depthWrite: false }),
      );
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, 0.2, z);
      scene.add(m);
      pads[key] = m;
    };
    pad("labs", -23, -12, 22, 12);
    pad("cea", -20, 0, 16, 9);
    pad("collab", -20, 13.5, 20, 15);
    pad("fields", 11.2, 10.1, 40, 20);
    pad("greenhouses", 7, -13, 25, 17);

    /* ---------------- labels (clickable) ---------------- */
    const labelEls: Record<string, HTMLButtonElement> = {};
    tour.forEach((st, i) => {
      const v = VIEW[st.key];
      if (!v?.label) return;
      const el = document.createElement("button");
      el.type = "button";
      el.className = c.mapLabel;
      el.innerHTML = `<span>${String(i + 1).padStart(2, "0")}</span>${st.title}`;
      el.addEventListener("click", () => jumpRef.current(i));
      const obj = new CSS2DObject(el);
      obj.position.set(...v.label);
      scene.add(obj);
      labelEls[st.key] = el;
    });

    /* ---------------- render pipeline ---------------- */
    let composer: EffectComposer | null = null;
    let gtao: GTAOPass | null = null;
    if (!small) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      gtao = new GTAOPass(scene, camera, 1, 1);
      gtao.updateGtaoMaterial({ radius: 1.6, distanceExponent: 1.4, thickness: 1.2, scale: 1.1, samples: 12 });
      gtao.blendIntensity = 0.9;
      composer.addPass(gtao);
      composer.addPass(new OutputPass());
    }

    const resize = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      composer?.setSize(w, h);
      labels.setSize(w, h);
      camera.aspect = w / h;
      camera.fov = w / h < 1 ? 42 : 30;
      // keep the model clear of the info card: shift the projection centre right on wide screens
      if (w >= 900) camera.setViewOffset(w, h, -Math.min(230, w * 0.15), 0, w, h);
      else camera.clearViewOffset();
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(stage);

    /* ---------------- cinematic camera path through all stops ---------------- */
    const camCurve = new THREE.CatmullRomCurve3(tour.map((s) => new THREE.Vector3(...VIEW[s.key].cam)), false, "centripetal");
    const lookCurve = new THREE.CatmullRomCurve3(tour.map((s) => new THREE.Vector3(...VIEW[s.key].look)), false, "centripetal");
    const camPos = camCurve.getPoint(0).multiplyScalar(1.3);
    const camLook = lookCurve.getPoint(0);
    const goal = { pos: camPos.clone(), look: camLook.clone() };
    const mouse = { x: 0, y: 0 };
    let current = -1;

    const highlight = (key: string) => {
      Object.entries(zoneMats).forEach(([z, mats]) =>
        mats.forEach((m) => {
          const target = z === key ? (m.userData.hi as THREE.Color) : (m.userData.base as THREE.Color);
          gsap.to(m.color, { r: target.r, g: target.g, b: target.b, duration: 0.9, ease: "power2.out" });
        }),
      );
      Object.entries(pads).forEach(([z, m]) =>
        gsap.to(m.material as THREE.MeshBasicMaterial, { opacity: z === key ? 0.1 : 0, duration: 0.9 }),
      );
      Object.entries(labelEls).forEach(([z, el]) => el.classList.toggle(c.mapLabelOn, z === key));
    };

    const setProgress = (p: number) => {
      const t = THREE.MathUtils.clamp(p, 0, 1);
      camCurve.getPoint(t, goal.pos);
      lookCurve.getPoint(t, goal.look);
      // portrait screens: step back so each place stays in frame
      if (camera.aspect < 1) goal.pos.sub(goal.look).multiplyScalar(1.75).add(goal.look);
      setSun(t);
      const idx = Math.round(t * (n - 1));
      if (idx !== current) {
        current = idx;
        setActive(idx);
        highlight(tour[idx].key);
      }
    };
    setProgress(0);

    // Curtain sticky: the model is already fixed underneath. The tour runs between the moment the
    // section above has fully lifted off and the moment the section below starts to cover it.
    const sh = () => section.offsetHeight;
    const st = ScrollTrigger.create({
      trigger: wrap,
      start: () => `top+=${sh()} top`,
      end: () => `bottom-=${2 * sh()} top`,
      scrub: true,
      onUpdate: (self) => setProgress(self.progress),
    });
    jumpRef.current = (i: number) => {
      const y = st.start + (i / (n - 1)) * (st.end - st.start) + 2;
      const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o: object) => void } }).__lenis;
      if (lenis) lenis.scrollTo(y, { duration: 1.6 });
      else window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
    };
    // this section mounts after the page's other pins: re-sort and re-measure so pins below stay aligned
    ScrollTrigger.sort();
    requestAnimationFrame(() => ScrollTrigger.refresh());

    // intro: model rises, boundary draws itself
    rise.forEach((g) => (g.scale.y = reduce ? 1 : 0.001));
    const intro = ScrollTrigger.create({
      trigger: wrap,
      start: () => `top+=${sh() * 0.25} top`,
      once: true,
      onEnter: () => {
        if (reduce) return;
        rise.forEach((g, i) => gsap.to(g.scale, { y: 1, duration: 1.8, ease: "expo.out", delay: 0.3 + i * 0.12 }));
        const o = { v: 0 };
        gsap.to(o, { v: bpts.length, duration: 2.4, ease: "power2.inOut", onUpdate: () => boundary.geometry.setDrawRange(0, Math.round(o.v)) });
      },
    });

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    stage.addEventListener("pointermove", onMove);

    let visible = false;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting), { rootMargin: "200px" });
    io.observe(stage);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!visible) return;
      const time = clock.elapsedTime;
      const kk = reduce ? 1 : 1 - Math.pow(0.0015, dt);
      camPos.lerp(goal.pos, kk);
      camLook.lerp(goal.look, kk);
      const drift = reduce ? 0 : 1;
      camera.position.set(
        camPos.x + mouse.x * 2.2 + Math.sin(time * 0.15) * 0.8 * drift,
        camPos.y - mouse.y * 1.2,
        camPos.z + Math.cos(time * 0.12) * 0.8 * drift,
      );
      camera.lookAt(camLook);
      if (!reduce) {
        flowTex.forEach((t) => (t.offset.x -= dt * 0.9));
        const a = time * 0.22;
        drone.position.set(11 + Math.sin(a) * 15, 6.5 + Math.sin(time * 1.3) * 0.15, 10 + Math.sin(a * 2) * 6);
        const vx = Math.cos(a) * 15;
        const vz = Math.cos(a * 2) * 12;
        drone.rotation.y = Math.atan2(-vz, vx);
        rotors.forEach((r) => (r.rotation.y += dt * 40));
      }
      if (composer) composer.render();
      else renderer.render(scene, camera);
      labels.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      st.kill();
      intro.kill();
      ro.disconnect();
      io.disconnect();
      stage.removeEventListener("pointermove", onMove);
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose?.();
        const mm = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mm)) mm.forEach((x) => x.dispose());
        else mm?.dispose?.();
      });
      composer?.dispose();
      renderer.dispose();
      stage.innerHTML = "";
    };
  }, [n]);

  const stop = tour[active];

  return (
    <div ref={wrapRef} className={c.curtain} data-on="true" style={{ ["--len" as string]: `${(n - 1) * 95}vh` }}>
    <section ref={sectionRef} className={`${c.map} ${c.curtainStick}`} aria-label="Innovation Oasis site model">
      <div ref={stageRef} className={c.mapStage} aria-hidden="true" />
      {failed ? <div className={c.mapFallback} /> : null}

      <div className={c.mapHead}>
        <span className={c.eyebrow}>The site</span>
        <span className={c.mapHint}>Scroll to explore · select a place</span>
      </div>

      <aside className={c.mapCard} aria-live="polite">
        <div className={c.mapImg}>
          {tour.map((t, i) => (
            <img key={t.key} src={t.img} alt="" data-on={i === active} loading={i === 0 ? "eager" : "lazy"} />
          ))}
          <span className={c.mapCount}>
            {String(active + 1).padStart(2, "0")} <i>/ {String(n).padStart(2, "0")}</i>
          </span>
        </div>
        <div className={c.mapBody} key={stop.key}>
          <h3>{stop.title}</h3>
          <p>{stop.text}</p>
          {stop.facts ? (
            <ul className={c.mapFacts}>
              {stop.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          ) : null}
          {stop.related ? (
            <div className={c.mapRelated}>
              <span>Related</span>
              <ul>
                {stop.related.map((r) => (
                  <li key={r.label}>
                    <Link href={r.href}>
                      {r.label}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {stop.cta ? (
            <a href={stop.cta.href} className={c.mapCta}>
              {stop.cta.label} ↗
            </a>
          ) : null}
        </div>
      </aside>

      <nav className={c.mapIndex} aria-label="Site model places">
        {tour.map((t, i) => (
          <button key={t.key} type="button" data-on={i === active} onClick={() => jumpRef.current(i)}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{t.key === "overview" ? "The parcel" : t.key === "masterplan" ? "The masterplan" : t.title}</b>
          </button>
        ))}
      </nav>

      <span className={c.mapNote}>Illustrative site model · not to scale</span>
    </section>
    </div>
  );
}
