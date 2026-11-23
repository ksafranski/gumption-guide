import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "fix-a-sticking-door",
  category: "home",
  title: "Fix a sticking door",
  aka: ["Door rubs", "Door won't latch", "Sagging door", "Hinge shim", "Plane a door"],
  kind: "repair",
  difficulty: "easy",
  summary:
    "Most doors stick because the hinges have loosened and the door sags. Tighten or shim the hinges before you plane anything.",
  key: "Find where it rubs first. Rubbing at the top latch corner almost always means the top hinge needs tightening.",
  body: [
    "Doors also swell in humid weather and shrink back when it's dry. If it only sticks in summer, adjust the hinges rather than planing it, or it'll rattle in winter.",
    "A 3-inch screw through the top hinge into the framing behind the jamb pulls the whole door up and back toward the hinge side. It's the single most useful door fix.",
  ],
  reference: [
    {
      term: "Rubs at the top latch side",
      detail: "Top hinge loose: tighten it, or replace one screw with a long one into the stud.",
    },
    {
      term: "Rubs at the bottom hinge side",
      detail: "Bottom hinge loose or the door has dropped; tighten or shim the top hinge.",
    },
    {
      term: "Latch misses the strike",
      detail: "File the strike opening, or move the strike plate up or down.",
    },
    {
      term: "Springs open, binds on the hinge side",
      detail: "Hinge-bound: the leaves sit too deep. Shim behind a leaf with a piece of card.",
    },
    {
      term: "Sticks all along one edge",
      detail: "Swollen or painted too thick: plane or sand that edge, then seal it.",
    },
  ],
  gear: [
    "Screwdriver",
    "3-inch wood screws",
    "Card or thin cardboard for shims",
    "Block plane or sanding block",
    "Pencil or chalk",
  ],
  steps: [
    {
      caption:
        "Close the door slowly and look at the gap around it, or rub chalk on the edge to see where it marks the frame.",
    },
    {
      caption:
        "Tighten every hinge screw. Stripped holes: glue in a few toothpicks or a dowel and redrive.",
    },
    {
      caption:
        "Still rubbing at the latch top: drive a long screw through the top hinge into the stud.",
    },
    {
      caption:
        "Only then plane where it still rubs, take the door off if needed, and seal the bare wood.",
    },
  ],
  uses: ["Interior and exterior doors", "Cabinet doors (same idea, smaller hinges)"],
  tags: ["repair", "framing"],
  related: ["wall-framing", "screw-types", "pilot-holes", "wood-movement"],
  status: "draft",
  order: 22,
});
