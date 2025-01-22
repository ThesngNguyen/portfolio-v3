'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { t } from '@/utils/languages';
import LocaleSwitcher from './components/locale-switcher';
import { Flex } from 'antd/lib';
import CopyrightFooter from './components/copyright-footer';
import { TypingEffect } from '../../../components/ui/text-animation/typing-effect';
import NavigationButtonRoute from './components/navigation-button-route';

const IntroductionComponent = () => {
  const [isPending, setIsPending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isPending) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isPending]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLanguageChangeStart = () => {
    setIsPending(true);
  };

  const handleLanguageChangeEnd = () => {
    setIsPending(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.5 : 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-4/5 h-4/5 md:h-3/5 bg-transparent rounded-lg shadow-outer shadow-white/20 z-1"
    >
      <Flex justify='end' align='center' className='p-2 w-full'>
        <LocaleSwitcher
          onLanguageChangeStart={handleLanguageChangeStart}
          onLanguageChangeEnd={handleLanguageChangeEnd}
        />
      </Flex>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 md:flex-row">
        <Flex vertical gap={8}>
          <TypingEffect
            text={t("Introduction.introductionName")}
            className='text-3xl md:text-4xl text-center text-white'
          />
          <TypingEffect
            text='SWE @ WhammyTech'
            className='text-xl md:text-2xl text-center text-white'
          />
        </Flex>
      </div>
      <NavigationButtonRoute />
      <CopyrightFooter />
    </motion.div>
  );
};

export default IntroductionComponent;