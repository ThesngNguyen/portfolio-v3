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
import Footer from './footer';

const Body = () => {
  const [isPending, setIsPending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const avatarUrl = "data:image/png;base64,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";

  useEffect(() => {
    if (isPending) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Delay to allow animation to complete
    }
  }, [isPending]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Delay to allow initial animation to complete
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
        <Flex vertical gap={16} className="flex items-center justify-center w-full h-full">
            <RoundedAvatar avatarUrl={avatarUrl} />
            <Typography.Text className="text-base900 text-center text-white">{t("Introduction.introductionName")}</Typography.Text >
            <Typography.Text className="text-base700 font-bold leading-6 text-center text-white">SWE @ WhammyTech</Typography.Text >
        </Flex>
        <Footer />
    </motion.div>
  );
};

export default Body;