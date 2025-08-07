import React from "react";
import { ArrowRight } from "lucide-react";
import Boy from "../assets/pfp.jpg";
import { Link } from "react-router-dom";

const FounderMessage = () => {
  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side: Image */}
          <div className="lg:w-[45%] w-full">
            <div className="bg-gray-900 rounded-3xl overflow-hidden p-8">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={Boy}
                  alt="AI Voice System Review"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-[55%] w-full">
            {/* Tag */}
            <div className="mb-3">
              <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
                Founder Message
              </span>
            </div>

            {/* Title */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              A Letter From Our Founder
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Welcome, <br></br>I am Taha Mahmood, the founder of Ascend AI. I
              have always been driven by a passion for innovation. Ascend AI was
              born from the belief that intelligent automation is not just the
              future — it is a necessity for businesses to thrive in an
              ever-evolving world. <br />
              <br />
              Our mission is to empower businesses of all sizes by providing AI
              voice solutions that streamline operations, boost efficiency, and
              transform customer engagement. Whether it is scheduling
              appointments, handling inquiries, or generating sales, our
              tailored AI agents are designed to work tirelessly, so you do not
              have to. <br />
              <br />
              Thank you for trusting Ascend AI to be your partner in growth.
              Together, lets build smarter, faster, and more connected
              businesses. <br></br>
              <br></br>Warm regards, <br></br>
              Taha Mahmood <br></br>
              Founder, Ascend AI
            </p>

            {/* CTA Button */}
            <Link to="/contact">
              <button className="flex items-center text-red-600 hover:text-red-500 transition-colors group text-lg">
                <span className="mr-2">Get Started</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
