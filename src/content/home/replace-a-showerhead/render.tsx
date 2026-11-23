import { label } from "@/renderers/illustration/hardware";

// The shower arm from the wall, a showerhead being turned onto it, spray below.
export default function ReplaceAShowerheadArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="6" width="14" height="108" fill="var(--part)" stroke="var(--ink)" />
      <path
        d="M18 30h40l14 10"
        fill="none"
        stroke="var(--metal)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect
        x="70"
        y="34"
        width="14"
        height="10"
        fill="var(--metal)"
        stroke="var(--ink)"
        transform="rotate(35 77 39)"
      />
      <path d="M82 42l26 18 -14 18 -26 -18z" fill="var(--metal)" stroke="var(--ink)" />
      <g stroke="var(--output)" strokeWidth="1.2" strokeDasharray="2 3">
        <path d="M92 74l-10 36M98 70l-2 40M104 66l8 44" />
      </g>
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M110 30a12 12 0 0 1 8 14" />
        <path d="M114 44l4 0 0-4" />
      </g>
      <text x="22" y="20" style={label}>
        ARM
      </text>
    </svg>
  );
}
