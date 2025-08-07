import React from 'react';
import { ArrowRight, House, ShoppingCart, Stethoscope, Utensils } from 'lucide-react';
import CTA from '../About/CTA';

const SolutionsList = () => {
  const solutions = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-red-600" />,
      title: "E-commerce",
      description: "AI Voice System Solutions designed for E-commerce businesses to enhance sales and customer support.",
      link: "/contact"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-red-600" />,
      title: "Hospitals and clinics",
      description: "AI Voice System Solutions designed for Hospitals and clinics to book appointments and more!",
      link: "/contact"
    },
    {
        icon: <Utensils className="w-8 h-8 text-red-600" />,
        title: "Restaurants",
        description: "AI Voice System Solutions designed for Restaurant businesses to enhance booking and more!",
        link: "/contact"
    },
    {
        icon: <House className="w-8 h-8 text-red-600" />,
        title: "Real Estate",
        description: "AI Voice System Solutions designed for real estate agents to book meetings (inbound and outbound) and handle questions!",
        link: "/contact"
    }
  ];

  return (
    <div className="bg-[#0a1f44] min-h-screen py-16">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-900 text-gray-400 px-4 py-2 rounded-full">
          Example Solutions
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-white text-5xl font-bold mb-4">
          Example AI Voice Solutions for any niche
        </h2>
        <p className="text-gray-400 text-xl">
          View the perfect AI Voice System for your specific niche!
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 mt-16">
        {solutions.map((solution, index) => (
          <div 
            key={index}
            className="bg-zinc-900/50 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors"
          >
            <div className="bg-red-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              {solution.icon}
            </div>
            
            <h3 className="text-white text-2xl font-semibold mb-4">
              {solution.title}
            </h3>
            
            <p className="text-gray-400 mb-6">
              {solution.description}
            </p>
            
            <a 
              href={solution.link}
              className="inline-flex items-center text-red-600 hover:text-red-500 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
      <CTA/>
    </div>
  );
};

export default SolutionsList;