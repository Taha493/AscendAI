import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    whatsapp: '',
    businessName: '',
    minutesPerMonth: '',
    aiPlan: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.workEmail,
      whatsapp_number: formData.whatsapp,
      business_name: formData.businessName,
      minutes_per_month: formData.minutesPerMonth,
      ai_plan: formData.aiPlan,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_30xrgdf',      // Replace with your Service ID
        'template_2xff1cc',     // Replace with your Template ID
        templateParams,
        'W1iI3pzdYo46y-_Qm'     // Replace with your Public Key
      );

      toast.success('Message sent successfully!', {
        position: 'top-center',
        autoClose: 3000,
      });

      setFormData({
        fullName: '',
        workEmail: '',
        whatsapp: '',
        businessName: '',
        minutesPerMonth: '',
        aiPlan: '',
        message: ''
      });

      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: 'top-center',
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="bg-[#0a1f44] min-h-screen text-gray-300 py-16">
      <ToastContainer />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-white text-5xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-gray-400 text-center mb-12">We'd love to hear from you. Please fill out this form.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              label="Work Email"
              name="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={handleChange}
            />
            <InputField
              label="Whatsapp Number"
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange}
            />
            <InputField
              label="Business Name"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
            />
            <InputField
              label="Minutes Per Month"
              name="minutesPerMonth"
              type="text"
              value={formData.minutesPerMonth}
              onChange={handleChange}
            />
            <div>
              <label className="block mb-2">AI Plan</label>
              <select
                name="aiPlan"
                value={formData.aiPlan}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select...</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-red-600 text-white py-4 rounded-lg font-medium ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type, value, onChange }) => (
  <div>
    <label className="block mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
);

export default ContactForm;
