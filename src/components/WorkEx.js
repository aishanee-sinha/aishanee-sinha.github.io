import React from 'react';

const experiences = [
  {
    company: "PACCAR Financial Corporation, Bellevue, WA, US",
    role: "Business Systems and Data Management Intern",
    period: "May 2025 – Aug 2025",
    highlights: [
      "Enhanced marketing budget allocation and recommended optimal advertisement channels, platforms, ad types, placements, and featured slots through in-depth analysis of marketing leads data.",
      "Developed a Python-based tool leveraging text-mining to extract and visualize insights from auction PDF reports, enabling identification of pricing and market trends in used truck sales.",
      "Automated month-end reporting workflows with Python scripts, reducing manual effort by 80%.",
      "Designed an Inventory Dashboard in Tableau to perform data integrity checks and proactively flag potential data issues."
    ]
  },
  {
    company: "Citicorp Financial Services, Bengaluru, India",
    role: "Lead Data Analyst",
    period: "Aug 2020 – Aug 2024",
    highlights: [
      "Recognized as a semifinalist in Ignite 2023, Citi’s global ideation challenge, for proposing a strategic win-back campaign to re-engage 1.5MM recently lost customers, enabling cost-effective reacquisition.",
      "Analyzed consumer transaction data to create customer segments using K-means clustering, driving personalized offers and boosting campaign revenue by 20%. Designed competitive offers to retain customers, reducing attrition from 12% to 8.5%.",
      "Developed a Tableau dashboard for Citi US branches, supporting goal setting and performance monitoring.",
      "Refined campaign contact strategies, resulting in a $14.3MM increase in revenue.",
      "Automated monthly KPI reporting for 14+ retail campaigns, streamlining processes and reducing manual effort by 95%.",
      "Identified and excluded 'gamers' from campaign targeting, achieving an expense reduction of $0.8MM."
    ]
  }
];

const WorkEx = () => (
  <section id="workex" className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-lightText mb-12 text-center">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-secondary rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">{exp.company}</h3>
            <div className="text-lg text-lightText mb-1">{exp.role}</div>
            <div className="text-sm text-primary mb-4">{exp.period}</div>
            <ul className="list-disc list-inside text-primary space-y-2">
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkEx;
