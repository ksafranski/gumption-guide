import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "reuleaux-cam",
  category: "mechanisms",
  title: "Triangular cam",
  aka: ["Reuleaux triangle cam", "Constant-width cam", "Yoke cam"],
  motion: "rot-lin",
  family: "cams",
  summary:
    "A curved triangle of constant width, turning inside a square yoke, pushes it up and down with pauses at each end.",
  body: [
    "A Reuleaux triangle is as wide in every direction as it is in any other, so it always touches both the top and bottom of a yoke exactly its width apart — no spring needed to keep contact.",
    "Pivoted at one corner, it lifts the yoke, holds it still while a curved side slides along, lowers it, and holds again. Those built-in dwells made it useful for early steam-engine valves, which needed to stay open or shut for part of each stroke.",
  ],
  key: "Constant width means positive drive both ways, with dwells built in.",
  uses: ["Early steam valve gear", "Film projector claws", "Square-hole drills", "Rotary engines"],
  tags: ["cam", "rotary-to-linear"],
  related: ["cam", "heart-cam", "scotch-yoke"],
  outLabel: "Yoke height",
  status: "reviewed",
  order: 33,
});
