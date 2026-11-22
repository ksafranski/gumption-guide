import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "old-lengths",
  category: "units",
  title: "Old & odd lengths",
  aka: ["Chains", "Rods", "Furlongs", "Hands", "Cubits", "Leagues", "Surveyor's chain"],
  quantity: "length",
  summary:
    "Chains, rods, furlongs and hands: the lengths behind old deeds, horse heights and race distances.",
  key: "A chain is 66 ft, 22 yd: a cricket pitch. Ten chains make a furlong, eight furlongs a mile.",
  body: [
    "Gunter's chain of 100 links was the surveyor's tool for centuries, which is why old property lines and road allowances come in multiples of 66 ft. An acre is one chain by one furlong.",
    "Body-based units like the cubit and span varied by time and place. Values here are the common customary ones.",
  ],
  units: [
    { id: "link", name: "Link", symbol: "li", toBase: 0.201168 },
    { id: "hand", name: "Hand", symbol: "hh", toBase: 0.1016 },
    { id: "span", name: "Span", symbol: "span", toBase: 0.2286 },
    { id: "cubit", name: "Cubit (18 in)", symbol: "cubit", toBase: 0.4572 },
    { id: "rod", name: "Rod / pole / perch", symbol: "rd", toBase: 5.0292 },
    { id: "chain", name: "Chain (Gunter's)", symbol: "ch", toBase: 20.1168 },
    { id: "furlong", name: "Furlong", symbol: "fur", toBase: 201.168 },
    { id: "cable", name: "Cable (1/10 nmi)", symbol: "cable", toBase: 185.2 },
    { id: "nmi", name: "Nautical mile", symbol: "nmi", toBase: 1852 },
    { id: "league", name: "League (3 mi)", symbol: "lea", toBase: 4828.032 },
    { id: "m", name: "Metre", symbol: "m", toBase: 1 },
    { id: "ft", name: "Foot", symbol: "ft", toBase: 0.3048 },
  ],
  rulesOfThumb: [
    "A rod is 16½ ft, about the length of a canoe. Four rods make a chain.",
    'Horses are measured in hands of 4 in: "15.2 hands" means 15 hands and 2 inches, not 15.2.',
    "A nautical mile is one minute of latitude, about 1.15 statute miles.",
    "A span is the stretch from thumb tip to little-finger tip, about 9 in. Measure yours.",
  ],
  uses: [
    "Reading old deeds and survey plats",
    "Horse heights",
    "Race distances",
    "Charts and sailing",
  ],
  tags: ["measuring", "history"],
  related: ["length", "area", "pace-count"],
  status: "draft",
  order: 10,
});
