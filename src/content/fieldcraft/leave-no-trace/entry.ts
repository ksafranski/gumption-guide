import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "leave-no-trace",
  category: "fieldcraft",
  title: "Leave No Trace",
  aka: ["LNT", "Low-impact camping", "Pack it in, pack it out"],
  difficulty: "easy",
  summary: "Seven habits that let a place look untouched after you've camped in it.",
  key: "If you packed it in, pack it out. Leave the place better than you found it.",
  steps: [
    { caption: "Plan ahead: know the rules, the weather and the ground before you go." },
    {
      caption:
        "Walk and camp on durable ground: trails, rock, gravel, dry grass, established sites.",
    },
    {
      caption:
        "Pack out all trash and food scraps. Bury human waste in a cat hole 6–8 in (15–20 cm) deep, about 200 ft (70 steps) from water, trails and camp.",
    },
    { caption: "Leave rocks, plants and artifacts where they are." },
    { caption: "Keep fires small, in existing rings, or use a stove instead." },
    { caption: "Watch wildlife from a distance. Never feed it; store food out of reach." },
    { caption: "Keep noise down and give other people space on the trail and in camp." },
  ],
  uses: ["Backpacking", "Car camping", "Day hikes", "Teaching kids outdoors"],
  tags: ["camping", "fire"],
  related: ["fire-lay", "choose-a-campsite"],
  sources: [
    { title: "Leave No Trace Center for Outdoor Ethics", url: "https://lnt.org/why/7-principles/" },
  ],
  status: "draft",
  order: 4,
});
