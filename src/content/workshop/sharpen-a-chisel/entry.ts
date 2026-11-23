import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sharpen-a-chisel",
  category: "workshop",
  title: "Sharpen a chisel or plane iron",
  aka: ["Honing guide", "Bevel", "Microbevel", "Flatten the back", "Plane blade"],
  kind: "joinery",
  difficulty: "moderate",
  summary:
    "A sharp edge is two flat, polished surfaces meeting: the back and the bevel. Get the back flat once, then hone the bevel.",
  key: "Raise a burr on the bevel, then take it off on the flat back. Polish both near the edge.",
  body: [
    "Most chisels and plane irons come ground at about 25°. A honing guide holds the angle so you can add a small, slightly steeper microbevel at the edge; that's all you need to hone each time.",
    "The back only needs to be flat and polished for the first inch or so behind the edge. Do it once, on the coarse stone up through the fine; after that, a few strokes on the finest stone remove the burr.",
  ],
  gear: [
    "Coarse, medium and fine stones (or abrasive paper on glass)",
    "Honing guide",
    "Water or oil for the stones",
    "Marker pen",
    "Strop (optional)",
  ],
  steps: [
    {
      caption:
        "Flatten and polish the back near the edge, working up through the grits (first time only).",
    },
    {
      caption:
        "Set the tool in a honing guide at the bevel angle. Color the bevel with marker to check you're hitting the whole face.",
    },
    {
      caption:
        "Hone on the medium stone until you can feel a small burr all across the back of the edge.",
    },
    {
      caption:
        "Raise the angle a degree or two and take a few strokes on the fine stone: the microbevel.",
    },
    {
      caption:
        "Lay the back flat on the fine stone and stroke a few times to remove the burr. Test on end grain.",
    },
  ],
  safety: [
    "Keep fingers behind the edge and work away from yourself. A dull chisel slips; a sharp one cuts where you aim it.",
  ],
  uses: ["Chisels", "Plane irons", "Spokeshave and card scraper prep"],
  tags: ["tools", "wood", "sharpening"],
  related: ["sharpen-a-knife", "mortise-and-tenon", "dovetail-joint"],
  status: "draft",
  order: 50,
});
