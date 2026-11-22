import { label } from "@/renderers/illustration/hardware";

// Copper braid pressed onto a joint by the iron tip, solder wicking into the braid.
export default function DesolderingArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="10"
        y="78"
        width="140"
        height="10"
        fill="var(--c-garden)"
        opacity="0.5"
        stroke="var(--ink)"
      />
      <rect
        x="62"
        y="74"
        width="36"
        height="4"
        fill="var(--input)"
        stroke="var(--ink)"
        strokeWidth="0.6"
      />
      <rect x="40" y="66" width="90" height="8" fill="var(--input-fill)" stroke="var(--input)" />
      {Array.from({ length: 14 }, (_, i) => 42 + i * 6).map((x) => (
        <path key={x} d={`M${x} 66l4 8M${x + 4} 66l-4 8`} stroke="var(--input)" strokeWidth="0.6" />
      ))}
      <rect x="62" y="66" width="30" height="8" fill="var(--metal)" opacity="0.7" />
      <g transform="rotate(30 80 60)">
        <path d="M78 64l-6-4v-36h12v36z" fill="var(--metal)" stroke="var(--ink)" />
        <rect x="70" y="-4" width="16" height="28" rx="3" fill="var(--input)" stroke="var(--ink)" />
      </g>
      <text x="100" y="104" style={label}>
        BRAID
      </text>
    </svg>
  );
}
