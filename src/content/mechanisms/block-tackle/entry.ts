import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "block-tackle",
  category: "mechanisms",
  title: "Block & tackle",
  aka: ["Pulley system", "Movable pulley", "Rope and pulleys"],
  motion: "lin-lin",
  family: "belts",
  summary:
    "A rope running through a fixed and a movable pulley halves the effort needed to lift a load.",
  body: [
    "The load hangs from the movable pulley, which is held up by two strands of rope. Each strand carries half the weight, so you pull with half the force.",
    "The price is distance: to raise the load by one unit, both strands must shorten, so you pull twice as much rope. The fixed pulley only changes the direction of the pull. More pulleys mean more strands and more advantage.",
  ],
  key: "Mechanical advantage = number of strands supporting the load.",
  uses: ["Cranes", "Sailing rigs", "Elevators", "Rock climbing hauls", "Garage hoists"],
  tags: ["pulley", "mechanical-advantage", "rope"],
  related: ["belt-drive", "toggle"],
  outLabel: "Load height",
  status: "reviewed",
  order: 26,
});
