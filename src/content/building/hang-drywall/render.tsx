import { label } from "@/renderers/illustration/hardware";

// Drywall sheets on studs, end joints staggered, screw dots along each stud.
export default function HangDrywallArt() {
  const studs = [16, 46, 76, 106, 136];
  return (
    <svg viewBox="0 0 160 120">
      <rect x="8" y="8" width="144" height="104" fill="var(--surface)" stroke="var(--ink)" />
      <path d="M8 60h144M76 8v52M106 60v52" stroke="var(--ink)" strokeWidth="1.2" />
      {studs.map((x) => (
        <g key={x} fill="var(--muted)">
          {[16, 32, 48, 72, 88, 104].map((y) => (
            <circle key={y} cx={x} cy={y} r="1.3" />
          ))}
        </g>
      ))}
      <path d="M8 60h144" stroke="var(--tape)" strokeWidth="4" opacity="0.6" />
      <text x="40" y="36" textAnchor="middle" style={label}>
        STAGGER
      </text>
    </svg>
  );
}
