import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const allProjects = [
  {
    id: 1,
    title: 'Ganga Bridge Extension',
    category: 'Government Infrastructure',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A 2.5km extension facilitating major transport routes.'
  },
  {
    id: 2,
    title: 'Samastipur Medical College',
    category: 'Government Infrastructure',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'State-of-the-art healthcare facility spanning 50 acres.'
  },
  {
    id: 3,
    title: 'National Highway 122',
    category: 'Government Infrastructure',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Four-lane expansion project completed 3 months ahead of schedule.'
  },
  {
    id: 4,
    title: 'Royal Enclave',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Premium residential complex with modern amenities.'
  },
  {
    id: 5,
    title: 'KBPL IT Park',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Tech hub designed for sustainability and efficiency.'
  },
  {
    id: 6,
    title: 'District Judiciary Building',
    category: 'Government Infrastructure',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Modern administrative complex with heritage design elements.'
  }
];

const ProjectShowcase = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Government Infrastructure', 'Commercial', 'Residential'];

  const filteredProjects = activeTab === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  return (
    <section className="section" id="projects">
      <div className="container" ref={ref}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ fontSize: '2.5rem' }}>
            Our Legacy of Excellence
          </h2>
          <div 
            className={`animate-on-scroll delay-100 ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              width: '80px', 
              height: '4px', 
              backgroundColor: 'var(--color-accent)', 
              margin: '0 auto 2rem auto' 
            }}
          />
          <p 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}
          >
            Explore our portfolio of landmark projects that have reshaped the infrastructure and community of Bihar.
          </p>
        </div>

        {/* Categories Tab */}
        <div 
          className={`animate-on-scroll delay-300 ${isVisible ? 'is-visible' : ''}`}
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            marginBottom: '3rem' 
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: activeTab === category ? 'var(--color-primary)' : 'transparent',
                color: activeTab === category ? 'var(--color-white)' : 'var(--color-text-main)',
                border: `2px solid ${activeTab === category ? 'var(--color-primary)' : 'var(--color-border)'}`,
                borderRadius: '30px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                transition: 'all var(--transition-fast)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`animate-on-scroll is-visible`} // Always visible once rendered to avoid weird tab switching glitches
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
                cursor: 'pointer',
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-white)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {project.category}
                </div>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: 0, fontSize: '0.95rem' }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
