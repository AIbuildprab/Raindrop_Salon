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
    vimeoId: '1212027721',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027725',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027726',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027752',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027751',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027753',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027757',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027784',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027788',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027790',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027793',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027816',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027831',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027832',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027834',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027853',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027858',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027860',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027865',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027882',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027885',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027883',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027887',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027901',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027910',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027723',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027695',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027704',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027708',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027693',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027681',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027680',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027678',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027660',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
]
