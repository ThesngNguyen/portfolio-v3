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
            size={150}
            draggable
            className="bg-white p-4"
        >
        </Avatar>
    </Space>
)
}

export default RoundedAvatar;