import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Founders from "./components/Founders";
import Services from "./components/Services";
import "./App.css";

const AppContent = () => {
  const { t, locale } = useLanguage();

  return (
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
                <span className="eyebrow-text">{t("pillars.eyebrow")}</span>
              </div>
              <h2 className="section-title">{t("pillars.title")}</h2>
              <p className="section-description">{t("pillars.description")}</p>
            </div>

            <div className="about-grid">
              {locale.pillars.items.map((pillar, idx) => (
                <div className="about-card" key={idx}>
                  <div className="about-icon">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              ))}
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
                <span className="eyebrow-text">{t("method.eyebrow")}</span>
              </div>
              <h2 className="section-title">{t("method.title")}</h2>
              <p className="section-description">{t("method.description")}</p>
            </div>

            <div className="process-timeline">
              {locale.method.steps.map((step, idx) => (
                <div className="process-step" key={idx}>
                  <div className="step-number">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  {idx < locale.method.steps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
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
                <span className="eyebrow-text">{t("testimonials.eyebrow")}</span>
              </div>
              <h2 className="section-title">{t("testimonials.title")}</h2>
              <p className="section-description">
                {t("testimonials.description")}
              </p>
            </div>

            <div className="testimonials-grid">
              {locale.testimonials.items.map((item, idx) => (
                <div className="testimonial-card" key={idx}>
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{item.initials}</div>
                    <div className="author-info">
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                  <span className="eyebrow-text">{t("contact.eyebrow")}</span>
                </div>
                <h2 className="section-title">{t("contact.title")}</h2>
                <p className="section-description">
                  {t("contact.description1")}
                  <br />
                  {t("contact.description2")}
                </p>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-details">
                      <h4>{t("contact.emailLabel")}</h4>
                      <p>hello@wehype.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">💬</div>
                    <div className="contact-details">
                      <h4>{t("contact.socialLabel")}</h4>
                      <p>@wehype</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">{t("contact.labelName")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t("contact.placeholderName")}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{t("contact.labelEmail")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="vous@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="platform">{t("contact.labelProfile")}</label>
                    <select id="platform" name="platform" required>
                      <option value="">{t("contact.placeholderProfile")}</option>
                      <option value="brand">{t("contact.optionBrand")}</option>
                      <option value="creator">{t("contact.optionCreator")}</option>
                      <option value="agency">{t("contact.optionAgency")}</option>
                      <option value="other">{t("contact.optionOther")}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t("contact.labelObjectives")}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder={t("contact.placeholderObjectives")}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    <span>{t("contact.submit")}</span>
                    <span className="button-arrow">→</span>
                  </button>
                  <p className="contact-secondary-cta">
                    B2C:{" "}
                    <a href="#services">{t("contact.b2cCta")}</a>
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
                    {t("footer.description")}
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
                <p>{t("footer.copyright")}</p>
                <div className="footer-links">
                  <a href="/privacy">{t("footer.privacy")}</a>
                  <span>•</span>
                  <a href="/terms">{t("footer.terms")}</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
