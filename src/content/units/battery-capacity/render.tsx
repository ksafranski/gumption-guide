import { label } from "@/renderers/illustration/hardware";

// A battery with its volts × amp-hours = watt-hours.
export default function BatteryCapacityArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="24"
        y="30"
        width="96"
        height="50"
        rx="6"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.4"
      />
      <rect x="120" y="44" width="8" height="22" rx="2" fill="var(--ink)" />
      <rect x="30" y="36" width="60" height="38" rx="3" fill="var(--c-garden)" opacity="0.7" />
      <text
        x="80"
        y="102"
        textAnchor="middle"
        style={{ ...label, fontSize: 9, fill: "var(--ink)" }}
      >
        V × Ah = Wh
      </text>
    </svg>
  );
}
