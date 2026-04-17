import React from 'react';
import './About.css';
import ayushImg from '../assets/ayush.png';

export default function About() {
  return (
    <section id="about" className="about-section container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content glass-panel">
        <div className="about-text">
          <p>
            Hi, I’m Ayush Kumar, a pre-final year B.Tech student in Information Technology with a strong focus on Full Stack Development and Data Structures & Algorithms in C++.
            I regularly practice data structures and algorithms in C++, which has strengthened my logical thinking, coding efficiency, and ability to approach complex problems in a structured way.
            On the development side, I work on full-stack applications using HTML, CSS, JavaScript, React, Next.js, and Express.js, along with databases like MongoDB, Supabase, and Firebase.
          </p>
          <p>
            I have hands-on experience building applications that include authentication systems, backend APIs, and admin dashboards.
            Apart from development, I also have experience in video editing and motion graphics, which enhances my creativity and helps me design better user interfaces and visual content.
          </p>

        </div>
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src={ayushImg} alt="about me image" />
          </div>
        </div>
      </div>
    </section>
  );
}
