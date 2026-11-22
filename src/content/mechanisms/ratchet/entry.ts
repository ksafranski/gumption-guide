import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "ratchet",
  category: "mechanisms",
  title: "Ratchet & pawl",
  aka: ["Click and ratchet", "Ratchet wheel", "Detent"],
  motion: "osc-int",
  family: "indexing",
  summary:
    "A swinging lever pushes a toothed wheel forward one tooth at a time; a second pawl stops it slipping back.",
  body: [
    "On the forward stroke the driving pawl catches a steep tooth face and carries the wheel along. On the return stroke it slides up the sloping backs of the teeth and drops into the next gap.",
    "Meanwhile the fixed holding pawl does the same in reverse: it clicks over teeth as the wheel advances and blocks any backward turn.",
  ],
  key: "Motion passes one way only.",
  uses: ["Socket wrenches", "Winches", "Clock winding", "Car jacks", "Cable ties"],
  tags: ["indexing", "intermittent", "one-way"],
  related: ["geneva", "four-bar"],
  outLabel: "Wheel angle",
  status: "reviewed",
  order: 8,
});
