import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import sp from './sp';
import en from './en';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = { en, sp };

const langauge = { english: 'en', spanish: 'sp' };

const getScreenTranslate = screenName => {
  return I18n.t(screenName);
};

export { langauge, getScreenTranslate };
export default I18n;
