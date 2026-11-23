import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "insulation-types",
  category: "building",
  title: "Insulation & R-value",
  aka: [
    "R-value",
    "Fiberglass batts",
    "Mineral wool",
    "Spray foam",
    "Rigid foam board",
    "Blown-in cellulose",
    "Air sealing",
  ],
  kind: "material",
  summary:
    "Insulation slows heat flow; R-value measures how much. It only works if air can't blow through it.",
  key: "Seal air leaks before you add insulation. Compressed or gappy insulation loses much of its rated R-value.",
  body: [
    "R-value adds up: two layers are roughly the sum of each. The R-value a building needs depends on the climate and where in the house it goes; local energy code sets the minimum.",
    "A vapor retarder goes on the warm-in-winter side in cold climates, and sometimes not at all in mixed or hot ones. When unsure, follow local code or a building professional; the wrong vapor layer traps moisture in walls.",
  ],
  reference: [
    {
      term: "Fiberglass batts",
      detail: "Cheap, DIY-friendly. Cut to fit snug around wires and boxes without compressing.",
    },
    {
      term: "Mineral wool batts",
      detail: "Denser, fire- and water-resistant, cuts with a bread knife. Good sound damping.",
    },
    {
      term: "Blown-in (cellulose or fiberglass)",
      detail: "Attics and closed walls. Fills irregular spaces; machines can be rented.",
    },
    {
      term: "Rigid foam board",
      detail:
        "High R per inch. Basement walls, under slabs, continuous exterior layers. Seal the seams with tape.",
    },
    {
      term: "Spray foam",
      detail:
        "Insulates and air-seals in one. Open-cell is softer; closed-cell is denser and a vapor retarder. Usually pro-installed.",
    },
    {
      term: "Canned foam and caulk",
      detail: "For air sealing gaps around pipes, wires, windows and top plates.",
    },
  ],
  safety: [
    "Wear gloves, long sleeves, eye protection and a respirator for fiberglass and blown-in work.",
    "Keep insulation the required clearance from chimneys, flues and recessed lights not rated for contact (IC-rated).",
    "Old vermiculite attic insulation may contain asbestos. Don't disturb it; have it tested.",
  ],
  uses: ["Attics", "Exterior walls and basements", "Soundproofing interior walls"],
  tags: ["materials", "walls", "climate"],
  related: ["wall-framing", "hang-drywall", "sheet-goods"],
  status: "draft",
  order: 25,
});
