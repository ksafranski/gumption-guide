import { label } from "@/renderers/illustration/hardware";

// A pleated filter seen edge-on, airflow arrows passing through toward the furnace.
export default function FurnaceFilterArt() {
  let pleat = "M60 20";
  for (let y = 20; y < 100; y += 8) pleat += `L72 ${y + 4}L60 ${y + 8}`;
  return (
    <svg viewBox="0 0 160 120">
      <rect x="56" y="16" width="20" height="88" fill="var(--surface)" stroke="var(--ink)" />
      <path d={pleat} fill="none" stroke="var(--ink)" strokeWidth="0.8" />
      <g stroke="var(--output)" strokeWidth="2" fill="none">
        {[36, 60, 84].map((y) => (
          <path key={y} d={`M10 ${y}h36M42 ${y - 4}l4 4-4 4M86 ${y}h36M118 ${y - 4}l4 4-4 4`} />
        ))}
      </g>
      <rect x="128" y="20" width="28" height="80" fill="var(--part)" stroke="var(--ink)" />
      <text x="142" y="64" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        FURNACE
      </text>
      <text x="66" y="114" textAnchor="middle" style={label}>
        ARROW →
      </text>
    </svg>
  );
}
