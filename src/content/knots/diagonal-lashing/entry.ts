import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "diagonal-lashing",
  category: "knots",
  title: "Diagonal lashing",
  aka: ["Cross brace lashing", "X lashing"],
  kind: "lashing",
  summary:
    "Binds two poles that cross at an angle or spring apart, like the braces of a frame, pulling them together as it goes.",
  key: "Timber hitch around both poles on one diagonal, wraps on the other diagonal, then the first, frap, clove hitch.",
  body: [
    "Use it where poles don't touch or want to spring apart, as cross braces do. The timber hitch draws them together before any wraps go on. Where poles already sit square and touching, a square lashing is simpler.",
  ],
  steps: [
    {
      caption:
        "Tie a timber hitch around both poles along one diagonal of the crossing. Pull it tight to draw the poles together.",
    },
    {
      caption:
        "Wrap three or four times along the other diagonal, then three or four along the first, each set lying side by side.",
    },
    { caption: "Frap: two or three turns between the poles, around the wraps, pulled hard." },
    { caption: "Finish with a clove hitch on either pole." },
  ],
  secure: "As tight as you pull each turn. Check and retighten natural-fiber lashings after rain.",
  untie: "hard",
  uses: [
    "Cross braces on frames and trestles",
    "Bracing a tripod or shelter frame",
    "Camp gadgets",
  ],
  tags: ["lashing", "rope", "outdoor-build"],
  related: ["square-lashing", "timber-hitch", "shear-lashing"],
  status: "draft",
  order: 17,
});
