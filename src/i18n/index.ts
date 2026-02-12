import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import uz from './locales/uz.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

const STORAGE_KEY = 'talabahub_lang'

const savedLanguage =
  typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null

void i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: savedLanguage || 'uz',
  fallbackLng: 'uz',
  interpolation: { escapeValue: false },
})

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem(STORAGE_KEY, lng)
  })
}

export default i18n
