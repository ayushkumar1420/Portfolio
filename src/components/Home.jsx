import React from 'react';
import './Home.css';
import MagicRings from './MagicRings';

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <MagicRings
          color="#A855F7"
          colorTwo="#6366F1"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>
      <div className="container" style={{ zIndex: 1, position: 'relative', width: '100%' }}>
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
      </div>
    </section>
  );
}
