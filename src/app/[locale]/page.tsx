'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ConfigProvider } from "antd/lib";
import Flex from "antd/lib/flex";
import gsap from 'gsap';
import ParticlesBackground from "@/components/background/pariticlesBackground";
import IntroductionComponent from "@/app/[locale]/home/page";
import Preloader from '@/components/preloader/preloader';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    params.then(({ locale }) => {
      setLocale(locale);
    });
  }, [params]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { 
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0 
        },
        { 
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1, 
          duration: 1.5, 
          ease: 'power4.out' 
        }
      );
    }
  };

  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: locale === 'en' ? 'Concert One' : 'M Plus Rounded 1C'
      }
    }}>
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <Flex ref={contentRef} className="h-full justify-center items-center">
          <ParticlesBackground />
          <IntroductionComponent />
        </Flex>
      )}
    </ConfigProvider>
  );
}
