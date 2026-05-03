const baseUrl = import.meta.env.BASE_URL

const optimized = import.meta.glob('../assets/img/*.{png,jpg,jpeg}', {
  eager: true,
  query: {
    w: 1920,
    format: 'webp',
    quality: 78,
  },
  import: 'default',
})

const byFile = Object.create(null)
for (const [path, url] of Object.entries(optimized)) {
  const name = path.split('/').pop()
  byFile[name] = url
}

/**
 * 以 Vite + imagetools 產生帶 hash 的 WebP；若 `src/assets/img` 尚無原圖則回退到 `public/img` 的靜態路徑（與舊站相容）。
 */
export function siteImg(filename) {
  if (byFile[filename]) return byFile[filename]
  return `${baseUrl}img/${filename}`
}
