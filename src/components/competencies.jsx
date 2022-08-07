import React from 'react';
import Skills from '../assets/skills.svg';

const Competencies = () => (
  <div>
    <div className="lg:container lg:mx-auto mx-4 bg-white mt-28 lg:my-32" id="competencies" data-aos="fade-up">
      <p className="text-center text-2xl lg:text-4xl font-montserrat-bold text-pink-300">Competencies</p>
      <div className="text-center lg:text-xl font-montserrat-medium text-black-100 my-4">
        <p className="max-w-lg mx-auto">
          These are some of programming languages and tools that i use to work on my projects.
        </p>
      </div>
      <img src={Skills} alt="skills" className="mx-auto my-8" />
    </div>
  </div>
);

export default Competencies;
