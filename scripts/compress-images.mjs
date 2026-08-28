/**
 * Compress JPEGs in public/images for web delivery.
 * Hero/sector photos: max 1400px wide, q78. Page banners: max 1920px, q80.
 */
import fs from "fs"
import path from "path"
import sharp from "sharp"

const IMAGES_DIR = path.join(process.cwd(), "public", "images")

const PRESETS = {
  hero: { maxWidth: 1400, quality: 78 },
  banner: { maxWidth: 1920, quality: 80 },
}

function presetFor(filename) {
  return filename.startsWith("hero-") ? PRESETS.hero : PRESETS.banner
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`
}

const files = fs.readdirSync(IMAGES_DIR).filter((f) => /\.jpe?g$/i.test(f))

if (files.length === 0) {
  console.log("No JPEG files found in public/images")
  process.exit(0)
}

let totalBefore = 0
let totalAfter = 0

for (const file of files.sort()) {
  const filePath = path.join(IMAGES_DIR, file)
  const before = fs.statSync(filePath).size
  const { maxWidth, quality } = presetFor(file)

  const buffer = await sharp(filePath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer()

  const tmpPath = `${filePath}.tmp`
  fs.writeFileSync(tmpPath, buffer)
  fs.renameSync(tmpPath, filePath)

  totalBefore += before
  totalAfter += buffer.length
  const meta = await sharp(buffer).metadata()
  const saved = Math.round((1 - buffer.length / before) * 100)

  console.log(
    `${file.padEnd(34)} ${String(meta.width + "x" + meta.height).padStart(10)}  ${formatKb(before).padStart(8)} → ${formatKb(buffer.length).padStart(8)}  (-${saved}%)`,
  )
}

console.log("—".repeat(60))
console.log(
  `Total: ${formatKb(totalBefore)} → ${formatKb(totalAfter)} (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
)
