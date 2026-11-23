import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "cloud-signs",
  category: "fieldcraft",
  title: "Reading the clouds",
  aka: [
    "Weather signs",
    "Cloud types",
    "Storm coming",
    "Cumulonimbus",
    "Mackerel sky",
    "Halo around the sun",
  ],
  difficulty: "easy",
  summary:
    "Clouds that grow taller, thicken or lower are the sky's early warning. Watch how they change, not just what they are.",
  key: "Puffy clouds towering upward by early afternoon: plan to be off ridges and summits before they turn dark and anvil-topped.",
  body: [
    "A single look tells you little; a sequence tells you a lot. High wispy cloud thickening into a milky sheet, then lowering grey cloud, often means a front with steady rain is on its way within a day or so.",
    "Thunderstorms build fast in summer mountains. A morning start and an early turnaround are the standard way to stay ahead of them.",
  ],
  reference: [
    {
      term: "Fair-weather cumulus",
      detail: "Small, flat-bottomed puffs that don't grow much. Settled weather.",
    },
    {
      term: "Towering cumulus",
      detail: "Tall, cauliflower tops growing through the day. Showers or storms possible.",
    },
    {
      term: "Cumulonimbus",
      detail: "Dark base, anvil-shaped top. Thunderstorm: lightning, gusts, hail, heavy rain.",
    },
    {
      term: "Cirrus",
      detail:
        "High, wispy strands. Fine for now; if they thicken and spread, change may be coming.",
    },
    {
      term: "Cirrostratus (halo)",
      detail: "Thin milky sheet that makes a ring around the sun or moon. Often ahead of a front.",
    },
    { term: "Lenticular clouds", detail: "Smooth lens shapes over peaks. Strong winds aloft." },
  ],
  steps: [
    {
      caption:
        "Look at the sky several times a day, especially to the west where weather usually arrives in mid-latitudes.",
    },
    {
      caption:
        "Note whether clouds are building upward, thickening or lowering, and whether the wind is shifting or rising.",
    },
    {
      caption:
        "Set a turnaround time when storms are likely, and move off high, exposed ground at the first thunder.",
    },
  ],
  safety: [
    "If you hear thunder, you're within striking distance. Get off peaks and ridges and away from lone trees.",
    "Local patterns vary. A forecast before you go beats any sky-reading.",
  ],
  uses: ["Day hikes and summits", "Paddling and sailing", "Deciding when to pitch camp"],
  tags: ["weather", "hiking", "navigation"],
  related: ["lightning-distance", "choose-a-campsite", "pitch-a-tarp"],
  status: "draft",
  order: 32,
});
