// A person on their side: hand under cheek, top knee bent forward to brace.
export default function RecoveryPositionArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 100h152" stroke="var(--ground)" strokeWidth="2" />
      <circle cx="28" cy="80" r="10" fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5" />
      <g stroke="var(--ink)" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M40 82h50" />
        <path d="M90 82l24 12h30" />
        <path d="M90 82l22-20 10 30" />
        <path d="M54 80l-10-14h-12" />
      </g>
      <g stroke="var(--part)" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M40 82h50" />
        <path d="M90 82l24 12h30" />
        <path d="M90 82l22-20 10 30" />
        <path d="M54 80l-10-14h-12" />
      </g>
      <path
        d="M30 60c-6-14 8-24 18-16"
        fill="none"
        stroke="var(--output)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    </svg>
  );
}
