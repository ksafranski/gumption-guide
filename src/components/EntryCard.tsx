"use client";
import Link from "next/link";
import { categoryById } from "@/content/categories";
import type { Entry } from "@/content/schema";
import { renderers } from "@/renderers";
import s from "./EntryCard.module.css";

export function EntryCard({
  entry,
  showCategory = false,
  compact = false,
}: {
  entry: Entry;
  showCategory?: boolean;
  compact?: boolean;
}) {
  const cat = categoryById[entry.category];
  const Thumb = renderers[cat.renderer].Thumb;
  return (
    <Link
      href={`/${entry.category}/${entry.id}`}
      className={`${s.card} ${compact ? s.compact : ""}`}
      data-cat={entry.category}
    >
      {Thumb && (
        <div className={s.thumb}>
          <Thumb entry={entry} />
        </div>
      )}
      <div className={s.meta}>
        <div className={s.tags}>
          {showCategory && <span className="tape">{cat.short}</span>}
          {entry.status === "draft" && (
            <span className="draft" title="Not yet reviewed for accuracy and safety">
              Unreviewed
            </span>
          )}
        </div>
        <h3>{entry.title}</h3>
        {!compact && <p>{entry.summary}</p>}
      </div>
    </Link>
  );
}
