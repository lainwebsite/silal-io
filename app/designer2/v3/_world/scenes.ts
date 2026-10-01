import {
  type Ctx,
  type Formation,
  constellation,
  dialRadius,
  dunes,
  dust,
  fx,
  fy,
  globe,
  helix,
  helixX,
  islands,
  lattice,
  line,
  markO,
  orbit,
} from "./formations";

export type Palette = {
  top: string;
  mid: string;
  bot: string;
  glow: string;
  glowAmt: number;
  glowPos: [number, number]; // uv, y up
  dot: string;
  accent: string;
  fg: string; // text colour
  accentText: string; // highlighted words
  dark: number; // 0 light, 1 dark (nav logo, cursor)
  dotAlpha: number;
  agitate?: number;
};

const light = { fg: "#595453", accentText: "#3CA7D2", dark: 0, dotAlpha: 0.9 };
const darkTxt = { fg: "#FFFFFF", dark: 1, dotAlpha: 0.95 };

export const palettes: Record<string, Palette> = {
  sky: { top: "#CBE6F2", mid: "#EDF5F8", bot: "#FFFFFF", glow: "#3CA7D2", glowAmt: 0.16, glowPos: [0.78, 0.55], dot: "#595453", accent: "#3CA7D2", ...light },
  haze: { top: "#DCEBF2", mid: "#F2F5F6", bot: "#F1F1F1", glow: "#3CA7D2", glowAmt: 0.08, glowPos: [0.5, 0.45], dot: "#595453", accent: "#3CA7D2", ...light },
  mist: { top: "#F1F1F1", mid: "#F6F6F6", bot: "#F1F1F1", glow: "#3CA7D2", glowAmt: 0.05, glowPos: [0.5, 0.5], dot: "#595453", accent: "#3CA7D2", ...light, dotAlpha: 0.7 },
  field: { top: "#E7F2EC", mid: "#F4F7F5", bot: "#F1F1F1", glow: "#00A16B", glowAmt: 0.08, glowPos: [0.5, 0.35], dot: "#015825", accent: "#00A16B", ...light },
  blue: { top: "#45AFD8", mid: "#3CA7D2", bot: "#2F95C0", glow: "#FFFFFF", glowAmt: 0.12, glowPos: [0.5, 0.5], dot: "#FFFFFF", accent: "#FFFFFF", ...darkTxt, accentText: "#FFFFFF" },
  light: { top: "#F7F9FA", mid: "#FFFFFF", bot: "#F1F1F1", glow: "#3CA7D2", glowAmt: 0.07, glowPos: [0.75, 0.5], dot: "#595453", accent: "#3CA7D2", ...light, dotAlpha: 0.75 },
  dusk: { top: "#46413F", mid: "#595453", bot: "#5E5653", glow: "#EB5D3E", glowAmt: 0.22, glowPos: [0.5, -0.1], dot: "#F1F1F1", accent: "#F08104", ...darkTxt, accentText: "#3CA7D2", agitate: 1 },
  bench: { top: "#595453", mid: "#595453", bot: "#4C4746", glow: "#3CA7D2", glowAmt: 0.12, glowPos: [0.5, 0.5], dot: "#F1F1F1", accent: "#3CA7D2", ...darkTxt, accentText: "#3CA7D2", dotAlpha: 0.5 },
  clear: { top: "#E8F4F9", mid: "#F7FAFB", bot: "#FFFFFF", glow: "#3CA7D2", glowAmt: 0.1, glowPos: [0.66, 0.48], dot: "#595453", accent: "#3CA7D2", ...light },
  green: { top: "#014A20", mid: "#015825", bot: "#00704A", glow: "#70B62B", glowAmt: 0.22, glowPos: [0.72, 0.5], dot: "#FFFFFF", accent: "#70B62B", ...darkTxt, accentText: "#9FD36B" },
  sprout: { top: "#EEF5F0", mid: "#FFFFFF", bot: "#F1F1F1", glow: "#00A16B", glowAmt: 0.06, glowPos: [0.8, 0.6], dot: "#015825", accent: "#00A16B", ...light, dotAlpha: 0.6 },
  journey: { top: "#E3F1F7", mid: "#F6FAFB", bot: "#F1F1F1", glow: "#3CA7D2", glowAmt: 0.1, glowPos: [0.5, 0.2], dot: "#595453", accent: "#3CA7D2", ...light },
  night: { top: "#3F3A39", mid: "#595453", bot: "#595453", glow: "#3CA7D2", glowAmt: 0.3, glowPos: [0.68, 0.5], dot: "#B8E0F0", accent: "#3CA7D2", ...darkTxt, accentText: "#3CA7D2" },
  dawn: { top: "#D6ECF6", mid: "#F2F8FB", bot: "#FFFFFF", glow: "#3CA7D2", glowAmt: 0.14, glowPos: [0.5, 0.5], dot: "#3CA7D2", accent: "#595453", ...light, dotAlpha: 0.85 },
  footer: { top: "#595453", mid: "#595453", bot: "#4E4948", glow: "#3CA7D2", glowAmt: 0.14, glowPos: [0.85, 0.9], dot: "#B8E0F0", accent: "#3CA7D2", ...darkTxt, accentText: "#3CA7D2", dotAlpha: 0.5 },
};

