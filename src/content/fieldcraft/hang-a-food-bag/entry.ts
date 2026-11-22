import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "hang-a-food-bag",
  category: "fieldcraft",
  title: "Hanging a food bag",
  aka: ["Bear hang", "PCT hang", "Bear bag", "Food hang"],
  difficulty: "moderate",
  summary:
    "Get food high, away from the trunk and well clear of camp, so animals can't reach it overnight.",
  key: "About 12 ft up, 6 ft out from the trunk, 6 ft below the branch, 200 ft from your tent.",
  gear: [
    "Dry bag or stuff sack for the food and scented items",
    "About 50 ft (15 m) of thin, strong cord",
    "A small throw bag, or a rock in a sock",
    "A carabiner, and a short stick for the PCT-style toggle",
  ],
  steps: [
    {
      caption:
        "Before dark, find a live branch about 20 ft up that's thumb-thick or more where the line crosses it.",
    },
    {
      caption:
        "Tie the cord to a throw bag and toss it over, aiming about 6 ft out from the trunk.",
    },
    {
      caption:
        "Clip the food bag to the cord with a carabiner and haul it up tight under the branch.",
    },
    {
      caption:
        "PCT method: clip a second loop of cord into the carabiner as high as you can reach, tie a small stick in that loop, and let the bag drop until the stick jams in the carabiner.",
    },
    {
      caption:
        "Check it from the ground: high, clear of the trunk, and not hanging near anything an animal could climb.",
    },
    { caption: "To get it down, hook the lower cord with a stick and pull." },
  ],
  safety: [
    "Many parks require bear-resistant canisters instead of hangs. Some bears have learned to beat hangs. Check the rules where you are.",
    "Hang everything scented: food, trash, toothpaste, sunscreen, the cook pot.",
    "Cook and hang at least 200 ft (70 steps) downwind of where you sleep.",
    "Wear eye protection or turn your face away when throwing; a rebounding throw bag hurts.",
  ],
  tags: ["camping", "food", "rope", "wildlife"],
  related: ["food-cache", "round-turn-two-half-hitches", "leave-no-trace", "choose-a-campsite"],
  status: "draft",
  order: 11,
});
