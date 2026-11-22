import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "drill-bits",
  category: "building",
  title: "Drill bit types",
  aka: ["Twist bit", "Brad point", "Spade bit", "Forstner", "Hole saw", "Masonry bit", "Step bit"],
  kind: "technique",
  summary:
    "Different bits cut wood, metal and masonry differently. The right one makes a clean, accurate hole.",
  key: "Bigger bit, slower speed. Metal: slow and oiled. Masonry: hammer mode and a carbide tip.",
  reference: [
    {
      term: "Twist bit",
      detail: "General purpose, wood and metal. Use cobalt or black-oxide bits for steel.",
    },
    {
      term: "Brad-point",
      detail: "Center spur and sharp spurs at the edge. Clean, accurate holes in wood.",
    },
    {
      term: "Spade (paddle)",
      detail:
        "Fast, rough, cheap large holes in wood. Drill until the tip pokes through, then finish from the other side.",
    },
    {
      term: "Forstner",
      detail: "Flat-bottomed, clean holes, can overlap or start on an edge. Hinge cups, furniture.",
    },
    { term: "Auger", detail: "Lead screw pulls it in. Deep holes through timber and framing." },
    { term: "Hole saw", detail: "Cuts a ring for big holes: doorknobs, pipes, vents." },
    {
      term: "Masonry",
      detail:
        "Carbide tip, used with hammer action. Concrete, brick, block. Not for tile, which needs a diamond or spear-point tile bit.",
    },
    {
      term: "Step bit",
      detail: "Many sizes on one cone. Clean holes in thin sheet metal and plastic.",
    },
    { term: "Countersink", detail: "Cone cutter for flush screw heads." },
  ],
  safety: [
    "Clamp small work. A grabbing bit spins the workpiece.",
    "Eye protection always; hearing protection with hammer drills.",
    "Large bits and hole saws can wrench the drill. Brace it, and use the side handle.",
  ],
  uses: ["Pilot holes", "Running cables and pipes", "Hanging things on masonry"],
  tags: ["drilling", "tools"],
  related: ["pilot-holes", "wall-anchors", "blind-rivets"],
  status: "draft",
  order: 18,
});
