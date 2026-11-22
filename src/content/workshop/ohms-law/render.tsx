import { label } from "@/renderers/illustration/hardware";

// The V / I·R triangle.
export default function OhmsLawArt() {
  const t = { ...label, fontSize: 18, fill: "var(--ink)", fontFamily: "var(--display)" };
  return (
    <svg viewBox="0 0 160 120">
      <path d="M80 10l62 98H18z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4" />
      <path d="M40 74h80M80 74v34" stroke="var(--ink)" strokeWidth="1.2" />
      <text x="80" y="62" textAnchor="middle" style={{ ...t, fill: "var(--input)" }}>
        V
      </text>
      <text x="58" y="100" textAnchor="middle" style={{ ...t, fill: "var(--output)" }}>
        I
      </text>
      <text x="102" y="100" textAnchor="middle" style={t}>
        R
      </text>
    </svg>
  );
}
