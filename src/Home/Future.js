import { Link } from 'react-router-dom';
import DashboardImage from '../assets/dashboard-image.png';

const Future = () => {
  return (
    <section className="bg-[#0a1f44] flex items-center justify-center py-12">
      {/* Text Content Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
              The Future of Businesses
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Breathe Life into Your Business With Ascend AI.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Elevate productivity, innovation, and growth with our Advanced AI Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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

        {/* Dashboard Image Section */}
        <div className="max-w-[95%] mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={DashboardImage}
              alt="AscendAI Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;