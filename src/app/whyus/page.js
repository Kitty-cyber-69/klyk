'use client';

import styles from './page.module.css';
import ScrollReveal from '../components/ScrollReveal';

export default function WhyUsPage() {
  return (
    <div className={styles.container}>
      <ScrollReveal>
        <section className={styles.hero}>
          <h1>Why Choose KLYK?</h1>
          <p className={styles.subtitle}>Live Learning, Real Results: Your Path to EV Excellence</p>
        </section>
      </ScrollReveal>

      <div className={styles.contentGrid}>
        {/* Main Content */}
        <section className={styles.mainContent}>
          <ScrollReveal delay={0}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="bi bi-calendar-check"></i>
              </div>
              <h2>Weekend Live Classes</h2>
              <p>
                Unlike traditional pre-recorded courses, KLYK brings you real-time, interactive weekend sessions. 
                Learn at your own pace without disrupting your career. Our live format ensures you get immediate 
                answers to your questions and real-time feedback on your progress.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="bi bi-people"></i>
              </div>
              <h2>Direct Instructor Access</h2>
              <p>
                Get personalized attention from industry experts. Our instructors are available during live sessions 
                to address your specific challenges and provide hands-on guidance. Build a strong professional 
                relationship with mentors who are actively working in the EV industry.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="bi bi-hand-index-thumb"></i>
              </div>
              <h2>Hands-on Experience</h2>
              <p>
                Theory meets practice in our comprehensive training programs. Work with actual EV components, 
                perform real diagnostics, and solve practical challenges. Our hands-on approach ensures you're 
                job-ready from day one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="bi bi-diagram-3"></i>
              </div>
              <h2>Peer Network</h2>
              <p>
                Join a community of like-minded professionals. Collaborate, share experiences, and build valuable 
                connections that extend beyond the classroom. Our peer network is your gateway to industry 
                opportunities and continuous learning.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Lead Capture Form */}
        <section className={styles.leadCapture}>
          <ScrollReveal>
            <div className={styles.formCard}>
              <h2>Start Your EV Journey Today</h2>
              <p className={styles.formSubtitle}>
                Join our next weekend batch and transform your career in EV technology
              </p>
              
              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your Name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Your Email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <input type="tel" placeholder="Your Phone" />
                </div>
                
                <div className={styles.formGroup}>
                  <select required>
                    <option value="">Select Your Interest</option>
                    <option value="weekend">Weekend Live Classes</option>
                    <option value="corporate">Corporate Training</option>
                    <option value="online">Online Courses</option>
                    <option value="custom">Custom Program</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <textarea placeholder="Tell us about your goals" rows="4"></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.newsletterLabel}>
                    <input type="checkbox" />
                    Subscribe to our newsletter for EV industry updates
                  </label>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Register Your Interest
                </button>
              </form>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <i className="bi bi-envelope"></i>
                  <span>contact@klyk.com</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="bi bi-telephone"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="bi bi-geo-alt"></i>
                  <span>123 Tech Street, Innovation City</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
} 