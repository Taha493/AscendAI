import { Link } from 'react-router-dom';
const Services = () => {
    return (
      <section className="bg-[#0a1f44] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            {/* Services Tag */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
                Services
              </span>
            </div>
  
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Example Solutions:
            </h1>
  
            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 leading-relaxed w-full">
            Ascend AI assists you in identifying and integrating cutting-edge AI solutions, guiding you seamlessly from inception to deployment and beyond.
            </p>
  
            {/* Button */}
            <Link to="/solutions">
            <button className="px-8 py-3 bg-red-600 text-black rounded-lg hover:bg-red-700 transition-colors mb-10">
              View all solutions
            </button>
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;