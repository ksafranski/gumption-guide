import { label } from "@/renderers/illustration/hardware";

// A threaded pipe end seen from the side, tape wrapping onto it with a clockwise arrow.
export default function ThreadTapeArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="10" y="44" width="70" height="32" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M80 46l52 2v24l-52 2z" fill="var(--metal)" stroke="var(--ink)" />
      {Array.from({ length: 9 }, (_, i) => 84 + i * 5.5).map((x) => (
        <path key={x} d={`M${x} 47l3 26`} stroke="var(--ink)" strokeWidth="0.7" />
      ))}
      <path
        d="M92 46.5l30 1v25l-30 1z"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="0.6"
        opacity="0.85"
      />
      <path
        d="M92 46l-14 -34h12l14 34"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="0.8"
      />
      <g fill="none" stroke="var(--input)" strokeWidth="2" strokeLinecap="round">
        <path d="M150 42a12 12 0 1 1 -10 -12" />
        <path d="M136 26l5 4-5 4" />
      </g>
      <text x="40" y="96" textAnchor="middle" style={label}>
        PIPE
      </text>
      <text x="144" y="72" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        CW
      </text>
    </svg>
  );
}
