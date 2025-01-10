'use client';

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface LanguageContextProps {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(pathname.split("/")[1] || "vi");

  useEffect(() => {
    setCurrentLanguage(pathname.split("/")[1] || "vi");
  }, [pathname]);

  const setLanguage = (lang: string) => {
    if (lang !== currentLanguage) {
      router.replace(`/${lang}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
