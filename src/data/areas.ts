export const AREA_SLUGS = [
  'abbotsford',
  'surrey',
  'langley',
  'chilliwack',
  'mission',
] as const

export type AreaSlug = (typeof AREA_SLUGS)[number]

export type AreaRecord = {
  slug: AreaSlug
  name: string
  href: string
  region: string
  driveTime: string
  blurb: string
  landmarks: string[]
  relatedServiceSlugs: string[]
}

export const AREAS: AreaRecord[] = [
  {
    slug: 'abbotsford',
    name: 'Abbotsford',
    href: '/areas/abbotsford',
    region: 'Fraser Valley, BC',
    driveTime: 'The studio is in Abbotsford — most neighbourhoods are a 10–20 minute drive.',
    blurb:
      'Home studio on Thurston Place. Bridal, laser, facials, and full glam for clients across Abby, Matsqui, and Clayburn.',
    landmarks: ['Highstreet', 'Mill Lake Park', 'Historic Downtown', 'Matsqui', 'Clayburn Village'],
    relatedServiceSlugs: ['bridal-makeup', 'laser-hair-removal', 'hair-and-makeup'],
  },
  {
    slug: 'surrey',
    name: 'Surrey',
    href: '/areas/surrey',
    region: 'Lower Mainland, BC',
    driveTime: 'About 35–50 minutes from the Abbotsford studio, depending on traffic and neighbourhood.',
    blurb:
      'On-location glam and studio visits for Fleetwood, Newton, Cloverdale, and South Surrey weddings and events.',
    landmarks: ['Fleetwood', 'Newton', 'Cloverdale', 'South Surrey', 'Guildford'],
    relatedServiceSlugs: ['bridal-makeup', 'hair-and-makeup', 'laser-hair-removal'],
  },
  {
    slug: 'langley',
    name: 'Langley',
    href: '/areas/langley',
    region: 'Fraser Valley, BC',
    driveTime: 'About 25–40 minutes west of the Abbotsford studio via Highway 1 or Fraser Highway.',
    blurb:
      'Bridal mornings and party glam for Willoughby, Walnut Grove, Fort Langley, and Langley City.',
    landmarks: ['Fort Langley', 'Willoughby', 'Walnut Grove', 'Langley City', 'Brookswood'],
    relatedServiceSlugs: ['bridal-makeup', 'hair-and-makeup', 'laser-hair-removal'],
  },
  {
    slug: 'chilliwack',
    name: 'Chilliwack',
    href: '/areas/chilliwack',
    region: 'Fraser Valley, BC',
    driveTime: 'About 25–40 minutes east of Abbotsford via Highway 1.',
    blurb:
      'Wedding and event glam for Vedder, Promontory, and downtown Chilliwack — studio or on location.',
    landmarks: ['Vedder', 'Promontory', 'Downtown Chilliwack', 'Cultus Lake', 'Sardis'],
    relatedServiceSlugs: ['bridal-makeup', 'hair-and-makeup', 'laser-hair-removal'],
  },
  {
    slug: 'mission',
    name: 'Mission',
    href: '/areas/mission',
    region: 'Fraser Valley, BC',
    driveTime: 'About 20–30 minutes north of the Abbotsford studio via Highway 11.',
    blurb:
      'A short hop over the Mission Bridge for bridal, laser series, and party glam — easy studio visits too.',
    landmarks: ['Mission Bridge', 'Downtown Mission', 'Hatzic', 'Stave Lake', 'Waterfront'],
    relatedServiceSlugs: ['bridal-makeup', 'laser-hair-removal', 'hair-and-makeup'],
  },
]

export function getArea(slug: string): AreaRecord | undefined {
  return AREAS.find(area => area.slug === slug)
}
