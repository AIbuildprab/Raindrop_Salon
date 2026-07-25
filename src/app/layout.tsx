import type { Metadata, Viewport } from 'next'
import './globals.css'

/** Stable production origin — used for metadataBase / canonical / OG. */
const PRODUCTION_SITE_URL = 'https://raindropsalon.vercel.app'

/**
 * Absolute origin with a scheme. Never falls back to localhost or ephemeral
 * VERCEL_URL preview hosts — those break canonical/OG tags on static export.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (raw) {
    try {
      const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
      return new URL(withScheme).origin
    } catch {
      // Invalid env value — use production origin below.
    }
  }
  return PRODUCTION_SITE_URL
}

const siteUrl = resolveSiteUrl()

const title = 'Raindrops Beauty Salon'
const description =
  'Raindrops Beauty Salon — Certified Esthetician & Hair/Makeup Artist in Abbotsford, BC. 18+ years making brides shine, with full glam for weddings, Mehndi nights, and every celebration.'

export const viewport: Viewport = {
  themeColor: '#C5A059',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'makeup artist Abbotsford BC',
    'esthetician Abbotsford',
    'hair and makeup artist Fraser Valley',
    'South Asian bridal makeup',
    'Mehndi night glam',
    'bridal makeup Abbotsford',
    'Raindrops Beauty Salon',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: { url: '/images/raindrop-logo.png', type: 'image/png' },
    apple: { url: '/images/raindrop-logo.png' },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: 'website',
    images: [{ url: '/images/raindrop-logo.png', width: 1024, height: 1024, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/raindrop-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://vumbnail.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
