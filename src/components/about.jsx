import React from 'react';

const About = () => (
  <div>
    <div className="lg:container lg:mx-auto mx-4 bg-white mt-16 lg:mt-32" id="about" name="about" data-aos="fade-up">
      <div className="lg:grid grid-cols-12 justify-between items-center">
        <div className="hidden lg:block lg:col-span-5" id="photo" name="photo">
          <img src="/assets/photo.svg" alt="my-pic" />
        </div>
        <div className="lg:col-span-7" id="about-me" name="about-me">
          <p className="font-montserrat-bold text-2xl lg:text-4xl text-pink-300 text-center lg:text-start">About Me</p>
          <div className="lg:hidden flex justify-center my-2" id="photo" name="photo">
            <img src="/assets/photo.svg" alt="my-pic" className="w-80" />
          </div>
          <p className="font-montserrat-medium lg:text-xl text-black-100 my-4 text-justify">
            Software developer with a strong passion and experience in web and mobile development. 
            Proficient in React, JavaScript, HTML, CSS, and Git. Always eager to learn new technologies and trends. 
            I am seeking a challenging role where I can contribute my technical skills and creativity to 
            drive digital growth for a dynamic organization.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
