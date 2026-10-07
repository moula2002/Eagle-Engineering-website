import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

export const Counter = ({ from = 0, to, duration = 2.5, suffix = '' }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { 
        duration,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [count, isInView, to, duration]);

  return (
    <span ref={nodeRef} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
