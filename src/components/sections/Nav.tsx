"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_ITEMS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/areas' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
] as const

type NavProps = {
  overlayHero?: boolean
}

export default function Nav({ overlayHero = false }: NavProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(!overlayHero)

  useEffect(() => {
    if (!overlayHero) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlayHero])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const close = () => setOpen(false)
    document.addEventListener('click', close, { once: true })
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('click', close)
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  const solid = !overlayHero || scrolled || open
  const navClass = [
    solid ? 'scrolled' : 'nav-over-hero',
    open ? 'is-menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav id="main-nav" className={navClass} role="navigation" aria-label="Main navigation">
      <a href="/" className="nav-wordmark" aria-label="Raindrops Beauty Salon — home">
        <Image
          src="/images/nav-wordmark.png"
          alt="Raindrops Beauty Salon"
          width={870}
          height={256}
          priority
          className="nav-wordmark-img"
        />
      </a>

      <ul className="nav-links">
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      <a href="/#contact" className="nav-book-cta">Book Now</a>

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
            <li key={item.href}>
              <a href={item.href} onClick={handleLinkClick}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a href="/#contact" className="btn-gold nav-mobile-cta" onClick={handleLinkClick}>
          Book Now
        </a>
      </div>
    </nav>
  )
}
