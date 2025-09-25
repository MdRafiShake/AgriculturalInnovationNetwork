import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/Hero';
import Localweather from './component/Localweather';
import SoilReport from './component/Soilreport';
import CropSuggestion from './component/CropSuggestion';
import HarvestTips from './component/HarvestingTips';
import Footer from './component/footer';
const App = () => {
  return (
    <div className='bg-gradient-to-br from-lime-100 to-lime-300 w-full min-h-screen '>
      <Navbar />
      <Hero />
      <Localweather />
      <SoilReport/>
      <CropSuggestion/>
      <HarvestTips/>
      <Footer />
    </div>
  );
}

export default App;
