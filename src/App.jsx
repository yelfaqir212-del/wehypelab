import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Founders from "./components/Founders";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Hero />
          <Founders />
          <Services />

          {/* About Section */}
          <section id="about" className="section about-section">
            <div className="section-container">
              <div className="section-header centered">
                <div className="section-eyebrow">
                  <span className="eyebrow-number">04</span>
                  <div className="eyebrow-line"></div>
                  <span className="eyebrow-text">PILIERS DE COMM</span>
                </div>
                <h2 className="section-title">Piliers de communication We Hype</h2>
                <p className="section-description">
                  Notre prise de parole repose sur trois piliers qui renforcent
                  la confiance, creent de la valeur concrete et installent une
                  image premium.
                </p>
              </div>

              <div className="about-grid">
                <div className="about-card">
                  <div className="about-icon">🎯</div>
                  <h3>Authority (Expertise)</h3>
                  <p>
                    Montrer la maitrise strategique: data, process, etudes de
                    cas et resultats activables.
                  </p>
                </div>
                <div className="about-card">
                  <div className="about-icon">📚</div>
                  <h3>Education (Valeur)</h3>
                  <p>
                    Apporter des conseils concrets: tips createurs, insights
                    marketing et methodes applicables rapidement.
                  </p>
                </div>
                <div className="about-card">
                  <div className="about-icon">🔥</div>
                  <h3>Hype / Branding</h3>
                  <p>
                    Construire l'image premium: vision, mindset et culture de
                    marque pour durer dans le temps.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="section process-section">
            <div className="section-container">
              <div className="section-header centered">
                <div className="section-eyebrow">
                  <span className="eyebrow-number">05</span>
                  <div className="eyebrow-line"></div>
                  <span className="eyebrow-text">METHODE WE HYPE</span>
                </div>
                <h2 className="section-title">Discovery to Scaling</h2>
                <p className="section-description">
                  Une methode en 5 etapes pour transformer l'influence en
                  impact mesurable, cote marques comme cote createurs.
                </p>
              </div>

              <div className="process-timeline">
                <div className="process-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>Discovery</h3>
                    <p>
                      Audit des objectifs, du marche et des audiences pour
                      poser un diagnostic clair.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>Strategie</h3>
                    <p>
                      Definition du plan d'action, des messages cles et du
                      systeme de priorites.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>Activation</h3>
                    <p>
                      Lancement des campagnes, contenus et activations selon la
                      feuille de route.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h3>Optimisation</h3>
                    <p>
                      Analyse continue des performances et ajustements rapides
                      pour maximiser l'impact.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">05</div>
                  <div className="step-content">
                    <h3>Scaling</h3>
                    <p>
                      Industrialisation des leviers qui fonctionnent pour
                      accelerer la croissance durable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="section testimonials-section">
            <div className="section-container">
              <div className="section-header centered">
                <div className="section-eyebrow">
                  <span className="eyebrow-number">06</span>
                  <div className="eyebrow-line"></div>
                  <span className="eyebrow-text">IMPACT STORIES</span>
                </div>
                <h2 className="section-title">Marques &amp; createurs parlent</h2>
                <p className="section-description">
                  Des retours concrets de partenaires accompagnes par We Hype.
                </p>
              </div>

              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    "Notre campagne d'influence a enfin relie image de marque et
                    performance. We Hype a pilote la strategie de A a Z avec une
                    execution ultra claire."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">LA</div>
                    <div className="author-info">
                      <h4>Lina A.</h4>
                      <p>Brand Manager</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    "Le programme createurs m'a donne une methode simple:
                    positionnement, contenu, monetisation. J'ai structure mon
                    offre en quelques semaines."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">YM</div>
                    <div className="author-info">
                      <h4>Yassine M.</h4>
                      <p>Creator &amp; Entrepreneur</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    "Entre PR, events et talents, l'equipe a construit un pont
                    solide entre notre marque et les bons profils createurs."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">CP</div>
                    <div className="author-info">
                      <h4>Camille P.</h4>
                      <p>Head of Communications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section contact-section">
            <div className="section-container">
              <div className="contact-wrapper">
                <div className="contact-content">
                  <div className="section-eyebrow">
                    <span className="eyebrow-number">07</span>
                    <div className="eyebrow-line"></div>
                    <span className="eyebrow-text">TALK TO WE HYPE</span>
                  </div>
                  <h2 className="section-title">Marque ou createur, parlons.</h2>
                  <p className="section-description">
                    B2B: lancer une campagne, un event ou une strategie talents.
                    <br />
                    B2C: rejoindre le Lab pour accelerer votre croissance.
                  </p>

                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="contact-icon">📧</div>
                      <div className="contact-details">
                        <h4>Email</h4>
                        <p>hello@wehype.com</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">💬</div>
                      <div className="contact-details">
                        <h4>Social</h4>
                        <p>@wehype</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-form-wrapper">
                  <form className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="vous@email.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="platform">Vous etes</label>
                      <select id="platform" name="platform" required>
                        <option value="">Selectionnez votre profil</option>
                        <option value="brand">B2B - Marque</option>
                        <option value="creator">B2C - Createur</option>
                        <option value="agency">Agence / Partenaire</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Vos objectifs</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Decrivez votre contexte et vos objectifs"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                      <span>Parler a l'equipe</span>
                      <span className="button-arrow">→</span>
                    </button>
                    <p className="contact-secondary-cta">
                      B2C: <a href="#services">Rejoindre le Lab</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-grid">
                <div className="footer-column footer-brand-column">
                  <div className="footer-logo">
                    <h3>We Hype x DigitUp</h3>
                    <p>Build Influence. Scale Impact. Monetize Smart.</p>
                  </div>
                  <div className="footer-brand-copy">
                    <img
                      src="/wehypelogo.png"
                      alt="We Hype logo"
                      className="footer-partner-logo"
                    />
                    <p className="footer-description">
                      We Hype, un écosystème d&apos;influence à double dimension
                      — un pont stratégique entre marques et créateurs.
                    </p>
                    <img
                      src="/digituplogo.png"
                      alt="DigitUp logo"
                      className="footer-partner-logo"
                    />
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-line"></div>
                <div className="footer-bottom-content">
                  <p>&copy; 2026 We Hype. All rights reserved.</p>
                  <div className="footer-links">
                    <a href="/privacy">Privacy Policy</a>
                    <span>•</span>
                    <a href="/terms">Terms of Service</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
