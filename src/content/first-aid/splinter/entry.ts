import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "splinter",
  category: "first-aid",
  title: "Splinter",
  aka: ["Sliver", "Removing a splinter"],
  summary: "Clean it, grip the end, and draw it out the way it went in.",
  key: "Pull along the angle it went in, not straight up.",
  gear: ["Fine tweezers", "A needle", "Soap and water", "Rubbing alcohol", "Bandage"],
  steps: [
    { caption: "Wash your hands and the skin around the splinter." },
    { caption: "Wipe the tweezers and needle with rubbing alcohol." },
    { caption: "If the end is buried, gently lift the skin over it with the needle tip." },
    {
      caption:
        "Grip the end close to the skin and pull out slowly along the same angle it went in.",
    },
    { caption: "Squeeze gently to bleed it a little, wash again, and cover." },
  ],
  getHelp: [
    "It's deep, large, under a nail, or breaks off and won't come out.",
    "It's glass or metal, or near the eye.",
    "Redness, swelling, warmth or pus develops over the next few days.",
    "It was a dirty wound and tetanus shots aren't up to date.",
  ],
  tags: ["first-aid"],
  related: ["stop-bleeding", "tick-removal"],
  status: "draft",
  order: 7,
});
