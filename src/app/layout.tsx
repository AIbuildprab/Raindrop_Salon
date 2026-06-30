import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glam & Glow by Kiran',
  description:
    'Glam & Glow by Kiran \u2014 Hair & Makeup Artist in Delta, BC. Full glam for Mehndi nights, bridal events, birthdays, and South Asian weddings.',
  robots: 'index, follow',
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    title: 'Glam & Glow by Kiran',
    description:
      'Glam & Glow by Kiran \u2014 Hair & Makeup Artist in Delta, BC. Full glam for Mehndi nights, bridal events, birthdays, and South Asian weddings.',
    type: 'website',
    images: ['/images/opengraph.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glam & Glow by Kiran',
    description:
      'Glam & Glow by Kiran \u2014 Hair & Makeup Artist in Delta, BC. Full glam for Mehndi nights, bridal events, birthdays, and South Asian weddings.',
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
