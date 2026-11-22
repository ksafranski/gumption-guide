import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "peaucellier",
  category: "mechanisms",
  title: "Peaucellier–Lipkin linkage",
  aka: ["Peaucellier cell", "Inversor", "Exact straight-line linkage"],
  motion: "osc-lin",
  family: "linkages",
  summary:
    "Seven bars and pivots only — yet one point moves in a mathematically perfect straight line.",
  body: [
    "Two long bars and a diamond of four short bars form an \"inversor\": the diamond's far corner always sits at a distance inversely proportional to its near corner's distance from the fixed pivot.",
    "Geometry says that inverting a circle that passes through the pivot gives a straight line. So driving the near corner around such a circle (with the orange crank) sends the far corner along an exact straight line. Discovered in 1864, it was the first linkage to do this without guides.",
  ],
  key: "Inversion turns a circle through the pivot into a straight line.",
  uses: [
    "Early steam-engine guides",
    "Precision instruments",
    "Teaching geometry",
    "Ventilation fans (historic)",
  ],
  tags: ["linkage", "straight-line"],
  related: ["watt-linkage", "chebyshev", "cardan-gears"],
  outLabel: "Point position",
  status: "reviewed",
  order: 27,
});
