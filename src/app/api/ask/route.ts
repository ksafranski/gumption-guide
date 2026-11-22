import Anthropic from "@anthropic-ai/sdk";
import { bodyText } from "@/content/_generated/bodyText";
import { categoryById } from "@/content/categories";
import type { CategoryId } from "@/content/schema";
import { buildCorpus } from "@/lib/ai/corpus";
import { INSTRUCTIONS, question } from "@/lib/ai/prompt";
import { getAllEntries } from "@/lib/content";

export const maxDuration = 30;

const MODEL = "anthropic/claude-haiku-5.5";
const MAX_QUESTION = 300;

// Built once per server instance. Identical bytes on every request = cache hits.
const SYSTEM: Anthropic.TextBlockParam[] = [
  { type: "text", text: INSTRUCTIONS },
  { type: "text", text: buildCorpus(getAllEntries(), bodyText), cache_control: { type: "ephemeral" } },
];

/** AI Gateway auth: an explicit key, else the Vercel OIDC token of this deployment. */
function gatewayToken(req: Request) {
  return (
    process.env.AI_GATEWAY_API_KEY ||
    req.headers.get("x-vercel-oidc-token") ||
    process.env.VERCEL_OIDC_TOKEN
  );
}

const plain = (body: string, status: number) =>
  new Response(body, { status, headers: { "content-type": "text/plain; charset=utf-8" } });

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { q?: unknown; in?: unknown } | null;
  const q = typeof body?.q === "string" ? body.q.trim() : "";
  if (!q) return plain("Ask a question.", 400);
  if (q.length > MAX_QUESTION) return plain(`Keep it under ${MAX_QUESTION} characters.`, 400);
  const section = categoryById[body?.in as CategoryId]?.title ?? null;

  const apiKey = gatewayToken(req);
  if (!apiKey) return plain("Answers aren't set up on this server.", 503);
  const client = new Anthropic({ apiKey, baseURL: "https://ai-gateway.vercel.sh", maxRetries: 1 });

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 1024, // answers are a few sentences by design
    output_config: { effort: "low" },
    system: SYSTEM,
    messages: [{ role: "user", content: question(q, section) }],
    // Keep requests on one provider so they land on the same prompt cache.
    ...{ providerOptions: { gateway: { order: ["anthropic"] } } },
  });

  const enc = new TextEncoder();
  const out = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const ev of stream) {
          if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") {
            controller.enqueue(enc.encode(ev.delta.text));
          }
        }
        const msg = await stream.finalMessage();
        if (msg.stop_reason === "refusal") {
          controller.enqueue(enc.encode("\n\nI can't help with that one. Try searching instead."));
        }
        const u = msg.usage;
        console.log(
          `[ask] in=${u.input_tokens} cache_read=${u.cache_read_input_tokens ?? 0} cache_write=${
            u.cache_creation_input_tokens ?? 0
          } out=${u.output_tokens} stop=${msg.stop_reason}`,
        );
      } catch (err) {
        console.error("[ask]", err);
        const msg =
          err instanceof Anthropic.RateLimitError
            ? "Too many questions right now. Try again in a minute."
            : "Couldn't get an answer. Try searching instead.";
        controller.enqueue(enc.encode(`\n\n${msg}`));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(out, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
}
