export const SERVICE_SLUGS = [
  'bridal-makeup',
  'laser-hair-removal',
  'hair-and-makeup',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

export type ServiceRecord = {
  slug: ServiceSlug
  name: string
  shortName: string
  href: string
  blurb: string
  primaryKeyword: string
  relatedAreaSlugs: string[]
  relatedServiceSlugs: ServiceSlug[]
}

export const SERVICES: ServiceRecord[] = [
  {
    slug: 'bridal-makeup',
    name: 'Bridal Makeup',
    shortName: 'Bridal',
    href: '/services/bridal-makeup',
    blurb:
      'South Asian, Western, and fusion bridal glam with trials, on-location travel, and 18+ years of wedding experience.',
    primaryKeyword: 'bridal makeup Abbotsford',
    relatedAreaSlugs: ['abbotsford', 'surrey', 'langley', 'chilliwack', 'mission'],
    relatedServiceSlugs: ['hair-and-makeup'],
  },
  {
    slug: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    shortName: 'Laser',
    href: '/services/laser-hair-removal',
    blurb:
      'Studio laser for face and body in Abbotsford, with a gentlemen’s menu and clear per-area pricing.',
    primaryKeyword: 'laser hair removal Abbotsford',
    relatedAreaSlugs: ['abbotsford', 'mission', 'chilliwack', 'langley', 'surrey'],
    relatedServiceSlugs: ['hair-and-makeup'],
  },
  {
    slug: 'hair-and-makeup',
    name: 'Hair & Makeup',
    shortName: 'Hair & Makeup',
    href: '/services/hair-and-makeup',
    blurb:
      'Full glam for parties, Mehndi nights, Jaggo, birthdays, and photos — in studio or on location across the Fraser Valley.',
    primaryKeyword: 'hair and makeup Abbotsford',
    relatedAreaSlugs: ['abbotsford', 'langley', 'surrey', 'chilliwack', 'mission'],
    relatedServiceSlugs: ['bridal-makeup'],
  },
]

export function getService(slug: string): ServiceRecord | undefined {
  return SERVICES.find(service => service.slug === slug)
}
