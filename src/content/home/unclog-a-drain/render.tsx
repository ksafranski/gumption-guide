import { label } from "@/renderers/illustration/hardware";

// A cup plunger sealed over a sink drain, with pressure arrows down the pipe.
export default function UnclogADrainArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M14 44h132l-12 30H26z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M24 56h112l-6 16H30z" fill="var(--output-fill)" />
      <rect x="76" y="74" width="8" height="40" fill="var(--part)" stroke="var(--ink)" />
      <rect x="77" y="6" width="6" height="46" rx="2" fill="var(--wood)" stroke="var(--ink)" />
      <path d="M62 72c0-24 36-24 36 0z" fill="var(--input)" stroke="var(--ink)" strokeWidth="1.2" />
      <g stroke="var(--output)" strokeWidth="2" fill="none">
        <path d="M70 84v14M66 94l4 5 4-5M90 84v14M86 94l4 5 4-5" />
      </g>
      <text x="112" y="104" style={label}>
        PUSH
      </text>
    </svg>
  );
}
