import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "lumber-sizes",
  category: "building",
  title: "Lumber sizes & grades",
  aka: ["Nominal vs actual", "2x4 dimensions", "Dimensional lumber", "Pressure-treated", "Crown"],
  kind: "framing",
  summary:
    "A 2×4 is 1½ × 3½ in. Dimension lumber is named by its rough-sawn size, then planed and dried smaller.",
  key: "Subtract ½ in from nominal 2 to 6 in, ¾ in from 8 in and up. Lengths are true.",
  body: [
    "Sight down the edge of a board and you'll see a slight bow, the crown. Install joists and rafters crown up so the load straightens them.",
    'Pressure-treated lumber is rated by use: "above ground" or "ground contact". Anything touching soil or concrete, or hard to replace, should be ground contact.',
  ],
  reference: [
    { term: "1× boards", detail: "¾ in thick. 1×4 is ¾ × 3½; 1×6 is ¾ × 5½." },
    { term: "2×4", detail: "1½ × 3½ in." },
    { term: "2×6", detail: "1½ × 5½ in." },
    { term: "2×8", detail: "1½ × 7¼ in." },
    { term: "2×10", detail: "1½ × 9¼ in." },
    { term: "2×12", detail: "1½ × 11¼ in." },
    { term: "4×4", detail: "3½ × 3½ in." },
    { term: "6×6", detail: "5½ × 5½ in." },
    { term: "Grades", detail: "Select, #1, #2, #3. #2 and better is standard framing." },
    { term: "KD / S-DRY", detail: "Kiln-dried: less shrinking and twisting after it's built in." },
  ],
  uses: ["Buying lumber", "Reading plans", "Planning cuts"],
  tags: ["framing", "wood", "measuring"],
  related: ["wall-framing", "wood-volume", "sheet-goods", "length"],
  status: "draft",
  order: 15,
});
