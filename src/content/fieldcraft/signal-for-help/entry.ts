import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "signal-for-help",
  category: "fieldcraft",
  title: "Signaling for help",
  aka: ["Distress signal", "SOS", "Signal mirror", "Ground-to-air signals", "Three whistle blasts"],
  difficulty: "easy",
  summary:
    "Make yourself big, bright and loud, in threes. Anything repeated three times means distress.",
  key: "Three of anything: blasts, fires, flashes. Then stay put.",
  gear: [
    "Whistle",
    "Signal mirror (or any shiny flat surface)",
    "Bright clothing or tarp",
    "Headlamp",
  ],
  steps: [
    { caption: "If you're lost, stop moving. Searchers find people who stay in one place." },
    {
      caption:
        "Whistle: three sharp blasts, rest, repeat. It carries much farther than shouting and costs less energy.",
    },
    { caption: "Light: three flashes, or SOS (· · · — — — · · ·) with a headlamp after dark." },
    {
      caption:
        "Mirror: hold up two fingers in a V toward the aircraft or searcher, and tilt the mirror so the light spot sits on your fingers. Sweep slowly.",
    },
    {
      caption:
        "From the air: in an open spot, lay out big shapes in contrasting colors. V means need help; X means need medical help.",
    },
    {
      caption:
        "Fire: three fires in a triangle, or one fire with green leaves on top for smoke by day.",
    },
  ],
  safety: [
    "Tell someone your route and return time before you go. That's the signal that starts the search.",
    "Carry a charged phone, and a satellite messenger or personal locator beacon where there's no coverage.",
  ],
  tags: ["navigation", "emergency"],
  related: ["find-north", "fire-lay", "lightning-distance"],
  status: "draft",
  order: 15,
});
