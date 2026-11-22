import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sandpaper-grits",
  category: "building",
  title: "Sandpaper grits",
  aka: ["Grit numbers", "Sanding sequence", "Abrasives", "Orbital sander"],
  kind: "material",
  difficulty: "easy",
  summary:
    "Lower numbers are coarser. Work up through the grits, each one removing the scratches of the last.",
  key: "Don't skip more than one grit, and stop around 180–220 before staining wood.",
  reference: [
    { term: "40–60", detail: "Coarse. Stripping finish, shaping, leveling rough boards." },
    { term: "80–120", detail: "Medium. Removing machine marks and smoothing." },
    { term: "150–180", detail: "Fine. Final sanding before stain or finish." },
    { term: "220–320", detail: "Very fine. Between coats of finish." },
    { term: "400 and up", detail: "Polishing finishes and metal, often wet." },
  ],
  steps: [
    { caption: "Start with the finest grit that removes the defect in reasonable time." },
    { caption: "Sand with the grain on the final grits; cross-grain scratches show under finish." },
    { caption: "Wipe or vacuum dust between grits so loose coarse grit doesn't keep scratching." },
    { caption: "Check with a low raking light before moving on." },
  ],
  safety: [
    "Wear a dust mask; fine wood dust and old paint are hazardous. Test old paint for lead before sanding.",
  ],
  uses: ["Furniture refinishing", "Trim prep", "Smoothing glue joints"],
  tags: ["wood", "tools"],
  related: ["glue-types", "sharpen-a-knife"],
  status: "draft",
  order: 20,
});
