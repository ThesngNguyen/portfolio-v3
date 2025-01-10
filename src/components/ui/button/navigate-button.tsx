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
                icon={needIcon && (<ArrowLeftOutlined className="text-white text-xs sm:text-sm" />)} 
                className={cn("rounded-md w-24 h-full p-4 md:min-w-40 md:min-h-16", className)}
                type="link"
                href={navigation}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Typography.Text className="flex text-center h-full justify-center text-white text-base300 sm:text-base500">{buttonName}</Typography.Text>
            </Button>
        </Space>
    )
}