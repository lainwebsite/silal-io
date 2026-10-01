"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import c from "./about-c.module.css";

gsap.registerPlugin(ScrollTrigger);

export type Stop = { key: string; label: string; title: string; text?: string };

// Illustrative, not surveyed: a 34-hectare parcel (≈700 m × 485 m, 1 unit = 10 m) with the facility
// types named in the client copy, and Al Foah Farm alongside.
const ZONES: Record<string, { pos: [number, number, number]; cam: [number, number, number]; look: [number, number, number] }> = {
  overview: { pos: [0, 0, 0], cam: [62, 64, 78], look: [2, 0, 2] },
  labs: { pos: [-20, 4, -13], cam: [-2, 20, 8], look: [-20, 1, -13] },
  cea: { pos: [-20, 3, 0], cam: [-1, 16, 18], look: [-19, 1, 0] },
  greenhouses: { pos: [6, 3, -12], cam: [24, 20, 12], look: [6, 1, -12] },
  fields: { pos: [12, 1, 11], cam: [34, 26, 36], look: [12, 0, 11] },
  collab: { pos: [-23, 2, 13], cam: [-4, 15, 32], look: [-23, 0, 13] },
  farm: { pos: [56, 2, 0], cam: [30, 46, 70], look: [46, 0, 0] },
};

