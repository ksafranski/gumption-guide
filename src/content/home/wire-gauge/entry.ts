import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wire-gauge",
  category: "home",
  title: "Wire gauge & amps",
  aka: ["AWG", "American Wire Gauge", "Ampacity", "12/2", "14/2", "Romex", "NM cable"],
  kind: "electrical",
  difficulty: "easy",
  summary:
    "Thicker wire carries more current; the breaker protects the wire, so the two must match.",
  key: "Smaller gauge number, thicker wire. 14 AWG on 15 A, 12 AWG on 20 A, 10 AWG on 30 A.",
  body: [
    "The pairings above are the common North American rule for copper house wiring. Long runs, hot attics, bundled cables and aluminum wire all change the answer, so check the code that applies where you live.",
    "Cable labels read gauge then conductor count: 12/2 is two 12-gauge insulated wires plus a bare ground. 14/3 adds a red wire for three-way switches or split circuits.",
  ],
  reference: [
    {
      term: "14 AWG",
      detail: "15 A circuits: general lighting and outlets. Often white cable sheathing.",
    },
    {
      term: "12 AWG",
      detail: "20 A circuits: kitchens, bathrooms, garages. Often yellow sheathing.",
    },
    { term: "10 AWG", detail: "30 A circuits: dryers, water heaters. Often orange sheathing." },
    {
      term: "Extension cords",
      detail:
        "Same idea: 16 AWG is light duty, 12 AWG for heaters and power tools. Long cords need thicker wire.",
    },
  ],
  safety: [
    "Never put 14 AWG wire on a 20 A breaker, even for one short run.",
    "Aluminum branch wiring (some 1960s–70s houses) needs special connectors and an electrician's eye.",
  ],
  uses: ["Adding an outlet", "Choosing an extension cord", "Reading cable labels"],
  tags: ["electrical", "wire"],
  related: ["circuit-breakers", "wire-colors", "wire-connectors"],
  status: "draft",
  order: 2,
});
