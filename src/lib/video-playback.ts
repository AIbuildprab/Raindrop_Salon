export function playWhenReady(video: HTMLVideoElement) {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    void video.play().catch(() => {})
    return () => {}
  }

  const onReady = () => {
    void video.play().catch(() => {})
  }

  video.addEventListener('loadeddata', onReady, { once: true })
  video.addEventListener('canplay', onReady, { once: true })
  video.load()

  return () => {
    video.removeEventListener('loadeddata', onReady)
    video.removeEventListener('canplay', onReady)
  }
}

export function vimeoEmbedSrc(vimeoId: string, mobileLayout: boolean) {
  const base = `https://player.vimeo.com/video/${vimeoId}`
  const common = '&title=0&byline=0&portrait=0&badge=0&dnt=1'

  if (mobileLayout) {
    return `${base}?autoplay=1&muted=1&loop=1&playsinline=1&controls=0&autopause=0${common}`
  }

  return `${base}?background=1&autoplay=1&loop=1&muted=1&autopause=1${common}`
}
