import * as motion from 'motion/react-client'
import { NavigationButton } from './navigate-button'
import { cn } from '@/utils/class-merge';
import { Space } from 'antd';
import { Button, Typography } from 'antd/lib';

interface ButtonEnterAnimationProps {
  buttonName: string;
  className: string;
  navigation?: string;
}

export default function ButtonEnterAnimation({ buttonName, className, navigation }: ButtonEnterAnimationProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{
        duration: 2,
        scale: { type: 'spring', visualDuration: 1, bounce: 0.5 },
      }}
    >
      <Space>
        <Button
          className={cn("custom-button rounded-md w-24 h-full p-4 md:min-w-40 md:min-h-16", className)}
          type="link"
          href={navigation}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography.Text className="flex text-center h-full justify-center text-white text-base300 sm:text-base500">{buttonName}</Typography.Text>
        </Button>
      </Space>
    </motion.button>
  )
}
