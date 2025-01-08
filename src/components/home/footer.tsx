'use client';

import Typography from 'antd/lib/typography';
import Flex from 'antd/lib/flex';

import { GithubOutlined } from '@ant-design/icons';
import { t } from '@/utils/languages';

const Footer = () => {
    const handleIconClick = () => {
        window.open('https://github.com/ThesngNguyen', '_blank');
    };
    
  return (
    <Flex vertical align='center' justify='center' className='my-6'>
        <GithubOutlined onClick={handleIconClick} className='m-2 text-3xl'/>
        <Typography.Text className='text-base500 text-center text-white'>{t("Introduction.introductionFooter")}</Typography.Text>
        <Typography.Text className='text-base500 text-center text-white'>{t("Introduction.introductionCopyright")}</Typography.Text>
    </Flex>
  );
};

export default Footer;