import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectPlaceholder = ({ index, color }) => (
  <div style={{
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${color}, #1a237e)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.2)',
    fontSize: '4rem',
    fontWeight: '800'
  }}>
    {index}
  </div>
);

const allProjects = [
  {
    id: 1,
    title: 'Project X-101',
    category: 'Category A',
    color: '#1e3a8a',
    description: 'Dummy description for project X-101. Placeholder text for construction and infrastructure.'
  },
  {
    id: 2,
    title: 'Project Y-202',
    category: 'Category B',
    color: '#1e40af',
    description: 'Dummy description for project Y-202. Placeholder text for construction and infrastructure.'
  },
  {
    id: 3,
    title: 'Project Z-303',
    category: 'Category A',
    color: '#1d4ed8',
    description: 'Dummy description for project Z-303. Placeholder text for construction and infrastructure.'
  },
  {
    id: 4,
    title: 'Project X-404',
    category: 'Category C',
    color: '#2563eb',
    description: 'Dummy description for project X-404. Placeholder text for construction and infrastructure.'
  },
  {
    id: 5,
    title: 'Project Y-505',
    category: 'Category B',
    color: '#3b82f6',
    description: 'Dummy description for project Y-505. Placeholder text for construction and infrastructure.'
  },
  {
    id: 6,
    title: 'Project Z-606',
    category: 'Category A',
    color: '#60a5fa',
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
                <ProjectPlaceholder index={project.id} color={project.color} />
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
