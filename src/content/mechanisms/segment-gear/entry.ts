import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "segment-gear",
  category: "mechanisms",
  title: "Segment gear",
  aka: ["Sector gear", "Quadrant and pinion", "Toothed segment"],
  motion: "osc-rot",
  family: "gears",
  summary: "A swinging toothed sector turns a small pinion through a much larger angle.",
  body: [
    "Only a slice of a large gear is needed when it never turns all the way round. As the sector swings back and forth, its teeth drive the pinion through the same arc length — and because the pinion is small, that is a big angle.",
    "Here a 32-tooth sector swinging ±20° turns the 10-tooth pinion about ±66°, amplifying a short lever motion. Run it backwards and a spinning pinion gives a slow, strong swing.",
  ],
  key: "Pinion angle = sector angle × sector teeth ÷ pinion teeth.",
  uses: ["Dial gauges", "Steering boxes", "Old typewriters", "Barrier gates", "Gauge needles"],
  tags: ["gearing"],
  related: ["rack-pinion", "spur-gears", "bell-crank"],
  outLabel: "Pinion angle",
  status: "reviewed",
  order: 30,
});
