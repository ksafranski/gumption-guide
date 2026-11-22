import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "fix-a-running-toilet",
  category: "home",
  title: "Fix a running toilet",
  aka: ["Toilet keeps running", "Flapper", "Fill valve", "Ballcock", "Phantom flush", "Cistern"],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "A toilet that runs is either leaking through the flapper or overfilling into the overflow tube.",
  key: "Water going down the overflow tube: lower the fill level. Water seeping past the flapper: replace the flapper.",
  body: [
    "Lift the tank lid and watch. If the water level rises until it spills into the open overflow tube, the fill valve is set too high or failing. If the level is below the tube but the valve keeps refilling every so often, water is leaking out past the flapper.",
    "Dye test: put a few drops of food coloring in the tank and don't flush for 20 minutes. Color in the bowl means the flapper leaks.",
  ],
  reference: [
    {
      term: "Flapper",
      detail:
        "Rubber seal at the bottom of the tank. Warps and hardens with age; cheap to replace.",
    },
    {
      term: "Chain",
      detail:
        "Should have a little slack. Too tight holds the flapper open; too loose snags under it.",
    },
    {
      term: "Fill valve",
      detail:
        "Refills the tank. Adjust its float so the water stops about an inch below the overflow top, or at the marked line.",
    },
    {
      term: "Overflow tube",
      detail: "The open pipe in the middle. Stops the tank flooding the floor.",
    },
  ],
  gear: [
    "Replacement flapper (match the size, usually 2 or 3 inch)",
    "Sponge and towel",
    "Food coloring",
  ],
  steps: [
    { caption: "Close the stop valve behind the toilet and flush to empty the tank." },
    {
      caption:
        "Check the chain length and the flapper seat. Clean mineral off the seat with a scouring pad.",
    },
    { caption: "Unhook the old flapper from the overflow tube's ears and clip on the new one." },
    { caption: "Open the valve, let it fill and set the float so the level sits at the mark." },
  ],
  uses: ["Running or hissing toilets", "High water bills", "Weak flushes"],
  tags: ["plumbing", "water"],
  related: ["shut-off-valves", "unclog-a-drain"],
  status: "draft",
  order: 11,
});
