// Particle formations for the World. Every formation returns N positions (world units) plus a
// per-particle alpha. Units: the camera sits at z = CAM_Z looking at the origin, so at z = 0 the
// visible area is ctx.w × ctx.h. Helpers map viewport fractions (fx, fy) to world space so DOM
// elements placed with vw/vh line up with the particles.

export const CAM_Z = 12;
export const FOV = 35;

export type Ctx = { n: number; w: number; h: number; mobile: boolean };
export type Formation = {
  pos: Float32Array;
  alpha: Float32Array;
  center: [number, number, number];
  spin: number; // radians per second
  axis: 0 | 1 | 2; // 0 = y, 1 = z, 2 = x
};

export const fx = (c: Ctx, f: number) => (f - 0.5) * c.w;
export const fy = (c: Ctx, f: number) => (0.5 - f) * c.h;

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const gauss = (r: () => number) => {
  const u = Math.max(1e-6, r());
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r());
};

function make(c: Ctx, center: [number, number, number] = [0, 0, 0], spin = 0, axis: 0 | 1 | 2 = 0): Formation {
  return { pos: new Float32Array(c.n * 3), alpha: new Float32Array(c.n).fill(1), center, spin, axis };
}

/** Size of the hero dial / generic "O" in world units */
export const dialRadius = (c: Ctx) => (c.mobile ? c.w * 0.4 : Math.min(c.w * 0.2, c.h * 0.36));

/** Scatter: loading state, wide shallow cloud */
export function scatter(c: Ctx): Formation {
  const f = make(c);
  const r = rng(1);
  for (let i = 0; i < c.n; i++) {
    f.pos[i * 3] = (r() - 0.5) * c.w * 1.3;
    f.pos[i * 3 + 1] = (r() - 0.5) * c.h * 1.3;
    f.pos[i * 3 + 2] = (r() - 0.5) * 6;
    f.alpha[i] = r() * 0.6;
  }
  return f;
}

/** The O of the mark with its inner helix of rungs (the brandmark, made of points) */
export function markO(c: Ctx, cx: number, cy: number, R: number, spin = 0): Formation {
  const f = make(c, [cx, cy, 0], spin, 0);
  const r = rng(2);
  const ringN = Math.floor(c.n * 0.55);
  for (let i = 0; i < c.n; i++) {
    let x: number, y: number, z: number;
    if (i < ringN) {
      const a = r() * Math.PI * 2;
      const rr = R * (1 + gauss(r) * 0.012);
      x = Math.cos(a) * rr;
      y = Math.sin(a) * rr;
      z = gauss(r) * 0.02;
    } else {
      // 9 rungs like the mark: widths follow a helix silhouette
      const k = Math.floor(r() * 9);
      const ty = (k / 8 - 0.5) * 2 * R * 0.62;
      const half = R * 0.36 * Math.abs(Math.cos((k / 8) * Math.PI * 1.15 + 0.4)) + R * 0.06;
      const u = r() * 2 - 1;
      x = u * half;
      y = ty + gauss(r) * 0.006;
      z = Math.sqrt(Math.max(0, half * half - x * x)) * (r() < 0.5 ? -1 : 1) * 0.6;
    }
    f.pos[i * 3] = cx + x;
    f.pos[i * 3 + 1] = cy + y;
    f.pos[i * 3 + 2] = z;
  }
  return f;
}

/** Double helix (vertical), DNA of the mark scaled up */
export function helix(c: Ctx, cx: number, cy: number, radius: number, height: number, turns: number, spin: number): Formation {
  const f = make(c, [cx, cy, 0], spin, 0);
  const r = rng(3);
  const strandN = Math.floor(c.n * 0.58);
  const rungs = Math.round(turns * 9);
  for (let i = 0; i < c.n; i++) {
    let x: number, y: number, z: number;
    if (i < strandN) {
      const t = r();
      const s = i % 2 ? Math.PI : 0;
      const a = t * Math.PI * 2 * turns + s;
      const j = gauss(r) * radius * 0.035;
      x = Math.cos(a) * (radius + j);
      z = Math.sin(a) * (radius + j);
      y = (t - 0.5) * height + gauss(r) * 0.01;
    } else {
      const k = Math.floor(r() * rungs);
      const t = (k + 0.5) / rungs;
      const a = t * Math.PI * 2 * turns;
      const u = r() * 2 - 1;
      x = Math.cos(a) * radius * u;
      z = Math.sin(a) * radius * u;
      y = (t - 0.5) * height + gauss(r) * 0.006;
      f.alpha[i] = 0.75;
    }
    f.pos[i * 3] = cx + x;
    f.pos[i * 3 + 1] = cy + y;
    f.pos[i * 3 + 2] = z;
  }
  return f;
}

