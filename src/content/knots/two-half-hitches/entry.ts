import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "two-half-hitches",
  category: "knots",
  title: "Two half hitches",
  aka: ["Double half hitch"],
  kind: "hitch",
  summary: "A turn around the post, then two half hitches around your own standing part.",
  key: "Both hitches the same way round. Done right it's a clove hitch on the standing part.",
  steps: [
    { caption: "Pass the end around the post or through the ring." },
    {
      caption:
        "Take the end over the standing part, around behind it, and out through the gap: one half hitch.",
    },
    { caption: "Make a second half hitch the same way, further along the standing part." },
    { caption: "Slide both snug up toward the post and pull the standing part tight." },
  ],
  secure:
    "Good for steady loads. Add a third hitch, or start with a round turn, if it will shake or flog.",
  untie: "easy",
  uses: ["Mooring to a ring or post", "Tying off a tarp guyline", "Securing a load to a rail"],
  tags: ["hitch", "rope"],
  related: ["clove-hitch", "truckers-hitch", "pitch-a-tarp"],
  status: "draft",
  order: 8,
});
