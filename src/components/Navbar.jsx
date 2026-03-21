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
        position: 'relative',
        backgroundColor: 'var(--color-canvas)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1.5rem 0'
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
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            fontWeight: '400',
            letterSpacing: '0.15em',
            color: 'var(--color-ink)'
          }}>
            KBPL
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
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              position: 'relative',
              paddingBottom: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-ink)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            About
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '0',
              height: '1px',
              backgroundColor: 'var(--color-accent)',
              transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }} />
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
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              position: 'relative',
              paddingBottom: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-ink)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Projects
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '0',
              height: '1px',
              backgroundColor: 'var(--color-accent)',
              transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }} />
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
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              position: 'relative',
              paddingBottom: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-ink)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Leadership
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '0',
              height: '1px',
              backgroundColor: 'var(--color-accent)',
              transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }} />
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
              padding: '0.75rem 1.75rem',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              borderRadius: '0',
              transform: 'translateY(0)',
              boxShadow: '0 2px 4px rgba(181, 145, 90, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(181, 145, 90, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(181, 145, 90, 0.2)';
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
