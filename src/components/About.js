import React from 'react';

const About = () => {
  return (
    <div name="about" className="min-h-screen py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold border-b-4 border-secondary inline">About Me</h2>
        
        <div className="mt-8 grid gap-8">
          <p className="text-darkText">
            Data Scientist and Generative AI Specialist with 4+ years of experience architecting machine learning and AI-driven solutions that deliver measurable business impact. Proven expertise in transforming complex challenges into streamlined automation through predictive modeling in financial services (fraud mitigation, portfolio analytics), deploying production-ready RAG systems and autonomous agents. Strong track record of engineering solutions that have driven $800k+ in value creation and efficiency gains (80% process improvements). Expert in bridging advanced technical capabilities (Python, Scikit-learn, LLMs, PySpark, fine-tuning) with strategic business outcomes (A/B testing, KPI optimization, revenue uplift). MS in Applied Data Intelligence. Passionate about leveraging cutting-edge AI/ML technologies to solve business bottlenecks and drive executive-level insights.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-lightText">Education</h3>
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-secondary">Master of Science in Data Analytics</p>
                <p className="text-darkText">San Jose State University</p>
                <p className="text-darkText">Expected Graduation: 2026</p>
              </div>
              <div>
                <p className="text-secondary">Master of Science in Economics</p>
                <p className="text-darkText">Indira Gandhi Institute of Development Research</p>
                <p className="text-darkText">2020</p>
              </div>
              <div>
                <p className="text-secondary">Bachelor's Degree</p>
                <p className="text-darkText">Jadavpur University</p>
                <p className="text-darkText">2017</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-lightText">Career Goals</h3>
            <p className="text-darkText">
              I aim to leverage my analytical skills and technical expertise to solve complex business problems 
              through data-driven solutions. My focus areas include:
            </p>
            <ul className="list-disc list-inside text-darkText mt-2 ml-4 space-y-2">
              <li>Predictive Analytics and Machine Learning</li>
              <li>Business Intelligence and Data Visualization</li>
              <li>Big Data Analytics</li>
              <li>Statistical Modeling and Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 