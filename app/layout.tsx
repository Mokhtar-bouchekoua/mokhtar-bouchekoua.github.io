import type { Metadata, Viewport } from "next"
import { siteUrl } from "@/lib/site-url"
import { ThemeProvider } from "@/components/theme-provider"
import { CloudflareAnalytics } from "@/components/cloudflare-analytics"
import { LocaleAttribute } from "@/components/locale-attribute"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mokhtar Bouchekoua — AI & Full Stack Engineer", template: "%s — Mokhtar Bouchekoua" },
  description: "Explore the projects, experience and engineering approach of Mokhtar Bouchekoua, AI & Full Stack Engineer in Sfax, Tunisia.",
  keywords: ["Mokhtar Bouchekoua", "AI engineer", "full stack engineer", "FastAPI", "machine learning"],
  openGraph: {
    title: "Mokhtar Bouchekoua — AI & Full Stack Engineer",
    description: "Applied AI, real-time data and thoughtful software engineering.",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/icon.svg" },
}

export const viewport: Viewport = { themeColor: "#f6f7f5", colorScheme: "light dark" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LocaleAttribute />
          <a href="#main-content" className="skip-link">Skip to content</a>
          {children}
        </ThemeProvider>
        <CloudflareAnalytics />
      </body>
    </html>
  )
}
