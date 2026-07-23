import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'
import InstagramIcon from '@/components/ui/InstagramIcon'

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
              <div className="contact-label contact-label-emoji">
                <span aria-hidden="true">📞</span>
                Call or Text
              </div>
              <div className="contact-value">{PHONE_DISPLAY}</div>
              <div className="contact-note">Call to book your appointment</div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-label contact-label-emoji">
                <span aria-hidden="true">💬</span>
                WhatsApp
              </div>
              <div className="contact-value">Message Jass</div>
              <div className="contact-note">Tap to open WhatsApp</div>
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-label contact-label-emoji">
                <span aria-hidden="true">📍</span>
                Studio
              </div>
              <div className="contact-value">Raindrops beauty salon ltd</div>
              <div className="contact-note">3526 Thurston Place, Abbotsford, BC</div>
              <div className="contact-note">Tap to open in Maps</div>
            </a>

            <div className="contact-card">
              <div className="contact-label contact-label-emoji">
                <span aria-hidden="true">🕐</span>
                Hours
              </div>
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
              <div className="contact-label contact-label-ig">
                <InstagramIcon size={14} gradientId="ig-grad-contact" />
                Instagram
              </div>
              <div className="contact-value" style={{ color: 'var(--gold)', fontSize: '1.15rem' }}>
                @raindrops_beauty_salon
              </div>
            </a>
          </div>

          <div data-reveal>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.0523136829183!2d-122.34935902360463!3d49.06664027136113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548435ed04d45315%3A0xebf8c6a160ae3ef0!2sRaindrops%20beauty%20salon%20ltd!5e0!3m2!1sen!2suk!4v1784840570558!5m2!1sen!2suk"
                title="Raindrops beauty salon ltd — 3526 Thurston Place, Abbotsford, BC"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
