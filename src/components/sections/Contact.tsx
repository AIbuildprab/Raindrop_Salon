import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'

export default function Contact() {
  return (
    <section id="contact" className="section-light">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Contact</span>
        <h2 className="section-title" data-reveal>
          Book Your <em>Look</em>
        </h2>
        <div className="gold-divider" />

        <div className="contact-grid">
          <div className="contact-cards" data-stagger>
            <a href={PHONE_TEL} className="contact-card">
              <div className="contact-label">Call or Text</div>
              <div className="contact-value">{PHONE_DISPLAY}</div>
              <div className="contact-note">Call to book your appointment</div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-label">WhatsApp</div>
              <div className="contact-value">Message Jass</div>
              <div className="contact-note">Tap to open WhatsApp</div>
            </a>

            <div className="contact-card">
              <div className="contact-label">Studio</div>
              <div className="contact-value">3526 Thurston Place, Abbotsford, BC</div>
              <div className="contact-note">On-location across the Fraser Valley & Lower Mainland</div>
            </div>

            <div className="contact-card">
              <div className="contact-label">Hours</div>
              <div className="contact-value contact-hours">
                <span>Mon–Fri: 10:00 AM – 7:00 PM</span>
                <span>Sat: 9:00 AM – 6:00 PM</span>
                <span>Sun: By appointment</span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/raindrops_beauty_salon/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-label">Instagram</div>
              <div className="contact-value" style={{ color: 'var(--gold)', fontSize: '1.15rem' }}>
                @raindrops_beauty_salon
              </div>
            </a>
          </div>

          <div data-reveal>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps?q=3526+Thurston+Place,+Abbotsford,+BC+V2T+6Y1&output=embed"
                title="Raindrop Beauty Salon — 3526 Thurston Place, Abbotsford, BC"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
