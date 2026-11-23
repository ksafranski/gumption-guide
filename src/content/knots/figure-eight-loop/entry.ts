import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "figure-eight-loop",
  category: "knots",
  title: "Figure-eight loop",
  aka: [
    "Figure-eight follow-through",
    "Flemish loop",
    "Figure-eight on a bight",
    "Rewoven figure eight",
  ],
  kind: "loop",
  summary:
    "A strong fixed loop made by retracing a figure-eight knot with the end. Easy to check by eye.",
  key: "Every strand should have a twin running alongside it. If you can't see pairs, retie it.",
  body: [
    "Following the eight back lets you tie the loop through something closed, like a harness or a ring. If you don't need to pass the end through anything, tie the same shape with a doubled rope instead (on a bight).",
    "It jams after a hard load and can be stubborn to untie. That's the price of its security.",
  ],
  steps: [
    { caption: "Tie a loose figure-eight about a forearm's length from the end." },
    { caption: "Pass the end through the harness, ring or around the anchor: that's your loop." },
    {
      caption:
        "Follow the first eight back with the end, on the same side of each strand, the whole way through.",
    },
    {
      caption:
        "Dress it so the strands lie parallel without crossing, pull all four strands, and leave a tail.",
    },
  ],
  secure:
    "Very secure once dressed and set. For climbing, learn it from an instructor and check it every time.",
  untie: "hard",
  uses: ["Climbing tie-in", "Anchoring a line to a ring or tree", "Rescue and hauling"],
  tags: ["rope", "loop"],
  related: ["figure-eight-knot", "bowline", "alpine-butterfly"],
  status: "draft",
  order: 15,
});
