import type { Metadata, Viewport } from 'next'
import { BRAND_NAME } from '@/lib/contact'
import { resolveSiteUrl } from '@/lib/site-url'
import './globals.css'

const title =
  "BEST Beauty Salon Abbotsford - if you're looking for Hair & Makeup near me or Bridal Makeup, Laser Hair Removal & Facials near me - Raindrops Beauty Salon is the place to be"
const socialTitle = 'BEST Beauty Salon Abbotsford | Raindrops Beauty Salon'
const brandName = BRAND_NAME
const description =
  'Raindrops Beauty Salon — Certified Esthetician & Hair/Makeup Artist in Abbotsford, BC. 18+ years making brides shine, with full glam for weddings, Mehndi nights, and every celebration.'

export const viewport: Viewport = {
  themeColor: '#C5A059',
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = resolveSiteUrl()
  return {
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
      title: socialTitle,
      description,
      url: siteUrl,
      siteName: brandName,
      type: 'website',
      images: [{ url: '/images/raindrop-logo.png', width: 1024, height: 1024, alt: brandName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/images/raindrop-logo.png'],
    },
  }
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
