import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/content/categories";
import { getAllTags, getByTag } from "@/lib/content";
import { EntryCard } from "@/components/EntryCard";

type Props = { params: Promise<{ tag: string }> };

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `#${(await params).tag}` };
}

// params are read under <Suspense> so client navigations stay instant (Cache Components).
export default function TagPage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <TagView params={params} />
    </Suspense>
  );
}

async function TagView({ params }: Props) {
  const { tag } = await params;
  const list = getByTag(tag);
  if (!list.length) notFound();
  return (
    <div className="wrap">
      <header className="page-head">
        <span className="label">Tag</span>
        <h1>#{tag}</h1>
        <p>
          {list.length} entries across {new Set(list.map((e) => e.category)).size} categories.
        </p>
      </header>
      {CATEGORIES.map((c) => {
        const group = list.filter((e) => e.category === c.id);
        if (!group.length) return null;
        return (
          <section key={c.id} data-cat={c.id} style={{ marginBottom: 32 }}>
            <h2 className="label" style={{ color: "var(--accent)", margin: "0 0 12px" }}>
              {c.title}
            </h2>
            <div className="grid">
              {group.map((e) => (
                <EntryCard key={e.id} entry={e} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
