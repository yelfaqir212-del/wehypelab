import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedHexagon.css';

const AnimatedHexagon = ({
  size = 100,
  delay = 0,
  duration = 3,
  animate = true,
  filled = false,
  className = '',
  style = {}
}) => {
  const hexagonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -180
    },
    visible: {
      opacity: filled ? 0.6 : 0.3,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        delay: delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    hover: {
      scale: 1.1,
      opacity: filled ? 0.8 : 0.5,
      rotate: 180,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: {
        y: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: duration * 4,
          repeat: Infinity,
          ease: "linear"
        }
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Hexagon path calculation
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = size / 2 + (size / 2) * Math.cos(angle);
    const y = size / 2 + (size / 2) * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  const pathData = `M ${points.join(' L ')} Z`;

  return (
    <motion.div
      className={`hexagon-container ${className}`}
      style={{ width: size, height: size, ...style }}
      variants={animate ? floatVariants : {}}
      animate={animate ? "animate" : ""}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background hexagon with pulse */}
        {animate && (
          <motion.path
            d={pathData}
            fill="currentColor"
            opacity="0.1"
            variants={pulseVariants}
            animate="animate"
          />
        )}

        {/* Main hexagon */}
        <motion.path
          d={pathData}
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          variants={hexagonVariants}
        />

        {/* Inner lines for detail */}
        <motion.g
          variants={hexagonVariants}
          initial="hidden"
          animate="visible"
        >
          <line
            x1={size / 2}
            y1={size * 0.2}
            x2={size / 2}
            y2={size * 0.8}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
          <line
            x1={size * 0.2}
            y1={size * 0.35}
            x2={size * 0.8}
            y2={size * 0.65}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
          <line
            x1={size * 0.2}
            y1={size * 0.65}
            x2={size * 0.8}
            y2={size * 0.35}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default AnimatedHexagon;
