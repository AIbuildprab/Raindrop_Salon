import { AREAS } from '@/data/areas'
import { SERVICES } from '@/data/services'

type RelatedLinksProps = {
  heading: string
  areaSlugs?: string[]
  serviceSlugs?: string[]
}

export default function RelatedLinks({ heading, areaSlugs = [], serviceSlugs = [] }: RelatedLinksProps) {
  const areas = AREAS.filter(area => areaSlugs.includes(area.slug))
  const services = SERVICES.filter(service => serviceSlugs.includes(service.slug))
  const links = [
    ...services.map(service => ({ href: service.href, label: service.name })),
    ...areas.map(area => ({ href: area.href, label: area.name })),
  ]

  if (links.length === 0) return null

  return (
    <section className="seo-related" aria-labelledby="seo-related-heading">
      <h2 id="seo-related-heading" className="seo-related-heading">{heading}</h2>
      <ul className="seo-related-list">
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
