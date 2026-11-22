import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "eccentric",
  category: "mechanisms",
  title: "Eccentric",
  aka: ["Eccentric and strap", "Eccentric sheave", "Offset disc"],
  motion: "rot-lin",
  family: "cams",
  summary:
    "A disc mounted off-centre on its shaft acts as a crank with a tiny throw, driving a rod through a strap around its rim.",
  body: [
    "The disc (sheave) is fixed to the shaft but its centre is offset. A strap rides around the disc, and as the shaft turns, the strap and its rod move back and forth exactly like a crank of radius equal to the offset.",
    "Because there is no crank arm, the shaft can run straight through — which is why steam engines used eccentrics to work their valves from the middle of a crankshaft.",
  ],
  key: "An eccentric is a crank whose pin is bigger than the shaft.",
  uses: ["Steam engine valve gear", "Pumps", "Punch presses", "Vibrating sanders"],
  tags: ["cam", "rotary-to-linear"],
  related: ["slider-crank", "cam"],
  outLabel: "Slider position",
  status: "reviewed",
  order: 14,
});
