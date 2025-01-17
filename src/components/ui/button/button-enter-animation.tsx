import * as motion from 'motion/react-client'
import { NavigationButton } from './navigate-button'
import { cn } from '@/utils/class-merge';
import { Space } from 'antd';
import { Button, MenuProps, Typography } from 'antd/lib';

interface ButtonEnterAnimationProps {
  buttonLabel: string;
  handleClick?: () => void;
  className: string;
}

export default function ButtonEnterAnimation({ buttonLabel, className, handleClick }: ButtonEnterAnimationProps) {
  return (
    <motion.div
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
          className={cn("custom-button rounded-sm w-24 h-full p-4 md:min-w-40 md:min-h-16 md:rounded-md", className)}
          type="link"
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography.Text className="flex text-center h-full justify-center text-white text-sm md:text-base"><span>{buttonLabel}</span></Typography.Text>
        </Button>
      </Space>
    </motion.div>
  )
}
