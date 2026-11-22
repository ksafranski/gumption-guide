import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sheet-goods",
  category: "building",
  title: "Plywood, OSB & MDF",
  aka: ["Sheet goods", "Plywood grades", "OSB", "MDF", "Particleboard", "Marine plywood"],
  kind: "material",
  summary:
    "The common 4 × 8 ft panels, what each is good and bad at, and what the grade stamps mean.",
  key: "Plywood for strength and screw-holding, OSB for cheap sheathing, MDF for smooth painted parts kept dry.",
  body: [
    'Nominal thickness overstates the panel: "¾ in" plywood is often 23/32 in. Measure before cutting dadoes or ordering hardware.',
    "Plywood faces are graded A (smooth, paintable) to D (knots and voids). A sheet marked A-C has one good face and one rough one.",
  ],
  reference: [
    {
      term: "Softwood plywood",
      detail:
        "Cross-laminated veneers: strong both ways, holds screws, tolerates some moisture. Subfloors, sheathing, shop furniture.",
    },
    { term: "Hardwood plywood", detail: "Fine veneer faces. Cabinets and furniture." },
    { term: "Marine plywood", detail: "No internal voids, waterproof glue. Boats and wet places." },
    {
      term: "OSB",
      detail:
        "Pressed wood strands. Cheap, stiff, good for wall and roof sheathing. Edges swell when wet.",
    },
    {
      term: "MDF",
      detail:
        "Fine fibers pressed smooth. Paints beautifully, machines cleanly. Heavy, weak at edges, ruined by water.",
    },
    {
      term: "Particleboard",
      detail: "Coarse chips. Cheapest; under laminate in flat-pack furniture. Poor screw-holding.",
    },
  ],
  uses: ["Shelving and cabinets", "Subfloor and sheathing", "Jigs and templates"],
  tags: ["wood", "materials"],
  related: ["lumber-sizes", "screw-types", "glue-types"],
  status: "draft",
  order: 16,
});
