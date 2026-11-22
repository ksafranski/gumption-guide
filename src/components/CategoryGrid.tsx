"use client";
import { useMemo, useState } from "react";
import type { Category } from "@/content/categories";
import type { Entry } from "@/content/schema";
import { facetLabel, facetValue } from "@/lib/content/facets";
import { EntryCard } from "./EntryCard";
import s from "./CategoryGrid.module.css";

export function CategoryGrid({ category, entries }: { category: Category; entries: Entry[] }) {
  const [sel, setSel] = useState<Record<string, string | null>>({});
  const passes = (e: Entry, skip?: string) =>
    category.facets.every(
      (f) => f.field === skip || !sel[f.field] || facetValue(e, f.field) === sel[f.field],
    );
  const shown = entries.filter((e) => passes(e));
  const options = useMemo(
    () =>
      category.facets.map((f) => {
        const vals = [
          ...new Set(entries.map((e) => facetValue(e, f.field)).filter(Boolean) as string[]),
        ];
        return { ...f, vals };
      }),
    [category, entries],
  );

  return (
    <>
      {options.some((o) => o.vals.length > 1) && (
        <div className={s.filters} role="group" aria-label="Filters">
          {options.map((f) => (
            <div key={f.field} className={s.facet}>
              <span className="label">{f.label}</span>
              <div className={s.chips}>
                <button
                  type="button"
                  aria-pressed={!sel[f.field]}
                  onClick={() => setSel({ ...sel, [f.field]: null })}
                >
                  All
                </button>
                {f.vals.map((v) => {
                  const n = entries.filter(
                    (e) => passes(e, f.field) && facetValue(e, f.field) === v,
                  ).length;
                  return (
                    <button
                      key={v}
                      type="button"
                      aria-pressed={sel[f.field] === v}
                      disabled={!n}
                      onClick={() => setSel({ ...sel, [f.field]: sel[f.field] === v ? null : v })}
                    >
                      {facetLabel(f.field, v)} <span>{n}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="grid">
        {shown.map((e) => (
          <EntryCard key={e.id} entry={e} />
        ))}
      </div>
      {!shown.length && <p className="empty">Nothing matches. Clear a filter.</p>}
    </>
  );
}
