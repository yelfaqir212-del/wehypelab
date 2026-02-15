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
                  <span className="eyebrow-number">03</span>
                  <div className="eyebrow-line"></div>
                  <span className="eyebrow-text">WHO WE ARE</span>
                </div>
                <h2 className="section-title">About We Hype Lab</h2>
                <p className="section-description">
                  We are a premier influencer training agency dedicated to
                  helping content creators transform their passion into a
                  thriving business. With years of experience and a proven track
                  record, we provide the tools, strategies, and support needed
                  to succeed in the digital landscape.
                </p>
              </div>

              <div className="about-grid">
                <div className="about-card">
                  <div className="about-icon">🎯</div>
                  <h3>Our Mission</h3>
                  <p>
                    Empower creators to amplify their influence and build
                    sustainable digital businesses through expert training and
                    strategic guidance.
                  </p>
                </div>
                <div className="about-card">
                  <div className="about-icon">👁️</div>
                  <h3>Our Vision</h3>
                  <p>
                    To become the world's leading influencer training platform,
                    shaping the future of digital content creation and personal
                    branding.
                  </p>
                </div>
                <div className="about-card">
                  <div className="about-icon">⚡</div>
                  <h3>Our Values</h3>
                  <p>
                    Authenticity, innovation, growth mindset, and
                    community-driven success are at the core of everything we
                    do.
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
                  <span className="eyebrow-number">04</span>
                  <div className="eyebrow-line"></div>
                  <span className="eyebrow-text">HOW IT WORKS</span>
                </div>
                <h2 className="section-title">Our Process</h2>
                <p className="section-description">
                  A structured, proven methodology that takes you from aspiring
                  influencer to industry leader.
                </p>
              </div>

              <div className="process-timeline">
                <div className="process-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>Discovery & Assessment</h3>
                    <p>
                      We analyze your current presence, identify opportunities,
                      and create a personalized growth roadmap.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>Strategy Development</h3>
                    <p>
                      Build a comprehensive content and growth strategy aligned
                      with your goals and target audience.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>Skill Training</h3>
                    <p>
                      Master essential skills through hands-on workshops,
                      one-on-one coaching, and practical exercises.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h3>Implementation & Growth</h3>
                    <p>
                      Execute your strategy with ongoing support, optimization,
                      and performance tracking.
                    </p>
                  </div>
                  <div className="step-connector"></div>
                </div>

                <div className="process-step">
                  <div className="step-number">05</div>
                  <div className="step-content">
                    <h3>Scale & Monetize</h3>
                    <p>
                      Expand your reach, diversify revenue streams, and build a
                      sustainable influencer business.
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
                  <span className="eyebrow-number">05</span>
                  <div className="eyebrow-line"></div>
                  <span className="eyebrow-text">SUCCESS STORIES</span>
                </div>
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-description">
                  Real results from real creators who transformed their
                  influence with We Hype Lab.
                </p>
              </div>

              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    "We Hype Lab completely transformed my approach to content
                    creation. Within 6 months, I grew from 10K to 250K followers
                    and landed my first major brand deal!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">JD</div>
                    <div className="author-info">
                      <h4>Jessica Davis</h4>
                      <p>Lifestyle Influencer</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    "The strategies I learned here helped me 10x my engagement
                    rate. The team's expertise in analytics and growth hacking
                    is unmatched."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">MC</div>
                    <div className="author-info">
                      <h4>Marcus Chen</h4>
                      <p>Tech Reviewer</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    "From zero to six figures in revenue! We Hype Lab taught me
                    how to monetize my influence effectively and build multiple
                    income streams."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">SR</div>
                    <div className="author-info">
                      <h4>Sarah Rodriguez</h4>
                      <p>Fashion Creator</p>
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
                    <span className="eyebrow-number">06</span>
                    <div className="eyebrow-line"></div>
                    <span className="eyebrow-text">GET IN TOUCH</span>
                  </div>
                  <h2 className="section-title">
                    Ready to Amplify Your Influence?
                  </h2>
                  <p className="section-description">
                    Take the first step towards transforming your digital
                    presence. Join hundreds of successful creators who've
                    elevated their influence with We Hype Lab.
                  </p>

                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="contact-icon">📧</div>
                      <div className="contact-details">
                        <h4>Email</h4>
                        <p>hello@wehypelab.com</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">💬</div>
                      <div className="contact-details">
                        <h4>Social</h4>
                        <p>@wehypelab</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-form-wrapper">
                  <form className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="platform">Primary Platform</label>
                      <select id="platform" name="platform" required>
                        <option value="">Select a platform</option>
                        <option value="instagram">Instagram</option>
                        <option value="youtube">YouTube</option>
                        <option value="tiktok">TikTok</option>
                        <option value="twitter">Twitter/X</option>
                        <option value="multiple">Multiple Platforms</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Tell us about your goals</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="What do you want to achieve?"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                      <span>Start Your Journey</span>
                      <span className="button-arrow">→</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-grid">
                <div className="footer-column">
                  <div className="footer-logo">
                    <h3>WE HYPE</h3>
                    <p>Amplify Your Influence</p>
                  </div>
                  <p className="footer-description">
                    Empowering creators to build sustainable digital businesses
                    through expert training and strategic growth.
                  </p>
                </div>

                <div className="footer-column">
                  <h4>Services</h4>
                  <ul>
                    <li>
                      <a href="#services">Content Strategy</a>
                    </li>
                    <li>
                      <a href="#services">Growth Hacking</a>
                    </li>
                    <li>
                      <a href="#services">Personal Branding</a>
                    </li>
                    <li>
                      <a href="#services">Video Production</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#process">Our Process</a>
                    </li>
                    <li>
                      <a href="#testimonials">Success Stories</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4>Connect</h4>
                  <ul>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Twitter/X
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-line"></div>
                <div className="footer-bottom-content">
                  <p>&copy; 2024 We Hype Lab. All rights reserved.</p>
                  <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <span>•</span>
                    <a href="#">Terms of Service</a>
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
