import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="h-screen flex flex-col justify-center">
      <div className="max-w-3xl">
        <p className="text-secondary mb-2">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-lightText mb-2">
          Aishanee Sinha
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-darkText mb-6">
          Data Analytics Graduate Student
        </h2>
        <p className="text-darkText text-lg max-w-2xl mb-8">
          I'm a Data Analytics student at San Jose State University, passionate about transforming raw data into actionable insights. 
          Specializing in machine learning, statistical analysis, and data visualization to solve complex business problems.
        </p>
        
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            className="group border-2 border-secondary text-secondary px-6 py-3 flex items-center hover:bg-secondary hover:text-primary duration-300"
          >
            View Resume
          </a>
          <Link
            to="projects"
            smooth
            duration={500}
            className="group border-2 border-lightText px-6 py-3 flex items-center hover:bg-lightText hover:text-primary duration-300"
          >
            View Work
            <ArrowDownIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 