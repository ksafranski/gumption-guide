import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pilot-holes",
  category: "building",
  title: "Pilot & clearance holes",
  aka: ["Pilot hole size", "Clearance hole", "Countersink", "Splitting wood", "Pre-drilling"],
  kind: "technique",
  difficulty: "easy",
  summary:
    "A pilot hole lets threads bite without splitting the wood; a clearance hole lets the screw pull the top board down.",
  key: "Hold the bit in front of the screw: the bit should hide the solid core and leave the threads showing.",
  body: [
    "A screw through two boards should be loose in the top one and gripping in the bottom one. If it threads into both, the gap between them stays open no matter how hard you drive it.",
  ],
  reference: [
    {
      term: "Pilot hole",
      detail:
        "About the screw's core (root) diameter. Full core size in hardwood; a size smaller in softwood.",
    },
    {
      term: "Clearance hole",
      detail: "The size of the screw's shank, drilled through the top piece only.",
    },
    {
      term: "Countersink",
      detail:
        "A cone for a flat head to sit flush. Combination bits drill pilot and countersink in one pass.",
    },
    {
      term: "Counterbore",
      detail: "A flat-bottomed hole that sinks the head below the surface, to be plugged.",
    },
    {
      term: "Near an end",
      detail:
        "Always pre-drill within about 2 in of an end, or in dry hardwood, or you'll split it.",
    },
  ],
  steps: [
    {
      caption:
        "Hold candidate bits against the screw and pick the one that covers the core but not the threads.",
    },
    { caption: "Mark the spot with an awl so the bit doesn't wander." },
    { caption: "Drill the pilot through both pieces, then open the top piece to clearance size." },
    { caption: "Countersink if you're using flat-head screws in hardwood." },
  ],
  uses: ["Furniture", "Hardwood trim", "Fastening near board ends"],
  tags: ["fasteners", "wood", "drilling"],
  related: ["screw-types", "drill-bits", "screw-drives"],
  status: "draft",
  order: 9,
});
