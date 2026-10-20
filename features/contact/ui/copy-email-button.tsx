"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

const copy = {
  en: { idle: "Copy email", done: "Email copied", failed: "Copy failed — select the address above" },
  fr: { idle: "Copier l’e-mail", done: "E-mail copié", failed: "Échec de la copie — sélectionnez l’adresse ci-dessus" },
}

type Status = "idle" | "done" | "failed"

// mailto: links do nothing on machines without a configured mail client, so offer a copy action next to them.
export function CopyEmailButton({ email, locale = "en" }: { email: string; locale?: "en" | "fr" }) {
  const [status, setStatus] = useState<Status>("idle")
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const t = copy[locale]

  useEffect(() => () => clearTimeout(timer.current), [])

  async function handleCopy() {
    let ok = false
    try {
      await navigator.clipboard.writeText(email)
      ok = true
    } catch {
      ok = legacyCopy(email)
    }
    setStatus(ok ? "done" : "failed")
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus("idle"), 2500)
  }

  return (
    <>
      <button type="button" className="copy-email" onClick={handleCopy} data-status={status}>
        {status === "done" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        <span>{t[status]}</span>
      </button>
      <span className="visually-hidden" role="status">{status === "idle" ? "" : t[status]}</span>
    </>
  )
}

function legacyCopy(text: string) {
  const field = document.createElement("textarea")
  field.value = text
  field.setAttribute("readonly", "")
  field.style.position = "fixed"
  field.style.opacity = "0"
  document.body.appendChild(field)
  field.select()
  try {
    return document.execCommand("copy")
  } catch {
    return false
  } finally {
    field.remove()
  }
}
