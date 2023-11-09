import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Carousel from './Components/Carousel/Carousel';

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Home />
      <Carousel />
    </div>
  );
};

export default AppRouter;
