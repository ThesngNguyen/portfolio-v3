'use client';

import React from 'react';
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

  if (!locale) {
    return null; //TODO - Thang: Add loading animation
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