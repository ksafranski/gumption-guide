import { label } from "@/renderers/illustration/hardware";

// A tank water heater with the relief valve and its pipe, sediment at the bottom, drain valve.
export default function WaterHeaterBasicsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="44"
        y="14"
        width="56"
        height="96"
        rx="8"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <path d="M58 14V4M86 14V4" stroke="var(--ink)" strokeWidth="4" />
      <path d="M58 4h-3M86 4h3" stroke="var(--output)" strokeWidth="3" />
      <path d="M86 4h3" stroke="var(--input)" strokeWidth="3" />
      <rect x="100" y="24" width="8" height="8" fill="var(--tape)" stroke="var(--ink)" />
      <path d="M108 28h8v76" fill="none" stroke="var(--ink)" strokeWidth="3" />
      <path
        d="M46 96h52v8a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6z"
        fill="var(--wood-grain)"
        opacity="0.7"
      />
      <rect x="34" y="96" width="10" height="6" fill="var(--metal)" stroke="var(--ink)" />
      <text x="122" y="32" style={{ ...label, fontSize: 5 }}>
        T&amp;P
      </text>
      <text x="72" y="92" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        SEDIMENT
      </text>
      <text x="26" y="100" textAnchor="end" style={{ ...label, fontSize: 5 }}>
        DRAIN
      </text>
    </svg>
  );
}
