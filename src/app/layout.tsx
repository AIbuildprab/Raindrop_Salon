import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

const title = 'Glam & Glow by Kiran'
const description =
  'Glam & Glow by Kiran — Hair & Makeup Artist in Delta, BC. Full glam for Mehndi nights, bridal events, birthdays, and South Asian weddings.'

export const viewport: Viewport = {
  themeColor: '#c8a97e',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'makeup artist Delta BC',
    'hair and makeup artist',
    'South Asian bridal makeup',
    'Mehndi night glam',
    'bridal makeup Vancouver',
    'Glam Glow by Kiran',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: 'website',
    images: [{ url: '/images/opengraph.jpg', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/opengraph.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
