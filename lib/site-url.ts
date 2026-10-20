export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

// Canonical + hreflang links for a route that exists in both locales. `path` is the English path, e.g. "/about/".
export function localeAlternates(path: string, locale: "en" | "fr") {
  const fr = path === "/" ? "/fr/" : `/fr${path}`
  return {
    canonical: locale === "fr" ? fr : path,
    languages: { en: path, fr, "x-default": path },
  }
}
