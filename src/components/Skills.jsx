import React from 'react';
import './Skills.css';

const mySkills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 60 },
  { name: 'React & Redux', level: 75 },
  { name: 'Node.js', level: 60 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'SQL', level: 70 },
  { name: 'Python', level: 70 },
  { name: 'Flutter', level: 30 },
  { name: 'After Effect', level: 50 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section container">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container glass-panel">
        {mySkills.map(skill => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div 
                className="skill-bar-fill" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
