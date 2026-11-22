// A hand with pale, frozen fingertips and a snowflake.
export default function FrostbiteArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M54 112V74c0-6-10-14-14-20-4-6 2-10 8-6l10 10V30c0-6 10-6 10 0v28V22c0-6 10-6 10 0v36V26c0-6 10-6 10 0v34V36c0-6 10-6 10 0v46c0 14-6 30-16 30z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <g fill="var(--output-fill)" stroke="var(--output)" strokeWidth="1.5">
        <path d="M58 30c0-6 10-6 10 0v6H58z" />
        <path d="M68 22c0-6 10-6 10 0v6H68z" />
        <path d="M78 26c0-6 10-6 10 0v6H78z" />
        <path d="M88 36c0-6 10-6 10 0v6H88z" />
      </g>
      <g stroke="var(--output)" strokeWidth="2" strokeLinecap="round">
        <path d="M130 26v32M116 34l28 16M116 50l28-16" />
      </g>
    </svg>
  );
}
