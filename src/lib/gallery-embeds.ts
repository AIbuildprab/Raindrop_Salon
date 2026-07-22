const MAX_ACTIVE_EMBEDS = 3

type Listener = () => void
type Candidate = { id: string; ratio: number }

const candidates = new Map<string, number>()
const activeIds = new Set<string>()
const listeners = new Set<Listener>()

function notify() {
  listeners.forEach(fn => fn())
}

function recomputeActiveSlots() {
  const next = new Set(
    [...candidates.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, MAX_ACTIVE_EMBEDS)
      .map(([id]) => id),
  )

  const changed =
    next.size !== activeIds.size || [...next].some(id => !activeIds.has(id))

  if (!changed) return

  activeIds.clear()
  next.forEach(id => activeIds.add(id))
  notify()
}

export function subscribeEmbedSlots(listener: Listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** Register interest in a slot; higher ratio wins when slots are limited. */
export function updateEmbedInterest(id: string, ratio: number) {
  if (ratio <= 0) {
    if (!candidates.delete(id)) return
  } else {
    candidates.set(id, ratio)
  }
  recomputeActiveSlots()
}

export function clearEmbedInterest(id: string) {
  if (!candidates.delete(id)) return
  recomputeActiveSlots()
}

export function hasEmbedSlot(id: string) {
  return activeIds.has(id)
}

export function getActiveEmbedCount() {
  return activeIds.size
}

export function galleryPosterPath(vimeoId: string) {
  return `/images/gallery-posters/${vimeoId}.webp`
}
