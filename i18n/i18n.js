
import i18n from "i18next"

import { initReactI18next } from "react-i18next"

import aEn from "./locales/en/a.json"
import bEn from "./locales/en/b.json"
import aFr from "./locales/fr/a.json"
import bFr from "./locales/fr/b.json"

export const DEFAULT_NAMESPACE = "common" as const

export const SUPPORTED_LOCALES = ["en", "fr"] as const

export const resources = {
  en: {
    a: aEn,
    b: bEn,
  },
  fr: {
    a: aFr,
    b: bFr,
  },
}


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: Object.keys(resources.en),
    defaultNS: DEFAULT_NAMESPACE,
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export { i18n }
