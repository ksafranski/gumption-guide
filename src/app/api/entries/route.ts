import { getAllEntries } from "@/lib/content";

/** JSON list. Stable shape; versioned alias at /api/v1/entries later. */
export function GET() {
  return Response.json(
    getAllEntries().map((e) => ({
      id: e.id,
      category: e.category,
      title: e.title,
      summary: e.summary,
      tags: e.tags ?? [],
    })),
  );
}
