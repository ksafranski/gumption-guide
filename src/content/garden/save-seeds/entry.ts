import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "save-seeds",
  category: "garden",
  title: "Save your own seeds",
  aka: ["Seed saving", "Heirloom seeds", "Open-pollinated", "Ferment tomato seeds", "Store seeds"],
  kind: "planting",
  season: "Late summer and fall, at harvest",
  summary:
    "Seeds from open-pollinated plants grow true to type. Pick ripe seed from healthy plants, dry it well, and keep it cool and dry.",
  key: "Save from open-pollinated or heirloom plants, not hybrids (F1), and start with easy self-pollinators: beans, peas, lettuce, tomatoes.",
  body: [
    "Hybrid (F1) seed comes from crossing two parent lines; its seeds grow into a mixed, unpredictable lot. Open-pollinated varieties breed true if they aren't crossed with a neighbor.",
    "Squash, corn, cucumbers and brassicas cross readily with other varieties nearby, by insects or wind. Saving pure seed from them takes isolation distance or hand pollination.",
  ],
  reference: [
    {
      term: "Beans and peas",
      detail: "Leave pods on the plant until dry and rattling. Shell and dry further.",
    },
    { term: "Lettuce", detail: "Let a plant bolt; collect seed heads when fluffy and dry." },
    {
      term: "Tomatoes",
      detail:
        "Scoop seeds and gel from a ripe fruit, ferment in a little water a few days, rinse and dry on a plate.",
    },
    { term: "Peppers", detail: "Take seeds from fully ripe (colored) fruit and dry them." },
    {
      term: "Storage",
      detail:
        "Paper envelopes in a sealed jar, somewhere cool, dark and dry. Label with variety and year.",
    },
  ],
  steps: [
    { caption: "Choose the healthiest, most typical plants to save from, not just the leftovers." },
    {
      caption:
        "Let the seed fully ripen on the plant (for dry seeds) or in the fruit (for wet seeds).",
    },
    {
      caption:
        "Clean the seed and dry it on a plate or screen out of direct sun until it snaps rather than bends.",
    },
    {
      caption:
        "Store cool and dry, labeled. Do a germination test on a damp paper towel before sowing old seed.",
    },
  ],
  uses: ["Heirloom tomatoes and beans", "Keeping a favorite variety", "Swapping with neighbors"],
  tags: ["seeds", "planting"],
  related: ["sowing-seeds", "starting-seeds-indoors", "crop-rotation"],
  status: "draft",
  order: 22,
});
