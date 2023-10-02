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
          <p className="font-montserrat-medium lg:text-xl text-black-100 my-4 text-justify">
            Hello, my name is
            {' '}
            <span className="text-pink-300">Rani Meliyana Putri</span>
            . My friends also call me
            {' '}
            <span className="text-pink-300">Rani</span>
            . I am a fresh graduate in Computer Science with a strong passion
            and experience in web and mobile development, particularly with JavaScript and React.
            A person who has interest in exploring, learning, and implementing new technologies.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
