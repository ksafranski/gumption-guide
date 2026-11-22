"use client";
import { useEffect } from "react";
import { readColors } from "./draw";

/** Re-read theme colors and redraw when the color scheme or size changes. */
export function useRedraw(redraw: () => void, el: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    readColors();
    redraw();
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onScheme = () => {
      readColors();
      redraw();
    };
    mq.addEventListener("change", onScheme);
    const ro = new ResizeObserver(() => redraw());
    if (el.current) ro.observe(el.current);
    return () => {
      mq.removeEventListener("change", onScheme);
      ro.disconnect();
    };
  }, [redraw, el]);
}
