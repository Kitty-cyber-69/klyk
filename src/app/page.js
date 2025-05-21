"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={styles.heroSection}>
      {/* Headline & Tagline */}
      <div className={styles.textBlock}>
        <h1 className={styles.headline}>Welcome to Klyk!</h1>
        <h3 className={styles.tagline}>
          Empowering Learning Through Expert-Led Training in Electrical Vehicle
          Technology
        </h3>
        {/* Call to Action */}
        <a
          href="#"
          className={styles.ctaBtn}
          onClick={handleOpenModal}
        >
          Contact Us Today!
        </a>
      </div>

      {/* Hero Illustration */}
      <div className={styles.heroImageWrapper}>
        <Image
          src="/hero.png" // Replace with your illustration
          alt="Hero Illustration"
          width={600}
          height={400}
          className={styles.heroImage}
          priority
        />
      </div>

      {/* Pop-up Registration Icon */}
      <Link
        href="/register"
        className={styles.popupIcon}
        title="Register for Advanced EV Certification Program"
      >
        <span className={styles.popupText}>
          Registration
          <br />
          Coming Soon!
        </span>
      </Link>

      {/* Contact Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
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
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}