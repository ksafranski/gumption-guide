// Rod pulled back against a still striker, sparks showering into a tinder nest.
export default function FerroRodArt() {
  return (
    <svg viewBox="0 0 160 120">
      <ellipse
        cx="70"
        cy="98"
        rx="28"
        ry="10"
        fill="var(--tape)"
        stroke="var(--ground)"
        strokeWidth="1.5"
      />
      <path
        d="M50 94c8-6 14 2 20-4 6 4 14-4 20 4"
        fill="none"
        stroke="var(--ground)"
        strokeWidth="1"
      />
      <path d="M74 88L130 30" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" />
      <path d="M126 34l14-14" stroke="var(--wood)" strokeWidth="10" strokeLinecap="round" />
      <rect
        x="88"
        y="54"
        width="26"
        height="8"
        rx="2"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.2"
        transform="rotate(-20 101 58)"
      />
      <g fill="var(--input)">
        {[
          [80, 78],
          [70, 82],
          [86, 84],
          [64, 88],
          [76, 90],
          [90, 74],
          [60, 80],
        ].map(([x, y]) => (
          <circle key={`${x},${y}`} cx={x} cy={y} r="1.8" />
        ))}
      </g>
      <g
        stroke="var(--output)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M138 50l12 12M150 54v8h-8" />
      </g>
    </svg>
  );
}
