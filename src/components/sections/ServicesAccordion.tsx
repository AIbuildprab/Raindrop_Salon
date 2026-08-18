"use client"

import { useState, useRef, MouseEvent } from 'react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { PHONE_DISPLAY, PHONE_TEL, whatsappInquireUrl } from '@/lib/contact'

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

interface MenuItem { name: string; price: string }
interface MenuCategory { title: string; note?: string; items: MenuItem[] }

const MENU: MenuCategory[] = [
  {
    title: 'Laser Hair Removal',
    note: 'YAG painless treatment',
    items: [
      { name: 'Full Face', price: '$75' },
      { name: 'Sideburns', price: '$30' },
      { name: 'Uni Brow', price: '$25' },
      { name: 'Upper Lip', price: '$30' },
      { name: 'Under Arms', price: '$40' },
      { name: 'Half Arms', price: '$150' },
      { name: 'Full Arms', price: '$200' },
      { name: 'Half Legs', price: '$150' },
      { name: 'Full Legs', price: '$250' },
      { name: 'Bikini Lines', price: '$100' },
      { name: 'Brazilian', price: '$200' },
      { name: 'Belly', price: '$180' },
      { name: 'Full Back', price: '$200' },
      { name: 'Full Body (back, chest, abdomen)', price: '$450' },
    ],
  },
  {
    title: 'Laser — Gentlemen',
    items: [
      { name: 'Beard', price: '$70' },
      { name: 'Chest', price: '$120' },
      { name: 'Arms', price: '$230' },
      { name: 'Chest + Abdomen', price: '$280' },
      { name: 'Back', price: '$280' },
      { name: 'Legs', price: '$350' },
    ],
  },
  {
    title: 'Hair & Makeup',
    items: [
      { name: 'Makeup', price: '$135+' },
      { name: 'Hair Style', price: '$45+' },
      { name: 'Prandi Style', price: '$50+' },
      { name: 'Full Hair & Makeup', price: '$175' },
      { name: 'Party Makeup', price: '$200' },
      { name: 'Bridal Makeup (Full Package)', price: '$1500' },
    ],
  },
  {
    title: 'Microneedling',
    items: [
      { name: 'Microneedling', price: '$250' },
      { name: 'Dermaplaning Facial', price: '$120' },
    ],
  },
  {
    title: 'Skin Care Facials',
    items: [
      { name: 'Hydra Facial', price: '$165' },
      { name: 'Anti-Ageing Facial', price: '$130' },
      { name: 'Brightening Facial', price: '$140' },
      { name: 'Deep Cleansing', price: '$55' },
      { name: 'Deep Cleansing Facial', price: '$75' },
      { name: 'European Facial', price: '$95' },
      { name: 'Relaxing Facial', price: '$110' },
    ],
  },
  {
    title: 'Oxygeneo Facials',
    items: [
      { name: 'Oxygeneo (3-in-1 Super Facial)', price: '$130' },
      { name: 'Oxygeneo Gold', price: '$150' },
      { name: 'Oxygeneo Anti-Ageing', price: '$180' },
    ],
  },
  {
    title: 'Acne Treatment',
    note: 'Hydrofrequency for acne skin',
    items: [
      { name: 'Acne Treatment', price: '$150' },
    ],
  },
  {
    title: 'Threading',
    items: [
      { name: 'Eyebrow Threading', price: '$5' },
      { name: 'Eyebrow Tint', price: '$15' },
      { name: 'Full Face Threading', price: '$20' },
      { name: 'Upper Lip', price: '$5' },
      { name: 'Chin', price: '$5' },
      { name: 'Forehead', price: '$5' },
    ],
  },
  {
    title: 'Waxing',
    items: [
      { name: 'Eyebrow Waxing', price: '$10' },
      { name: 'Full Face', price: '$20' },
      { name: 'Under Arms', price: '$15' },
      { name: 'Full Arms', price: '$35' },
      { name: 'Full Legs', price: '$40' },
      { name: 'Half Legs', price: '$25' },
      { name: 'Full Arms + Legs (Combo)', price: '$65+' },
      { name: 'Full Stomach', price: '$40' },
      { name: 'Full Back', price: '$40' },
      { name: 'Bikini Lines', price: '$15' },
      { name: 'Brazilian Wax', price: '$55' },
      { name: 'Full Body', price: '$150' },
    ],
  },
  {
    title: 'Hair Color',
    items: [
      { name: 'Roots Touch Up', price: '$50+' },
      { name: 'Full Length Color', price: '$150+' },
      { name: 'Balayage Highlight', price: '$250+' },
      { name: 'Money Pieces', price: '$250+' },
      { name: 'Global Highlight', price: '$300+' },
    ],
  },
  {
    title: 'Hair Treatments',
    items: [
      { name: 'Hair Spa', price: '$75+' },
      { name: 'Deep Conditioning', price: '$120+' },
      { name: 'Keratin Treatment', price: '$250+' },
      { name: 'Hair Botox Treatment', price: '$275+' },
      { name: 'Smoothening Treatment', price: '$300+' },
    ],
  },
  {
    title: 'Hair Cut',
    items: [
      { name: 'Hair Cut', price: '$25+' },
      { name: 'Layer Cut', price: 'Ask' },
      { name: 'Wash, Cut & Style', price: '$65+' },
      { name: 'Wash & Blow Dry', price: 'Ask' },
    ],
  },
  {
    title: 'Massage',
    items: [
      { name: 'Head Massage', price: '$30' },
      { name: 'Hot Oil Head Massage', price: '$35' },
      { name: 'Back Massage', price: '$40' },
      { name: 'Full Body Massage', price: '$120' },
    ],
  },
]

function TiltCard({ pkg, index }: { pkg: Package; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return
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
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(197,160,89,0.18) 0%, transparent 65%)`
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
          Hair &amp; Makeup, Laser Hair Removal &amp; <em>Facials</em>
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

        <div className="menu-header" data-reveal>
          <span className="eyebrow">Price List</span>
          <h3 className="menu-title">Full Service <em>Menu</em></h3>
          <p className="menu-subtitle">
            Laser, facials, microneedling, hair, threading, waxing &amp; more — all under one roof.
          </p>
        </div>

        <div className="menu-grid" data-stagger>
          {MENU.map(category => (
            <div key={category.title} className="menu-cat">
              <div className="menu-cat-head">
                <h4 className="menu-cat-title">{category.title}</h4>
                {category.note && <span className="menu-cat-note">{category.note}</span>}
              </div>
              <ul className="menu-list">
                {category.items.map(item => (
                  <li key={`${category.title}-${item.name}`} className="menu-row">
                    <a
                      href={whatsappInquireUrl(item.name, category.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-wa"
                      aria-label={`WhatsApp to book ${item.name}`}
                      title={`Inquire about ${item.name} on WhatsApp`}
                    >
                      <WhatsAppIcon size={16} />
                      <span className="menu-row-name">{item.name}</span>
                    </a>
                    <span className="menu-row-dots" aria-hidden="true" />
                    <span className="menu-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="menu-disclaimer" data-reveal>
          Prices are a starting guide and may vary by hair length, area, and treatment plan.
          Tap a service name to inquire on WhatsApp, or call{' '}
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> to confirm and book.
        </p>
      </div>
    </section>
  )
}
