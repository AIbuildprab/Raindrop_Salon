type Crumb = {
  name: string
  href?: string
}

export default function PageBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="seo-crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={`${item.name}-${index}`}>
              {last || !item.href ? (
                <span aria-current={last ? 'page' : undefined}>{item.name}</span>
              ) : (
                <a href={item.href}>{item.name}</a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
