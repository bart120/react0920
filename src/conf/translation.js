//init/conf i18next

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './translations/fr.json';
import en from './translations/en.json';

const resources = { en, fr }

i18n.use(initReactI18next).init({
    resources: resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});


export default i18n;