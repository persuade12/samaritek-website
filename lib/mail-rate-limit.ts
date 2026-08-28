import { NextResponse } from "next/server"
import { checkRateLimit, getClientIp } from "@/lib/rate-limit"

const WINDOW_MS = 15 * 60 * 1000
const MAX_PER_WINDOW = 8

/**
 * Limits mail-sending API routes per client IP (best-effort; in-memory per Node instance).
 * Tune with env: MAIL_RATE_LIMIT_MAX (number), MAIL_RATE_LIMIT_WINDOW_MS (number).
 */
export function enforceMailRateLimit(req: Request, routeKey: "contact" | "enquiry"): NextResponse | null {
  const max = Math.max(1, Number(process.env.MAIL_RATE_LIMIT_MAX || MAX_PER_WINDOW) || MAX_PER_WINDOW)
  const windowMs = Math.max(
    60_000,
    Number(process.env.MAIL_RATE_LIMIT_WINDOW_MS || WINDOW_MS) || WINDOW_MS,
  )
  const ip = getClientIp(req)
  const key = `${routeKey}:${ip}`
  const result = checkRateLimit(key, max, windowMs)
  if (result.ok) return null
  return NextResponse.json(
    { error: "Too many submissions from this address. Please try again later.", retryAfterSec: result.retryAfterSec },
    {
      status: 429,
      headers: { "Retry-After": String(result.retryAfterSec) },
    },
  )
}
