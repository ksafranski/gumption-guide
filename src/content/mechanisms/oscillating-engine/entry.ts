import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "oscillating-engine",
  category: "mechanisms",
  title: "Oscillating cylinder",
  aka: ["Oscillating engine", "Wobbler", "Rocking cylinder"],
  motion: "lin-rot",
  family: "linkages",
  summary:
    "The whole cylinder rocks on a pivot, so the piston rod can push straight onto the crank with no connecting rod.",
  body: [
    "The piston rod is fixed to the piston and pinned directly to the crank. As the crank turns, the cylinder tips back and forth on its trunnion to follow it.",
    "The rocking motion itself can open and close the steam ports, so the engine needs no separate valve gear. That simplicity made it a favourite for paddle steamers and toy engines.",
  ],
  key: "Let the cylinder swing, and the piston rod becomes the connecting rod.",
  uses: ["Toy steam engines", "Paddle steamers", "Hydraulic rams on diggers", "Model engines"],
  tags: ["linkage", "rotary-to-linear"],
  related: ["slider-crank", "eccentric"],
  outLabel: "Crank angle",
  status: "reviewed",
  order: 17,
});
