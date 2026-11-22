import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wood-finishes",
  category: "workshop",
  title: "Wood finishes",
  aka: ["Polyurethane", "Danish oil", "Boiled linseed oil", "Shellac", "Lacquer", "Varnish", "Wax"],
  kind: "finishing",
  difficulty: "easy",
  summary:
    "Oils soak in and look natural; film finishes build a protective layer on top. Choose by how hard the piece is used.",
  key: "Oily rags can catch fire on their own. Lay them flat outdoors to dry, or seal them in a water-filled metal can.",
  body: [
    "Most finish problems come from the surface, not the can: sanding scratches, dust and glue squeeze-out all show more once finished. Wipe on a little mineral spirits to preview what the finish will show.",
    "Thin coats dry harder and level better than thick ones. Sand lightly between film coats with a fine grit to knock off dust nibs.",
  ],
  reference: [
    {
      term: "Penetrating oil (linseed, tung, Danish)",
      detail: "Easy, natural look, easy to renew. Low protection from water and wear.",
    },
    {
      term: "Oil-based polyurethane",
      detail: "Tough film for tables and floors. Ambers over time; slow to dry.",
    },
    {
      term: "Water-based polyurethane",
      detail: "Clear, fast-drying, low odor. Raises the grain on the first coat.",
    },
    {
      term: "Shellac",
      detail: "Fast, warm color, a good sealer under other finishes. Damaged by alcohol and heat.",
    },
    {
      term: "Lacquer",
      detail: "Sprayed, very fast, builds quickly. Strong fumes; needs ventilation.",
    },
    {
      term: "Spar / exterior varnish",
      detail: "Flexible with UV blockers. Outdoor furniture, boats, doors.",
    },
    { term: "Paste wax", detail: "Soft sheen over another finish. Little protection on its own." },
  ],
  gear: [
    "Lint-free rags or a good brush",
    "Fine sandpaper",
    "Tack cloth",
    "Gloves and respirator as the label says",
  ],
  steps: [
    { caption: "Sand through the grits to the final one; vacuum and wipe off all dust." },
    { caption: "Test the finish on an offcut of the same wood." },
    {
      caption:
        "Apply a thin coat with the grain. For oil, wipe off the excess after a few minutes.",
    },
    {
      caption: "Let it dry fully, scuff-sand lightly, and repeat for the number of coats you need.",
    },
  ],
  safety: [
    "Rags soaked in drying oils (linseed, tung, many stains and Danish oils) heat as they cure and can ignite.",
    "Ventilate, keep sparks and flames away from solvent finishes, and wear the respirator the label calls for.",
  ],
  uses: ["Furniture", "Cutting boards (food-safe oil or wax)", "Outdoor projects"],
  tags: ["finishing", "wood", "fire"],
  related: ["sandpaper-grits", "wood-movement", "glue-types"],
  status: "draft",
  order: 40,
});
