'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import ScrollReveal from '../components/ScrollReveal';

export default function WhyUsPage() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add useEffect to clear form status after 3 seconds
  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd252ded0-1d87-4f26-9b4a-5e91569e43ae',
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          interest: e.target.interest.value,
          message: e.target.message.value,
          subject: 'New Registration Interest from KLYK Website',
          redirect: false
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: 'success',
          message: 'Thank you for your interest! We will contact you soon.',
        });
        e.target.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              
              {formStatus.message && (
                <div className={`${styles.formStatus} ${styles[formStatus.type]}`}>
                  {formStatus.message}
                </div>
              )}

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <input type="tel" name="phone" placeholder="Your Phone" required />
                </div>
                
                <div className={styles.formGroup}>
                  <select name="interest" required>
                    <option value="">Select Your Interest</option>
                    <option value="service request">Service Request</option>
                    <option value="class registration">Class Registration</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="custom program">Custom Program</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <textarea name="message" placeholder="Describe your query" rows="4" required></textarea>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Register Your Interest'}
                </button>
              </form>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <i className="bi bi-envelope"></i>
                  <span>klyktechnosolutions@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="bi bi-telephone"></i>
                  <span>xxxxxxxxxx</span>
                </div>
                <div className={styles.contactItem}>
                  <i className="bi bi-geo-alt"></i>
                  <span>Address</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
} 