"use client";
import { useCallback, useRef } from "react";
import type { MechanismEntry } from "@/content/schema";
import { useRender } from "../useRender";
import { drawGraph, render, sampleCurve } from "./draw";
import type { MechanismRender } from "./types";
import { useRedraw } from "./useCanvas";
import s from "./mechanism.module.css";

const KEYS = [
  { t: 0, label: "0°" },
  { t: Math.PI / 2, label: "90°" },
  { t: Math.PI, label: "180°" },
  { t: (3 * Math.PI) / 2, label: "270°" },
];

/** Four keyframes plus the motion graph. */
export function MechanismPrint({ entry }: { entry: MechanismEntry }) {
  const mv = useRender<MechanismRender>(entry.id);
  const wrap = useRef<HTMLDivElement>(null);
  const paint = useCallback(() => {
    if (!mv || !wrap.current) return;
    const cvs = wrap.current.querySelectorAll("canvas");
    KEYS.forEach((k, i) => render(cvs[i], mv.draw, k.t));
    drawGraph(cvs[4], sampleCurve(mv.output), -1);
  }, [mv]);
  useRedraw(paint, wrap);
  return (
    <div ref={wrap} className={s.print}>
      <div className={s.frames}>
        {KEYS.map((k) => (
          <figure key={k.label}>
            <canvas role="img" aria-label={`${entry.title} at input ${k.label}`} />
            <figcaption>{k.label}</figcaption>
          </figure>
        ))}
      </div>
      <figure className={s.printGraph}>
        <canvas aria-hidden="true" />
        <figcaption>{entry.outLabel} over one input turn</figcaption>
      </figure>
    </div>
  );
}
