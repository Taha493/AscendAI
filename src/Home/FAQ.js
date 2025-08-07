import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openId, setOpenId] = useState(''); // Initialize with third question open

  const faqData = [
    {
      id: 'faq1',
      question: 'What tasks can AI voice agents handle for my business?',
      answer: 'AI voice agents can perform a wide range of tasks, including answering customer inquiries, scheduling appointments, processing orders, providing product recommendations, and handling basic troubleshooting. They can also gather feedback and send personalized follow-up messages to enhance customer engagement.'
    },
    {
      id: 'faq2',
      question: 'Will AI voice agents replace my human customer support team?',
      answer: 'AI voice agents are best used to complement human teams rather than replace them. They handle repetitive tasks and basic queries, freeing up human agents to focus on complex, personalized, and high-value interactions. This leads to improved efficiency, better customer service, and a more productive workforce.'
    },
    {
      id: 'faq3',
      question: 'What payment methods do you accept, and how can I ensure I am not getting scammed?',
      answer: 'We accept secure payment methods including credit/debit cards, bank transfers, and trusted online payment gateways like PayPal. To avoid scams, always verify that you are interacting with official communication channels from our company. avoid sharing sensitive payment information through unverified emails or messages. For any concerns, contact our support team directly to confirm payment details before proceeding.'
    }
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#0a1f44] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently asked questions.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Your Questions, Answered. Explore our comprehensive FAQ section to gain insights into the functionality, customization, and support.
          </p>
          <Link to="/contact">
          <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Get Started
          </button>
          </Link>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="bg-gray-900 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg font-medium">
                    {faq.question}
                  </h3>
                  <button className="text-white">
                    {openId === faq.id ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </button>
                </div>
                
                {openId === faq.id && (
                  <div className="mt-4 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;