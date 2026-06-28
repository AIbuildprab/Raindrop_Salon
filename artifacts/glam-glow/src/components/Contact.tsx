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
          <div data-stagger>
            <div className="contact-row">
              <div className="contact-label">Call or Text</div>
              <a href="tel:7788910082" className="contact-value">
                (778) 891-0082
              </a>
            </div>

            <div className="contact-row">
              <div className="contact-label">WhatsApp</div>
              <a
                href="https://wa.me/17788910082"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                Message Kiran
              </a>
              <div className="contact-note">Tap to open WhatsApp</div>
            </div>

            <div className="contact-row">
              <div className="contact-label">Studio</div>
              <span className="contact-value">118a 74 Ave, Delta, BC</span>
              <div className="contact-note">On-location available across the Lower Mainland</div>
            </div>

            <div className="contact-row">
              <div className="contact-label">Instagram</div>
              <a
                href="https://www.instagram.com/glamandglow_bykiran/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
                style={{ color: 'var(--gold)', fontSize: '1.1rem' }}
              >
                @glamandglow_bykiran
              </a>
            </div>
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
