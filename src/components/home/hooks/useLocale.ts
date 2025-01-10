import { useLanguage } from "@/i18n/languageProvider";

interface LanguageItem {
  key: string;
  label: string;
  isSelected?: boolean;
}

const useLocale = (): LanguageItem[] => {
  const { currentLanguage } = useLanguage();

  const items = [
    { key: "vi", label: "🇻🇳 VI" },
    { key: "en", label: "🇺🇸 EN" },
  ];

  return items.map((item) => ({
    ...item,
    isSelected: item.key === currentLanguage,
  }));
};

export default useLocale;
