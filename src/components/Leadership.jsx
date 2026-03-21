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
    name: 'Mr. Madan Mohan Pandey',
    role: 'Managing Director',
    quote: "Our 40-year legacy is built on a foundation of trust, uncompromising quality, and the relentless drive to build a better Bihar for future generations.",
    initials: 'MP',
    color: '#4a7a96',
    delay: ''
  },
  {
    name: 'Mr. Atulya Kumar',
    role: 'Director',
    quote: "We don't just execute government contracts; we deliver critical infrastructure that empowers communities and accelerates regional economic growth.",
    initials: 'AK',
    color: '#c9a961',
    delay: 'delay-200'
  }
];

const Leadership = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section" id="leadership" style={{ backgroundColor: 'var(--color-canvas)', padding: '8rem 0' }}>
      <div className="container" ref={ref}>
        <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <div 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-accent)',
              marginBottom: '1.5rem'
            }}
          >
            — Leadership
          </div>
          <h2 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`} 
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: '300',
              lineHeight: '1.1',
              color: 'var(--color-ink)'
            }}
          >
            Built on Integrity.{' '}
            <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--color-accent)' }}>
              Led with Vision.
            </span>
          </h2>
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
                backgroundColor: 'var(--color-surface)',
                padding: '3.5rem 2.5rem',
                borderRadius: '0',
                border: '1px solid var(--color-border)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'border-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
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

              <h3 style={{ 
                marginBottom: '0.5rem', 
                fontSize: '1.5rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '400',
                color: 'var(--color-ink)'
              }}>
                {leader.name}
              </h3>
              <p style={{ 
                color: 'var(--color-accent)', 
                fontFamily: 'var(--font-body)',
                fontWeight: '500',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '2rem' 
              }}>
                {leader.role}
              </p>

              <p style={{ 
                fontStyle: 'italic', 
                fontFamily: 'var(--font-heading)',
                fontWeight: '300',
                color: 'var(--color-ink-muted)', 
                lineHeight: 1.8,
                fontSize: '1rem'
              }}>
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
