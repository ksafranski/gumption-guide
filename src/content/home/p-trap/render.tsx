import { label } from "@/renderers/illustration/hardware";

// A P-trap in section with its water seal, and the trap arm into the wall.
export default function PTrapArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M40 6v54a26 26 0 0 0 52 0V44h52"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="18"
        strokeLinejoin="round"
      />
      <path
        d="M40 6v54a26 26 0 0 0 52 0V44h52"
        fill="none"
        stroke="var(--surface)"
        strokeWidth="15"
        strokeLinejoin="round"
      />
      <path d="M40 52v8a26 26 0 0 0 52 0v-8" fill="none" stroke="var(--output)" strokeWidth="15" />
      <rect x="144" y="20" width="10" height="50" fill="var(--part)" stroke="var(--ink)" />
      <path d="M118 44V14" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 2" />
      <text x="66" y="112" textAnchor="middle" style={label}>
        WATER SEAL
      </text>
      <text x="112" y="10" style={label}>
        VENT ↑
      </text>
    </svg>
  );
}
