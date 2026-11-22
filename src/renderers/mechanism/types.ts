import type { Draw } from "./draw";

/** What a mechanism's render.ts default-exports. Client-only. */
export type MechanismRender = {
  draw: (d: Draw, t: number) => void;
  output: (t: number) => number;
  /** Animation speed multiplier (default 1). */
  speed?: number;
};
