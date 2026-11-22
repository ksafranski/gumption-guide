import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "find-a-stud",
  category: "building",
  title: "Finding a stud",
  aka: ["Stud finder", "Locating studs", "Where is the stud"],
  kind: "framing",
  difficulty: "easy",
  summary:
    "Use the clues the builders left, confirm with a magnet or a tiny test hole, then measure along.",
  key: "Find one, then measure 16 in to the next. Confirm before you trust it.",
  steps: [
    { caption: "Look for electrical boxes: they're usually fastened to the side of a stud." },
    {
      caption:
        "Check baseboards and trim for nail holes or filled dimples; they're nailed into studs.",
    },
    {
      caption:
        "Slide a strong magnet across the wall to catch drywall screw heads, which run in vertical lines on studs.",
    },
    {
      caption:
        "With a stud finder, calibrate on a hollow spot, then scan slowly and mark both edges. The center is between them.",
    },
    { caption: "Measure 16 in (or 24 in) from that stud to find the next, and confirm each one." },
    { caption: "Where it won't show, drive a thin finish nail to feel for solid wood." },
  ],
  safety: [
    "Wires and pipes run along studs and straight up or down from outlets and switches. Don't drill blind there.",
    "Some stud finders also sense live wires. Use it, but don't rely on it.",
  ],
  uses: ["Shelves and TV mounts", "Grab bars", "Cabinets"],
  tags: ["framing", "walls"],
  related: ["wall-framing", "wall-anchors"],
  status: "draft",
  order: 14,
});
