import { label } from "@/renderers/illustration/hardware";

// A small fair-weather cumulus beside a towering cumulonimbus with an anvil top.
export default function CloudSignsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M14 96h36a10 10 0 0 0 -6 -16a12 12 0 0 0 -22 2a8 8 0 0 0 -8 14z"
        fill="var(--surface)"
        stroke="var(--ink)"
      />
      <path
        d="M72 96h76a12 12 0 0 0 -10 -18a14 14 0 0 0 -6 -26c4-8 0-18-10-22h22c-6-8-30-10-44-4c-10 4-12 14-8 22a14 14 0 0 0 -8 24a12 12 0 0 0 -12 24z"
        fill="var(--part)"
        stroke="var(--ink)"
      />
      <path d="M0 100h160" stroke="var(--line-strong)" />
      <text x="32" y="112" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        FAIR
      </text>
      <text x="130" y="112" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        STORM
      </text>
    </svg>
  );
}
