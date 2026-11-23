import { label } from "@/renderers/illustration/hardware";

// A pipe in an outside wall with an ice plug, a faucet dripping at the end.
export default function FrozenPipesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="8" width="18" height="104" fill="var(--part)" stroke="var(--ink)" />
      <path
        d="M22 60h100v-14h12"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M22 60h100v-14h12"
        fill="none"
        stroke="var(--output-fill)"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <rect x="44" y="56.5" width="28" height="7" fill="var(--surface)" />
      {[50, 58, 66].map((x) => (
        <path
          key={x}
          d={`M${x} 57l3 6M${x + 3} 57l-3 6`}
          stroke="var(--output)"
          strokeWidth="0.8"
        />
      ))}
      <path d="M134 40h10v14h-6v-8h-4z" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M141 62c-2 4-2 6 0 7 2-1 2-3 0-7z" fill="var(--output)" />
      <text x="58" y="80" textAnchor="middle" style={label}>
        ICE
      </text>
      <text x="13" y="118" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        WALL
      </text>
      <text x="140" y="84" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        DRIP
      </text>
    </svg>
  );
}
