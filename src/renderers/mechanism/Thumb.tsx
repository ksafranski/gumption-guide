"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MechanismEntry } from "@/content/schema";
import { prefersReducedMotion, useRender } from "../useRender";
import { render } from "./draw";
import type { MechanismRender } from "./types";
import { useRedraw } from "./useCanvas";
import s from "./mechanism.module.css";

/** Static frame; animates while hovered. */
export function MechanismThumb({ entry }: { entry: MechanismEntry }) {
  const mv = useRender<MechanismRender>(entry.id);
  const ref = useRef<HTMLCanvasElement>(null);
  const t = useRef(0.6);
  const [hot, setHot] = useState(false);
  const paint = useCallback(() => {
    if (mv && ref.current) render(ref.current, mv.draw, t.current);
  }, [mv]);
  useRedraw(paint, ref);

  useEffect(() => {
    if (!hot || !mv || prefersReducedMotion()) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      t.current += Math.min(0.05, (now - last) / 1000) * 1.1 * (mv.speed ?? 1);
      last = now;
      paint();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [hot, mv, paint]);

  return (
    <canvas
      ref={ref}
      className={s.thumb}
      aria-hidden="true"
      onPointerEnter={() => setHot(true)}
      onPointerLeave={() => setHot(false)}
    />
  );
}
