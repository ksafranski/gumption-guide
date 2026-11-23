import { label } from "@/renderers/illustration/hardware";

// A toilet outlet being lowered onto the wax ring on the floor flange, bolts sticking up.
export default function ReplaceAWaxRingArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M44 10h72l-6 34H50z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.2" />
      <rect x="68" y="44" width="24" height="8" fill="var(--surface)" stroke="var(--ink)" />
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M80 56v8M76 60l4 4 4-4" />
      </g>
      <rect x="62" y="76" width="36" height="10" rx="5" fill="var(--tape)" stroke="var(--ink)" />
      <rect x="40" y="86" width="80" height="6" fill="var(--metal)" stroke="var(--ink)" />
      <rect x="70" y="92" width="20" height="24" fill="var(--part)" stroke="var(--ink)" />
      <path d="M48 86V68M112 86V68" stroke="var(--metal)" strokeWidth="3" />
      <path d="M6 92h148" stroke="var(--ink)" strokeWidth="1.2" />
      <text x="128" y="82" style={{ ...label, fontSize: 5 }}>
        WAX
      </text>
      <text x="128" y="100" style={{ ...label, fontSize: 5 }}>
        FLANGE
      </text>
    </svg>
  );
}
