'use client';

import React, { useState, useTransition } from 'react';
import DropdownButton from '@/components/ui/dropdown-button';
import useLanguageItems from '../hooks/useLocale';
import { useRouter } from 'next/navigation';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const items = useLanguageItems();
  const router = useRouter();

  const handleLanguageChange = (value: string) => {
    setLoading(true);
    startTransition(() => {
      setTimeout(() => {
        router.replace(`/${value}`);
        setLoading(false);
      }, 2000);
    });
  };

  return (
    <div>
      {(loading || isPending) && <></>}
      <DropdownButton
        title="Change Language"
        items={items}
        onChange={handleLanguageChange}
      />
    </div>
  );
}