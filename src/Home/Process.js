import React from 'react';
import {Lightbulb, Workflow, MonitorCog} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: 'Step 1: Planning',
      description:
        'Join us for a quick 15-minute strategy session where we will dive deep into actionable steps to truly elevate your business!',
    },
    {
      id: 2,
      icon: <Workflow className="w-6 h-6 text-white" />,
      title: 'Step 2: Momentum',
      description:
        'We will return with a proven plan outlining how we will elevate your business, ensuring both increased sales and seamless automation.',
    },
    {
      id: 3,
      icon: <MonitorCog className="w-6 h-6 text-white" />,
      title: 'Step 3: Execution',
      description:
        'We get started on your custom AI solution and have it fully prepared within just one week!',
    },
  ];

  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
              Workflow
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Streamlined Process to Power Your Business with AI Solutions
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Unlock Efficiency and Growth with Our 3-Step Approach - From Strategy to Full AI Integration in Just One Week!
          </p>
        </div>

        {/* Step Cards */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group border-2 border-transparent hover:border-red-600 rounded-3xl bg-gray-900 p-8 transition-all duration-300 cursor-pointer mb-6"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="bg-black p-4 rounded-full mb-4">{step.icon}</div>

                {/* Step Title */}
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
