import { usePricing } from './PricingContext';

const CustomPricing = () => {
  const { minutes, setMinutes, referrals, setReferrals } = usePricing();
  const minuteMarkers = [600, 3300, 6120, 9000, 12000, 15000];

  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
              Custom Pricing
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transparent Solutions,<br />Custom Plans
          </h2>

          <p className="text-lg text-gray-400 mb-16">
            Discover the Right Fit for Your Budget with AscendAI Pricing
          </p>

          <h3 className="text-3xl font-bold text-white mb-12">
            Build Your Own Plan
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <label className="text-white">Minutes required:</label>
              <input 
                type="number" 
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-20 px-3 py-1 bg-white rounded-lg text-black text-center"
              />
              <button className="text-white underline">
                I'm not sure
              </button>
            </div>

            <div className="relative">
              <input
                type="range"
                min="600"
                max="15000"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              
              <div className="flex justify-between mt-2">
                {minuteMarkers.map((marker) => (
                  <span key={marker} className="text-gray-400">
                    {marker}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-white whitespace-nowrap">
              Referrals (each gives 20% off base price, max 3):
            </label>
            <select
              value={referrals}
              onChange={(e) => setReferrals(Number(e.target.value))}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPricing;