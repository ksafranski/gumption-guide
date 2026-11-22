import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "solder-types",
  category: "workshop",
  title: "Solder & flux",
  aka: ["60/40", "63/37", "Lead-free solder", "Rosin core", "Acid core", "Flux", "SAC305"],
  kind: "electronics",
  difficulty: "easy",
  summary:
    "Solder is a low-melting alloy and flux is what cleans the metal so it can wet. Match both to the job.",
  key: "Rosin flux for electronics, acid flux for plumbing, and never the other way around.",
  body: [
    "Eutectic 63/37 tin-lead melts at a single temperature, so it snaps from liquid to solid with less chance of a disturbed joint. 60/40 has a short pasty range. Lead-free alloys melt hotter and look duller even when good.",
    "Flux burns off as it works. For rework or surface-mount parts, add more from a flux pen rather than more solder.",
  ],
  reference: [
    { term: "63/37 tin-lead", detail: "Electronics. Melts at 183 °C; easiest to use." },
    { term: "60/40 tin-lead", detail: "Electronics. Melts over a short range just above 183 °C." },
    {
      term: "Lead-free (SAC)",
      detail:
        "Tin-silver-copper. Melts around 217 °C; needs a hotter tip; required in many products.",
    },
    {
      term: "Rosin or no-clean core",
      detail: "Flux inside the wire. The default for electronics.",
    },
    {
      term: "Plumbing solder",
      detail:
        "Thick, lead-free, used with water-soluble or acid paste flux. Corrodes circuit boards.",
    },
    {
      term: "Silver solder / brazing",
      detail: "Much higher temperatures and stronger joints. HVAC lines, jewelry, tool repair.",
    },
  ],
  safety: ["Wash hands after handling leaded solder. Keep it away from food and kids."],
  uses: ["Choosing solder for a kit", "Pipe vs circuit work", "Rework"],
  tags: ["soldering", "electronics", "materials"],
  related: ["soldering-basics", "sweat-copper-pipe", "desoldering"],
  status: "draft",
  order: 2,
});
