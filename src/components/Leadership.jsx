import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Quote } from 'lucide-react';

const AvatarIcon = ({ initials, color }) => (
  <div style={{
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${color}, var(--color-primary))`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    border: '4px solid var(--color-background)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '0.05em',
    flexShrink: 0
  }}>
    {initials}
  </div>
);

const leaders = [
  {
    name: 'Mr. X. Sharma',
    role: 'Managing Director',
    quote: "Our 40-year legacy is built on a foundation of trust, uncompromising quality, and the relentless drive to build a better Bihar for future generations.",
    initials: 'XS',
    color: '#1a237e',
    delay: ''
  },
  {
    name: 'Mr. Y. Verma',
    role: 'Director',
    quote: "We don't just execute government contracts; we deliver critical infrastructure that empowers communities and accelerates regional economic growth.",
    initials: 'YV',
    color: '#b8860b',
    delay: 'delay-200'
  }
];

const Leadership = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section section-bg-light" id="leadership">
      <div className="container" ref={ref}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ fontSize: '2.5rem' }}>
            Meet Our Visionaries
          </h2>
          <div
            className={`animate-on-scroll delay-100 ${isVisible ? 'is-visible' : ''}`}
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: 'var(--color-accent)',
              margin: '0 auto'
            }}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`animate-on-scroll ${leader.delay} ${isVisible ? 'is-visible' : ''}`}
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '2.5rem',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <Quote
                size={48}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  color: 'var(--color-border)',
                  opacity: 0.5
                }}
              />

              <AvatarIcon initials={leader.initials} color={leader.color} />

              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.5rem' }}>{leader.name}</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '1.5rem' }}>
                {leader.role}
              </p>

              <p style={{ fontStyle: 'italic', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                "{leader.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
