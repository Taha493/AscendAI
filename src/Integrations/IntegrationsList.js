import React from 'react';
import { ArrowRight } from 'lucide-react';
import CTA from '../About/CTA';

const IntegrationsList = () => {
  const solutions = [
    {
      title: "Slack",
      description: "Seamless integration is the key to maximizing the potential of your digital ecosystem.",
      link: "/get-started"
    },
    {
      title: "Airtable",
      description: "Seamless integration is the key to maximizing the potential of your digital ecosystem.",
      link: "/get-started"
    },
    {
      title: "Shopify",
      description: "Seamless integration is the key to maximizing the potential of your digital ecosystem.",
      link: "/get-started"
    },
    {
      title: "GHL",
      description: "Seamless integration is the key to maximizing the potential of your digital ecosystem.",
      link: "/get-started"
    },
    {
      title: "Instagram",
      description: "Seamless integration is the key to maximizing the potential of your digital ecosystem.",
      link: "/get-started"
    },
    {
      title: "5000+ Apps",
      description: "Seamless integration is the key to maximizing the potential of your digital ecosystem.",
      link: "/get-started"
    },
  ];

  return (
    <div className="bg-[#0a1f44] min-h-screen py-16">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-900 text-gray-400 px-4 py-2 rounded-full">
          Integrations
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-white text-5xl font-bold mb-4">
          Integrate all your favourite apps
        </h2>
        <p className="text-gray-400 text-xl">
          Seamless integration is the key to maximizing the potential of your digital ecosystem.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 mt-16">
        {solutions.map((solution, index) => (
          <div 
            key={index}
            className="bg-zinc-900/50 rounded-2xl p-8 hover:bg-zinc-800/50 transition-all duration-300 border-2 border-transparent hover:border-red-600 cursor-pointer"
          >
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

export default IntegrationsList;