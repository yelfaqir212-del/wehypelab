import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedHexagon from "./animations/AnimatedHexagon";
import AnimatedLines from "./animations/AnimatedLines";
import "./Services.css";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: "Content Strategy",
      description:
        "Develop data-driven content strategies that resonate with your target audience and drive engagement.",
      features: [
        "Audience Analysis",
        "Content Calendar Planning",
        "Trend Research",
        "Performance Metrics",
      ],
      icon: "📊",
    },
    {
      id: 2,
      title: "Growth Hacking",
      description:
        "Implement proven growth techniques to rapidly expand your reach and build a loyal following.",
      features: [
        "Viral Campaign Design",
        "Cross-Platform Growth",
        "Algorithm Optimization",
        "Community Building",
      ],
      icon: "🚀",
    },
    {
      id: 3,
      title: "Personal Branding",
      description:
        "Craft a unique and authentic personal brand that sets you apart from the competition.",
      features: [
        "Brand Identity Design",
        "Voice & Tone Development",
        "Visual Consistency",
        "Brand Guidelines",
      ],
      icon: "✨",
    },
    {
      id: 4,
      title: "Video Production",
      description:
        "Master the art of creating high-quality, engaging video content that captivates viewers.",
      features: [
        "Filming Techniques",
        "Editing Mastery",
        "Storytelling Methods",
        "Platform Optimization",
      ],
      icon: "🎥",
    },
    {
      id: 5,
      title: "Monetization",
      description:
        "Learn multiple revenue streams and monetization strategies to maximize your earning potential.",
      features: [
        "Sponsorship Deals",
        "Affiliate Marketing",
        "Product Launches",
        "Revenue Diversification",
      ],
      icon: "💰",
    },
    {
      id: 6,
      title: "Analytics & Insights",
      description:
        "Leverage data analytics to make informed decisions and continuously optimize your performance.",
      features: [
        "Performance Tracking",
        "Audience Insights",
        "Competitor Analysis",
        "ROI Optimization",
      ],
      icon: "📈",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        {/* Section Header */}
        <motion.div
          className="services-header"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-number">03</span>
            <AnimatedLines type="horizontal" width="60px" delay={0.3} />
            <span className="eyebrow-text">WHAT WE OFFER</span>
          </motion.div>

          <motion.h2 className="section-title" variants={titleVariants}>
            Our Services
          </motion.h2>

          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive training programs designed to elevate your influence
            and transform your digital presence into a thriving business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Card Background Hexagon */}
              <div className="card-background">
                <AnimatedHexagon
                  size={120}
                  delay={0.5 + index * 0.1}
                  className="card-hexagon"
                />
              </div>

              {/* Card Number */}
              <motion.div
                className="card-number"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {String(service.id).padStart(2, "0")}
              </motion.div>

              {/* Card Icon */}
              <motion.div
                className="card-icon"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: -180 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <span className="icon-emoji">{service.icon}</span>
                <div className="icon-hexagon">
                  <AnimatedHexagon size={80} animate={false} />
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="card-content">
                <motion.h3
                  className="card-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="card-description"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="card-divider"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                />

                <motion.ul
                  className="card-features"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="feature-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: 0.9 + index * 0.1 + idx * 0.05,
                      }}
                    >
                      <span className="feature-bullet">
                        <AnimatedHexagon
                          size={8}
                          animate={false}
                          filled={true}
                        />
                      </span>
                      <span className="feature-text">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Card Hover Effect */}
              <motion.div
                className="card-hover-line"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="services-decoration">
          <motion.div
            className="decoration-hexagon hex-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatedHexagon size={100} />
          </motion.div>
          <motion.div
            className="decoration-hexagon hex-2"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatedHexagon size={80} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
