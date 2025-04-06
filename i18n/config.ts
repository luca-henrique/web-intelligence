import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslation from "./locales/en/translation.json"
import ptTranslation from "./locales/pt/translation.json"
import esTranslation from "./locales/es/translation.json"

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    fallbackLng: "pt",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    // Add language detection based on URL path
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
    },
  })

export default i18n

