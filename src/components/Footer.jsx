import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submission
    alert('Thank you for your inquiry. Our team will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <footer id="contact" style={{ padding: '8rem 0 2rem 0', position: 'relative', backgroundColor: 'var(--color-ink)', borderTop: '1px solid var(--color-accent)' }}>
        <div className="container" ref={ref}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            
            {/* Contact Info */}
            <div className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
              <h2 style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem', 
                fontWeight: '300',
                marginBottom: '2rem', 
                color: 'var(--color-white)' 
              }}>Get in Touch</h2>
              <p style={{ 
                fontFamily: 'var(--font-body)',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.7)', 
                marginBottom: '2rem', 
                maxWidth: '400px',
                lineHeight: '1.75' 
              }}>
                Partner with Karnawati Builders for your next landmark project. Reach out to our team to discuss your infrastructure needs.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin style={{ color: 'var(--color-accent)', marginTop: '0.25rem' }} />
                  <div>
                    <h4 style={{ 
                      fontFamily: 'var(--font-body)',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      color: 'var(--color-white)', 
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>Head Office</h4>
                    <p style={{ 
                      fontFamily: 'var(--font-body)',
                      fontWeight: '300',
                      color: 'rgba(255,255,255,0.6)', 
                      margin: 0,
                      lineHeight: '1.6' 
                    }}>Tajpurt Road,<br />Samastipur - 848101,<br />Bihar, India</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone style={{ color: 'var(--color-accent)' }} />
                  <div>
                    <p style={{ 
                      fontFamily: 'var(--font-body)',
                      fontWeight: '300',
                      color: 'rgba(255,255,255,0.6)', 
                      margin: 0 
                    }}>+00 00000 00000</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail style={{ color: 'var(--color-accent)' }} />
                  <div>
                    <p style={{ 
                      fontFamily: 'var(--font-body)',
                      fontWeight: '300',
                      color: 'rgba(255,255,255,0.6)', 
                      margin: 0 
                    }}>info@karnawatibuilders.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div 
              className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '2.5rem',
                borderRadius: '0',
                border: '1px solid var(--color-border)',
                color: 'var(--color-ink)'
              }}
            >
              <h3 style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: '400',
                marginBottom: '1.5rem', 
                color: 'var(--color-ink)' 
              }}>Quick Inquiry</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Project Details / Message</label>
                  <textarea 
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                  Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-body)',
            fontWeight: '300',
            fontSize: '0.75rem',
            letterSpacing: '0.05em'
          }}>
            &copy; {new Date().getFullYear()} Karnawati Builders Private Limited. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/0000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1000,
          transition: 'transform var(--transition-fast)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
};

export default Footer;
