import { AREAS } from '@/data/areas'
import { SERVICES } from '@/data/services'
import type { FaqItem } from '@/data/content/types'
import {
  ADDRESS_COUNTRY,
  ADDRESS_LINE,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  BRAND_NAME,
  GEO,
  INSTAGRAM_URL,
  LEGAL_NAME,
  MAPS_URL,
  OPENING_HOURS,
  PHONE_E164,
  POSTAL_CODE,
} from '@/lib/contact'
import { resolveSiteUrl } from '@/lib/site-url'

function siteUrl(): string {
  return resolveSiteUrl()
}

function faqToPlainText(faq: FaqItem): string {
  return faq.a
    .map(part => (typeof part === 'string' ? part : part.label))
    .join('')
}

export function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE,
    addressLocality: ADDRESS_LOCALITY,
    addressRegion: ADDRESS_REGION,
    postalCode: POSTAL_CODE,
    addressCountry: ADDRESS_COUNTRY,
  }
}

export function geoCoordinates() {
  return {
    '@type': 'GeoCoordinates',
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  }
}

export function openingHoursSpecification() {
  return OPENING_HOURS.map(block => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [...block.dayOfWeek],
    opens: block.opens,
    closes: block.closes,
  }))
}

export function beautySalonId(): string {
  return `${siteUrl()}/#salon`
}

export function beautySalonBase() {
  return {
    '@type': 'BeautySalon',
    '@id': beautySalonId(),
    name: BRAND_NAME,
    legalName: LEGAL_NAME,
    image: `${siteUrl()}/images/raindrop-logo.png`,
    url: siteUrl(),
    telephone: PHONE_E164,
    address: postalAddress(),
    geo: geoCoordinates(),
    hasMap: MAPS_URL,
    sameAs: [INSTAGRAM_URL, MAPS_URL],
    openingHoursSpecification: openingHoursSpecification(),
    priceRange: '$$',
  }
}

export function homeGraph() {
  const origin = siteUrl()
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...beautySalonBase(),
        description:
          'Certified esthetician and hair/makeup artist in Abbotsford, BC. Bridal glam, laser hair removal, and full-service beauty for the Fraser Valley.',
        areaServed: AREAS.map(area => ({
          '@type': 'City',
          name: area.name,
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Core services',
          itemListElement: SERVICES.map(service => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              url: `${origin}${service.href}`,
            },
          })),
        },
      },
    ],
  }
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  const origin = siteUrl()
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path === '/' ? '/' : item.path}`,
    })),
  }
}

export function faqPage(faqs: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqToPlainText(faq),
      },
    })),
  }
}

export function servicePageGraph(opts: {
  name: string
  description: string
  path: string
  faqs: FaqItem[]
  crumbs: { name: string; path: string }[]
}) {
  const origin = siteUrl()
  const url = `${origin}${opts.path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: opts.name,
        description: opts.description,
        url,
        provider: { '@id': beautySalonId() },
        areaServed: AREAS.map(area => ({
          '@type': 'City',
          name: area.name,
        })),
      },
      beautySalonBase(),
      breadcrumbList(opts.crumbs),
      faqPage(opts.faqs),
    ],
  }
}

export function areaPageGraph(opts: {
  city: string
  description: string
  path: string
  faqs: FaqItem[]
  crumbs: { name: string; path: string }[]
}) {
  const origin = siteUrl()
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...beautySalonBase(),
        url: `${origin}${opts.path}`,
        description: opts.description,
        areaServed: {
          '@type': 'City',
          name: opts.city,
        },
      },
      breadcrumbList(opts.crumbs),
      faqPage(opts.faqs),
    ],
  }
}

export function collectionPageGraph(opts: {
  name: string
  description: string
  path: string
  crumbs: { name: string; path: string }[]
}) {
  const origin = siteUrl()
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: opts.name,
        description: opts.description,
        url: `${origin}${opts.path}`,
        isPartOf: { '@id': beautySalonId() },
      },
      beautySalonBase(),
      breadcrumbList(opts.crumbs),
    ],
  }
}
