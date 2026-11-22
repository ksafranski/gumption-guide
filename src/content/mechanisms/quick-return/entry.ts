import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "quick-return",
  category: "mechanisms",
  title: "Quick-return",
  aka: ["Crank and slotted lever", "Whitworth quick return", "Shaper mechanism"],
  motion: "rot-lin",
  family: "linkages",
  summary: "A crank swinging a slotted lever gives a slow working stroke and a fast return stroke.",
  body: [
    "The crank pin slides inside the lever's slot. Because the lever pivots below the crank, the pin spends the long arc of its circle pushing the lever one way and only the short arc bringing it back.",
    "Here that is 240° forward and 120° back — a 2 : 1 ratio — so a cutting tool moves slowly through the work and hurries back, saving time. The dashed arc on the crank marks the slow stroke.",
  ],
  key: "Time ratio = long arc ÷ short arc of the crank circle.",
  uses: ["Metal shapers", "Slotting machines", "Power hacksaws"],
  tags: ["linkage", "rotary-to-linear", "lever"],
  related: ["slider-crank", "scotch-yoke"],
  outLabel: "Ram position",
  status: "reviewed",
  order: 10,
});
