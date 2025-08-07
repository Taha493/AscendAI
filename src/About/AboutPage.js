import React from 'react';
import AboutUs from './AboutUs';
import FounderMessage from '../Home/FounderMessage';
import Stats from './Stats';
import CTA from './CTA';

const AboutPage = () => {
  return (
    <div className="bg-[#0a1f44] min-h-screen">
     <AboutUs/>
     <FounderMessage/>
      <Stats/>
      <CTA/>
    </div>
  );
};

export default AboutPage;