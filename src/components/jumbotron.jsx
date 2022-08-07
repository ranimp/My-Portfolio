import React, { useState } from 'react';
import Illustration from '../assets/women-tech.svg';
import MyPhoto from '../assets/photo.svg';

const Jumbotron = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <div className="bg-gradient-to-b from-pink-200 to-purple-200 lg:bg-hero-image bg-no-repeat bg-cover" id="home" data-aos="fade-down">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:container lg:mx-auto mx-4">
          <div className="col-span-1 lg:col-span-5" id="content-side">
            <div className="w-full relative flex justify-between">
              <button
                className="text-white cursor-pointer text-xl leading-none pt-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg className="w-6 h-6" fill="#FFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              </button>
            </div>
            <div
              className={
              `lg:hidden flex-grow items-center${
                navbarOpen ? 'flex' : ' hidden'}`
            }
              id="example-navbar-danger"
            >
              <div className="font-montserrat-bold text-sm md:text-md text-white capitalize flex flex-col lg:flex-row lg:justify-between py-2" name="navbar" id="navbar">
                <a href="#home" className="hover:text-lg">home</a>
                <a href="#about" className="hover:text-lg">about</a>
                <a href="#portfolios" className="hover:text-lg">portfolios</a>
                <a href="#competencies" className="hover:text-lg">competencies</a>
                <a href="#contact" className="hover:text-lg">contact</a>
              </div>
            </div>
            <div className="hidden lg:flex font-montserrat-bold text-sm md:text-md text-pink-300 lg:text-white capitalize lg:flex-row lg:justify-between py-5" name="navbar" id="navbar">
              <a href="#home" className="hover:text-lg">home</a>
              <a href="#about" className="hover:text-lg">about</a>
              <a href="#portfolios" className="hover:text-lg">portfolios</a>
              <a href="#competencies" className="hover:text-lg">competencies</a>
              <a href="#contact" className="hover:text-lg">contact</a>
            </div>
            <div className="lg:hidden my-4" name="illustration-side">
              <img src={MyPhoto} alt="hero-pic" />
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
            <img src={Illustration} alt="hero-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
