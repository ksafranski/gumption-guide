import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "tick-removal",
  category: "first-aid",
  title: "Removing a tick",
  aka: ["Tick bite", "Deer tick", "Lyme disease"],
  summary: "Grip it right at the skin with fine tweezers and pull straight out, steady and slow.",
  key: "Close to the skin, straight up, no twisting. Skip the matches and the petroleum jelly.",
  gear: [
    "Fine-tipped tweezers",
    "Soap and water or rubbing alcohol",
    "A small bag or tape to keep the tick",
  ],
  steps: [
    { caption: "Grasp the tick with fine-tipped tweezers as close to the skin as you can." },
    { caption: "Pull straight up with steady, even pressure. Don't twist or jerk." },
    {
      caption:
        "If mouthparts stay behind, try to remove them. If you can't, leave them and let the skin heal.",
    },
    { caption: "Clean the bite and your hands with soap and water or alcohol." },
    { caption: "Note the date. Seal the tick in tape or a bag if you want it identified." },
    {
      caption:
        "Check the whole body, especially hairline, behind the ears, armpits, waist and behind the knees.",
    },
  ],
  getHelp: [
    "A rash, especially a spreading red ring, in the weeks after the bite.",
    "Fever, chills, aches or tiredness in the weeks after the bite.",
    "The tick was attached for a long time, or you couldn't get it out.",
  ],
  tags: ["first-aid", "bites-and-stings", "hiking"],
  related: ["bee-sting", "splinter"],
  sources: [
    {
      title: "CDC: Removing a tick",
      url: "https://www.cdc.gov/ticks/after-a-tick-bite/removing-a-tick.html",
    },
  ],
  status: "draft",
  order: 9,
});
