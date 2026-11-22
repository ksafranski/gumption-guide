import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "energy",
  category: "units",
  title: "Energy",
  aka: ["Calories", "Kilowatt-hours", "BTU", "Joules", "Food energy"],
  quantity: "energy",
  summary:
    "Joules, food calories, kilowatt-hours and BTU: the same thing counted in kitchens, power bills and furnaces.",
  key: "A food Calorie is a kilocalorie: enough to warm 1 kg of water by 1 °C.",
  body: [
    "Food labels write Calorie (capital C) or kcal for 1,000 small calories. Battery packs list watt-hours; electric bills list kilowatt-hours; furnaces and stoves list BTU.",
  ],
  units: [
    { id: "j", name: "Joule", symbol: "J", toBase: 1 },
    { id: "kj", name: "Kilojoule", symbol: "kJ", toBase: 1000 },
    { id: "cal", name: "Calorie (small)", symbol: "cal", toBase: 4.184 },
    { id: "kcal", name: "Kilocalorie (food Calorie)", symbol: "kcal", toBase: 4184 },
    { id: "wh", name: "Watt-hour", symbol: "Wh", toBase: 3600 },
    { id: "kwh", name: "Kilowatt-hour", symbol: "kWh", toBase: 3600000 },
    { id: "btu", name: "British thermal unit", symbol: "BTU", toBase: 1055.05585262 },
    { id: "ftlbf", name: "Foot-pound-force", symbol: "ft·lbf", toBase: 1.3558179483314004 },
  ],
  rulesOfThumb: [
    "1 kWh ≈ 860 kcal ≈ 3,412 BTU.",
    "Bringing 1 L of cold water to a boil takes about 80–90 kcal (around 350 kJ) of heat, before stove losses.",
    "2,000 kcal a day averages out to about 100 W, like a bright old light bulb, running all day.",
    "A US gallon of gasoline holds about 33.7 kWh.",
  ],
  uses: ["Trail food planning", "Battery and power-bank sizing", "Stove fuel and heater ratings"],
  tags: ["measuring", "power"],
  related: ["power", "purify-water", "temperature"],
  status: "draft",
  order: 12,
});
