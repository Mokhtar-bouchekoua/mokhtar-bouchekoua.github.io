import { useId } from "react"

type Locale = "en" | "fr"

export function LocaleSwitcher({
  locale,
  label,
  onChange,
  showLabel = false,
}: {
  locale: Locale
  label: string
  onChange: (locale: Locale) => void
  showLabel?: boolean
}) {
  const labelId = useId()
  const options: { locale: Locale; name: string; shortName: string }[] = [
    { locale: "en", name: "English", shortName: "EN" },
    { locale: "fr", name: "Français", shortName: "FR" },
  ]

  const switcher = (
    <div className="locale-switcher" role="group" aria-label={showLabel ? undefined : label} aria-labelledby={showLabel ? labelId : undefined}>
      {options.map((option) => (
        <button
          key={option.locale}
          type="button"
          className="locale-option"
          aria-label={option.name}
          aria-pressed={locale === option.locale}
          onClick={() => onChange(option.locale)}
        >
          <span lang={option.locale}>{option.shortName}</span>
        </button>
      ))}
    </div>
  )

  if (!showLabel) return switcher
  return <><span className="locale-label" id={labelId}>{label}</span>{switcher}</>
}
