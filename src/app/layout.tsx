import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-jost',
})

const title = 'Raindrop Beauty Salon'
const description =
  'Raindrop Beauty Salon — Certified Esthetician & Hair/Makeup Artist in Abbotsford, BC. 18+ years making brides shine, with full glam for weddings, Mehndi nights, and every celebration.'

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
    'Raindrop Beauty Salon',
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
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
