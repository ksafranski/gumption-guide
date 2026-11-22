const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

// Sun arc over a bed, a tree casting shade on one end; hours of sun marked.
export default function SunExposureArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M12 96C30 20 130 20 148 96"
        fill="none"
        stroke="var(--input)"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      />
      <circle
        cx="80"
        cy="38"
        r="9"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <path d="M4 104h152" stroke="var(--ground)" strokeWidth="2" />
      <rect x="128" y="62" width="6" height="42" fill="var(--wood)" />
      <circle
        cx="131"
        cy="56"
        r="16"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.5"
      />
      <path d="M90 104h46l-6-4H96z" fill="var(--ground)" opacity="0.5" />
      <rect x="20" y="96" width="70" height="8" fill="var(--wood)" />
      <text x="55" y="118" textAnchor="middle" style={{ ...label, fill: "var(--input)" }}>
        6+ HRS
      </text>
      <text x="112" y="118" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        SHADE
      </text>
    </svg>
  );
}
