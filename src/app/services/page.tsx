import type { Metadata } from 'next'
import HubGrid from '@/components/seo/HubGrid'
import JsonLd from '@/components/seo/JsonLd'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import SiteShell from '@/components/layout/SiteShell'
import { AREAS } from '@/data/areas'
import { SERVICES } from '@/data/services'
import { collectionPageGraph } from '@/lib/schema'
import { resolveSiteUrl } from '@/lib/site-url'

const title = 'Beauty Services Abbotsford | Bridal, Laser & Full Glam'
const description =
  'Core services at Raindrops Beauty Salon in Abbotsford: bridal makeup, laser hair removal, and hair & makeup for parties across the Fraser Valley.'

export async function generateMetadata(): Promise<Metadata> {
  const url = `${resolveSiteUrl()}/services`
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

export default function ServicesHubPage() {
  return (
    <SiteShell>
      <JsonLd
        data={collectionPageGraph({
          name: 'Beauty services in Abbotsford',
          description,
          path: '/services',
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ],
        })}
      />
      <main>
        <section className="seo-hero section-light">
          <div className="section-inner">
            <PageBreadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Services' },
              ]}
            />
            <span className="eyebrow" data-reveal>Services</span>
            <h1 className="section-title" data-reveal>
              What we <em>do</em>
            </h1>
            <div className="gold-divider" />
            <p className="seo-lede" data-reveal>
              Three core pages for the searches that already sit in our title: bridal makeup,
              laser hair removal, and hair &amp; makeup. The full price menu still lives on the
              homepage. These pages exist so you can read how Jass actually works — and so Google
              can see more than one URL.
            </p>
          </div>
        </section>

        <section className="section-light seo-body-band">
          <div className="section-inner">
            <HubGrid items={SERVICES.map(service => ({
              href: service.href,
              name: service.name,
              blurb: service.blurb,
            }))} />

            <div className="seo-hub-note">
              <h2>Also on the menu</h2>
              <p>
                Facials, Oxygeneo, microneedling, acne treatments, threading, waxing, colour,
                keratin, cuts, and massage are booked from the{' '}
                <a href="/#services" className="seo-inline-link">homepage price list</a>.
                Dedicated pages for those can come later. For now, start with the three services
                above, then pick the city you are coming from.
              </p>
              <ul className="seo-related-list">
                {AREAS.map(area => (
                  <li key={area.slug}>
                    <a href={area.href}>{area.name}</a>
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
