"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const faqData = [
  {
    q: "What makes KLYK's training unique?",
    a: "Our training combines live weekend classes, direct instructor access, and hands-on experience with real EV components."
  },
  {
    q: "How long are the training programs?",
    a: "Programs vary from 4-week intensive courses to 12-week comprehensive training, depending on your needs."
  },
  {
    q: "Do you offer corporate training?",
    a: "Yes, we provide customized corporate training programs tailored to your organization's specific needs."
  },
  {
    q: "What are the prerequisites for enrollment?",
    a: "Basic understanding of automotive technology is recommended, but we welcome all enthusiastic learners."
  }
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.textBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.headline}>Welcome to Klyk!</h1>
          <h3 className={styles.tagline}>
            Empowering Learning Through Expert-Led Training in Electrical Vehicle Technology
          </h3>
          <motion.a
            href="#contact"
            className={styles.ctaBtn}
            onClick={handleOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today!
          </motion.a>
        </motion.div>

        <motion.div 
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/home.png"
            alt="EV Technology Training"
            className={styles.heroImage}
          />
        </motion.div>
      </section>

      {/* Trust Badges Section */}
      <section className={styles.trustSection}>
        <h2>Trusted By Industry Leaders</h2>
        <div className={styles.trustBadges}>
          <motion.div 
            className={styles.badge}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.badgeIcon}>
              <i className="bi bi-award"></i>
            </div>
            <span>ISO 9001:2015</span>
          </motion.div>
          <motion.div 
            className={styles.badge}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.badgeIcon}>
              <i className="bi bi-shield-check"></i>
            </div>
            <span>Industry Certified</span>
          </motion.div>
          <motion.div 
            className={styles.badge}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.badgeIcon}>
              <i className="bi bi-star"></i>
            </div>
            <span>Quality Assured</span>
          </motion.div>
        </div>
      </section>

      {/* Latest News/Blog Section */}
      <section className={styles.newsSection}>
        <h2>Latest in EV Technology</h2>
        <div className={styles.newsGrid}>
          {[
            {
              title: "Latest Developments in EV Technology",
              content: "Exploring the future of electric vehicles and sustainable transportation...",
              icon: "bi-lightning"
            },
            {
              title: "New Training Programs",
              content: "Introducing our latest curriculum updates and specialized courses...",
              icon: "bi-book"
            },
            {
              title: "Industry Insights",
              content: "Stay updated with the latest trends and innovations in EV technology...",
              icon: "bi-graph-up"
            }
          ].map((item, index) => (
            <motion.article 
              key={index}
              className={styles.newsCard}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.newsIcon}>
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div className={styles.newsContent}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <Link href="/blog" className={styles.readMore}>Read More</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className={styles.portfolioSection}>
        <h2>Our Work</h2>
        <div className={styles.portfolioGrid}>
          {[
            { title: "EV Training Program", icon: "bi-car-front" },
            { title: "Corporate Workshops", icon: "bi-building" },
            { title: "Technical Documentation", icon: "bi-file-text" },
            { title: "Online Learning Platform", icon: "bi-laptop" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={styles.portfolioItem}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.portfolioIcon}>
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div className={styles.portfolioOverlay}>
                <h3>{item.title}</h3>
                <p>View Details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <ul className={styles.faqList}>
          {faqData.map((faq, index) => (
            <li key={index} className={styles.faqListItem}>
              <button
                className={styles.faqQuestionBtn}
                onMouseEnter={() => setOpenFaq(index)}
                onMouseLeave={()=> setOpenFaq(index)}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.q}</span>
                <i className={`bi bi-chevron-${openFaq === index ? 'up' : 'down'} ${styles.faqIcon}`}></i>
              </button>
              {openFaq === index && (
                <div id={`faq-answer-${index}`} className={styles.faqAnswerList}>
                  <p>{faq.a}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <motion.div 
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div 
            className={styles.modalContent}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Contact Us</h2>
            <form className={styles.contactForm}>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" required />
              </label>
              <label>
                Address
                <input type="text" name="address" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Your Query
                <textarea name="query" rows={4} required />
              </label>
              <motion.button 
                type="submit" 
                className={styles.submitBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}