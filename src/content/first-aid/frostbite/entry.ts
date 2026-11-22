import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "frostbite",
  category: "first-aid",
  title: "Frostbite",
  aka: ["Frostnip", "Frozen fingers", "Cold injury"],
  summary:
    "Frozen skin and tissue. Get warm, don't rub it, and only rewarm once it won't freeze again.",
  key: "Never thaw it if it could refreeze. Never rub it. Warm, not hot.",
  gear: ["Dry gloves and socks", "Warm water and a container", "Loose dry dressings"],
  steps: [
    {
      caption:
        "Watch for skin that goes numb, white or grayish-yellow, and feels hard or waxy: fingers, toes, nose, ears, cheeks.",
    },
    {
      caption:
        "Frostnip (red, cold, tingling, still soft): warm it against your own skin, like hands in armpits. It should fully recover.",
    },
    { caption: "Get out of the cold and remove wet clothing and anything tight, like rings." },
    {
      caption:
        "Don't rewarm if there's any chance it will freeze again before you're safe. Thaw-and-refreeze does the most damage.",
    },
    {
      caption:
        "Rewarm in warm water, comfortable to an uninjured hand, not hot, for 20–30 minutes until soft and colour returns. It will hurt.",
    },
    {
      caption:
        "Pad between fingers and toes with loose dry dressing. Don't pop blisters. Avoid walking on thawed feet.",
    },
  ],
  getHelp: [
    "Anything beyond frostnip that stays numb, pale, hard or blisters.",
    "Skin turns blue-gray or black.",
    "The person is also hypothermic: treat that first and call emergency services.",
  ],
  tags: ["first-aid", "cold-weather"],
  related: ["hypothermia", "dress-in-layers"],
  status: "draft",
  order: 11,
});
