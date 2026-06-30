"use client"

import { useState, useRef, MouseEvent } from 'react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contact'

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

function TiltCard({ pkg, index }: { pkg: Package; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2

    const rotateX = ((y - cy) / cy) * -10
    const rotateY = ((x - cx) / cx) * 10

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(184,148,46,0.18) 0%, transparent 65%)`
    glow.style.opacity = '1'
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    glow.style.opacity = '0'
  }

  const isPremium = pkg.badge === 'Premium' || pkg.badge === 'Multi-Event' || pkg.badge === '2 Sessions'

  return (
    <div
      ref={cardRef}
      className={`pkg-card${isPremium ? ' pkg-card--featured' : ''}`}
      style={{ '--card-index': index } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="pkg-card-glow" aria-hidden="true" />

      <div className="pkg-card-top">
        <div className="pkg-card-number" aria-hidden="true">0{index + 1}</div>
        {isPremium && <span className="pkg-card-featured-tag">Popular</span>}
      </div>

      <div className="pkg-name">{pkg.name}</div>

      <div className="pkg-badges">
        <span className="pkg-badge">{pkg.badge}</span>
        <span className="pkg-duration">⏱ {pkg.duration}</span>
      </div>

      <div className="pkg-divider" aria-hidden="true" />

      <div className="pkg-section-label">What&apos;s Included</div>
      <p className="pkg-body-text">{pkg.included}</p>

      <div className="pkg-section-label">Process</div>
      {pkg.steps.map((step, i) => (
        <div key={step.label} className="pkg-step">
          <span className="pkg-step-num" aria-hidden="true">{i + 1}</span>
          <span>{step.label}</span>
        </div>
      ))}

      <a href={PHONE_TEL} className="pkg-cta">
        Inquire to Book <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}

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
                    {service.packages.map((pkg, i) => (
                      <TiltCard key={pkg.name} pkg={pkg} index={i} />
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
          <a href={PHONE_TEL} className="addon-highlight">
            Call to inquire — {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
