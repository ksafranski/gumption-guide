import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "differential-windlass",
  category: "mechanisms",
  title: "Differential windlass",
  aka: ["Chinese windlass", "Differential hoist", "Two-drum winch"],
  motion: "rot-lin",
  family: "belts",
  summary:
    "One rope winds onto a big drum while unwinding from a small one; the load rises by only half the difference.",
  body: [
    "Both drums share one axle. Turning the crank reels rope in on the large drum and pays it out from the small drum, so the loop holding the pulley shortens only by the difference in their circumferences.",
    "The load therefore rises very slowly for a lot of cranking — which means an enormous mechanical advantage from a compact winch. Make the drums nearly equal and the advantage grows without limit.",
  ],
  key: "Rise per turn = π × (big radius − small radius).",
  uses: ["Hand hoists", "Chain blocks", "Well windlasses", "Precision lifting"],
  tags: ["pulley", "rotary-to-linear", "mechanical-advantage", "rope", "circumference"],
  related: ["block-tackle", "worm-gear", "lead-screw"],
  outLabel: "Load height",
  status: "reviewed",
  order: 35,
});
