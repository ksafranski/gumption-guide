import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "dovetail-joint",
  category: "workshop",
  title: "Dovetail joint",
  aka: ["Through dovetail", "Half-blind dovetail", "Tails and pins", "Drawer joint"],
  kind: "joinery",
  difficulty: "hard",
  summary:
    "Flared tails on one board lock between pins on the other, so the corner can't pull apart in one direction.",
  key: "Cut the tails first, then trace them onto the pin board. Saw on the waste side of every line.",
  body: [
    "Point the joint so the pull goes against the flare. On a drawer, the front is pulled forward every time it opens, so the tails are on the sides and the pins on the front.",
    "A common slope is around 1:6 for softwood and 1:8 for hardwood. Steeper slopes look bolder but the short grain at the tips can break off.",
  ],
  reference: [
    { term: "Through dovetail", detail: "Visible from both faces. Boxes, chests, carcasses." },
    { term: "Half-blind", detail: "Hidden from the front. Drawer fronts." },
    {
      term: "Sliding dovetail",
      detail: "A flared tenon slid into a flared dado. Shelves and legs that can't pull out.",
    },
  ],
  gear: [
    "Dovetail saw",
    "Marking gauge",
    "Bevel gauge or dovetail marker",
    "Chisels",
    "Coping saw",
  ],
  steps: [
    { caption: "Gauge the thickness of each board around the end of the other: the baseline." },
    {
      caption:
        "Lay out and saw the tails, then remove the waste between them back to the baseline.",
    },
    {
      caption:
        "Stand the pin board in a vise, set the tail board on it and knife around the tails.",
    },
    {
      caption:
        "Saw the pins on the waste side, chop the waste, and test-fit. Pare tight spots; don't force it.",
    },
  ],
  uses: ["Drawers", "Boxes and chests", "Carcass corners"],
  tags: ["joinery", "wood"],
  related: ["wood-joints", "mortise-and-tenon"],
  status: "draft",
  order: 14,
});
