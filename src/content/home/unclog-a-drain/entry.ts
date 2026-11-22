import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "unclog-a-drain",
  category: "home",
  title: "Unclog a drain",
  aka: ["Blocked sink", "Plunger", "Drain snake", "Auger", "Slow drain", "Clogged toilet"],
  kind: "plumbing",
  difficulty: "easy",
  summary: "Work from the gentlest fix outward: plunge, then pull the trap or snake the line.",
  key: "Seal the plunger and block any second opening, or the pressure just escapes.",
  body: [
    "Sinks clog with grease and soap; showers with hair; toilets with too much paper or things that shouldn't be there. A slow drain is usually a partial clog near the fixture. Several drains backing up at once points to the main line, which is a job for a sewer machine.",
  ],
  reference: [
    { term: "Cup plunger", detail: "Flat rim. Sinks, tubs and showers." },
    {
      term: "Flange plunger",
      detail: "Has a soft sleeve that fits a toilet outlet. Works far better on toilets.",
    },
    {
      term: "Hand snake (drum auger)",
      detail: "Quarter-inch cable for sinks and tubs. Hooks hair and pushes through soft clogs.",
    },
    { term: "Closet auger", detail: "Short, sleeved auger for toilets. Won't scratch the bowl." },
    {
      term: "Hair-catch tool",
      detail: "A barbed plastic strip. Pulls hair from shower and bath drains.",
    },
  ],
  steps: [
    { caption: "Remove the stopper or strainer and pull out what you can see." },
    {
      caption:
        "Plunge with a few inches of water over the cup. Plug the overflow hole, or the other bowl of a double sink, with a wet rag.",
    },
    { caption: "Still slow: put a bucket under the P-trap, unscrew its nuts and clean it out." },
    {
      caption:
        "Still blocked: feed a snake into the trap arm, crank as you push, and pull back what it hooks.",
    },
    { caption: "Flush with hot water. Cold water and dish soap first for a greasy kitchen line." },
  ],
  safety: [
    "Skip chemical drain cleaners if you might plunge or open the trap afterward; they splash and burn.",
    "Wear gloves and eye protection; drain water is dirty.",
  ],
  uses: ["Sinks, showers, tubs, toilets"],
  tags: ["plumbing", "drains"],
  related: ["p-trap", "fix-a-running-toilet"],
  status: "draft",
  order: 12,
});
