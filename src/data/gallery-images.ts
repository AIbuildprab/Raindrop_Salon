export type GalleryCategory = 'bridal' | 'party' | 'makeup'

export type GalleryImage = {
  src: string
  category: GalleryCategory
  alt: string
}

export const GALLERY_FILTERS = ['all', 'bridal', 'party', 'makeup'] as const
export type GalleryFilter = (typeof GALLERY_FILTERS)[number]

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: 'imgi_17_661741078_18062606732372512_4919463695625852880_n.jpg', category: 'bridal', alt: 'Bridal glam look' },
  { src: 'imgi_18_441491876_17942701499812146_1465765299903773427_n.jpg', category: 'makeup', alt: 'Soft glam makeup' },
  { src: 'imgi_19_471893149_17970209585812146_8704598794490755058_n.jpg', category: 'bridal', alt: 'South Asian bridal makeup' },
  { src: 'imgi_20_734008808_18420432292176458_4019005442892223729_n.jpg', category: 'bridal', alt: 'Bridal hair and makeup' },
  { src: 'imgi_21_724045544_18030569009812146_8370769795332098588_n.jpg', category: 'party', alt: 'Party glam look' },
  { src: 'imgi_26_689103405_18025887464812146_6736156006225462717_n.jpg', category: 'makeup', alt: 'Full face glam makeup' },
  { src: 'imgi_28_689465376_18025887389812146_3053006122656193726_n.jpg', category: 'bridal', alt: 'Bridal eye makeup' },
  { src: 'imgi_29_659292722_18024853823812146_7641816108777390683_n.jpg', category: 'party', alt: 'Celebration glam' },
  { src: 'imgi_30_684104596_18024853808812146_2907934409832102450_n.jpg', category: 'makeup', alt: 'Glowing skin makeup' },
  { src: 'imgi_34_648187797_18017883149812146_636048922285806135_n.jpg', category: 'bridal', alt: 'Wedding day glam' },
  { src: 'imgi_37_641377519_18017860727812146_2485428224532861805_n.jpg', category: 'party', alt: 'Birthday party glam' },
  { src: 'imgi_38_620798544_18013075364812146_3917074809530428309_n.jpg', category: 'makeup', alt: 'Bold glam makeup' },
  { src: 'imgi_40_619519153_18013075313812146_1570838570115719433_n.jpg', category: 'bridal', alt: 'Bridal party look' },
  { src: 'imgi_41_619653137_18013075226812146_5719827746754322418_n.jpg', category: 'party', alt: 'Evening party makeup' },
  { src: 'imgi_42_619247978_18013075172812146_2798500480945892641_n.jpg', category: 'makeup', alt: 'Natural glam makeup' },
  { src: 'imgi_44_619495912_18013075028812146_3464706341605574545_n.jpg', category: 'bridal', alt: 'Reception bridal look' },
  { src: 'imgi_46_610552074_18011358812812146_6682934313732878586_n.jpg', category: 'party', alt: 'Mehndi night glam' },
  { src: 'imgi_48_589370369_846965634487811_6495875668675164686_n.jpg', category: 'makeup', alt: 'Defined eye makeup' },
  { src: 'imgi_49_587711802_18007349819812146_7901055412787737338_n.jpg', category: 'bridal', alt: 'Classic bridal makeup' },
  { src: 'imgi_50_587772067_18007349687812146_7463534711655478514_n.jpg', category: 'party', alt: 'Special event glam' },
  { src: 'imgi_52_591148210_18007349393812146_8340662904749140047_n.jpg', category: 'makeup', alt: 'Editorial glam makeup' },
]
