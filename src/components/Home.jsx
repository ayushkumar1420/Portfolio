import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section id="home" className="home-section container">
      <div className="home-content animate-fade-up">
        <h3 className="greeting">Hello, I'm</h3>
        <h1 className="name">Ayush Kumar</h1>
        <h2 className="role">I'm a Full Stack Developer</h2>
        <p className="description">
          I build beautiful, interactive, and high-performance web applications.
          Crafting immersive digital experiences with cutting-edge technology. Turning ideas into an
          elegant, user-centered solutions.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
