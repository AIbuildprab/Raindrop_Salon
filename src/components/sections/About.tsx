import AboutPortrait from '@/components/sections/AboutPortrait'

const DETAILS = [
  'On-location across the Fraser Valley & Lower Mainland',
  'Certified esthetician — hair, makeup & skin in one place',
  'Full glam for South Asian weddings, Mehndi & celebrations',
]

export default function About() {
  return (
    <section id="about" className="section-light">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <span className="eyebrow" data-reveal>About</span>
            <h2 className="section-title" data-reveal>
              Meet<br />
              <em>Jass</em>
            </h2>
            <div className="gold-divider" />
            <p className="about-body" data-reveal>
              Jass is the artist behind Raindrop — known for warm, polished bridal looks that feel
              personal. From South Asian weddings to Mehndi nights and every celebration in between,
              she brings artistry and care to every appointment.
            </p>
            <div data-stagger>
              {DETAILS.map(detail => (
                <div key={detail} className="about-detail">
                  <span className="about-detail-icon" aria-hidden="true">✦</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="about-cta" data-reveal>
              Book with Jass
            </a>
          </div>

          <div data-reveal>
            <AboutPortrait />
            <p className="about-media-caption">The studio · Abbotsford</p>
          </div>
        </div>
      </div>
    </section>
  )
}
