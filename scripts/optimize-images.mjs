/**
 * Generates compressed WebP assets for mobile performance.
 * Run: node scripts/optimize-images.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import ffmpegPath from 'ffmpeg-static'
import sharp from 'sharp'

const execFileAsync = promisify(execFile)

const ROOT = path.resolve(import.meta.dirname, '..')
const IMAGES = path.join(ROOT, 'public', 'images')
const POSTERS = path.join(IMAGES, 'gallery-posters')

const VIMEO_IDS = [
  '1212027721', '1212027725', '1212027726', '1212027752', '1212027751',
  '1212027753', '1212027757', '1212027784', '1212027788', '1212027790',
  '1212027793', '1212027816', '1212027831', '1212027832', '1212027834',
  '1212027853', '1212027858', '1212027860', '1212027865', '1212027882',
  '1212027885', '1212027883', '1212027887', '1212027901', '1212027910',
  '1212027723', '1212027695', '1212027704', '1212027708', '1212027693',
  '1212027681', '1212027680', '1212027678', '1212027660',
]

async function optimizeSiteImages() {
  await fs.mkdir(POSTERS, { recursive: true })

  const heroSrc = path.join(IMAGES, 'hero-bg.png')
  await sharp(heroSrc)
    .resize(1400, null, { withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(IMAGES, 'hero-bg.webp'))

  await sharp(heroSrc)
    .resize(768, null, { withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(IMAGES, 'hero-bg-mobile.webp'))

  const navSrc = path.join(IMAGES, 'nav-wordmark.png')
  await sharp(navSrc)
    .resize(480, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(IMAGES, 'nav-wordmark.webp'))

  const logoSrc = path.join(IMAGES, 'raindrop-logo.png')
  await sharp(logoSrc)
    .resize(512, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(IMAGES, 'raindrop-logo-512.webp'))

  await sharp(logoSrc)
    .resize(128, null, { withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(IMAGES, 'raindrop-logo-128.webp'))

  const aboutVideo = path.join(ROOT, 'public', 'videos', 'reception.mp4')
  const aboutPoster = path.join(IMAGES, 'about-reception-poster.webp')
  const aboutPosterTmp = path.join(IMAGES, 'about-reception-poster.tmp.webp')
  try {
    if (!ffmpegPath) throw new Error('ffmpeg binary not found')
    await execFileAsync(ffmpegPath, [
      '-y',
      '-i', aboutVideo,
      '-frames:v', '1',
      '-q:v', '2',
      aboutPosterTmp,
    ])
    await sharp(aboutPosterTmp)
      .resize(720, null, { withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(aboutPoster)
    await fs.unlink(aboutPosterTmp).catch(() => {})
    console.log('About video poster saved.')
  } catch {
    await fs.unlink(aboutPosterTmp).catch(() => {})
    console.warn('Could not extract about video poster — add about-reception-poster.webp manually')
  }

  console.log('Site images optimized.')
}

async function fetchGalleryPosters() {
  await fs.mkdir(POSTERS, { recursive: true })

  for (const id of VIMEO_IDS) {
    const out = path.join(POSTERS, `${id}.webp`)
    try {
      await fs.access(out)
      continue
    } catch {
      /* generate below */
    }

    const res = await fetch(`https://vumbnail.com/${id}.jpg`)
    if (!res.ok) {
      console.warn(`Poster fetch failed for ${id}: ${res.status}`)
      continue
    }

    const buffer = Buffer.from(await res.arrayBuffer())
    await sharp(buffer)
      .resize(480, 480, { fit: 'cover', position: 'center' })
      .webp({ quality: 72 })
      .toFile(out)

    console.log(`Poster saved: ${id}.webp`)
  }

  console.log('Gallery posters ready.')
}

await optimizeSiteImages()
await fetchGalleryPosters()
