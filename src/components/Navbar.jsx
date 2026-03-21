import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        backgroundColor: scrolled ? 'rgba(248, 246, 242, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '1.25rem 0'
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
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: '600',
            letterSpacing: '0.2em',
            color: 'var(--color-ink)',
            textTransform: 'uppercase'
          }}>
            KARNAWATI
          </span>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.875rem',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'var(--color-accent)',
            letterSpacing: '0.05em'
          }}>
            Builders
          </span>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <a 
            href="#about"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink)'}
          >
            About
          </a>
          <a 
            href="#projects"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink)'}
          >
            Projects
          </a>
          <a 
            href="#leadership"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-ink)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink)'}
          >
            Leadership
          </a>
          <a 
            href="#contact"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-white)',
              backgroundColor: 'var(--color-accent)',
              padding: '0.625rem 1.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease',
              borderRadius: '0'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
