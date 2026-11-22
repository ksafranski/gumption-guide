import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sheet-bend",
  category: "knots",
  title: "Sheet bend",
  aka: ["Weaver's knot", "Becket bend"],
  kind: "bend",
  summary:
    "Joins two ropes, even of different sizes: a bight in one, a wrap and tuck with the other.",
  key: "Make the bight in the thicker rope. Both tails should end up on the same side.",
  steps: [
    { caption: "Make a bight in the thicker rope." },
    { caption: "Bring the other rope through the bight from behind." },
    { caption: "Take it around behind both legs of the bight." },
    { caption: "Tuck the end under itself, between itself and the bight. Pull snug." },
  ],
  secure:
    "Good under steady load. Can shake loose when slack and flogging; double the wrap if the sizes differ a lot.",
  untie: "easy",
  uses: [
    "Joining two lines of different thickness",
    "Tying a line to an eye or loop",
    "Net making",
  ],
  tags: ["rope"],
  related: ["bowline"],
  status: "draft",
  order: 9,
});
