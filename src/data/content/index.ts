import type { LongformDoc } from './types'
import { bridalMakeup } from './services/bridal-makeup'
import { laserHairRemoval } from './services/laser-hair-removal'
import { hairAndMakeup } from './services/hair-and-makeup'
import { abbotsford } from './areas/abbotsford'
import { surrey } from './areas/surrey'
import { langley } from './areas/langley'
import { chilliwack } from './areas/chilliwack'
import { mission } from './areas/mission'

const SERVICE_DOCS: Record<string, LongformDoc> = {
  'bridal-makeup': bridalMakeup,
  'laser-hair-removal': laserHairRemoval,
  'hair-and-makeup': hairAndMakeup,
}

const AREA_DOCS: Record<string, LongformDoc> = {
  abbotsford,
  surrey,
  langley,
  chilliwack,
  mission,
}

export function getServiceDoc(slug: string): LongformDoc | undefined {
  return SERVICE_DOCS[slug]
}

export function getAreaDoc(slug: string): LongformDoc | undefined {
  return AREA_DOCS[slug]
}

export function allServiceDocs(): LongformDoc[] {
  return Object.values(SERVICE_DOCS)
}

export function allAreaDocs(): LongformDoc[] {
  return Object.values(AREA_DOCS)
}
