import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectPlaceholder = ({ index, color }) => (
  <div style={{
    width: '100%',
    height: '100%',
    background: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(44, 95, 124, 0.15)',
    fontSize: '4rem',
    fontWeight: '800',
    fontFamily: 'var(--font-heading)'
  }}>
    {index}
  </div>
);

const allProjects = [
  {
    id: 1,
    title: 'Project X-101',
    category: 'Category A',
    color: '#e8f1f5',
    description: 'Dummy description for project X-101. Placeholder text for construction and infrastructure.'
  },
  {
    id: 2,
    title: 'Project Y-202',
    category: 'Category B',
    color: '#f9f7f4',
    description: 'Dummy description for project Y-202. Placeholder text for construction and infrastructure.'
  },
  {
    id: 3,
    title: 'Project Z-303',
    category: 'Category A',
    color: '#f4f5f7',
    description: 'Dummy description for project Z-303. Placeholder text for construction and infrastructure.'
  },
  {
    id: 4,
    title: 'Project X-404',
    category: 'Category C',
    color: '#ddc183',
    description: 'Dummy description for project X-404. Placeholder text for construction and infrastructure.'
  },
  {
    id: 5,
    title: 'Project Y-505',
    category: 'Category B',
    color: '#e8f1f5',
    description: 'Dummy description for project Y-505. Placeholder text for construction and infrastructure.'
  },
  {
    id: 6,
    title: 'Project Z-606',
    category: 'Category A',
    color: '#f9f7f4',
    description: 'Dummy description for project Z-606. Placeholder text for construction and infrastructure.'
  }
];

const ProjectShowcase = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Category A', 'Category B', 'Category C'];

  const filteredProjects = activeTab === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  return (
    <section className="section" id="projects">
      <div className="container" ref={ref}>
        <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <div 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: '300',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-accent)',
              marginBottom: '1.5rem'
            }}
          >
            — Selected Work
          </div>
          <h2 
            className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`} 
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: '300',
              lineHeight: '1.1',
              color: 'var(--color-ink)',
              marginBottom: '1.5rem'
            }}
          >
            Projects That{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Define Eras</span>
          </h2>
          <p 
            className={`animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}
            style={{ 
              maxWidth: '600px', 
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              fontWeight: '300',
              color: 'var(--color-ink-muted)',
              lineHeight: '1.75'
            }}
          >
            Explore our portfolio of 600+ government infrastructure projects that have transformed landscapes and empowered communities.
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
                padding: '0.75rem 1.75rem',
                backgroundColor: activeTab === category ? 'var(--color-ink)' : 'transparent',
                color: activeTab === category ? 'var(--color-white)' : 'var(--color-ink)',
                border: `1px solid ${activeTab === category ? 'var(--color-ink)' : 'var(--color-border)'}`,
                borderRadius: '0',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: '300',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
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
                backgroundColor: 'var(--color-surface)',
                borderRadius: '0',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <ProjectPlaceholder index={project.id} color={project.color} />
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'transparent',
                  color: 'var(--color-ink)',
                  padding: '0.5rem 1rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  fontSize: '0.7rem',
                  fontWeight: '300',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(8px)',
                  backgroundColor: 'rgba(255,255,255,0.9)'
                }}>
                  {project.category}
                </div>
              </div>
              
              <div style={{ padding: '2rem' }}>
                <h3 style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem', 
                  fontWeight: '400',
                  marginBottom: '0.75rem',
                  color: 'var(--color-ink)'
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-ink-muted)', 
                  marginBottom: 0, 
                  fontSize: '0.95rem',
                  fontWeight: '300',
                  lineHeight: '1.6'
                }}>
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
