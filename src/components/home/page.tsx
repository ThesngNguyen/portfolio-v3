'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pkg from '../../../package.json';
import { t } from '@/utils/languages';
import LocaleSwitcher from './components/locale-switcher';
import { NavigationButton } from '../ui/button/navigate-button';
import { Flex, Space, Tooltip, Typography } from 'antd/lib';
import { InfoCircleOutlined } from '@ant-design/icons';
import RoundedAvatar from '../ui/rounded-avatar';
import CopyrightFooter from './components/copyright-footer';
import useAvatar from './hooks/useAvatar';

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
        className="flex flex-col items-center justify-center w-4/5 h-3/5 bg-slate-50 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-outer shadow-white/20"
        >
        <Flex justify='space-between' align='center' className='p-2 w-full m-auto'>
            <Space className='w-1/3 flex justify-start'>
                <NavigationButton 
                buttonName='Portfolio v2' 
                className='p-4 text-white text-base500'
                navigation='https://thesngnguyen.github.io/portfolio'
                />
            </Space>
            <Space className='w-1/3 flex justify-center'>
                <Typography.Text className='text-white text-base500'>v{pkg.version}</Typography.Text>
                <Tooltip title={t("Introduction.portfolioLastestUpdate")}>
                <InfoCircleOutlined />
                </Tooltip>
            </Space>
            <LocaleSwitcher 
                onLanguageChangeStart={handleLanguageChangeStart} 
                onLanguageChangeEnd={handleLanguageChangeEnd} 
            />
        </Flex>
        <Flex gap={16} className="flex items-center justify-center w-full h-full">
            <RoundedAvatar avatarUrl={avatarUrl ?? ""} />
            <Flex vertical gap={8}>
                <Typography.Text className="text-base900 md:text-3xl lg:text-4xl text-center text-white">{t("Introduction.introductionName")}</Typography.Text >
                <Typography.Text className="text-base700 md:text-xl lg:text-2xl font-bold leading-6 text-center text-white">SWE @ WhammyTech</Typography.Text >
            </Flex>
        </Flex>
        <CopyrightFooter />
    </motion.div>
  );
};

export default IntroductionComponent;