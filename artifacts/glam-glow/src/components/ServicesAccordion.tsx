import { useState } from 'react'

interface Step { label: string }
interface Package {
  name: string; badge: string; duration: string; included: string; steps: Step[]
}
interface Service { id: string; name: string; packages: Package[] }

const SERVICES: Service[] = [
  {
    id: 'pre-wedding',
    name: 'Pre-Wedding Events',
    packages: [
      {
        name: 'Single Event Look',
        badge: 'Mehndi / Jaggo',
        duration: '2–3 Hours',
        included: 'Full glam hair & makeup for one occasion',
        steps: [
          { label: 'Consultation & skin prep' },
          { label: 'Hair styling' },
          { label: 'Makeup application' },
          { label: 'Final touches & tips' },
        ],
      },
      {
        name: 'Full Series Package',
        badge: 'Multi-Event',
        duration: 'Customized',
        included: 'Hair & makeup for all pre-wedding events',
        steps: [
          { label: 'Mehndi night' },
          { label: 'Jaggo' },
          { label: 'Engagement' },
          { label: 'Wedding day(s)' },
        ],
      },
    ],
  },
  {
    id: 'parties',
    name: 'Parties & Birthdays',
    packages: [
      {
        name: 'Makeup Only',
        badge: 'Makeup',
        duration: '1.5–2 Hours',
        included: 'Full face makeup application tailored to your event',
        steps: [
          { label: 'Skin prep & prime' },
          { label: 'Foundation & contouring' },
          { label: 'Eye & lip application' },
          { label: 'Setting & finishing' },
        ],
      },
      {
        name: 'Full Glam',
        badge: 'Hair + Makeup',
        duration: '3–4 Hours',
        included: 'Complete hair styling and makeup for the full look',
        steps: [
          { label: 'Consultation' },
          { label: 'Hair styling' },
          { label: 'Full face makeup' },
          { label: 'Final review' },
        ],
      },
      {
        name: 'Glam + Trial',
        badge: '2 Sessions',
        duration: 'Customized',
        included: 'Trial session + event day glam for peace of mind',
        steps: [
          { label: 'Trial run consultation' },
          { label: 'Practice look application' },
          { label: 'Feedback & adjustments' },
          { label: 'Event day glam' },
        ],
      },
    ],
  },
  {
    id: 'bridal',
    name: 'Bridal',
    packages: [
      {
        name: 'Bride Only',
        badge: 'Solo Bride',
        duration: 'Full Day',
        included: 'Dedicated bridal hair & makeup for the bride alone',
        steps: [
          { label: 'Bridal consultation & trial' },
          { label: 'Wedding morning prep' },
          { label: 'Hair & makeup application' },
          { label: 'Touch-up kit & final check' },
        ],
      },
      {
        name: 'Bride + Attendants',
        badge: 'Group',
        duration: 'Customized',
        included: 'Bridal party hair & makeup tailored to the group',
        steps: [
          { label: 'Group sizing & scheduling' },
          { label: 'Bride first, attendants staggered' },
          { label: 'Coordinated looks' },
          { label: 'On-site finishing' },
        ],
      },
      {
        name: 'Complete Bridal Package',
        badge: 'Premium',
        duration: 'Multi-Session',
        included: 'Full bridal experience: trial, wedding day & events',
        steps: [
          { label: 'Consultation & bridal trial' },
          { label: 'Pre-wedding events glam' },
          { label: 'Wedding day hair & makeup' },
          { label: 'Touch-ups & support throughout' },
        ],
      },
    ],
  },
]

export default function ServicesAccordion() {
  const [openId, setOpenId] = useState<string>('pre-wedding')

  return (
    <section id="services" className="section-light">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Services</span>
        <h2 className="section-title" data-reveal>
          What Kiran <em>Offers</em>
        </h2>
        <div className="gold-divider" />

        <div className="services-accordion" role="list">
          {SERVICES.map(service => {
            const isOpen = openId === service.id
            return (
              <div key={service.id} className="service-item" data-open={isOpen ? 'true' : 'false'} role="listitem">
                <button
                  className="service-header-btn"
                  aria-expanded={isOpen}
                  aria-controls={`service-body-${service.id}`}
                  onClick={() => setOpenId(isOpen ? '' : service.id)}
                >
                  <span className="service-name">{service.name}</span>
                  <span className="service-toggle-icon" aria-hidden="true">▼</span>
                </button>

                <div id={`service-body-${service.id}`} className="service-body" role="region">
                  <div className="packages-grid">
                    {service.packages.map(pkg => (
                      <div key={pkg.name} className="pkg-card">
                        <div className="pkg-name">{pkg.name}</div>
                        <div className="pkg-badges">
                          <span className="pkg-badge">{pkg.badge}</span>
                          <span className="pkg-duration">{pkg.duration}</span>
                        </div>
                        <div className="pkg-section-label">What&apos;s Included</div>
                        <p className="pkg-body-text">{pkg.included}</p>
                        <div className="pkg-section-label">Process</div>
                        {pkg.steps.map(step => (
                          <div key={step.label} className="pkg-step">
                            <span className="pkg-step-dot" aria-hidden="true" />
                            <span>{step.label}</span>
                          </div>
                        ))}
                        <a href="tel:7788910082" className="pkg-cta">
                          Inquire to Book →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="addons-strip" data-reveal>
          <span className="addons-label">Add-Ons Available</span>
          <span className="addon-pipe">|</span>
          <span className="addon-item">Bridal &amp; Event Trials</span>
          <span className="addon-pipe">|</span>
          <span className="addon-item">Lash Application</span>
          <span className="addon-pipe">|</span>
          <span className="addon-item">Travel Available</span>
          <span className="addon-pipe">|</span>
          <a href="tel:7788910082" className="addon-highlight">
            Call to inquire — (778) 891-0082
          </a>
        </div>
      </div>
    </section>
  )
}
