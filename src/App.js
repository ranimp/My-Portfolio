import React, { useEffect } from 'react';
import AOS from 'aos';
import Home from './pages/home-page';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-white">
      <Home />
    </div>
  );
};

export default App;
