import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "clove-hitch",
  category: "knots",
  title: "Clove hitch",
  aka: ["Builder's knot", "Ratline hitch"],
  kind: "hitch",
  summary:
    "Two turns around a post, crossed, with the end tucked under the cross. Fast to tie, easy to adjust.",
  key: "Ends exit in opposite directions under the crossing turn.",
  steps: [
    { caption: "Take the line across the front of the post and around behind it." },
    { caption: "Bring it back across the front, crossing over the standing part." },
    { caption: "Go around behind again, below the first turn." },
    { caption: "Tuck the end under the crossing turn. Pull both ends to snug it." },
  ],
  secure:
    "Can slip or roll under a load that keeps changing direction. Back it up with a half hitch if it matters.",
  untie: "easy",
  uses: [
    "Starting and finishing lashings",
    "Tying off to a rail or stake",
    "Fender lines",
    "Holding a line while you adjust",
  ],
  tags: ["hitch", "lashing", "rope"],
  status: "draft",
  order: 1,
});
