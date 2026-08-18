import ContactActions from '@/components/sections/ContactActions'
import InstagramIcon from '@/components/ui/InstagramIcon'
import {
  ADDRESS_FULL,
  ADDRESS_SHORT,
  BUSINESS_NAME,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  HOURS_SHORT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  MAPS_URL,
  STUDIO_DISPLAY_NAME,
} from '@/lib/contact'

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5V11h3V7h2v6z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.3 6.9.8-5 4.7 1.3 6.8L12 17.3 5.9 20.6 7.2 13.8l-5-4.7 6.9-.8L12 2z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section-light">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Contact</span>
        <h2 className="section-title" data-reveal>
          Beauty Salon Abbotsford — Book <em>Near Me</em>
        </h2>
        <div className="gold-divider" />

        <div className="contact-grid">
          <div className="contact-panel" data-reveal>
            <div className="contact-panel-head">
              <h3 className="contact-studio-name">{STUDIO_DISPLAY_NAME}</h3>
              <a href="/#reviews" className="contact-reviews">
                <span className="contact-reviews-star" aria-hidden="true">
                  <StarIcon />
                </span>
                {GOOGLE_RATING} ({GOOGLE_REVIEW_COUNT}+ Google reviews)
              </a>
            </div>

            <ContactActions />

            <ul className="contact-info">
              <li className="contact-info-row">
                <span className="contact-info-icon" aria-hidden="true">
                  <PinIcon />
                </span>
                <span className="contact-info-body">
                  <span className="contact-info-label">Studio</span>
                  <span className="contact-info-value">{ADDRESS_SHORT}</span>
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  Directions
                  <ArrowIcon />
                </a>
              </li>

              <li className="contact-info-row">
                <span className="contact-info-icon" aria-hidden="true">
                  <ClockIcon />
                </span>
                <span className="contact-info-body">
                  <span className="contact-info-label">Hours</span>
                  <span className="contact-hours-grid">
                    {HOURS_SHORT.map(row => (
                      <span key={row.days} className="contact-hours-item">
                        <span className="contact-hours-days">{row.days}</span>
                        <span className="contact-hours-time">{row.hours}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </li>

              <li className="contact-info-row">
                <span className="contact-info-icon" aria-hidden="true">
                  <InstagramIcon size={16} gradientId="ig-grad-contact" />
                </span>
                <span className="contact-info-body">
                  <span className="contact-info-label">Instagram</span>
                  <span className="contact-info-value contact-info-value-ig">
                    {INSTAGRAM_HANDLE}
                  </span>
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  Follow
                  <ArrowIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-map-col" data-reveal>
            <div className="map-wrap">
              <iframe
                src={MAPS_EMBED_URL}
                title={`${BUSINESS_NAME} — ${ADDRESS_FULL}`}
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
