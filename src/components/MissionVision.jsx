import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section-bg-dark" style={{ padding: '6rem 0' }}>
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
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--border-radius)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              opacity: 0.1,
              transform: 'rotate(15deg)'
            }}>
              <Target size={150} />
            </div>
            
            <Target size={40} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.8, marginBottom: 0 }}>
              To deliver superior quality infrastructure projects that stand the test of time. We are committed to transparency, engineering excellence, and safety, ensuring every project contributes positively to the community and our nation's progress.
            </p>
          </div>

          {/* Vision */}
          <div 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{
              padding: '3rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--border-radius)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              opacity: 0.1,
              transform: 'rotate(-15deg)'
            }}>
              <Eye size={150} />
            </div>
            
            <Eye size={40} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Vision</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.8, marginBottom: 0 }}>
              To be the most trusted and preeminent construction partner in Bihar, recognized for our legacy of reliability, innovative solutions, and unwavering dedication to building a stronger, more connected future for the state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
