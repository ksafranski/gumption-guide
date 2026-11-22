import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "blind-rivets",
  category: "building",
  title: "Blind (pop) rivets",
  aka: ["Pop rivets", "Rivet gun", "Grip range"],
  kind: "fastener",
  difficulty: "easy",
  summary:
    "A permanent fastener set from one side, for thin metal, plastic and fabric where you can't reach the back.",
  key: "Pick by diameter and grip range: the grip must cover the total thickness being joined.",
  reference: [
    { term: "Aluminum", detail: "Easy to set, for aluminum and light work." },
    {
      term: "Steel / stainless",
      detail: "Stronger. Match the material: aluminum rivets in steel corrode outdoors.",
    },
    { term: "Large-flange", detail: "Wider head for soft materials like plastic or fabric." },
    { term: "Sealed (closed-end)", detail: "Watertight, for tanks, boats and gutters." },
  ],
  steps: [
    {
      caption:
        "Drill a hole just over the rivet's diameter (the box gives the drill size) through both pieces.",
    },
    {
      caption:
        "Push the rivet in, put the mandrel in the rivet tool, and hold the tool square and firm against the work.",
    },
    { caption: "Squeeze until the mandrel snaps. The rivet's tail has swelled behind the sheet." },
    { caption: "To remove one, drill out the head with a bit the size of the rivet's shank." },
  ],
  uses: ["Gutters and flashing", "Trailer panels", "Repairs to sheet-metal boxes"],
  tags: ["fasteners", "metal"],
  related: ["screw-types", "drill-bits"],
  status: "draft",
  order: 11,
});
