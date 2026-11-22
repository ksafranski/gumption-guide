import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "temperature",
  category: "units",
  title: "Temperature",
  aka: ["Celsius to Fahrenheit", "Fahrenheit to Celsius", "Kelvin"],
  quantity: "temperature",
  summary:
    "Celsius, Fahrenheit and kelvin. Scales with different zeros, so convert with an offset, not just a factor.",
  key: "°F = °C × 1.8 + 32.",
  units: [
    { id: "c", name: "Celsius", symbol: "°C", toBase: 1, offset: 273.15 },
    { id: "f", name: "Fahrenheit", symbol: "°F", toBase: 5 / 9, offset: (459.67 * 5) / 9 },
    { id: "k", name: "Kelvin", symbol: "K", toBase: 1 },
  ],
  rulesOfThumb: [
    "Quick °C → °F: double it and add 30. Close near room temperature, drifts at the extremes.",
    "−40 is the same in both scales.",
    "10 °C ≈ 50 °F, 20 °C ≈ 68 °F, 30 °C ≈ 86 °F.",
    "A change of 1 °C is a change of 1.8 °F.",
  ],
  uses: ["Weather and gear ratings", "Cooking", "Glue and finish cure temps"],
  tags: ["measuring"],
  related: ["length"],
  status: "draft",
  order: 3,
});
