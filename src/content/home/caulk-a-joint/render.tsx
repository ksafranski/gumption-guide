import { label } from "@/renderers/illustration/hardware";

// A caulk nozzle laying a bead along a tub-to-tile corner.
export default function CaulkAJointArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="6" y="8" width="148" height="60" fill="var(--surface)" stroke="var(--ink)" />
      {[28, 48].map((y) => (
        <path key={y} d={`M6 ${y}h148`} stroke="var(--line-strong)" />
      ))}
      {[36, 72, 108, 144].map((x) => (
        <path key={x} d={`M${x} 8v60`} stroke="var(--line-strong)" />
      ))}
      <rect x="6" y="68" width="148" height="44" fill="var(--part)" stroke="var(--ink)" />
      <path d="M6 68h90" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" />
      <path d="M6 68h90" stroke="var(--surface)" strokeWidth="3.5" strokeLinecap="round" />
      <g transform="rotate(-35 104 66)">
        <path d="M100 64l8-3v10l-8-3z" fill="var(--surface)" stroke="var(--ink)" />
        <rect x="108" y="58" width="44" height="16" rx="2" fill="var(--tape)" stroke="var(--ink)" />
      </g>
      <text x="40" y="94" style={label}>
        BEAD
      </text>
    </svg>
  );
}
