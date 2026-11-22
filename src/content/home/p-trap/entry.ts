import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "p-trap",
  category: "home",
  title: "Traps & vents",
  aka: ["P-trap", "U-bend", "S-trap", "Sewer smell", "Drain vent", "Water seal"],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "The U-bend under every drain holds a plug of water that keeps sewer gas out of the house.",
  key: "A sewer smell from a rarely used drain usually means its trap has dried out. Run water into it.",
  body: [
    "Every trap needs a vent pipe downstream of it, open to the roof. Without one, water rushing down the line siphons the trap empty. A gurgling drain is often a blocked or missing vent.",
    "The trap is also where rings, earring backs and clogs end up, which is why it unscrews by hand.",
  ],
  reference: [
    {
      term: "P-trap",
      detail: "U-bend plus a horizontal trap arm into the wall. The standard shape.",
    },
    {
      term: "S-trap",
      detail: "Drops straight into the floor. Siphons itself dry; not allowed in new work.",
    },
    {
      term: "Slip nuts",
      detail: "Plastic nuts with tapered washers. Hand-tight plus a quarter turn.",
    },
    {
      term: "Floor drains",
      detail: "Have traps too. Pour a bucket of water in a few times a year.",
    },
  ],
  steps: [
    { caption: "Put a bucket underneath and unscrew both slip nuts." },
    { caption: "Clean the trap and check the washers are seated with the taper toward the joint." },
    { caption: "Refit hand-tight, run water and check for drips." },
  ],
  uses: ["Sewer smells", "Lost jewelry", "Slow sink drains"],
  tags: ["plumbing", "drains"],
  related: ["unclog-a-drain", "pipe-types"],
  status: "draft",
  order: 13,
});
