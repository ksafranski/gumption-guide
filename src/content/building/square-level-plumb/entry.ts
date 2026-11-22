import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "square-level-plumb",
  category: "building",
  title: "Square, level & plumb",
  aka: ["3-4-5 rule", "Checking square", "Diagonals", "Spirit level", "Plumb bob", "Water level"],
  kind: "technique",
  difficulty: "easy",
  summary:
    "Three checks that every build depends on: right angles, true horizontal and true vertical.",
  key: "3-4-5 makes a right angle. Equal diagonals mean a rectangle is square.",
  steps: [
    { caption: "Square, small: use a framing or speed square against a straight edge." },
    {
      caption:
        "Square, large: measure 3 ft along one side and 4 ft along the other. When the diagonal between the marks is 5 ft, the corner is square. Scale up (6-8-10, 9-12-15) for more accuracy.",
    },
    { caption: "Any rectangle: measure both diagonals. Adjust until they match." },
    {
      caption:
        "Level: set the level, note the bubble, then flip it end for end. If it reads differently, the level itself is off.",
    },
    {
      caption:
        "Plumb: hold a level against a vertical face, or hang a plumb bob and measure to the line.",
    },
    {
      caption:
        "Long distances: a clear tube full of water finds level around corners, since water settles at the same height at both ends.",
    },
  ],
  uses: ["Decks and sheds", "Hanging doors and shelves", "Laying out a garden bed"],
  tags: ["measuring", "framing", "tools"],
  related: ["angle", "wall-framing", "raised-beds"],
  status: "draft",
  order: 17,
});
