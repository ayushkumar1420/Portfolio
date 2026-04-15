import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section id="home" className="home-section container">
      <div className="home-content animate-fade-up">
        <h3 className="greeting">Hello, I'm</h3>
        <h1 className="name">Your Name</h1>
        <h2 className="role">Creative Developer</h2>
        <p className="description">
          I build beautiful, interactive, and high-performance web applications.
          Let's create something truly amazing together.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
