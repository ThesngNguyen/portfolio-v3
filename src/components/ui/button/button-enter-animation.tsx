import * as motion from 'motion/react-client'
import { NavigationButton } from './navigate-button'
import { cn } from '@/utils/class-merge';

interface ButtonEnterAnimationProps {
  buttonName: string;
  className: string;
  navigation?: string;
  needIcon?: boolean;
}

export default function ButtonEnterAnimation({ buttonName, className, navigation, needIcon}: ButtonEnterAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        scale: { type: 'spring', visualDuration: 1, bounce: 0.5 },
      }}
    >
      <NavigationButton
        buttonName={buttonName}
        className={cn("bg-[#44008b]", className)}
        navigation={navigation}
        needIcon={needIcon}
      />
    </motion.div>
  )
}
