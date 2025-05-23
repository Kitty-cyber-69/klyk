'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from './TeamSection.module.css';
import ScrollReveal from './ScrollReveal';

const supabase = createClient(
  'https://netynunpwjzbvohdemci.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('id');

        if (error) throw error;
        setTeamMembers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <section className={styles.teamSection}>
        <ScrollReveal>
          <h2>Our Team</h2>
        </ScrollReveal>
        <div className={styles.teamGrid}>
          <div className={styles.loading}>Loading team members...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.teamSection}>
        <ScrollReveal>
          <h2>Our Team</h2>
        </ScrollReveal>
        <div className={styles.teamGrid}>
          <div className={styles.error}>Error loading team members: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.teamSection}>
      <ScrollReveal>
        <h2>Our Team</h2>
      </ScrollReveal>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <ScrollReveal key={member.id} delay={index * 100}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={member.image_url} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.designation}</p>
              <p>{member.bio}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
} 