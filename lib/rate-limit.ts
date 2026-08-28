type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

export type RateLimitDenied = { ok: false; retryAfterSec: number }
export type RateLimitOk = { ok: true }
export type RateLimitResult = RateLimitOk | RateLimitDenied

const PRUNE_THRESHOLD = 5000

function pruneExpired(now: number) {
  if (buckets.size < PRUNE_THRESHOLD) return
  for (const [k, v] of buckets) {
    if (now >= v.resetAt) buckets.delete(k)
  }
}

/** Fixed-window counter per key. Best-effort on serverless (resets per instance). */
export function checkRateLimit(key: string, max: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  pruneExpired(now)

  let b = buckets.get(key)
  if (!b || now >= b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true }
  }
  if (b.count >= max) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((b.resetAt - now) / 1000)) }
  }
  b.count += 1
  return { ok: true }
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim()
    if (first) return first
  }
  const realIp = req.headers.get("x-real-ip")?.trim()
  if (realIp) return realIp
  return "unknown"
}
