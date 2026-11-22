import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wall-anchors",
  category: "building",
  title: "Wall anchors",
  aka: [
    "Drywall anchors",
    "Toggle bolt",
    "Molly bolt",
    "Wedge anchor",
    "Sleeve anchor",
    "Plastic plug",
  ],
  kind: "fastener",
  difficulty: "easy",
  summary:
    "When there's no stud behind the wall, an anchor spreads the load across the board or grips the masonry.",
  key: "A stud beats any anchor. Heavy or overhead loads: toggles in drywall, wedge or sleeve anchors in concrete.",
  body: [
    "Package ratings are for ideal conditions: new, solid board and a straight pull. Use a quarter to a half of the printed number for anything that matters, and more anchors rather than bigger ones.",
  ],
  reference: [
    {
      term: "Plastic expansion plug",
      detail:
        "Light loads only: a small picture or a smoke alarm. Also for brick and block, in a hole of the right size.",
    },
    {
      term: "Threaded (self-drilling) drywall anchor",
      detail: "Screws straight into drywall. Light to medium: shelves for books, curtain rods.",
    },
    {
      term: "Hollow-wall (molly) anchor",
      detail:
        "A metal sleeve that folds up behind the board. Medium loads; the screw can be removed and reused.",
    },
    {
      term: "Spring toggle",
      detail:
        "Wings pop open behind the wall. Heavy loads and ceilings. Needs a big hole; the wings fall inside if you remove the bolt.",
    },
    {
      term: "Strap (snap) toggle",
      detail:
        "A metal channel braced behind the board. Heavy loads, and the bolt can be removed. The best drywall anchor.",
    },
    {
      term: "Masonry screw",
      detail: "Straight into concrete or brick with the matching bit. Medium loads, removable.",
    },
    {
      term: "Sleeve anchor",
      detail: "Expands along its length. Concrete, brick and block; medium to heavy.",
    },
    {
      term: "Wedge anchor",
      detail:
        "Expands at the bottom. Solid concrete only; heavy structural loads like posts and machinery.",
    },
  ],
  steps: [
    {
      caption:
        "Find out what's behind the wall: stud, hollow drywall, plaster on lath, or masonry.",
    },
    {
      caption:
        "Choose the anchor for the material and the load, and drill exactly the hole size the package says.",
    },
    {
      caption:
        "Set the anchor flush, then drive the screw or bolt until snug. Don't overtighten; drywall crushes.",
    },
  ],
  safety: [
    "Check for pipes and wires first. Avoid the areas straight above and below outlets and switches.",
    "Wear eye protection drilling overhead or into masonry.",
  ],
  uses: ["Shelves and mirrors", "TV mounts (into studs whenever possible)", "Railings on masonry"],
  tags: ["fasteners", "walls"],
  related: ["find-a-stud", "drill-bits", "screw-types"],
  status: "draft",
  order: 8,
});
