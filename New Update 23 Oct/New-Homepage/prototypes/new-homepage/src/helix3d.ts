import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// The client's helix_3d.gltf (welded to a compact .glb) in the "Where do you want to look first?" section.
// Rotates around Y with the scroll; the rung of the current step glows (emissive band that follows the step).

// y of the 7 rungs in the model (top to bottom), measured from the mesh
const RUNG_Y = [3.2, 2.2, 1.15, 0.0, -1.15, -2.2, -3.2];
const TIER_Y = [4.55, 3.2, 2.2, 1.15, 0.0, -1.15, -2.2, -3.2, -4.55]; // centre of each level
const TIERS = 9; // top circle, 7 rungs, bottom circle: each is turned on its own, in order, so the scroll reads as a wave
// stagger: 0 = every level turns together, 1 = each level starts only when the previous one has finished its share
const STAGGER = 0.28;
const smoother = (k: number) => k * k * k * (k * (k * 6 - 15) + 10);
const MODEL_H = 10.24; // model height in units
const PX_PER_UNIT = 477 / MODEL_H; // the 2D helix of the PDF frame (1440 x 931) was 477px tall

export type HelixOpts = { host: HTMLElement; data: ArrayBuffer; onFail: () => void };

export function mountHelix(opts: HelixOpts) {
  const host = opts.host;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch {
    opts.onFail();
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 400);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  const key = new THREE.DirectionalLight("#fff1dc", 2.2);
  key.position.set(-6, 9, 12);
  scene.add(key, new THREE.AmbientLight("#ffe9d0", 0.5));

  const pivot = new THREE.Group();
  scene.add(pivot);
  const hi = { value: RUNG_Y[1] };
  const glow = { value: 0.0 };
  const white = { value: 1.0 }; // intro: the whole helix is white
  const ang = { value: new Float32Array(TIERS) };
  const blueU = { value: new Float32Array(TIERS) }; // blue amount per level: the highlight fades out here and fades in there (it never travels)
  let ready = false;

  new GLTFLoader().parse(
    opts.data,
    "",
    (g) => {
      const root = g.scene;
      root.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        const mat = m.material as THREE.MeshPhysicalMaterial;
        mat.side = THREE.DoubleSide;
        mat.onBeforeCompile = (sh) => {
          sh.uniforms.uHiY = hi;
          sh.uniforms.uGlow = glow;
          sh.uniforms.uWhite = white;
          sh.uniforms.uAng = ang;
          sh.uniforms.uBlue = blueU;
          // every level turns about the helix's vertical axis by its own angle (position + normal)
          sh.vertexShader = sh.vertexShader
            .replace("#include <common>", "#include <common>\nvarying float vLY;\nvarying float vT;\nattribute float _tier;\nuniform float uAng[9];")
            .replace("#include <beginnormal_vertex>", "#include <beginnormal_vertex>\nfloat ta_ = uAng[int(_tier + 0.5)]; float tc_ = cos(ta_); float ts_ = sin(ta_);\nobjectNormal = vec3(tc_ * objectNormal.x + ts_ * objectNormal.z, objectNormal.y, -ts_ * objectNormal.x + tc_ * objectNormal.z);")
            .replace("#include <begin_vertex>", "#include <begin_vertex>\ntransformed = vec3(tc_ * transformed.x + ts_ * transformed.z, transformed.y, -ts_ * transformed.x + tc_ * transformed.z);\nvLY = position.y; vT = _tier;");
          sh.fragmentShader = sh.fragmentShader
            .replace("#include <common>", "#include <common>\nvarying float vLY;\nvarying float vT;\nuniform float uBlue[9];\nuniform float uHiY;\nuniform float uGlow;\nuniform float uWhite;")
            // the current rung is IO blue #3DA7CF (keeps the model's own shading); the others are white
            .replace("#include <dithering_fragment>", "#include <dithering_fragment>\nfloat hk_ = 0.0; for (int k_ = 0; k_ < 9; k_++) { if (abs(vT - float(k_)) < 0.5) hk_ = uBlue[k_]; } float lum_ = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));\nvec3 dim_ = vec3(0.76 + 0.07 * lum_);\nvec3 blue_ = vec3(0.2392, 0.6549, 0.8118) * (0.62 + 0.55 * lum_);\ngl_FragColor.rgb = mix(mix(dim_, blue_, hk_), vec3(0.94 + 0.06 * lum_), uWhite);");
        };
        mat.needsUpdate = true;
      });
      pivot.add(root);
      ready = true;
    },
    () => opts.onFail(),
  );

  const resize = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // keep the PDF's proportions: the helix is 477 frame-px tall in a 1440 x 931 frame scaled to fit the section
    const narrow = w < 760;
    const hs = narrow ? Math.max(0.42, Math.min(0.6, h / 931 * 0.66)) : Math.max(0.5, Math.min(1.35, Math.min(w / 1440, h / 931)));
    const visibleH = h / (PX_PER_UNIT * hs);
    camera.position.set(0, 0, visibleH / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    camera.lookAt(0, 0, 0);
    // phones: the helix sits in the upper part, the card below it
    if (narrow) camera.setViewOffset(w, h, 0, h * 0.1, w, h);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(host);

  let target = 0, rot = 0, enT = 0, en = 0, whiteT = 1, shown = -1, want = -1, hiTarget = hi.value, glowTarget = 0, visible = false, last = performance.now(), raf = 0;
  const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting), { rootMargin: "200px" });
  io.observe(host);

  const tick = () => {
    raf = requestAnimationFrame(tick);
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!visible || !ready) return;
    const k = reduce ? 1 : 1 - Math.exp(-dt * 5);
    rot += (target - rot) * (reduce ? 1 : 1 - Math.exp(-dt * 3.2)); // scroll progress, damped
    white.value += (whiteT - white.value) * (reduce ? 1 : 1 - Math.exp(-dt * 5));
    // blue highlight: the shown level fades to 0 first, then the new level fades up (no travelling)
    if (want !== shown) {
      if (shown >= 0) { blueU.value[shown] += (0 - blueU.value[shown]) * (reduce ? 1 : 1 - Math.exp(-dt * 14)); if (blueU.value[shown] < 0.03) { blueU.value[shown] = 0; shown = want; } }
      else shown = want;
    } else if (shown >= 0) blueU.value[shown] += (1 - blueU.value[shown]) * (reduce ? 1 : 1 - Math.exp(-dt * 9));
    en += (enT - en) * (reduce ? 1 : 1 - Math.exp(-dt * 5));
    const t = now / 1000;
    for (let i = 0; i < TIERS; i++) {
      // same curve for every level, shifted in time: the top circle starts first, each level below starts a moment after the one above
      const span = 1 / (1 + STAGGER);
      const start = (i / (TIERS - 1)) * (1 - span);
      const q = Math.max(0, Math.min(1, (rot - start) / span));
      // every level follows the SAME rotation curve (one full turn); level i only starts later than level i-1
      // entrance: the levels spin in one after another (top first) while the whole helix grows in
      const qe = Math.max(0, Math.min(1, en * 1.6 - i * 0.075));
      ang.value[i] = smoother(q) * Math.PI * 2 - (1 - smoother(qe)) * Math.PI * 0.9;
    }
    hi.value += (hiTarget - hi.value) * (reduce ? 1 : 1 - Math.exp(-dt * 6));
    glow.value += (glowTarget - glow.value) * (reduce ? 1 : 1 - Math.exp(-dt * 4));
    const ee = 1 - Math.pow(1 - en, 3);
    pivot.scale.setScalar(0.5 + 0.5 * ee);
    pivot.position.y = (1 - ee) * -0.9 + (reduce ? 0 : Math.sin(now / 1600) * 0.06);
    pivot.rotation.x = reduce ? 0 : Math.sin(t * 0.45) * 0.03;
    renderer.render(scene, camera);
  };
  tick();

  return {
    // p: 0..1 through the section; each of the 9 levels makes one full turn, one after the other
    setScroll(p: number) {
      target = p; // 0..1; the per-level angles are derived from it every frame
    },
    setEnter(e: number) {
      enT = Math.max(0, Math.min(1, e));
    },
    highlight(rung: number) {
      whiteT = rung < 0 ? 1 : 0; // intro: the whole helix is white
      want = rung < 0 ? -1 : Math.max(1, Math.min(7, rung + 1)); // rung r is level r + 1 (level 0 and 8 are the end circles)
    },
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      renderer.dispose();
    },
  };
}
(window as unknown as { mountHelix: typeof mountHelix }).mountHelix = mountHelix;
