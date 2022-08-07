import React from 'react';
import Jumbotron from '../components/jumbotron';
import About from '../components/about';
import Portfolios from '../components/portfolios';
import Competencies from '../components/competencies';
import Contact from '../components/contact';

const Homepage = () => (
  <div className="bg-white">
    <Jumbotron />
    <About />
    <Portfolios />
    <Competencies />
    <Contact />
  </div>
);

export default Homepage;
