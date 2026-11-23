import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "edge-joining",
  category: "workshop",
  title: "Edge-joining a panel",
  aka: ["Glue up a tabletop", "Panel glue-up", "Edge joint", "Spring joint", "Jointing"],
  kind: "joinery",
  difficulty: "moderate",
  summary:
    "Wide panels are boards glued edge to edge. Straight, square edges and even clamping make a joint stronger than the wood.",
  key: "Hold two edges together against the light. If no light shows, they're ready to glue.",
  body: [
    "A long-grain edge joint needs no dowels or biscuits for strength; they only help line the boards up.",
    "Arrange boards for looks first, then check the end grain. Alternating the growth-ring arcs up and down is the traditional advice for keeping a panel flatter overall; many woodworkers prioritize matching grain and color instead.",
    "A slight hollow in the middle of the edges (a spring joint) closes under one center clamp and keeps the ends, which dry fastest, from opening later.",
  ],
  gear: [
    "Jointer or hand plane, or a straightedge and router",
    "Glue",
    "Bar clamps (one every 8–12 inches)",
    "Cauls",
    "Scraper",
  ],
  steps: [
    {
      caption:
        "Lay out the boards, mark a big V across them so they go back in order, and cut them a little long.",
    },
    { caption: "Joint each edge straight and square to the face. Check pairs against the light." },
    { caption: "Dry-clamp with bars alternating above and below. Check flat with a straightedge." },
    { caption: "Glue both edges, clamp until squeeze-out beads, and level the joints with cauls." },
    {
      caption:
        "Scrape squeeze-out once it's rubbery, leave it overnight, then flatten and trim to size.",
    },
  ],
  uses: ["Tabletops", "Cabinet sides", "Cutting boards"],
  tags: ["joinery", "wood"],
  related: ["clamps", "glue-types", "wood-movement", "dowel-joint"],
  status: "draft",
  order: 18,
});
