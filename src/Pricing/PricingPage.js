import React from 'react';
import CustomPricing from './CustomPricing';
import PricingPlan from './PricingPlan';
import Features from './Features';
import FAQ from '../Home/FAQ';
import CTA from '../About/CTA';
import { PricingProvider } from './PricingContext';

const PricingPage = () => {
  return (
    <div className="bg-[#0a1f44] min-h-screen">
    <PricingProvider>
    <CustomPricing/>
    <PricingPlan/>
    </PricingProvider>
     <Features/>
     <FAQ/>
     <CTA/>
    </div>
  );
};

export default PricingPage;