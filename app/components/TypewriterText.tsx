'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className = '', delay = 0 }: TypewriterTextProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      await controls.set({ width: '0%' });
      await new Promise(resolve => setTimeout(resolve, delay));
      await controls.start({
        width: '100%',
        transition: {
          duration: text.length * 0.05, // Adjust speed based on text length
          ease: 'linear',
        },
      });
    };

    animate();
  }, [controls, text, delay]);

  return (
    <div className="relative">
      <div className="invisible">{text}</div>
      <motion.div
        className={`absolute top-0 left-0 whitespace-pre-wrap ${className}`}
        animate={controls}
        style={{
          width: 0,
          overflow: 'hidden',
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}