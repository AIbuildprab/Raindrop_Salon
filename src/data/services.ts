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
      'South Asian, Western, and fusion wedding looks with Jass. Trials, travel, and 18 years in the chair.',
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
      'Face and body laser at the Abbotsford studio, with a gentlemen’s menu and prices posted per area.',
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
      'Hair and makeup for Mehndi, Jaggo, birthdays, and photos. In studio or at your place.',
    primaryKeyword: 'hair and makeup Abbotsford',
    relatedAreaSlugs: ['abbotsford', 'langley', 'surrey', 'chilliwack', 'mission'],
    relatedServiceSlugs: ['bridal-makeup'],
  },
]

export function getService(slug: string): ServiceRecord | undefined {
  return SERVICES.find(service => service.slug === slug)
}
