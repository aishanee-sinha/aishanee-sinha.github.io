import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["Python", "SQL", "Pandas", "NumPy", "SAS"],
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "XGBoost", "PyTorch", "Keras", "Decision Tree", "Random Forest", "A/B Testing", "Logistic Regression", "K-Means"],
    },
    {
      title: "Gen AI & LLMs",
      skills: ["LLM Fine-Tuning", "vLLMs", "RAG", "Agentic AI", "Pinecone", "MCP", "LangChain", "LangGraph"],
    },
    {
      title: "Cloud & Big Data",
      skills: ["AWS", "GCP", "Docker", "PySpark", "Snowflake", "dbt", "Airflow", "ETL/ELT", "CI/CD"],
    },
    {
      title: "Other Tools",
      skills: ["Tableau", "PowerBI", "Github", "Jira"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-lightText mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary text-lightText px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
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

export default Skills; 