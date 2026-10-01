// Tiny shared state between the World (WebGL), the Loader and page motion.
type Listener = () => void;

export const world = {
  /** 0 → 1: particles gather from scatter into the brand O (driven by load progress)
   *  1 → 2: the O hands over to the first scene (hero helix) */
  intro: 0,
  /** set when the WebGL world failed or reduced motion is on */
  still: false,
  ready: false,
  /** scroll velocity, written by SmoothScroll */
  velocity: 0,
  listeners: new Set<Listener>(),
  emit() {
    this.listeners.forEach((l) => l());
  },
  on(l: Listener) {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  },
};
