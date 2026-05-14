import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const FadeInWhenVisible = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxText = ({ children, baseVelocity = 100, className = "" }) => {
  // A simplified parallax effect suitable for standard layout elements
  return (
    <div className={`overflow-hidden flex whitespace-nowrap flex-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap flex-nowrap"
        animate={{
          x: [0, -1036],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
         <span className="block mr-8">{children}</span>
         <span className="block mr-8">{children}</span>
         <span className="block mr-8">{children}</span>
         <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  )
}
