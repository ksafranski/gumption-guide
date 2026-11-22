import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "patch-drywall",
  category: "home",
  title: "Patch drywall",
  aka: [
    "Fix a hole in the wall",
    "Spackle",
    "Joint compound",
    "Mud",
    "Drywall patch",
    "Plasterboard repair",
  ],
  kind: "repair",
  difficulty: "easy",
  summary:
    "Small holes take filler; bigger ones need a patch with backing, then thin coats feathered out wide.",
  key: "Three thin coats, each wider than the last, beat one thick one. Sand lightly; prime before paint.",
  reference: [
    { term: "Nail and screw holes", detail: "Spackle with a putty knife, one or two passes." },
    {
      term: "Up to about fist size",
      detail: "Self-adhesive mesh patch over the hole, then compound.",
    },
    {
      term: "Larger holes",
      detail:
        "Cut a neat square, screw a wood backer inside, screw in a drywall piece, tape the seams.",
    },
    { term: "Lightweight spackle", detail: "Dries fast, barely shrinks. Small holes." },
    {
      term: "Joint compound (mud)",
      detail: "Premixed or setting-type powder. Patches and taped seams.",
    },
  ],
  gear: [
    "Putty knives (4 and 10 inch)",
    "Compound or spackle",
    "Mesh patch or tape",
    "Sanding sponge",
    "Primer",
  ],
  steps: [
    { caption: "Cut away torn paper and loose gypsum so the edges are firm." },
    { caption: "Patch or back the hole as its size calls for." },
    { caption: "First coat: press compound into the patch and scrape it nearly flat." },
    { caption: "Let it dry. Second and third coats wider, feathering the edges to nothing." },
    { caption: "Sand lightly, wipe off dust, prime, then paint." },
  ],
  safety: [
    "Check for wires and pipes before cutting a hole larger.",
    "Wear a dust mask when sanding.",
  ],
  uses: ["Doorknob holes", "Old anchors", "Moving shelves"],
  tags: ["repair", "walls"],
  related: ["find-a-stud", "wall-anchors", "sandpaper-grits"],
  status: "draft",
  order: 21,
});
