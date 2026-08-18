/** Canonical production origin — used for metadataBase / canonical / OG / sitemap / robots. */
export const PRODUCTION_SITE_URL = 'https://raindropsbeautysalonltd.com'

function isEphemeralOrigin(origin: string): boolean {
  try {
    const { hostname } = new URL(origin)
    return (
      hostname === 'localhost' ||
      hostname.endsWith('.localhost') ||
      hostname === '127.0.0.1' ||
      hostname.endsWith('.vercel.app')
    )
  } catch {
    return true
  }
}

/**
 * Absolute origin with a scheme. Uses NEXT_PUBLIC_SITE_URL only (never VERCEL_URL).
 * Localhost and *.vercel.app hosts are rejected so canonical/OG tags stay on the
 * custom domain for static export.
 */
export function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (raw) {
    try {
      const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
      const origin = new URL(withScheme).origin
      if (!isEphemeralOrigin(origin)) {
        return origin
      }
    } catch {
      // Invalid env value — use production origin below.
    }
  }
  return PRODUCTION_SITE_URL
}
