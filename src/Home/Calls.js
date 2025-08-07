import Boy from '../assets/boy.png';
const Calls = () => {
    return (
      <section className="bg-[#0a1f44] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            {/* Services Tag */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                Calls
              </span>
            </div>
  
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 pr-4">
            24/7 Unlimited Calls: Guaranteed to get sales
            </h2>
  
            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 leading-relaxed w-full">
            No call limit for us, unlimited calls as many as you wants. Sales are guaranteed.
            </p>
          </div>
  
          {/* Image Container */}
          <div className="w-full bg-gray-900/50 rounded-3xl overflow-hidden py-12">
        <div className="max-w-2xl mx-auto px-8">
            <div className="rounded-2xl overflow-hidden">
            <img 
                src={Boy} 
                alt="AI Voice System Review"
                className="w-80 h-80 object-cover mx-auto rounded-2xl" // Added rounded-2xl for rounded borders
            />
            </div>
        </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Calls;