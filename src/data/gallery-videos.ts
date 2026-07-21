export type GalleryCategory = 'bridal' | 'party' | 'makeup'

export const GALLERY_FILTERS = ['all', 'bridal', 'party', 'makeup'] as const
export type GalleryFilter = (typeof GALLERY_FILTERS)[number]

type BaseVideo = {
  category: GalleryCategory
  alt: string
}

export type GalleryVideo = BaseVideo &
  (
    | { type: 'vimeo'; vimeoId: string }
    | { type: 'mp4'; src: string; poster?: string }
  )

/**
 * Gallery reels.
 *
 * Vimeo: use the numeric ID from the URL (e.g. vimeo.com/123456789 -> '123456789').
 *   { type: 'vimeo', vimeoId: '123456789', category: 'bridal', alt: 'Bridal reel' }
 *
 * MP4: drop the file in public/videos/ and reference it by name. An optional
 * poster image (in public/images/) shows the first frame before playback.
 *   { type: 'mp4', src: 'reel1.mp4', poster: 'reel1-poster.jpg', category: 'party', alt: 'Party reel' }
 */
export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    type: 'vimeo',
    vimeoId: '1211840865',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1211840866',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1211840868',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1211840894',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
]
