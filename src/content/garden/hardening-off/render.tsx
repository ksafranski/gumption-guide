import { label } from "@/renderers/illustration/hardware";

// Seedling trays stepping from shade into sun across a week.
export default function HardeningOffArt() {
  const days = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 160 120">
      <rect x="0" y="0" width="64" height="120" fill="var(--part)" opacity="0.6" />
      <circle cx="140" cy="20" r="10" fill="var(--tape)" />
      {days.map((i) => {
        const x = 14 + i * 38;
        return (
          <g key={i}>
            <rect x={x - 12} y="78" width="24" height="12" fill="var(--wood)" stroke="var(--ink)" />
            {[-6, 0, 6].map((dx) => (
              <path
                key={dx}
                d={`M${x + dx} 78v-10m0 4c-4-2-6-6-4-8m4 6c4-2 6-6 4-8`}
                fill="none"
                stroke="var(--c-garden)"
                strokeWidth="1.5"
              />
            ))}
          </g>
        );
      })}
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M14 104h120M130 100l4 4-4 4" />
      </g>
      <text x="80" y="116" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        SHADE → SUN, DAY BY DAY
      </text>
    </svg>
  );
}
