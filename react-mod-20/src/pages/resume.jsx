import React from 'react';
import './resume.css';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="path/to/your/resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
        <li>Git/GitHub</li>
      </ul>
    </section>
  );
}

export default Resume;
