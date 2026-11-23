import { label } from "@/renderers/illustration/hardware";

// A pair of shims slid in from opposite sides: faces parallel, thickness adjustable.
export default function ShimsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="10" y="30" width="140" height="18" fill="var(--part)" stroke="var(--ink)" />
      <rect x="10" y="74" width="140" height="18" fill="var(--part)" stroke="var(--ink)" />
      <path d="M20 48h110l-110 14z" fill="var(--wood)" stroke="var(--ink)" />
      <path d="M140 74H30l110-14z" fill="var(--wood)" stroke="var(--ink)" opacity="0.92" />
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M4 56h12M12 52l4 4-4 4M156 66h-12M148 62l-4 4 4 4" />
      </g>
      <text x="80" y="110" textAnchor="middle" style={label}>
        OPPOSING PAIR
      </text>
    </svg>
  );
}
