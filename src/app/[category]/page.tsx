import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, categoryById } from "@/content/categories";
import type { CategoryId } from "@/content/schema";
import { getByCategory } from "@/lib/content";
import { CategoryGrid } from "@/components/CategoryGrid";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = categoryById[(await params).category as CategoryId];
  return c ? { title: c.title, description: c.blurb } : {};
}

// params are read under <Suspense> so client navigations stay instant (Cache Components).
export default function CategoryPage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <CategoryView params={params} />
    </Suspense>
  );
}

async function CategoryView({ params }: Props) {
  const c = categoryById[(await params).category as CategoryId];
  if (!c) notFound();
  const entries = getByCategory(c.id);
  return (
    <div className="wrap" data-cat={c.id}>
      <header className="page-head">
        <span className="tape">
          {String(c.order).padStart(2, "0")} · {c.short}
        </span>
        <h1>{c.title}</h1>
        <p>{c.blurb}</p>
      </header>
      <CategoryGrid category={c} entries={entries} />
    </div>
  );
}
