import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
export const supportedLangs = {
  ar: "Arabic (العربية)",
  en: "English",
};
i18n
  .use(
    resourcesToBackend((lang, namespace, callback) => {
      import(`./locales/${lang}/${namespace}.json`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: "en",
    fallbackLng: "ar",
    supportedLangs: Object.keys(supportedLangs),
    debug: true,
  });
export default i18n;
