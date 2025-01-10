"use client"
 
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typography } from 'antd/lib';
 
interface TypingEffectProps {
    text?: string;
    className: string;
}

export function TypingEffect({ text, className }: TypingEffectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHide, setIsHide] = useState(true);

  setTimeout(() => setIsHide(false), 2000);

  return (
    <Typography.Text
      ref={ref}
      className={className}
    >
      {
        !isHide && (
          text?.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 5, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))
        )
      }
    </Typography.Text>
  );
}