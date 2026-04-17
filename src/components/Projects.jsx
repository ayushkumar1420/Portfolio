import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'CampusConnect',
    description: 'A modern, web-based student portal designed to simplify and centralize campus interactions. It provides a seamless platform for students to register, log in, and access personalized dashboards.',
    tags: ['React', 'CSS', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Intelligence Attendance',
    description: 'An Automated Student Attendance Monitoring and Analytics System that uses facial recognition to automatically record, verify, and update student attendance, generating analytics for monitoring participation.',
    tags: ['React', 'Node.js', 'MongoDB', 'Face Recognition'],
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
        {projects.map(project => (
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
