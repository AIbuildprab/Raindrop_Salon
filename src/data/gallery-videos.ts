export type GalleryCategory = 'bridal' | 'party' | 'makeup'

export const GALLERY_FILTERS = ['all', 'bridal', 'party', 'makeup'] as const
export type GalleryFilter = (typeof GALLERY_FILTERS)[number]

type BaseVideo = {
  category: GalleryCategory
  alt: string
  /**
   * Vertical crop focus for square thumbnails (CSS %).
   * Lower values frame hair / top of head; higher values frame face / shoulders.
   * Defaults to 24% when omitted.
   */
  focusY?: number
}

export type GalleryVideo = BaseVideo &
  (
    | { type: 'vimeo'; vimeoId: string; poster?: string }
    | { type: 'mp4'; src: string; poster?: string }
  )

/**
 * Gallery reels.
 *
 * Vimeo: use the numeric ID from the URL (e.g. vimeo.com/123456789 -> '123456789').
 *   { type: 'vimeo', vimeoId: '123456789', poster: 'https://i.vimeocdn.com/video/...-d_640', category: 'bridal', alt: 'Bridal reel' }
 *
 * MP4: drop the file in public/videos/ and reference it by name. An optional
 * poster image (in public/images/) shows the first frame before playback.
 *   { type: 'mp4', src: 'reel1.mp4', poster: 'reel1-poster.jpg', category: 'party', alt: 'Party reel' }
 */
