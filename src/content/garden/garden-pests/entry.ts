import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "garden-pests",
  category: "garden",
  title: "Garden pests: an IPM approach",
  aka: [
    "Integrated pest management",
    "IPM",
    "Aphids",
    "Slugs",
    "Cabbage worms",
    "Hornworms",
    "Beneficial insects",
  ],
  kind: "pests",
  season: "Growing season",
  summary:
    "Look first, identify, then use the gentlest control that works. Most problems are handled by hand, barrier or a blast of water.",
  key: "Inspect weekly, identify before you treat, and accept a little damage.",
  body: [
    "Integrated pest management means steps in order: prevent (healthy soil, right plant in the right place, rotation), monitor, identify, then control starting with the least disruptive method. Broad-spectrum sprays kill the predators that were keeping pests in check, and the problem comes back worse.",
  ],
  reference: [
    {
      term: "Aphids",
      detail:
        "Clusters on new growth. Knock off with a strong spray of water; ladybugs and lacewings eat them. Ants farming them make it worse.",
    },
    {
      term: "Slugs & snails",
      detail:
        "Ragged holes and slime, mostly at night. Hand-pick by flashlight, shallow beer traps, remove hiding boards and debris.",
    },
    {
      term: "Cabbage worms",
      detail:
        "Green caterpillars on brassicas from white butterflies. Cover with fine row cover from planting.",
    },
    {
      term: "Tomato hornworm",
      detail:
        "Big green caterpillar stripping leaves. Hand-pick. Ones covered in white cocoons are already parasitized: leave them.",
    },
    {
      term: "Squash vine borer",
      detail:
        "Sudden wilting of a squash vine; frass at the base. Row cover until flowering; wrap stems.",
    },
    {
      term: "Deer & rabbits",
      detail:
        "Fencing is the only reliable answer: deer need about 8 ft or a double fence; rabbits a 2 ft fence buried a few inches.",
    },
  ],
  steps: [
    { caption: "Walk the garden weekly and turn leaves over, especially new growth." },
    { caption: "Identify the pest, using a local extension service if you're not sure." },
    { caption: "Start with hand-picking, water sprays, barriers and traps." },
    {
      caption:
        "Encourage predators: flowers for beneficial insects, a water source, no blanket spraying.",
    },
    {
      caption:
        "If you spray, pick the most targeted product, read the whole label, and spray in the evening when pollinators aren't active.",
    },
  ],
  safety: [
    "Pesticides, including organic ones, are toxic. Follow the label exactly, wear what it says, and keep pets and kids off treated areas.",
  ],
  uses: ["Vegetable gardens", "Roses and ornamentals", "Fruit trees"],
  tags: ["pests", "care"],
  related: ["crop-rotation", "pruning-cuts", "watering"],
  status: "draft",
  order: 17,
});
