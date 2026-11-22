import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "volume",
  category: "units",
  title: "Volume",
  aka: ["Litres to gallons", "Cups", "Fluid ounces", "Cubic feet", "Capacity"],
  quantity: "volume",
  summary: "Millilitres and litres against US kitchen measures, gallons and cubic feet.",
  key: "A US gallon is about 3.8 L. A litre is a little more than a US quart.",
  body: [
    "US and imperial (UK) gallons, pints and fluid ounces are different sizes. The imperial gallon is about 20% bigger. Check which one a label or old recipe means.",
  ],
  units: [
    { id: "ml", name: "Millilitre", symbol: "mL", toBase: 0.001 },
    { id: "l", name: "Litre", symbol: "L", toBase: 1 },
    { id: "m3", name: "Cubic metre", symbol: "m³", toBase: 1000 },
    { id: "tsp", name: "Teaspoon (US)", symbol: "tsp", toBase: 0.00492892159375 },
    { id: "tbsp", name: "Tablespoon (US)", symbol: "tbsp", toBase: 0.01478676478125 },
    { id: "floz", name: "Fluid ounce (US)", symbol: "fl oz", toBase: 0.0295735295625 },
    { id: "cup", name: "Cup (US)", symbol: "cup", toBase: 0.2365882365 },
    { id: "qt", name: "Quart (US)", symbol: "qt", toBase: 0.946352946 },
    { id: "gal", name: "Gallon (US)", symbol: "gal", toBase: 3.785411784 },
    { id: "gal-imp", name: "Gallon (imperial)", symbol: "imp gal", toBase: 4.54609 },
    { id: "in3", name: "Cubic inch", symbol: "in³", toBase: 0.016387064 },
    { id: "ft3", name: "Cubic foot", symbol: "ft³", toBase: 28.316846592 },
  ],
  rulesOfThumb: [
    "3 tsp = 1 tbsp; 2 tbsp = 1 fl oz; 8 fl oz = 1 cup; 4 cups = 1 quart; 4 quarts = 1 gallon.",
    "1 fl oz ≈ 30 mL; 1 cup ≈ 240 mL.",
    "1 cubic foot ≈ 7.5 US gallons ≈ 28 L.",
    "A litre of water weighs about 1 kg.",
  ],
  uses: ["Water carrying and fuel", "Recipes", "Concrete and soil by the bag", "Tank sizes"],
  tags: ["measuring", "water"],
  related: ["mass", "length"],
  status: "draft",
  order: 5,
});
