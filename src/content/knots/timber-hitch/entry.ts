import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "timber-hitch",
  category: "knots",
  title: "Timber hitch",
  aka: ["Lumberman's knot", "Bowyer's knot"],
  kind: "hitch",
  summary:
    "A turn around a log, then the end twisted back around its own part. Grips under load, falls apart when slack.",
  key: "Three twists minimum, and keep the twists against the log.",
  steps: [
    { caption: "Pass the end around the log." },
    { caption: "Take it around the standing part." },
    {
      caption:
        "Twist the end around its own part, following the curve of the log, three times or more.",
    },
    { caption: "Pull the standing part so the turn bites the log and traps the twists." },
  ],
  secure:
    "Holds only while loaded. For dragging, add a half hitch further along the log to keep it pulling straight.",
  untie: "easy",
  uses: ["Dragging logs and poles", "Starting a diagonal lashing", "Hoisting a spar"],
  tags: ["hitch", "lashing", "rope"],
  status: "draft",
  order: 3,
});
