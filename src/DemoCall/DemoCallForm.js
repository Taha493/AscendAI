import React, { useState } from 'react';

const DemoCallForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    aiVoiceAvatar: '',
    foundUs: '',
    whatsapp: '',
    phoneNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#0a1f44]k min-h-screen text-gray-300 py-16">
      <div className="max-w-xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-white text-5xl font-bold text-center mb-4">Free AI Demo Call</h1>
        <p className="text-gray-400 text-center mb-12">
          We'd love for you to hear a demo of our AI Voice Agents. Please fill out this form.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block mb-2">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* AI Voice Avatar */}
          <div>
            <label className="block mb-2">AI Voice Avatar</label>
            <select
              name="aiVoiceAvatar"
              value={formData.aiVoiceAvatar}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
              required
            >
              <option value="">Select...</option>
              <option value="avatar1">Avatar 1</option>
              <option value="avatar2">Avatar 2</option>
              <option value="avatar3">Avatar 3</option>
            </select>
          </div>

          {/* How did you find us */}
          <div>
            <label className="block mb-2">How did you find us?</label>
            <select
              name="foundUs"
              value={formData.foundUs}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
              required
            >
              <option value="">Select...</option>
              <option value="google">Google</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Whatsapp Number */}
          <div>
            <label className="block mb-2">Whatsapp Number *Used For Contact*</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2">Phone Number *Used For Demo Call*</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-medium mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoCallForm;