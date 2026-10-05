"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import a from "../about.module.css";
import { Head } from "../../_c/Brand";

gsap.registerPlugin(ScrollTrigger);

/*
 * The site (after Hut 8's white isometric world). An abstract, all-white campus — not a site plan —
 * toured layer by layer. Each layer carries one line of the client copy ("A place where…").
 * Monochrome matte white, IO Blue only on the service lines and pins. Pinned with CSS sticky; the
 * camera follows a spline through four stops as you scroll. Renders only while on screen.
 */

const layers = [
  {
    name: "Field-testing areas",
    text: "A place where startups can test technologies in real-world conditions.",
    cam: [-4, 34, 58] as const,
    look: [-30, 0, 12] as const,
  },
  {
    name: "Laboratories and greenhouses",
    text: "Where researchers and farmers collaborate side-by-side.",
    cam: [52, 34, 22] as const,
    look: [14, 0, -16] as const,
  },
  {
    name: "Collaboration spaces",
    text: "Where commercial partners help scale solutions.",
    cam: [42, 30, 64] as const,
    look: [8, 1, 18] as const,
  },
  {
    name: "The proving ground",
    text: "And where the UAE’s toughest growing conditions become the ultimate proving ground for the future of food.",
    cam: [110, 92, 120] as const,
    look: [8, 0, 4] as const,
  },
];

// pins: [label, world position, layer it belongs to]
const pins: { label: string; at: [number, number, number]; layer: number; icon: "leaf" | "drone" | "flask" | "sun" | "people" | "house" }[] = [
  { label: "Field-testing areas", at: [-34, 1.2, 14], layer: 0, icon: "leaf" },
  { label: "Drones and sensors", at: [-22, 7, 24], layer: 0, icon: "drone" },
  { label: "Laboratories", at: [6, 6.5, -18], layer: 1, icon: "flask" },
  { label: "Greenhouses", at: [26, 4.5, -10], layer: 1, icon: "leaf" },
  { label: "Collaboration spaces", at: [8, 7.5, 16], layer: 2, icon: "people" },
  { label: "Solar Desalination", at: [40, 3, 22], layer: 3, icon: "sun" },
];

