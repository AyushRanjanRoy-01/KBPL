import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Building2, Calendar, CheckCircle, MapPin } from 'lucide-react';

const stats = [
  { id: 1, icon: <Calendar size={32} />, value: '1982', label: 'Started', delay: '' },
  { id: 2, icon: <Building2 size={32} />, value: '2007', label: 'Registered', delay: 'delay-100' },
  { id: 3, icon: <CheckCircle size={32} />, value: '600+', label: 'Projects Completed', delay: 'delay-200' },
  { id: 4, icon: <MapPin size={32} />, value: 'Samastipur', label: 'Home Base', delay: 'delay-300' },
];

const LegacyCounter = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section 
      className="section-bg-dark"
      style={{
        padding: '4rem 0',
        borderTop: '4px solid var(--color-accent)'
      }}
    >
      <div className="container" ref={ref}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`animate-on-scroll ${stat.delay} ${isVisible ? 'is-visible' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{ color: 'var(--color-accent)' }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: '1rem', 
                  opacity: 0.8,
                  marginTop: '0.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyCounter;
