'use client';

import { Avatar, Space } from "antd/lib";

interface RoundedAvatarProps {
    avatarUrl: string;
}

const RoundedAvatar = ({avatarUrl}: RoundedAvatarProps) => {
   
return (
    <Space>
        <Avatar
            src={avatarUrl}
            shape="circle"
            size={{ xs: 75, sm: 100, md: 135, lg: 150, xl: 150, xxl: 150 }}
            draggable
            className="bg-white p-2"
        >
        </Avatar>
    </Space>
)
}

export default RoundedAvatar;