import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "bell-crank",
  category: "mechanisms",
  title: "Bell crank",
  aka: ["Angle lever", "L-lever", "Bellcrank"],
  motion: "lin-lin",
  family: "linkages",
  summary:
    "An L-shaped lever turns a push or pull through a right angle — and can scale it up or down.",
  body: [
    "The lever pivots at its corner. Pushing one arm sideways swings the other arm up or down, so motion along one line comes out along another.",
    "With equal arms, the output moves as far as the input; make one arm longer and you trade distance for force. It is named after the levers that once ran doorbell wires around the corners of houses.",
  ],
  key: "Output ÷ input movement = output arm ÷ input arm.",
  uses: [
    "Bicycle brakes",
    "Aircraft controls",
    "Railway signals",
    "Old house bells",
    "Car suspension",
  ],
  tags: ["linkage", "lever"],
  related: ["four-bar", "toggle"],
  outLabel: "Output slider",
  status: "reviewed",
  order: 15,
});
