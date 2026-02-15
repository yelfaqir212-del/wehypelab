import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import AnimatedHexagon from "./animations/AnimatedHexagon";
import "./Navigation.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "founders", label: "Founders", href: "#founders" },
    { id: "services", label: "Services", href: "#services" },
    { id: "about", label: "About", href: "#about" },
    { id: "process", label: "Process", href: "#process" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className={`navigation ${isScrolled ? "scrolled" : ""}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.a
          href="#home"
          className="nav-logo"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleNavClick(e, "#home", "home")}
        >
          <div className="logo-hexagon">
            <AnimatedHexagon size={40} animate={false} />
          </div>
          <span className="logo-text">WE HYPE</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul className="nav-menu desktop-menu" variants={itemVariants}>
          {navItems.map((item, index) => (
            <motion.li key={item.id} variants={itemVariants} custom={index}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
              >
                <span className="nav-link-text">{item.label}</span>
                <motion.span
                  className="nav-link-underline"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Section */}
        <motion.div className="nav-right" variants={itemVariants}>
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <motion.button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Decorative Hexagons */}
              <div className="mobile-menu-decoration">
                <AnimatedHexagon
                  size={80}
                  delay={0.3}
                  className="decoration-hex-1"
                />
                <AnimatedHexagon
                  size={60}
                  delay={0.4}
                  className="decoration-hex-2"
                />
                <AnimatedHexagon
                  size={50}
                  delay={0.5}
                  className="decoration-hex-3"
                />
              </div>

              <motion.ul className="mobile-nav-list">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    variants={mobileItemVariants}
                    custom={index}
                  >
                    <a
                      href={item.href}
                      className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                      onClick={(e) => handleNavClick(e, item.href, item.id)}
                    >
                      <span className="mobile-nav-number">0{index + 1}</span>
                      <span className="mobile-nav-text">{item.label}</span>
                      <motion.div
                        className="mobile-nav-line"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Mobile Menu Footer */}
              <motion.div
                className="mobile-menu-footer"
                variants={mobileItemVariants}
              >
                <p className="mobile-menu-tagline">Amplify Your Influence</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Decorative Lines */}
      <motion.div
        className="nav-line-left"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="nav-line-right"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </motion.nav>
  );
};

export default Navigation;
