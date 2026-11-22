import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "miter-joint",
  category: "workshop",
  title: "Miter joint",
  aka: ["Mitre", "45-degree joint", "Picture frame joint", "Splined miter", "Miter key"],
  kind: "joinery",
  difficulty: "moderate",
  summary:
    "Two angled ends meet at the corner so no end grain shows. Looks clean; needs help to be strong.",
  key: "For a frame with n equal sides, cut each end at 180 ÷ n degrees: 45° for four sides, 30° for six, 22.5° for eight.",
  body: [
    "A miter glues end grain to end grain, so on its own it's weak. Splines, keys, biscuits or brads add the strength.",
    "Small angle errors multiply: a 44° cut on all eight ends of a picture frame leaves a gap you can see. Test on scrap, and cut opposite sides as matched pairs so they're the same length.",
  ],
  reference: [
    { term: "Flat miter", detail: "Frames: pictures, mirrors, door casings." },
    {
      term: "Bevel (case) miter",
      detail: "Angled through the thickness. Box corners with no end grain showing.",
    },
    {
      term: "Splined / keyed miter",
      detail: "A thin strip across the joint line. Adds glue area and a visible accent.",
    },
  ],
  gear: ["Miter saw or miter box", "Accurate square", "Band or corner clamps", "Glue"],
  steps: [
    {
      caption:
        "Check the saw with a test frame of four scraps. Adjust until the corner closes square.",
    },
    { caption: "Cut one end of every piece, then set a stop and cut matching pairs to length." },
    { caption: "Dry-fit, then glue and clamp all corners at once with a band clamp." },
    { caption: "Once dry, cut slots across the corners and glue in splines if it needs strength." },
  ],
  uses: ["Picture frames", "Trim and casing", "Boxes"],
  tags: ["joinery", "wood", "measuring"],
  related: ["wood-joints", "angle", "square-level-plumb"],
  status: "draft",
  order: 15,
});
