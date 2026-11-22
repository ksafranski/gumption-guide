import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "daylight-left",
  category: "fieldcraft",
  title: "How much daylight is left",
  aka: ["Hand method", "Finger widths to sunset", "Time to sunset"],
  difficulty: "easy",
  summary: "Count finger widths between the sun and the horizon at arm's length.",
  key: "Each finger width is roughly 15 minutes. A full hand of four is about an hour.",
  steps: [
    { caption: "Stretch your arm out straight, palm toward you, fingers together and level." },
    { caption: "Line the bottom finger up on the horizon." },
    { caption: "Stack hands upward until you reach the bottom of the sun, counting fingers." },
    { caption: "Multiply by 15 minutes. That's about how long until the sun sets." },
  ],
  safety: [
    "Don't look straight at the sun. Squint past your fingers, or use the edge of the glare.",
    "It's a rough guide. The sun sets at a shallow angle far from the equator, so it overestimates there, especially in winter. Count on less time, not more.",
    "Usable light fades faster in forest and valleys than on open ridges.",
  ],
  tags: ["navigation"],
  related: ["find-north", "pace-count"],
  status: "draft",
  order: 7,
});
