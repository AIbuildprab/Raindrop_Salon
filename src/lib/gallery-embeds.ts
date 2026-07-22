const MAX_ACTIVE_EMBEDS = 3

type Listener = () => void

const activeIds = new Set<string>()
const listeners = new Set<Listener>()

function notify() {
  listeners.forEach(fn => fn())
}

export function subscribeEmbedSlots(listener: Listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function requestEmbedSlot(id: string): boolean {
  if (activeIds.has(id)) return true
  if (activeIds.size >= MAX_ACTIVE_EMBEDS) return false
  activeIds.add(id)
  notify()
  return true
}

export function releaseEmbedSlot(id: string) {
  if (!activeIds.delete(id)) return
  notify()
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
