// Lower leg raised on a pack, ankle wrapped, ice pack on top.
export default function SprainedAnkleArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M8 106h144" stroke="var(--ground)" strokeWidth="2" />
      <rect
        x="92"
        y="78"
        width="52"
        height="28"
        rx="6"
        fill="var(--tape)"
        stroke="var(--ground)"
        strokeWidth="1.5"
      />
      <path
        d="M8 96L110 64l10 -16h12c4 0 6 4 4 8l-6 18-118 36z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <g stroke="var(--output)" strokeWidth="3">
        <path d="M96 70l8 12M104 66l8 12M112 62l6 10" />
      </g>
      <rect
        x="94"
        y="38"
        width="26"
        height="14"
        rx="3"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.5"
        transform="rotate(-18 107 45)"
      />
      <g stroke="var(--input)" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M40 46v-22M34 30l6-7 6 7" />
      </g>
    </svg>
  );
}
