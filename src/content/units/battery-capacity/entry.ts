import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "battery-capacity",
  category: "units",
  title: "Battery capacity & electrical units",
  aka: ["mAh", "Amp-hours", "Watt-hours", "Volts amps watts", "kWh", "Power bank size"],
  quantity: "electric charge",
  summary:
    "Battery capacity is charge, in milliamp-hours or amp-hours. Multiply by voltage to get energy in watt-hours.",
  key: "Wh = Ah × V. Watts = volts × amps. Compare batteries in watt-hours, not mAh, when voltages differ.",
  body: [
    "A 10,000 mAh power bank rated at 3.7 V holds about 37 Wh. A 12 V, 100 Ah camping battery holds about 1,200 Wh, over thirty times as much, though its amp-hour number is only ten times larger.",
    "Running cost: a 1,000 W heater running for one hour uses 1 kWh. Multiply by your electricity price per kWh.",
  ],
  units: [
    { id: "mah", name: "Milliamp-hour", symbol: "mAh", toBase: 3.6 },
    { id: "ah", name: "Amp-hour", symbol: "Ah", toBase: 3600 },
    { id: "c", name: "Coulomb", symbol: "C", toBase: 1 },
  ],
  rulesOfThumb: [
    "1 Ah = 1,000 mAh = 3,600 coulombs.",
    "Wh = Ah × volts; kWh = Wh ÷ 1,000.",
    "Hours of runtime ≈ battery Wh ÷ device watts, less 10–20% for losses (≈).",
    "Airlines usually limit carry-on power banks by watt-hours, often 100 Wh without approval. Check your airline.",
  ],
  uses: [
    "Sizing power banks and camping batteries",
    "Estimating runtime",
    "Reading appliance labels",
  ],
  tags: ["electrical", "power", "measuring"],
  related: ["ohms-law", "power", "energy"],
  status: "draft",
  order: 17,
});