export type SceneDef = { palette: keyof typeof palettes; build: (c: Ctx) => Formation };

/* Layout constants shared with CSS (keep in sync with about.module.css) */
export const layout = {
  heroDial: (c: Ctx) => (c.mobile ? { x: 0.5, y: 0.66 } : { x: 0.7, y: 0.54 }),
  islands: (c: Ctx) => (c.mobile ? { ys: 0.5, r: c.w * 0.12 } : { ys: 0.46, r: Math.min(c.w * 0.085, c.h * 0.15) }),
  orbit: (c: Ctx) => (c.mobile ? { x: 0.5, y: 0.36, r: c.w * 0.36 } : { x: 0.7, y: 0.5, r: Math.min(c.w * 0.18, c.h * 0.32) }),
  ring: (c: Ctx) => Math.min(c.w * 0.16, c.h * 0.26) * (c.mobile ? 1.6 : 1),
  constellation: (c: Ctx) => (c.mobile ? { x: 0.5, y: 0.6, r: c.w * 0.34 } : { x: 0.66, y: 0.52, r: Math.min(c.w * 0.16, c.h * 0.3) }),
  journeyLens: (c: Ctx) => (c.mobile ? { x: 0.5, y: 0.34, r: c.w * 0.3 } : { x: 0.7, y: 0.42, r: Math.min(c.w * 0.15, c.h * 0.25) }),
  globe: (c: Ctx) => (c.mobile ? { x: 0.5, y: 0.66, r: c.w * 0.38 } : { x: 0.7, y: 0.52, r: Math.min(c.w * 0.2, c.h * 0.34) }),
};

export const scenes: Record<string, SceneDef> = {
  hero: {
    palette: "sky",
    build: (c) => {
      const d = layout.heroDial(c);
      const R = dialRadius(c);
      return helix(c, fx(c, d.x), fy(c, d.y), R * 0.34, R * 1.5, 2.2, 0.35);
    },
  },
  belief: { palette: "haze", build: (c) => dunes(c) },
  question: { palette: "mist", build: (c) => dust(c, 7, 0.35) },
  origin: { palette: "mist", build: (c) => dust(c, 12, 0.25) },
  pattern: {
    palette: "light",
    build: (c) => {
      const l = layout.islands(c);
      return islands(c, [0.2, 0.5, 0.8].map((x) => [fx(c, x), fy(c, l.ys)] as [number, number]), l.r);
    },
  },
  lack: { palette: "light", build: (c) => line(c, fy(c, 0.5)) },
  land: { palette: "field", build: (c) => dunes(c, true) },
  creation: { palette: "blue", build: (c) => markO(c, 0, 0, layout.ring(c)) },
  place: {
    palette: "light",
    build: (c) => {
      const o = layout.orbit(c);
      return orbit(c, fx(c, o.x), fy(c, o.y), o.r, 0.05);
    },
  },
  today: { palette: "light", build: (c) => dust(c, 19, 0.2) },
  people: { palette: "light", build: (c) => dust(c, 21, 0.18) },
  quote: {
    palette: "haze",
    build: (c) => markO(c, 0, 0, layout.ring(c) * 1.9),
  },
  why: { palette: "dusk", build: (c) => dunes(c) },
  bench: { palette: "bench", build: (c) => lattice(c) },
  different: {
    palette: "clear",
    build: (c) => {
      const o = layout.constellation(c);
      return constellation(c, fx(c, o.x), fy(c, o.y), o.r);
    },
  },
  mission: {
    palette: "green",
    build: (c) => (c.mobile ? helix(c, fx(c, 0.5), 0, c.w * 0.16, c.h * 1.2, 3, 0.25) : helix(c, fx(c, 0.74), 0, c.w * 0.07, c.h * 1.25, 3.2, 0.25)),
  },
  principles: { palette: "sprout", build: (c) => dust(c, 33, 0.22) },
  journey: { palette: "journey", build: (c) => helixX(c, fy(c, c.mobile ? 0.88 : 0.82), c.h * 0.06, c.w * 1.25, 5, 0.3) },
  ahead: {
    palette: "night",
    build: (c) => {
      const g = layout.globe(c);
      return globe(c, fx(c, g.x), fy(c, g.y), g.r);
    },
  },
  finale: { palette: "dawn", build: (c) => markO(c, 0, 0, layout.ring(c) * 0.62) },
  footer: { palette: "footer", build: (c) => dust(c, 44, 0.2) },
};
