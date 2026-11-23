import { label } from "@/renderers/illustration/hardware";

// A dry bean pod split open beside a labeled seed envelope.
export default function SaveSeedsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M14 70c20-30 60-36 80-24c-20 4-58 14-80 24z"
        fill="var(--wood)"
        stroke="var(--ink)"
      />
      {[34, 50, 66, 82].map((x, i) => (
        <ellipse
          key={x}
          cx={x}
          cy={62 - i * 3}
          rx="6"
          ry="4"
          fill="var(--surface)"
          stroke="var(--ink)"
        />
      ))}
      <rect x="104" y="30" width="46" height="60" fill="var(--surface)" stroke="var(--ink)" />
      <path d="M104 30l23 16 23-16" fill="none" stroke="var(--ink)" />
      <text x="127" y="66" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        BEAN
      </text>
      <text x="127" y="76" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        2026
      </text>
    </svg>
  );
}
