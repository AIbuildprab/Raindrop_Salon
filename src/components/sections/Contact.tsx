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
              <div className="contact-value">Message Kiran</div>
              <div className="contact-note">Tap to open WhatsApp</div>
            </a>

            <div className="contact-card">
              <div className="contact-label">Studio</div>
              <div className="contact-value">118a 74 Ave, Delta, BC</div>
              <div className="contact-note">On-location across the Lower Mainland</div>
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
              href="https://www.instagram.com/glamandglow_bykiran/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-label">Instagram</div>
              <div className="contact-value" style={{ color: 'var(--gold)', fontSize: '1.15rem' }}>
                @glamandglow_bykiran
              </div>
            </a>
          </div>

          <div data-reveal>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.5!2d-122.89!3d49.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGlam%20%26%20Glow%20by%20Kiran!5e0!3m2!1sen!2sca!4v1"
                title="Glam & Glow by Kiran — 118a 74 Ave, Delta, BC"
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
