import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "shims",
  category: "building",
  title: "Shims & leveling",
  aka: ["Cedar shims", "Composite shims", "Pack out", "Leveling a cabinet", "Shim a door jamb"],
  kind: "technique",
  difficulty: "easy",
  summary:
    "Thin tapered wedges fill gaps so doors, windows, cabinets and appliances sit plumb, level and solidly supported.",
  key: "Use shims in opposing pairs, thick end to thin end, so the faces stay parallel. Shim behind every fastener.",
  body: [
    "A screw through a gap pulls the part toward the wall and twists it out of plumb. A shim pack behind each screw gives it something solid to bear against.",
    "Slide pairs in from opposite sides until snug. Fine adjustments come from sliding one shim against the other, not from hammering.",
  ],
  reference: [
    {
      term: "Wood (cedar or pine)",
      detail: "Cheap, easy to score and snap off. Can compress or rot if wet.",
    },
    {
      term: "Composite / plastic",
      detail: "Won't rot or compress. Outdoors, under appliances, in wet areas.",
    },
    {
      term: "Horseshoe shims",
      detail: "U-shaped plastic for decks, ledgers and posts; slip around a bolt.",
    },
    {
      term: "Leveling feet",
      detail: "Many cabinets and appliances have screw feet; adjust those first.",
    },
  ],
  gear: ["Shims", "Level", "Utility knife", "Screws"],
  steps: [
    { caption: "Set the part in place and find the high point with a level." },
    {
      caption:
        "Slide shim pairs in at the low points and at every fastener location until it reads level or plumb.",
    },
    { caption: "Fasten through the shims, checking again as you tighten." },
    { caption: "Score the protruding shims with a knife and snap them off flush." },
  ],
  uses: ["Door and window installs", "Cabinets and vanities", "Rocking tables and appliances"],
  tags: ["framing", "measuring"],
  related: ["square-level-plumb", "fix-a-sticking-door", "wall-framing"],
  status: "draft",
  order: 21,
});
