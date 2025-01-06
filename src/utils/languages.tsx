'use client'

import rosetta from 'rosetta';
import { createContext, useContext, useState, ReactNode } from 'react';
import EN from '../../messages/en.json';
import VI from '../../messages/vi.json';

const i18n = rosetta({
  en: EN,
  vi: VI,
});

i18n.locale('vi');

const I18nContext = createContext({
  t: i18n.t,
  locale: 'vi',
  setLocale: (locale: string) => {},
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('vi');

  const changeLocale = (newLocale: string) => {
    i18n.locale(newLocale);
    setLocale(newLocale);
  };

  return (
    <I18nContext.Provider value={{ t: i18n.t, locale, setLocale: changeLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

const t = (key: string) => {
  const { t } = i18n;
  return t(key);
};

export default t;