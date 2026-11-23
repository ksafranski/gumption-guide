import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "cuts-and-scrapes",
  category: "first-aid",
  title: "Cuts & scrapes",
  aka: ["Minor cut", "Graze", "Road rash", "Clean a wound", "Abrasion", "Laceration"],
  summary:
    "Stop the bleeding, clean the wound thoroughly with running water, and keep it covered while it heals.",
  key: "Clean water and time do most of the work. Flush out every bit of dirt; that's what prevents infection.",
  gear: [
    "Clean water",
    "Mild soap",
    "Tweezers",
    "Sterile gauze",
    "Adhesive bandages or non-stick dressings",
    "Medical tape",
  ],
  steps: [
    { caption: "Wash your hands, or put on gloves." },
    { caption: "Press firmly with a clean cloth or gauze until the bleeding stops." },
    {
      caption:
        "Rinse the wound under clean running water for several minutes. Wash around it with soap; keep soap out of the wound itself.",
    },
    { caption: "Pick out remaining grit with tweezers cleaned in rubbing alcohol." },
    {
      caption: "Cover it with a clean dressing. Change it daily, or whenever it gets wet or dirty.",
    },
  ],
  getHelp: [
    "Bleeding won't stop after 10 minutes of firm pressure, or blood spurts.",
    "The cut is deep, gaping, longer than about half an inch, or on the face, a joint, the hand or genitals.",
    "There's dirt or debris you can't get out, or it was a bite (animal or human) or a puncture from a dirty object.",
    "Tetanus shots aren't up to date (a booster is usually advised if it's been more than 5 years for a dirty wound).",
    "Redness spreading, warmth, swelling, pus, red streaks or fever over the next days.",
  ],
  tags: ["first-aid", "bleeding"],
  related: ["stop-bleeding", "splinter", "fishhook-removal"],
  status: "draft",
  order: 8,
});
