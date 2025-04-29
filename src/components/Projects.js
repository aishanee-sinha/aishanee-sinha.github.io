import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "Data Analysis Project 1",
      description: "Description of your first major data analytics project",
      technologies: ["Python", "Pandas", "Matplotlib"],
    },
    {
      title: "Data Visualization Project",
      description: "Interactive dashboard showcasing data insights",
      technologies: ["Tableau", "SQL", "R"],
    },
    {
      title: "Machine Learning Project",
      description: "Predictive modeling and analysis project",
      technologies: ["scikit-learn", "TensorFlow", "Jupyter"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-lightText mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
              <p className="text-primary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary text-lightText px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 