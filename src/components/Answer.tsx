"use client";
import Link from "next/link";
import { citations, segments } from "@/lib/ai/prompt";
import type { SearchDoc } from "@/lib/search/docs";
import s from "./SearchBox.module.css";

export type AskState = { q: string; text: string; done: boolean; failed?: boolean };

/** A streamed AI answer with its [[id]] citations turned into links. */
export function Answer({
  ask,
  docs,
  onNavigate,
  onSearch,
}: {
  ask: AskState;
  docs: Map<string, SearchDoc>;
  onNavigate: () => void;
  onSearch: () => void;
}) {
  // Hide a half-streamed "[[bowl" until its closing brackets arrive.
  const text = ask.done ? ask.text : ask.text.replace(/\[\[[a-z0-9-]*\]?$/, "");
  const known = (id: string) => docs.has(id);
  const parts = segments(text, known);
  const cited = citations(text, known);

  return (
    <div className={s.answer} aria-live="polite" aria-busy={!ask.done}>
      <div className={s.group}>Answer</div>
      <p className={s.answerText}>
        {!text && !ask.done && <span className={s.pending}>Checking the guide…</span>}
        {parts.map((p, i) => {
          if ("text" in p) return <span key={i}>{p.text}</span>;
          const d = docs.get(p.id)!;
          return (
            <Link key={i} href={d.href} className={s.cite} data-cat={d.category} onClick={onNavigate}>
              {d.title}
            </Link>
          );
        })}
      </p>
      {ask.done && cited.length > 0 && (
        <ul className={s.sources}>
          {cited.map((id) => {
            const d = docs.get(id)!;
            return (
              <li key={id} data-cat={d.category}>
                <Link href={d.href} onClick={onNavigate}>
                  <span className={s.dot} aria-hidden="true" />
                  <span className={s.label}>{d.title}</span>
                  <span className={s.sub}>{d.categoryTitle}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <div className={s.foot}>
        <em className={s.note}>AI answer from the guide’s entries. Check the source.</em>
        <button type="button" className={s.linkBtn} onClick={onSearch}>
          ⇧↵ search instead
        </button>
      </div>
    </div>
  );
}
