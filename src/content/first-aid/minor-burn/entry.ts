import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "minor-burn",
  category: "first-aid",
  title: "Minor burn",
  aka: ["Scald", "Treating a burn"],
  summary: "Cool it with running water for a long time, then cover it loosely.",
  key: "Cool water, twenty minutes. No ice, no butter.",
  gear: ["Cool running water", "Cling film or a clean non-fluffy dressing"],
  steps: [
    { caption: "Get away from the heat source." },
    { caption: "Hold the burn under cool or lukewarm running water for 20 minutes." },
    {
      caption:
        "Take off rings, watches and tight clothing near the burn before it swells. Leave anything stuck to the skin.",
    },
    { caption: "Cover loosely with cling film or a clean non-fluffy dressing." },
    { caption: "Leave blisters alone." },
  ],
  getHelp: [
    "The burn is bigger than the injured person's hand.",
    "It's on the face, hands, feet, genitals or a joint.",
    "The skin looks white, waxy or charred, or doesn't hurt.",
    "It's a chemical or electrical burn.",
    "The person is a young child, elderly, or unwell.",
  ],
  tags: ["first-aid", "burns"],
  related: ["stop-bleeding"],
  status: "draft",
  order: 1,
});
