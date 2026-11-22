const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

// Banded zone map, cold to warm, with a thermometer marking the coldest night.
const bands = [
  "color-mix(in srgb, var(--output) 90%, var(--surface))",
  "color-mix(in srgb, var(--output) 60%, var(--surface))",
  "color-mix(in srgb, var(--output) 30%, var(--surface))",
  "color-mix(in srgb, var(--input) 30%, var(--surface))",
  "color-mix(in srgb, var(--input) 60%, var(--surface))",
  "color-mix(in srgb, var(--input) 90%, var(--surface))",
];

export default function HardinessZonesArt() {
  return (
    <svg viewBox="0 0 160 120">
      {bands.map((c, i) => (
        <path key={i} d={`M10 ${12 + i * 16}c30 -6 60 8 110 0v16c-50 8 -80 -6 -110 0z`} fill={c} />
      ))}
      {[3, 4, 5, 6, 7, 8].map((z, i) => (
        <text key={z} x="22" y={24 + i * 16} style={{ ...label, fill: "var(--ink)" }}>
          {z}
        </text>
      ))}
      <rect
        x="136"
        y="16"
        width="8"
        height="70"
        rx="4"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <circle cx="140" cy="94" r="8" fill="var(--output)" stroke="var(--ink)" strokeWidth="1.5" />
      <rect x="138" y="64" width="4" height="26" fill="var(--output)" />
    </svg>
  );
}
