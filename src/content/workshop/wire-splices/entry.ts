import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wire-splices",
  category: "workshop",
  title: "Splice & heat-shrink",
  aka: [
    "Solder splice",
    "Lineman's splice",
    "Western Union splice",
    "Heat shrink tubing",
    "Butt connector",
  ],
  kind: "electronics",
  difficulty: "easy",
  summary:
    "Join low-voltage wires with a twisted, soldered splice or a crimp, then seal it with heat-shrink.",
  key: "Slide the heat-shrink on before you join the wires. Everyone forgets once.",
  body: [
    "Heat-shrink is sold by its diameter before shrinking and a ratio such as 2:1 or 3:1. Pick one that slides over the joint and shrinks tight onto the wire. Adhesive-lined tube seals out water for car, boat and outdoor wiring.",
    "This is for low-voltage and appliance-cord-style work. Splices in house wiring go in a junction box with rated connectors.",
  ],
  reference: [
    {
      term: "Inline (Western Union) splice",
      detail: "Each wire wraps tightly around the other. Strong in tension; solder, then shrink.",
    },
    {
      term: "Parallel (pigtail) splice",
      detail: "Ends twisted side by side. Easy, but weak in pull.",
    },
    {
      term: "Crimp butt connector",
      detail:
        "No heat needed. Use the right die size and pull-test; heat-shrink versions seal too.",
    },
  ],
  gear: ["Wire strippers", "Iron and solder", "Heat-shrink tubing", "Heat gun or lighter"],
  steps: [
    { caption: "Slip heat-shrink over one wire, well away from the joint." },
    { caption: "Strip about 15 mm from each end and twist the strands tight." },
    { caption: "Cross the wires and wrap each end around the other, three or four turns." },
    { caption: "Heat the splice and flow solder into it until it wicks through. Let it cool." },
    { caption: "Slide the tube over the joint and shrink it evenly with a heat gun." },
  ],
  safety: ["Disconnect power or the battery first."],
  uses: [
    "Car and trailer wiring",
    "Extending speaker wire",
    "LED strips",
    "Repairing a cut cord on a low-voltage device",
  ],
  tags: ["soldering", "electronics", "wire"],
  related: ["soldering-basics", "wire-connectors", "wire-gauge"],
  status: "draft",
  order: 4,
});
