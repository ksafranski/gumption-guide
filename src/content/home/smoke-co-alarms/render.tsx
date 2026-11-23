import { label } from "@/renderers/illustration/hardware";

// A ceiling-mounted alarm with its TEST button, sound arcs below.
export default function SmokeCoAlarmsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 14h152" stroke="var(--ink)" strokeWidth="1.5" />
      <path
        d="M40 14h80v10a40 16 0 0 1 -80 0z"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      {[56, 64, 96, 104].map((x) => (
        <path key={x} d={`M${x} 26v8`} stroke="var(--line-strong)" strokeWidth="2" />
      ))}
      <circle cx="80" cy="30" r="6" fill="var(--warn-fill)" stroke="var(--warn)" />
      <g fill="none" stroke="var(--input)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M62 58q18 10 36 0M52 72q28 16 56 0M42 86q38 22 76 0" />
      </g>
      <text x="80" y="112" textAnchor="middle" style={label}>
        TEST MONTHLY
      </text>
    </svg>
  );
}
