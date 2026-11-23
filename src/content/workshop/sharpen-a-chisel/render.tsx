import { label } from "@/renderers/illustration/hardware";

// A chisel tip in side view: flat back, 25° bevel, and a small steeper microbevel at the edge.
export default function SharpenAChiselArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M10 50h90l34 26l4 4H10z" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M134 76l4 4" stroke="var(--input)" strokeWidth="3" />
      <path d="M10 80h140" stroke="var(--output)" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M100 80A38 38 0 0 1 104 64" fill="none" stroke="var(--ink)" strokeWidth="0.8" />
      <text x="84" y="70" style={label}>
        25°
      </text>
      <text x="20" y="94" style={label}>
        FLAT BACK
      </text>
      <text x="112" y="100" style={label}>
        MICRO
      </text>
      <text x="112" y="40" style={label}>
        BEVEL
      </text>
      <path d="M118 44l2 12" stroke="var(--muted)" strokeWidth="0.8" />
    </svg>
  );
}
