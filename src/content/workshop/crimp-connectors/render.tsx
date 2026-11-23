import { label } from "@/renderers/illustration/hardware";

// A ring terminal crimped onto a wire: ring, barrel with crimp dimples, insulated sleeve.
export default function CrimpConnectorsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle cx="30" cy="60" r="16" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.2" />
      <circle cx="30" cy="60" r="6" fill="var(--bg)" stroke="var(--ink)" />
      <rect x="44" y="52" width="30" height="16" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M54 52v4M62 52v4M54 68v-4M62 68v-4" stroke="var(--ink)" strokeWidth="2" />
      <rect
        x="74"
        y="48"
        width="30"
        height="24"
        rx="3"
        fill="var(--output)"
        opacity="0.85"
        stroke="var(--ink)"
      />
      <path d="M104 60h52" stroke="var(--warn)" strokeWidth="10" strokeLinecap="round" />
      <text x="58" y="88" textAnchor="middle" style={label}>
        CRIMP
      </text>
      <text x="89" y="40" textAnchor="middle" style={label}>
        BLUE
      </text>
    </svg>
  );
}
