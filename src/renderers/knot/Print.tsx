"use client";
import type { KnotEntry } from "@/content/schema";
import { useRender } from "../useRender";
import { KnotFrame } from "./Frame";
import type { KnotRender } from "./types";
import s from "./knot.module.css";

export function KnotPrint({ entry }: { entry: KnotEntry }) {
  const k = useRender<KnotRender>(entry.id);
  return (
    <ol className={s.printGrid}>
      {entry.steps.map((st, i) => (
        <li key={i}>
          {k && <KnotFrame k={k} step={i} ghost={false} label={`Step ${i + 1}`} />}
          <p>
            <b>{i + 1}.</b> {st.caption}
          </p>
        </li>
      ))}
    </ol>
  );
}
