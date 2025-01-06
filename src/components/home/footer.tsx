'use client';

import Typography from 'antd/lib/typography';
import Flex from 'antd/lib/flex';

import { GithubOutlined } from '@ant-design/icons';

const Footer = () => {
    const handleIconClick = () => {
        window.open('https://github.com/ThesngNguyen', '_blank');
    };
    
  return (
    <Flex vertical align='center' justify='center' className='my-6'>
        <GithubOutlined onClick={handleIconClick} className='m-2 text-3xl'/>
        <Typography.Text className='text-base text-center text-white'>Built by Thang Nguyen Cao with NextJS 15, React 19, TypeScript, TailwindCSS and AntDesign.</Typography.Text>
        <Typography.Text className='text-base text-center text-white'>Copyright © 2024-2025 All Rights Reserved.</Typography.Text>
    </Flex>
  );
};

export default Footer;