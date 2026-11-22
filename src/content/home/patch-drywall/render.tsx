import { label } from "@/renderers/illustration/hardware";

// A wall with a mesh patch over a hole and three coats of compound feathered wider each time.
export default function PatchDrywallArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="4" width="152" height="112" fill="var(--surface)" stroke="var(--ink)" />
      <ellipse cx="80" cy="58" rx="62" ry="46" fill="var(--part)" opacity="0.5" />
      <ellipse cx="80" cy="58" rx="46" ry="34" fill="var(--part)" opacity="0.8" />
      <rect
        x="58"
        y="38"
        width="44"
        height="40"
        fill="none"
        stroke="var(--input)"
        strokeWidth="1.2"
      />
      {[64, 72, 80, 88, 96].map((x) => (
        <path key={x} d={`M${x} 38v40`} stroke="var(--input)" strokeWidth="0.5" />
      ))}
      {[44, 52, 60, 68, 76].map((y) => (
        <path key={y} d={`M58 ${y}h44`} stroke="var(--input)" strokeWidth="0.5" />
      ))}
      <circle cx="80" cy="58" r="9" fill="var(--ink)" opacity="0.3" />
      <text x="80" y="112" textAnchor="middle" style={label}>
        FEATHER WIDE
      </text>
    </svg>
  );
}
