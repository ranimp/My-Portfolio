import React, { useState } from 'react';
import Card from './card';
import data from '../data/projects';

const Portfolios = () => {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const showAll = displayCount === data.length;

  const handleShowMore = () => {
    setDisplayCount((prevCount) => (prevCount === initialDisplayCount ? data.length : initialDisplayCount));
  };

  return (
    <div>
      <div className="lg:container lg:mx-auto mx-4 bg-white mt-20 lg:my-32" id="portfolios" data-aos="fade-up">
        <p className="text-center text-2xl lg:text-4xl font-montserrat-bold text-pink-300">My Portfolios</p>
        <div className="text-center lg:text-xl font-montserrat-medium text-black-100 my-4">
          <p className="max-w-lg mx-auto">
            These are my project portfolios. Some of my work has been live. You can check it by yourself.
          </p>
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-8 mx-4">
          {data.slice(0, displayCount).map((item, idx) => (
            <Card link={item.link} img={item.img} alt={item.alt} git={item.git} title={item.title} key={idx} />
          ))}
        </div>
        {data.length > initialDisplayCount && (
          <div className="text-center">
            <button type="button" onClick={handleShowMore} className="bg-pink-300 px-4 py-2 text-white rounded-lg hover:bg-opacity-75 font-montserrat-medium">
              {showAll ? 'Show Less' : 'Show All'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolios;
