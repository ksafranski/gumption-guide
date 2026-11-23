import { label } from "@/renderers/illustration/hardware";

// A sagging door in its frame: wide gap at the top hinge side, rubbing at the top latch corner.
export default function FixAStickingDoorArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M40 6h80v110M40 116V6" fill="none" stroke="var(--ink)" strokeWidth="3" />
      <path d="M45 12l70 -3v104H45z" fill="var(--wood)" stroke="var(--ink)" />
      <rect
        x="40"
        y="20"
        width="5"
        height="12"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="0.6"
      />
      <rect
        x="40"
        y="90"
        width="5"
        height="12"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="0.6"
      />
      <circle cx="106" cy="62" r="3" fill="var(--metal)" stroke="var(--ink)" />
      <circle cx="117" cy="9" r="6" fill="none" stroke="var(--warn)" strokeWidth="1.5" />
      <path d="M30 26h8" stroke="var(--input)" strokeWidth="1.5" />
      <text x="28" y="29" textAnchor="end" style={{ ...label, fontSize: 5 }}>
        LONG
      </text>
      <text x="28" y="35" textAnchor="end" style={{ ...label, fontSize: 5 }}>
        SCREW
      </text>
      <text x="126" y="20" style={{ ...label, fontSize: 5 }}>
        RUBS
      </text>
    </svg>
  );
}
