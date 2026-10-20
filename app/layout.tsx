import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import { siteUrl } from "@/lib/site-url"
import { ThemeProvider } from "@/components/theme-provider"
import { CloudflareAnalytics } from "@/components/cloudflare-analytics"
import { LocaleAttribute } from "@/components/locale-attribute"
import { links, person } from "@/lib/projects"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mokhtar Bouchekoua — AI & Full Stack Engineer",
    template: "Mokhtar Bouchekoua — AI & Full Stack Engineer | %s",
  },
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

// Self-hosted at build time by next/font: no runtime request to Google, no layout shift.
const sans = Inter({ subsets: ["latin", "latin-ext"], axes: ["opsz"], display: "swap", variable: "--font-sans" })
const serif = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", style: "italic", display: "swap", variable: "--font-serif" })

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.title,
  url: siteUrl,
  image: `${siteUrl}/mokhtar-bouchekoua-portrait.jpg`,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Sfax", addressCountry: "TN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "International Institute of Technology (IIT) Sfax" },
  knowsAbout: ["Artificial intelligence", "Machine learning", "Retrieval-augmented generation", "Time-series forecasting", "Full stack development"],
  sameAs: [links.linkedin, links.github],
}

export const viewport: Viewport = { themeColor: "#070b14", colorScheme: "dark light" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
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
