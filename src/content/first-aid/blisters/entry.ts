import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "blisters",
  category: "first-aid",
  title: "Blisters",
  aka: ["Hot spots", "Foot blisters", "Moleskin"],
  summary:
    "Stop at the first hot spot and cover it. A blister is much harder to manage than a rub.",
  key: "Treat the hot spot, not the blister. Stop the moment something rubs.",
  gear: ["Tape (medical or athletic)", "Moleskin or a padded blister dressing", "Clean socks"],
  steps: [
    { caption: "At the first warm, rubbing feeling, stop and take the boot off." },
    { caption: "Dry the skin and cover the spot smoothly with tape or moleskin. No wrinkles." },
    {
      caption:
        "If a blister has formed, leave it whole. Cut a hole in a pad to make a ring around it.",
    },
    { caption: "If it has burst, leave the loose skin on, keep it clean, and cover it." },
    { caption: "Fix the cause: wet socks, loose laces, grit, or a seam in the wrong place." },
  ],
  getHelp: [
    "Redness, warmth or swelling is spreading, or there's pus or red streaks.",
    "The person has a fever or feels unwell.",
    "The person has diabetes or poor circulation.",
    "Blisters appear without any rubbing, or keep coming back.",
  ],
  tags: ["first-aid", "feet", "hiking"],
  related: ["sprained-ankle", "dress-in-layers"],
  status: "draft",
  order: 3,
});
