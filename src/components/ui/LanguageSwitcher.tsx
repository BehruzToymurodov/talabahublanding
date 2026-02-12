import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ]

  return (
    <div className="flex items-center gap-1 rounded-full border border-[rgba(var(--border),0.5)] bg-[rgba(var(--surface),0.55)] p-1 text-xs font-semibold text-[rgb(var(--muted))] backdrop-blur">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`rounded-full px-3 py-1 transition ${
            i18n.language === lang.code
              ? 'bg-[linear-gradient(120deg,rgba(var(--primary),0.85),rgba(var(--accent),0.8))] text-slate-900 shadow-[0_8px_20px_rgba(56,189,248,0.28)] ring-1 ring-[rgba(var(--primary),0.45)] dark:text-white'
              : 'hover:text-[rgb(var(--text))]'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
