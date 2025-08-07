import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import IronMan from '../assets/anybusiness.png';

const AnyBusiness = () => {
  const features = [
    'Fit For Any Business ',
    'Boosts Efficiency',
    '24/7 Availability'
  ];

  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side: Text Content */}
          <div className="lg:w-[55%] w-full">
            {/* Tag */}
            <div className="mb-3">
              <span className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                Any Business
              </span>
            </div>

            {/* Title */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart AI Voice Agents Tailored for Every Industry
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Our AI Voice Agents are versatile and adaptable for any business, whether it's a real estate agency, dental clinic, or beyond. They handle tasks like scheduling, answering inquiries, and managing customer interactions, all tailored to your industry. Designed to boost efficiency and enhance customer satisfaction, our voice agents provide seamless, professional service every time.
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

          {/* Right Side: Image */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-900 p-4 rounded-3xl">
              <img
                src={IronMan}
                alt="AI Voice System Review"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyBusiness;