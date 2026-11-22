import { getAllEntries, getEntry } from "@/lib/content";

export function generateStaticParams() {
  return getAllEntries().map((e) => ({ id: e.id }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const e = getEntry((await params).id);
  if (!e) return Response.json({ error: "not found" }, { status: 404 });
  return Response.json(e);
}
