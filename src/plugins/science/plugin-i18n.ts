import { registerPluginTranslation } from "@/features/plugins-core/adapters/adapter-i18n";

import localeEn from "./locales/en.json";
import localePL from "./locales/pl.json";

registerPluginTranslation({
  en: {
    translation: localeEn,
  },
  pl: {
    translation: localePL,
  },
});
