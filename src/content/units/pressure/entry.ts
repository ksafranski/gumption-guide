import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pressure",
  category: "units",
  title: "Pressure",
  aka: ["PSI to bar", "Tire pressure", "kPa", "Atmospheres", "Inches of mercury"],
  quantity: "pressure",
  summary:
    "Force spread over an area: pascals, bar, psi, atmospheres and the barometer's inches of mercury.",
  key: "1 bar ≈ 1 atmosphere ≈ 14.5 psi ≈ 100 kPa.",
  body: [
    "Tire and compressor gauges read gauge pressure: how far above the surrounding air. Barometers and weather reports give absolute pressure. Add about 1 atm to a gauge reading to get absolute.",
  ],
  units: [
    { id: "pa", name: "Pascal", symbol: "Pa", toBase: 1 },
    { id: "kpa", name: "Kilopascal", symbol: "kPa", toBase: 1000 },
    { id: "bar", name: "Bar", symbol: "bar", toBase: 100000 },
    { id: "psi", name: "Pound per square inch", symbol: "psi", toBase: 6894.757293168 },
    { id: "atm", name: "Standard atmosphere", symbol: "atm", toBase: 101325 },
    { id: "inhg", name: "Inch of mercury", symbol: "inHg", toBase: 3386.389 },
    { id: "mmhg", name: "Millimetre of mercury", symbol: "mmHg", toBase: 133.322387415 },
  ],
  rulesOfThumb: [
    "Every 10 m (33 ft) of water depth adds about 1 atm.",
    "Sea-level air is about 29.9 inHg or 1013 hPa (millibars).",
    "Near sea level, air pressure drops about 1 inHg per 1,000 ft of climb.",
    "A falling barometer over a few hours often means weather is coming in.",
  ],
  uses: [
    "Tires and inflatables",
    "Air compressors and tools",
    "Weather and altitude",
    "Water systems",
  ],
  tags: ["measuring", "weather"],
  related: ["force", "area"],
  status: "draft",
  order: 7,
});
