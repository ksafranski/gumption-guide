// Urine colour chart from pale (fine) to dark (drink), beside a water bottle.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;
const shades = [10, 30, 55, 80, 100].map(
  (p) => `color-mix(in srgb, var(--input) ${p}%, var(--tape))`,
);

export default function DehydrationArt() {
  return (
    <svg viewBox="0 0 160 120">
      {shades.map((c, i) => (
        <rect
          key={c}
          x="16"
          y={14 + i * 18}
          width="28"
          height="14"
          rx="2"
          fill={c}
          stroke="var(--ink)"
          strokeWidth="1"
        />
      ))}
      <text x="50" y="24" style={label}>
        OK
      </text>
      <text x="50" y="96" style={label}>
        DRINK
      </text>
      <rect
        x="104"
        y="30"
        width="30"
        height="76"
        rx="8"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <rect x="110" y="18" width="18" height="12" rx="2" fill="var(--output)" />
      <path d="M106 56h26" stroke="var(--output)" strokeWidth="1.5" />
    </svg>
  );
}
