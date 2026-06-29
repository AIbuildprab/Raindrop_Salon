import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glam & Glow by Kiran',
  description:
    'Glam & Glow by Kiran — Hair & Makeup Artist in Delta, BC. Full glam for Mehndi nights, bridal events, birthdays, and South Asian weddings.',
  robots: 'index, follow',
  openGraph: {
    title: 'Glam & Glow by Kiran',
    description:
      'Glam & Glow by Kiran — Hair & Makeup Artist in Delta, BC. Full glam for Mehndi nights, bridal events, birthdays, and South Asian weddings.',
    type: 'website',
    images: ['/opengraph.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glam & Glow by Kiran',
    description:
      'Glam & Glow by Kiran — Hair & Makeup Artist in Delta, BC. Full glam for Mehndi nights, bridal events, birthdays, and South Asian weddings.',
    images: ['/opengraph.jpg'],
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
