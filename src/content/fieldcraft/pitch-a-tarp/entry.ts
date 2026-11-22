import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pitch-a-tarp",
  category: "fieldcraft",
  title: "Pitching a tarp",
  aka: ["A-frame tarp", "Tarp shelter", "Ridgeline"],
  difficulty: "moderate",
  summary: "A tight ridgeline between two trees, the tarp draped over it, corners staked out low.",
  key: "Tension comes from the ridgeline and the stakes, not the tarp. Low and tight sheds weather.",
  gear: [
    "Tarp with tie-outs (about 3 × 3 m / 10 × 10 ft is roomy for one)",
    "Ridgeline cord, about 15 m / 50 ft",
    "Four to six stakes and short guylines",
  ],
  steps: [
    {
      caption:
        "Pick two trees a bit farther apart than the tarp is long. Check overhead for dead limbs.",
    },
    { caption: "Tie the ridgeline to one tree at about chest height." },
    {
      caption:
        "Run it to the other tree and tension it with a trucker's hitch. Lower it if rain or wind is coming.",
    },
    { caption: "Drape the tarp over the ridgeline so the sides hang even." },
    { caption: "Stake the four corners out and down, keeping the panels flat and tight." },
    { caption: "Turn the closed end, or a low side, toward the wind." },
  ],
  safety: [
    "Don't pitch under dead branches or leaning dead trees.",
    "Stay out of dry washes and low spots that collect runoff.",
  ],
  tags: ["shelter", "camping", "rope"],
  related: ["truckers-hitch", "two-half-hitches", "choose-a-campsite"],
  status: "draft",
  order: 3,
});
