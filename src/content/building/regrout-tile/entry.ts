import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "regrout-tile",
  category: "building",
  title: "Regrout tile",
  aka: ["Grout", "Replace grout", "Grout saw", "Sanded grout", "Unsanded grout", "Grout sealer"],
  kind: "technique",
  difficulty: "moderate",
  summary:
    "Rake out cracked or stained grout, pack in fresh grout, and wipe the haze off before it sets.",
  key: "Grout fills joints between tiles; caulk goes where surfaces change direction or meet a tub. Don't grout the corners.",
  body: [
    "Corners, the tub line and changes of plane move slightly, so rigid grout cracks there. Use a flexible caulk in a matching color for those joints.",
    "Cement grout is porous; sealing it once it has cured helps it resist stains. Epoxy and some premixed grouts don't need sealing.",
  ],
  reference: [
    {
      term: "Unsanded grout",
      detail: "Narrow joints, roughly 1/8 in and under. Won't scratch polished stone.",
    },
    { term: "Sanded grout", detail: "Wider joints. Stronger and less prone to shrinking." },
    {
      term: "Epoxy grout",
      detail: "Stain-proof and waterproof. Works fast and is harder to clean up.",
    },
    { term: "Premixed grout", detail: "Ready to use; convenient for small repairs." },
  ],
  gear: [
    "Grout saw or oscillating tool with a grout blade",
    "Grout and rubber float",
    "Bucket and sponges",
    "Gloves and eye protection",
    "Caulk for corners",
  ],
  steps: [
    {
      caption:
        "Rake out the old grout to at least half the joint depth, without chipping tile edges. Vacuum the joints.",
    },
    { caption: "Mix grout to a stiff paste and let it rest (slake) as the bag says." },
    {
      caption:
        "Press it diagonally across the joints with the float held at 45°, then scrape off the excess diagonally.",
    },
    {
      caption:
        "When it firms, wipe with a barely damp sponge in circles to shape the joints. Buff the haze off later with a dry cloth.",
    },
    { caption: "Caulk the corners and tub line. Seal the grout once it has cured." },
  ],
  safety: ["Grout dust contains silica: wear a dust mask while raking out, and eye protection."],
  uses: ["Showers and backsplashes", "Cracked or moldy grout", "Floor tile"],
  tags: ["water", "materials", "repair"],
  related: ["caulk-a-joint", "concrete-mix"],
  status: "draft",
  order: 24,
});
