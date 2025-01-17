'use client';

import React, { useState, useEffect, useTransition } from "react";
import DropdownButton from "@/components/ui/dropdown-button";
import useLocale from "../hooks/useLocale";
import { usePathname, useRouter } from "next/navigation";

interface LocaleSwitcherProps {
  onLanguageChangeStart: () => void;
  onLanguageChangeEnd: () => void;
}

export default function LocaleSwitcher({ onLanguageChangeStart, onLanguageChangeEnd }: LocaleSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const [currentLanguage, setCurrentLanguage] = useState("vi");
  const pathname = usePathname();
  const router = useRouter();
  const rawItems = useLocale();

  useEffect(() => {
    const languageFromPath = pathname.split("/")[1] || "vi"; 
    setCurrentLanguage(languageFromPath);
  }, [pathname]);

  const items = rawItems.map((item) => ({
    ...item,
    isSelected: item.key === currentLanguage,
  }));

  const handleLanguageChange = (value: string) => {
    startTransition(() => {
      if (value !== currentLanguage) {
        onLanguageChangeStart();
        setCurrentLanguage(value);

        setTimeout(() => {
          router.replace(`/${value}`);
          onLanguageChangeEnd(); 
        }, 500);
      }
    });
  };

  return (
    <div className="h-full flex justify-end items-center">
      <DropdownButton
        title="Change Language"
        items={items}
        onChange={handleLanguageChange}
      />
    </div>
  );
}