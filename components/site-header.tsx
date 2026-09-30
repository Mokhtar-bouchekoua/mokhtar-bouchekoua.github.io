"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { LocaleSwitcher } from "@/features/navigation/ui/locale-switcher"

const navigation = [
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/resume", key: "resume" },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const menuRef = useRef<HTMLDetailsElement>(null)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const locale = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en"
  const localPath = locale === "fr" ? (pathname.slice(3) || "/") : pathname
  const copy = locale === "fr"
    ? { projects: "Projets", about: "À propos", resume: "CV", contact: "Contact", main: "Navigation principale", mobile: "Navigation mobile", toggle: "Ouvrir ou fermer le menu", language: "Langue", themeLight: "Activer le mode clair", themeDark: "Activer le mode sombre" }
    : { projects: "Projects", about: "About", resume: "Resume", contact: "Contact", main: "Main navigation", mobile: "Mobile navigation", toggle: "Toggle navigation", language: "Language", themeLight: "Switch to light mode", themeDark: "Switch to dark mode" }

  useEffect(() => {
    setMounted(true)
    if (menuRef.current) menuRef.current.open = false
  }, [pathname])

  const localizedHref = (href: string) => locale === "fr" ? `/fr${href === "/" ? "" : href}` : href
  const isActive = (href: string) => localPath === href || (href === "/projects" && localPath.startsWith("/projects/"))
  const chooseLocale = (nextLocale: "en" | "fr") => {
    const nextPath = nextLocale === "fr" ? `/fr${localPath === "/" ? "" : localPath}` : localPath
    router.push(nextPath)
  }
  const themeIsDark = mounted && resolvedTheme === "dark"
  const toggleTheme = () => setTheme(themeIsDark ? "light" : "dark")

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={localizedHref("/")} className="brand" aria-label="Mokhtar Bouchekoua, home">
          <Image src="/mokhtar-bouchekoua.jpg" alt="" width={38} height={38} className="brand-photo" />
          <span>Mokhtar <strong>Bouchekoua</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label={copy.main}>
          {navigation.map(({ href, key }) => <Link key={href} href={localizedHref(href)} aria-current={isActive(href) ? "page" : undefined}>{copy[key]}</Link>)}
        </nav>
        <div className="header-tools">
          <LocaleSwitcher locale={locale} label={copy.language} onChange={chooseLocale} />
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={themeIsDark ? copy.themeLight : copy.themeDark} title={themeIsDark ? copy.themeLight : copy.themeDark}>
            {themeIsDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
          <Link className="header-contact" href={localizedHref("/contact")} aria-current={localPath === "/contact" ? "page" : undefined}>
            {copy.contact} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <details className="mobile-nav" ref={menuRef}>
          <summary aria-label={copy.toggle}><Menu className="menu-icon" size={22} aria-hidden="true" /><X className="close-icon" size={22} aria-hidden="true" /></summary>
          <nav aria-label={copy.mobile}>
            {navigation.map(({ href, key }) => <Link key={href} href={localizedHref(href)} aria-current={isActive(href) ? "page" : undefined}>{copy[key]}</Link>)}
            <Link href={localizedHref("/contact")} aria-current={localPath === "/contact" ? "page" : undefined}>{copy.contact}</Link>
            <div className="mobile-menu-tools">
              <LocaleSwitcher locale={locale} label={copy.language} onChange={chooseLocale} showLabel />
              <button className="theme-menu-toggle" type="button" onClick={toggleTheme}>{themeIsDark ? copy.themeLight : copy.themeDark}</button>
            </div>
          </nav>
        </details>
      </div>
    </header>
  )
}
