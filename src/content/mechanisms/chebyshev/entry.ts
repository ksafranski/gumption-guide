import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "chebyshev",
  category: "mechanisms",
  title: "Chebyshev lambda",
  aka: ["Lambda linkage", "Chebyshev linkage", "Walking linkage"],
  motion: "rot-lin",
  family: "linkages",
  summary:
    "A four-bar linkage whose long coupler tip runs along a near-straight line for half the cycle, then lifts and returns.",
  body: [
    "The crank turns fully; the rocker is pinned to the middle of the long coupler. For about half of every turn the coupler's tip travels along an almost perfectly straight, almost constant-speed line, then it swings up and back in a loop.",
    'That D-shaped path is exactly what a walking leg needs: a flat stride on the ground and a lifted return. Pafnuty Chebyshev used it in his 1878 "plantigrade machine", one of the first walking robots.',
  ],
  key: "Flat stride, lifted return — a leg from one rotation.",
  uses: ["Walking robots", "Strandbeest-style toys", "Film advance mechanisms", "Conveyor pushers"],
  tags: ["linkage", "rotary-to-linear", "straight-line"],
  related: ["four-bar", "peaucellier", "watt-linkage"],
  outLabel: "Tip height",
  status: "reviewed",
  order: 28,
});
