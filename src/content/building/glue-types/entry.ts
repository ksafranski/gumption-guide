import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "glue-types",
  category: "building",
  title: "Glues & adhesives",
  aka: ["Wood glue", "PVA", "Epoxy", "Construction adhesive", "Polyurethane glue", "Super glue"],
  kind: "fastener",
  summary: "Each glue suits certain materials and gaps. Pick for the joint, then clamp and wait.",
  key: "Wood glue is stronger than the wood on a tight, long-grain joint. It's weak on end grain and in gaps.",
  reference: [
    {
      term: "PVA (yellow wood glue)",
      detail:
        "Wood to wood indoors; water-resistant grades for outside. Clamp 30–60 minutes, full strength in a day.",
    },
    {
      term: "Polyurethane",
      detail:
        "Foams as it cures, needs moisture and clamping. Wood, stone, metal; somewhat waterproof. Wear gloves: it stains skin.",
    },
    {
      term: "Epoxy",
      detail:
        "Two parts mixed. Fills gaps, bonds unlike materials, waterproof. Set times from 5 minutes to overnight.",
    },
    {
      term: "Construction adhesive",
      detail:
        "From a caulk gun. Subfloors, panels, masonry, foam board. Supplements nails and screws.",
    },
    {
      term: "Cyanoacrylate (super glue)",
      detail:
        "Seconds to set, small tight joints, brittle. Good for quick fixes and with an accelerator.",
    },
    {
      term: "Hide glue",
      detail: "Traditional and reversible with heat and moisture. Furniture and instrument repair.",
    },
    {
      term: "Contact cement",
      detail:
        "Coat both sides, let it tack, press together; no repositioning. Laminate, veneer, leather.",
    },
  ],
  steps: [
    { caption: "Dry-fit the joint first and have clamps ready." },
    {
      caption:
        "Surfaces clean, dry and freshly cut or sanded. Glue doesn't stick to old finish or dust.",
    },
    { caption: "Spread a thin even coat; a little squeeze-out along the joint means enough." },
    {
      caption:
        "Clamp just firmly enough to close the joint. Over-clamping squeezes glue out of it.",
    },
  ],
  uses: ["Furniture", "Subfloors", "Repairs"],
  tags: ["fasteners", "wood"],
  related: ["screw-types", "sandpaper-grits"],
  status: "draft",
  order: 12,
});
