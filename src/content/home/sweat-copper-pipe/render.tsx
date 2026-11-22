import { label } from "@/renderers/illustration/hardware";

// A coupling being heated by a torch flame, solder touched to the far side of the joint.
export default function SweatCopperPipeArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="6" y="52" width="148" height="14" fill="var(--input-fill)" stroke="var(--ink)" />
      <rect x="62" y="48" width="36" height="22" rx="2" fill="var(--input)" stroke="var(--ink)" />
      <path d="M62 59h-2M98 59h2" stroke="var(--tape)" strokeWidth="3" />
      <path d="M80 72c-8 8-6 16 0 24 6-8 8-16 0-24z" fill="var(--tape)" stroke="var(--input)" />
      <rect x="74" y="96" width="12" height="20" fill="var(--metal)" stroke="var(--ink)" />
      <path
        d="M104 6c0 20 0 30-6 40"
        fill="none"
        stroke="var(--metal)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text x="110" y="16" style={label}>
        SOLDER
      </text>
      <text x="96" y="108" style={label}>
        HEAT HERE
      </text>
    </svg>
  );
}
