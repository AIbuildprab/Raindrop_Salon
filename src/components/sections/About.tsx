'use client'

import { useEffect, useRef, useState } from 'react'

const DETAILS = [
  'On-location across the Fraser Valley & Lower Mainland',
  'Certified esthetician — hair, makeup & skin in one place',
  'Full glam for South Asian weddings, Mehndi & celebrations',
]

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.25),
      { rootMargin: '120px 0px', threshold: [0, 0.25, 0.5] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (inView) {
      void node.play().catch(() => {})
    } else {
      node.pause()
    }
  }, [inView])

  return (
    <section id="about" className="section-light">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <span className="eyebrow" data-reveal>About</span>
            <h2 className="section-title" data-reveal>
              Meet<br />
              <em>Jass</em>
            </h2>
            <div className="gold-divider" />
            <p className="about-body" data-reveal>
              Jass is the artist behind Raindrop — known for warm, polished bridal looks that feel
              personal. From South Asian weddings to Mehndi nights and every celebration in between,
              she brings artistry and care to every appointment.
            </p>
            <div data-stagger>
              {DETAILS.map(detail => (
                <div key={detail} className="about-detail">
                  <span className="about-detail-icon" aria-hidden="true">✦</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="about-cta" data-reveal>
              Book with Jass
            </a>
          </div>

          <div data-reveal>
            <div className="about-portrait-frame">
              <video
                ref={videoRef}
                className="about-portrait-video"
                src="/videos/reception.mp4"
                poster="/images/about-reception-poster.webp"
                muted
                loop
                playsInline
                preload={inView ? 'auto' : 'metadata'}
                aria-label="Raindrop Beauty Salon studio reception"
              />
            </div>
            <p className="about-media-caption">The studio · Abbotsford</p>
          </div>
        </div>
      </div>
    </section>
  )
}
