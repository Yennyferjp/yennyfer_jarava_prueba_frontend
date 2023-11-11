import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Carousel from './Components/Carousel/Carousel';
import InputsSection from './Components/InputsSection/InputsSection';
import Footer from './Components/Footer/Footer';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Home />
      <Carousel />
      <InputsSection/>
      <Footer/>
    </>
  );
};

export default AppRouter;
