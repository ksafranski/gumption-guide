import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "troy-and-apothecary",
  category: "units",
  title: "Grains, troy & carats",
  aka: ["Troy ounce", "Grains", "Pennyweight", "Carat", "Dram", "Apothecary weight"],
  quantity: "mass",
  summary:
    "The small and specialist weights: grains for bullets and arrows, troy ounces for metal, carats for stones.",
  key: "The grain is the common root: 7,000 to the pound, 480 to the troy ounce.",
  body: [
    "A troy ounce (precious metals) is about 10% heavier than an ordinary avoirdupois ounce, but a troy pound is lighter than an ordinary pound because it has only 12 ounces.",
  ],
  units: [
    { id: "gr", name: "Grain", symbol: "gr", toBase: 0.06479891 },
    { id: "ct", name: "Carat (metric)", symbol: "ct", toBase: 0.2 },
    { id: "g", name: "Gram", symbol: "g", toBase: 1 },
    { id: "dwt", name: "Pennyweight", symbol: "dwt", toBase: 1.55517384 },
    { id: "dr", name: "Dram (avoirdupois)", symbol: "dr", toBase: 1.7718451953125 },
    { id: "oz", name: "Ounce (avoirdupois)", symbol: "oz", toBase: 28.349523125 },
    { id: "ozt", name: "Troy ounce", symbol: "oz t", toBase: 31.1034768 },
    { id: "lbt", name: "Troy pound", symbol: "lb t", toBase: 373.2417216 },
  ],
  rulesOfThumb: [
    "15.4 grains ≈ 1 gram.",
    "Arrow and bullet weights, and powder charges, are given in grains.",
    "A 1-carat stone weighs 0.2 g. (Karat with a K is gold purity, not weight: 24K is pure.)",
    "20 pennyweight = 1 troy ounce.",
  ],
  uses: ["Reloading and archery", "Jewellery and metal prices", "Old recipes and pharmacy texts"],
  tags: ["measuring", "history"],
  related: ["mass"],
  status: "draft",
  order: 14,
});
