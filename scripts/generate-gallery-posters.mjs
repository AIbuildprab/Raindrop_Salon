import { execFile } from 'node:child_process'
import { access, mkdir, readFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const VIDEOS_PATH = join(ROOT, 'src', 'data', 'gallery-videos.ts')
const OUT_DIR = join(ROOT, 'public', 'images', 'gallery-posters')
const SEEK_SECONDS = 1
const SCALE_WIDTH = 640
const CONCURRENCY = 3

async function which(name) {
  try {
    const { stdout } = await execFileAsync('where.exe', [name], { windowsHide: true })
    return stdout.trim().split(/\r?\n/).find(Boolean) ?? null
  } catch {
    return null
  }
}

async function resolveBin(name) {
  const fromPath = await which(name)
  const candidates = [
    fromPath,
    join(homedir(), 'scoop', 'shims', `${name}.exe`),
    join(homedir(), 'scoop', 'apps', name, 'current', `${name}.exe`),
  ].filter(Boolean)

  for (const candidate of candidates) {
    try {
      await access(candidate)
      return candidate
    } catch {
      // try next
    }
  }

  throw new Error(
    `Could not find ${name}. Install it (e.g. scoop install ${name}) and retry.`,
  )
}

function parseVimeoIds(source) {
  const ids = [...source.matchAll(/vimeoId:\s*'(\d+)'/g)].map(match => match[1])
  return [...new Set(ids)]
}

async function videoUrl(ytDlp, vimeoId) {
  const { stdout } = await execFileAsync(
    ytDlp,
    [
      '-g',
      '-f',
      'bv*[height<=720]/bv/b',
      '--no-playlist',
      '--no-warnings',
      '--no-check-certificates',
      `https://player.vimeo.com/video/${vimeoId}`,
    ],
    { windowsHide: true, maxBuffer: 2 * 1024 * 1024 },
  )

  const url = stdout.trim().split(/\r?\n/).find(Boolean)
  if (!url) throw new Error(`yt-dlp returned no URL for ${vimeoId}`)
  return url
}

async function extractFrame(ffmpeg, url, outPath) {
  // Fast input seek, then a short output seek so we land near 1s instead of
  // the nearest earlier keyframe (often 0s / first frame).
  const inputSeek = Math.max(0, SEEK_SECONDS - 0.3)
  const outputSeek = SEEK_SECONDS - inputSeek

  await execFileAsync(
    ffmpeg,
    [
      '-y',
      '-ss',
      String(inputSeek),
      '-i',
      url,
      '-ss',
      String(outputSeek),
      '-frames:v',
      '1',
      '-vf',
      `scale=${SCALE_WIDTH}:-2`,
      '-c:v',
      'libwebp',
      '-quality',
      '78',
      outPath,
    ],
    { windowsHide: true, maxBuffer: 4 * 1024 * 1024 },
  )

  await access(outPath)
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length)
  let next = 0

  async function run() {
    while (next < items.length) {
      const index = next++
      results[index] = await worker(items[index], index)
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run))
  return results
}

async function main() {
  const [ffmpeg, ytDlp, source] = await Promise.all([
    resolveBin('ffmpeg'),
    resolveBin('yt-dlp'),
    readFile(VIDEOS_PATH, 'utf8'),
  ])

  const ids = parseVimeoIds(source)
  if (ids.length === 0) throw new Error(`No vimeoId entries found in ${VIDEOS_PATH}`)

  await mkdir(OUT_DIR, { recursive: true })
  console.log(`Extracting ${ids.length} posters at ${SEEK_SECONDS}s → ${OUT_DIR}`)

  const failures = []

  await mapLimit(ids, CONCURRENCY, async (vimeoId, index) => {
    const label = `[${index + 1}/${ids.length}] ${vimeoId}`
    const outPath = join(OUT_DIR, `${vimeoId}.webp`)
    try {
      const url = await videoUrl(ytDlp, vimeoId)
      await extractFrame(ffmpeg, url, outPath)
      console.log(`${label} ok`)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      failures.push({ vimeoId, message })
      console.error(`${label} failed: ${message}`)
    }
  })

  if (failures.length > 0) {
    console.error(`\n${failures.length} poster(s) failed:`)
    for (const failure of failures) {
      console.error(`  ${failure.vimeoId}: ${failure.message}`)
    }
    process.exitCode = 1
    return
  }

  console.log(`\nWrote ${ids.length} posters.`)
}

await main()
