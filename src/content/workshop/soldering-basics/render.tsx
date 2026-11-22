import { label } from "@/renderers/illustration/hardware";

// A board in section: iron tip on the pad and lead, solder fed in from the other side, a concave fillet.
export default function SolderingBasicsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="10"
        y="78"
        width="140"
        height="10"
        fill="var(--c-garden)"
        opacity="0.5"
        stroke="var(--ink)"
      />
      <rect
        x="62"
        y="74"
        width="36"
        height="4"
        fill="var(--input)"
        stroke="var(--ink)"
        strokeWidth="0.6"
      />
      <rect
        x="78"
        y="40"
        width="4"
        height="64"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="0.6"
      />
      <path
        d="M64 74C74 72 77 64 78 52v22zM96 74C86 72 83 64 82 52v22z"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="0.8"
      />
      <g transform="rotate(40 60 60)">
        <path d="M58 60l-6-4v-36h12v36z" fill="var(--metal)" stroke="var(--ink)" />
        <rect x="50" y="-8" width="16" height="28" rx="3" fill="var(--input)" stroke="var(--ink)" />
      </g>
      <path
        d="M150 20C120 30 100 40 90 58"
        fill="none"
        stroke="var(--metal)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text x="14" y="104" style={label}>
        IRON
      </text>
      <text x="112" y="14" style={label}>
        SOLDER
      </text>
      <text x="104" y="104" style={label}>
        FILLET
      </text>
    </svg>
  );
}
