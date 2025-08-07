import { Network, ShieldCheck, Blend } from 'lucide-react';

const AboutUs = () => {
  const steps = [
    {
      id: 1,
      icon: <Network className="w-6 h-6 text-white" />,
      title: 'Our Vision',
      description:
        'At Ascend AI, our vision is to revolutionize customer interactions by making advanced AI automation accessible, intuitive, and impactful for every business. We aim to empower companies of all sizes with AI-driven solutions that enhance customer engagement, boost efficiency, and drive sustainable growth.',
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: 'Our Approach',
      description:
        'We combine cutting-edge AI technology with a deep understanding of your business goals to create solutions that deliver real value. From personalized strategy sessions to seamless implementation, we partner with you every step of the way. Our AI voice agents are designed to adapt to your unique needs, automating key processes while enhancing customer experience.',
    },
    {
      id: 3,
      icon: <Blend className="w-6 h-6 text-white" />,
      title: 'Our Advantage',
      description: (
        <>
          <p><strong>Versatile Solutions for Every Industry:</strong> Whether you run a real estate agency, dental clinic, or any other business, our AI voice agents adapt to your specific needs.</p> <br></br>
          <p><strong>Seamless Automation:</strong> Streamline daily operations with AI that manages customer support, scheduling, and more.</p> <br></br>
          <p><strong>Sales-Driven Strategy:</strong> Our voice agents do not just serve customers — they create opportunities, driving sales and conversions.</p> <br></br>
          <p><strong>Fast, Proven Results:</strong> We deliver fully customized AI solutions in as little as one week, ready to transform your business.</p>
        </>
      )
    }
    
  ];

  return (
    <section className="bg-[#0a1f44] py-12">
      <div className="container mx-auto px-4">
        {/* Header Content */}
        <div className="text-center mb-16">
          {/* Services Tag */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
              About us
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Who we are and why <br /> we're doing this
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12">
            Learn about our mission, our role in the tech landscape, and the values that <br />
            drive us to innovate and empower businesses.
          </p>
        </div>

        {/* Step Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group border-2 border-transparent hover:border-red-600 rounded-3xl bg-gray-900 p-8 transition-all duration-300 cursor-pointer h-full"
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div className="bg-black p-4 rounded-full mb-4">{step.icon}</div>

                {/* Step Title */}
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-lg text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;