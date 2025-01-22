import { cn } from "@/utils/class-merge";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Space, Typography } from "antd/lib";


interface NavigationButtonProps {
    buttonName: string;
    className: string;
    navigation?: string;
    needIcon?: boolean;
}

export const NavigationButton = ({buttonName, className, navigation, needIcon}: NavigationButtonProps) => {
    return (
        <Space>
            <Button 
                icon={needIcon && (<ArrowLeftOutlined className="text-white text-sm md:text-xl" />)} 
                className={cn("rounded-md w-24 h-full p-4 md:min-w-40 md:min-h-16", className)}
                type="link"
                href={navigation}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Typography.Text className="flex text-center h-full justify-center text-white text-sm sm:text-sm md:text-base">{buttonName}</Typography.Text>
            </Button>
        </Space>
    )
}