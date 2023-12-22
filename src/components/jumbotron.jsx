import React from 'react';

const Jumbotron = () => (
  <div>
    <div className="bg-gradient-to-b from-pink-200 to-purple-200 lg:bg-hero-image bg-no-repeat bg-cover" id="home" data-aos="fade-down">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:container lg:mx-auto mx-4">
        <div className="col-span-1 lg:col-span-5" id="content-side">
          <div className="hidden lg:flex font-montserrat-bold text-sm md:text-md text-pink-300 lg:text-white capitalize lg:flex-row lg:justify-between py-5" name="navbar" id="navbar">
            <a href="#home" className="hover:text-lg">home</a>
            <a href="#about" className="hover:text-lg">about</a>
            <a href="#portfolios" className="hover:text-lg">portfolios</a>
            <a href="#competencies" className="hover:text-lg">competencies</a>
            <a href="#contact" className="hover:text-lg">contact</a>
          </div>
          <div className="font-montserrat-bold text-white text-3xl lg:text-6xl capitalize mt-8 lg:mt-24" name="large-text">
            <p>hi,</p>
            <p className="my-2 lg:my-4">
              I&#39;m
              {' '}
              <span className="bg-white px-2 lg:px-6 text-pink-300 lg:hover:text-7xl rounded-lg">rani</span>
            </p>
            <p>web developer</p>
          </div>
          <div className="font-montserrat-medium text-white lg:text-3xl my-6 lg:mt-10" name="smaller-text">
            <p>
              This site was made to share about my personal info including my projects,
              skills, experiences, etc.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-row-reverse lg:col-span-7 -mr-8" name="illustration-side">
          <img src="/assets/women-tech.svg" alt="hero-pic" />
        </div>
      </div>
    </div>
  </div>
);

export default Jumbotron;
