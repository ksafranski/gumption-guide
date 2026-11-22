import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "debris-hut",
  category: "fieldcraft",
  title: "Debris hut",
  aka: ["Leaf hut", "Emergency shelter", "Survival shelter"],
  difficulty: "hard",
  summary:
    "A ridgepole, a rib cage of sticks, and a deep pile of dry leaves: a body-sized sleeping bag made of forest.",
  key: "Small inside, thick outside. Pile debris an arm's length deep or more, and stuff the inside too.",
  gear: [
    "A sturdy ridgepole about 1½ times your height",
    "Lots of sticks for ribs",
    "Huge amounts of dry leaves, needles or grass",
  ],
  steps: [
    {
      caption:
        "Prop one end of the ridgepole on a stump, rock or forked stick at about hip height; rest the other end on the ground.",
    },
    {
      caption:
        "Lie under it to check: room to roll over, but no more. Every bit of extra space has to be heated by you.",
    },
    {
      caption:
        "Lean sticks along both sides close together, like ribs, with the tops at the ridgepole.",
    },
    { caption: "Lay a lattice of small branches over the ribs so leaves don't fall through." },
    {
      caption:
        "Heap dry debris over everything, at least an arm's length thick. Thicker is warmer and sheds rain.",
    },
    {
      caption:
        "Fill the floor with a thick bed of dry debris, crawl in feet first, and plug the door with a pack or a pile of leaves.",
    },
  ],
  safety: [
    "It takes hours of work. Start long before dark, and while you still have energy.",
    "Check for dead overhead limbs, ant nests and low spots where water collects.",
    "Never build fires inside or near the entrance; dry debris burns fast.",
  ],
  tags: ["shelter", "emergency"],
  related: ["choose-a-campsite", "hypothermia", "pitch-a-tarp"],
  status: "draft",
  order: 22,
});
