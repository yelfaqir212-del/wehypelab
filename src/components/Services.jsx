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

  const serviceGroups = [
    {
      id: "b2b",
      label: "B2B - Pour les marques",
      description:
        "Un accompagnement stratégique et opérationnel pour activer l'influence comme levier business.",
      cta: "Parler a l'equipe",
      ctaTarget: "#contact",
      services: [
        {
          id: 1,
          title: "Campagnes d'influence",
          description:
            "Concevoir et executer des campagnes d'influence full-funnel, du cadrage aux performances finales.",
          features: [
            "Selection de talents",
            "Narratif de campagne",
            "Pilotage operationnel",
            "Reporting et ROI",
          ],
          icon: "📣",
        },
        {
          id: 2,
          title: "PR",
          description:
            "Amplifier votre prise de parole avec des activations media et des relations presse credibles.",
          features: [
            "Relations presse",
            "Narration de marque",
            "Activation editors & KOLs",
            "Visibilite multi-canale",
          ],
          icon: "📰",
        },
        {
          id: 3,
          title: "Events",
          description:
            "Imaginer des experiences memorables qui connectent votre marque aux createurs et aux communautes.",
          features: [
            "Concept & production",
            "Guestlist createurs",
            "Couverture social media",
            "Mesure d'impact",
          ],
          icon: "🎤",
        },
        {
          id: 4,
          title: "Gestion de talents",
          description:
            "Identifier, encadrer et valoriser les profils influenceurs alignes avec vos objectifs de marque.",
          features: [
            "Casting strategique",
            "Negociation partenariats",
            "Suivi contractuel",
            "Optimisation de collaborations",
          ],
          icon: "🤝",
        },
      ],
    },
    {
      id: "b2c",
      label: "B2C - Pour les createurs",
      description:
        "Un cadre de progression pour structurer votre marque personnelle, accelerer votre croissance et monetiser durablement.",
      cta: "Booster ma croissance",
      ctaTarget: "#contact",
      services: [
        {
          id: 5,
          title: "Formation influenceurs",
          description:
            "Monter en competence avec une methode concrete sur le contenu, l'audience et la performance.",
          features: [
            "Positionnement de niche",
            "Formats qui convertissent",
            "Systemes de production",
            "Lecture des KPIs",
          ],
          icon: "🎓",
        },
        {
          id: 6,
          title: "Personal branding",
          description:
            "Construire une identite de marque forte, coherente et reconnaissable sur toutes vos plateformes.",
          features: [
            "Storytelling personnel",
            "Territoire visuel",
            "Voix editoriale",
            "Cohesion multicanale",
          ],
          icon: "✨",
        },
        {
          id: 7,
          title: "Growth hacking",
          description:
            "Activer des leviers de croissance test-and-learn pour gagner en visibilite et en engagement.",
          features: [
            "Acceleration organique",
            "Boucles d'acquisition",
            "Optimisation formats",
            "Scaling des contenus",
          ],
          icon: "🚀",
        },
        {
          id: 8,
          title: "Monetisation",
          description:
            "Structurer des revenus predictibles via les deals marques, l'offre et les activations commerciales.",
          features: [
            "Offres createurs",
            "Negociation sponsoring",
            "Diversification revenus",
            "Pilotage rentabilite",
          ],
          icon: "💰",
        },
      ],
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
            <span className="eyebrow-text">B2B + B2C SOLUTIONS</span>
          </motion.div>

          <motion.h2 className="section-title" variants={titleVariants}>
            Services We Hype
          </motion.h2>

          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Une offre a double dimension: activations pour les marques et
            acceleration pour les createurs, dans un meme ecosysteme.
          </motion.p>
        </motion.div>

        {/* Services Split */}
        <motion.div
          className="services-groups"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {serviceGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              className="services-group"
              variants={cardVariants}
            >
              <div className="services-group-header">
                <h3 className="services-group-title">{group.label}</h3>
                <p className="services-group-description">{group.description}</p>
                <motion.button
                  className="services-group-cta"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => scrollToSection(e, group.ctaTarget)}
                >
                  {group.cta}
                </motion.button>
              </div>

              <div className="services-grid services-grid-group">
                {group.services.map((service, index) => (
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
                        delay={0.5 + (groupIndex * 4 + index) * 0.1}
                        className="card-hexagon"
                      />
                    </div>

                    {/* Card Number */}
                    <motion.div
                      className="card-number"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + (groupIndex * 4 + index) * 0.1,
                      }}
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
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + (groupIndex * 4 + index) * 0.1,
                      }}
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
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + (groupIndex * 4 + index) * 0.1,
                        }}
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                        className="card-description"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + (groupIndex * 4 + index) * 0.1,
                        }}
                      >
                        {service.description}
                      </motion.p>

                      <motion.div
                        className="card-divider"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.7 + (groupIndex * 4 + index) * 0.1,
                        }}
                      />

                      <motion.ul
                        className="card-features"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + (groupIndex * 4 + index) * 0.1,
                        }}
                      >
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="feature-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{
                              duration: 0.4,
                              delay:
                                0.9 +
                                (groupIndex * 4 + index) * 0.1 +
                                idx * 0.05,
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
              </div>
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
