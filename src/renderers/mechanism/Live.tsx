"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MechanismEntry } from "@/content/schema";
import { useReducedMotion, useRender } from "../useRender";
import { TAU, drawGraph, mod, render, sampleCurve } from "./draw";
import type { MechanismRender } from "./types";
import { useRedraw } from "./useCanvas";
import s from "./mechanism.module.css";

const BASE = 1.1; // radians per second at 1× speed

export function MechanismLive({ entry }: { entry: MechanismEntry }) {
  const mv = useRender<MechanismRender>(entry.id);
  const stage = useRef<HTMLCanvasElement>(null);
  const graph = useRef<HTMLCanvasElement>(null);
  const t = useRef(0.6);
  const reduced = useReducedMotion();
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null);
  const playing = !!mv && (userPlaying ?? !reduced);
  const toggle = () => setUserPlaying(!playing);
  const [deg, setDeg] = useState(34);
  const [speed, setSpeed] = useState(1);
  const curve = useMemo(() => (mv ? sampleCurve(mv.output) : null), [mv]);

  const paint = useCallback(() => {
    if (!mv || !stage.current) return;
    render(stage.current, mv.draw, t.current);
    if (graph.current && curve) drawGraph(graph.current, curve, mod(t.current, TAU) / TAU);
  }, [mv, curve]);
  useRedraw(paint, stage);

  useEffect(() => {
    if (!playing || !mv) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t.current += dt * BASE * speed * (mv.speed ?? 1);
      paint();
      setDeg(Math.round((mod(t.current, TAU) / TAU) * 360));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [playing, speed, mv, paint]);

  const scrub = (v: number) => {
    setUserPlaying(false);
    t.current = (v / 360) * TAU;
    setDeg(v);
    paint();
  };

  return (
    <figure className={s.live}>
      <div className={s.viewport}>
        <canvas
          ref={stage}
          className={s.stage}
          role="img"
          aria-label={`Animated diagram: ${entry.title}. ${entry.summary}`}
          onClick={toggle}
        />
      </div>
      <div className={s.controls}>
        <button
          type="button"
          className={s.btn}
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 2h3v10H3zM8 2h3v10H8z" />
            </svg>
          ) : (
            <svg viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 1.5l9 5.5-9 5.5z" />
            </svg>
          )}
        </button>
        <label className={`${s.ctl} ${s.grow}`}>
          <span className="visually-hidden">Input angle</span>
          <input
            type="range"
            min={0}
            max={360}
            step={1}
            value={deg}
            onChange={(e) => scrub(+e.target.value)}
          />
          <output>{deg}°</output>
        </label>
        <label className={`${s.ctl} ${s.speed}`}>
          Speed
          <input
            type="range"
            min={0.1}
            max={2.5}
            step={0.05}
            value={speed}
            onChange={(e) => setSpeed(+e.target.value)}
          />
        </label>
      </div>
      <div className={s.graph}>
        <div className={s.glabel}>
          <span>{entry.outLabel}</span>
          <span>one input turn →</span>
        </div>
        <canvas ref={graph} aria-hidden="true" />
      </div>
      <figcaption className={s.legend}>
        <span>
          <i className={s.swIn} /> Input
        </span>
        <span>
          <i className={s.swOut} /> Output
        </span>
        <span>
          <i className={s.swGr} /> Fixed frame
        </span>
      </figcaption>
    </figure>
  );
}
