import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "structural-connectors",
  category: "building",
  title: "Structural connectors",
  aka: ["Joist hangers", "Hurricane ties", "Post bases", "Strap ties", "Metal connectors"],
  kind: "fastener",
  summary:
    "Stamped steel brackets that tie framing members together, rated only when installed exactly as specified.",
  key: "Every hole filled, with the fastener the maker specifies. Not drywall screws, not deck screws.",
  body: [
    "Connector ratings come from tests with specific nails or structural screws. A thinner or brittle fastener can let a hanger tear free at a fraction of its rated load.",
    "In treated lumber, use connectors with a heavy galvanized coating or stainless, and fasteners with the same finish. Mixing coatings, or bare steel with treated wood, speeds corrosion.",
  ],
  reference: [
    { term: "Joist hanger", detail: "Holds the end of a joist against a beam or ledger." },
    {
      term: "Hurricane / rafter tie",
      detail: "Ties rafters or trusses down to the wall plate against uplift.",
    },
    {
      term: "Post base / post cap",
      detail: "Holds a post off wet concrete and to the beam above.",
    },
    { term: "Strap tie", detail: "Flat strap across a joint or splice to resist pulling apart." },
    { term: "Angle (L) bracket", detail: "General reinforcement at right-angle joints." },
  ],
  uses: ["Decks", "Pergolas and sheds", "Roof framing"],
  tags: ["fasteners", "framing", "metal", "outdoor-build"],
  related: ["nail-types", "screw-types", "wall-framing", "lumber-sizes"],
  status: "draft",
  order: 10,
});
