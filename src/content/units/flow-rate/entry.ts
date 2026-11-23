import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "flow-rate",
  category: "units",
  title: "Flow rate",
  aka: ["GPM", "Gallons per minute", "Litres per minute", "Bucket test", "Water flow"],
  quantity: "flow rate",
  summary:
    "How much water moves per minute. It sizes pumps, showerheads, irrigation and well systems.",
  key: "Bucket test: time how long a known bucket takes to fill. Flow = bucket size ÷ minutes.",
  body: [
    "A 5-gallon bucket that fills in 1 minute 15 seconds is 5 ÷ 1.25 = 4 gpm, about 15 L/min. Run the faucet fully open for a fair reading.",
    "Flow and pressure are different things. A narrow pipe can have high pressure at rest and still deliver poor flow when two fixtures run at once.",
  ],
  units: [
    { id: "lpm", name: "Litres per minute", symbol: "L/min", toBase: 1 },
    { id: "gpm", name: "US gallons per minute", symbol: "gpm", toBase: 3.785411784 },
    { id: "igpm", name: "Imperial gallons per minute", symbol: "imp gpm", toBase: 4.54609 },
    { id: "lps", name: "Litres per second", symbol: "L/s", toBase: 60 },
    { id: "m3h", name: "Cubic metres per hour", symbol: "m³/h", toBase: 1000 / 60 },
    { id: "gph", name: "US gallons per hour", symbol: "gph", toBase: 3.785411784 / 60 },
  ],
  rulesOfThumb: [
    "1 gpm ≈ 3.8 L/min. 10 L/min ≈ 2.6 gpm.",
    "Most US showerheads are limited to 2.5 gpm (≈ 9.5 L/min); many are lower.",
    "Drip emitters are rated in gallons or litres per hour; add them up to size the supply.",
  ],
  uses: ["Choosing a pump or showerhead", "Sizing drip irrigation", "Checking a well or supply"],
  tags: ["water", "measuring", "plumbing"],
  related: ["volume", "pressure", "replace-a-showerhead", "watering"],
  status: "draft",
  order: 19,
});
