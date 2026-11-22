import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "dowel-joint",
  category: "workshop",
  title: "Dowel joint",
  aka: ["Dowelling", "Dowel pins", "Doweling jig", "Dowel centers", "Biscuit joint"],
  kind: "joinery",
  difficulty: "moderate",
  summary: "Short wooden pins glued into matching holes align and strengthen butt and edge joints.",
  key: "The holes have to line up perfectly. Use a jig or dowel centers, not a tape measure.",
  body: [
    "Choose a dowel roughly a third to half the thickness of the stock, and drill each hole a little deeper than half the dowel's length so it doesn't bottom out before the joint closes.",
    "Fluted or spiral-grooved dowels let air and extra glue escape. A smooth dowel in a tight hole acts like a piston and can split the work.",
    "Biscuits do a similar job with a football-shaped wafer in a slot. They align better than they strengthen.",
  ],
  gear: [
    "Doweling jig or dowel centers",
    "Brad-point bit",
    "Depth stop or tape flag",
    "Fluted dowels",
    "Glue and clamps",
  ],
  steps: [
    { caption: "Mark matching pieces and their faces so they go back together the same way." },
    { caption: "Drill the first piece using the jig, with a depth stop." },
    {
      caption:
        "Transfer the holes with dowel centers or reposition the jig from the same reference face, and drill the mate.",
    },
    { caption: "Glue the holes and the dowels lightly, tap them in, glue the faces and clamp." },
  ],
  uses: ["Edge-joining panels", "Chair and table rails", "Repairs to old furniture"],
  tags: ["joinery", "wood", "drilling"],
  related: ["wood-joints", "mortise-and-tenon", "drill-bits", "glue-types"],
  status: "draft",
  order: 16,
});
