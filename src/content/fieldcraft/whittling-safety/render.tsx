import { label } from "@/renderers/illustration/hardware";

// Seated figure from above with the "blood circle": arm plus blade reach, clear all round.
export default function WhittlingSafetyArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle
        cx="80"
        cy="60"
        r="50"
        fill="var(--warn-fill)"
        stroke="var(--warn)"
        strokeDasharray="4 3"
      />
      <circle cx="80" cy="60" r="12" fill="var(--surface)" stroke="var(--ink)" />
      <path d="M80 60l34 -6" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <path d="M114 54l14 -3" stroke="var(--metal)" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 60l-28 12" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <rect
        x="44"
        y="70"
        width="14"
        height="5"
        fill="var(--wood)"
        stroke="var(--ink)"
        transform="rotate(-22 51 72)"
      />
      <text x="80" y="104" textAnchor="middle" style={label}>
        KEEP CLEAR
      </text>
    </svg>
  );
}
