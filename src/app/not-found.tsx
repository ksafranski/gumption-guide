import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-head">
      <span className="label">404</span>
      <h1>Not in the manual</h1>
      <p>
        That page doesn&apos;t exist (yet). <Link href="/search">Search</Link> or head{" "}
        <Link href="/">home</Link>.
      </p>
    </div>
  );
}
