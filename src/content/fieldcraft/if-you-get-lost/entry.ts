import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "if-you-get-lost",
  category: "fieldcraft",
  title: "If you get lost",
  aka: ["STOP", "Lost in the woods", "Stay put", "Hug a tree", "What to do when lost"],
  difficulty: "easy",
  summary:
    "Stop moving, calm down, work out what you know, and make a plan. Wandering is how a short delay turns into a search.",
  key: "S.T.O.P.: Stop, Think, Observe, Plan. If you can't confidently retrace your steps, stay where you are and make yourself easy to find.",
  body: [
    "Searchers look for you along your planned route, so the most useful thing you did happened before you left: telling someone where you were going and when you'd be back.",
    "Three of anything is a distress signal: three whistle blasts, three fires, three flashes. A whistle carries much farther than a voice and costs no energy.",
  ],
  gear: [
    "Whistle",
    "Headlamp",
    "Warm layer and rain shell",
    "Water and a snack",
    "Charged phone (in airplane mode to save battery)",
  ],
  steps: [
    { caption: "Stop. Sit down, drink some water and eat something. Panic makes bad decisions." },
    { caption: "Think: when did you last know where you were? What have you passed since?" },
    {
      caption:
        "Observe: landmarks, the sun's direction, sounds of roads or water, phone signal, how much daylight is left.",
    },
    {
      caption:
        "Plan: if you can retrace your steps with confidence, go back slowly. If not, stay put near an open area.",
    },
    {
      caption:
        "Make yourself visible and audible: bright clothing out, three whistle blasts at intervals. Shelter before dark.",
    },
  ],
  safety: [
    "Call emergency services if you have signal. A text may get through when a call won't.",
    "Teach children to stay put and 'hug a tree' if separated, and that searchers calling their name are friends.",
  ],
  uses: ["Day hikes", "Hunting and foraging", "Kids outdoors"],
  tags: ["navigation", "emergency", "hiking"],
  related: ["signal-for-help", "find-north", "daylight-left", "dress-in-layers"],
  status: "draft",
  order: 33,
});
