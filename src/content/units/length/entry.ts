import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "length",
  category: "units",
  title: "Length",
  aka: ["Distance", "Inches to millimetres", "Feet to metres"],
  quantity: "length",
  summary: "Metric and US customary lengths, from the millimetre to the mile.",
  key: "1 inch = 25.4 mm exactly. Everything else follows from that.",
  body: [
    "Around anything round, the distance is π × diameter, a bit over three times across. That's how far a wheel rolls, or a rope winds, per turn.",
  ],
  units: [
    { id: "mm", name: "Millimetre", symbol: "mm", toBase: 0.001 },
    { id: "cm", name: "Centimetre", symbol: "cm", toBase: 0.01 },
    { id: "m", name: "Metre", symbol: "m", toBase: 1 },
    { id: "km", name: "Kilometre", symbol: "km", toBase: 1000 },
    { id: "in", name: "Inch", symbol: "in", toBase: 0.0254 },
    { id: "ft", name: "Foot", symbol: "ft", toBase: 0.3048 },
    { id: "yd", name: "Yard", symbol: "yd", toBase: 0.9144 },
    { id: "fathom", name: "Fathom", symbol: "ftm", toBase: 1.8288 },
    { id: "mi", name: "Mile", symbol: "mi", toBase: 1609.344 },
  ],
  rulesOfThumb: [
    "A fathom (6 ft) is about one adult arm span, fingertip to fingertip.",
    "A metre is a long stride, or a yard and a bit (about 39 in).",
    "Your height is roughly your arm span. Measure yours once and you carry a ruler.",
    "A mile is about 1.6 km; a kilometre is about ⅝ mile.",
    "1/16 in ≈ 1.6 mm, 1/8 in ≈ 3.2 mm, 1/4 in ≈ 6.4 mm.",
  ],
  uses: ["Reading imported drawings", "Rope and line length", "Wheel and drum travel"],
  tags: ["measuring", "circumference"],
  related: ["rack-pinion", "differential-windlass", "belt-drive"],
  status: "draft",
  order: 1,
});
