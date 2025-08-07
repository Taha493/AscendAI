import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { usePricing } from './PricingContext';
import { Link } from 'react-router-dom';

const PricingPlan = () => {
  const [showSetupCost, setShowSetupCost] = useState(false);
  const { minutesPrice, calculatePlanDiscount } = usePricing();

  const plans = [
    {
      name: 'Basic Plan',
      monthlyPrice: 497.00,
      setupCost: 897,
      features: [
        { name: 'Unlimited Calls', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'Analytics', included: true },
        { name: '24/7 Email & Chat Support', included: true },
        { name: 'Personalised Agents', included: true },
        { name: 'Priority Delivery', included: false },
        { name: 'Desktop App', included: false },
      ],
    },
    {
      name: 'Premium Plan',
      monthlyPrice: 147.00,
      setupCost: 1397,
      featured: true,
      features: [
        { name: 'Unlimited Calls', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'Analytics', included: true },
        { name: '24/7 Email & Chat Support', included: true },
        { name: 'Personalised Agents', included: true },
        { name: 'Priority Delivery', included: true },
        { name: 'Desktop App', included: false },
      ],
    },
    {
      name: 'Custom Requests',
      isCustom: true,
      features: [
        { name: 'Unlimited Calls', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'Analytics', included: true },
        { name: '24/7 Email & Chat Support', included: true },
        { name: 'Personalised Agents', included: true },
        { name: 'Priority Delivery', included: true },
        { name: 'Desktop App', included: true },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800 rounded-lg p-1 inline-flex">
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              !showSetupCost ? 'bg-black text-white' : 'text-gray-400'
            }`}
            onClick={() => setShowSetupCost(false)}
          >
            Monthly
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              showSetupCost ? 'bg-black text-white' : 'text-gray-400'
            }`}
            onClick={() => setShowSetupCost(true)}
          >
            Monthly - With Setup Costs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
              plan.featured 
                ? 'bg-red-950/30 border-2 border-red-600' 
                : 'bg-gray-900/50'
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {plan.name}
            </h3>

            {!plan.isCustom ? (
              <div className="mb-8">
                <div className="flex items-baseline flex-wrap">
                  <span className="text-4xl font-bold text-white">
                    ${calculatePlanDiscount(plan.monthlyPrice).toFixed(2)}
                  </span>
                  <span className="text-gray-400 ml-1">
                    + ${minutesPrice.toFixed(2)}
                  </span>
                  {showSetupCost && (
                    <span className="text-gray-400 ml-1">
                      + ${plan.setupCost}
                    </span>
                  )}
                </div>
                <div className="text-gray-400 mt-1">per month</div>
              </div>
            ) : (
              <div className="mb-8">
                <div className="text-4xl font-bold text-white">
                  Contact Us
                </div>
              </div>
            )}

            <div className="space-y-4">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-white mr-3" />
                  ) : (
                    <X className="w-5 h-5 text-gray-500 mr-3" />
                  )}
                  <span className={feature.included ? 'text-white' : 'text-gray-500'}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/contact">
            <button 
              className={`w-full py-3 rounded-lg mt-8 transition-colors ${
                plan.featured 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Get Started
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;