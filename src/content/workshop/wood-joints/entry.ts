import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wood-joints",
  category: "workshop",
  title: "Choosing a wood joint",
  aka: ["Joinery", "Woodworking joints", "Butt joint", "Types of wood joints"],
  kind: "joinery",
  difficulty: "easy",
  summary:
    "A joint is strong when it gives glue long grain to grip and gives the wood a shape that resists the load.",
  key: "Long grain to long grain glues well; end grain barely glues at all. Add shape or hardware where end grain meets.",
  body: [
    "A plain butt joint glues end grain to face grain, which is weak; it relies on screws, nails or a reinforcement. Every other joint is a way of adding glue surface, mechanical interlock, or both.",
    "Pick for the load: shelves want support from below (dado), frames want resistance to racking (mortise and tenon, half-lap), drawers want resistance to being pulled apart (dovetail).",
  ],
  reference: [
    {
      term: "Butt",
      detail: "Square end against a face. Quick; needs screws, nails, dowels or pocket screws.",
    },
    {
      term: "Half-lap",
      detail:
        "Half the thickness removed from each piece. Frames and crossings; lots of glue area.",
    },
    { term: "Rabbet", detail: "A step cut along an edge. Cabinet backs, box corners." },
    {
      term: "Dado",
      detail: "A channel across the grain. Shelves that won't sag off their supports.",
    },
    {
      term: "Mortise and tenon",
      detail: "A tongue in a pocket. Tables, chairs, doors; the classic strong frame joint.",
    },
    {
      term: "Dovetail",
      detail: "Flared, interlocking tails and pins. Drawers and boxes; can't pull apart one way.",
    },
    {
      term: "Miter",
      detail: "Angled ends meeting at the corner. Hides end grain; weak unless reinforced.",
    },
    {
      term: "Dowel / biscuit",
      detail: "Hidden pins or wafers that align and reinforce edge and butt joints.",
    },
    {
      term: "Pocket screw",
      detail: "Angled screws from a jig. Face frames and carcasses, fast and strong enough.",
    },
  ],
  uses: ["Planning a furniture build", "Picking a joint for a repair"],
  tags: ["joinery", "wood"],
  related: ["lap-joint", "rabbet-and-dado", "mortise-and-tenon", "dovetail-joint", "glue-types"],
  status: "draft",
  order: 10,
});
