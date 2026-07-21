"use client"

import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'

const FAQS = [
  {
    q: 'How do I book an appointment?',
    a: (
      <>
        Call or text{' '}
        <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> or{' '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp Jass
        </a>
        . Share your date, location, and the look you have in mind.
      </>
    ),
  },
  {
    q: 'Do you travel, or is it studio-only?',
    a: 'Studio is based in Abbotsford, BC. On-location services are available across the Fraser Valley and Lower Mainland. Travel further afield available on request.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For bridal and pre-wedding events, 2–3 months in advance is recommended. For parties and birthdays, a few weeks is usually sufficient.',
  },
  {
    q: 'Do you offer bridal or event trials?',
    a: 'Yes — trials are available as an add-on for both bridal and event bookings. A trial is a great way to lock in your look before the big day.',
  },
  {
    q: "What's included in a full glam package?",
    a: 'Full glam includes both hair styling and makeup. Lash application is available as an add-on. Call to discuss what works best for your event.',
  },
  {
    q: 'How should I prepare for my appointment?',
    a: 'Come with clean, dry hair and a fresh face. Wear a top that is easy to put on and take off. Bring inspiration photos and arrive on time.',
  },
]

export default function FaqAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  function toggle(i: number) {
    setOpenIndexes(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    )
  }

  return (
    <section id="faq" className="section-light">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>FAQ</span>
        <h2 className="section-title" data-reveal>
          Common <em>Questions</em>
        </h2>
        <div className="gold-divider" />

        <div className="faq-list" data-reveal>
          {FAQS.map((faq, i) => {
            const isOpen = openIndexes.includes(i)
            return (
              <div key={i} className="faq-item" data-open={isOpen ? 'true' : 'false'}>
                <button
                  className="faq-q-btn"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle" aria-hidden="true">▼</span>
                </button>
                <div id={`faq-answer-${i}`} className="faq-answer" role="region">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
