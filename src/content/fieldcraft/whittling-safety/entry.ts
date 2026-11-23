import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "whittling-safety",
  category: "fieldcraft",
  title: "Knife safety & whittling",
  aka: [
    "Whittling",
    "Carving grips",
    "Blood circle",
    "Thumb push",
    "Chest lever",
    "Safe knife use",
  ],
  difficulty: "easy",
  summary:
    "Control the blade with short, braced strokes, and keep every part of you out of the path it would take if it slipped.",
  key: "Ask where the blade goes if it slips. If the answer is any part of you, change the grip.",
  body: [
    "The 'blood circle' is the reach of your arm plus the knife all around you. Nobody else stands inside it while you work.",
    "Most cuts happen when the blade is pushed too hard, is dull, or the wood is held in the lap. Short, controlled shavings beat long heavy strokes, and a sharp knife needs less force.",
  ],
  reference: [
    {
      term: "Straight-away cut",
      detail: "Long strokes away from the body, wood held to the side. Roughing out.",
    },
    {
      term: "Thumb push",
      detail:
        "The thumb of the holding hand pushes the back of the blade for small, controlled cuts.",
    },
    {
      term: "Pull (paring) cut",
      detail:
        "Toward the thumb, which stays below and behind the edge's path. Practise slowly; consider a thumb guard.",
    },
    {
      term: "Chest lever",
      detail:
        "Knife and wood held at the chest, arms levering apart. Powerful and well controlled.",
    },
  ],
  gear: [
    "Sharp fixed-blade or locking knife",
    "Cut-resistant glove for the holding hand",
    "Thumb guard or tape",
    "Green or soft wood (basswood, willow, pine)",
  ],
  steps: [
    {
      caption:
        "Sit with elbows on knees, the work held off to the side of your leg, not over your lap.",
    },
    { caption: "Check the blood circle is clear." },
    {
      caption:
        "Take short shavings, braced with the thumb of the holding hand, working with the grain.",
    },
    { caption: "Close or sheath the knife whenever you stop, and pass it handle first." },
  ],
  safety: [
    "Never cut toward an unprotected hand, leg or the femoral area on the inner thigh.",
    "A folding knife that doesn't lock can close on your fingers. Use one that locks or a fixed blade.",
  ],
  uses: ["Tent stakes and pot hooks", "Feather sticks", "Spoons and small carvings"],
  tags: ["tools", "camping", "wood"],
  related: ["sharpen-a-knife", "fire-lay", "stop-bleeding"],
  status: "draft",
  order: 30,
});
