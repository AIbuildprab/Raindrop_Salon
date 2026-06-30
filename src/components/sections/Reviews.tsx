"use client"

import { useEffect, useRef } from 'react'

const REVIEWS = [
  {
    author: 'Parm Randhawa',
    quote: 'She pays attention to details and treats you like your family. Great makeup artist and human being. Highly recommend.',
  },
  {
    author: 'Gurpreet Dhaliwal',
    quote: 'My makeup looked so flawless and beautiful — my look turned out so pretty and I got many compliments all day. Credit goes to Kiran.',
  },
  {
    author: 'Harmeet Kaur Sandhar',
    quote: 'My makeup and hair was stunning! Everyone said I looked gorgeous. Kiran was very sweet and listened to what I want.',
  },
  {
    author: 'Rav Bajwa',
    quote: "She listens to the client's needs, understands their unique features, pays close attention to detail and finishes on time.",
  },
]

export default function Reviews() {
  const scoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scoreRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let start = 0
        const end = 5.0
        const duration = 2000
        const startTime = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = (start + (end - start) * eased).toFixed(1)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="reviews" className="section-dark">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Client Reviews</span>
        <h2 className="section-title" data-reveal>
          What Clients <em>Say</em>
        </h2>
        <div className="gold-divider" />

        <div className="reviews-grid" data-stagger>
          {REVIEWS.map(review => (
            <article key={review.author} className="review-card">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="review-quote">{review.quote}</blockquote>
              <cite className="review-author">{review.author}</cite>
            </article>
          ))}
        </div>

        <div className="score-badge" data-reveal>
          <div className="score-number" ref={scoreRef} aria-label="5.0 score">0.0</div>
          <div>
            <div className="score-info-label">Perfect Score</div>
            <div className="score-info-sub">Google Reviews</div>
            <div className="score-stars" aria-hidden="true">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  )
}
