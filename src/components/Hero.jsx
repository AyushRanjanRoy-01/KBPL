import React, { useEffect, useState } from 'react';

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
        justifyContent: 'center',
        backgroundColor: 'var(--color-canvas)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          opacity: 0.4,
          filter: 'grayscale(30%)' // further softens the video giving focus to text
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Subtle Dark Overlay for contrast (since video is a filler) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1
        }}
      ></div>

      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%',
          textAlign: 'center'
        }}
      >
        {/* Company Name Only - Elegant and Focused */}
        <h1 
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: '600',
            color: 'white',
            marginBottom: '0',
            letterSpacing: '0.02em',
            lineHeight: '1.2',
            textShadow: '0 4px 24px rgba(0,0,0,0.3)'
          }}
        >
          Karnawati Builders
        </h1>
        
        <div 
          className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
          style={{ 
            fontFamily: 'var(--font-body)',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginTop: '0.5rem',
            textShadow: '0 2px 12px rgba(0,0,0,0.3)'
          }}
        >
          Private Limited
        </div>
      </div>
    </section>
  );
};

export default Hero;
