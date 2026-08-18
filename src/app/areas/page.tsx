import type { Metadata } from 'next'
import HubGrid from '@/components/seo/HubGrid'
import JsonLd from '@/components/seo/JsonLd'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import SiteShell from '@/components/layout/SiteShell'
import { AREAS } from '@/data/areas'
import { SERVICES } from '@/data/services'
import { ADDRESS_FULL } from '@/lib/contact'
import { collectionPageGraph } from '@/lib/schema'
import { resolveSiteUrl } from '@/lib/site-url'

const title = 'Areas We Serve | Abbotsford, Surrey, Langley, Chilliwack, Mission'
const description =
  'Raindrops Beauty Salon is based in Abbotsford and serves Surrey, Langley, Chilliwack, and Mission. Studio visits or on-location glam. One real address.'

export async function generateMetadata(): Promise<Metadata> {
  const url = `${resolveSiteUrl()}/areas`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
  }
}

export default function AreasHubPage() {
  return (
    <SiteShell>
      <JsonLd
        data={collectionPageGraph({
          name: 'Areas we serve',
          description,
          path: '/areas',
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Areas we serve', path: '/areas' },
          ],
        })}
      />
      <main>
        <section className="seo-hero section-light">
          <div className="section-inner">
            <PageBreadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Areas we serve' },
              ]}
            />
            <span className="eyebrow" data-reveal>Areas we serve</span>
            <h1 className="section-title" data-reveal>
              Fraser Valley, <em>one studio</em>
            </h1>
            <div className="gold-divider" />
            <p className="seo-lede" data-reveal>
              The chair is at {ADDRESS_FULL}. Hair and makeup travel. Laser and most skin
              services stay in Abbotsford. Pick your city below for the local details.
            </p>
          </div>
        </section>

        <section className="section-light seo-body-band">
          <div className="section-inner">
            <HubGrid
              items={AREAS.map(area => ({
                href: area.href,
                name: area.name,
                blurb: area.blurb,
              }))}
              cta="Local page"
            />

            <div className="seo-hub-note">
              <h2>What we book in every city</h2>
              <ul className="seo-related-list">
                {SERVICES.map(service => (
                  <li key={service.slug}>
                    <a href={service.href}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
