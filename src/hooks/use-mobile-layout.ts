'use client'

import { useEffect, useState } from 'react'

const MOBILE_QUERY = '(max-width: 900px)'

/** Matches site CSS mobile/tablet breakpoint (900px). */
export function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isMobile
}

export function getInViewThreshold(isMobile: boolean) {
  return isMobile ? 0.15 : 0.35
}

export function getInViewRootMargin(isMobile: boolean) {
  return isMobile ? '160px' : '80px'
}
