import { label } from "@/renderers/illustration/hardware";

// A spool of solder with a cut end showing the flux core.
export default function SolderTypesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <ellipse
        cx="56"
        cy="60"
        rx="40"
        ry="40"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <ellipse cx="56" cy="60" rx="32" ry="32" fill="var(--metal)" stroke="var(--ink)" />
      {[28, 24, 20].map((r) => (
        <circle key={r} cx="56" cy="60" r={r} fill="none" stroke="var(--ink)" strokeWidth="0.4" />
      ))}
      <circle cx="56" cy="60" r="10" fill="var(--bg)" stroke="var(--ink)" />
      <path
        d="M86 50C110 40 120 40 130 46"
        fill="none"
        stroke="var(--metal)"
        strokeWidth="8"
        strokeLinecap="butt"
      />
      <circle cx="138" cy="50" r="12" fill="var(--metal)" stroke="var(--ink)" />
      <circle cx="138" cy="50" r="5" fill="var(--tape)" stroke="var(--ink)" strokeWidth="0.6" />
      <text x="138" y="78" textAnchor="middle" style={label}>
        FLUX
      </text>
      <text x="138" y="86" textAnchor="middle" style={label}>
        CORE
      </text>
    </svg>
  );
}
