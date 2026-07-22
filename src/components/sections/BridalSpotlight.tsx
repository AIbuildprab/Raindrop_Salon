import { whatsappInquireUrl } from '@/lib/contact'

const LOOKS = [
  {
    title: 'South Asian Bridal',
    copy: 'Rich traditional glam with modern polish for Mehndi, Sangeet, and wedding day.',
  },
  {
    title: 'Western Bridal',
    copy: 'Soft, timeless bridal looks that photograph beautifully from ceremony to reception.',
  },
  {
    title: 'Fusion Bridal',
    copy: 'The perfect blend of cultural tradition and contemporary elegance.',
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
        <p className="bridal-lead" data-reveal>
          South Asian, Western, and fusion bridal glam — tailored for your celebration.
        </p>

        <div className="bridal-cards bridal-cards--grid" data-stagger>
          {LOOKS.map(look => (
            <a
              key={look.title}
              href={whatsappInquireUrl(look.title, 'Bridal')}
              target="_blank"
              rel="noopener noreferrer"
              className="bridal-card"
            >
              <h3 className="bridal-card-title">{look.title}</h3>
              <p className="bridal-card-copy">{look.copy}</p>
              <span className="bridal-card-link">Explore on WhatsApp →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
