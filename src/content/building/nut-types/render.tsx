const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;
const hex = "M-12 0l6-10.4h12L12 0l-6 10.4h-12z";

// Nuts head-on: hex, nyloc (blue ring), castle (slots), wing; acorn in profile.
export default function NutTypesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g transform="translate(26 36)">
        <path d={hex} fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
        <circle r="5" fill="var(--surface)" stroke="var(--ink)" />
        <text y="22" textAnchor="middle" style={label}>
          HEX
        </text>
      </g>
      <g transform="translate(80 36)">
        <path d={hex} fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
        <circle r="7" fill="var(--output)" />
        <circle r="5" fill="var(--surface)" stroke="var(--ink)" />
        <text y="22" textAnchor="middle" style={label}>
          NYLOC
        </text>
      </g>
      <g transform="translate(134 36)">
        <path d={hex} fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
        <circle r="5" fill="var(--surface)" stroke="var(--ink)" />
        <path
          d="M-1.5-11v5h3v-5M-1.5 11v-5h3v5M-11-1.5h5v3h-5M11-1.5h-5v3h5"
          fill="var(--surface)"
          stroke="var(--ink)"
          strokeWidth="0.8"
        />
        <text y="22" textAnchor="middle" style={label}>
          CASTLE
        </text>
      </g>
      <g transform="translate(50 88)">
        <path
          d="M-6-6h12v12h-12zM-6-4c-14-10-20 4-14 8zM6-4c14-10 20 4 14 8z"
          fill="var(--metal)"
          stroke="var(--ink)"
          strokeWidth="1.2"
        />
        <text y="22" textAnchor="middle" style={label}>
          WING
        </text>
      </g>
      <g transform="translate(110 88)">
        <path
          d="M-10 6h20v-6h-20zM-8 0c0-12 16-12 16 0z"
          fill="var(--metal)"
          stroke="var(--ink)"
          strokeWidth="1.2"
        />
        <text y="22" textAnchor="middle" style={label}>
          ACORN
        </text>
      </g>
    </svg>
  );
}
