import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wood-movement",
  category: "workshop",
  title: "Wood movement",
  aka: ["Wood shrinkage", "Seasonal movement", "Cross-grain", "Floating panel", "Cupping"],
  kind: "joinery",
  difficulty: "easy",
  summary:
    "Wood swells and shrinks with humidity, a lot across the grain and almost none along it.",
  key: "Never lock wide boards across their grain. Let them float in grooves, slots or slotted holes.",
  body: [
    "A board's length barely changes, but its width can change by a noticeable amount between a humid summer and a dry, heated winter. A wide tabletop moves more than a narrow one, and flatsawn boards move more than quartersawn.",
    "Glue a solid panel tight into a frame and it either cracks when it shrinks or bursts the frame when it swells. Cross-grain glue joints fail the same way.",
    "Let lumber sit in the room where it'll be used for a week or two before final cutting, so it reaches the humidity it will live in.",
  ],
  reference: [
    {
      term: "Floating panel",
      detail: "Sits loose in a groove; glue only the frame. Doors and cabinet sides.",
    },
    {
      term: "Slotted screw holes",
      detail: "Elongated across the grain so a tabletop can move on its base.",
    },
    { term: "Tabletop fasteners", detail: "Figure-8 plates or Z-clips let the top slide." },
    {
      term: "Breadboard end",
      detail: "Cross piece glued only at the center, pegged in slots elsewhere.",
    },
    {
      term: "Cupping",
      detail: "Boards curl away from the heart side. Finish both faces equally to slow it.",
    },
  ],
  uses: ["Tabletops", "Doors and panels", "Shelving and cabinets"],
  tags: ["wood", "joinery", "materials"],
  related: ["wood-joints", "lumber-sizes", "wood-finishes"],
  status: "draft",
  order: 30,
});
