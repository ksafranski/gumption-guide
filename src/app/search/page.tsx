import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPage } from "@/components/SearchPage";

export const metadata: Metadata = { title: "Search" };

export default function Page() {
  return (
    <div className="wrap">
      <header className="page-head">
        <span className="label">Search</span>
        <h1>Find it</h1>
        <p>
          Words match the start of any word. Narrow with <code>category:knots</code>,{" "}
          <code>tag:mechanical-advantage</code>, <code>use:tent</code>, a{" "}
          <code>&quot;phrase&quot;</code> or a <code>/regex/</code>.
        </p>
      </header>
      <Suspense fallback={null}>
        <SearchPage />
      </Suspense>
    </div>
  );
}
