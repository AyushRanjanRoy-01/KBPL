import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-canvas)' }}>
      <div className="container" ref={ref}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Mission */}
          <div 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              padding: '3rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: '2px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              opacity: 0.05,
              color: 'var(--color-accent)',
              transform: 'rotate(15deg)'
            }}>
              <Target size={150} />
            </div>
            
            <Target size={40} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
            <h2 style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem', 
              fontWeight: '400',
              marginBottom: '1rem', 
              color: 'var(--color-ink)' 
            }}>Our Mission</h2>
            <p style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '1rem', 
              fontWeight: '300',
              color: 'var(--color-ink-muted)', 
              lineHeight: 1.75, 
              marginBottom: 0 
            }}>
              To deliver world-class infrastructure solutions that drive Bihar's development through unwavering commitment to quality, safety, and timely execution. We strive to build sustainable projects that enhance public welfare, create employment opportunities, and contribute to the socio-economic progress of our region.
            </p>
          </div>

          {/* Vision */}
          <div 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{
              padding: '3rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: '2px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              opacity: 0.05,
              color: 'var(--color-accent)',
              transform: 'rotate(-15deg)'
            }}>
              <Eye size={150} />
            </div>
            
            <Eye size={40} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
            <h2 style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem', 
              fontWeight: '400',
              marginBottom: '1rem', 
              color: 'var(--color-ink)' 
            }}>Our Vision</h2>
            <p style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '1rem', 
              fontWeight: '300',
              color: 'var(--color-ink-muted)', 
              lineHeight: 1.75, 
              marginBottom: 0 
            }}>
              To be Bihar's most trusted infrastructure development partner, recognized for excellence in execution, ethical practices, and transformative projects that shape communities. We envision a future where Karnawati Builders stands as a benchmark for quality construction and nation-building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
