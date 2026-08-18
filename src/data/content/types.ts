export type InlinePart = string | { href: string; label: string }

export type FaqItem = {
  q: string
  a: InlinePart[]
}

export type ContentBlock =
  | { type: 'p'; parts: InlinePart[] }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] }

export type LongformDoc = {
  slug: string
  kind: 'service' | 'area'
  eyebrow: string
  h1: string
  h1Italic?: string
  lede: InlinePart[]
  blocks: ContentBlock[]
  faqs: FaqItem[]
  seoTitle: string
  seoDescription: string
  imageAlts: string[]
  relatedAreaSlugs: string[]
  relatedServiceSlugs: string[]
  areasHeading?: string
  servicesHeading?: string
}
