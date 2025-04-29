import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: ["Python", "R", "SQL", "Excel", "Statistical Analysis"],
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "D3.js"],
    },
    {
      title: "Machine Learning",
      skills: ["scikit-learn", "TensorFlow", "Neural Networks", "Regression", "Classification"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Jupyter", "AWS", "Docker", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-lightText mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="bg-primary text-lightText px-3 py-1 rounded-full text-sm text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 