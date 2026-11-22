import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "fire-lay",
  category: "fieldcraft",
  title: "Fire lay",
  aka: ["Teepee fire", "Log cabin fire", "Building a campfire"],
  difficulty: "easy",
  summary: "Stack fuel so air gets in and flame climbs from small stuff to big stuff.",
  key: "Tinder, then kindling, then fuel. Each size about double the last.",
  gear: [
    "Tinder",
    "Kindling (pencil to thumb thick)",
    "Fuel wood (wrist thick)",
    "Lighter or matches",
    "Water to put it out",
  ],
  steps: [
    { caption: "Sort wood into three piles by size before you strike anything." },
    { caption: "Put a loose fist-sized ball of tinder in the center of the ring." },
    { caption: "Teepee: lean kindling around it in a cone, leaving a gap on the upwind side." },
    {
      caption: "Log cabin: or lay pairs of sticks in alternating square layers around the tinder.",
    },
    { caption: "Light the tinder through the gap, low and upwind." },
    {
      caption: "Feed small pieces first. Add bigger fuel once the kindling is burning on its own.",
    },
  ],
  safety: [
    "Check local fire restrictions first. Bans are common in dry seasons.",
    "Use an existing fire ring where there is one, away from overhanging branches, tents and dry grass.",
    "Keep water and a tool to stir with on hand before lighting.",
    "Never leave a fire unattended.",
    "Put it out: drown, stir, drown again, and feel for heat with the back of your hand. If it's too hot to touch, it's too hot to leave.",
  ],
  tags: ["fire", "camping"],
  related: ["find-north"],
  status: "draft",
  order: 1,
});
