import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Carousel from './Components/Carousel/Carousel';
import InputsSection from './Components/InputsSection/InputsSection';

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Home />
      <Carousel />
      <InputsSection/>

    </div>
  );
};

export default AppRouter;
