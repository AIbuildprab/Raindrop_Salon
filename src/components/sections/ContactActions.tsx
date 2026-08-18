'use client'

import { useState } from 'react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { PHONE_DISPLAY, PHONE_TEL, whatsappTopicUrl } from '@/lib/contact'

const TOPICS = [
  'Hair',
  'Makeup',
  'Hair & Makeup',
  'Bridal',
  'Laser',
  'Facial',
  'Threading',
  'Other',
] as const

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  )
}

export default function ContactActions() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>('Hair')

  return (
    <div className="contact-actions">
      <label className="contact-topic">
        <span className="contact-topic-label">What can we help with?</span>
        <select
          className="contact-topic-select"
          value={topic}
          onChange={event => setTopic(event.target.value as (typeof TOPICS)[number])}
        >
          {TOPICS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <div className="contact-cta-row">
        <a href={PHONE_TEL} className="contact-cta contact-cta-call">
          <PhoneIcon />
          <span className="contact-cta-text">
            <span className="contact-cta-title">Call now</span>
            <span className="contact-cta-sub">{PHONE_DISPLAY}</span>
          </span>
        </a>
        <a
          href={whatsappTopicUrl(topic)}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-cta contact-cta-wa"
        >
          <WhatsAppIcon size={18} />
          <span className="contact-cta-text">
            <span className="contact-cta-title">WhatsApp</span>
            <span className="contact-cta-sub">Replies within the hour</span>
          </span>
        </a>
      </div>
    </div>
  )
}
