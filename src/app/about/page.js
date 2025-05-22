'use client';

import styles from './page.module.css';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <ScrollReveal>
        <section className={styles.hero}>
          <h1>About Us</h1>
          <p className={styles.subtitle}>Empowering the future of electric vehicle technology through education</p>
        </section>
      </ScrollReveal>

      <section className={styles.story}>
        <ScrollReveal>
          <h2>Our Story</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p>
            Founded with a vision to bridge the gap between theoretical knowledge and practical skills in electric vehicle technology, 
            we have grown into a leading provider of specialized training content. Our journey began with a simple yet powerful mission: 
            to make high-quality EV technology education accessible to everyone.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p>
            Today, we specialize in crafting and delivering high-impact training content designed for both online and offline platforms, 
            focusing on real-world electrical vehicle technology skills. Our comprehensive curriculum covers everything from basic 
            maintenance to advanced diagnostic procedures, ensuring that our students are well-equipped for the evolving automotive industry.
          </p>
        </ScrollReveal>
      </section>

      <section className={styles.mission}>
        <ScrollReveal>
          <h2>Mission and Values</h2>
        </ScrollReveal>
        <div className={styles.values}>
          <ScrollReveal delay={0}>
            <div className={styles.valueCard}>
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest quality training content that meets industry standards and exceeds expectations.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>We continuously evolve our teaching methods and content to stay at the forefront of EV technology education.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.valueCard}>
              <h3>Accessibility</h3>
              <p>We believe in making quality education accessible to everyone, regardless of their background or location.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className={styles.valueCard}>
              <h3>Practical Learning</h3>
              <p>We emphasize hands-on experience and real-world applications in all our training programs.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.team}>
        <ScrollReveal>
          <h2>Our Team</h2>
        </ScrollReveal>
        <div className={styles.teamGrid}>
          <ScrollReveal delay={0}>
            <div className={styles.teamMember}>
              <div className={styles.placeholderImage}></div>
              <h3>John Doe</h3>
              <p className={styles.role}>Lead Instructor</p>
              <p>20+ years of experience in automotive technology</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className={styles.teamMember}>
              <div className={styles.placeholderImage}></div>
              <h3>Jane Smith</h3>
              <p className={styles.role}>Technical Director</p>
              <p>Certified EV specialist with extensive industry experience</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.teamMember}>
              <div className={styles.placeholderImage}></div>
              <h3>Mike Johnson</h3>
              <p className={styles.role}>Curriculum Developer</p>
              <p>Expert in educational content creation and technical training</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
} 