import { label } from "@/renderers/illustration/hardware";

// A wall section: studs with batts between, a wavy batt pattern, warm and cold sides.
export default function InsulationTypesArt() {
  let wave = "M30 10";
  for (let y = 10; y < 110; y += 10) wave += `q12 5 0 10`;
  return (
    <svg viewBox="0 0 160 120">
      <rect x="20" y="6" width="8" height="108" fill="var(--wood)" stroke="var(--ink)" />
      <rect x="132" y="6" width="8" height="108" fill="var(--wood)" stroke="var(--ink)" />
      <rect x="28" y="6" width="104" height="108" fill="var(--tape)" opacity="0.35" />
      {[44, 68, 92, 116].map((x) => (
        <path
          key={x}
          d={wave.replace("M30 10", `M${x - 8} 10`)}
          fill="none"
          stroke="var(--tape)"
          strokeWidth="1.5"
        />
      ))}
      <rect x="6" y="6" width="6" height="108" fill="var(--surface)" stroke="var(--ink)" />
      <text x="4" y="118" style={{ ...label, fontSize: 5 }}>
        IN
      </text>
      <text x="150" y="118" style={{ ...label, fontSize: 5 }}>
        OUT
      </text>
    </svg>
  );
}
