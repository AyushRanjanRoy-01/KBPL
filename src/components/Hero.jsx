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
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'var(--color-canvas)',
        padding: '6rem 0',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1000px' }}>
          {/* Eyebrow Label */}
          <div 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--color-accent)',
              marginBottom: '1.5rem'
            }}
          >
            — Est. 1982 · Government Infrastructure Excellence
          </div>

          {/* Company Name - Hero */}
          <h1 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: '400',
              lineHeight: '1.05',
              marginBottom: '1rem',
              letterSpacing: '0.01em',
              color: 'var(--color-ink)',
              textShadow: '0 2px 4px rgba(26, 25, 22, 0.08)',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            Karnawati Builders
            <br />
            <span style={{ 
              fontSize: '0.65em',
              fontWeight: '300',
              letterSpacing: '0.15em',
              color: 'var(--color-accent)',
              display: 'inline-block',
              marginTop: '0.25rem'
            }}>
              PRIVATE LIMITED
            </span>
          </h1>

          {/* Tagline - Smaller */}
          <p 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
              fontWeight: '300',
              fontStyle: 'italic',
              lineHeight: '1.3',
              marginBottom: '2.5rem',
              color: 'var(--color-ink-muted)',
              letterSpacing: '-0.01em',
              maxWidth: '600px'
            }}
          >
            We Build What{' '}
            <span style={{ 
              color: 'var(--color-accent)',
              fontWeight: '400'
            }}>
              Endures
            </span>
          </p>
          
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
