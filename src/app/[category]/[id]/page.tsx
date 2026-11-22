import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bodies } from "@/content/_generated/bodies";
import { categoryById } from "@/content/categories";
import { entryBadges } from "@/lib/content/facets";
import { getAllEntries, getBacklinks, getByCategory, getEntry, getRelated } from "@/lib/content";
import { renderers } from "@/renderers";
import { EntryCard } from "@/components/EntryCard";
import s from "./entry.module.css";

type Props = { params: Promise<{ category: string; id: string }> };

export function generateStaticParams() {
  return getAllEntries().map((e) => ({ category: e.category, id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = getEntry((await params).id);
  return e ? { title: e.title, description: e.summary } : {};
}

// params are read under <Suspense> so client navigations stay instant (Cache Components).
export default function EntryPage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <EntryView params={params} />
    </Suspense>
  );
}

async function EntryView({ params }: Props) {
  const { category, id } = await params;
  const e = getEntry(id);
  if (!e || e.category !== category) notFound();
  const cat = categoryById[e.category];
  const R = renderers[cat.renderer];
  const Body = bodies[e.id] ? (await bodies[e.id]()).default : null;
  const related = getRelated(e.id);
  const backlinks = getBacklinks(e.id);
  const siblings = getByCategory(e.category);
  const at = siblings.findIndex((x) => x.id === e.id);
  const prev = siblings[at - 1];
  const next = siblings[at + 1];
  const isArticle = cat.renderer === "article";

  return (
    <article className="wrap" data-cat={e.category}>
      <nav className={s.crumbs} aria-label="Breadcrumb">
        <Link href={`/${cat.id}`}>← {cat.title}</Link>
      </nav>
      <div className={`${s.grid} ${isArticle ? s.article : ""}`}>
        <div className={s.stage}>
          {isArticle && Body ? (
            <div className={`prose ${s.body}`}>
              <Body />
            </div>
          ) : null}
          <R.Live entry={e} />
        </div>

        <div className={s.info}>
          <div className={s.stamps}>
            <span className="tape">{cat.short}</span>
          </div>
          <h1>{e.title}</h1>
          {e.aka?.length ? <p className={s.aka}>aka {e.aka.join(" · ")}</p> : null}
          <ul className={s.badges}>
            {entryBadges(e).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className={s.summary}>{e.summary}</p>
          {e.key && (
            <p className={s.key}>
              <span className="label">Rule of thumb</span>
              {e.key}
            </p>
          )}

          {e.body?.length ? (
            <section>
              <h2 className={s.h}>How it works</h2>
              {e.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ) : null}

          {!isArticle && Body ? (
            <section className="prose">
              <Body />
            </section>
          ) : null}

          {e.category === "units" && e.rulesOfThumb?.length ? (
            <section>
              <h2 className={s.h}>Close enough</h2>
              <ul className={s.thumbs}>
                {e.rulesOfThumb.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {e.category === "knots" && (e.strength || e.secure) ? (
            <section>
              <h2 className={s.h}>Notes</h2>
              <dl className={s.specs}>
                {e.secure && (
                  <>
                    <dt>Security</dt>
                    <dd>{e.secure}</dd>
                  </>
                )}
                {e.strength && (
                  <>
                    <dt>Strength</dt>
                    <dd>{e.strength}</dd>
                  </>
                )}
              </dl>
            </section>
          ) : null}

          {e.uses?.length ? (
            <section>
              <h2 className={s.h}>Where you meet it</h2>
              <ul className={s.uses}>
                {e.uses.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {e.tags?.length ? (
            <section>
              <h2 className={s.h}>Tags</h2>
              <ul className={s.tagList}>
                {e.tags.map((t) => (
                  <li key={t}>
                    <Link href={`/tags/${t}`}>#{t}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {e.refs && Object.keys(e.refs).length ? (
            <p className={s.refs}>
              {Object.entries(e.refs).map(([k, v]) => (
                <span key={k}>
                  {k.toUpperCase()} #{v}
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>

      {related.length ? (
        <section className={s.related}>
          <h2 className={s.h}>See also</h2>
          <div className="grid small">
            {related.map((r) => (
              <EntryCard key={r.id} entry={r} showCategory={r.category !== e.category} compact />
            ))}
          </div>
          {backlinks.length ? (
            <p className={s.backlinks}>
              <span className="label">Referenced by</span>{" "}
              {backlinks.map((b, i) => (
                <span key={b.id}>
                  {i ? ", " : ""}
                  <Link href={`/${b.category}/${b.id}`}>{b.title}</Link>
                </span>
              ))}
            </p>
          ) : null}
        </section>
      ) : null}

      <nav className={s.pager} aria-label="More in this category">
        {prev ? <Link href={`/${prev.category}/${prev.id}`}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/${next.category}/${next.id}`}>{next.title} →</Link> : <span />}
      </nav>
    </article>
  );
}
