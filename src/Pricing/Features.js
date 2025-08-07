// import SocialMedia from '../assets/Social Media.png';
// import Shopify from '../assets/Shopify.png';
import Analytics from '../assets/Analytics.png';
import Insights from '../assets/Insights.png';

const Features = () => {
  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
              Features
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Cutting-edge Features Designed to Boost Efficiency
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Discover a Seamless Experience with AscendAI - Boosting Sales, Efficiency, <br></br> 
            and Retargeting in Every Call.
          </p>
        </div>

        {/* Integration Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Shopify Integration Card */}
          <div className="rounded-3xl overflow-hidden">
            {/* Text Content with Darker Background */}
            <div className="bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                AI-Powered Insights
              </h3>
              <p className="text-gray-400">
                Get AI-driven recommendations to improve your processes and make data-backed decisions.
              </p>
            </div>
            {/* Image Container with fixed height */}
            <div className="bg-gray-800 rounded-b-3xl h-64 overflow-hidden">
              <img
                src={Insights}
                alt="Shopify Integration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* General Integration Card */}
          <div className="rounded-3xl overflow-hidden">
            <div className="bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                User Analytics
              </h3>
              <p className="text-gray-400">
                Get all the related analytics like, total calls, total sales, total minutes, and all the data.
              </p>
            </div>
            <div className="bg-gray-800 rounded-b-3xl h-64 overflow-hidden">
              <img
                src={Analytics}
                alt="Integration Apps"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
{/* 
          <div className="rounded-3xl overflow-hidden">
            <div className="bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Integration
              </h3>
              <p className="text-gray-400">
                Don't worry if your system is different, we're integrated with thousands of softwares!
              </p>
            </div>
            <div className="bg-gray-800 rounded-b-3xl h-64 overflow-hidden">
              <img
                src={SocialMedia}
                alt="Integration Apps"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <div className="bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Shopify Integration
              </h3>
              <p className="text-gray-400">
                Integrate Directly with Shopify, to trigger direct calls, <br></br>instantly!
              </p>
            </div>
            <div className="bg-gray-800 rounded-b-3xl h-64 overflow-hidden">
              <img
                src={Shopify}
                alt="Integration Apps"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Features;