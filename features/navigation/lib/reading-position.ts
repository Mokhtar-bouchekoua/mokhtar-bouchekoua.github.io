// Keeps the reader on the same section when switching language. EN and FR pages share the same
// section structure, so "section index + progress through it" maps across locales even though
// the translated text has a different length.

const KEY = "locale-switch-position"

type Position = { path: string; index: number; progress: number }

const normalize = (path: string) => path.replace(/\/+$/, "") || "/"

function headerOffset() {
  return document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0
}

function sections() {
  return Array.from(document.getElementById("main-content")?.children ?? []) as HTMLElement[]
}

export function saveReadingPosition(nextPath: string) {
  const top = headerOffset()
  const all = sections()
  let index = 0
  all.forEach((section, i) => { if (section.getBoundingClientRect().top <= top + 1) index = i })
  const rect = all[index]?.getBoundingClientRect()
  const progress = rect && rect.height ? Math.min(Math.max((top - rect.top) / rect.height, 0), 1) : 0
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ path: normalize(nextPath), index, progress } satisfies Position))
  } catch {
    // Storage unavailable (private mode): the page simply keeps the browser's scroll position.
  }
}

export function restoreReadingPosition(pathname: string) {
  let saved: Position | null = null
  try {
    saved = JSON.parse(sessionStorage.getItem(KEY) ?? "null")
    sessionStorage.removeItem(KEY)
  } catch {
    return
  }
  if (!saved || saved.path !== normalize(pathname)) return
  const section = sections()[saved.index]
  if (!section) return
  const rect = section.getBoundingClientRect()
  window.scrollTo({ top: window.scrollY + rect.top - headerOffset() + saved.progress * rect.height, behavior: "instant" })
}
