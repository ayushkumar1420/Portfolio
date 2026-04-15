import React from 'react';
import './Projects.css';

const dummyProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard with beautiful charts and real-time data integration.',
    tags: ['React', 'Chart.js', 'Firebase'],
  },
  {
    id: 3,
    title: 'AI Companion App',
    description: 'An AI chatbot interface with natural language processing capabilities.',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {dummyProjects.map(project => (
          <div key={project.id} className="project-card glass-panel">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
