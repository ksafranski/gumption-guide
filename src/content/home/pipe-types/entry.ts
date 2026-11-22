import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pipe-types",
  category: "home",
  title: "Pipe types",
  aka: ["Copper pipe", "PEX", "PVC", "CPVC", "ABS", "Galvanized pipe", "Cast iron"],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "Supply pipes carry water in under pressure; drain pipes carry it out by gravity. Each uses its own materials.",
  key: "Identify the pipe before you buy a fitting. Push-fit fittings join most supply types for a quick repair.",
  reference: [
    {
      term: "Copper",
      detail:
        "Supply. Soldered (sweated), compression or push-fit joints. Type M has the thinnest wall, L is thicker, K thickest.",
    },
    {
      term: "PEX",
      detail:
        "Supply. Flexible plastic tube, often red/blue/white. Crimp, clamp or expansion fittings; bends around corners.",
    },
    { term: "CPVC", detail: "Supply, hot and cold. Cream or tan rigid plastic, solvent-welded." },
    {
      term: "PVC",
      detail:
        "White. Drains, vents and cold-water lines outside. Primer and solvent cement; not for hot supply.",
    },
    {
      term: "ABS",
      detail:
        "Black plastic drain pipe. Its own cement; don't mix with PVC without a transition fitting.",
    },
    {
      term: "Galvanized steel",
      detail: "Older supply. Rusts shut from the inside; low pressure is a hint. Threaded joints.",
    },
    {
      term: "Cast iron",
      detail: "Older drain stacks. Heavy and quiet. Joined to plastic with banded couplings.",
    },
  ],
  body: [
    "Where copper meets galvanized steel, use a dielectric union; the two metals corrode each other where they touch.",
  ],
  uses: ["Repairing a leak", "Adding a line", "Reading an old house"],
  tags: ["plumbing", "materials", "fittings"],
  related: ["sweat-copper-pipe", "thread-tape", "shut-off-valves", "p-trap"],
  status: "draft",
  order: 14,
});
