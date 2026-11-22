// Head in profile, leaning forward, fingers pinching the soft part of the nose.
export default function NosebleedArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g transform="rotate(18 80 60)">
        <path
          d="M60 20c22-4 40 10 40 30 0 4 2 8 8 14 2 2 0 5-3 5h-5v8c0 6-4 9-10 9H76v16H48V86c-10-6-14-18-12-32 2-18 10-30 24-34z"
          fill="var(--part)"
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <ellipse
          cx="102"
          cy="58"
          rx="6"
          ry="9"
          fill="var(--input-fill)"
          stroke="var(--input)"
          strokeWidth="2"
        />
        <ellipse
          cx="110"
          cy="62"
          rx="5"
          ry="8"
          fill="var(--input-fill)"
          stroke="var(--input)"
          strokeWidth="2"
        />
      </g>
      <g
        stroke="var(--output)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M70 10c18 0 32 8 40 20M110 30l-1-9M110 30l-9-3" />
      </g>
    </svg>
  );
}
