import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "fix-a-dripping-faucet",
  category: "home",
  title: "Fix a dripping faucet",
  aka: ["Leaky tap", "Faucet cartridge", "Tap washer", "Dripping spout"],
  kind: "plumbing",
  difficulty: "moderate",
  summary:
    "A drip means a worn seal inside the faucet. Find out which type it is, then replace that part.",
  key: "Take the old part to the store. Cartridges look alike and fit only their own brand and model.",
  body: [
    "Two separate handles that turn several times and get stiff when closed: compression faucet with rubber washers. One lever or a quarter-turn handle: cartridge, ceramic disc or ball type.",
  ],
  reference: [
    {
      term: "Compression",
      detail: "Rubber washer on the stem's end. Cheapest fix; the seat may also need dressing.",
    },
    {
      term: "Cartridge",
      detail: "A plastic or brass cylinder pulled out after a retaining clip or nut.",
    },
    {
      term: "Ceramic disc",
      detail: "Two polished discs. Rarely wears; drips usually mean grit or failed seals.",
    },
    {
      term: "Ball",
      detail: "Single lever over a slotted ball. Repair kits replace seats, springs and O-rings.",
    },
  ],
  gear: [
    "Adjustable wrench",
    "Screwdrivers and hex keys",
    "Rag and tray for parts",
    "Replacement washer or cartridge",
  ],
  steps: [
    { caption: "Close the stop valves under the sink and open the faucet to drain it." },
    { caption: "Plug the drain so nothing small goes down it." },
    { caption: "Pry off the decorative cap, remove the handle screw and lift the handle off." },
    {
      caption:
        "Unscrew the bonnet nut or clip and pull the cartridge or stem. Lay the parts out in order.",
    },
    { caption: "Fit the new part the same way round, reassemble, open the stops slowly and test." },
  ],
  uses: ["Kitchen and bathroom faucets", "Tub and shower valves (same idea, behind the trim)"],
  tags: ["plumbing", "water"],
  related: ["shut-off-valves", "pipe-types"],
  status: "draft",
  order: 16,
});
