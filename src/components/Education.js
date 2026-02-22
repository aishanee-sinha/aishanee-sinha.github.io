import React from 'react';

const educations = [
  {
    degree: "MS in Applied Data Intelligence",
    school: "San Jose State University",
    year: "May 2026"
  },
  {
    degree: "MS in Economics",
    school: "Indira Gandhi Institute of Development Research",
    year: "Jul 2020"
  },
  {
    degree: "BE in Electronics and Communication Engineering",
    school: "Jadavpur University",
    year: "Aug 2017"
  }
];

const Education = () => (
  <section id="education" className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-lightText mb-12 text-center">Education</h2>
      <div className="bg-secondary rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
        <div className="space-y-4">
          {educations.map((edu, idx) => (
            <div key={idx} className="bg-primary rounded-lg p-4">
              <h3 className="text-xl font-bold text-lightText mb-2">{edu.degree}</h3>
              <div className="text-lg font-bold text-lightText mb-1">{edu.school}</div>
              <div className="text-sm text-lightText">{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
