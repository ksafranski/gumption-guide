import { label } from "@/renderers/illustration/hardware";

// Hand position for abdominal thrusts: a fist above the navel, thrust in and up.
export default function ChokingArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M50 10c-6 20-10 40-8 100h76c2-60-2-80-8-100z"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <circle cx="80" cy="84" r="2" fill="var(--ink)" />
      <rect x="68" y="60" width="24" height="16" rx="6" fill="var(--input)" stroke="var(--ink)" />
      <g stroke="var(--warn)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M80 56c0-10 0-16 -2 -24M74 36l4 -6 4 6" />
      </g>
      <text x="124" y="70" style={{ ...label, fontSize: 5 }}>
        FIST
      </text>
      <text x="124" y="88" style={{ ...label, fontSize: 5 }}>
        NAVEL
      </text>
      <text x="124" y="40" style={{ ...label, fontSize: 5 }}>
        IN + UP
      </text>
    </svg>
  );
}
