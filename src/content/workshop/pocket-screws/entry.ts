import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pocket-screws",
  category: "workshop",
  title: "Pocket screws",
  aka: ["Pocket hole", "Pocket-hole jig", "Pocket joinery", "Face frame screws"],
  kind: "joinery",
  difficulty: "easy",
  summary:
    "A jig drills a steep, stepped hole so a screw can pull one board tight against another from behind.",
  key: "Clamp the joint flush before driving. The screw pulls hard and the pieces will shift if you let them.",
  body: [
    "Pocket screws are quick and need no waiting for glue, but they're only as good as the screw's grip in the second board. They're best hidden on the back or underside.",
    "Use pocket-hole screws: they have a flat washer head that bottoms in the pocket's step without splitting it. Coarse thread for softwood and plywood, fine thread for hardwood.",
  ],
  gear: [
    "Pocket-hole jig and stepped bit",
    "Long square-drive bit",
    "Pocket-hole screws",
    "Face clamp",
  ],
  steps: [
    { caption: "Set the jig and the bit's depth collar for the stock thickness." },
    { caption: "Clamp the workpiece in the jig with the hidden face up and drill the pockets." },
    {
      caption:
        "Glue if you like, clamp the joint flush with a face clamp, and drive the screws until snug.",
    },
  ],
  uses: [
    "Cabinet face frames",
    "Shop furniture",
    "Attaching tabletops to aprons (with slotted holes)",
  ],
  tags: ["joinery", "wood", "fasteners"],
  related: ["wood-joints", "screw-types", "screw-drives", "pilot-holes"],
  status: "draft",
  order: 17,
});
