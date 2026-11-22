import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "nail-types",
  category: "building",
  title: "Nail types & penny sizes",
  aka: ["Common nails", "Box nails", "Finish nails", "Brads", "Ring shank", "Penny size", "16d"],
  kind: "fastener",
  summary:
    "Nails bend instead of snapping, which makes them the default for framing. Shank, head and coating set the job.",
  key: "16d (3½ in) for framing, 8d (2½ in) for sheathing. Galvanized or stainless outdoors.",
  body: [
    'The "d" in 16d stands for penny, an old English pricing unit that now just means length. A rule of thumb for driving: the nail should be about three times as long as the thickness of the piece it goes through.',
    "Blunting a nail's point with a hammer tap crushes the wood fibers instead of wedging them apart, which cuts splitting near board ends.",
  ],
  reference: [
    { term: "2d · 3d · 4d", detail: "1 in · 1¼ in · 1½ in." },
    { term: "6d · 8d · 10d", detail: "2 in · 2½ in · 3 in." },
    { term: "12d · 16d · 20d", detail: "3¼ in · 3½ in · 4 in." },
    { term: "Common", detail: "Thick shank, flat head. Framing where splitting isn't a worry." },
    {
      term: "Box",
      detail:
        "Thinner shank than a common nail of the same length. Less splitting, a little less strength.",
    },
    {
      term: "Sinker",
      detail:
        "Coated, slightly thinner, checkered head. The usual framing-gun and hand-framing nail.",
    },
    {
      term: "Finish / brad",
      detail:
        "Small head, set below the surface and filled. Trim and moulding. Brads are thinner still.",
    },
    {
      term: "Ring / spiral shank",
      detail: "Ridges grip the wood and resist working loose. Subfloors, decking, siding.",
    },
    { term: "Roofing", detail: "Short with a wide head that holds shingles and felt. Galvanized." },
    {
      term: "Duplex",
      detail:
        "Two heads: drive to the first, pull by the second. Temporary bracing and concrete forms.",
    },
    {
      term: "Hot-dip galvanized / stainless",
      detail: "For treated lumber and outdoors. Bright (uncoated) nails rust and stain.",
    },
  ],
  uses: ["Framing", "Trim", "Fences and siding", "Reading old plans"],
  tags: ["fasteners", "wood", "framing"],
  related: ["screw-types", "wall-framing", "structural-connectors", "old-lengths"],
  status: "draft",
  order: 3,
});
