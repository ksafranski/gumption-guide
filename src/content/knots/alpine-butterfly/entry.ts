import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "alpine-butterfly",
  category: "knots",
  title: "Alpine butterfly",
  aka: ["Butterfly loop", "Lineman's loop", "Midline loop"],
  kind: "loop",
  summary:
    "A fixed loop tied in the middle of a rope that takes a pull in any direction: along the line or on the loop.",
  key: "Twist a bight twice, fold the top eye down, and push it through the bottom eye.",
  body: [
    "Because it's tied in the bight, you don't need either end. That makes it the go-to for clipping into the middle of a line, isolating a worn section, or making a hand loop on a hauling rope.",
    "Unlike most loops, it doesn't distort when the two standing parts are pulled apart, and it unties fairly easily after a load.",
  ],
  steps: [
    {
      caption:
        "Lay a bight in the middle of the rope and twist it a full turn, so you have a lower eye and an upper eye.",
    },
    { caption: "Fold the upper eye down in front of the lower eye." },
    {
      caption:
        "Push it through the lower eye from front to back, and pull it out below as the loop.",
    },
    { caption: "Hold the loop and pull both standing parts apart to set it." },
  ],
  secure: "Secure in all three directions of pull. Check it is dressed neatly before loading.",
  untie: "easy",
  uses: [
    "Loops in the middle of a line",
    "Isolating a damaged section",
    "Hauling and tensioning lines",
  ],
  tags: ["rope", "loop", "mechanical-advantage"],
  related: ["figure-eight-loop", "bowline", "truckers-hitch"],
  status: "draft",
  order: 16,
});
