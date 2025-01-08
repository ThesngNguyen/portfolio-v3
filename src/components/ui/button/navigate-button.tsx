import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd/lib";


interface NavigationButtonProps {
    buttonName: string;
    className: string;
    navigation?: string;
}

export const NavigationButton = ({buttonName, className, navigation}: NavigationButtonProps) => {
    return (
        <Button 
            icon={<ArrowLeftOutlined />} 
            className={className}
            type="link"
            href={navigation}
            target="_blank"
            rel="noopener noreferrer"
        >
        {buttonName}
        </Button>
    )
}