import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="page-load"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--color-canvas)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1000px' }}>
          {/* Company Name - Subtle */}
          <div 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--color-ink-muted)',
              marginBottom: '1rem',
              letterSpacing: '0.05em',
              opacity: 0.7
            }}
          >
            Karnawati Builders Pvt Ltd
          </div>

          {/* Main Heading - Apple Style */}
          <h1 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`} 
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              color: 'var(--color-ink)',
              letterSpacing: '-0.025em'
            }}
          >
            Building the future.
            <br />
            <span style={{ 
              fontWeight: '400',
              color: 'var(--color-ink-muted)'
            }}>
              One project at a time.
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`animate-on-scroll delay-400 ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              fontSize: '1.25rem',
              fontFamily: 'var(--font-body)',
              fontWeight: '400',
              color: 'var(--color-ink-muted)', 
              marginBottom: '2.5rem',
              maxWidth: '600px',
              lineHeight: '1.5'
            }}
          >
            Delivering precision engineering across 600+ government infrastructure projects since 1982.
          </p>
          
          <div className={`animate-on-scroll delay-600 ${isVisible ? 'is-visible' : ''}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--color-ink)',
              color: 'var(--color-white)',
              textDecoration: 'none',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '500',
              fontFamily: 'var(--font-body)',
              transition: 'all 0.2s ease',
              transform: 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.backgroundColor = 'rgba(26, 25, 22, 0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'var(--color-ink)';
            }}
            >
              View Our Work
            </a>
            <a href="#about" style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              padding: '0.875rem 2rem',
              backgroundColor: 'transparent',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '500',
              fontFamily: 'var(--font-body)',
              border: '2px solid var(--color-ink)',
              transition: 'all 0.2s ease',
              transform: 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.backgroundColor = 'var(--color-ink)';
              e.currentTarget.style.color = 'var(--color-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-ink)';
            }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
