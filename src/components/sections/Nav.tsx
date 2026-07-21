"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_ITEMS = ['About', 'Services', 'Gallery', 'Reviews', 'FAQ', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    document.addEventListener('click', close, { once: true })
    return () => document.removeEventListener('click', close)
  }, [open])

  const handleLinkClick = () => setOpen(false)

  const navClass = ['scrolled', open ? 'is-menu-open' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <nav id="main-nav" className={navClass} role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo" aria-label="Raindrop Beauty Salon — home">
        <Image
          src="/images/raindrop-logo.png"
          alt="Raindrop Beauty Salon"
          width={52}
          height={52}
          priority
          className="nav-logo-img"
        />
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
