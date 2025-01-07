import { useTranslations } from 'next-intl';

const useTranslate = (key: string) => {
  const translate = useTranslations();
  return translate(key);
};

export { useTranslate as t };