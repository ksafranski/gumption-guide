import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "thumb-distance",
  category: "fieldcraft",
  title: "Estimating distance by thumb jump",
  aka: ["Thumb jump", "Range estimation", "Parallax", "Rangefinding"],
  difficulty: "easy",
  summary:
    "Sight past your thumb with one eye, then the other. How far it jumps across the scene, times ten, is the distance.",
  key: "Distance ≈ 10 × the jump. Your eye spacing is about a tenth of your reach.",
  steps: [
    { caption: "Hold your arm straight out, thumb up." },
    { caption: "Close your left eye and line your thumb up on the target." },
    { caption: "Switch eyes, without moving your thumb. It appears to jump sideways." },
    {
      caption:
        "Estimate how wide that jump is out at the target, using something of known size: a car (about 15 ft), a door, a person.",
    },
    {
      caption:
        "Multiply by 10. A thumb jump of about one car length means it's roughly 150 ft away.",
    },
  ],
  safety: [
    "It's an estimate, good to maybe ±20%. Check against the map when the distance matters.",
  ],
  uses: [
    "How far to that ridge?",
    "Distance to a landmark when navigating",
    "Judging a throw or a jump",
  ],
  tags: ["navigation", "measuring"],
  related: ["angle", "pace-count", "measure-tree-height", "read-contours"],
  status: "draft",
  order: 21,
});
