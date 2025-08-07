import React from 'react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: "5000+",
      description: "Integrations"
    },
    {
      id: 2,
      number: "24/7",
      description: "Communication"
    },
    {
      id: 3,
      number: "100%",
      description: "Analytics"
    },
    {
      id: 4,
      number: "CRM",
      description: "Custom CRM integration"
    }
  ];

  return (
    <section className="bg-[#0a1f44] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-gray-900 bg-opacity-50 rounded-2xl p-6 text-center transition-transform duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-white text-3xl font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400 text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;