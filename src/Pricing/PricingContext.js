import { createContext, useContext, useState } from 'react';

const PricingContext = createContext();

export function usePricing() {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
}

export function PricingProvider({ children }) {
  const [minutes, setMinutes] = useState(600);
  const [referrals, setReferrals] = useState(0);

  const calculateMinutesPrice = (mins) => {
    if (mins <= 600) return 300;
    return mins * 0.4;
  };

  const calculatePlanDiscount = (basePrice) => {
    const discountPercentage = referrals * 0.2; // 20% per referral
    return basePrice * (1 - discountPercentage);
  };

  const minutesPrice = calculateMinutesPrice(minutes);

  const value = {
    minutes,
    setMinutes,
    referrals,
    setReferrals,
    minutesPrice,
    calculatePlanDiscount
  };

  return (
    <PricingContext.Provider value={value}>
      {children}
    </PricingContext.Provider>
  );
}