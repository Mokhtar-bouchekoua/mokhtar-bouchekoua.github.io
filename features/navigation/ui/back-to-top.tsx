"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop({ locale }: { locale: "en" | "fr" }) {
  const [visible, setVisible] = useState(false)
  const label = locale === "fr" ? "Retourner en haut de page" : "Back to top"

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480)
    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])

  if (!visible) return null

  return (
    <button
      className="back-to-top"
      type="button"
      aria-label={label}
      title={label}
      onClick={() => window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      })}
    >
      <ArrowUp size={19} aria-hidden="true" />
    </button>
  )
}
