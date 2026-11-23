import { label } from "@/renderers/illustration/hardware";

// An F-clamp squeezing two boards; the pressure spreads out from the pad at about 45°.
export default function ClampsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="30" y="52" width="120" height="16" fill="var(--wood)" stroke="var(--ink)" />
      <rect x="30" y="68" width="120" height="16" fill="var(--wood)" stroke="var(--ink)" />
      <path d="M70 52h34l32 32H38z" fill="var(--input)" opacity="0.15" />
      <path
        d="M70 52L38 84M104 52l32 32"
        stroke="var(--input)"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <rect x="12" y="20" width="8" height="84" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M20 24h66v10H20zM20 84h66v10H20z" fill="var(--tape)" stroke="var(--ink)" />
      <path d="M87 34v14" stroke="var(--metal)" strokeWidth="4" />
      <rect
        x="70"
        y="48"
        width="34"
        height="4"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="0.6"
      />
      <rect x="82" y="10" width="10" height="14" rx="2" fill="var(--input)" stroke="var(--ink)" />
      <text x="100" y="108" textAnchor="middle" style={label}>
        45° SPREAD
      </text>
    </svg>
  );
}
