// Unit conversion. Pure; the MCP `convert_units` tool will wrap this.
import type { Unit } from "@/content/schema";

/** base = value × toBase + offset */
export function convert(value: number, from: Unit, to: Unit): number {
  const base = value * from.toBase + (from.offset ?? 0);
  return (base - (to.offset ?? 0)) / to.toBase;
}

/** Readable number: up to 6 significant figures, no trailing zeros, thousands separators. */
export function fmt(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";
  const a = Math.abs(n);
  if (a >= 1e9 || a < 1e-4) return n.toExponential(3).replace(/\.?0+e/, "e");
  const p = Number(n.toPrecision(6));
  return p.toLocaleString("en-US", { maximumFractionDigits: 6 });
}
