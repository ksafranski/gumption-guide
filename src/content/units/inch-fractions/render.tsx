import { label } from "@/renderers/illustration/hardware";

// An inch rule in sixteenths above a millimetre rule, aligned at zero.
export default function InchFractionsArt() {
  const inch = 128; // px for 1 inch
  return (
    <svg viewBox="0 0 160 120">
      <rect x="12" y="20" width="136" height="30" fill="var(--tape)" stroke="var(--ink)" />
      {Array.from({ length: 17 }, (_, i) => i).map((i) => {
        const h = i % 16 === 0 ? 16 : i % 8 === 0 ? 13 : i % 4 === 0 ? 10 : i % 2 === 0 ? 7 : 4;
        const x = 16 + (i * inch) / 16;
        return <path key={i} d={`M${x} 50v-${h}`} stroke="var(--tape-ink)" strokeWidth="0.8" />;
      })}
      <rect x="12" y="64" width="136" height="30" fill="var(--surface)" stroke="var(--ink)" />
      {Array.from({ length: 26 }, (_, i) => i).map((i) => {
        const h = i % 10 === 0 ? 14 : i % 5 === 0 ? 10 : 6;
        const x = 16 + (i * inch) / 25.4;
        return <path key={i} d={`M${x} 64v${h}`} stroke="var(--ink)" strokeWidth="0.8" />;
      })}
      <text x="18" y="30" style={{ ...label, fill: "var(--tape-ink)" }}>
        IN
      </text>
      <text x="18" y="90" style={label}>
        MM
      </text>
      <text x="80" y="112" textAnchor="middle" style={label}>
        1/16 IN ≈ 1.6 MM
      </text>
    </svg>
  );
}
