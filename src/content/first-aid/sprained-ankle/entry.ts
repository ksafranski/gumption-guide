import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sprained-ankle",
  category: "first-aid",
  title: "Sprained ankle",
  aka: ["Rolled ankle", "Twisted ankle", "RICE"],
  summary: "Rest it, cool it, wrap it and raise it for the first couple of days.",
  key: "Rest, ice, compression, elevation. Can't take four steps on it? Get it checked.",
  gear: [
    "Ice pack or cold water, wrapped in cloth",
    "Elastic bandage",
    "Something to prop the foot up",
  ],
  steps: [
    { caption: "Stop and get the weight off it." },
    {
      caption:
        "Cool it with an ice pack wrapped in a cloth, up to 20 minutes at a time, every 2–3 hours.",
    },
    {
      caption:
        "Wrap it with an elastic bandage, snug but not tight. Loosen it if toes go numb, cold or pale.",
    },
    { caption: "Keep it raised above the hip when resting." },
    {
      caption:
        "Skip heat, massage and alcohol for the first two or three days. They can add swelling.",
    },
    { caption: "Start gentle movement as pain allows. Most sprains improve over a week or two." },
  ],
  getHelp: [
    "The person can't take four steps on it, either straight away or later.",
    "There's a crack heard at injury, an obvious deformity, or bone tenderness.",
    "The foot is numb, cold, or changes colour.",
    "It's not getting better after a few days of care.",
  ],
  tags: ["first-aid", "hiking", "feet"],
  related: ["blisters"],
  status: "draft",
  order: 4,
});
