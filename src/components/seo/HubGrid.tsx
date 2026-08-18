type HubItem = {
  href: string
  name: string
  blurb: string
}

export default function HubGrid({
  items,
  cta = 'Read more',
}: {
  items: HubItem[]
  cta?: string
}) {
  return (
    <div className="seo-hub-grid">
      {items.map(item => (
        <a key={item.href} href={item.href} className="seo-hub-card">
          <h2>{item.name}</h2>
          <p>{item.blurb}</p>
          <span className="seo-hub-cta">{cta}</span>
        </a>
      ))}
    </div>
  )
}
