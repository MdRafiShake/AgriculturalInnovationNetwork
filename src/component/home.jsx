import React from 'react';
import Hero from "./Hero";
// import Localweather from "./Localweather";
import SoilReport from "./SoilReport";
import CropSuggestion from "./CropSuggestion";
import HarvestingTips from './HarvestingTips';
   


const home = () => {
  return (
    <div>
      <Hero />
      {/* <Localweather /> */}
      <SoilReport/>
      <CropSuggestion/>
      <HarvestingTips/>
    </div>
  );
}

export default home;
