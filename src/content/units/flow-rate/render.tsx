import { label } from "@/renderers/illustration/hardware";

// A bucket filling under a tap, with a stopwatch: volume over time.
export default function FlowRateArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M30 10h40v10H52v8H44V20H30z" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M48 28v46" stroke="var(--output)" strokeWidth="4" />
      <path d="M22 60h52l-6 50H28z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M25 80h46l-3 30H28z" fill="var(--output-fill)" />
      <circle cx="118" cy="64" r="24" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.2" />
      <rect x="114" y="34" width="8" height="6" fill="var(--ink)" />
      <path
        d="M118 64V46M118 64l10 6"
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="80" y="18" style={label}>
        VOLUME ÷ TIME
      </text>
    </svg>
  );
}
