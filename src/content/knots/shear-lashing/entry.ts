import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "shear-lashing",
  category: "knots",
  title: "Shear lashing",
  aka: ["Sheer lashing", "A-frame lashing", "Bipod lashing"],
  kind: "lashing",
  summary: "Binds two poles side by side so they can be opened into an A-frame or bipod.",
  key: "Wrap loosely enough to open the legs. Frap lightly, then spread them.",
  steps: [
    {
      caption:
        "Lay the poles side by side. Tie a clove hitch around one, below where the lashing goes.",
    },
    { caption: "Wrap around both poles seven or eight times, each turn lying beside the last." },
    {
      caption:
        "Frap: two turns between the poles, around the wraps. Not too tight if you'll spread them.",
    },
    { caption: "Finish with a clove hitch on the other pole. Open the legs to lock it." },
  ],
  secure:
    "Tightens as the legs are spread. Too tight and they won't open; too loose and the joint wobbles.",
  untie: "hard",
  uses: [
    "A-frame shelter ends",
    "Shear legs for lifting",
    "Extending a pole",
    "Camp tripods (with a third pole)",
  ],
  tags: ["lashing", "rope", "shelter"],
  related: ["square-lashing", "clove-hitch", "branch-hoist"],
  status: "draft",
  order: 12,
});
