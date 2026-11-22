import { label } from "@/renderers/illustration/hardware";

// An outlet from the side: black on brass, white on silver, ground on green.
export default function ReplaceAnOutletArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="62"
        y="10"
        width="36"
        height="100"
        rx="4"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <rect
        x="56"
        y="10"
        width="48"
        height="6"
        rx="1"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="0.8"
      />
      <rect
        x="56"
        y="104"
        width="48"
        height="6"
        rx="1"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="0.8"
      />
      <circle cx="62" cy="40" r="5" fill="var(--tape)" stroke="var(--ink)" />
      <circle cx="62" cy="76" r="5" fill="var(--tape)" stroke="var(--ink)" />
      <circle cx="98" cy="40" r="5" fill="var(--metal)" stroke="var(--ink)" />
      <circle cx="98" cy="76" r="5" fill="var(--metal)" stroke="var(--ink)" />
      <circle cx="80" cy="100" r="3.5" fill="var(--c-garden)" stroke="var(--ink)" />
      <path d="M8 40h52" fill="none" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" />
      <path
        d="M8 40h52"
        fill="none"
        stroke="var(--tape-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M152 40h-50" fill="none" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M152 40h-50"
        fill="none"
        stroke="var(--surface)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M80 118v-14" stroke="var(--input)" strokeWidth="2" />
      <text x="10" y="34" style={label}>
        HOT · BRASS
      </text>
      <text x="108" y="34" style={label}>
        NEU
      </text>
      <text x="108" y="28" style={{ ...label, fontSize: 5 }}>
        SILVER
      </text>
      <text x="86" y="116" style={{ ...label, fontSize: 5 }}>
        GROUND
      </text>
    </svg>
  );
}
