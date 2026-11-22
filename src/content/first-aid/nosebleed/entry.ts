import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "nosebleed",
  category: "first-aid",
  title: "Nosebleed",
  aka: ["Bloody nose", "Epistaxis"],
  summary: "Sit up, lean forward, and pinch the soft part of the nose without letting go.",
  key: "Lean forward, not back. Pinch the soft part for 10–15 minutes by the clock.",
  gear: [
    "Tissues or a cloth",
    "A watch or phone timer",
    "Something cold for the bridge of the nose (optional)",
  ],
  steps: [
    { caption: "Sit down and lean forward so blood drains out, not down the throat." },
    {
      caption:
        "Pinch the soft part of the nose, just above the nostrils, and breathe through the mouth.",
    },
    { caption: "Hold firmly for 10–15 minutes without releasing to check." },
    { caption: "If it's still bleeding, pinch again for another 10–15 minutes." },
    {
      caption:
        "Afterwards, avoid blowing or picking the nose, heavy lifting and hot drinks for a day.",
    },
  ],
  getHelp: [
    "It doesn't stop after 20 minutes of firm pressure, or the bleeding is heavy.",
    "It followed a blow to the head or face.",
    "The person takes blood thinners, or feels faint or short of breath.",
    "Nosebleeds keep happening.",
  ],
  tags: ["first-aid", "bleeding"],
  related: ["stop-bleeding"],
  status: "draft",
  order: 10,
});
