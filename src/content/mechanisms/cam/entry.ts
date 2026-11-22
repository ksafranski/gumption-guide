import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "cam",
  category: "mechanisms",
  title: "Cam & follower",
  aka: ["Plate cam", "Disc cam", "Flat-faced follower"],
  motion: "rot-lin",
  family: "cams",
  summary:
    "A shaped disc lifts and lowers a follower. The outline of the cam is the motion program.",
  body: [
    "As the cam turns, the follower rides its edge. The distance from the shaft to the edge at each angle sets how high the follower sits, so any pattern of rise, pause and fall can be cut into the profile.",
    "Gravity or a spring keeps the follower pressed against the cam. Watch the graph: the lobe gives a quick lift, then a long low dwell.",
  ],
  key: "Profile radius at each angle = follower position.",
  uses: ["Engine valve trains", "Automata", "Sewing machines", "Music boxes", "Locks"],
  tags: ["cam", "rotary-to-linear"],
  related: ["scotch-yoke", "slider-crank"],
  outLabel: "Follower lift",
  status: "reviewed",
  order: 6,
});
