import { label } from "@/renderers/illustration/hardware";

// A cable with its sheath stripped back: black hot, white neutral, bare ground.
export default function WireColorsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="6" y="48" width="44" height="24" rx="4" fill="var(--tape)" stroke="var(--ink)" />
      <g fill="none" strokeLinecap="round">
        <path d="M48 54C70 54 80 26 120 26" stroke="var(--ink)" strokeWidth="7" />
        <path d="M48 54C70 54 80 26 120 26" stroke="var(--tape-ink)" strokeWidth="5" />
        <path d="M48 60C80 60 90 60 120 60" stroke="var(--ink)" strokeWidth="7" />
        <path d="M48 60C80 60 90 60 120 60" stroke="var(--surface)" strokeWidth="5" />
        <path d="M48 66C70 66 80 94 120 94" stroke="var(--input)" strokeWidth="2.5" />
      </g>
      <g stroke="var(--input)" strokeWidth="2" strokeLinecap="round">
        <path d="M120 26h8M120 60h8" />
      </g>
      <text x="132" y="28" style={label}>
        HOT
      </text>
      <text x="132" y="62" style={label}>
        NEU
      </text>
      <text x="126" y="96" style={label}>
        GND
      </text>
    </svg>
  );
}
