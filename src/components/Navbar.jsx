import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(248, 246, 242, 0.8)' : 'rgba(248, 246, 242, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1rem 0',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: scrolled ? '1.25rem' : '1.5rem',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            color: 'var(--color-ink)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            KBPL
          </span>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: scrolled ? '1.5rem' : '2rem',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <a 
            href="#about"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: scrolled ? '0.875rem' : '0.9rem',
              fontWeight: '400',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              opacity: 0.8
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
          >
            About
          </a>
          <a 
            href="#projects"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: scrolled ? '0.875rem' : '0.9rem',
              fontWeight: '400',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              opacity: 0.8
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
          >
            Projects
          </a>
          <a
            href="#leadership"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: scrolled ? '0.875rem' : '0.9rem',
              fontWeight: '400',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              opacity: 0.8
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
          >
            Leadership
          </a>
          <a 
            href="#contact"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: scrolled ? '0.875rem' : '0.9rem',
              fontWeight: '500',
              color: 'var(--color-white)',
              backgroundColor: 'var(--color-ink)',
              padding: scrolled ? '0.5rem 1.25rem' : '0.625rem 1.5rem',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              borderRadius: '20px',
              opacity: 0.9
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
