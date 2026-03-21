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
      className="hero section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'var(--color-canvas)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '900px' }}>
          {/* Eyebrow Label */}
          <div 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-ink-muted)',
              marginBottom: '2rem'
            }}
          >
            — Est. 1982 · Government Infrastructure Excellence
          </div>

          <h1 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3.5rem, 7vw, 7.5rem)',
              fontWeight: '300',
              lineHeight: '0.9',
              marginBottom: '2rem',
              color: 'var(--color-ink)',
              letterSpacing: '-0.02em'
            }}
          >
            We Build What{' '}
            <span style={{ 
              fontStyle: 'italic', 
              color: 'var(--color-accent)',
              display: 'block',
              marginTop: '0.5rem'
            }}>
              Endures
            </span>
          </h1>
          
          <p 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              fontWeight: '300',
              marginBottom: '3rem',
              color: 'var(--color-ink-muted)',
              maxWidth: '580px',
              lineHeight: '1.75'
            }}
          >
            From foundation to completion — Karnawati Builders delivers precision engineering and architectural excellence across 600+ government infrastructure projects.
          </p>
          
          <div className={`animate-on-scroll delay-400 ${isVisible ? 'is-visible' : ''}`} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#projects" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
              View Our Work
            </a>
            <a href="#about" style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: '400',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
            >
              Our Story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
