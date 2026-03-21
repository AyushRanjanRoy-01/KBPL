import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section 
      style={{
        padding: '8rem 0',
        backgroundColor: '#e8f1f5',
      }}
    >
      <div className="container" ref={ref}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          {/* Main Headline */}
          <h2 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '300',
              lineHeight: '1.4',
              color: '#2c5f7c',
              marginBottom: '3rem',
              letterSpacing: '-0.01em'
            }}
          >
            A legacy of over 40 years of continuous excellence at the service of infrastructure development
          </h2>

          {/* Content Paragraphs */}
          <div 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#2c5f7c'
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ fontWeight: '600' }}>Karnawati Builders Private Limited</strong> is a trusted name in infrastructure development, specialized in{' '}
              <strong style={{ fontWeight: '600' }}>designing and executing innovative government projects</strong> for{' '}
              <strong style={{ fontWeight: '600' }}>roads, buildings, bridges, and public infrastructure</strong>.
            </p>

            <p style={{ margin: 0 }}>
              Karnawati Builders' solutions, <strong style={{ fontWeight: '600' }}>established since 1982</strong>, are developed entirely in-house and cover every phase of the construction process: from project design to execution of civil, structural, and architectural components, to quality assurance, safety compliance, and timely delivery using modern construction technologies and methodologies.
            </p>

            <p style={{ margin: 0 }}>
              <strong style={{ fontWeight: '600' }}>Our goal is to help our Communities grow</strong> through the Results achieved by working with Us and our expertise! Our greatest satisfaction is seeing communities thrive when what we designed and built TOGETHER comes to life.
            </p>
          </div>

          {/* Decorative Line */}
          <div 
            className={`animate-on-scroll delay-400 ${isVisible ? 'is-visible' : ''}`}
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#2c5f7c',
              opacity: '0.2',
              marginTop: '4rem'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
