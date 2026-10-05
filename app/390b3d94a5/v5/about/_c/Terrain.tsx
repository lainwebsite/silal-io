"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import a from "../about.module.css";
import { Head } from "../../_c/Brand";

gsap.registerPlugin(ScrollTrigger);

/*
 * Why Here? (after Hut 8 "Our Impact"). A white dot terrain — the desert as data — with the giant
 * chapter title sliding across it. As you scroll, five spikes rise from the dunes, one per pressure
 * in the client copy, and a ruler counts the benchmarks. Pinned with CSS sticky.
 */

const pressures = [
  { t: "Heat", at: [-5.2, 0, -2.2] },
  { t: "Water scarcity", at: [-1.8, 0, -5.4] },
  { t: "Salinity", at: [1.6, 0, -1.2] },
  { t: "Resource constraints", at: [4.6, 0, -4.4] },
  { t: "Operational complexity", at: [0.2, 0, 1.6] },
] as const;

const height = (x: number, z: number) =>
  Math.sin(x * 0.42 + z * 0.2) * 0.9 + Math.sin(z * 0.62 - x * 0.25) * 0.55 + Math.sin(x * 1.1 + z * 0.9) * 0.16 + Math.cos(z * 0.3 + x * 0.1) * 0.6 - 0.4;

export function Terrain() {
  const section = useRef<HTMLElement>(null);
  const host = useRef<HTMLDivElement>(null);
  const labels = useRef<(HTMLSpanElement | null)[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = host.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

    // dot terrain
    const nx = window.innerWidth < 760 ? 150 : 240;
    const nz = window.innerWidth < 760 ? 110 : 150;
    const W = 22;
    const D = 15;
    const arr = new Float32Array(nx * nz * 3);
    for (let i = 0; i < nx; i++)
      for (let j = 0; j < nz; j++) {
        const x = (i / (nx - 1) - 0.5) * W;
        const z = (j / (nz - 1) - 0.5) * D;
        const k = (i * nz + j) * 3;
        arr[k] = x;
        arr[k + 1] = height(x, z);
        arr[k + 2] = z;
      }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    const mat = new THREE.PointsMaterial({ color: "#595453", size: 0.04, sizeAttenuation: true, transparent: true, opacity: 0.75 });
    scene.add(new THREE.Points(geo, mat));

    // spikes
    const spikeMat = new THREE.MeshBasicMaterial({ color: "#3d3938" });
    const tipMat = new THREE.MeshBasicMaterial({ color: "#3CA7D2" });
    const spikes = pressures.map((p) => {
      const g = new THREE.Group();
      const y0 = height(p.at[0], p.at[2]);
      g.position.set(p.at[0], y0, p.at[2]);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1, 6).translate(0, 0.5, 0), spikeMat);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.075, 14, 14), tipMat);
      g.add(stem, tip);
      stem.scale.y = 0.0001;
      tip.visible = false;
      scene.add(g);
      return { g, stem, tip };
    });

    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const state = { p: 0 };
    const st = ScrollTrigger.create({
      trigger: section.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (s) => (state.p = s.progress),
    });

    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);

    const v = new THREE.Vector3();
    let shown = -1;
    let sp = 0;
    const tick = (time: number, dt: number) => {
      if (!visible) return;
      sp += (state.p - sp) * (1 - Math.pow(0.0005, Math.min(dt, 100) / 1000)); // frame-rate independent
      // camera dollies forward and lifts as you read
      const t = reduce ? 0.5 : sp;
      camera.position.set(Math.sin(time * 0.05) * 0.6 * (reduce ? 0 : 1), 2.6 + t * 2.6, 11.5 - t * 3);
      camera.lookAt(0, -0.4 + t * 0.8, -2);
      // spikes rise one by one between 35% and 80%
      let n = 0;
      spikes.forEach(({ g, stem, tip }, i) => {
        const s0 = 0.34 + i * 0.09;
        const k = THREE.MathUtils.clamp((sp - s0) / 0.08, 0, 1);
        const e = 1 - Math.pow(1 - k, 3);
        const hgt = Math.max(0.0001, e * (2.2 + (i % 3) * 0.6));
        stem.scale.y = hgt;
        tip.position.y = hgt;
        tip.visible = k > 0;
        if (k > 0.6) n++;
        const lab = labels.current[i];
        if (lab) {
          v.set(g.position.x, g.position.y + hgt + 0.22, g.position.z).project(camera);
          lab.style.transform = `translate(${((v.x + 1) / 2) * el.clientWidth}px, ${((1 - v.y) / 2) * el.clientHeight}px)`;
          lab.style.opacity = String(e);
        }
      });
      if (n !== shown) {
        shown = n;
        setCount(n);
      }
      renderer.render(scene, camera);
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
      io.disconnect();
      ro.disconnect();
      geo.dispose();
      mat.dispose();
      spikeMat.dispose();
      tipMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section ref={section} className={a.terrain} data-terrain aria-labelledby="why-title">
      <div className={a.terrainStage}>
        <div ref={host} className={a.terrainCanvas} aria-hidden />
        <div className={a.terrainHead}>
          <Head n="03" title="Why Here?" sub="The Arid Advantage" />
        </div>
        <h2 id="why-title" className={a.terrainTitle} data-terrain-title>
          The Arid Advantage
        </h2>
        <div className={a.terrainCopy} data-terrain-copy>
          <p className={a.terrainLead}>
            Many see the desert as a constraint.
            <br />
            We see it as the world&rsquo;s most important testbed.
          </p>
          <p className={a.terrainBody}>
            Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will
            reshape agriculture around the world. Conditions once considered unique to the UAE are becoming increasingly
            common elsewhere.
          </p>
          <p className={a.terrainBody}>
            That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the
            pressures that define tomorrow&rsquo;s food system today.
          </p>
        </div>
        <div className={a.terrainLabels} aria-hidden>
          {pressures.map((p, i) => (
            <span key={p.t} ref={(e) => void (labels.current[i] = e)} className={a.spike}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {p.t}
            </span>
          ))}
        </div>
        <ul className={a.srOnly}>
          {pressures.map((p) => (
            <li key={p.t}>{p.t}</li>
          ))}
        </ul>
        <div className={a.ruler} aria-hidden>
          <p>
            <small>Heat · water · salinity · resources · operations</small>
            The pressures
          </p>
          <span className={a.rulerTicks} />
          <p className={a.rulerCount}>
            <b>{String(count).padStart(2, "0")}</b>
            <small>/ 05</small>
          </p>
        </div>
      </div>
    </section>
  );
}
