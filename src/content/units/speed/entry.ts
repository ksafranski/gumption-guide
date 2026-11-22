import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "speed",
  category: "units",
  title: "Speed",
  aka: ["mph to km/h", "Knots", "Metres per second", "Wind speed"],
  quantity: "speed",
  summary: "Distance per time on the road, the water and in the wind.",
  key: "m/s × 3.6 = km/h. 1 knot ≈ 1.15 mph ≈ 1.85 km/h.",
  units: [
    { id: "ms", name: "Metre per second", symbol: "m/s", toBase: 1 },
    { id: "kmh", name: "Kilometre per hour", symbol: "km/h", toBase: 1 / 3.6 },
    { id: "mph", name: "Mile per hour", symbol: "mph", toBase: 0.44704 },
    { id: "kn", name: "Knot", symbol: "kn", toBase: 1852 / 3600 },
    { id: "fts", name: "Foot per second", symbol: "ft/s", toBase: 0.3048 },
  ],
  rulesOfThumb: [
    "mph × 1.6 ≈ km/h; km/h × 0.6 ≈ mph.",
    "60 mph = 88 ft/s. At highway speed you cover a football field every few seconds.",
    "A brisk walk is about 3 mph or 5 km/h.",
    "Naismith's rule for hikes: an hour per 3 mi (5 km), plus an hour per 2,000 ft (600 m) of climb.",
    "A knot is one nautical mile (1,852 m) per hour.",
  ],
  uses: ["Wind and boating forecasts", "Hiking time estimates", "Road signs abroad"],
  tags: ["measuring", "weather"],
  related: ["length", "pace-count"],
  status: "draft",
  order: 9,
});
