'use client';

import styles from './page.module.css';
import CountUp from '../components/CountUp';
import ScrollReveal from '../components/ScrollReveal';

export default function TestimonialsPage() {
  return (
    <div className={styles.container}>
      <ScrollReveal>
        <section className={styles.hero}>
          <h1>Our Impact</h1>
          <p className={styles.subtitle}>Trusted by Industry Leaders and Educational Institutions</p>
        </section>
      </ScrollReveal>

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <ScrollReveal delay={0}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <CountUp end="500" suffix="+" />
              </div>
              <div className={styles.statLabel}>Training Programs Delivered</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <CountUp end="10000" suffix="+" />
              </div>
              <div className={styles.statLabel}>Professionals Trained</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <CountUp end="95" suffix="%" />
              </div>
              <div className={styles.statLabel}>Client Satisfaction Rate</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <CountUp end="50" suffix="+" />
              </div>
              <div className={styles.statLabel}>Corporate Partners</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <ScrollReveal>
          <h2>What Our Clients Say</h2>
        </ScrollReveal>
        <div className={styles.testimonialsGrid}>
          <ScrollReveal delay={0}>
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
          </ScrollReveal>

          <ScrollReveal delay={200}>
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
          </ScrollReveal>

          <ScrollReveal delay={400}>
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
          </ScrollReveal>

          <ScrollReveal delay={600}>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className={styles.clientsSection}>
        <ScrollReveal>
          <h2>Trusted By Industry Leaders</h2>
        </ScrollReveal>
        <div className={styles.clientLogos}>
          <ScrollReveal delay={0}>
            <div className={styles.logoCard}>
              <img 
                src="/images/clients/autotech.png" 
                alt="AutoTech Solutions" 
                className={styles.logoImage}
              />
              <p className={styles.companyName}>AutoTech Solutions</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.logoCard}>
              <img 
                src="/images/clients/techuniversity.png" 
                alt="Tech University" 
                className={styles.logoImage}
              />
              <p className={styles.companyName}>Tech University</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className={styles.logoCard}>
              <img 
                src="/images/clients/evmotors.png" 
                alt="EV Motors Inc." 
                className={styles.logoImage}
              />
              <p className={styles.companyName}>EV Motors Inc.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className={styles.logoCard}>
              <img 
                src="/images/clients/globalauto.png" 
                alt="Global Auto Group" 
                className={styles.logoImage}
              />
              <p className={styles.companyName}>Global Auto Group</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={800}>
            <div className={styles.logoCard}>
              <img 
                src="/images/clients/futuremobility.png" 
                alt="Future Mobility" 
                className={styles.logoImage}
              />
              <p className={styles.companyName}>Future Mobility</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
} 