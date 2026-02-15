import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  const toggleVariants = {
    light: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    dark: {
      rotate: 180,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const iconVariants = {
    initial: { scale: 0, opacity: 0, rotate: -180 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const glowVariants = {
    light: {
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    },
    dark: {
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      variants={glowVariants}
      animate={theme}
      whileHover={{
        scale: 1.1,
        boxShadow: isDark ? '0 0 30px rgba(255, 255, 255, 0.2)' : '0 0 30px rgba(0, 0, 0, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="theme-toggle-icon"
        variants={toggleVariants}
        animate={theme}
      >
        {isDark ? (
          <motion.svg
            key="moon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
            />
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </motion.svg>
        )}
      </motion.div>

      {/* Hexagon background decoration */}
      <motion.div
        className="theme-toggle-hexagon"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path
            d="M 30 5 L 52 17.5 L 52 42.5 L 30 55 L 8 42.5 L 8 17.5 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
