"use client"

import { useEffect, useRef, useState } from "react"

const DURATION = 1200

// Splits "≈22", "99.6%" or "99,6 %" into prefix, number and suffix for the given locale.
function parse(value: string, locale: "en" | "fr") {
  const match = value.match(/^(\D*)([\d.,\s ]+?)(\s?\D*)$/)
  if (!match) return null
  const [, prefix, digits, suffix] = match
  const decimal = locale === "fr" ? "," : "."
  const normalized = digits.replace(/[\s ]/g, "").split(decimal === "," ? "." : ",").join("").replace(decimal, ".")
  const number = Number(normalized)
  if (!Number.isFinite(number)) return null
  const decimals = digits.includes(decimal) ? digits.split(decimal)[1].length : 0
  return { prefix, number, suffix, decimals }
}

// Renders the final value on the server and without JavaScript; counts up once when scrolled into view.
export function CountUp({ value, locale = "en" }: { value: string; locale?: "en" | "fr" }) {
  const ref = useRef<HTMLElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const parts = parse(value, locale)
    const element = ref.current
    if (!parts || !element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    // Already on screen at load: keep the final value rather than flashing back to zero.
    if (element.getBoundingClientRect().top < window.innerHeight) return

    const format = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US", {
      minimumFractionDigits: parts.decimals,
      maximumFractionDigits: parts.decimals,
    })
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        // Finish on the exact source string so the settled text never differs from the HTML.
        setDisplay(progress < 1 ? `${parts.prefix}${format.format(parts.number * eased)}${parts.suffix}` : value)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    observer.observe(element)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value, locale])

  return <strong ref={ref}>{display}</strong>
}
