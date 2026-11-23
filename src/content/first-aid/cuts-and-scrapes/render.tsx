import { label } from "@/renderers/illustration/hardware";

// A forearm under running water from a tap, then a bandage.
export default function CutsAndScrapesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M40 10h30v10H52v8h-12z" fill="var(--metal)" stroke="var(--ink)" />
      <g stroke="var(--output)" strokeWidth="1.5" strokeDasharray="3 3">
        <path d="M44 30v34M48 30v34" />
      </g>
      <path
        d="M6 70c30-6 100-6 148 0v18c-48 6-118 6-148 0z"
        fill="var(--input-fill)"
        stroke="var(--ink)"
      />
      <path d="M40 76l10 4" stroke="var(--warn)" strokeWidth="2" strokeLinecap="round" />
      <rect
        x="96"
        y="70"
        width="34"
        height="18"
        rx="6"
        fill="var(--tape)"
        stroke="var(--ink)"
        opacity="0.9"
      />
      <rect x="106" y="73" width="14" height="12" fill="var(--surface)" />
      <text x="46" y="110" textAnchor="middle" style={label}>
        RINSE
      </text>
      <text x="113" y="110" textAnchor="middle" style={label}>
        COVER
      </text>
    </svg>
  );
}
