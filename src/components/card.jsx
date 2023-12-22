import React from 'react';

const Card = ({
  link, img, alt, title, git,
}) => (
  <div className="card w-full lg:w-1/4 bg-pink-100 shadow-xl rounded-xl hover:-translate-y-1 hover:scale-110 max-h-72">
    <a href={link} className="flex flex-col justify-center items-center">
      <figure className="p-6 h-40">
        <img src={img} alt={alt} className="rounded-lg lg:w-full h-32" />
      </figure>
      <div className="card-body items-center text-center text-pink-300 font-montserrat-bold pt-2 hover:underline px-4 mb-4 lg:mb-0 lg:h-16">
        <p>{title}</p>
      </div>
    </a>
    <div className="card-actions mb-4 flex gap-2 justify-center">
      {git && (
        <a href={git} target="_blank" className="text-sm flex justify-center hover:text-lg hover:text-black-100" rel="noreferrer">
          <img src="/assets/github.svg" alt="github" className="w-8 hover:opacity-50" />
        </a>
      )}
      {/* <a href={git} target="_blank" className="text-sm flex justify-center hover:text-lg hover:text-black-100" rel="noreferrer">
        <img src="/assets/info.png" alt="detail" className="w-8 hover:opacity-50" />
      </a> */}
    </div>
  </div>
);

export default Card;
