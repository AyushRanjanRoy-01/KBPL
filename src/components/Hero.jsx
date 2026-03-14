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
        backgroundImage: `linear-gradient(135deg, #1a237e 0%, #0d1242 50%, #000000 100%)`,
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        color: 'var(--color-white)',
        paddingTop: '80px', // For navbar overlap if any
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
              marginBottom: '1.5rem',
              color: 'var(--color-white)',
              textShadow: '0 4px 12px rgba(0,0,0,0.3)',
              lineHeight: 1.1
            }}
          >
            Building X Future Since Y.
          </h1>
          
          <p 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2.5rem',
              opacity: 0.9,
              maxWidth: '600px',
              lineHeight: 1.6
            }}
          >
            A legacy of 600+ successful government projects delivered with precision, quality, and an unwavering commitment to our community.
          </p>
          
          <div className={`animate-on-scroll delay-400 ${isVisible ? 'is-visible' : ''}`}>
            <a href="#projects" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
              Explore Our Projects
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
