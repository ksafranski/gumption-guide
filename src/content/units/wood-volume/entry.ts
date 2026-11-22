import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wood-volume",
  category: "units",
  title: "Firewood & lumber volume",
  aka: ["Cord", "Face cord", "Board foot", "Stere", "Rick"],
  quantity: "volume",
  summary: "Cords for stacked firewood, board feet for lumber, and the metric stere.",
  key: "A full cord is a stack 4 ft high, 4 ft deep and 8 ft long: 128 ft³.",
  body: [
    'A cord measures the stack, air gaps and all, so how tightly it\'s stacked matters. A "face cord" or "rick" is one row 4 ft high and 8 ft long, but only one log length deep. With 16 in logs that\'s a third of a cord. Ask the log length before you compare prices.',
    "A board foot is 12 × 12 × 1 in of wood, figured on nominal size for dimension lumber and on actual rough size for hardwood.",
  ],
  units: [
    { id: "bf", name: "Board foot", symbol: "bd ft", toBase: 0.002359737216 },
    { id: "ft3", name: "Cubic foot", symbol: "ft³", toBase: 0.028316846592 },
    { id: "yd3", name: "Cubic yard", symbol: "yd³", toBase: 0.764554857984 },
    { id: "stere", name: "Stere (stacked m³)", symbol: "st", toBase: 1 },
    { id: "cord", name: "Cord", symbol: "cd", toBase: 3.624556363776 },
  ],
  rulesOfThumb: [
    "Board feet = thickness (in) × width (in) × length (ft) ÷ 12. An 8 ft 2×4 is 5⅓ board feet.",
    "1 cord ≈ 3.6 steres.",
    "Seasoned hardwood firewood: aim for under about 20% moisture; split ends show cracks and sound hollow when knocked together.",
  ],
  uses: ["Buying firewood", "Pricing hardwood lumber", "Sizing a woodshed"],
  tags: ["measuring", "fire"],
  related: ["volume", "split-firewood", "fire-lay"],
  status: "draft",
  order: 15,
});
