import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "bleed-a-radiator",
  category: "home",
  title: "Bleed a radiator",
  aka: [
    "Radiator cold at the top",
    "Bleed valve",
    "Radiator key",
    "Air in radiator",
    "Hot water heating",
  ],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "Air trapped at the top of a hot-water radiator stops it heating. Open the bleed valve until water comes out.",
  key: "Cold at the top, warm at the bottom means air. Bleed with the heating off, then check the boiler pressure.",
  body: [
    "This is for hot-water radiators. Steam radiators have an automatic air vent instead; a stuck one is cleaned or replaced, not bled with a key.",
    "On a sealed (pressurized) system, bleeding lets pressure drop. Check the boiler's gauge afterward and top it up to the pressure the boiler's manual gives.",
  ],
  gear: ["Radiator key (or a flat screwdriver for slotted valves)", "Rag and a small cup"],
  steps: [
    { caption: "Turn the heating off and let the radiators cool." },
    {
      caption:
        "Hold a rag under the bleed valve at the top corner and turn the key a quarter to half a turn counterclockwise.",
    },
    { caption: "Air hisses out. When a steady trickle of water follows, close the valve." },
    {
      caption:
        "Do every radiator that needs it, check the boiler pressure, and turn the heating back on.",
    },
  ],
  safety: ["Water from a hot system scalds. Bleed only when it's cool."],
  uses: ["Radiators cold at the top", "Gurgling pipes", "Start of the heating season"],
  tags: ["plumbing", "water"],
  related: ["water-heater-basics", "shut-off-valves", "pressure"],
  status: "draft",
  order: 27,
});