function Icon({ k }: { k: string }) {
  const p: Record<string, string> = {
    leaf: "M5 19c0-8 5-13 14-14-1 9-6 14-14 14zm0 0l7-7",
    drone: "M4 7h4m8 0h4M6 7v3h12V7M9 10l-1 4m7-4l1 4M8 14h8",
    flask: "M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M8 3h8",
    sun: "M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v3m0 16v3M1 12h3m16 0h3",
    people: "M8 11a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5m0-3c1-1 2-2 4-2 3 0 6 2 6 5",
    house: "M3 11l9-7 9 7v9H3z",
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d={p[k]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function dotTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  g.fillStyle = "#f4f4f4";
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = "#c8c8c8";
  g.beginPath();
  g.arc(32, 32, 2.4, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(160, 160);
  t.anisotropy = 4;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function stripeTexture(bg: string, fg: string, n: number, vertical = false) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  g.fillStyle = bg;
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = fg;
  const step = 128 / n;
  for (let i = 0; i < n; i++) {
    if (vertical) g.fillRect(i * step + step * 0.35, 0, step * 0.3, 128);
    else g.fillRect(0, i * step + step * 0.35, 128, step * 0.3);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function Site3D() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const pinEls = useRef<(HTMLSpanElement | null)[]>([]);
  const [layer, setLayer] = useState(0);
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
    renderer.shadowMap.enabled = !small;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f4f5f5");
    scene.fog = new THREE.Fog("#f4f5f5", 110, 260);
    const camera = new THREE.PerspectiveCamera(24, 1, 1, 600);

    scene.add(new THREE.HemisphereLight("#ffffff", "#d9d9d9", 1.5));
    const sun = new THREE.DirectionalLight("#ffffff", 2.2);
    sun.position.set(-40, 70, 30);
    sun.castShadow = !small;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = sc.bottom = -80;
    sc.right = sc.top = 80;
    sc.far = 260;
    sun.shadow.bias = -0.0004;
    sun.shadow.radius = 4;
    scene.add(sun);

    const white = new THREE.MeshStandardMaterial({ color: "#f7f7f7", roughness: 0.92 });
    const soft = new THREE.MeshStandardMaterial({ color: "#e9e9e9", roughness: 0.95 });
    const blue = new THREE.MeshBasicMaterial({ color: "#3CA7D2" });
    const glass = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.3, transparent: true, opacity: 0.55 });
    const disposables: { dispose: () => void }[] = [white, soft, blue, glass];

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, ry = 0) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.rotation.y = ry;
      m.castShadow = true;
      m.receiveShadow = true;
      scene.add(m);
      disposables.push(geo);
      return m;
    };
    const box = (w: number, h: number, d: number, x: number, z: number, mat: THREE.Material = white, y = h / 2, ry = 0) =>
      add(new THREE.BoxGeometry(w, h, d), mat, x, y, z, ry);

    // ground with dot grid
    const dots = dotTexture();
    disposables.push(dots);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.MeshStandardMaterial({ map: dots, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // roads with an IO-blue service line (Hut 8's lime line, made IO)
    const road = (x: number, z: number, len: number, alongX: boolean) => {
      box(alongX ? len : 2.6, 0.08, alongX ? 2.6 : len, x, z, soft, 0.04);
      box(alongX ? len : 0.14, 0.02, alongX ? 0.14 : len, x, z, blue, 0.1);
    };
    road(0, 0, 150, true);
    road(-12, 4, 70, false);
    road(18, -20, 46, true);
    road(30, 14, 34, false);

    // Layer 1 — Test: trial plots, sensors, drone
    const rows = stripeTexture("#f6f6f6", "#e2e2e2", 10, true);
    disposables.push(rows);
    const plotMat = new THREE.MeshStandardMaterial({ map: rows, roughness: 1 });
    for (let i = 0; i < 5; i++)
      for (let j = 0; j < 3; j++) box(5.6, 0.3, 4.2, -42 + i * 6.4, 8 + j * 5, plotMat, 0.15);
    for (let i = 0; i < 6; i++) {
      add(new THREE.CylinderGeometry(0.06, 0.06, 2.2, 6), white, -40 + i * 5.2, 1.1, 22.5);
      add(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 16), blue, -40 + i * 5.2, 2.25, 22.5);
    }
    const drone = new THREE.Group();
    const dBody = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.9), white);
    drone.add(dBody);
    for (let k = 0; k < 4; k++) {
      const r = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.03, 20), blue);
      r.position.set(k % 2 ? 0.75 : -0.75, 0.12, k < 2 ? 0.75 : -0.75);
      drone.add(r);
    }
    drone.position.set(-22, 6, 24);
    drone.traverse((o) => ((o as THREE.Mesh).castShadow = true));
    scene.add(drone);

    // Layer 2 — Collaborate: laboratories, growth chambers, greenhouse tunnels
    const windows = stripeTexture("#f8f8f8", "#dcdcdc", 6);
    disposables.push(windows);
    const labMat = new THREE.MeshStandardMaterial({ map: windows, roughness: 0.9 });
    box(15, 4.4, 8, 4, -18, labMat);
    box(10, 3.4, 6, 4, -27, labMat);
    for (let i = 0; i < 4; i++) box(1.6, 1, 1.6, -1 + i * 3, -18, white, 4.9);
    box(7, 3, 5, -9, -18, white);
    for (let i = 0; i < 5; i++) box(0.25, 2.6, 5, -11.6 + i * 1.3, -18, soft, 4.3);
    for (let i = 0; i < 6; i++) {
      const g = new THREE.CylinderGeometry(2.1, 2.1, 15, 24, 1, true, 0, Math.PI);
      const m = add(g, glass, 24 + i * 4.6, 0, -12);
      m.rotation.set(Math.PI / 2, 0, Math.PI / 2);
      m.position.y = 0.02;
      for (let r = 0; r < 4; r++) box(0.12, 0.25, 13.6, 24 + i * 4.6 + (r - 1.5) * 0.8, -12, plotMat, 0.15);
    }

    // Layer 3 — Scale: main building and its canopy "trees" around a plaza
    box(20, 5.2, 11, 8, 18, labMat);
    box(8, 2, 8, 8, 18, white, 6.2);
    add(new THREE.CylinderGeometry(7, 7, 0.12, 64), soft, 8, 0.06, 30);
    for (let k = 0; k < 5; k++) {
      const x = -2 + k * 5;
      const z = 27 + (k % 2) * 3;
      add(new THREE.CylinderGeometry(0.1, 0.22, 4.4, 10), white, x, 2.2, z);
      add(new THREE.CylinderGeometry(2.4, 2.4, 0.08, 40), white, x, 4.45, z);
    }

    // Layer 4 — Prove: solar desalination array and a water tank at the desert edge
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 3; j++) {
        const p = add(new THREE.BoxGeometry(3.6, 0.08, 2), soft, 36 + i * 4, 1.2, 18 + j * 3.2);
        p.rotation.x = -0.45;
        add(new THREE.CylinderGeometry(0.06, 0.06, 1.2, 6), white, 36 + i * 4, 0.6, 18 + j * 3.2);
      }
    add(new THREE.CylinderGeometry(2.6, 2.6, 4, 32), white, 54, 2, 30);

    // density (Hut 8's world is full): extra trial fields, equipment, shade palms, solar rows
    const inst = (geo: THREE.BufferGeometry, mat: THREE.Material, items: [number, number, number, number?, number?][]) => {
      const m = new THREE.InstancedMesh(geo, mat, items.length);
      const o = new THREE.Object3D();
      items.forEach(([x, y, z, ry = 0, sc = 1], i) => {
        o.position.set(x, y, z);
        o.rotation.set(0, ry, 0);
        o.scale.setScalar(sc);
        o.updateMatrix();
        m.setMatrixAt(i, o.matrix);
      });
      m.castShadow = m.receiveShadow = true;
      scene.add(m);
      disposables.push(geo);
      return m;
    };
    const fieldItems: [number, number, number][] = [];
    for (let i = 0; i < 7; i++) for (let j = 0; j < 4; j++) fieldItems.push([-62 + i * 6.4, 0.15, -10 - j * 5]);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) fieldItems.push([-74 + i * 6.4, 0.15, 8 + j * 5]);
    inst(new THREE.BoxGeometry(5.6, 0.3, 4.2), plotMat, fieldItems);
    const kit: [number, number, number, number?][] = [];
    for (let i = 0; i < 18; i++) kit.push([-30 + (i % 6) * 2.2, 0.5, 34 + Math.floor(i / 6) * 2.4]);
    for (let i = 0; i < 10; i++) kit.push([18 + (i % 5) * 2.4, 0.5, 2 + Math.floor(i / 5) * 2.2]);
    for (let i = 0; i < 8; i++) kit.push([-14 + (i % 4) * 2.4, 0.5, -34 + Math.floor(i / 4) * 2.2]);
    inst(new THREE.BoxGeometry(1.6, 1, 1.2), white, kit);
    const palms: [number, number, number][] = [];
    for (let i = 0; i < 14; i++) palms.push([-6 + i * 2.6, 0, 8.5]);
    for (let i = 0; i < 10; i++) palms.push([-16, 0, -6 + i * 2.6]);
    inst(new THREE.CylinderGeometry(0.08, 0.12, 2.4, 6).translate(0, 1.2, 0), white, palms);
    inst(new THREE.IcosahedronGeometry(0.8, 0).translate(0, 2.6, 0), soft, palms);
    const solar: [number, number, number][] = [];
    for (let i = 0; i < 8; i++) for (let j = 0; j < 4; j++) solar.push([62 + i * 3.4, 1, -6 + j * 3]);
    const sp = inst(new THREE.BoxGeometry(3, 0.08, 1.8), soft, solar);
    sp.rotation.x = 0;
    // more buildings along the spine
    box(12, 3.2, 7, -30, -24, labMat);
    box(9, 2.6, 6, 40, -26, labMat);
    box(6, 6, 6, 58, 30, white);

    // the desert: a soft dune field beyond the campus
    const dg = new THREE.PlaneGeometry(600, 600, 160, 160);
    const pos = dg.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const r = Math.hypot(x, y);
      const fall = THREE.MathUtils.smoothstep(r, 85, 140);
      pos.setZ(i, fall * (Math.sin(x * 0.045) * 3 + Math.sin(y * 0.06 + x * 0.02) * 2.4 + 2.5));
    }
    dg.computeVertexNormals();
    const dunes = new THREE.Mesh(dg, new THREE.MeshStandardMaterial({ color: "#efefef", roughness: 1 }));
    dunes.rotation.x = -Math.PI / 2;
    dunes.position.y = -0.02;
    dunes.receiveShadow = true;
    scene.add(dunes);
    disposables.push(dg);

    // soft contact shading (desktop only): the "architect's maquette" finish
    let composer: EffectComposer | null = null;
    if (!small) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const ao = new GTAOPass(scene, camera, 1, 1);
      ao.updateGtaoMaterial({ radius: 2.2, distanceExponent: 1.6, thickness: 1.4, scale: 1.2, samples: 12 });
      ao.blendIntensity = 0.85;
      composer.addPass(ao);
      composer.addPass(new OutputPass());
    }

    // camera path
    const camCurve = new THREE.CatmullRomCurve3(layers.map((l) => new THREE.Vector3(...l.cam)), false, "centripetal");
    const lookCurve = new THREE.CatmullRomCurve3(layers.map((l) => new THREE.Vector3(...l.look)), false, "centripetal");
    const goal = { pos: camCurve.getPoint(0), look: lookCurve.getPoint(0) };
    const camPos = goal.pos.clone().multiplyScalar(1.25);
    const camLook = goal.look.clone();

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      renderer.setSize(w, h, false);
      composer?.setSize(w, h);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = w / h;
      camera.fov = w / h < 1 ? 40 : 26;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let cur = -1;
    const st = ScrollTrigger.create({
      trigger: section.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const t = THREE.MathUtils.clamp(self.progress * 1.08 - 0.04, 0, 1);
        camCurve.getPoint(t, goal.pos);
        lookCurve.getPoint(t, goal.look);
        if (camera.aspect < 1) goal.pos.sub(goal.look).multiplyScalar(1.5).add(goal.look);
        const idx = Math.min(layers.length - 1, Math.round(t * (layers.length - 1)));
        if (idx !== cur) {
          cur = idx;
          setLayer(idx);
        }
      },
    });

    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: "100px" });
    io.observe(host);

    const v = new THREE.Vector3();
    const tick = (time: number, dt: number) => {
      if (!visible) return;
      const k = reduce ? 1 : 1 - Math.pow(0.002, Math.min(dt, 50) / 1000);
      camPos.lerp(goal.pos, k);
      camLook.lerp(goal.look, k);
      camera.position.copy(camPos);
      camera.lookAt(camLook);
      if (!reduce) {
        drone.position.set(-22 + Math.sin(time * 0.4) * 6, 6 + Math.sin(time * 1.6) * 0.2, 24 + Math.cos(time * 0.4) * 3);
        drone.rotation.y = time * 0.4;
      }
      if (composer) composer.render();
      else renderer.render(scene, camera);
      // pins
      const w = host.clientWidth;
      const h = host.clientHeight;
      pins.forEach((p, i) => {
        const el = pinEls.current[i];
        if (!el) return;
        v.set(...p.at);
        if (i === 1) v.copy(drone.position).add(new THREE.Vector3(0, 1, 0));
        v.project(camera);
        const off = v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1;
        el.style.transform = `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px)`;
        el.style.opacity = off ? "0" : "";
      });
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
      io.disconnect();
      ro.disconnect();
      disposables.forEach((d) => d.dispose());
      composer?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  const L = layers[layer];
  return (
    <section ref={section} className={a.site} aria-labelledby="site-h" style={{ height: `${layers.length * 100 + 60}vh` }}>
      <div className={a.siteStage}>
        <div ref={stage} className={a.siteCanvas} aria-hidden />
        {failed ? <div className={a.siteFallback} /> : null}
        <div className={a.sitePins} aria-hidden>
          {pins.map((p, i) => (
            <span key={p.label} ref={(el) => void (pinEls.current[i] = el)} className={a.pin} data-on={p.layer === layer ? "" : undefined}>
              <i>
                <Icon k={p.icon} />
              </i>
              <b>{p.label}</b>
            </span>
          ))}
        </div>
        <div className={a.siteHead}>
          <Head n={`${String(layer + 1).padStart(2, "0")} / 04`} title="The site" sub="Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces" />
          <h2 id="site-h" className={a.srOnly}>
            The site
          </h2>
        </div>
        {/* guideline wayfinding panel: white, IO-Blue top rule */}
        <div className={a.siteCard} aria-live="polite">
          <p className={a.siteCardNum}>{String(layer + 1).padStart(2, "0")}</p>
          <p key={L.name} className={a.siteCardName}>
            {L.name}
          </p>
          <p key={L.text} className={a.siteCardLine}>
            {L.text}
          </p>
        </div>
        <ol className={a.siteSteps} aria-hidden>
          {layers.map((l, i) => (
            <li key={l.name} data-on={i === layer ? "" : undefined} data-past={i < layer ? "" : undefined}>
              <i />
              {l.name}
            </li>
          ))}
        </ol>
        <p className={a.siteNote}>Illustrative model · not to scale</p>
      </div>
    </section>
  );
}
