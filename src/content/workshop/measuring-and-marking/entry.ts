import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "measuring-and-marking",
  category: "workshop",
  title: "Measuring & marking",
  aka: [
    "Marking knife",
    "Marking gauge",
    "Story stick",
    "Measure twice cut once",
    "Combination square",
    "Tape measure hook",
  ],
  kind: "joinery",
  difficulty: "easy",
  summary:
    "Accuracy comes from marking from one reference edge with a fine line, and from transferring sizes directly rather than re-measuring.",
  key: "Measure from the same reference face and edge every time, and mark with a knife, not a fat pencil.",
  body: [
    "A tape's hook slides by its own thickness on purpose: out for hooking over an end, in for pushing against something. Don't 'fix' it.",
    "When two parts must match, don't measure them twice. Clamp them together and mark both at once, or use a story stick: a strip of wood with the key lengths marked on it.",
    "Burning an inch (measuring from the 1-inch mark) is a good habit with worn tape ends. Remember to subtract it.",
  ],
  reference: [
    {
      term: "Marking knife",
      detail:
        "A fine line that also severs the surface fibers, so chisels and saws register in it.",
    },
    {
      term: "Marking gauge",
      detail: "Scribes a line parallel to an edge. Tenons, rabbets, thicknesses.",
    },
    {
      term: "Combination square",
      detail: "Square, 45° and depth gauge in one. Check it against a known edge, then flip it.",
    },
    {
      term: "Reference marks",
      detail: "A face mark and an edge mark on each board; measure only from those.",
    },
    { term: "Story stick", detail: "Lengths transferred directly. No numbers to misread." },
  ],
  steps: [
    { caption: "Pick the best face and the straightest edge, and mark them as reference." },
    { caption: "Measure from those, and tick the length with a sharp V mark at the point." },
    {
      caption:
        "Square a line across from the reference edge with the square's stock pressed tight.",
    },
    { caption: "Mark the waste side so you saw on the correct side of the line." },
  ],
  uses: ["Any cut that has to fit", "Matching parts", "Layout for joinery"],
  tags: ["measuring", "wood", "tools"],
  related: ["square-level-plumb", "hand-saws", "length"],
  status: "draft",
  order: 53,
});
