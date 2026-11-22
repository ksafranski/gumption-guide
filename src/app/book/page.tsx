import type { Metadata } from "next";
import { CATEGORIES } from "@/content/categories";
import { entryBadges } from "@/lib/content/facets";
import { getAllEntries, getAllTags, getByCategory, getByTag, getEntry } from "@/lib/content";
import { renderers } from "@/renderers";
import s from "./book.module.css";

export const metadata: Metadata = { title: "The Book" };

// Print-optimized whole guide. Paged.js (running heads, page numbers, TOC page refs) comes in phase 6.
export default function Book() {
  const az = getAllEntries()
    .flatMap((e) => [{ label: e.title, e }, ...(e.aka ?? []).map((a) => ({ label: a, e }))])
    .sort((a, b) => a.label.localeCompare(b.label));
  return (
    <div className={s.book}>
      <section className={s.titlePage}>
        <p className="label">Field manual</p>
        <h1>Gumption Guide</h1>
        <p>Mechanisms · Knots &amp; Lashings · Units &amp; Measures · Fieldcraft</p>
        <p className={s.printHint}>Print this page (Save as PDF) for the book.</p>
      </section>

      <nav className={s.toc} aria-label="Contents">
        <h2>Contents</h2>
        <ol>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <a href={`#cat-${c.id}`}>{c.title}</a>
              <ol>
                {getByCategory(c.id).map((e) => (
                  <li key={e.id}>
                    <a href={`#${e.id}`}>{e.title}</a>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </nav>

      {CATEGORIES.map((c) => {
        const R = renderers[c.renderer];
        return (
          <section key={c.id} id={`cat-${c.id}`} className={s.category} data-cat={c.id}>
            <header className={s.catHead}>
              <span className="tape">{String(c.order).padStart(2, "0")}</span>
              <h2>{c.title}</h2>
              <p>{c.blurb}</p>
            </header>
            {getByCategory(c.id).map((e) => (
              <article key={e.id} id={e.id} className={s.entry}>
                <h3>
                  {e.title} {e.status === "draft" && <span className="draft">Unreviewed</span>}
                </h3>
                <p className={s.meta}>
                  {entryBadges(e).join(" · ")}
                  {e.aka?.length ? ` · aka ${e.aka.join(", ")}` : ""}
                </p>
                <p className={s.summary}>{e.summary}</p>
                {e.key && <p className={s.key}>{e.key}</p>}
                <R.Print entry={e} />
                {e.body?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {e.category === "units" && e.rulesOfThumb?.length ? (
                  <ul>
                    {e.rulesOfThumb.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                ) : null}
                {e.related?.length ? (
                  <p className={s.xref}>
                    {e.related.map((r) => {
                      const t = getEntry(r)!;
                      return (
                        <a key={r} href={`#${r}`}>
                          → <i>{t.title}</i>
                        </a>
                      );
                    })}
                  </p>
                ) : null}
              </article>
            ))}
          </section>
        );
      })}

      <section className={s.index}>
        <h2>Index</h2>
        <ul className={s.cols}>
          {az.map(({ label, e }) => (
            <li key={`${label}-${e.id}`}>
              <a href={`#${e.id}`}>{label === e.title ? <b>{label}</b> : label}</a>
            </li>
          ))}
        </ul>
        <h2>Tags</h2>
        <ul className={s.cols}>
          {getAllTags().map((t) => (
            <li key={t}>
              <b>#{t}</b>:{" "}
              {getByTag(t).map((e, i) => (
                <span key={e.id}>
                  {i ? ", " : ""}
                  <a href={`#${e.id}`}>{e.title}</a>
                </span>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
