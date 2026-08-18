'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { HAIR_TRANSFORMATIONS, type HairTransformation } from '@/data/hair-transformations'

/** Pointer travel past which a drag should not be treated as a card tap. */
const DRAG_SLOP_PX = 6

function Lightbox({
  items,
  index,
  onClose,
  onStep,
}: {
  items: HairTransformation[]
  index: number
  onClose: () => void
  onStep: (dir: 1 | -1) => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = items[index]

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onStep(1)
      else if (e.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose, onStep])

  return (
    <div
      className="hair-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — enlarged photo`}
      onClick={e => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="hair-lightbox-close"
        aria-label="Close photo"
        onClick={onClose}
      >
        ×
      </button>

      {items.length > 1 && (
        <button
          type="button"
          className="hair-lightbox-nav hair-lightbox-prev"
          aria-label="Previous photo"
          onClick={() => onStep(-1)}
        >
          ‹
        </button>
      )}

      <figure className="hair-lightbox-figure">
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="(max-width: 768px) 92vw, 60vw"
          className="hair-lightbox-img"
        />
        <figcaption className="hair-lightbox-caption">
          <span className="hair-lightbox-title">{item.title}</span>
          <span className="hair-lightbox-service">{item.service}</span>
          {items.length > 1 && (
            <span className="hair-lightbox-count">
              {index + 1} / {items.length}
            </span>
          )}
        </figcaption>
      </figure>

      {items.length > 1 && (
        <button
          type="button"
          className="hair-lightbox-nav hair-lightbox-next"
          aria-label="Next photo"
          onClick={() => onStep(1)}
        >
          ›
        </button>
      )}
    </div>
  )
}

export default function HairTransformations() {
  const trackRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [dragging, setDragging] = useState(false)
  const [active, setActive] = useState<number | null>(null)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

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
  }, [updateArrows])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.hair-rail-card') as HTMLElement | null
    const amount = card ? card.offsetWidth + 20 : 300
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const el = trackRef.current
    if (!el) return
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 }
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!drag.current.active || !el) return
    const dx = e.clientX - drag.current.startX
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx))
    el.scrollLeft = drag.current.startScroll - dx
  }

  const endDrag = () => {
    if (!drag.current.active) return
    drag.current.active = false
    setDragging(false)
  }

  const openAt = (i: number, el: HTMLButtonElement) => {
    if (drag.current.moved > DRAG_SLOP_PX) return
    openerRef.current = el
    setActive(i)
  }

  const step = useCallback((dir: 1 | -1) => {
    setActive(current => {
      if (current === null) return current
      const total = HAIR_TRANSFORMATIONS.length
      return (current + dir + total) % total
    })
  }, [])

  const close = useCallback(() => {
    setActive(null)
    openerRef.current?.focus()
  }, [])

  return (
    <section id="transformations" className="section-dark hair-rail-section">
      <div className="section-inner">
        <span className="eyebrow" data-reveal>Hair Studio</span>
        <h2 className="section-title" data-reveal>
          Hair <em>Transformations</em>
        </h2>
        <div className="gold-divider" />
        <p className="hair-rail-lead" data-reveal>
          A closer look at recent colour, balayage and finishing work from the chair.
        </p>

        <div
          className={`hair-rail-carousel${canPrev ? ' fade-left' : ''}${
            canNext ? ' fade-right' : ''
          }`}
        >
          <div
            ref={trackRef}
            className={`hair-rail-track${dragging ? ' is-dragging' : ''}`}
            role="region"
            aria-label="Hair transformation photos, scroll sideways"
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            {HAIR_TRANSFORMATIONS.map((item, i) => (
              <button
                key={item.src}
                type="button"
                className="hair-rail-card"
                onClick={e => openAt(i, e.currentTarget)}
                aria-label={`View ${item.title} larger`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading={i < 2 ? 'eager' : 'lazy'}
                  sizes="(max-width: 600px) 78vw, (max-width: 900px) 72vw, 356px"
                  className="hair-rail-img"
                />
                <span className="hair-rail-scrim" aria-hidden="true" />
                <span className="hair-rail-caption">
                  <span className="hair-rail-title">{item.title}</span>
                  <span className="hair-rail-service">{item.service}</span>
                </span>
              </button>
            ))}
          </div>

          {(canPrev || canNext) && (
            <>
              <button
                type="button"
                className="hair-rail-nav hair-rail-prev"
                aria-label="Previous photos"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="hair-rail-nav hair-rail-next"
                aria-label="More photos"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          items={HAIR_TRANSFORMATIONS}
          index={active}
          onClose={close}
          onStep={step}
        />
      )}
    </section>
  )
}
