import type { ReactNode } from "react";

/** One stretch of rope, in the order you'd tie it. */
export type Seg = {
  d: string;
  /** Passes behind the post/spar (drawn before `base`). */
  back?: boolean;
  /** Draw order among front segments (default: index). Lower = underneath. */
  z?: number;
  /** Starts a separate rope (bends): not joined to the previous segment. */
  start?: boolean;
};

/** What a knot's render.tsx default-exports. Client-only. */
export type KnotRender = {
  viewBox?: string;
  /** Post, spar, ring... drawn between back and front rope. */
  base?: ReactNode;
  segs: Seg[];
  /**
   * One per entry step: how many segs are shown after this step,
   * plus optional extra marks (arrows, labels).
   */
  steps: { show: number; extra?: ReactNode }[];
};
