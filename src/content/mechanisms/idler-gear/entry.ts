import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "idler-gear",
  category: "mechanisms",
  title: "Idler gear",
  aka: ["Gear train", "Intermediate gear", "Three-gear train"],
  motion: "rot-rot",
  family: "gears",
  summary:
    "A gear placed between two others keeps them turning the same way without changing the ratio.",
  body: [
    "Every external mesh reverses direction, so two meshes in a row cancel out: the first and last gears turn the same way. The idler's own tooth count drops out of the ratio — only the first and last gears matter (12 : 16 here).",
    "Idlers also bridge a gap between shafts that are too far apart for two gears, and a sliding idler is how many machines engage reverse.",
  ],
  key: "The idler changes direction and spacing, never the ratio.",
  uses: ["Car reverse gear", "Printers", "Clockwork", "Lathe change gears"],
  tags: ["gearing", "speed-ratio"],
  related: ["spur-gears", "planetary"],
  outLabel: "Output gear angle",
  status: "reviewed",
  order: 23,
});
