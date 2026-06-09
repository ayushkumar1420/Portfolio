import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'CampusConnect',
    description: 'A modern, web-based student portal designed to simplify and centralize campus interactions. It provides a seamless platform for students to register, log in, and access personalized dashboards.',
    tags: ['HTML', 'React', 'CSS', 'Javascript', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Intelligence Attendance',
    description: 'An Automated Student Attendance Monitoring and Analytics System that uses facial recognition to automatically record, verify, and update student attendance, generating analytics for monitoring participation.',
    tags: ['React', 'MERN', 'MongoDB', 'webcapture.js', 'api.js'],
  },
  {
    id: 3,
    title: 'Neublix Saas',
    description: 'This full-stack application combines authentication, payments, AI processing, and a scalable database into a complete production-ready SaaS solution.',
    tags: ['Next.js', 'Typescript', 'Sentry', 'API routes', 'Neon', ],
  },
  {
    id: 4,
    title: 'Chat app',
    description: 'A full-stack real-time messaging platform built with the MERN stack (MongoDB, Express, React, Node.js) featuring secure authentication, real-time messaging with Socket.io, and modern UI design using Tailwind CSS.',
    tags: ['React.js', 'Cloudinary', 'Socket.io', 'API routes', 'MongoDB', ],
  },
  {
    id: 5,
    title: 'AI Second Brain',
    description: 'AI Second Brain is a personal knowledge management platform built with React, Firebase, and Gemini AI. Users can save notes, PDFs, and links, generate AI summaries, perform semantic searches, and chat with their own knowledge base using RAG, embeddings, and vector search.',
    tags: ['React.js', 'Google Gemini AI', 'Firebase', 'API routes', 'Neon', ],
  },
  {
    id: 6,
    title: 'Notice Board',
    description: 'A modern, full-stack Notice Board application built with Next.js, Tailwind CSS, and Prisma. It allows users to easily create, categorize (Exams, Events, General), and prioritize announcements. ',
    tags: ['Next.js', 'Node.js', 'Tailwind css', 'Neon', ],
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
