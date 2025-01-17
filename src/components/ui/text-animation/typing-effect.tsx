"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Space, Typography } from 'antd/lib';

interface TypingEffectProps {
  text?: string;
  className: string;
}

export function TypingEffect({ text, className }: TypingEffectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHide(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  setTimeout(() => setIsHide(false), 2000);

  return (
    <Space ref={ref}>
      <Typography.Text className={className}>
        {!isHide &&
          text?.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Adjust transition duration and delay
            >
              {letter}
            </motion.span>
          ))}
      </Typography.Text>
    </Space>
  );
}