function mulberry(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function SiteModel({ stops }: { stops: Stop[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current!;
    const stage = stageRef.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    } catch {
      setFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    stage.appendChild(renderer.domElement);

    const labels = new CSS2DRenderer();
    labels.domElement.className = c.mapLabels;
    stage.appendChild(labels.domElement);

    const scene = new THREE.Scene();
    const bg = new THREE.Color("#f3f1ec");
    scene.background = bg;
    scene.fog = new THREE.Fog(bg, 150, 330);

    const camera = new THREE.PerspectiveCamera(32, 1, 0.5, 900);

    /* ---------- light ---------- */
    scene.add(new THREE.HemisphereLight("#ffffff", "#d9cdb6", 1.6));
    const sun = new THREE.DirectionalLight("#fff6e8", 2.4);
    sun.position.set(-60, 90, 40);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -90;
    sc.right = 90;
    sc.top = 70;
    sc.bottom = -70;
    sun.shadow.bias = -0.0004;
    sun.shadow.radius = 4;
    scene.add(sun);

    const mat = (color: string, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
      new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0, ...extra });
    const box = (w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
      mesh.position.set(x, y + h / 2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    };

    /* ---------- ground ---------- */
    const desert = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), mat("#e6dccb"));
    desert.rotation.x = -Math.PI / 2;
    desert.receiveShadow = true;
    scene.add(desert);

    const parcel = new THREE.Mesh(new THREE.PlaneGeometry(70, 48.5), mat("#efeae1"));
    parcel.rotation.x = -Math.PI / 2;
    parcel.position.y = 0.02;
    parcel.receiveShadow = true;
    scene.add(parcel);

    // 34-hectare boundary in IO Blue
    const edge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(70, 0.01, 48.5)),
      new THREE.LineBasicMaterial({ color: "#3ca7d2" }),
    );
    edge.position.y = 0.08;
    scene.add(edge);
    const tint = new THREE.Mesh(new THREE.PlaneGeometry(70, 48.5), new THREE.MeshBasicMaterial({ color: "#3ca7d2", transparent: true, opacity: 0.05 }));
    tint.rotation.x = -Math.PI / 2;
    tint.position.y = 0.05;
    scene.add(tint);

    // internal paths
    const pathMat = mat("#f8f6f2");
    [
      [0, 0, 70, 1.4],
      [-9, 0, 1.4, 48.5],
    ].forEach(([x, z, w, d]) => {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), pathMat);
      p.rotation.x = -Math.PI / 2;
      p.position.set(x, 0.06, z);
      p.receiveShadow = true;
      scene.add(p);
    });

    // road between the parcel and Al Foah Farm
    const road = new THREE.Mesh(new THREE.PlaneGeometry(3, 220), mat("#c9c2b6"));
    road.rotation.x = -Math.PI / 2;
    road.position.set(38.5, 0.04, 0);
    scene.add(road);

    const rise: THREE.Object3D[] = [];
    const group = (...objs: THREE.Object3D[]) => {
      const g = new THREE.Group();
      objs.forEach((o) => g.add(o));
      scene.add(g);
      rise.push(g);
      return g;
    };

    /* ---------- laboratories: main building + entrance canopies ---------- */
    const white = mat("#fbfbfa", { roughness: 0.6 });
    const blue = mat("#3ca7d2", { roughness: 0.5 });
    const glass = mat("#cfe3ec", { roughness: 0.15, metalness: 0.1 });
    const labs = group(
      box(16, 3.2, 8, white, -20, 0, -14),
      box(16.1, 0.5, 8.1, blue, -20, 3.2, -14),
      box(15.6, 1.6, 0.2, glass, -20, 0.6, -9.9),
      box(6, 2.4, 6, white, -31, 0, -14),
    );
    for (let i = 0; i < 4; i++) {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 3.2, 10), white);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 0.4, 0.35, 32), white);
      stem.position.set(-26 + i * 4, 1.6, -7.6);
      cap.position.set(-26 + i * 4, 3.3, -7.6);
      [stem, cap].forEach((m) => {
        m.castShadow = true;
        labs.add(m);
      });
    }

    /* ---------- controlled-environment facilities ---------- */
    const cea = group();
    for (let i = 0; i < 3; i++) {
      cea.add(box(4.2, 2.4, 6, white, -25 + i * 5, 0, 0));
      cea.add(box(4.25, 0.18, 6.05, glass, -25 + i * 5, 2.4, 0));
    }

    /* ---------- greenhouses: tunnel rows ---------- */
    const ghMat = new THREE.MeshPhysicalMaterial({
      color: "#ffffff",
      roughness: 0.35,
      transmission: 0.25,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
    });
    const greenhouses = group();
    for (let i = 0; i < 9; i++) {
      // half-cylinder tunnel: arc above ground, running along Z
      const geo = new THREE.CylinderGeometry(1.15, 1.15, 15, 24, 1, true, Math.PI / 2, Math.PI);
      geo.rotateX(Math.PI / 2);
      const g = new THREE.Mesh(geo, ghMat);
      g.position.set(-3 + i * 2.5, 0, -13);
      g.castShadow = true;
      g.receiveShadow = true;
      greenhouses.add(g);
    }

    /* ---------- field-testing areas: trial plots ---------- */
    const rnd = mulberry(7);
    const greens = ["#7fb46a", "#5f9e52", "#a6c27a", "#8cbf5f", "#4f8a47", "#b8cc8a"];
    const plotGeo = new THREE.BoxGeometry(4.6, 0.25, 3.4);
    const plotMat = mat("#ffffff");
    const plots = new THREE.InstancedMesh(plotGeo, plotMat, 7 * 4);
    const dummy = new THREE.Object3D();
    let n = 0;
    for (let r = 0; r < 4; r++) {
      for (let col = 0; col < 7; col++) {
        dummy.position.set(-5 + col * 5.4, 0.13, 3.5 + r * 4.4);
        dummy.updateMatrix();
        plots.setMatrixAt(n, dummy.matrix);
        plots.setColorAt(n, new THREE.Color(greens[Math.floor(rnd() * greens.length)]));
        n++;
      }
    }
    plots.receiveShadow = true;
    plots.castShadow = true;
    const fields = group(plots);

    /* ---------- collaboration spaces: pavilion + plaza ---------- */
    const plaza = new THREE.Mesh(new THREE.CircleGeometry(6, 48), mat("#f9f7f3"));
    plaza.rotation.x = -Math.PI / 2;
    plaza.position.set(-23, 0.09, 13);
    plaza.receiveShadow = true;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.35, 12, 64), white);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(-23, 2.4, 13);
    ring.castShadow = true;
    const collab = group(plaza, ring);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.4, 8), white);
      leg.position.set(-23 + Math.cos(a) * 4.2, 1.2, 13 + Math.sin(a) * 4.2);
      leg.castShadow = true;
      collab.add(leg);
    }
    collab.add(box(5, 1.6, 3, white, -14, 0, 15));

    /* ---------- Al Foah Farm: palm grid beyond the road ---------- */
    const palmCount = 22 * 30;
    const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.08, 0.12, 1.6, 6), mat("#9c8466"), palmCount);
    const crown = new THREE.InstancedMesh(new THREE.SphereGeometry(0.9, 8, 6), mat("#5b7f4a"), palmCount);
    n = 0;
    for (let gx = 0; gx < 22; gx++) {
      for (let gz = 0; gz < 30; gz++) {
        const x = 44 + gx * 3.2 + (rnd() - 0.5) * 0.6;
        const z = -46 + gz * 3.2 + (rnd() - 0.5) * 0.6;
        const s = 0.8 + rnd() * 0.45;
        dummy.position.set(x, 0.8 * s, z);
        dummy.scale.set(s, s, s);
        dummy.updateMatrix();
        trunk.setMatrixAt(n, dummy.matrix);
        dummy.position.set(x, 1.8 * s, z);
        dummy.scale.set(s, s * 0.7, s);
        dummy.updateMatrix();
        crown.setMatrixAt(n, dummy.matrix);
        n++;
      }
    }
    [trunk, crown].forEach((m) => {
      m.castShadow = true;
      scene.add(m);
    });

    /* ---------- labels ---------- */
    const labelEls: Record<string, HTMLDivElement> = {};
    stops.forEach((st, i) => {
      const z = ZONES[st.key];
      if (!z || st.key === "overview") return;
      const el = document.createElement("div");
      el.className = c.mapLabel;
      el.innerHTML = `<span>${String(i).padStart(2, "0")}</span>${st.label}`;
      const obj = new CSS2DObject(el);
      obj.position.set(...z.pos);
      scene.add(obj);
      labelEls[st.key] = el;
    });

    /* ---------- sizing ---------- */
    const resize = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      labels.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(stage);

    /* ---------- camera path driven by scroll ---------- */
    const camPos = new THREE.Vector3(...ZONES.overview.cam).multiplyScalar(1.25);
    const camLook = new THREE.Vector3(...ZONES.overview.look);
    const target = { pos: camPos.clone(), look: camLook.clone() };
    const mouse = { x: 0, y: 0 };
    let current = -1;

    const setStop = (f: number) => {
      // f = 0..stops.length-1 (fractional)
      const i = Math.min(stops.length - 2, Math.floor(f));
      const t = f - i;
      const e = t * t * (3 - 2 * t);
      const a = ZONES[stops[i].key];
      const b = ZONES[stops[Math.min(stops.length - 1, i + 1)].key];
      target.pos.set(...a.cam).lerp(new THREE.Vector3(...b.cam), e);
      target.look.set(...a.look).lerp(new THREE.Vector3(...b.look), e);
      const idx = Math.round(f);
      if (idx !== current) {
        current = idx;
        setActive(idx);
        Object.entries(labelEls).forEach(([k, el]) => el.classList.toggle(c.mapLabelOn, k === stops[idx].key));
      }
    };
    setStop(0);

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${(stops.length - 1) * window.innerHeight * 0.9}`,
      pin: true,
      anticipatePin: 1,
      scrub: true,
      onUpdate: (self) => setStop(self.progress * (stops.length - 1)),
    });

    // this section mounts after the page's other pins: re-sort and re-measure so pins below it stay aligned
    ScrollTrigger.sort();
    requestAnimationFrame(() => ScrollTrigger.refresh());

    // buildings rise when the section first enters
    rise.forEach((g) => (g.scale.y = reduce ? 1 : 0.001));
    const intro = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () =>
        rise.forEach((g, i) => gsap.to(g.scale, { y: 1, duration: reduce ? 0 : 1.6, ease: "expo.out", delay: i * 0.12 })),
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

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const k = reduce ? 1 : 0.06;
      camPos.lerp(target.pos, k);
      camLook.lerp(target.look, k);
      camera.position.set(camPos.x + mouse.x * 2.5, camPos.y - mouse.y * 1.5, camPos.z);
      camera.lookAt(camLook);
      renderer.render(scene, camera);
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
      renderer.dispose();
      stage.innerHTML = "";
    };
  }, [stops]);

  return (
    <section ref={sectionRef} className={c.map}>
      <div ref={stageRef} className={c.mapStage} aria-hidden="true" />
      {failed ? <div className={c.mapFallback} /> : null}
      <div className={c.mapPanel}>
        <span className={c.eyebrow}>
          <span className={c.eyebrowNum}>{String(active).padStart(2, "0")}</span> / {String(stops.length - 1).padStart(2, "0")}
        </span>
        {stops.map((s, i) => (
          <div key={s.key} className={c.mapCard} data-active={active === i} aria-hidden={active !== i}>
            <h3>{s.title}</h3>
            {s.text ? <p>{s.text}</p> : null}
          </div>
        ))}
        <div className={c.mapProgress}>
          {stops.map((s, i) => (
            <i key={s.key} data-on={i <= active} />
          ))}
        </div>
      </div>
      <span className={c.mapNote}>Illustrative site model · not to scale</span>
    </section>
  );
}
