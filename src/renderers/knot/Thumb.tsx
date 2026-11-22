"use client";
import type { KnotEntry } from "@/content/schema";
import { useRender } from "../useRender";
import { KnotFrame } from "./Frame";
import type { KnotRender } from "./types";
import s from "./knot.module.css";

export function KnotThumb({ entry }: { entry: KnotEntry }) {
  const k = useRender<KnotRender>(entry.id);
  return (
    <div className={s.thumb} aria-hidden="true">
      {k && <KnotFrame k={k} step={k.steps.length - 1} ghost={false} plain label="" />}
    </div>
  );
}
