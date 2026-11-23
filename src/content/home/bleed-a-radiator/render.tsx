import { label } from "@/renderers/illustration/hardware";

// A panel radiator with an air pocket at the top and the bleed valve at the corner.
export default function BleedARadiatorArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="20"
        y="26"
        width="120"
        height="70"
        rx="4"
        fill="var(--input-fill)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <rect x="21" y="27" width="118" height="16" fill="var(--output-fill)" />
      {[36, 52, 68, 84, 100, 116].map((x) => (
        <path key={x} d={`M${x} 26v70`} stroke="var(--line-strong)" />
      ))}
      <rect x="140" y="28" width="8" height="8" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M148 32h6" stroke="var(--tape)" strokeWidth="3" />
      <path d="M144 14c0 4 4 6 4 10" stroke="var(--muted)" fill="none" strokeDasharray="2 2" />
      <text x="80" y="38" textAnchor="middle" style={{ ...label, fontSize: 6 }}>
        AIR · COLD
      </text>
      <text x="80" y="76" textAnchor="middle" style={{ ...label, fontSize: 6 }}>
        HOT WATER
      </text>
      <text x="80" y="112" textAnchor="middle" style={label}>
        BLEED AT THE TOP
      </text>
    </svg>
  );
}