/** Horizontal helix along x (timeline) */
export function helixX(c: Ctx, cy: number, radius: number, length: number, turns: number, spin: number): Formation {
  const f = make(c, [0, cy, 0], spin, 2);
  const r = rng(4);
  const strandN = Math.floor(c.n * 0.62);
  const rungs = Math.round(turns * 6);
  for (let i = 0; i < c.n; i++) {
    let x: number, y: number, z: number;
    if (i < strandN) {
      const t = r();
      const s = i % 2 ? Math.PI : 0;
      const a = t * Math.PI * 2 * turns + s;
      x = (t - 0.5) * length;
      y = Math.cos(a) * radius * (1 + gauss(r) * 0.03);
      z = Math.sin(a) * radius * (1 + gauss(r) * 0.03);
    } else {
      const k = Math.floor(r() * rungs);
      const t = (k + 0.5) / rungs;
      const a = t * Math.PI * 2 * turns;
      const u = r() * 2 - 1;
      x = (t - 0.5) * length;
      y = Math.cos(a) * radius * u;
      z = Math.sin(a) * radius * u;
      f.alpha[i] = 0.7;
    }
    f.pos[i * 3] = x;
    f.pos[i * 3 + 1] = cy + y;
    f.pos[i * 3 + 2] = z;
  }
  return f;
}

/** Desert: a dune field receding to the horizon */
export function dunes(c: Ctx, plots = false): Formation {
  const f = make(c);
  const r = rng(plots ? 6 : 5);
  const floor = -c.h * 0.28;
  const tan = Math.tan(((FOV / 2) * Math.PI) / 180);
  for (let i = 0; i < c.n; i++) {
    // depth distributed so screen density is roughly even
    const d = Math.pow(r(), 1.6);
    const z = 5 - d * 46;
    const halfW = (CAM_Z - z) * tan * (c.w / c.h) * 1.08;
    let x = (r() * 2 - 1) * halfW;
    let y = floor;
    let a = 1;
    if (!plots) {
      y += Math.sin(x * 0.55 + z * 0.22) * 0.22 + Math.sin(x * 0.17 - z * 0.41) * 0.35 + Math.cos(z * 0.13) * 0.25;
    } else {
      // trial plots: rectangles separated by roads, crop rows inside
      const cw = 2.6;
      const cd = 3.4;
      const gx = ((x % cw) + cw) % cw;
      const gz = ((z % cd) + cd) % cd;
      const road = gx < 0.32 || gz < 0.42;
      if (road) a = 0.08;
      else {
        // snap to crop rows
        const rows = 0.18;
        x = Math.round(x / rows) * rows + gauss(r) * 0.01;
        a = 0.95;
      }
      y += Math.sin(z * 0.05) * 0.05;
    }
    f.pos[i * 3] = x;
    f.pos[i * 3 + 1] = y;
    f.pos[i * 3 + 2] = z;
    f.alpha[i] = a * (0.35 + 0.65 * (1 - d));
  }
  return f;
}

/** Sparse dust with a few brighter motes */
export function dust(c: Ctx, seed = 7, density = 0.4): Formation {
  const f = make(c, [0, 0, 0], 0.02, 0);
  const r = rng(seed);
  for (let i = 0; i < c.n; i++) {
    f.pos[i * 3] = (r() - 0.5) * c.w * 1.4;
    f.pos[i * 3 + 1] = (r() - 0.5) * c.h * 1.4;
    f.pos[i * 3 + 2] = (r() - 0.5) * 10 - 2;
    f.alpha[i] = r() < density ? 0.15 + r() * 0.5 : 0;
  }
  return f;
}

/** Three separate islands (Research / Technology / Farming), aligned with DOM lenses */
export function islands(c: Ctx, centers: [number, number][], radius: number): Formation {
  const f = make(c);
  const r = rng(8);
  for (let i = 0; i < c.n; i++) {
    const k = i % centers.length;
    const [cx, cy] = centers[k];
    // fibonacci-ish shell with thickness
    const u = r() * 2 - 1;
    const th = r() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    const rr = radius * (1.08 + Math.abs(gauss(r)) * 0.22);
    f.pos[i * 3] = cx + s * Math.cos(th) * rr;
    f.pos[i * 3 + 1] = cy + u * rr;
    f.pos[i * 3 + 2] = s * Math.sin(th) * rr - 0.5;
    f.alpha[i] = 0.25 + r() * 0.75;
  }
  return f;
}

