import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pace-count",
  category: "fieldcraft",
  title: "Pace count",
  aka: ["Pacing", "Dead reckoning distance", "Ranger beads"],
  difficulty: "easy",
  summary: "Measure distance on foot by counting steps you've calibrated against a known length.",
  key: "Count every time the same foot lands. Know your number per 100 m, and recount on slopes.",
  gear: [
    "A measured 100 m (or 100 yd) course",
    "Something to tally with: beads, knots in a cord, a pebble in a pocket",
  ],
  steps: [
    { caption: "Lay out or find a measured 100 m: a track, a field, or a tape." },
    { caption: "Walk it at your normal pace, counting only when your left foot lands." },
    { caption: "Walk it two or three more times and average. That's your pace count." },
    { caption: "On the move, tally each 100 m and start the count again." },
    {
      caption:
        "Recalibrate for packs, hills, sand, snow and brush. All of them shorten your stride.",
    },
  ],
  safety: [
    "Pacing drifts over long distances. Check against landmarks on the map whenever you can.",
  ],
  tags: ["navigation", "measuring"],
  related: ["length", "read-contours", "find-north"],
  status: "draft",
  order: 8,
});
