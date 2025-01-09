'use client';

import React, { useEffect, useState } from 'react';
import ParticlesBackground from "@/components/background/pariticlesBackground";
import Body from "@/components/home/body";
import { ConfigProvider } from "antd/lib";
import Flex from "antd/lib/flex";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then(({ locale }) => {
      setLocale(locale);
    });
  }, [params]);

  const [localeLoaded, setLocaleLoaded] = useState(false);

  useEffect(() => {
    setLocaleLoaded(true);
  }, []);

  if (!localeLoaded) {
    return null;
  }

  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: locale === 'en' ? 'Concert One' : 'M Plus Rounded 1C'
      }
    }}>
      <ParticlesBackground />
      <Flex className="h-full relative flex justify-center items-center">
        <Body />
      </Flex>
    </ConfigProvider>
  );
}