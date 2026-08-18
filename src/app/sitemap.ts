import type { MetadataRoute } from 'next'
import { AREAS } from '@/data/areas'
import { SERVICES } from '@/data/services'
import { resolveSiteUrl } from '@/lib/site-url'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = resolveSiteUrl()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/areas`, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map(service => ({
    url: `${base}${service.href}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map(area => ({
    url: `${base}${area.href}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes]
}
