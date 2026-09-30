type Locale = "en" | "fr"

function Flag({ locale }: { locale: Locale }) {
  if (locale === "fr") {
    return <svg className="locale-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="8" height="16" fill="#1b3f8b" /><rect x="8" width="8" height="16" fill="#fff" /><rect x="16" width="8" height="16" fill="#ed2939" /></svg>
  }

  return <svg className="locale-flag" viewBox="0 0 24 16" aria-hidden="true">
    <rect width="24" height="16" fill="#17356e" />
    <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="4" />
    <path d="M0 0 24 16M24 0 0 16" stroke="#c8102e" strokeWidth="1.5" />
    <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="6" />
    <path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="2.5" />
  </svg>
}

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
  const options: { locale: Locale; name: string; shortName: string }[] = [
    { locale: "fr", name: "Français", shortName: "FR" },
    { locale: "en", name: "English", shortName: "EN" },
  ]

  return (
    <div className="locale-switcher" role="group" aria-label={label}>
      {showLabel && <span className="locale-label">{label}</span>}
      {options.map((option) => (
        <button
          key={option.locale}
          type="button"
          className="locale-option"
          aria-label={option.name}
          aria-pressed={locale === option.locale}
          onClick={() => onChange(option.locale)}
        >
          <Flag locale={option.locale} />
          <span>{option.shortName}</span>
        </button>
      ))}
    </div>
  )
}
