import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "heart-cam",
  category: "mechanisms",
  title: "Heart cam",
  aka: ["Uniform-motion cam", "Constant-velocity cam", "Roller follower"],
  motion: "rot-lin",
  family: "cams",
  summary: "A heart-shaped cam raises and lowers its follower at a perfectly steady speed.",
  body: [
    "The cam's radius grows by the same amount for every degree of rotation, then shrinks the same way — so the follower rises and falls at constant speed. Compare its zig-zag graph with the smooth one from the plate cam.",
    "A roller on the follower reduces friction. The catch is the sharp reversal at the top and bottom, which causes a jolt at high speed. Heart cams classically wound thread evenly onto bobbins.",
  ],
  key: "Equal turn → equal lift: a straight-sided graph.",
  uses: ["Sewing-machine bobbin winders", "Fishing reels", "Stopwatch reset", "Textile machines"],
  tags: ["cam", "rotary-to-linear"],
  related: ["cam", "eccentric"],
  outLabel: "Follower lift",
  status: "reviewed",
  order: 24,
});
