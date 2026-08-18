export type HairTransformation = {
  src: string
  alt: string
  title: string
  service: string
  width: number
  height: number
}

/** Add a webp to /public/images/gallery-stills and append an entry here. */
export const HAIR_TRANSFORMATIONS: HairTransformation[] = [
  {
    src: '/images/gallery-stills/mahogany-highlights.webp',
    alt: 'Long dark hair with mahogany and cherry red highlights, sleek blow-dry finish',
    title: 'Mahogany Highlights',
    service: 'Colour & Sleek Blow-Dry',
    width: 576,
    height: 1024,
  },
  {
    src: '/images/gallery-stills/caramel-balayage-waves.webp',
    alt: 'Brunette hair with caramel balayage and soft layered waves',
    title: 'Caramel Balayage',
    service: 'Balayage & Soft Waves',
    width: 564,
    height: 700,
  },
]
