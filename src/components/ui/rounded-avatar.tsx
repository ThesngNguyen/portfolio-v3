'use client';

import { Avatar, Space } from "antd/lib";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

interface RoundedAvatarProps {
    avatarUrl: string;
}

const RoundedAvatar = ({ avatarUrl }: RoundedAvatarProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Space ref={ref}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 6 }}
                className="bg-transparent p-2"
            >
                <Avatar
                    src={avatarUrl}
                    shape="circle"
                    size={{ xs: 75, sm: 100, md: 135, lg: 140, xl: 140, xxl: 140 }}
                    draggable
                />
            </motion.div>
        </Space>
    )
}

export default RoundedAvatar;