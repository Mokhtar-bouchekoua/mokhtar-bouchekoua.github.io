import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) === "fr" ? "fr" : "en"
  const messages = locale === "fr"
    ? (await import("@/messages/fr.json")).default
    : (await import("@/messages/en.json")).default

  return { locale, messages }
})
