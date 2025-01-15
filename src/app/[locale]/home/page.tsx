'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pkg from '../../../../package.json';
import { t } from '@/utils/languages';
import LocaleSwitcher from './components/locale-switcher';
import { NavigationButton } from '../../../components/ui/button/navigate-button';
import { Flex, Space, Tooltip, Typography } from 'antd/lib';
import { InfoCircleOutlined } from '@ant-design/icons';
import RoundedAvatar from '../../../components/ui/rounded-avatar';
import CopyrightFooter from './components/copyright-footer';
import useAvatar from './hooks/useAvatar';
import { TypingEffect } from '../../../components/ui/text-animation/typing-effect';
import NavigationButtonRoute from './components/navigation-button-route';
import ParticlesBackground from '@/components/background/pariticlesBackground';

const IntroductionComponent = () => {
  const [isPending, setIsPending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const avatarUrl = useAvatar();

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
      className="flex flex-col items-center justify-center w-4/5 h-4/5 md:h-3/5 bg-slate-50 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-outer shadow-white/20"
    >
      <Flex justify='space-between' align='center' className='p-2 w-full'>
        <Space className='w-1/3 h-full flex justify-start items-center'>
          <NavigationButton
            buttonName='Portfolio v2'
            className=''
            navigation='https://thesngnguyen.github.io/portfolio'
            needIcon={true}
          />
        </Space>
        <Space className='w-1/3 h-full flex justify-center items-center'>
          <Typography.Text className='text-white flex items-center text-base300 md:text-base500'>v{pkg.version}</Typography.Text>
          <Tooltip title={t("Introduction.portfolioLastestUpdate")}>
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
        <LocaleSwitcher
          onLanguageChangeStart={handleLanguageChangeStart}
          onLanguageChangeEnd={handleLanguageChangeEnd}
        />
      </Flex>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 sm:flex sm:flex-row">
        {avatarUrl && <RoundedAvatar avatarUrl={avatarUrl} />}
        <Flex vertical gap={8}>
          <TypingEffect
            text={t("Introduction.introductionName") ?? ""}
            className='text-base700 md:text-3xl lg:text-4xl text-center text-white'
          />
          <TypingEffect
            text='SWE @ WhammyTech'
            className='text-base500 md:text-2xl lg:text-3xl font-bold leading-6 text-center text-white'
          />
        </Flex>
      </div>
      <NavigationButtonRoute />
      <CopyrightFooter />
    </motion.div>
  );
};

export default IntroductionComponent;