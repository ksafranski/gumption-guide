import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "geneva",
  category: "mechanisms",
  title: "Geneva drive",
  aka: ["Maltese cross", "Geneva stop", "Geneva mechanism"],
  motion: "rot-int",
  family: "indexing",
  summary:
    "A continuously turning pin steps a slotted wheel a quarter turn, then locks it firmly in place.",
  body: [
    "While the pin is inside a slot it drags the wheel around 90°. When it leaves, the round locking disc on the driver nests in the wheel's curved notch, holding it still until the pin comes round to the next slot.",
    "With four slots the wheel moves for a quarter of each driver turn and rests for three quarters. The slots meet the pin tangentially, so it starts and stops without a jolt.",
  ],
  key: "Moves 1/n of a turn per driver revolution, with a positive lock in between.",
  uses: ["Film projectors", "Indexing tables", "Watch winding stops", "Bottle-filling lines"],
  tags: ["indexing", "intermittent", "one-way"],
  related: ["ratchet", "spur-gears"],
  outLabel: "Wheel angle",
  status: "reviewed",
  order: 5,
});
