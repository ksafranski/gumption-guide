"use client";
import type { ReactNode } from "react";
import { useRender } from "../useRender";
import s from "./illustration.module.css";

/**
 * An entry's render.tsx for categories without a live diagram: a default-exported
 * hook-free function returning a static SVG drawing (viewBox 0 0 160 120).
 */
export type Illustration = () => ReactNode;

/** Card thumbnail showing the entry's illustration once its module loads. */
export function IllustrationThumb({ id }: { id: string }) {
  const art = useRender<Illustration>(id);
  return (
    <div className={s.thumb} aria-hidden="true">
      {art?.()}
    </div>
  );
}

/** Large framed illustration for the entry page (categories without a live diagram). */
export function IllustrationFigure({ id }: { id: string }) {
  const art = useRender<Illustration>(id);
  return (
    <figure className={s.figure} aria-hidden="true">
      {art?.()}
    </figure>
  );
}