export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    type: 'vimeo',
    vimeoId: '1212027721',
    poster: 'https://i.vimeocdn.com/video/2182341018-8e6115ad45310570ee609c9f2357c13fb3f2dd08c72a900518a1869cb5e3f8e0-d_640',
    focusY: 14,
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027725',
    poster: 'https://i.vimeocdn.com/video/2182341004-c2f94c5c5090d41ad429ff21346b2c928d8759319d6fe6c48df599b0e9444139-d_640',
    focusY: 16,
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027726',
    poster: 'https://i.vimeocdn.com/video/2182341010-742c467dad20e5cc1d5552efe84b2eb3360efae4cb5f8af2cc06af14c8a8a6c7-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027752',
    poster: 'https://i.vimeocdn.com/video/2182341031-37f45f025e392dddb57427defe2276cd7d7589d25beeb591cf29d25db7039315-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027751',
    poster: 'https://i.vimeocdn.com/video/2182341035-2275fa314eb05f5978f6a326209c10133586f4236fe53ec1b93c06e5004412cb-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027753',
    poster: 'https://i.vimeocdn.com/video/2182341060-cf1624c9da99731d9ad0830dc6b2016eb8d2d4cfbcf8ff8229705b0e2e5728bd-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027757',
    poster: 'https://i.vimeocdn.com/video/2182341026-9bac037738b2c5a7c51306ecb238b8dcf1ef3e35c3b07f013f97927d6942282d-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027784',
    poster: 'https://i.vimeocdn.com/video/2182341081-ec27196916a189f084eed1e6e4807dad999f6e25f70dd320f41cad11ecf4352c-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027788',
    poster: 'https://i.vimeocdn.com/video/2182341052-f998e783bdf4d20687f9c277baffc7eba13ff724af493f5f9a36bc5e7812116a-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027790',
    poster: 'https://i.vimeocdn.com/video/2182341064-5518fd72a4172b8da9e35e27b66309a0dad9f5a2fc9a73ed5cd06f6310b66fd2-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027793',
    poster: 'https://i.vimeocdn.com/video/2182341071-76faf96a81aaa953c43ee4cea85a82c0e9d98d989fca2e5380a0249908853c60-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027816',
    poster: 'https://i.vimeocdn.com/video/2182341107-4316a639760cc1459346ed8d56b165180dfd5568cb4b2ce133f5b8a97a70147c-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027831',
    poster: 'https://i.vimeocdn.com/video/2182341098-ed13d3fe4440e995bca3f1b8cc1a5c164a22644eb06fab453887170c7dea545f-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027832',
    poster: 'https://i.vimeocdn.com/video/2182341092-684c893ef243ffafba30768c1e3f9abcdf5f1e1a021f1ed1976737bcd1879f15-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027834',
    poster: 'https://i.vimeocdn.com/video/2182341113-0fa52c18ed0aa15f69cd4c57616a9724f7fc30834b31c574adeab6cd06bfcf5c-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027853',
    poster: 'https://i.vimeocdn.com/video/2182341137-b9fcc39efd922f299b1fc94c96357b8e7c3f6caed0efe8c80493e8bfc559009e-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027858',
    poster: 'https://i.vimeocdn.com/video/2182341122-49d06a6a846dc0e9c431937aaed4752623b674136c109c3707875895949091ef-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027860',
    poster: 'https://i.vimeocdn.com/video/2182341130-3988f84140910494b6471e55c05d0e48ad0ca9c08eb32d605bb8e2495a8212d1-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027865',
    poster: 'https://i.vimeocdn.com/video/2182341134-cb4b90f82bc775a2ca5cfe5ab3dbdc63c6b9ff7ff98a4a16f0545d33ab517edb-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027882',
    poster: 'https://i.vimeocdn.com/video/2182341181-1d418d860890cdeebf51b979c1889be71bef851408fa20aec618d024fbd57509-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027885',
    poster: 'https://i.vimeocdn.com/video/2182341173-3e44cb7bfe9cfb476bb5b1c2316483d21fab17fefea64f5b337e4966771ea494-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027883',
    poster: 'https://i.vimeocdn.com/video/2182341191-e39624fc17e8e9de7fc2185505cb0c1f9f887be751f70ebb47dab134ef6a11e3-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027887',
    poster: 'https://i.vimeocdn.com/video/2182341198-7d1a46b91d5ac56041e41066c092a8230d8dbda562bbbfd75ea84a57801afc0e-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027901',
    poster: 'https://i.vimeocdn.com/video/2182341202-e4b13ed9e40baf76c00252c0938d6630792ab07e4c68f26cdc891d89bf782c8c-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027910',
    poster: 'https://i.vimeocdn.com/video/2182341207-c7881da5a5033b1f85d5a98bd27741383eb9446ea6be3357e11fddb95ab4487e-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027723',
    poster: 'https://i.vimeocdn.com/video/2182341000-330ea63dba1ecfe2184feda4f242c47e3c58e9653af06a36b6370729afd66b6d-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027695',
    poster: 'https://i.vimeocdn.com/video/2182340985-dab42d76421f70697a895d43f89babef9005aad3143b4620f16e3ab1073a409e-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027704',
    poster: 'https://i.vimeocdn.com/video/2182340999-11a4523ef2d8de6bc86cc700e5b7e2dc26dc32a71b951a85e0b0d2dec2d63c04-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027708',
    poster: 'https://i.vimeocdn.com/video/2182340976-8d398e291126b9e93e04670e89564ef8f55198b2e7e959aba2b31566c6436d47-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027693',
    poster: 'https://i.vimeocdn.com/video/2182340996-c4e7bb5bb1994a10802aeb9e4fd139efc6cea1c1ac6f3b779866976d5dab9546-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027681',
    poster: 'https://i.vimeocdn.com/video/2182340966-43edcb39e1629e0eb7d3fb336e9627cc9dd638b74156e0776960ba02169f73e3-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027680',
    poster: 'https://i.vimeocdn.com/video/2182340958-8ff5acd0001e33f34080f747688d5911c70c4724b1903fa077e4fd37767ae3a4-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027678',
    poster: 'https://i.vimeocdn.com/video/2182340951-89d154313865966427cd044346b371d4e0bcbdfadafa7e54192fe96c278179f3-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
  {
    type: 'vimeo',
    vimeoId: '1212027660',
    poster: 'https://i.vimeocdn.com/video/2182340936-f67412e7bb2905a19d55a63bdf947dbc888542ca983a052f77256bcd27046d2c-d_640',
    category: 'makeup',
    alt: 'Raindrop Beauty Salon reel',
  },
]
