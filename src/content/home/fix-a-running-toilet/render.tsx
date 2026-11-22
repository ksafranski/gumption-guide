import { label } from "@/renderers/illustration/hardware";

// A toilet tank in section: fill valve and float on the left, overflow tube and flapper on the right.
export default function FixARunningToiletArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M20 14h120v86H20z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4" />
      <path d="M21 40h118v59H21z" fill="var(--output-fill)" />
      <path d="M21 40h118" stroke="var(--output)" strokeWidth="1" strokeDasharray="3 2" />
      <rect x="34" y="30" width="8" height="70" fill="var(--part)" stroke="var(--ink)" />
      <rect x="44" y="34" width="12" height="14" rx="3" fill="var(--tape)" stroke="var(--ink)" />
      <rect x="104" y="26" width="9" height="68" fill="var(--part)" stroke="var(--ink)" />
      <path d="M100 94h28" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M112 94c0-8 18-8 18 0z" fill="var(--input)" stroke="var(--ink)" />
      <path d="M121 87V60h-12" fill="none" stroke="var(--ink)" strokeDasharray="1.5 1.5" />
      <path d="M100 32h18" stroke="var(--warn)" strokeWidth="1.2" />
      <text x="80" y="112" textAnchor="middle" style={label}>
        FILL · OVERFLOW · FLAPPER
      </text>
    </svg>
  );
}
