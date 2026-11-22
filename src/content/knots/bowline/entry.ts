import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "bowline",
  category: "knots",
  title: "Bowline",
  aka: ["Bowline loop"],
  kind: "loop",
  summary:
    "A fixed loop at the end of a line that won't slip or jam, and unties even after a heavy load.",
  key: "Up through the hole, around the tree, back down the hole.",
  steps: [
    { caption: "Make a small overhand loop in the standing part, with the working side on top." },
    {
      caption:
        "Leave the size of loop you want, then bring the end up through the small loop from underneath.",
    },
    { caption: "Take the end around behind the standing part." },
    { caption: "Bring it back down through the small loop, alongside itself." },
    {
      caption:
        "Hold the end against the loop and pull the standing part to set it. Leave a tail of a dozen rope diameters or more.",
    },
  ],
  secure:
    "Secure under steady load. Can shake loose when not loaded, so a stopper knot on the tail is cheap insurance.",
  untie: "easy",
  uses: [
    "Loop over a post or cleat",
    "Tying a line around yourself or an object",
    "Tarp and bear-bag lines",
    "Mooring lines",
  ],
  tags: ["loop", "rope"],
  related: ["clove-hitch"],
  refs: { abok: 1010 },
  status: "draft",
  order: 2,
});
