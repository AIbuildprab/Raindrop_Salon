import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteShell from '@/components/layout/SiteShell'
import JsonLd from '@/components/seo/JsonLd'
import LongformPage from '@/components/seo/LongformPage'
import { AREA_SLUGS, getArea } from '@/data/areas'
import { getAreaDoc } from '@/data/content'
import { areaPageGraph } from '@/lib/schema'
import { resolveSiteUrl } from '@/lib/site-url'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return AREA_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getAreaDoc(slug)
  if (!doc) return {}
  const url = `${resolveSiteUrl()}/areas/${slug}`
  return {
    title: { absolute: doc.seoTitle },
    description: doc.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: doc.seoTitle,
      description: doc.seoDescription,
      url,
    },
  }
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params
  const doc = getAreaDoc(slug)
  const area = getArea(slug)
  if (!doc || !area) notFound()

  const path = `/areas/${slug}`

  return (
    <SiteShell>
      <JsonLd
        data={areaPageGraph({
          city: area.name,
          description: doc.seoDescription,
          path,
          faqs: doc.faqs,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Areas we serve', path: '/areas' },
            { name: area.name, path },
          ],
        })}
      />
      <main>
        <LongformPage
          doc={doc}
          showMap
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Areas we serve', href: '/areas' },
            { name: area.name },
          ]}
        />
      </main>
    </SiteShell>
  )
}
