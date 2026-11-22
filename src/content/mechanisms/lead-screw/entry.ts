import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "lead-screw",
  category: "mechanisms",
  title: "Lead screw",
  aka: ["Screw and nut", "Power screw", "Feed screw", "Ball screw"],
  motion: "rot-lin",
  family: "screws",
  summary:
    "Turning a threaded rod drives a nut along it — slow, precise, powerful straight-line motion.",
  body: [
    "The nut is kept from turning by its guide, so as the screw rotates the thread pushes the nut along by one pitch per turn. Watch the thread: it appears to slide with the nut.",
    "A fine pitch gives very small, very controllable movements with a large force — the same idea as a ramp wrapped around a cylinder. Reverse the handle and the nut comes back.",
  ],
  key: "Travel per turn = thread pitch.",
  uses: ["Vices and clamps", "Lathe carriages", "CNC machines", "3D printer Z axis", "Car jacks"],
  tags: ["screw", "rotary-to-linear", "mechanical-advantage"],
  related: ["worm-gear", "rack-pinion"],
  outLabel: "Nut position",
  status: "reviewed",
  order: 21,
});
