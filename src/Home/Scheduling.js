import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ManWorking from '../assets/appointment.png';

const Scheduling = () => {
  const features = [
    'Automatically Books Appointments',
    'Reschedules or Cancels Appointments',
    '24/7 Availability',
  ];

  return (
    <section className="bg-[#0a1f44] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 pr-8">
            {/* Tag */}
            <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-sm">
            AI Scheduling Assistant
              </span>
            </div>

            {/* Title */}
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Appointment Scheduling and Booking
            </h2>

            {/* Description */}
            <p className="text-gray-400 mb-8 leading-relaxed">
            Our AI Voice Agent simplifies appointment scheduling and booking, handling customer interactions with speed and precision. It efficiently manages calendars, confirms bookings, reschedules appointments, ensuring a seamless experience for both businesses and clients. Designed to reduce no-shows and boost productivity, it works tirelessly to keep your schedule organized and your customers satisfied.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-400">
                  <Check className="mr-3 h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <button className="flex items-center text-red-600 hover:text-red-500 transition-colors">
                <span className="mr-2">Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-900 p-4 rounded-3xl">
              <img
                src={ManWorking}
                alt="AI Voice System Review"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
