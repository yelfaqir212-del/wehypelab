import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedLines.css';

const AnimatedLines = ({
  type = 'horizontal',
  width = '100%',
  height = '2px',
  color = 'currentColor',
  delay = 0,
  duration = 1,
  className = ''
}) => {
  const lineVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: duration,
          delay: delay,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.3,
          delay: delay
        }
      }
    }
  };

  const pulseVariants = {
    animate: {
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (type === 'horizontal') {
    return (
      <div className={`animated-line-container ${className}`} style={{ width, height }}>
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  if (type === 'vertical') {
    return (
      <div className={`animated-line-container ${className}`} style={{ width: height, height: width }}>
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  if (type === 'diagonal') {
    return (
      <div className={`animated-line-container ${className}`} style={{ width, height: width }}>
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  if (type === 'zigzag') {
    return (
      <div className={`animated-line-container ${className}`} style={{ width, height: '100px' }}>
        <svg width="100%" height="100" preserveAspectRatio="none">
          <motion.path
            d="M 0 50 L 25 25 L 50 50 L 75 25 L 100 50"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </svg>
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className={`animated-line-container ${className}`} style={{ width, height }}>
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            variants={pulseVariants}
            animate="animate"
          />
        </svg>
      </div>
    );
  }

  return null;
};

export const ConnectedLines = ({
  points = [],
  color = 'currentColor',
  strokeWidth = 2,
  delay = 0,
  duration = 1.5,
  className = ''
}) => {
  if (points.length < 2) return null;

  const pathData = points.map((point, index) =>
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  const lineVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: duration,
          delay: delay,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.3,
          delay: delay
        }
      }
    }
  };

  return (
    <svg className={`connected-lines ${className}`} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <motion.path
        d={pathData}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      />
    </svg>
  );
};

export const GridLines = ({
  rows = 10,
  cols = 10,
  color = 'currentColor',
  opacity = 0.1,
  animate = true,
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: opacity,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.svg
      className={`grid-lines ${className}`}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      variants={animate ? containerVariants : {}}
      initial={animate ? "hidden" : "visible"}
      whileInView={animate ? "visible" : ""}
      viewport={{ once: true }}
    >
      {/* Horizontal lines */}
      {Array.from({ length: rows + 1 }).map((_, index) => (
        <motion.line
          key={`h-${index}`}
          x1="0"
          y1={`${(index / rows) * 100}%`}
          x2="100%"
          y2={`${(index / rows) * 100}%`}
          stroke={color}
          strokeWidth="1"
          variants={animate ? lineVariants : {}}
        />
      ))}
      {/* Vertical lines */}
      {Array.from({ length: cols + 1 }).map((_, index) => (
        <motion.line
          key={`v-${index}`}
          x1={`${(index / cols) * 100}%`}
          y1="0"
          x2={`${(index / cols) * 100}%`}
          y2="100%"
          stroke={color}
          strokeWidth="1"
          variants={animate ? lineVariants : {}}
        />
      ))}
    </motion.svg>
  );
};

export default AnimatedLines;
