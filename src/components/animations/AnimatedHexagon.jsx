import React, { useId } from 'react';
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
  const instanceId = useId().replace(/:/g, '');
  const clipPathId = `hex-clip-${instanceId}`;
  const lavaGradientId = `hex-lava-${instanceId}`;
  const lavaBlurId = `hex-lava-blur-${instanceId}`;

  const showLava = size >= 18;

  const hexagonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -180
    },
    visible: {
      opacity: filled ? 0.75 : 0.55,
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
      y: [0, -Math.max(8, size * 0.15), 0],
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
      scale: [1, 1.12, 1],
      opacity: [0.18, 0.34, 0.18],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const lavaFieldVariants = {
    animate: {
      x: ['-10%', '10%', '-10%'],
      y: ['-12%', '8%', '-12%'],
      transition: {
        duration: duration * 2.2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const lavaBlobOneVariants = {
    animate: {
      x: ['12%', '55%', '30%', '12%'],
      y: ['72%', '32%', '8%', '72%'],
      scale: [0.9, 1.25, 0.95, 0.9],
      transition: {
        duration: duration * 2.4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const lavaBlobTwoVariants = {
    animate: {
      x: ['72%', '42%', '18%', '72%'],
      y: ['18%', '62%', '42%', '18%'],
      scale: [1.1, 0.85, 1.2, 1.1],
      transition: {
        duration: duration * 2.9,
        repeat: Infinity,
        ease: 'easeInOut'
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
      className={`hexagon-container ${size <= 16 ? 'hexagon-compact' : ''} ${className}`}
      style={{
        '--hex-size': `${size}px`,
        width: size,
        height: size,
        ...style
      }}
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
        <defs>
          <linearGradient id={lavaGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--lava-core)" />
            <stop offset="45%" stopColor="var(--lava-flow)" />
            <stop offset="100%" stopColor="var(--lava-crust)" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur={`${Math.max(6, duration * 3.5)}s`}
              repeatCount="indefinite"
            />
          </linearGradient>
          <clipPath id={clipPathId}>
            <path d={pathData} />
          </clipPath>
          <filter id={lavaBlurId} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation={Math.max(1.6, size * 0.018)} />
          </filter>
        </defs>

        {/* Background hexagon with pulse */}
        {animate && (
          <motion.path
            d={pathData}
            fill="currentColor"
            opacity="0.08"
            variants={pulseVariants}
            animate="animate"
          />
        )}

        {showLava && (
          <motion.g
            className="hexagon-lava-layer"
            clipPath={`url(#${clipPathId})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: filled ? 0.58 : 0.4 }}
            transition={{ duration: 0.7, delay }}
          >
            <motion.rect
              x={-size * 0.2}
              y={-size * 0.2}
              width={size * 1.4}
              height={size * 1.4}
              fill={`url(#${lavaGradientId})`}
              variants={animate ? lavaFieldVariants : {}}
              animate={animate ? "animate" : undefined}
            />
            <motion.circle
              cx={size * 0.2}
              cy={size * 0.75}
              r={Math.max(4, size * 0.16)}
              fill="var(--lava-core)"
              filter={`url(#${lavaBlurId})`}
              variants={animate ? lavaBlobOneVariants : {}}
              animate={animate ? "animate" : undefined}
              opacity={0.7}
            />
            <motion.circle
              cx={size * 0.74}
              cy={size * 0.25}
              r={Math.max(4, size * 0.13)}
              fill="var(--lava-spark)"
              filter={`url(#${lavaBlurId})`}
              variants={animate ? lavaBlobTwoVariants : {}}
              animate={animate ? "animate" : undefined}
              opacity={0.65}
            />
          </motion.g>
        )}

        {/* Main hexagon */}
        <motion.path
          d={pathData}
          fill={filled ? `url(#${lavaGradientId})` : "none"}
          stroke="currentColor"
          strokeWidth="2"
          className="hexagon-main-path"
          variants={hexagonVariants}
        />

        {/* Inner lines for detail */}
        {size > 16 && (
          <motion.g
            variants={hexagonVariants}
            initial="hidden"
            animate="visible"
            className="hexagon-detail-lines"
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
        )}
      </svg>
    </motion.div>
  );
};

export default AnimatedHexagon;
