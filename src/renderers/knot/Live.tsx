"use client";
import { useState } from "react";
import type { KnotEntry } from "@/content/schema";
import { useRender } from "../useRender";
import { KnotFrame } from "./Frame";
import type { KnotRender } from "./types";
import s from "./knot.module.css";

export function KnotLive({ entry }: { entry: KnotEntry }) {
  const k = useRender<KnotRender>(entry.id);
  const n = entry.steps.length;
  const [i, setI] = useState(0);
  const go = (j: number) => setI(Math.max(0, Math.min(n - 1, j)));
  return (
    <figure
      className={s.live}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
    >
      <div className={s.viewport}>
        {k ? (
          <KnotFrame
            k={k}
            step={i}
            label={`${entry.title}, step ${i + 1}: ${entry.steps[i].caption}`}
          />
        ) : (
          <div className={s.blank} />
        )}
        <span className={s.stepNo} aria-hidden="true">
          {String(i + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
        </span>
      </div>
      <figcaption className={s.caption} aria-live="polite">
        <b>Step {i + 1}.</b> {entry.steps[i].caption}
      </figcaption>
      <div className={s.controls}>
        <button
          type="button"
          className={s.btn}
          onClick={() => go(i - 1)}
          disabled={i === 0}
          aria-label="Previous step"
        >
          <svg viewBox="0 0 14 14" aria-hidden="true">
            <path d="M9 2L4 7l5 5" />
          </svg>
        </button>
        <input
          type="range"
          min={1}
          max={n}
          value={i + 1}
          onChange={(e) => go(+e.target.value - 1)}
          aria-label="Step"
          className={s.scrub}
        />
        <button
          type="button"
          className={s.btn}
          onClick={() => go(i + 1)}
          disabled={i === n - 1}
          aria-label="Next step"
        >
          <svg viewBox="0 0 14 14" aria-hidden="true">
            <path d="M5 2l5 5-5 5" />
          </svg>
        </button>
      </div>
      <p className={s.legend}>
        <span>
          <i className={s.swNew} /> This step
        </span>
        <span>
          <i className={s.swGhost} /> Next move
        </span>
      </p>
    </figure>
  );
}
