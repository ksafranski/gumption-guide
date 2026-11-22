import { getSearchIndex } from "@/lib/content";

/** Build-time search index, loaded by the client so search works offline. */
export function GET() {
  return Response.json(getSearchIndex());
}
