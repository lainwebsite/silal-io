"use client";

import { type MouseEvent, type ReactNode, useEffect, useState, useSyncExternalStore, ViewTransition } from "react";

/*
 * Card → release page morph (View Transitions, through React's <ViewTransition>; Next runs every route
 * change inside one). Only the clicked card's frame is named, so the same release can sit on a page
 * twice (latest + feed) and only that copy flies. The release page names its frame `rel-<slug>`
 * always; the two snapshots pair and the browser moves / resizes one into the other while the rest of
 * the page crossfades. Frames without a photo (colour fields) name their title and mark too, so those
 * travel to their own places inside the bigger frame. Browsers without view transitions just navigate.
 */

type Armed = { slug: string; scope: string; src?: string; face: boolean } | null;
let armed: Armed = null;
const subs = new Set<() => void>();
const set = (a: Armed) => {
  armed = a;
  subs.forEach((f) => f());
};
const subscribe = (f: () => void) => {
  subs.add(f);
  return () => subs.delete(f);
};

/** Name for a card's frame: only while it is the card being opened. */
export function useMorphName(slug: string, scope: string) {
  const a = useSyncExternalStore(
    subscribe,
    () => armed,
    () => null,
  );
  return a && a.slug === slug && a.scope === scope ? `rel-${slug}` : undefined;
}

/** Arm the clicked card (plain left clicks only; new-tab clicks just open). */
export function armMorph(e: MouseEvent<HTMLElement>, slug: string, scope: string, frame?: Element | null) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const root = frame ?? e.currentTarget;
  const img = root.querySelector<HTMLImageElement>("img");
  set({ slug, scope, src: img?.currentSrc || undefined, face: !!root.querySelector("[data-face]") });
}

/** Wrap a group of cards rendered on the server: a click on a link inside [data-morph-slug] arms it. */
export function MorphArea({ scope, children }: { scope: string; children: ReactNode }) {
  return (
    <div
      style={{ display: "contents" }}
      onClickCapture={(e) => {
        const t = e.target as Element;
        const el = t.closest<HTMLElement>("[data-morph-slug]");
        if (el && t.closest("a")) armMorph(e as MouseEvent<HTMLElement>, el.dataset.morphSlug!, scope, el);
      }}
    >
      {children}
    </div>
  );
}

/** A card frame in a server-rendered list (MorphArea arms it). */
export function MorphFrame({ slug, scope, children }: { slug: string; scope: string; children: ReactNode }) {
  return (
    <ViewTransition name={useMorphName(slug, scope)} share="d6-frame" default="none">
      {children}
    </ViewTransition>
  );
}

/** Title / mark inside a colour-field frame: flies on its own, to its place in the other frame. */
export function MorphPart({ name, children }: { name?: string; children: ReactNode }) {
  return (
    <ViewTransition name={name} share="d6-part" default="none">
      {children}
    </ViewTransition>
  );
}

/**
 * The release page's frame: always named, and it shows what the clicked card showed, so both ends of
 * the morph hold the same content (a colour-field card opens on its colour field, the photo of the
 * "Latest release" card opens on the photo). Opened directly: the colour field if the release has one.
 * Disarms once the page is in.
 */
export function MorphTarget({ slug, face, children }: { slug: string; face?: ReactNode; children: ReactNode }) {
  const [showFace] = useState(() => face != null && (armed && armed.slug === slug ? armed.face : true));
  useEffect(() => set(null), []);
  return (
    <ViewTransition name={`rel-${slug}`} share="d6-frame" default="none">
      {showFace ? face : children}
    </ViewTransition>
  );
}

/**
 * Under the release photo: the exact image the card was showing (already in the browser's cache), so
 * the frame is never empty while the larger file loads.
 */
export function MorphStandIn({ slug, className }: { slug: string; className?: string }) {
  const [src] = useState(() => (armed && armed.slug === slug ? armed.src : undefined));
  // eslint-disable-next-line @next/next/no-img-element
  return src ? <img src={src} alt="" className={className} aria-hidden decoding="sync" /> : null;
}

// Global by nature (view-transition pseudo-elements live on the document), so a style tag, not a module.
const css = `
::view-transition { pointer-events: none; }
::view-transition-old(root), ::view-transition-new(root) { animation-duration: .45s; }
::view-transition-group(.d6-frame) {
  animation-duration: .8s;
  animation-timing-function: cubic-bezier(.22, 1, .36, 1);
  overflow: hidden;
  border-radius: 6px;
  z-index: 50;
}
/* the old frame stays solid underneath while the new one fades in over it: no see-through dip */
::view-transition-old(.d6-frame), ::view-transition-new(.d6-frame) {
  height: 100%;
  object-fit: cover;
  mix-blend-mode: normal;
}
::view-transition-old(.d6-frame) { animation: none; }
::view-transition-new(.d6-frame) { animation: d6-in .45s .1s cubic-bezier(.4, 0, .2, 1) both; }
@keyframes d6-in { from { opacity: 0; } }
::view-transition-group(.d6-part) {
  animation-duration: .8s;
  animation-timing-function: cubic-bezier(.22, 1, .36, 1);
  z-index: 51;
}
::view-transition-old(.d6-part), ::view-transition-new(.d6-part) { height: 100%; mix-blend-mode: normal; }
::view-transition-old(.d6-part) { animation: d6-out .4s .05s cubic-bezier(.4, 0, .2, 1) both; }
@keyframes d6-out { to { opacity: 0; } }
::view-transition-new(.d6-part) { animation: d6-in .45s .1s cubic-bezier(.4, 0, .2, 1) both; }
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation-duration: 0s !important; }
}
`;
export function MorphStyles() {
  return (
    <style href="d6-morph" precedence="default">
      {css}
    </style>
  );
}
