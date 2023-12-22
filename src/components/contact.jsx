import React from 'react';

const Contact = () => (
  <div>
    <div className="lg:container lg:mx-auto mx-4 bg-white my-28 lg:my-32" id="contact" data-aos="fade-up">
      <p className="text-center text-2xl lg:text-4xl font-montserrat-bold text-pink-300">That’s All About Me, Feel Free to Say Hi!</p>
      <div className="text-center lg:text-xl font-montserrat-medium text-black-100 my-4">
        <p className="max-w-xl mx-auto">
          Just shot your amazing ideas to my email or just catching up with me. I&#39;m very welcome
          for everyone.
        </p>
      </div>
      <div className="my-4 font-montserrat-medium text-black-100 bg-pink-100 w-80 mx-auto px-2 py-4 rounded-lg">
        <div className="grid grid-cols-12 items-center">
          <img src="/assets/mail-icon.png" alt="gmail" width="40" className="col-span-2 mx-2" style={{ fontColor: '#FF8B8B' }} />
          <a className="col-span-10 mx-2 hover:underline" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=ranimeliyanaputri@gmail.com" target="_blank" rel="noreferrer">
            ranimeliyanaputri@gmail.com
          </a>
        </div>
        <div className="grid grid-cols-12 items-center mt-4">
          <img src="/assets/Linkedin.svg" alt="linkedin" width="40" className="col-span-2 mx-2" />
          <a className="col-span-10 mx-2 hover:underline" href="https://www.linkedin.com/in/ranimp" target="_blank" rel="noreferrer">
            Rani Meliyana Putri
          </a>
        </div>
        <div className="grid grid-cols-12 items-center mt-4">
          <img src="/assets/github.svg" alt="linkedin" width="40" className="col-span-2 mx-2" />
          <a className="col-span-10 mx-2 hover:underline" href="https://github.com/ranimp" target="_blank" rel="noreferrer">
            ranimp
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
