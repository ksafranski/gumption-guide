import { label } from "@/renderers/illustration/hardware";

// A square against a board's reference edge, a knifed line across, and the waste side hatched.
export default function MeasuringAndMarkingArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="10" y="40" width="140" height="50" fill="var(--wood)" stroke="var(--ink)" />
      <path d="M100 40v50" stroke="var(--ink)" strokeWidth="1" />
      {[106, 116, 126, 136, 146].map((x) => (
        <path key={x} d={`M${x} 44l-6 8`} stroke="var(--wood-grain)" strokeWidth="1.2" />
      ))}
      <text x="124" y="74" textAnchor="middle" style={label}>
        X
      </text>
      <rect x="84" y="90" width="22" height="12" fill="var(--ground)" stroke="var(--ink)" />
      <rect x="100" y="14" width="6" height="88" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M10 90h140" stroke="var(--output)" strokeWidth="2" />
      <text x="40" y="110" style={label}>
        REF EDGE
      </text>
      <text x="40" y="34" style={label}>
        KEEP
      </text>
      <text x="114" y="34" style={label}>
        WASTE
      </text>
    </svg>
  );
}
