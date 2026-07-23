'use client'

import { useRef, useState, useEffect } from 'react'
import { MAPS_URL } from '@/lib/contact'

const GOOGLE_REVIEWS_URL = MAPS_URL

const REVIEWS = [
  {
    author: 'Sonia Kaur',
    meta: '4 reviews',
    when: '2 months ago',
    initial: 'S',
    color: '#5B8FA8',
    quote:
      "I know Jass from last 18 years she's is best and professional I come to her for my hair color and other stuff she is best and professional highly recommend",
  },
  {
    author: 'Kim',
    meta: '7 reviews',
    when: 'a month ago',
    initial: 'K',
    color: '#4A9B8C',
    quote:
      'Jas is the best. You can spend hours with her from doing your hair to massage, facial, eyebrows she does it all. I always feel spoilt when I leave.',
  },
  {
    author: 'Chené Tregoning',
    meta: '8 reviews',
    when: 'a month ago',
    initial: 'C',
    color: '#8B6F8F',
    quote:
      'Jas is the best! She is definitely one of the best stylists in Abby! Going to her feels like family! We love Jas!',
  },
  {
    author: "Charese D'Alessandro",
    meta: '6 reviews',
    when: 'a month ago',
    initial: 'C',
    color: '#673AB7',
    quote: 'The absolute best in Abby! No one knows my hair like Jas! Thank you ❤️',
  },
  {
    author: 'Be Good',
    meta: '2 reviews · 1 photo',
    when: '4 months ago',
    initial: 'Be',
    color: '#1B5E4B',
    quote:
      'Jazz and reet are always amazing. I go there for threading and waxing but most recently I went for hair and makeup. She did a magic on my skin. It stayed in place all evening.',
  },
  {
    author: 'Shubh Reet',
    meta: '3 reviews',
    when: '8 months ago',
    initial: 'S',
    color: '#C47A6A',
    quote:
      'The services of this salon is excellent and the atmosphere of this place is calm and more comfortable rather than other places. Jass is very understanding and hard worker.',
  },
  {
    author: 'Mandeep Gill',
    meta: '1 review',
    when: '8 months ago',
    initial: 'M',
    color: '#7B5EA7',
    quote:
      'Excellent service. Jas knows her stuff. I have been going there for years and I am very satisfied with the services they provide.',
  },
]

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.3 0-9.8-3.3-11.3-8H6.2C9.7 37.1 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.7-3.7 4.9l.1.1 6.2 5.2C39.2 36.3 44 31 44 24c0-1.3-.1-2.5-.4-3.5z" />
    </svg>
  )
}

function GoogleGIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function Stars({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="14" height="14">
          <path
            fill="currentColor"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </span>
  )
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.g-review-card') as HTMLElement | null
    const amount = card ? card.offsetWidth + 16 : 300
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="section-dark reviews-section">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Client Reviews</span>
        <h2 className="section-title" data-reveal>
          What Clients <em>Say</em>
        </h2>
        <div className="gold-divider" />

        <div className="g-reviews" data-reveal>
          <div className="g-reviews-summary">
            <div className="g-reviews-excellent">Excellent</div>
            <Stars className="g-reviews-summary-stars" />
            <p className="g-reviews-based">Based on {REVIEWS.length}+ Google reviews</p>
            <GoogleMark className="g-reviews-google" />
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="g-reviews-all"
            >
              See all reviews
            </a>
          </div>

          <div className="g-reviews-carousel">
            <div className="g-reviews-track" ref={trackRef}>
              {REVIEWS.map(review => {
                const isOpen = expanded === review.author
                const long = review.quote.length > 140
                const shown =
                  isOpen || !long ? review.quote : `${review.quote.slice(0, 140).trim()}…`

                return (
                  <article key={review.author} className="g-review-card">
                    <header className="g-review-head">
                      <span
                        className="g-review-avatar"
                        style={{ background: review.color }}
                        aria-hidden="true"
                      >
                        {review.initial}
                      </span>
                      <div className="g-review-who">
                        <div className="g-review-name">{review.author}</div>
                        <div className="g-review-meta">{review.when}</div>
                      </div>
                      <span className="g-review-g" title="Google review">
                        <GoogleGIcon />
                      </span>
                    </header>

                    <div className="g-review-rating">
                      <Stars className="g-review-stars" />
                      <span className="g-review-verified" aria-label="Verified">
                        ✓
                      </span>
                    </div>

                    <p className="g-review-text">{shown}</p>
                    {long && (
                      <button
                        type="button"
                        className="g-review-more"
                        onClick={() =>
                          setExpanded(isOpen ? null : review.author)
                        }
                      >
                        {isOpen ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </article>
                )
              })}
            </div>

            <button
              type="button"
              className="g-reviews-nav g-reviews-prev"
              aria-label="Previous reviews"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="g-reviews-nav g-reviews-next"
              aria-label="Next reviews"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
