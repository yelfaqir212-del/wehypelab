import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedHexagon from "./animations/AnimatedHexagon";
import AnimatedLines from "./animations/AnimatedLines";
import "./Founders.css";

// Placeholder images - replace these with actual founder images
const founder1 = "/founder1.jpg";
const founder2 = "/founder2.jpg";

const Founders = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const founders = [
    {
      id: 1,
      name: "Ibrahim Jaidi",
      role: "Co-Founder & CEO",
      image: founder1,
      bio: "Pilote la vision strategique de We Hype et connecte les enjeux business des marques avec les opportunites d'influence les plus pertinentes.",
      expertise: ["Strategie d'influence", "Brand Partnerships", "Business Scaling"],
    },
    {
      id: 2,
      name: "Houda",
      role: "Co-Founder & COO",
      image: founder2,
      bio: "Orchestre l'execution operationnelle entre PR, events, contenus et performance pour assurer une croissance durable cote marques et createurs.",
      expertise: ["Operations", "Activation", "Optimisation"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
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
    <section id="founders" className="founders" ref={ref}>
      <div className="founders-container">
        {/* Section Header */}
        <motion.div
          className="founders-header"
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
            <span className="eyebrow-number">02</span>
            <AnimatedLines type="horizontal" width="60px" delay={0.3} />
            <span className="eyebrow-text">LEADERSHIP</span>
          </motion.div>

          <motion.h2 className="section-title" variants={titleVariants}>
            Leadership We Hype
          </motion.h2>

          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Une equipe fondatrice orientee strategie, execution et resultats
            pour faire le pont entre marques et createurs.
          </motion.p>
        </motion.div>

        {/* Founders Grid */}
        <motion.div
          className="founders-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              className="founder-card"
              variants={cardVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.4 },
              }}
            >
              {/* Card Background Decoration */}
              <div className="founder-card-bg">
                <AnimatedHexagon
                  size={200}
                  delay={0.5 + index * 0.2}
                  className="bg-hexagon"
                />
              </div>

              {/* Founder Image Container */}
              <motion.div
                className="founder-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <div className="image-hexagon-frame">
                  <AnimatedHexagon
                    size={280}
                    animate={false}
                    className="frame-hexagon"
                  />
                </div>
                <div
                  className={`founder-image ${founder.id === 2 ? "grayscale" : ""}`}
                >
                  <img src={founder.image} alt={founder.name} />
                  <div className="image-overlay"></div>
                </div>
                <motion.div
                  className="image-border"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Founder Info */}
              <div className="founder-info">
                <motion.h3
                  className="founder-name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  {founder.name}
                </motion.h3>

                <motion.p
                  className="founder-role"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                >
                  {founder.role}
                </motion.p>

                <motion.div
                  className="founder-divider"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                />

                <motion.p
                  className="founder-bio"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
                >
                  {founder.bio}
                </motion.p>

                {/* Expertise Tags */}
                <motion.div
                  className="founder-expertise"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                >
                  {founder.expertise.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="expertise-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: 1.1 + index * 0.2 + idx * 0.1,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <AnimatedHexagon size={8} animate={false} filled={true} />
                      <span>{skill}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Hover Effect Line */}
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
        <div className="founders-decoration">
          <motion.div
            className="decoration-line line-1"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="decoration-line line-2"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
