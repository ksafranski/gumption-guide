import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "garbage-disposal",
  category: "home",
  title: "Unjam a garbage disposal",
  aka: [
    "Disposal humming",
    "Disposal won't turn on",
    "Disposer reset button",
    "Food waste disposer",
  ],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "A humming disposal is jammed; a silent one has usually tripped its reset button. Both are fixed from underneath.",
  key: "Power off first. Turn the flywheel with the hex key in the bottom, then press the red reset button.",
  body: [
    "Most disposals have a hex socket in the center of the bottom. The matching wrench usually came with the unit; a standard hex key of the same size works too.",
    "Jams come from bones, fruit pits, utensils and fibrous peels. Run cold water while it grinds, and keep running it a few seconds after.",
  ],
  gear: ["Disposal hex wrench (often 1/4 in)", "Flashlight", "Tongs or pliers"],
  steps: [
    { caption: "Turn off the disposal switch and unplug it or switch off its breaker." },
    { caption: "Look in with a flashlight and pull out any object with tongs, never your hand." },
    {
      caption:
        "Under the sink, put the hex wrench in the bottom socket and work it back and forth until it turns freely all the way round.",
    },
    {
      caption:
        "Wait a few minutes for the motor to cool, press the reset button, restore power and run it with cold water.",
    },
  ],
  safety: [
    "Never put your hand in the disposal, even with the power off.",
    "Don't pour chemical drain cleaner into a disposal; plunge or clear the trap instead.",
  ],
  uses: ["Humming disposals", "Disposal that won't start", "Slow kitchen drains"],
  tags: ["plumbing", "drains", "electrical"],
  related: ["unclog-a-drain", "p-trap", "circuit-breakers"],
  status: "draft",
  order: 26,
});
