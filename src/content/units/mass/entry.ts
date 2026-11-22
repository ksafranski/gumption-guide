import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "mass",
  category: "units",
  title: "Mass & weight",
  aka: ["Pounds to kilograms", "Ounces to grams", "Tons", "Pack weight"],
  quantity: "mass",
  summary: "Grams, kilograms and tonnes against ounces, pounds, stones and tons.",
  key: "1 lb = 0.45359237 kg exactly. Call it 2.2 lb per kilogram.",
  body: [
    'Everyday "weight" in kilograms or pounds is really mass. The force it hangs with is in newtons or pounds-force, which is a separate page.',
  ],
  units: [
    { id: "g", name: "Gram", symbol: "g", toBase: 0.001 },
    { id: "kg", name: "Kilogram", symbol: "kg", toBase: 1 },
    { id: "t", name: "Tonne (metric)", symbol: "t", toBase: 1000 },
    { id: "oz", name: "Ounce", symbol: "oz", toBase: 0.028349523125 },
    { id: "lb", name: "Pound", symbol: "lb", toBase: 0.45359237 },
    { id: "st", name: "Stone", symbol: "st", toBase: 6.35029318 },
    { id: "ton-us", name: "Short ton (US)", symbol: "ton", toBase: 907.18474 },
  ],
  rulesOfThumb: [
    "1 oz ≈ 28 g. 100 g ≈ 3.5 oz.",
    "A litre of water is about 1 kg; a US gallon is about 8.3 lb.",
    "A US (short) ton is 2,000 lb, about 0.9 tonne. A metric tonne is about 2,205 lb.",
    "A stone is 14 lb.",
  ],
  uses: ["Pack and gear weights", "Recipes", "Trailer and roof-rack limits"],
  tags: ["measuring"],
  related: ["force", "volume"],
  status: "draft",
  order: 4,
});
