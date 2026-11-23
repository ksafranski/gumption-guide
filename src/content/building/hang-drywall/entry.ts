import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "hang-drywall",
  category: "building",
  title: "Hang & tape drywall",
  aka: [
    "Sheetrock",
    "Plasterboard",
    "Gypsum board",
    "Score and snap",
    "Taping and mudding",
    "Drywall screws",
  ],
  kind: "technique",
  difficulty: "moderate",
  summary:
    "Score and snap the board, screw it to the framing with the paper just dimpled, then tape and coat the seams.",
  key: "Drive screws just below the surface without tearing the paper. Ceiling first, then walls, top row before bottom.",
  body: [
    "Stagger the end joints from row to row, and land every end on a stud or joist. Avoid joints that line up with the corners of doors and windows; they crack there.",
    "The factory edges are tapered so tape and compound sit flush. Butt joints (cut ends) have no taper, so feather them extra wide.",
  ],
  reference: [
    { term: "Regular 1/2 in", detail: "Most walls." },
    {
      term: "Lightweight / ceiling board",
      detail: "Easier overhead and resists sagging between joists.",
    },
    {
      term: "Moisture-resistant",
      detail:
        "Bathrooms and laundry walls away from direct water. Not for inside a shower; use cement or tile backer board.",
    },
    {
      term: "Fire-rated (Type X)",
      detail:
        "Thicker, with glass fibers. Garages next to living space, furnace rooms, where code requires.",
    },
    {
      term: "Paper vs mesh tape",
      detail: "Paper with any compound; mesh is self-sticking and best with setting compound.",
    },
  ],
  gear: [
    "Utility knife and T-square",
    "Drywall screws and a screw gun or dimpler bit",
    "Jab saw",
    "Tape and joint compound",
    "6, 10 and 12 inch knives",
    "Sanding sponge",
  ],
  steps: [
    {
      caption:
        "Mark stud centers on the floor and ceiling so you can find them once the board covers them.",
    },
    {
      caption:
        "Score the face paper along a T-square, snap the board back, and cut the back paper.",
    },
    {
      caption:
        "Hang sheets tight to the ceiling, screws about every 12 inches into the framing, set just below the surface.",
    },
    { caption: "Embed tape in a coat of compound over every seam, and fill each screw head." },
    {
      caption:
        "Two more coats, each wider and thinner. Sand lightly between and prime before painting.",
    },
  ],
  safety: [
    "Wear a dust mask when sanding; joint compound dust is very fine.",
    "Get a helper or a lift for ceilings.",
  ],
  uses: ["Basement finishing", "Repairing large damaged areas", "New partition walls"],
  tags: ["walls", "framing", "materials"],
  related: ["patch-drywall", "wall-framing", "find-a-stud", "screw-types"],
  status: "draft",
  order: 23,
});
