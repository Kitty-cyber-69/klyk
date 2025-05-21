import styles from './page.module.css';

export default function TestimonialsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Our Impact</h1>
        <p className={styles.subtitle}>Trusted by Industry Leaders and Educational Institutions</p>
      </section>

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Training Programs Delivered</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10,000+</div>
            <div className={styles.statLabel}>Professionals Trained</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>Client Satisfaction Rate</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Corporate Partners</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <i className="bi bi-quote"></i>
            </div>
            <p className={styles.testimonialText}>
              "The EV training program provided by KLYK has been instrumental in upskilling our technical team. 
              The content is comprehensive, up-to-date, and delivered in an engaging manner. Our team's performance 
              has improved significantly since implementing their training modules."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}></div>
              <div className={styles.authorInfo}>
                <h4>Sarah Johnson</h4>
                <p>Technical Director, AutoTech Solutions</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <i className="bi bi-quote"></i>
            </div>
            <p className={styles.testimonialText}>
              "As an educational institution, we were looking for high-quality EV training content that would 
              engage our students. KLYK's curriculum exceeded our expectations with its practical approach and 
              industry-relevant content. The online learning platform is intuitive and user-friendly."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}></div>
              <div className={styles.authorInfo}>
                <h4>Dr. Michael Chen</h4>
                <p>Dean of Engineering, Tech University</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <i className="bi bi-quote"></i>
            </div>
            <p className={styles.testimonialText}>
              "The corporate training program was perfectly tailored to our needs. The instructors were 
              knowledgeable, and the hands-on sessions were invaluable. We've seen a marked improvement in 
              our team's EV diagnostic capabilities."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}></div>
              <div className={styles.authorInfo}>
                <h4>Robert Williams</h4>
                <p>Service Manager, EV Motors Inc.</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <i className="bi bi-quote"></i>
            </div>
            <p className={styles.testimonialText}>
              "The technical documentation and visual aids provided by KLYK have been game-changers for our 
              training department. The materials are clear, comprehensive, and perfectly aligned with industry 
              standards."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}></div>
              <div className={styles.authorInfo}>
                <h4>Lisa Martinez</h4>
                <p>Training Coordinator, Global Auto Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className={styles.clientsSection}>
        <h2>Trusted By Industry Leaders</h2>
        <div className={styles.clientLogos}>
          <div className={styles.logoPlaceholder}>AutoTech Solutions</div>
          <div className={styles.logoPlaceholder}>Tech University</div>
          <div className={styles.logoPlaceholder}>EV Motors Inc.</div>
          <div className={styles.logoPlaceholder}>Global Auto Group</div>
          <div className={styles.logoPlaceholder}>Future Mobility</div>
        </div>
      </section>
    </div>
  );
} 