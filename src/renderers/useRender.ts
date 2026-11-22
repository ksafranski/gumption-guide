"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { renders } from "@/content/_generated/renders";

/** Load an entry's client-only render module (render.ts / render.tsx) on demand. */
export function useRender<T>(id: string): T | null {
  const [mod, setMod] = useState<{ id: string; value: T } | null>(null);
  useEffect(() => {
    let live = true;
    const load = renders[id];
    if (load) load().then((m) => live && setMod({ id, value: (m as { default: T }).default }));
    return () => {
      live = false;
    };
  }, [id]);
  return mod && mod.id === id ? mod.value : null;
}

/** True when the user asked for reduced motion. */
export function prefersReducedMotion() {
  return typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const RM = "(prefers-reduced-motion: reduce)";
/** Reactive prefers-reduced-motion (false during SSR). */
export function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = matchMedia(RM);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => matchMedia(RM).matches,
    () => false,
  );
}
