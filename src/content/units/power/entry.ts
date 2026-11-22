import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "power",
  category: "units",
  title: "Power",
  aka: ["Watts", "Horsepower", "BTU per hour", "Kilowatts"],
  quantity: "power",
  summary: "How fast energy is used or delivered: watts, horsepower and BTU per hour.",
  key: "Watts = volts × amps. 1 hp ≈ 746 W.",
  body: [
    "Energy is the tank; power is the flow rate. A 100 Wh battery runs a 10 W light for about 10 hours, or a 100 W device for about one, less conversion losses.",
  ],
  units: [
    { id: "w", name: "Watt", symbol: "W", toBase: 1 },
    { id: "kw", name: "Kilowatt", symbol: "kW", toBase: 1000 },
    { id: "hp", name: "Horsepower (mechanical)", symbol: "hp", toBase: 745.69987158227022 },
    { id: "ps", name: "Metric horsepower", symbol: "PS", toBase: 735.49875 },
    { id: "btuh", name: "BTU per hour", symbol: "BTU/h", toBase: 0.29307107017 },
    {
      id: "ftlbfs",
      name: "Foot-pound-force per second",
      symbol: "ft·lbf/s",
      toBase: 1.3558179483314004,
    },
  ],
  rulesOfThumb: [
    "A typical US 15 A, 120 V circuit tops out around 1,800 W.",
    "Run time (hours) ≈ battery Wh ÷ device W. Knock off 10–20% for losses.",
    "A fit person can hold roughly 100–200 W pedalling for an hour; a horse, by the old definition, 746 W.",
    "1 kW ≈ 3,412 BTU/h. Space heaters top out near 1,500 W, about 5,100 BTU/h.",
  ],
  uses: ["Generator and inverter sizing", "Motors and engines", "Heaters and stoves"],
  tags: ["measuring", "power"],
  related: ["energy", "torque"],
  status: "draft",
  order: 13,
});
