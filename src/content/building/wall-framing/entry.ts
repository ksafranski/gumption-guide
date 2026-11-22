import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wall-framing",
  category: "building",
  title: "Wall framing & studs",
  aka: [
    "Studs",
    "Top plate",
    "Bottom plate",
    "King stud",
    "Jack stud",
    "Header",
    "Cripple",
    "16 on center",
  ],
  kind: "framing",
  summary:
    "The parts of a framed wall: plates top and bottom, studs between, and doubled framing around openings.",
  key: "Studs at 16 in on center, with a double top plate. Every opening gets a header on jack studs beside king studs.",
  body: [
    '"On center" (OC) means measured from the middle of one stud to the middle of the next. At 16 in OC, edges of 4 × 8 ft sheets land on a stud. 24 in OC is also common, with fewer, stronger members.',
    "Pre-cut studs are 92⅝ in long. With a bottom plate and a double top plate, the wall comes out just over 8 ft, leaving room for 8 ft drywall and a gap.",
    "Load-bearing walls carry floors or roof above. Never cut or remove a stud, header or plate in one without a plan from someone qualified.",
  ],
  reference: [
    {
      term: "Bottom (sole) plate",
      detail: "Horizontal piece on the floor. Pressure-treated if it sits on concrete.",
    },
    {
      term: "Top plate",
      detail: "Doubled on bearing walls, with joints offset, to tie walls together.",
    },
    { term: "Stud", detail: "Vertical member, usually a 2×4 or 2×6." },
    { term: "King stud", detail: "Full-height stud beside an opening." },
    {
      term: "Jack (trimmer) stud",
      detail: "Shorter stud inside the king that holds up the header.",
    },
    {
      term: "Header",
      detail: "Beam across the top of an opening, carrying the load above around it.",
    },
    { term: "Cripple", detail: "Short stud above a header or below a window sill." },
    {
      term: "Blocking",
      detail:
        "Short horizontal pieces between studs: fire stops, and backing for cabinets and grab bars.",
    },
  ],
  uses: ["Hanging heavy things", "Finding where to cut a hole", "Planning a partition wall"],
  tags: ["framing", "wood", "walls"],
  related: [
    "find-a-stud",
    "lumber-sizes",
    "nail-types",
    "structural-connectors",
    "square-level-plumb",
  ],
  status: "draft",
  order: 13,
});
