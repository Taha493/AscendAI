import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const features = [
    "AI Powered",
    "24/7 support",
    "Lifetime updates"
  ];

  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Elevate your business with AscendAI
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12">
            Seize the Opportunity to Transform Your Business! Enhance engagement, drive conversions, and amplify results with AI Voice Solutions for any niche!
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-white"
              >
                <CheckCircle className="w-5 h-5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/solutions">
            <button className="px-8 py-3 bg-red-600 text-black rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto">
              Our Services
            </button>
            </Link>
            <Link to="/contact">
            <button className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;