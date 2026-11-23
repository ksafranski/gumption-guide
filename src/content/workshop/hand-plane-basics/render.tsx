import { label } from "@/renderers/illustration/hardware";

// A bench plane on a board, a curl of shaving coming out of the mouth, grain sloping downhill.
export default function HandPlaneBasicsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="6" y="76" width="148" height="20" fill="var(--wood)" stroke="var(--ink)" />
      {[20, 50, 80, 110, 140].map((x) => (
        <path key={x} d={`M${x} 77l18 18`} stroke="var(--wood-grain)" strokeWidth="1.2" />
      ))}
      <path d="M30 76h80l-4-14H34z" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M40 62c0-10 8-14 14-14v14z" fill="var(--wood-grain)" stroke="var(--ink)" />
      <path d="M90 62l-6-26 10-2 8 28z" fill="var(--wood-grain)" stroke="var(--ink)" />
      <path d="M68 76l-10-36" stroke="var(--metal)" strokeWidth="4" />
      <path
        d="M66 62c-6-14 10-20 14-10s-6 12-8 6"
        fill="none"
        stroke="var(--wood)"
        strokeWidth="3"
      />
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M42 30h-28M18 26l-4 4 4 4" />
      </g>
      <text x="80" y="110" textAnchor="middle" style={label}>
        WITH THE GRAIN
      </text>
    </svg>
  );
}
