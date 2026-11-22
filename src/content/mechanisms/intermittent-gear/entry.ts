import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "intermittent-gear",
  category: "mechanisms",
  title: "Intermittent gear",
  aka: ["Mutilated gear", "Partial gear", "Segment-tooth gear"],
  motion: "rot-int",
  family: "indexing",
  summary:
    "A driver with only a few teeth turns its partner for part of each revolution, then leaves it standing still.",
  body: [
    "Most of the driver's rim has its teeth cut away. While the toothed segment passes, it meshes normally and turns the driven gear; the rest of the time the plain rim slides past and the driven gear rests.",
    "Here 4 teeth move the 16-tooth gear a quarter turn per revolution — the same job as a Geneva drive, but with an abrupt start and stop. Real versions add a curved locking rim so the driven gear cannot drift while it waits.",
  ],
  key: "Teeth on the driver ÷ teeth on the driven = fraction of a turn per step.",
  uses: ["Counters and odometers", "Packaging machines", "Toy mechanisms", "Film advance"],
  tags: ["indexing", "intermittent"],
  related: ["geneva", "ratchet", "spur-gears"],
  outLabel: "Driven gear angle",
  status: "reviewed",
  order: 29,
});
