const LOOKS = [
  {
    title: 'South Asian Bridal',
    copy: 'Rich traditional glam with modern polish for Mehndi, Sangeet, and wedding day.',
    href: '#services',
  },
  {
    title: 'Western Bridal',
    copy: 'Soft, timeless bridal looks that photograph beautifully from ceremony to reception.',
    href: '#gallery',
  },
  {
    title: 'Fusion Bridal',
    copy: 'The perfect blend of cultural tradition and contemporary elegance.',
    href: '#services',
  },
]

export default function BridalSpotlight() {
  return (
    <section id="bridal" className="section-dark bridal-spotlight">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Bridal Spotlight</span>
        <h2 className="section-title" data-reveal>
          Looks for Your <em>Special Day</em>
        </h2>
        <div className="gold-divider" />

        <div className="bridal-grid" data-stagger>
          {LOOKS.map(look => (
            <a key={look.title} href={look.href} className="bridal-card">
              <span className="bridal-card-eyebrow">Bridal</span>
              <h3 className="bridal-card-title">{look.title}</h3>
              <p className="bridal-card-copy">{look.copy}</p>
              <span className="bridal-card-link">Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
