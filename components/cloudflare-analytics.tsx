import Script from "next/script"

export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN?.trim()
  if (!token) return null

  return (
    <Script
      id="cloudflare-web-analytics"
      strategy="afterInteractive"
      type="module"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  )
}
