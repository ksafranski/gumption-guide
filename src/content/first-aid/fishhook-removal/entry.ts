import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "fishhook-removal",
  category: "first-aid",
  title: "Removing a fishhook",
  aka: ["Fish hook in skin", "String-yank method", "Embedded hook"],
  summary:
    "If the barb isn't buried, back it out. If it is, use the string-pull method, or leave it for a clinic.",
  key: "Press the shank down to free the barb, then pull fast along the shank.",
  gear: ["Fishing line or strong string", "Pliers or cutters", "Soap and water", "Bandage"],
  steps: [
    { caption: "Cut the line and any other hooks off the lure so they can't snag anyone." },
    {
      caption:
        "If the barb isn't under the skin, or the hook is barbless, back it out the way it went in.",
    },
    {
      caption:
        "String-pull: loop strong line around the bend of the hook. Press the shank down flat against the skin to disengage the barb.",
    },
    {
      caption:
        "Keep pressing, and with one quick firm yank pull the line parallel to the shank, away from the eye of the hook.",
    },
    {
      caption:
        "Wash well with soap and water and cover it. Watch for infection over the next few days.",
    },
  ],
  getHelp: [
    "The hook is in or near the eye, face, a joint, or a large blood vessel. Don't attempt removal; stabilize it and go.",
    "It's deeply embedded, or you can't get it out easily.",
    "Signs of infection: spreading redness, warmth, swelling, pus.",
    "Tetanus shots aren't up to date.",
  ],
  tags: ["first-aid"],
  related: ["splinter", "stop-bleeding"],
  status: "draft",
  order: 14,
});
