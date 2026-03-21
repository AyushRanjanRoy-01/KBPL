import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Building2, Calendar, CheckCircle, MapPin } from 'lucide-react';

const stats = [
  { id: 1, icon: <Calendar size={32} />, value: '1982', label: 'Established', delay: '' },
  { id: 2, icon: <Building2 size={32} />, value: '2007', label: 'Registered', delay: 'delay-100' },
  { id: 3, icon: <CheckCircle size={32} />, value: '600+', label: 'Projects Completed', delay: 'delay-200' },
  { id: 4, icon: <MapPin size={32} />, value: 'Samastipur', label: 'Bihar', delay: 'delay-300' },
];

const LegacyCounter = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section 
      style={{
        padding: '5rem 0',
        backgroundColor: 'var(--color-ink)',
        borderTop: '1px solid var(--color-accent)'
      }}
    >
      <div className="container" ref={ref}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0',
          textAlign: 'center'
        }}>
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`animate-on-scroll ${stat.delay} ${isVisible ? 'is-visible' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '2rem 1.5rem',
                borderRight: index < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                minHeight: '180px'
              }}
            >
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: '300', 
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
                color: 'var(--color-accent)'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyCounter;
