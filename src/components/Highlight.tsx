import { ranges, type Token } from "@/lib/search/engine";

export function Highlight({ text, toks }: { text: string; toks?: Token[] }) {
  const r = ranges(text, toks);
  if (!r.length) return <>{text}</>;
  const out: React.ReactNode[] = [];
  let at = 0;
  r.forEach(([a, b], i) => {
    if (a > at) out.push(text.slice(at, a));
    out.push(<mark key={i}>{text.slice(a, b)}</mark>);
    at = b;
  });
  out.push(text.slice(at));
  return <>{out}</>;
}
