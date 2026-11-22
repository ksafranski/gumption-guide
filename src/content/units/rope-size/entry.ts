import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "rope-size",
  category: "units",
  title: "Rope size",
  aka: ["Rope diameter", "Rope circumference", "Cordage sizes"],
  quantity: "rope diameter",
  summary:
    "Modern rope is sold by diameter; old rope, and some marine rope still, by circumference.",
  key: 'Circumference ≈ 3 × diameter. A "3-inch rope" in old books is about 1 in (24 mm) thick.',
  body: [
    "Older seamanship and rigging texts give rope size as its circumference in inches. Read them as thick hawsers and you'll overbuild everything by three times.",
  ],
  units: [
    { id: "mm", name: "Millimetre, diameter", symbol: "mm ⌀", toBase: 1 },
    { id: "in-dia", name: "Inch, diameter", symbol: "in ⌀", toBase: 25.4 },
    { id: "in-circ", name: "Inch, circumference", symbol: "in circ", toBase: 25.4 / Math.PI },
  ],
  rulesOfThumb: [
    "1/4 in ≈ 6 mm, 3/8 in ≈ 10 mm, 1/2 in ≈ 12–13 mm. Rope makers round to the nearest size.",
    'Common "paracord" is about 4 mm across.',
    "Thicker isn't always better for knots: big rope in a small hitch holds poorly. Match knot and diameter to the job.",
  ],
  uses: ["Reading old rigging and knot books", "Buying rope", "Matching line to blocks and cleats"],
  tags: ["measuring", "rope"],
  related: ["length", "block-tackle", "bowline"],
  status: "draft",
  order: 16,
});
