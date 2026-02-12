import React, { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'

const STORAGE_KEY = 'talabahub_lang'

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && stored !== i18n.language) {
      i18n.changeLanguage(stored)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
