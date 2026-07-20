"use client"

import { useState, useEffect } from 'react'

const NAV_ITEMS = ['About', 'Services', 'Gallery', 'Reviews', 'FAQ', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    document.addEventListener('click', close, { once: true })
    return () => document.removeEventListener('click', close)
  }, [open])

  const handleLinkClick = () => setOpen(false)

  const navClass = [
    scrolled || open ? 'scrolled' : 'nav-over-hero',
    open ? 'is-menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav id="main-nav" className={navClass} role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo" aria-label="Glam and Glow by Kiran — home">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <polygon points="19,2 36,19 19,36 2,19" stroke="#B8942E" strokeWidth="1.2" fill="none" />
          <polygon points="19,8 30,19 19,30 8,19" stroke="#B8942E" strokeWidth="0.7" strokeOpacity="0.5" fill="none" />
          <text x="19" y="23" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="9" fontStyle="italic" fill="#B8942E">GG</text>
        </svg>
        <span className="nav-wordmark">
          Glam <span className="amp">&amp;</span> Glow
          <span className="byline">by Kiran</span>
        </span>
      </a>

      <ul className="nav-links">
        {NAV_ITEMS.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-book-cta">Book Now</a>
        </li>
      </ul>

      <button
        className={`nav-burger${open ? ' is-open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={e => { e.stopPropagation(); setOpen(v => !v) }}
      >
        <span /><span /><span />
      </button>

      <div className={`nav-mobile-menu${open ? ' is-open' : ''}`} onClick={e => e.stopPropagation()}>
        <ul>
          {NAV_ITEMS.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>{item}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-gold nav-mobile-cta" onClick={handleLinkClick}>
          Book Now
        </a>
      </div>
    </nav>
  )
}
