import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedHexagon from "./animations/AnimatedHexagon";
import AnimatedLines, { GridLines } from "./animations/AnimatedLines";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const hexagonPositions = [
    { top: "10%", left: "10%", size: 80, delay: 0.2 },
    { top: "20%", right: "15%", size: 100, delay: 0.4 },
    { bottom: "15%", left: "8%", size: 120, delay: 0.6 },
    { bottom: "25%", right: "12%", size: 90, delay: 0.8 },
    { top: "50%", left: "5%", size: 60, delay: 1.0 },
    { top: "40%", right: "8%", size: 70, delay: 1.2 },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Animated Grid Background */}
      <div className="hero-grid">
        <GridLines rows={12} cols={12} opacity={0.05} animate={true} />
      </div>

      {/* Floating Hexagons */}
      <div className="hero-hexagons">
        {hexagonPositions.map((pos, index) => (
          <motion.div
            key={index}
            className="floating-hexagon"
            style={{
              position: "absolute",
              ...pos,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{
              duration: 1,
              delay: pos.delay,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <AnimatedHexagon size={pos.size} duration={4 + index} />
          </motion.div>
        ))}
      </div>

      {/* Animated Lines Decoration */}
      <div className="hero-lines">
        <motion.div
          className="diagonal-line line-1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.div
          className="diagonal-line line-2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1.7 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="hero-content"
        style={{ y: ySpring, opacity, scale }}
      >
        <div className="hero-content-inner">
          {/* Eyebrow Text */}
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">INFLUENCER TRAINING AGENCY</span>
            <span className="eyebrow-line"></span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="title-line">
              <span className="title-word">WE</span>
              <motion.span
                className="title-word highlight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                HYPE
              </motion.span>
            </span>
            <span className="title-line">
              <span className="title-word">YOUR</span>
            </span>
            <span className="title-line">
              <span className="title-word">INFLUENCE</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Transform your digital presence with expert training, strategic
            growth, and data-driven results. We help influencers amplify their
            reach and maximize their impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="cta-button primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              <span className="button-text">Start Your Journey</span>
              <span className="button-hexagon">
                <AnimatedHexagon size={20} animate={false} filled={true} />
              </span>
            </motion.button>

            <motion.button
              className="cta-button secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) => scrollToSection(e, "#about")}
            >
              <span className="button-text">Why We Hype Lab</span>
              <motion.span
                className="button-arrow"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="stat-item">
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                40+
              </motion.div>
              <div className="stat-label">Brands</div>
            </div>

            <div className="stat-divider">
              <AnimatedLines type="vertical" height="60px" delay={1.4} />
            </div>

            <div className="stat-item">
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                1.7M+
              </motion.div>
              <div className="stat-label">Audience Reached</div>
            </div>

            <div className="stat-divider">
              <AnimatedLines type="vertical" height="60px" delay={1.6} />
            </div>

            <div className="stat-item">
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                98%
              </motion.div>
              <div className="stat-label">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        onClick={(e) => scrollToSection(e, "#services")}
      >
        <span className="scroll-text">Scroll</span>
        <motion.div
          className="scroll-line"
          animate={{ height: [0, 40, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="hero-gradient"></div>
    </section>
  );
};

export default Hero;
