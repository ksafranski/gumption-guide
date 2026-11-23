import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "garden-tool-care",
  category: "garden",
  title: "Garden tool care",
  aka: [
    "Sharpen pruners",
    "Sharpen a shovel",
    "Clean garden tools",
    "Sharpen a hoe",
    "Oil wooden handles",
  ],
  kind: "care",
  season: "End of season, and whenever an edge goes dull",
  summary:
    "Clean, sharp, oiled tools cut cleaner, dig easier and last decades. Ten minutes a season does it.",
  key: "Sharpen only the beveled side. Pruners get a fine file or stone; shovels and hoes, a coarse file.",
  body: [
    "Pruners that crush instead of cut leave ragged wounds that heal slowly. A sharp bypass blade makes a clean cut, which matters more to the plant than the angle of the cut.",
    "Clean sap and soil off after use. Wiping blades with rubbing alcohol between plants helps avoid spreading disease when pruning sick wood.",
  ],
  reference: [
    {
      term: "Bypass pruners",
      detail:
        "Sharpen the beveled blade only, following its angle. Never file the flat face; just remove the burr.",
    },
    {
      term: "Shovels and spades",
      detail: "A coarse file along the front edge, on the top side, at roughly the existing bevel.",
    },
    {
      term: "Hoes",
      detail: "File the inside bevel to a keen edge; a sharp hoe slices weeds instead of chopping.",
    },
    {
      term: "Wooden handles",
      detail: "Sand rough spots and rub in boiled linseed oil once a year.",
    },
    { term: "Metal surfaces", detail: "Wire-brush rust and wipe with a light oil before storing." },
  ],
  gear: [
    "Stiff brush and water",
    "Mill file",
    "Diamond file or small stone",
    "Rag and light oil",
    "Boiled linseed oil",
    "Gloves",
  ],
  steps: [
    { caption: "Scrub off soil and sap, and dry the tool." },
    {
      caption:
        "Clamp it or hold it firmly, and file the beveled edge in one direction, away from you.",
    },
    { caption: "Remove the burr from the back with a light pass, keeping the flat side flat." },
    { caption: "Oil the metal and the wooden handle, then store them dry and off the ground." },
  ],
  safety: [
    "Wear gloves and file away from your body.",
    "Oily rags from linseed oil can self-heat and ignite: lay them flat to dry outdoors.",
  ],
  uses: ["Pruners and loppers", "Shovels, spades and hoes", "End-of-season storage"],
  tags: ["tools", "care", "sharpening"],
  related: ["pruning-cuts", "sharpen-a-knife", "wood-finishes"],
  status: "draft",
  order: 19,
});
