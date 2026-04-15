import React from 'react';
import './Skills.css';

const dummySkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React & Redux', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'CSS / SCSS', level: 95 },
  { name: 'Python', level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section container">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container glass-panel">
        {dummySkills.map(skill => (
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
