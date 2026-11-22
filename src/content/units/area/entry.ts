import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "area",
  category: "units",
  title: "Area",
  aka: ["Square feet to square metres", "Acres", "Hectares"],
  quantity: "area",
  summary: "Square measures from the square inch to the square mile, with acres and hectares.",
  key: "Square the length factor: 1 m ≈ 3.28 ft, so 1 m² ≈ 10.8 ft².",
  units: [
    { id: "cm2", name: "Square centimetre", symbol: "cm²", toBase: 0.0001 },
    { id: "m2", name: "Square metre", symbol: "m²", toBase: 1 },
    { id: "ha", name: "Hectare", symbol: "ha", toBase: 10000 },
    { id: "km2", name: "Square kilometre", symbol: "km²", toBase: 1000000 },
    { id: "in2", name: "Square inch", symbol: "in²", toBase: 0.00064516 },
    { id: "ft2", name: "Square foot", symbol: "ft²", toBase: 0.09290304 },
    { id: "yd2", name: "Square yard", symbol: "yd²", toBase: 0.83612736 },
    { id: "acre", name: "Acre", symbol: "ac", toBase: 4046.8564224 },
    { id: "mi2", name: "Square mile", symbol: "mi²", toBase: 2589988.110336 },
  ],
  rulesOfThumb: [
    "A hectare is 100 m × 100 m, about 2.5 acres.",
    "An acre is about 209 ft on a side if it's square, or 43,560 ft².",
    "A 4 × 8 ft sheet of plywood is 32 ft², about 3 m².",
    "Double the side of a square and you get four times the area.",
  ],
  uses: ["Flooring, paint and roofing", "Tarp and tent footprints", "Land and garden plots"],
  tags: ["measuring"],
  related: ["length", "volume"],
  status: "draft",
  order: 6,
});