/** One continuous line: implementation */
export function line(c: Ctx, cy: number): Formation {
  const f = make(c);
  const r = rng(9);
  for (let i = 0; i < c.n; i++) {
    const t = r();
    f.pos[i * 3] = (t - 0.5) * c.w * 1.15;
    f.pos[i * 3 + 1] = cy + gauss(r) * 0.012 * (1 + Math.sin(t * 40) * 0.5);
    f.pos[i * 3 + 2] = gauss(r) * 0.05;
    f.alpha[i] = 0.5 + r() * 0.5;
  }
  return f;
}

/** Orbit: a ring of points around a lens */
export function orbit(c: Ctx, cx: number, cy: number, R: number, spin: number): Formation {
  const f = make(c, [cx, cy, 0], spin, 1);
  const r = rng(10);
  for (let i = 0; i < c.n; i++) {
    const a = r() * Math.PI * 2;
    const band = r();
    const rr = R * (1.06 + band * band * 0.55);
    f.pos[i * 3] = cx + Math.cos(a) * rr;
    f.pos[i * 3 + 1] = cy + Math.sin(a) * rr;
    f.pos[i * 3 + 2] = gauss(r) * 0.15;
    f.alpha[i] = (1 - band) * 0.9 + 0.05;
  }
  return f;
}

/** Benchmark: an exact lattice */
export function lattice(c: Ctx): Formation {
  const f = make(c);
  const cols = Math.ceil(Math.sqrt(c.n * (c.w / c.h)));
  const rows = Math.ceil(c.n / cols);
  for (let i = 0; i < c.n; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    f.pos[i * 3] = (col / (cols - 1) - 0.5) * c.w * 1.02;
    f.pos[i * 3 + 1] = (row / (rows - 1) - 0.5) * c.h * 1.02;
    f.pos[i * 3 + 2] = -1;
    f.alpha[i] = 0.55;
  }
  return f;
}

/** Ecosystem: eight nodes on an orbit, each wired to one centre */
export function constellation(c: Ctx, cx: number, cy: number, R: number, nodes = 8): Formation {
  const f = make(c, [cx, cy, 0], 0, 1);
  const r = rng(11);
  for (let i = 0; i < c.n; i++) {
    const kind = r();
    const k = Math.floor(r() * nodes);
    const ang = (k / nodes) * Math.PI * 2 - Math.PI / 2;
    const nx = Math.cos(ang) * R;
    const ny = Math.sin(ang) * R;
    let x: number, y: number, z = gauss(r) * 0.04;
    if (kind < 0.3) {
      // node clusters
      const rr = R * 0.07 * Math.sqrt(r());
      const a = r() * Math.PI * 2;
      x = nx + Math.cos(a) * rr;
      y = ny + Math.sin(a) * rr;
    } else if (kind < 0.45) {
      // core
      const rr = R * 0.1 * Math.sqrt(r());
      const a = r() * Math.PI * 2;
      x = Math.cos(a) * rr;
      y = Math.sin(a) * rr;
    } else if (kind < 0.78) {
      // spokes
      const t = r();
      x = nx * t;
      y = ny * t;
      f.alpha[i] = 0.55;
    } else {
      // orbit ring
      const a = r() * Math.PI * 2;
      x = Math.cos(a) * R;
      y = Math.sin(a) * R;
      f.alpha[i] = 0.6;
    }
    f.pos[i * 3] = cx + x;
    f.pos[i * 3 + 1] = cy + y;
    f.pos[i * 3 + 2] = z;
  }
  return f;
}

/** Globe: fibonacci sphere */
export function globe(c: Ctx, cx: number, cy: number, R: number): Formation {
  const f = make(c, [cx, cy, 0], 0.12, 0);
  const g = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < c.n; i++) {
    const y = 1 - (i / (c.n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = g * i;
    f.pos[i * 3] = cx + Math.cos(th) * rad * R;
    f.pos[i * 3 + 1] = cy + y * R;
    f.pos[i * 3 + 2] = Math.sin(th) * rad * R;
    f.alpha[i] = 0.8;
  }
  return f;
}
