import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Quote } from 'lucide-react';

const leaders = [
  {
    name: 'Mr. Madan Mohan Pandey',
    role: 'Managing Director',
    quote: "Our 40-year legacy is built on a foundation of trust, uncompromising quality, and the relentless drive to build a better Bihar for future generations.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400', // Professional placeholder
    delay: ''
  },
  {
    name: 'Mr. Atulya Kumar',
    role: 'Director',
    quote: "We don't just execute government contracts; we deliver critical infrastructure that empowers communities and accelerates regional economic growth.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400', // Professional placeholder
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
              
              <img 
                src={leader.image} 
                alt={leader.name} 
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1.5rem',
                  border: '4px solid var(--color-background)'
                }}
              />
              
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
