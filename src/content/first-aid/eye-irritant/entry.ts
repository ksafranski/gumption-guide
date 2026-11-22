import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "eye-irritant",
  category: "first-aid",
  title: "Something in the eye",
  aka: ["Grit in eye", "Eye wash", "Chemical in eye", "Sawdust in eye"],
  summary:
    "Don't rub. Flush with lots of clean water; for chemicals, flush for a long time and get help.",
  key: "Flush, don't rub. Chemicals: 15–20 minutes of water, then medical help.",
  gear: ["Clean water or saline", "A cup or squeeze bottle", "Clean cloth"],
  steps: [
    { caption: "Wash your hands. Don't rub the eye; grit scratches the surface." },
    { caption: "Blink several times. Tears often wash small specks out." },
    {
      caption:
        "Tilt the head so the sore eye is lower, and pour clean water gently across it from the inner corner outward.",
    },
    {
      caption:
        "For grit under the upper lid, pull the upper lid out and down over the lower lashes, then let go.",
    },
    {
      caption:
        "Chemical splash: flush straight away with running water for 15–20 minutes, holding the lids open. Remove contact lenses.",
    },
  ],
  getHelp: [
    "Any chemical in the eye, after flushing. Bring the product or its label.",
    "Something is stuck in the eye, or it came from grinding, hammering or drilling metal. Don't try to remove it.",
    "Vision is blurred or lost, or pain or redness doesn't settle after flushing.",
  ],
  tags: ["first-aid", "tools"],
  related: ["splinter", "minor-burn"],
  status: "draft",
  order: 15,
});
