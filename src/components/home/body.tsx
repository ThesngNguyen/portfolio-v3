'use client';

import Flex from 'antd/lib/flex';
import Footer from './footer';
import RoundedAvatar from '../ui/rounded-avatar';

const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center w-4/5 h-3/5 bg-slate-300 bg-opacity-50 backdrop-blur-lg rounded-lg border border-white border-opacity-20 shadow-lg shadow-white/20">
            <Flex vertical gap={16} className="flex items-center justify-center w-full h-full">
                <RoundedAvatar />
                <h1 className="text-4xl text-center">Thang Nguyen Cao</h1>
                <p className="text-2xl font-bold leading-6 text-center">SWE @ WhammyTech</p>
            </Flex>
            <Footer />
        </div>
    );
}

export default Body;