"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false
  }, [pathname])

  const isActive = (href: string) => pathname === href || (href === "/projects" && pathname.startsWith("/projects/"))

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Mokhtar Bouchekoua, home">
          <Image src="/mokhtar-bouchekoua.jpg" alt="" width={38} height={38} className="brand-photo" />
          <span>Mokhtar <strong>Bouchekoua</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>)}
        </nav>
        <Link className="header-contact" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
          Contact <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <details className="mobile-nav" ref={menuRef}>
          <summary aria-label="Toggle navigation"><Menu className="menu-icon" size={22} aria-hidden="true" /><X className="close-icon" size={22} aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(({ href, label }) => <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>)}
            <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
