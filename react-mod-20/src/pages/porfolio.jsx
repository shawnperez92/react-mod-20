import React from 'react';
import './portfolio.css';

const projects = [
  {
    title: 'Project 1',
    image: 'path/to/image1.jpg',
    deployedLink: 'https://project1.com',
    githubLink: 'https://github.com/username/project1',
  },
  // Add more projects here
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
