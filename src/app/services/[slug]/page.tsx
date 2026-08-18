import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteShell from '@/components/layout/SiteShell'
import JsonLd from '@/components/seo/JsonLd'
import LongformPage from '@/components/seo/LongformPage'
import { getServiceDoc } from '@/data/content'
import { SERVICE_SLUGS, getService } from '@/data/services'
import { servicePageGraph } from '@/lib/schema'
import { resolveSiteUrl } from '@/lib/site-url'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICE_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getServiceDoc(slug)
  if (!doc) return {}
  const url = `${resolveSiteUrl()}/services/${slug}`
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

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const doc = getServiceDoc(slug)
  const service = getService(slug)
  if (!doc || !service) notFound()

  const path = `/services/${slug}`

  return (
    <SiteShell>
      <JsonLd
        data={servicePageGraph({
          name: service.name,
          description: doc.seoDescription,
          path,
          faqs: doc.faqs,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.name, path },
          ],
        })}
      />
      <main>
        <LongformPage
          doc={doc}
          crumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: service.name },
          ]}
        />
      </main>
    </SiteShell>
  )
}
