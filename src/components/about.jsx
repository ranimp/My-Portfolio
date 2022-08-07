import React from 'react';
import MyPhoto from '../assets/photo.svg';

const About = () => (
  <div>
    <div className="lg:container lg:mx-auto mx-4 bg-white mt-16 lg:mt-32" id="about" name="about" data-aos="fade-up">
      <div className="lg:grid grid-cols-12 justify-between items-center">
        <div className="hidden lg:block lg:col-span-5" id="photo" name="photo">
          <img src={MyPhoto} alt="my-pic" />
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
            . Undergraduate student who has an interest in software engineering, especially in
            web and mobile
            development. Currently at 7th semester at Institut Teknologi Kalimantan majoring
            Informatics. A person who likes to explore knowledge and experience at any chance
            and can work well in team. A person who think that experience from others is a
            lesson for ourselves in the future.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
