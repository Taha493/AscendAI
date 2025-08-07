import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Robot from '../assets/customersupport.png';

const CustomerSupport = () => {
  const features = [
    'Handles Customer FAQs',
    '24/7 Customer Support',
    'Seamless Management'
  ];

  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side: Image */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-900 p-4 rounded-3xl">
              <img
                src={Robot}
                alt="AI Voice System Review"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-[55%] w-full">
            {/* Tag */}
            <div className="mb-3">
              <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
                Customer Support
              </span>
            </div>

            {/* Title */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Enhance Customer Experience with Our AI-Powered Support Team
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Our AI Customer Team seamlessly manages every aspect of customer support across dedicated departments, including Customer Support, Troubleshooting, and Feedback. Beyond providing exceptional service, it also drives sales when opportunities arise. For instance, if a customer inquires about a product three times, the AI proactively recommends it by sending comprehensive product details and a personalized discount code via email.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-400">
                  <Check className="mr-3 h-5 w-5 text-gray-400" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <button className="flex items-center text-red-600 hover:text-red-500 transition-colors group text-lg">
                <span className="mr-2">Get Started</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;