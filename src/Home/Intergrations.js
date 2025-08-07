import SocialMedia from '../assets/Social Media.png';
import Shopify from '../assets/Shopify.png';

const Integrations = () => {
  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
              Integrations
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Seamless integration with Shopify and all your favourite apps
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Explore a Suite of all your favourite apps for integrations.
          </p>

          {/* Button */}
          <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            View all integrations
          </button>
        </div>

        {/* Integration Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Shopify Integration Card */}
          <div className="rounded-3xl overflow-hidden">
            {/* Text Content with Darker Background */}
            <div className="bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Shopify Integration
              </h3>
              <p className="text-gray-400">
                Integrate Directly with Shopify, to trigger direct calls, <br></br> instantly!
              </p>
            </div>
            {/* Image Container with rounded bottom */}
            <div className="bg-gray-800 rounded-b-3xl">
              <img
                src={Shopify}
                alt="Shopify Integration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* General Integration Card */}
          <div className="rounded-3xl overflow-hidden">
            {/* Text Content with Darker Background */}
            <div className="bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Integration
              </h3>
              <p className="text-gray-400">
                Don't worry if your system is different, we're integrated with thousands of softwares!
              </p>
            </div>
            {/* Image Container with rounded bottom */}
            <div className="bg-gray-800 rounded-b-3xl">
              <img
                src={SocialMedia}
                alt="Integration Apps"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
