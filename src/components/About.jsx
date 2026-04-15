import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content glass-panel">
        <div className="about-text">
          <p>
            Hello! I'm a passionate developer with a love for creating interactive and 
            user-friendly web experiences. I constantly explore new technologies and 
            strive to build applications that are not only functional but also visually stunning.
          </p>
          <p>
            When I'm not coding, you can find me designing, reading up on the latest tech trends, 
            or working on some personal open-source projects.
          </p>
          
          <div className="stats">
            <div className="stat-item">
              <h3>3+</h3>
              <span>Years Exp.</span>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <span>Projects</span>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <span>Passion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
